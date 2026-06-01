const redemptions = [
  { id: 'TXN-00142', beneficiary: 'B-4821', meal: 'Vegetable Khichdi', vendor: 'Annapoorna Canteen, Koramangala', time: '2026-05-31 12:14', status: 'redeemed' },
  { id: 'TXN-00141', beneficiary: 'B-2934', meal: 'Dal Chawal', vendor: 'Shree Anand Bhojnalay, Dharavi', time: '2026-05-31 11:58', status: 'redeemed' },
  { id: 'TXN-00140', beneficiary: 'B-3312', meal: 'Ragi Mudde', vendor: 'Sagar Mess, Indiranagar', time: '2026-05-30 13:22', status: 'redeemed' },
  { id: 'TXN-00139', beneficiary: 'B-5501', meal: 'Sattu Paratha', vendor: 'Patna Tiffin Centre, Patna', time: '2026-05-30 12:07', status: 'redeemed' },
  { id: 'TXN-00138', beneficiary: 'B-1127', meal: 'Vegetable Khichdi', vendor: 'Annapoorna Canteen, Koramangala', time: '2026-05-29 13:00', status: 'redeemed' },
]

export default function YourImpact() {
  const totalMeals = 47
  const totalSpent = totalMeals * 40

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
          Your impact
        </h1>
        <p style={{ color: 'var(--gray)' }}>Every meal you funded, with a traceable receipt.</p>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        {[
          { label: 'Meals funded', value: totalMeals },
          { label: 'Amount contributed', value: `₹${totalSpent.toLocaleString('en-IN')}` },
          { label: 'Unique beneficiaries', value: 31 },
          { label: 'Active since', value: 'Jan 2026' },
        ].map(({ label, value }) => (
          <div key={label} style={{
            background: 'white',
            border: '1px solid var(--rule)',
            borderRadius: 8,
            padding: '1.5rem',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--indigo)' }}>{value}</div>
            <div style={{ color: 'var(--gray)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Redemption ledger */}
      <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--charcoal)', margin: 0 }}>Redemption ledger</h2>
          <span style={{ color: 'var(--teal)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
            Live
          </span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: 'var(--canvas)' }}>
                {['Transaction ID', 'Beneficiary', 'Meal', 'Vendor', 'Time', 'Status'].map(h => (
                  <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600, color: 'var(--gray)', fontSize: '0.8rem', borderBottom: '1px solid var(--rule)' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {redemptions.map(r => (
                <tr key={r.id} style={{ borderBottom: '1px solid var(--rule-soft)' }}>
                  <td style={{ padding: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--indigo)' }}>{r.id}</td>
                  <td style={{ padding: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--gray)' }}>{r.beneficiary}</td>
                  <td style={{ padding: '1rem', color: 'var(--charcoal)' }}>{r.meal}</td>
                  <td style={{ padding: '1rem', color: 'var(--gray)', fontSize: '0.8rem' }}>{r.vendor}</td>
                  <td style={{ padding: '1rem', color: 'var(--gray)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{r.time}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{
                      background: '#d1fae5',
                      color: '#065f46',
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 3,
                      fontFamily: 'var(--font-mono)',
                    }}>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
