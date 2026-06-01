import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--indigo)', fontWeight: 700, marginBottom: '0.5rem' }}>
            Praapt
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
            Donor sign in
          </h1>
          <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>
            We'll send a magic link to your email.
          </p>
        </div>

        {sent ? (
          <div style={{
            background: 'rgba(31,122,119,0.08)',
            border: '1px solid rgba(31,122,119,0.25)',
            borderRadius: 8,
            padding: '2rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📬</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>
              Check your inbox
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.875rem', lineHeight: 1.7 }}>
              We sent a sign-in link to <strong>{email}</strong>. It expires in 15 minutes.
            </p>
          </div>
        ) : (
          <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 8, padding: '2rem' }}>
            <label style={{ display: 'block', color: 'var(--charcoal)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                width: '100%',
                border: '1px solid var(--rule)',
                borderRadius: 6,
                padding: '0.75rem 1rem',
                fontSize: '0.95rem',
                color: 'var(--charcoal)',
                background: 'white',
                marginBottom: '1.25rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <button
              onClick={() => email && setSent(true)}
              disabled={!email}
              style={{
                width: '100%',
                background: 'var(--indigo)',
                color: 'white',
                border: 'none',
                padding: '0.875rem',
                borderRadius: 6,
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: email ? 'pointer' : 'not-allowed',
                opacity: email ? 1 : 0.5,
              }}
            >
              Send magic link
            </button>
          </div>
        )}

        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--gray)', fontSize: '0.8rem' }}>
          New donor?{' '}
          <Link to="/give" style={{ color: 'var(--indigo)', fontWeight: 600, textDecoration: 'none' }}>
            Fund your first meal →
          </Link>
        </p>
      </div>
    </div>
  )
}
