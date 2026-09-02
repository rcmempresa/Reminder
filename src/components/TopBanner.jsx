export default function TopBanner() {
  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 101,
      background: '#0F0E1A',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      padding: '9px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
    }}>
      {/* Pulse dot */}
      <span style={{
        width: 7, height: 7, borderRadius: '50%',
        background: '#4ADE80',
        display: 'inline-block',
        boxShadow: '0 0 0 3px rgba(74,222,128,0.2)',
        flexShrink: 0,
      }} />

      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 500, margin: 0 }}>
        Implementamos no máximo{' '}
        <strong style={{ color: 'white', fontWeight: 800 }}>3 clínicas por mês</strong>
        {' '}para garantir qualidade total —{' '}
        <span style={{ color: 'rgba(255,255,255,0.55)' }}>restam 2 vagas em Agosto.</span>
      </p>

      <a href="#final-cta" style={{
        fontSize: 12,
        fontWeight: 700,
        color: '#9B93F5',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        borderBottom: '1px solid rgba(155,147,245,0.4)',
        paddingBottom: 1,
      }}>
        Garantir vaga →
      </a>
    </div>
  )
}
