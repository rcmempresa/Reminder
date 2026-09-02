const TYPES = [
  'Clínicas Dentárias',
  'Fisioterapia',
  'Medicina Estética',
  'Multidisciplinar',
  'Dermatologia',
]

export default function SocialBar() {
  return (
    <div style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '12px 0',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Especialidades:
          </span>
          {TYPES.map((t, i) => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)' }}>{t}</span>
              {i < TYPES.length - 1 && (
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border-dark)', display: 'inline-block' }} />
              )}
            </span>
          ))}
          <span style={{ marginLeft: 8, fontSize: 13, color: 'var(--text-3)', fontWeight: 500 }}>
            · Clínicas privadas · Portugal
          </span>
        </div>
      </div>
    </div>
  )
}
