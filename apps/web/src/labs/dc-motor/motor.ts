/**
 * DC motor simulation core — pure TypeScript, no DOM, unit-testable.
 *
 * Armature-controlled DC motor, three coupled first-order ODEs:
 *   electrical: L·di/dt  = V − R·i − Ke·ω
 *   mechanical: J·dω/dt  = Kt·i − b·ω − τ_load
 *   thermal:    C·dT/dt  = i²·R − h·(T − T_amb)
 *
 * Faults act by mutating the effective parameter set — bearing wear raises b,
 * demagnetization lowers Kt — which is how real faults propagate: they change
 * the plant, the plant changes every downstream signal.
 */

export interface MotorParams {
  R: number      // armature resistance, Ω
  L: number      // armature inductance, H
  Kt: number     // torque constant, N·m/A
  Ke: number     // back-EMF constant, V·s/rad
  J: number      // rotor inertia, kg·m²
  b: number      // viscous friction, N·m·s
  Vmax: number   // supply / driver saturation, V
  Cth: number    // thermal capacitance, J/°C
  h: number      // thermal conductance to ambient, W/°C
  Tamb: number   // ambient temperature, °C
  tauLoad: number // external load torque, N·m
}

export const DEFAULT_MOTOR: MotorParams = {
  R: 2.0, L: 0.01, Kt: 0.04, Ke: 0.04, J: 5e-5,
  b: 2e-4, Vmax: 24, Cth: 20, h: 0.8, Tamb: 25, tauLoad: 0,
}

export interface PIDParams {
  Kp: number; Ki: number; Kd: number
}

export interface Telemetry {
  t: number
  omega: number       // true shaft speed, rad/s
  omegaMeas: number   // encoder reading (faults can corrupt this)
  current: number     // armature current, A
  temp: number        // winding temperature, °C
  voltage: number     // applied armature voltage, V
  setpoint: number
}

export interface FaultEffect {
  frictionMult?: number   // ×b — bearing wear
  torqueMult?: number     // ×Kt — demagnetization / winding damage
  loadTorque?: number     // additional τ_load — blockage, increased load
  supplyDroop?: number    // volts lost — bad PSU / wiring
  encoderNoise?: number   // σ of additive gaussian noise, rad/s
  encoderBias?: number    // constant offset, rad/s
  encoderFreeze?: boolean // output stuck at last value
  heatRate?: number       // extra °C/s — failed cooling
}

const gauss = () => {
  // Box–Muller
  let u = 0
  while (u === 0) u = Math.random()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random())
}

export class DCMotorSim {
  params: MotorParams
  pid: PIDParams = { Kp: 0.3, Ki: 4.0, Kd: 0.001 }
  setpoint = 80          // rad/s
  closedLoop = true

  private i = 0          // armature current
  private omega = 0      // shaft speed
  private temp = 25      // winding temp
  private intE = 0       // PID integrator
  private prevE = 0
  private frozenMeas: number | null = null
  private lastMeas = 0
  private voltage = 0
  t = 0

  private faults: FaultEffect[] = []

  constructor(params: Partial<MotorParams> = {}) {
    this.params = { ...DEFAULT_MOTOR, ...params }
    this.temp = this.params.Tamb
  }

  /** Effective parameters after all active faults are applied. */
  private effective() {
    const p = { ...this.params }
    const f: Required<FaultEffect> = {
      frictionMult: 1, torqueMult: 1, loadTorque: 0, supplyDroop: 0,
      encoderNoise: 0, encoderBias: 0, encoderFreeze: false, heatRate: 0,
      ...Object.assign({}, ...this.faults),
    }
    p.b *= f.frictionMult
    p.Kt *= f.torqueMult
    p.tauLoad += f.loadTorque
    p.Vmax = Math.max(0, p.Vmax - f.supplyDroop)
    return { p, f }
  }

  addFault(e: FaultEffect): number { return this.faults.push(e) - 1 }
  clearFault(idx: number) { this.faults.splice(idx, 1) }
  clearFaults() { this.faults = []; this.frozenMeas = null }

  private controller(omegaMeas: number, dt: number): number {
    if (!this.closedLoop) return this.params.Vmax
    const e = this.setpoint - omegaMeas
    this.intE += e * dt
    const dE = (e - this.prevE) / dt
    this.prevE = e
    const { Kp, Ki, Kd } = this.pid
    let u = Kp * e + Ki * this.intE + Kd * dE
    const Vmax = this.effective().p.Vmax
    // clamp + conditional anti-windup
    if (u > Vmax) { u = Vmax; this.intE -= e * dt }
    if (u < 0) { u = 0; this.intE -= e * dt }
    return u
  }

  /** Advance the plant by dt seconds (caller picks substep size). */
  step(dt: number) {
    const { p, f } = this.effective()
    // measurement path — faults corrupt what the controller sees
    let meas: number
    if (f.encoderFreeze) {
      if (this.frozenMeas === null) this.frozenMeas = this.lastMeas
      meas = this.frozenMeas
    } else {
      this.frozenMeas = null
      meas = this.omega + f.encoderBias + f.encoderNoise * gauss()
    }
    this.lastMeas = meas

    const V = this.controller(meas, dt)
    // Euler integration — substeps are ~0.1–0.5 ms, stable for these time constants
    const di = (V - p.R * this.i - p.Ke * this.omega) / p.L
    const dw = (p.Kt * this.i - p.b * this.omega - p.tauLoad) / p.J
    const dT = (this.i * this.i * p.R - p.h * (this.temp - p.Tamb)) / p.Cth + f.heatRate
    this.i += di * dt
    this.omega += dw * dt
    this.temp += dT * dt
    this.voltage = V
    this.t += dt
  }

  telemetry(): Telemetry {
    return {
      t: this.t, omega: this.omega, omegaMeas: this.lastMeas,
      current: this.i, temp: this.temp, voltage: this.voltage,
      setpoint: this.setpoint,
    }
  }

  reset() {
    this.i = this.omega = 0
    this.temp = this.params.Tamb
    this.intE = this.prevE = this.t = 0
    this.frozenMeas = null
  }
}
