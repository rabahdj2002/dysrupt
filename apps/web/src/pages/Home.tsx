import { Link } from 'react-router-dom'

const STAGES = ['Build', 'Experiment', 'Disrupt', 'Diagnose', 'Improve']
const DISCIPLINES = ['Robotics', 'Control systems', 'Electronics', 'Industrial automation', 'Mechatronics', 'Mechanical systems']

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <header className="flex items-center justify-between py-6">
        <span className="text-xl font-bold tracking-tight"><span className="text-accent">D</span>YSRUPT</span>
        <Link to="/app/dashboard" className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg hover:opacity-90">
          Enter the Laboratory
        </Link>
      </header>

      <section className="py-24">
        <p className="mono text-xs uppercase tracking-[0.2em] text-accent2">engineering experimentation platform</p>
        <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight">
          Engineering isn't learned<br />by avoiding failure.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Enter an experimental engineering environment. Build systems, challenge
          their limits, investigate failures and discover how things really work.
        </p>
        <div className="mt-8 flex gap-3">
          <Link to="/app/workbench" className="rounded-lg bg-accent px-5 py-3 font-semibold text-bg">Enter the Laboratory</Link>
          <Link to="/app/explore" className="rounded-lg border border-white/15 px-5 py-3 font-semibold text-text hover:bg-panel">Explore Experiments</Link>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">The DYSRUPT method</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {STAGES.map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div className="rounded-xl border border-white/10 bg-panel px-5 py-3">
                <span className="mono text-xs text-accent2">0{i + 1}</span>
                <span className="ml-2 font-semibold">{s}</span>
              </div>
              {i < STAGES.length - 1 && <span className="text-muted">→</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Engineering disciplines</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {DISCIPLINES.map((d) => (
            <div key={d} className="rounded-xl border border-white/10 bg-panel px-5 py-4 text-sm font-medium">{d}</div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-16 text-center">
        <h2 className="text-2xl font-bold">Stop memorizing how machines work.<br />Start discovering why they fail.</h2>
        <Link to="/app/workbench" className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-bg">
          Enter the Laboratory
        </Link>
      </section>

      <footer className="border-t border-white/10 py-8 text-xs text-muted">
        DYSRUPT — Build it. Break it. Understand it. Rebuild it better.
      </footer>
    </div>
  )
}
