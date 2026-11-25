import type { FaultEffect } from './motor'

/** Fault definitions per the DYSRUPT fault-registry model (SPEC §8.1). */
export interface FaultDef {
  id: string
  name: string
  category: 'sensor' | 'motor' | 'control' | 'mechanical' | 'power'
  description: string
  effect: FaultEffect
}

export const DC_MOTOR_FAULTS: FaultDef[] = [
  {
    id: 'enc-noise', name: 'Noisy encoder', category: 'sensor',
    description: 'Gaussian noise on the speed measurement — controller chases ghosts.',
    effect: { encoderNoise: 4 },
  },
  {
    id: 'enc-bias', name: 'Encoder bias +15 rad/s', category: 'sensor',
    description: 'Reading offset — the controller settles at the wrong real speed.',
    effect: { encoderBias: 15 },
  },
  {
    id: 'enc-freeze', name: 'Frozen encoder', category: 'sensor',
    description: 'Measurement stuck — integrator winds up, motor runs away.',
    effect: { encoderFreeze: true },
  },
  {
    id: 'bearing-wear', name: 'Bearing wear (×6 friction)', category: 'mechanical',
    description: 'Friction rises → more current → more heat → lower speed.',
    effect: { frictionMult: 6 },
  },
  {
    id: 'demag', name: 'Demagnetized rotor (−40% Kt)', category: 'motor',
    description: 'Weaker torque constant — motor can no longer reach setpoint.',
    effect: { torqueMult: 0.6 },
  },
  {
    id: 'blockage', name: 'Mechanical blockage', category: 'mechanical',
    description: 'Large external load torque — current spikes toward stall.',
    effect: { loadTorque: 0.08 },
  },
  {
    id: 'psu-droop', name: 'Weak power supply (−6 V)', category: 'power',
    description: 'Lost supply headroom — controller saturates, speed capped.',
    effect: { supplyDroop: 6 },
  },
  {
    id: 'cooling-fail', name: 'Cooling failure', category: 'motor',
    description: 'Winding temperature climbs continuously — watch the thermal trace.',
    effect: { heatRate: 3 },
  },
]
