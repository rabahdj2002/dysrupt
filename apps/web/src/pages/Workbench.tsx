import { useEffect, useRef, useState } from 'react'
import { DCMotorSim, type Telemetry } from '../labs/dc-motor/motor'
import { DC_MOTOR_FAULTS } from '../labs/dc-motor/faults'
import Scope, { type Trace } from '../labs/dc-motor/Scope'

interface Event {
  t: number
  msg: string
  kind: 'fault' | 'clear' | 'info'
}

export default function Workbench() {
  const sim = useRef(new DCMotorSim())
  const [running, setRunning] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [active, setActive] = useState<Record<string, number>>({})
  const [events, setEvents] = useState<Event[]>([])
  const [tele, setTele] = useState<Telemetry>(sim.current.telemetry())
  const [, force] = useState(0)

  // real-time loop: fixed physics substeps inside wall-clock time
  useEffect(() => {
    let raf: number
    let last = performance.now()
    const tick = () => {
      raf = requestAnimationFrame(tick)
      const now = performance.now()
      if (running) {
        let dt = Math.min(0.05, (now - last) / 1000) * speed
        while (dt > 0) {
          const h = Math.min(0.0005, dt)
          sim.current.step(h)
          dt -= h
        }
        setTele(sim.current.telemetry())
      }
      last = now
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [running, speed])

  const log = (msg: string, kind: Event['kind'] = 'info') =>
    setEvents((e) => [{ t: sim.current.t, msg, kind }, ...e].slice(0, 30))

  const toggleFault = (id: string) => {
    if (active[id] !== undefined) {
      sim.current.clearFault(active[id])
      const next = { ...active }
      delete next[id]
      setActive(next)
      log(`cleared: ${id}`, 'clear')
    } else {
      const def = DC_MOTOR_FAULTS.find((f) => f.id === id)!
      const idx = sim.current.addFault(def.effect)
      setActive({ ...active, [id]: idx })
      log(`fault injected: ${def.name}`, 'fault')
    }
  }

  const traces: Trace[] = [
    { label: 'ω meas', color: '#b8f34a', unit: ' rad/s', get: () => tele.omegaMeas, scale: (v) => v / 120 },
    { label: 'ω true', color: '#35b9d8', unit: '', get: () => tele.omega, scale: (v) => v / 120 },
    { label: 'sp', color: '#5a6690', unit: '', get: () => tele.setpoint, scale: (v) => v / 120 },
    { label: 'I', color: '#ffb547', unit: ' A', get: () => tele.current, scale: (v) => v / 8 },
    { label: 'T', color: '#f05252', unit: '°C', get: () => tele.temp, scale: (v) => v / 120 },
  ]

  const slider = (label: string, v: number, min: number, max: number, step: number, set: (x: number) => void, fmt = (x: number) => x.toFixed(3)) => (
    <label className="block">
      <div className="flex justify-between text-[11px]">
        <span className="text-muted">{label}</span>
        <span className="mono text-accent2">{fmt(v)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={v}
        onChange={(e) => set(+e.target.value)} className="w-full accent-[#b8f34a]" />
    </label>
  )

  return (
    <div className="flex h-full flex-col">
      {/* toolbar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-bg2 px-4 py-2.5">
        <span className="mr-2 font-semibold">DC Motor Lab</span>
        <button onClick={() => setRunning(!running)}
          className={`rounded-md px-3 py-1.5 text-xs font-semibold ${running ? 'bg-warn/20 text-warn' : 'bg-accent text-bg'}`}>
          {running ? 'Pause' : 'Run'}
        </button>
        <button onClick={() => { sim.current.reset(); setEvents([]); log('reset', 'info') }}
          className="rounded-md border border-white/15 px-3 py-1.5 text-xs text-muted hover:text-text">
          Reset
        </button>
        <div className="ml-3 flex items-center gap-2 text-xs text-muted">
          speed
          {[0.5, 1, 2, 4].map((s) => (
            <button key={s} onClick={() => setSpeed(s)}
              className={`mono rounded px-2 py-1 ${speed === s ? 'bg-panel text-accent' : 'hover:bg-panel/60'}`}>
              {s}×
            </button>
          ))}
        </div>
        <div className="mono ml-auto text-[11px] text-muted">t = {tele.t.toFixed(1)} s</div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* left — disruption panel */}
        <aside className="w-64 shrink-0 overflow-y-auto border-r border-white/10 bg-bg2 p-4">
          <h3 className="mono text-[10px] font-semibold uppercase tracking-widest text-fail">
            Disruption panel
          </h3>
          <p className="mt-1 text-[11px] text-muted">Inject a fault — the plant changes, not just a label.</p>
          <div className="mt-3 space-y-1.5">
            {DC_MOTOR_FAULTS.map((f) => (
              <button key={f.id} onClick={() => toggleFault(f.id)} title={f.description}
                className={`w-full rounded-lg border px-3 py-2 text-left text-xs transition-colors ${
                  active[f.id] !== undefined
                    ? 'border-fail bg-fail/15 text-fail'
                    : 'border-white/10 bg-panel text-muted hover:border-white/25 hover:text-text'
                }`}>
                <span className="font-medium">{f.name}</span>
                <span className="mono ml-1 text-[9px] uppercase opacity-70">{f.category}</span>
              </button>
            ))}
          </div>
          <button onClick={() => { sim.current.clearFaults(); setActive({}); log('all faults cleared', 'clear') }}
            className="mt-3 w-full rounded-lg border border-white/15 py-1.5 text-xs text-muted hover:text-text">
            Clear all faults
          </button>

          {/* event log */}
          <h3 className="mono mt-6 text-[10px] font-semibold uppercase tracking-widest text-accent2">Timeline</h3>
          <div className="mt-2 space-y-1">
            {events.length === 0 && <p className="text-[11px] text-muted">No events yet.</p>}
            {events.map((e, i) => (
              <div key={i} className={`mono text-[10px] ${e.kind === 'fault' ? 'text-fail' : e.kind === 'clear' ? 'text-accent' : 'text-muted'}`}>
                [{e.t.toFixed(1)}s] {e.msg}
              </div>
            ))}
          </div>
        </aside>

        {/* center — scope + telemetry */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 p-4">
            <Scope traces={traces} />
          </div>
          <div className="grid grid-cols-5 gap-2 border-t border-white/10 px-4 py-3">
            {[
              { l: 'ω true', v: tele.omega.toFixed(1), u: 'rad/s' },
              { l: 'ω meas', v: tele.omegaMeas.toFixed(1), u: 'rad/s' },
              { l: 'current', v: tele.current.toFixed(2), u: 'A' },
              { l: 'voltage', v: tele.voltage.toFixed(1), u: 'V' },
              { l: 'temp', v: tele.temp.toFixed(1), u: '°C' },
            ].map((m) => (
              <div key={m.l} className="rounded-lg bg-panel px-3 py-2">
                <div className="text-[10px] uppercase tracking-wider text-muted">{m.l}</div>
                <div className="mono text-sm text-text">{m.v} <span className="text-muted text-[10px]">{m.u}</span></div>
              </div>
            ))}
          </div>
        </div>

        {/* right — controller config */}
        <aside className="w-64 shrink-0 space-y-5 overflow-y-auto border-l border-white/10 bg-bg2 p-4">
          <div>
            <h3 className="mono text-[10px] font-semibold uppercase tracking-widest text-accent2">Setpoint</h3>
            <div className="mt-3">
              {slider('Target ω (rad/s)', sim.current.setpoint, 0, 150, 1,
                (v) => { sim.current.setpoint = v; force((x) => x + 1) }, (v) => v.toFixed(0))}
            </div>
          </div>
          <div>
            <h3 className="mono text-[10px] font-semibold uppercase tracking-widest text-accent2">PID gains</h3>
            <div className="mt-3 space-y-3">
              {slider('Kp', sim.current.pid.Kp, 0, 2, 0.01,
                (v) => { sim.current.pid.Kp = v; force((x) => x + 1) })}
              {slider('Ki', sim.current.pid.Ki, 0, 20, 0.1,
                (v) => { sim.current.pid.Ki = v; force((x) => x + 1) })}
              {slider('Kd', sim.current.pid.Kd, 0, 0.05, 0.001,
                (v) => { sim.current.pid.Kd = v; force((x) => x + 1) })}
            </div>
          </div>
          <label className="flex items-center gap-2 text-xs text-muted">
            <input type="checkbox" checked={sim.current.closedLoop}
              onChange={(e) => { sim.current.closedLoop = e.target.checked; force((x) => x + 1) }}
              className="accent-[#b8f34a]" />
            closed-loop (PID on)
          </label>
          <div className="rounded-lg border border-white/10 bg-panel p-3 text-[11px] text-muted">
            Try: inject <b className="text-text">bearing wear</b> — watch current
            rise, temperature climb, speed sag. Then fix it by retuning Kp/Ki.
            That chain is the experiment.
          </div>
        </aside>
      </div>
    </div>
  )
}
