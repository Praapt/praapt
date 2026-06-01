import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Impact from './pages/Impact'
import Team from './pages/Team'
import Nutrition from './pages/Nutrition'
import Login from './pages/Login'
import Give from './pages/Give'
import YourImpact from './pages/YourImpact'
import Receipts from './pages/Receipts'
import Account from './pages/Account'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/give" element={<Give />} />
          <Route path="/your-impact" element={<YourImpact />} />
          <Route path="/receipts" element={<Receipts />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
