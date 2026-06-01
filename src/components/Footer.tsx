import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--charcoal)',
      color: 'rgba(255,255,255,0.6)',
      padding: '2.5rem 1.5rem',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-serif)', color: 'white', fontSize: '1rem', fontWeight: 600 }}>
            Praapt
          </span>
          <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { to: '/give', label: 'Dashboard' },
              { to: '/receipts', label: 'Receipts' },
              { to: '/account', label: 'Account' },
            ].map(({ to, label }) => (
              <Link key={to} to={to} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>
                {label}
              </Link>
            ))}
            <a href="mailto:hello@praapt.org" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>
              Help
            </a>
            <Link to="/privacy" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>
              Privacy
            </Link>
            <Link to="/terms" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>
              Terms
            </Link>
          </nav>
        </div>
        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
          Praapt · © 2026 · Audit-first by design.
        </div>
      </div>
    </footer>
  )
}
