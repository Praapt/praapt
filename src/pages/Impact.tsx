const stats = [
  { value: '18,420', label: 'Meals served in 2026', sub: 'Across all active pools' },
  { value: '1,284', label: 'Active beneficiaries', sub: 'Biometrically verified' },
  { value: '42', label: 'Vendor partners', sub: 'Across 7 cities' },
  { value: '₹7.4L', label: 'Donor funds deployed', sub: 'Since programme launch' },
]

const principles = [
  {
    title: 'Radical traceability',
    body: 'Every meal is tagged with a transaction ID, beneficiary ID, vendor ID, and timestamp. No aggregation obscures individual redemptions.',
  },
  {
    title: 'Zero-leakage design',
    body: 'Credits have no cash value. They can only be exchanged for pre-approved meals. Vendor payments are automated — no cash changes hands.',
  },
  {
    title: 'Beneficiary dignity',
    body: 'The redemption experience is indistinguishable from any other payment. No queues, no tokens, no stigma.',
  },
  {
    title: 'Donor verification',
    body: "You can independently verify your donation's impact. Every redemption record is exportable and machine-readable.",
  },
]

export default function Impact() {
  return (
    <div style={{ background: 'var(--canvas)' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--rule)', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: 20, height: 1, background: 'var(--amber)', display: 'inline-block' }} />
            <span style={{ color: 'var(--amber)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Impact</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--charcoal)', marginBottom: '1rem' }}>
            Measured. Audited. Verified.
          </h1>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem', maxWidth: 560, lineHeight: 1.7 }}>
            We publish live programme metrics and make every redemption record available for independent audit.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ borderBottom: '1px solid var(--rule)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0' }}>
          {stats.map(({ value, label, sub }) => (
            <div key={label} style={{
              padding: '3rem 2rem',
              borderRight: '1px solid var(--rule)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--indigo)', lineHeight: 1 }}>
                {value}
              </div>
              <div style={{ color: 'var(--charcoal)', fontSize: '0.95rem', fontWeight: 600, marginTop: '0.75rem' }}>{label}</div>
              <div style={{ color: 'var(--gray)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Principles */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '5rem 1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--charcoal)', marginBottom: '3rem' }}>
          Our impact principles
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {principles.map(({ title, body }) => (
            <div key={title} style={{
              border: '1px solid var(--rule)',
              borderRadius: 8,
              padding: '2rem',
              background: 'white',
            }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{title}</h3>
              <p style={{ color: 'var(--gray)', lineHeight: 1.7, fontSize: '0.9rem' }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
