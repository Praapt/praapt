import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--canvas)',
      borderBottom: '1px solid var(--rule)',
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{
        maxWidth: 1120, margin: '0 auto',
        padding: '0 1.5rem',
        height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link to="/" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.375rem',
          fontWeight: 700,
          color: 'var(--indigo)',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}>
          Praapt
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {[
            { to: '/how-it-works', label: 'How it works' },
            { to: '/impact', label: 'Impact' },
            { to: '/team', label: 'Team' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                color: isActive ? 'var(--indigo)' : 'var(--gray)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive ? 600 : 400,
                transition: 'color 0.15s',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/give" style={{
            background: 'var(--indigo)',
            color: 'white',
            padding: '0.5rem 1.125rem',
            borderRadius: 6,
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            transition: 'opacity 0.15s',
          }}>
            Give meals
          </Link>
          <Link to="/account" style={{
            width: 32, height: 32, borderRadius: '50%',
            background: 'var(--indigo)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontSize: '0.75rem', fontWeight: 600,
            textDecoration: 'none',
          }}>
            AR
          </Link>
        </nav>
      </div>
    </header>
  )
}
