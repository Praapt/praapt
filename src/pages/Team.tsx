const team = [
  {
    name: 'Arjun Mehta',
    affiliation: 'Former IAS, Ministry of Food',
    contribution: 'Arjun designed the original beneficiary entitlement framework, drawing on 15 years of field experience with the Public Distribution System.',
  },
  {
    name: 'Priya Krishnan',
    affiliation: 'MIT Media Lab, Civic Technology',
    contribution: 'Priya leads the biometric integration layer, ensuring Aadhaar-based authentication meets both the security and the dignity requirements of the programme.',
  },
  {
    name: 'Rahul Desai',
    affiliation: 'Ex-NPCI, Payments Infrastructure',
    contribution: 'Rahul architected the settlement rails that enable real-time vendor payments without cash exposure at the point of service.',
  },
  {
    name: 'Sunita Patel',
    affiliation: 'Azim Premji Foundation',
    contribution: 'Sunita runs beneficiary onboarding and vendor quality assurance across all active cities, managing ground operations for the programme.',
  },
  {
    name: 'Kiran Rao',
    affiliation: 'IIT Bombay, Distributed Systems',
    contribution: 'Kiran built the append-only ledger that provides tamper-evident records for every meal redemption in the system.',
  },
  {
    name: 'Deepa Nair',
    affiliation: 'Chartered Accountant, Impact Finance',
    contribution: 'Deepa manages donor compliance, tax receipts (80G/FCRA), and coordinates with the government audit framework.',
  },
]

export default function Team() {
  return (
    <div style={{ background: 'var(--canvas)' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--rule)', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: 20, height: 1, background: 'var(--amber)', display: 'inline-block' }} />
            <span style={{ color: 'var(--amber)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Team</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--charcoal)', marginBottom: '1rem' }}>
            The people behind Praapt
          </h1>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem', maxWidth: 560, lineHeight: 1.7 }}>
            A small team of public servants, technologists, and auditors building the infrastructure India's welfare system deserves.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {team.map(({ name, affiliation, contribution }) => (
            <div key={name} style={{
              border: '1px solid var(--rule)',
              borderRadius: 8,
              padding: '2rem',
              background: 'white',
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'var(--indigo)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 700, fontSize: '1.1rem',
                marginBottom: '1rem',
              }}>
                {name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--charcoal)', marginBottom: '0.25rem' }}>{name}</h3>
              <div style={{ color: 'var(--amber)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                {affiliation}
              </div>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.7 }}>{contribution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
