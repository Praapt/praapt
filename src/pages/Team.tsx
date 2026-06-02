const team = [
  {
    name: 'Krishnan Raghunathan',
    initials: 'KR',
    affiliation: 'Founder',
    contribution: 'Sustainable infrastructure veteran with 25+ years across consumer goods, Silicon Valley, McKinsey, and Macquarie, leading platform vision and strategy.',
  },
  {
    name: 'Prof. Sanjay Sarma',
    initials: 'SS',
    affiliation: 'Founder',
    contribution: 'Senior Professor at MIT, AI and battery technology expert, co-founder of Auto-ID Center pioneering RFID standards, guiding technology development for Praapt.',
  },
  {
    name: 'Nagenendra Kolluru',
    initials: 'NK',
    affiliation: 'Platform Lead',
    contribution: 'Leading the efforts for Praapt platform development and core infrastructure.',
  },
  {
    name: 'Darshan Veershetty',
    initials: 'DV',
    affiliation: 'Design Lead',
    contribution: 'Leading the user interface and user experience design, website design, and visual identity.',
  },
  {
    name: 'Anand Chillar',
    initials: 'AC',
    affiliation: 'Architecture Lead',
    contribution: 'Architect building out the first generation platform with focus on system design and scalability.',
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
          {team.map(({ name, initials, affiliation, contribution }) => (
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
                {initials}
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
