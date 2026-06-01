import { Link } from 'react-router-dom'
import LiveTicker from '../components/LiveTicker'

const IMG_BASE = 'https://repo-sync-33541694.figma.site/_components/v2/fb8b2a5a3d7e7be864bc840304cbd9e06974899e'

const features = [
  {
    icon: '⚡',
    title: 'Pull-based welfare',
    body: 'Beneficiaries claim meals on demand. No middlemen, no pre-allocation.'
  },
  {
    icon: '🔒',
    title: 'Non-fungible credits',
    body: 'Each credit maps to exactly one meal at one vendor. Credits cannot be resold or redirected.'
  },
  {
    icon: '🌐',
    title: 'Decentralised transparency',
    body: 'Every redemption is cryptographically logged. You can audit the chain yourself.'
  },
]

const mechanism = [
  { role: 'Donor', action: 'Funds a meal pool' },
  { role: 'Pool', action: 'Issues non-fungible credits' },
  { role: 'Vendor', action: 'Accepts credits, prepares meals' },
  { role: 'Beneficiary', action: 'Redeems credit, receives meal' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img
          src={`${IMG_BASE}/landing-hero-desktop.b2d44e14.png`}
          alt="Hero"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(29,35,46,0.82) 0%, rgba(29,35,46,0.45) 100%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1120, margin: '0 auto', padding: '5rem 1.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 4,
            padding: '0.25rem 0.75rem',
            marginBottom: '1.5rem',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Praapt Network · Live
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            maxWidth: 700,
          }}>
            Every meal,{' '}
            <em style={{ fontStyle: 'italic', color: '#d4b896' }}>traceable.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem', maxWidth: 520, lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Praapt turns your contribution into a chain of custody — from your payment to the plate of a specific beneficiary, verifiable at every step.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/give" style={{
              background: 'white',
              color: 'var(--indigo)',
              padding: '0.875rem 2rem',
              borderRadius: 6,
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              transition: 'transform 0.15s',
            }}>
              Give meals →
            </Link>
            <Link to="/how-it-works" style={{
              border: '1px solid rgba(255,255,255,0.4)',
              color: 'white',
              padding: '0.875rem 2rem',
              borderRadius: 6,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '1rem',
            }}>
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* Live Ticker */}
      <LiveTicker />

      {/* Why Praapt is different */}
      <section style={{ background: 'var(--canvas)', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: 20, height: 1, background: 'var(--amber)', display: 'inline-block' }} />
            <span style={{ color: 'var(--amber)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Why Praapt
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--charcoal)', marginBottom: '3rem', maxWidth: 600 }}>
            Why Praapt is different
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {features.map(({ icon, title, body }) => (
              <div key={title} style={{
                background: 'white',
                border: '1px solid var(--rule)',
                borderRadius: 8,
                padding: '2rem',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'var(--gray)', lineHeight: 1.7, fontSize: '0.95rem' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Lineage */}
      <section style={{ background: 'var(--canvas-alt)', padding: '6rem 1.5rem', borderTop: '1px solid var(--rule)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <span style={{ width: 20, height: 1, background: 'var(--amber)', display: 'inline-block' }} />
            <span style={{ color: 'var(--amber)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              The Lineage
            </span>
            <span style={{ width: 20, height: 1, background: 'var(--amber)', display: 'inline-block' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--charcoal)', marginBottom: '1.5rem' }}>
            Built on Aadhaar's foundation
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: 1.8, fontSize: '1rem' }}>
            India's Aadhaar programme proved that digital identity can reach a billion people. Praapt builds the next layer: a welfare-delivery protocol that uses biometric identity for last-mile verification, turning anonymous charity into auditable entitlements.
          </p>
        </div>
      </section>

      {/* Mechanism */}
      <section style={{ background: 'var(--canvas)', padding: '6rem 1.5rem', borderTop: '1px solid var(--rule)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: 20, height: 1, background: 'var(--amber)', display: 'inline-block' }} />
            <span style={{ color: 'var(--amber)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              The Mechanism
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--charcoal)', marginBottom: '3rem' }}>
            Four roles. Zero leakage.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'var(--rule)' }}>
            {mechanism.map(({ role, action }, i) => (
              <div key={role} style={{
                background: 'var(--canvas)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
                <span style={{ color: 'var(--amber)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                  0{i + 1}
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', color: 'var(--charcoal)', fontWeight: 600 }}>{role}</span>
                <span style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.5 }}>{action}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: 'var(--indigo)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'white', lineHeight: 1.25, marginBottom: '2rem' }}>
            A meal is a small thing.{' '}
            <em>A traceable meal is a different thing.</em>
          </h2>
          <Link to="/give" style={{
            display: 'inline-block',
            background: 'white',
            color: 'var(--indigo)',
            padding: '1rem 2.5rem',
            borderRadius: 6,
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1rem',
          }}>
            Fund a meal pool →
          </Link>
        </div>
      </section>
    </>
  )
}
