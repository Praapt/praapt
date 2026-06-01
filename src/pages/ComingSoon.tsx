import { Link } from 'react-router-dom'

export default function ComingSoon() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
      <div>
        <div style={{ color: 'var(--amber)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Coming soon
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--charcoal)', marginBottom: '1rem' }}>
          This page is under construction
        </h1>
        <p style={{ color: 'var(--gray)', marginBottom: '2rem' }}>
          We're building something new here. Check back soon.
        </p>
        <Link to="/" style={{
          background: 'var(--indigo)',
          color: 'white',
          padding: '0.875rem 2rem',
          borderRadius: 6,
          textDecoration: 'none',
          fontWeight: 600,
        }}>
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
