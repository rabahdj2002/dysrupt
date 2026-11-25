import { Link } from 'react-router-dom'

const LABS = [
  {
    slug: 'dc-motor',
    name: 'DC Motor Laboratory',
    discipline: 'Control systems',
    desc: 'Speed control of a brushed DC motor: transfer function, PID, encoder, load disturbances, thermal effects — with full fault injection.',
    components: ['DC motor model', 'PID controller', 'Encoder', 'Load model', 'Oscilloscope', 'Fault injection'],
    ready: true,
  },
  {
    slug: 'robot-arm',
    name: '2R Robot Arm',
    discipline: 'Robotics',
    desc: 'Forward/inverse kinematics, joint control and mechanical disturbances.',
    components: [],
    ready: false,
  },
  {
    slug: 'conveyor',
    name: 'Conveyor & Sorting Line',
    discipline: 'Industrial automation',
    desc: 'PLC sequencing, sensors, motor drives and communication faults.',
    components: [],
    ready: false,
  },
]

export default function Labs() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Laboratories</h1>
      <p className="mt-1 text-sm text-muted">Each lab is a system plus its instruments, components and experiments.</p>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {LABS.map((l) => (
          <div key={l.slug} className="rounded-xl border border-white/10 bg-panel p-5">
            <div className="flex items-center justify-between">
              <span className="mono text-[10px] uppercase tracking-wider text-accent2">{l.discipline}</span>
              {!l.ready && <span className="mono text-[10px] text-muted">soon</span>}
            </div>
            <h3 className="mt-2 text-lg font-semibold">{l.name}</h3>
            <p className="mt-1 text-sm text-muted">{l.desc}</p>
            {l.components.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {l.components.map((c) => (
                  <span key={c} className="rounded-md bg-bg2 px-2 py-0.5 text-[10px] text-muted">{c}</span>
                ))}
              </div>
            )}
            {l.ready && (
              <Link to={`/app/labs/${l.slug}`} className="mt-4 inline-block rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg">
                Open lab
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
