const stats = [
  { value: '---', label: 'meals today' },
  { value: '---', label: 'meals in 2026' },
  { value: '---', label: 'active vendors' },
]

export default function LiveTicker() {
  return (
    <div style={{
      background: 'var(--charcoal)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      padding: '0.75rem 1.5rem',
    }}>
      <div style={{
        maxWidth: 1120, margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: '2rem',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--teal)',
            display: 'inline-block',
            boxShadow: '0 0 0 0 rgba(31,122,119,0.4)',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Live
          </span>
        </div>
        {stats.map(({ value, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'baseline', gap: '0.375rem' }}>
            <span style={{ color: 'white', fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
              {value}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>
              {label}
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(31,122,119,0.5); }
          70% { box-shadow: 0 0 0 8px rgba(31,122,119,0); }
          100% { box-shadow: 0 0 0 0 rgba(31,122,119,0); }
        }
      `}</style>
    </div>
  )
}
