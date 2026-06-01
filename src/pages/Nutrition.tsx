const meals = [
  {
    cat: 'Cat A',
    name: 'Vegetable Khichdi',
    cal: 700,
    protein: '20g',
    ingredients: 'Rice, lentils, seasonal vegetables, ghee, spices',
    desc: 'A complete one-pot meal. High-protein, easily digestible, and familiar across all regions.',
    color: '#e8f4e8',
    border: '#c3e0c3',
  },
  {
    cat: 'Cat B',
    name: 'Dal Chawal',
    cal: 378,
    protein: '14g',
    ingredients: 'Rice, toor dal, tomato, onion, cumin, turmeric',
    desc: "India's most ubiquitous combination. Nutritionally balanced and low in preparation variance.",
    color: '#fff8e8',
    border: '#f0dfa0',
  },
  {
    cat: 'Cat C',
    name: 'Ragi Mudde',
    cal: 680,
    protein: '18g',
    ingredients: 'Finger millet flour, water, served with sambar',
    desc: 'Traditional Karnataka staple. Exceptionally high in calcium and iron — suited for regions with micronutrient deficiency.',
    color: '#f8f0e8',
    border: '#e0c8a8',
  },
  {
    cat: 'Cat D',
    name: 'Sattu Paratha',
    cal: 650,
    protein: '22g',
    ingredients: 'Wheat flour, roasted chickpea flour, onion, coriander, green chilli',
    desc: "Bihar and eastern India's protein-dense staple. Slow-digesting, high-satiety meal ideal for physical labourers.",
    color: '#f0e8f8',
    border: '#c8a8e0',
  },
]

export default function Nutrition() {
  return (
    <div style={{ background: 'var(--canvas)' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--rule)', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: 20, height: 1, background: 'var(--amber)', display: 'inline-block' }} />
            <span style={{ color: 'var(--amber)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Catalogue</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--charcoal)', marginBottom: '1rem' }}>
            Meal catalogue
          </h1>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem', maxWidth: 560, lineHeight: 1.7 }}>
            Every Praapt meal meets minimum nutritional standards defined by the Ministry of Health. Vendors are approved per meal category.
          </p>
        </div>
      </div>

      {/* Meals Grid */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {meals.map(({ cat, name, cal, protein, ingredients, desc, color, border }) => (
            <div key={name} style={{
              border: `1px solid ${border}`,
              borderRadius: 8,
              overflow: 'hidden',
              background: 'white',
            }}>
              <div style={{ background: color, padding: '1.5rem', borderBottom: `1px solid ${border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span style={{
                      display: 'inline-block',
                      background: 'var(--indigo)',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 3,
                      marginBottom: '0.75rem',
                    }}>{cat}</span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--charcoal)', margin: 0 }}>{name}</h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--charcoal)' }}>{cal}</div>
                    <div style={{ color: 'var(--gray)', fontSize: '0.7rem' }}>kcal</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.75rem', background: 'var(--canvas)', borderRadius: 4 }}>
                  <span style={{ color: 'var(--gray)', fontSize: '0.8rem' }}>Protein</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--charcoal)' }}>{protein}</span>
                </div>
                <p style={{ color: 'var(--gray)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>{desc}</p>
                <div style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>
                  <strong style={{ color: 'var(--charcoal)' }}>Ingredients:</strong> {ingredients}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
