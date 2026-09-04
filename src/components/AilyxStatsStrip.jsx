const STATS = [
  {
    value: '60 min',
    label: 'Diagnóstico gratuito — análise completa dos seus processos e oportunidades',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(144,200,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: 'Gratuito',
    label: 'Sem compromisso — só avançamos se fizer sentido para ambos',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(144,200,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    value: '24/7',
    label: 'Os sistemas de IA que construímos trabalham sem paragens',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(144,200,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    value: 'Feito por nós',
    label: 'Estratégia, arquitectura, implementação e integração — nós tratamos de tudo',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(144,200,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
]

export default function AilyxStatsStrip() {
  return (
    <div style={{ background: '#0a1c42', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="ayl-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: 'clamp(28px, 3vw, 40px) clamp(20px, 2.5vw, 32px)',
              borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              display: 'flex', flexDirection: 'column', gap: '10px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {s.icon}
                <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(18px, 2vw, 26px)', color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {s.value}
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.55, fontFamily: 'Inter, sans-serif', margin: 0 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
