import { NavLink, Outlet } from 'react-router-dom'

const NAV = [
  { to: '/app/dashboard', label: 'Dashboard' },
  { to: '/app/explore', label: 'Explore' },
  { to: '/app/labs', label: 'Laboratories' },
  { to: '/app/workbench', label: 'Workbench' },
]

export default function AppShell() {
  return (
    <div className="flex h-screen">
      <aside className="w-56 shrink-0 border-r border-white/10 bg-bg2 p-4 flex flex-col">
        <div className="mb-8">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-accent">D</span>YSRUPT
          </span>
          <div className="text-[10px] text-muted mt-0.5 mono">experiment · disrupt · diagnose</div>
        </div>
        <nav className="flex flex-col gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive ? 'bg-panel text-accent' : 'text-muted hover:text-text hover:bg-panel/60'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto text-[10px] text-muted mono">v0.1 · mvp scaffold</div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
