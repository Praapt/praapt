import { Outlet, NavLink } from 'react-router-dom'
import { ShoppingBag, BarChart2, Receipt, User } from 'lucide-react'

const navItems = [
  { to: '/give', icon: ShoppingBag, label: 'Give meals' },
  { to: '/your-impact', icon: BarChart2, label: 'Your impact' },
  { to: '/receipts', icon: Receipt, label: 'Receipts' },
  { to: '/account', icon: User, label: 'Account' },
]

export default function DashboardLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--canvas)' }}>
      {/* Sidebar */}
      <aside style={{
        width: 240,
        background: 'var(--indigo)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 0',
        flexShrink: 0,
      }}>
        <div style={{ padding: '0 1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <a href="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'white', textDecoration: 'none', fontWeight: 700 }}>
            Praapt
          </a>
        </div>
        <nav style={{ flex: 1, padding: '1.5rem 0' }}>
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1.5rem',
                color: isActive ? 'white' : 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                borderLeft: isActive ? '3px solid white' : '3px solid transparent',
                fontWeight: isActive ? 600 : 400,
                fontSize: '0.95rem',
                transition: 'all 0.15s',
              })}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
        {/* User footer */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontSize: '0.875rem', fontWeight: 600,
          }}>AR</div>
          <div>
            <div style={{ color: 'white', fontSize: '0.875rem', fontWeight: 500 }}>Anika Rao</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>anika.rao@example.com</div>
          </div>
        </div>
      </aside>
      {/* Main content */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '2.5rem' }}>
        <Outlet />
      </main>
    </div>
  )
}
