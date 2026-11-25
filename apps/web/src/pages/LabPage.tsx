import { Link, useParams } from 'react-router-dom'

export default function LabPage() {
  const { slug } = useParams()
  if (slug !== 'dc-motor') {
    return <div className="p-8 text-muted">Laboratory not available yet.</div>
  }
  return (
    <div className="p-8">
      <p className="mono text-[10px] uppercase tracking-wider text-accent2">control systems</p>
      <h1 className="mt-1 text-2xl font-bold">DC Motor Laboratory</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        A brushed DC motor driven through a saturating amplifier, closed by a PID
        controller on encoder feedback. Electrical, mechanical and thermal
        dynamics are simulated as coupled ODEs — every fault changes the plant,
        not just a label.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-panel p-4">
          <h3 className="text-sm font-semibold">System model</h3>
          <p className="mono mt-2 text-[11px] text-muted">
            L·di/dt = V − R·i − Ke·ω<br />
            J·dω/dt = Kt·i − b·ω − τ<sub>load</sub><br />
            C·dT/dt = i²R − h(T − T<sub>amb</sub>)
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-panel p-4">
          <h3 className="text-sm font-semibold">Instruments</h3>
          <ul className="mt-2 text-sm text-muted">
            <li>· Oscilloscope (speed / current / temp)</li>
            <li>· Live telemetry</li>
            <li>· Event log</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-panel p-4">
          <h3 className="text-sm font-semibold">Available faults</h3>
          <ul className="mt-2 text-sm text-muted">
            <li>· Encoder noise / bias / freeze</li>
            <li>· Bearing wear · demagnetization</li>
            <li>· Blockage · PSU droop · cooling</li>
          </ul>
        </div>
      </div>
      <Link to="/app/workbench" className="mt-8 inline-block rounded-lg bg-accent px-5 py-3 font-semibold text-bg">
        Open workbench
      </Link>
    </div>
  )
}
