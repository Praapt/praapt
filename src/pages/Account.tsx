import { useState } from 'react'

const donor = {
  displayName: 'Anika Rao',
  email: 'anika.rao@example.com',
  panNumber: 'AAAPR1234A',
  jurisdiction: 'India',
  address: 'Flat 4B, 12th Main Road, Indiranagar, Bengaluru 560038',
  paymentMethod: 'anika@upi',
}

export default function Account() {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(donor.displayName)
  const [address, setAddress] = useState(donor.address)

  return (
    <div style={{ maxWidth: 640 }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
          Account settings
        </h1>
        <p style={{ color: 'var(--gray)' }}>Manage your donor profile and payment methods.</p>
      </div>

      {/* Profile */}
      <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 8, marginBottom: '1.5rem' }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--charcoal)', margin: 0 }}>Profile</h2>
          <button
            onClick={() => setEditing(!editing)}
            style={{ background: 'transparent', border: '1px solid var(--rule)', borderRadius: 5, padding: '0.375rem 0.875rem', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--charcoal)' }}
          >
            {editing ? 'Cancel' : 'Edit'}
          </button>
        </div>
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--gray)', marginBottom: '0.25rem' }}>Full name</div>
            {editing ? (
              <input value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
            ) : (
              <div style={{ fontWeight: 600, color: 'var(--charcoal)' }}>{name}</div>
            )}
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--gray)', marginBottom: '0.25rem' }}>Email</div>
            <div style={{ color: 'var(--charcoal)' }}>{donor.email}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--gray)', marginBottom: '0.25rem' }}>Address</div>
            {editing ? (
              <textarea value={address} onChange={e => setAddress(e.target.value)} style={{ ...inputStyle, height: 80, resize: 'vertical' }} />
            ) : (
              <div style={{ color: 'var(--charcoal)', lineHeight: 1.6 }}>{address}</div>
            )}
          </div>
          {editing && (
            <button
              onClick={() => setEditing(false)}
              style={{ background: 'var(--indigo)', color: 'white', border: 'none', borderRadius: 6, padding: '0.75rem 1.5rem', cursor: 'pointer', fontWeight: 600, alignSelf: 'flex-start' }}
            >
              Save changes
            </button>
          )}
        </div>
      </div>

      {/* Tax */}
      <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 8, marginBottom: '1.5rem' }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--rule)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--charcoal)', margin: 0 }}>Tax information</h2>
        </div>
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--gray)', marginBottom: '0.25rem' }}>PAN</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--charcoal)', letterSpacing: '0.05em' }}>{donor.panNumber}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--gray)', marginBottom: '0.25rem' }}>Jurisdiction</div>
            <div style={{ color: 'var(--charcoal)' }}>{donor.jurisdiction}</div>
          </div>
        </div>
      </div>

      {/* Payment */}
      <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 8 }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--rule)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--charcoal)', margin: 0 }}>Payment methods</h2>
        </div>
        <div style={{ padding: '1.5rem' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0.875rem 1rem',
            background: 'var(--canvas)',
            borderRadius: 6,
            border: '1px solid var(--rule)',
          }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--charcoal)' }}>UPI</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--gray)' }}>{donor.paymentMethod}</div>
            </div>
            <span style={{ background: '#d1fae5', color: '#065f46', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: 3 }}>
              Primary
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: '1px solid var(--rule)',
  borderRadius: 6,
  padding: '0.625rem 0.875rem',
  fontSize: '0.9rem',
  color: 'var(--charcoal)',
  background: 'white',
  outline: 'none',
  boxSizing: 'border-box',
}
