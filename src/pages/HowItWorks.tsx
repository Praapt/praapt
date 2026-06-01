const IMG_BASE = 'https://repo-sync-33541694.figma.site/_components/v2/fb8b2a5a3d7e7be864bc840304cbd9e06974899e'

const steps = [
  {
    num: '01',
    title: 'Donor funds a pool',
    body: 'You choose a meal pool — city-wide or a specific community — and contribute any amount. Your contribution is split into individual meal credits at ₹40 each.',
    img: `${IMG_BASE}/Praapt_-_Donor_Funds_-_Step_1.9ab6579a.jpeg`,
  },
  {
    num: '02',
    title: 'Beneficiary is registered',
    body: 'Eligible beneficiaries are enrolled with Aadhaar-based biometric verification. Each gets a unique entitlement tied to their biometric identity.',
    img: `${IMG_BASE}/Praapt_-_Beneficiary_Registration_-_Step_2.44a1d091.jpeg`,
  },
  {
    num: '03',
    title: 'Beneficiary redeems at vendor',
    body: 'At mealtime, the beneficiary scans their finger at a registered vendor. The system verifies identity and deducts one credit from the pool.',
    img: `${IMG_BASE}/Praapt_-_Beneficiary_Redeems_at_Vendor_-_Step_3.c2b17f44.jpeg`,
  },
  {
    num: '04',
    title: 'Vendor fulfils the meal',
    body: 'The vendor prepares and serves the pre-approved meal. Payment is settled automatically from the pool to the vendor.',
    img: `${IMG_BASE}/Praapt_-_Vendor_Fulfils_the_Meal_-_Step_4.ad7eb77d.jpeg`,
  },
  {
    num: '05',
    title: 'Donor sees redemption',
    body: 'Within minutes, you receive a cryptographically signed receipt: who ate, where, and when. The full chain of custody is visible in your dashboard.',
    img: `${IMG_BASE}/Praapt_-_Donor_Sees_Redemption_-_Step_5.9b2addd1.jpeg`,
  },
]

const principles = [
  { title: 'No cash transfers', body: 'Credits can only be redeemed for a specific pre-approved meal. They have no cash value outside the system.' },
  { title: 'Biometric only', body: 'Redemption requires physical presence and fingerprint match. No cards, no PINs, no proxies.' },
  { title: 'Real-time audit', body: 'Every transaction is logged to an append-only ledger within seconds of completion.' },
  { title: 'Vendor accountability', body: 'Vendors are rated by beneficiary feedback. Chronic under-delivery triggers contract review.' },
]

export default function HowItWorks() {
  return (
    <div style={{ background: 'var(--canvas)' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--rule)', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: 20, height: 1, background: 'var(--amber)', display: 'inline-block' }} />
            <span style={{ color: 'var(--amber)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Process</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--charcoal)', marginBottom: '1rem' }}>
            How it works
          </h1>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem', maxWidth: 560, lineHeight: 1.7 }}>
            Five steps, zero ambiguity. Every meal leaves a verifiable trail from your wallet to a beneficiary's plate.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '4rem 1.5rem' }}>
        {steps.map((step, i) => (
          <div
            key={step.num}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              padding: '4rem 0',
              borderBottom: i < steps.length - 1 ? '1px solid var(--rule)' : 'none',
              direction: i % 2 === 1 ? 'rtl' : 'ltr',
            }}
          >
            <div style={{ direction: 'ltr' }}>
              <span style={{ color: 'var(--amber)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
                Step {step.num}
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--charcoal)', margin: '0.75rem 0 1rem' }}>
                {step.title}
              </h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, fontSize: '1rem' }}>{step.body}</p>
            </div>
            <div style={{ direction: 'ltr' }}>
              <img
                src={step.img}
                alt={step.title}
                style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 8, border: '1px solid var(--rule)' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Principles */}
      <div style={{ background: 'var(--canvas-alt)', borderTop: '1px solid var(--rule)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--charcoal)', marginBottom: '2.5rem' }}>
            Design principles
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {principles.map(({ title, body }) => (
              <div key={title} style={{ padding: '1.5rem 0', borderTop: '2px solid var(--indigo)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
