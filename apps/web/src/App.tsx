import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Explore from './pages/Explore'
import Labs from './pages/Labs'
import LabPage from './pages/LabPage'
import Workbench from './pages/Workbench'
import AppShell from './components/AppShell'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<AppShell />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="explore" element={<Explore />} />
        <Route path="labs" element={<Labs />} />
        <Route path="labs/:slug" element={<LabPage />} />
        <Route path="workbench" element={<Workbench />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
