import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-1 text-sm text-muted">Welcome back — your experiment history, courses and challenges live here.</p>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Continue experimenting</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Link to="/app/workbench" className="rounded-xl border border-accent/40 bg-panel p-5 hover:border-accent">
            <div className="mono text-[10px] uppercase tracking-wider text-accent">unfinished session</div>
            <h3 className="mt-1 font-semibold">DC Motor Laboratory</h3>
            <p className="mt-1 text-sm text-muted">Closed-loop speed control with PID — fault injection enabled.</p>
          </Link>
          <div className="rounded-xl border border-white/10 bg-panel/40 p-5 text-sm text-muted">
            More sessions will appear here as you experiment.
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Progress</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            { k: 'Experiments completed', v: '0' },
            { k: 'Faults diagnosed', v: '0' },
            { k: 'Reports submitted', v: '0' },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-white/10 bg-panel p-5">
              <div className="mono text-3xl text-accent2">{s.v}</div>
              <div className="mt-1 text-xs text-muted">{s.k}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
