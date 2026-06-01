import { Download } from 'lucide-react'

const receipts = [
  { id: 'RCPT-2026-0047', type: 'Form 10BE (80G)', period: 'Q1 2026 (Jan–Mar)', amount: '₹2,000', issued: '2026-04-05', status: 'ready' },
  { id: 'RCPT-2025-0214', type: 'Form 10BE (80G)', period: 'Q4 2025 (Oct–Dec)', amount: '₹1,000', issued: '2026-01-08', status: 'ready' },
  { id: 'RCPT-FCRA-2025-003', type: 'FCRA Receipt', period: 'FY 2025–26', amount: '₹3,000', issued: '2026-03-31', status: 'ready' },
]

export default function Receipts() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
          Tax receipts
        </h1>
        <p style={{ color: 'var(--gray)' }}>
          Download Form 10BE and FCRA receipts for your income tax filing.
        </p>
      </div>

      <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--rule)', background: 'var(--canvas)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1fr 1fr 1fr 100px', gap: '1rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--gray)' }}>
            <span>Receipt ID</span>
            <span>Type</span>
            <span>Period</span>
            <span>Amount</span>
            <span>Issued</span>
            <span></span>
          </div>
        </div>
        {receipts.map((r, i) => (
          <div key={r.id} style={{
            padding: '1.125rem 1.5rem',
            borderBottom: i < receipts.length - 1 ? '1px solid var(--rule-soft)' : 'none',
            display: 'grid',
            gridTemplateColumns: '1.5fr 1.5fr 1fr 1fr 1fr 100px',
            gap: '1rem',
            alignItems: 'center',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--indigo)' }}>{r.id}</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--charcoal)' }}>{r.type}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>{r.period}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--charcoal)' }}>{r.amount}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--gray)', fontFamily: 'var(--font-mono)' }}>{r.issued}</span>
            <button style={{
              display: 'flex', alignItems: 'center', gap: '0.375rem',
              background: 'transparent',
              border: '1px solid var(--rule)',
              borderRadius: 5,
              padding: '0.4rem 0.75rem',
              cursor: 'pointer',
              fontSize: '0.8rem',
              color: 'var(--charcoal)',
            }}>
              <Download size={13} />
              PDF
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.5rem', padding: '1rem 1.25rem', background: 'rgba(31,122,119,0.07)', border: '1px solid rgba(31,122,119,0.2)', borderRadius: 6 }}>
        <p style={{ color: 'var(--teal)', fontSize: '0.875rem', margin: 0 }}>
          <strong>Note:</strong> 80G receipts are issued quarterly. FCRA receipts are issued annually. All receipts are digitally signed and accepted by the Income Tax Department.
        </p>
      </div>
    </div>
  )
}
