import { useState } from 'react'
import { Check } from 'lucide-react'

const MEAL_RATE = 40
const PRESET_AMOUNTS = [100, 500, 1000, 5000]

const pool = {
  name: 'Praapt Network',
  region: 'Pan-India',
  beneficiaries: 1284,
  rate: 40,
  description: 'The flagship Praapt pool, active across 7 cities. Funds go to verified vendors serving biometrically-enrolled beneficiaries.',
}

type Step = 'pool' | 'amount' | 'identity' | 'tax' | 'confirm'
const STEPS: Step[] = ['pool', 'amount', 'identity', 'tax', 'confirm']

export default function Give() {
  const [step, setStep] = useState<Step>('pool')
  const [amount, setAmount] = useState(500)
  const [customAmount, setCustomAmount] = useState('')
  const [name, setName] = useState('Anika Rao')
  const [email, setEmail] = useState('anika.rao@example.com')
  const [pan, setPan] = useState('AAAPR1234A')
  const [claimTax, setClaimTax] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const finalAmount = customAmount ? parseInt(customAmount) || 0 : amount
  const meals = Math.floor(finalAmount / MEAL_RATE)

  const stepIndex = STEPS.indexOf(step)

  if (submitted) {
    return (
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '4rem 0', textAlign: 'center' }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: 'var(--teal)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.5rem',
        }}>
          <Check color="white" size={32} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--charcoal)', marginBottom: '1rem' }}>
          {meals} meals funded
        </h2>
        <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
          Your contribution of ₹{finalAmount.toLocaleString('en-IN')} to the Praapt Network has been received. You'll receive meal redemption updates in your dashboard.
        </p>
        <a href="/your-impact" style={{
          display: 'inline-block',
          background: 'var(--indigo)',
          color: 'white',
          padding: '0.875rem 2rem',
          borderRadius: 6,
          textDecoration: 'none',
          fontWeight: 600,
        }}>
          View your impact →
        </a>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
        Fund a meal pool
      </h1>
      <p style={{ color: 'var(--gray)', marginBottom: '2.5rem' }}>
        Each ₹40 funds one traceable meal for a verified beneficiary.
      </p>

      {/* Progress */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem' }}>
        {STEPS.map((s, i) => (
          <div key={s} style={{
            flex: 1, height: 4, borderRadius: 2,
            background: i <= stepIndex ? 'var(--indigo)' : 'var(--rule)',
            transition: 'background 0.3s',
          }} />
        ))}
      </div>

      {/* Step: Pool */}
      {step === 'pool' && (
        <div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: '1.5rem', color: 'var(--charcoal)' }}>Select a pool</h2>
          <div style={{
            border: '2px solid var(--indigo)',
            borderRadius: 8,
            padding: '1.5rem',
            background: 'white',
            marginBottom: '1.5rem',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--charcoal)' }}>{pool.name}</div>
                <div style={{ color: 'var(--gray)', fontSize: '0.875rem' }}>{pool.region}</div>
              </div>
              <span style={{
                background: 'var(--teal)',
                color: 'white',
                fontSize: '0.75rem',
                padding: '0.25rem 0.6rem',
                borderRadius: 4,
                fontFamily: 'var(--font-mono)',
              }}>Active</span>
            </div>
            <p style={{ color: 'var(--gray)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>{pool.description}</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--indigo)' }}>{pool.beneficiaries.toLocaleString()}</div>
                <div style={{ color: 'var(--gray)', fontSize: '0.75rem' }}>beneficiaries</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--indigo)' }}>₹{pool.rate}</div>
                <div style={{ color: 'var(--gray)', fontSize: '0.75rem' }}>per meal</div>
              </div>
            </div>
          </div>
          <button onClick={() => setStep('amount')} style={btnStyle}>
            Continue →
          </button>
        </div>
      )}

      {/* Step: Amount */}
      {step === 'amount' && (
        <div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: '1.5rem', color: 'var(--charcoal)' }}>Choose an amount</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
            {PRESET_AMOUNTS.map(a => (
              <button
                key={a}
                onClick={() => { setAmount(a); setCustomAmount('') }}
                style={{
                  ...presetBtnStyle,
                  border: `2px solid ${amount === a && !customAmount ? 'var(--indigo)' : 'var(--rule)'}`,
                  background: amount === a && !customAmount ? 'rgba(36,59,107,0.06)' : 'white',
                  color: amount === a && !customAmount ? 'var(--indigo)' : 'var(--charcoal)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.25rem' }}>₹{a.toLocaleString('en-IN')}</div>
                <div style={{ color: 'var(--gray)', fontSize: '0.8rem' }}>{Math.floor(a / MEAL_RATE)} meals</div>
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Custom amount (₹)"
            value={customAmount}
            onChange={e => setCustomAmount(e.target.value)}
            style={inputStyle}
          />
          {finalAmount > 0 && (
            <div style={{
              background: 'rgba(36,59,107,0.06)',
              border: '1px solid rgba(36,59,107,0.2)',
              borderRadius: 6,
              padding: '1rem',
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              color: 'var(--indigo)',
            }}>
              ₹{finalAmount.toLocaleString('en-IN')} → {meals} meal{meals !== 1 ? 's' : ''} funded
            </div>
          )}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => setStep('pool')} style={backBtnStyle}>← Back</button>
            <button onClick={() => setStep('identity')} style={btnStyle} disabled={finalAmount < 40}>Continue →</button>
          </div>
        </div>
      )}

      {/* Step: Identity */}
      {step === 'identity' && (
        <div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: '1.5rem', color: 'var(--charcoal)' }}>Your details</h2>
          <label style={labelStyle}>Full name</label>
          <input value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
          <label style={labelStyle}>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={() => setStep('amount')} style={backBtnStyle}>← Back</button>
            <button onClick={() => setStep('tax')} style={btnStyle}>Continue →</button>
          </div>
        </div>
      )}

      {/* Step: Tax */}
      {step === 'tax' && (
        <div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: '0.5rem', color: 'var(--charcoal)' }}>Tax information</h2>
          <p style={{ color: 'var(--gray)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Optional. Praapt is registered under 80G and FCRA. Providing your PAN enables a Form 10BE receipt.
          </p>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={claimTax}
              onChange={e => setClaimTax(e.target.checked)}
              style={{ width: 18, height: 18, accentColor: 'var(--indigo)' }}
            />
            <span style={{ color: 'var(--charcoal)', fontSize: '0.9rem' }}>
              I want to claim 80G tax deduction
            </span>
          </label>
          {claimTax && (
            <>
              <label style={labelStyle}>PAN number</label>
              <input value={pan} onChange={e => setPan(e.target.value)} style={inputStyle} placeholder="AAAPR1234A" />
            </>
          )}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => setStep('identity')} style={backBtnStyle}>← Back</button>
            <button onClick={() => setStep('confirm')} style={btnStyle}>Continue →</button>
          </div>
        </div>
      )}

      {/* Step: Confirm */}
      {step === 'confirm' && (
        <div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: '1.5rem', color: 'var(--charcoal)' }}>Confirm & pay</h2>
          <div style={{ border: '1px solid var(--rule)', borderRadius: 8, overflow: 'hidden', marginBottom: '1.5rem' }}>
            {([
              ['Pool', pool.name],
              ['Amount', `₹${finalAmount.toLocaleString('en-IN')}`],
              ['Meals funded', `${meals} meals`],
              ['Donor', name],
              ['Email', email],
              claimTax ? ['PAN', pan] : null,
            ] as ([string, string] | null)[]).filter((row): row is [string, string] => row !== null).map(([k, v]) => (
              <div key={k} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '0.875rem 1.25rem',
                borderBottom: '1px solid var(--rule-soft)',
                background: 'white',
              }}>
                <span style={{ color: 'var(--gray)', fontSize: '0.875rem' }}>{k}</span>
                <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--charcoal)' }}>{v}</span>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--gray)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
            Payment via UPI (anika@upi). By continuing, you authorise a payment of ₹{finalAmount.toLocaleString('en-IN')}.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => setStep('tax')} style={backBtnStyle}>← Back</button>
            <button onClick={() => setSubmitted(true)} style={{ ...btnStyle, background: 'var(--teal)' }}>
              Pay ₹{finalAmount.toLocaleString('en-IN')} →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const btnStyle: React.CSSProperties = {
  background: 'var(--indigo)',
  color: 'white',
  border: 'none',
  padding: '0.875rem 2rem',
  borderRadius: 6,
  fontWeight: 600,
  fontSize: '0.9rem',
  cursor: 'pointer',
  flex: 1,
}

const backBtnStyle: React.CSSProperties = {
  background: 'transparent',
  color: 'var(--gray)',
  border: '1px solid var(--rule)',
  padding: '0.875rem 1.5rem',
  borderRadius: 6,
  fontWeight: 500,
  fontSize: '0.9rem',
  cursor: 'pointer',
}

const presetBtnStyle: React.CSSProperties = {
  padding: '1rem',
  borderRadius: 6,
  cursor: 'pointer',
  textAlign: 'center' as const,
  transition: 'all 0.15s',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: '1px solid var(--rule)',
  borderRadius: 6,
  padding: '0.75rem 1rem',
  fontSize: '0.95rem',
  color: 'var(--charcoal)',
  background: 'white',
  marginBottom: '1rem',
  outline: 'none',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  color: 'var(--charcoal)',
  fontSize: '0.875rem',
  fontWeight: 600,
  marginBottom: '0.375rem',
}
