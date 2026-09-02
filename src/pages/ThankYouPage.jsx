import { Link, useSearchParams } from 'react-router-dom'

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/remindr/diagnostico'

const CONTENT = {
  A: {
    icon: '⚡',
    iconColor: '#4ade80',
    badge: 'Perfil prioritário',
    badgeColor: '#4ade80',
    title: 'O seu perfil é ideal para o diagnóstico.',
    sub: 'Identificámos potencial real de impacto na sua empresa. Agende já a sua call — as vagas são limitadas.',
    showCalendly: true,
    ctaLabel: 'Escolher data e hora →',
    steps: [
      { n: '1', title: 'Agende já abaixo', desc: 'Escolha o horário que melhor se adapta. A call demora 45–60 minutos.' },
      { n: '2', title: 'Diagnóstico ao vivo', desc: 'Analisamos os seus processos, identificamos onde existe maior oportunidade e o que atacar primeiro.' },
      { n: '3', title: 'Plano + proposta', desc: 'Se existir uma oportunidade clara, entregamos um plano e uma proposta. Se não existir, dizemos-lhe isso — sem rodeios.' },
    ],
  },
  B: {
    icon: '✓',
    iconColor: '#5aabff',
    badge: 'Pedido recebido',
    badgeColor: '#5aabff',
    title: 'Diagnóstico registado com sucesso.',
    sub: 'Analisamos o seu pedido e entramos em contacto em 24 horas úteis. Se preferir avançar mais depressa, pode agendar já a call.',
    showCalendly: true,
    ctaLabel: 'Agendar agora (opcional) →',
    steps: [
      { n: '1', title: 'Confirmação em 24h', desc: 'Recebe um email nosso com os próximos passos e disponibilidade.' },
      { n: '2', title: 'Diagnóstico — 45 a 60 min', desc: 'Analisamos processos, ferramentas e fluxos. Percebemos onde está o tempo perdido.' },
      { n: '3', title: 'Plano de prioridades', desc: 'O que fazer primeiro, porquê, e qual o impacto esperado.' },
    ],
  },
  C: {
    icon: '✓',
    iconColor: '#a3a3a3',
    badge: 'Pedido recebido',
    badgeColor: '#a3a3a3',
    title: 'Diagnóstico registado.',
    sub: 'Analisamos o seu pedido com cuidado. Se houver uma oportunidade clara para o seu perfil, entramos em contacto em 48 horas.',
    showCalendly: false,
    steps: [
      { n: '1', title: 'Análise do pedido', desc: 'A nossa equipa avalia se existe uma oportunidade real de impacto para o seu negócio.' },
      { n: '2', title: 'Resposta em 48h', desc: 'Recebe um email com a nossa avaliação. Só avançamos se acreditarmos que a IA pode gerar valor real.' },
    ],
  },
}

export default function ThankYouPage() {
  const [params] = useSearchParams()
  const tier = ['A', 'B', 'C'].includes(params.get('tier')) ? params.get('tier') : 'B'
  const c = CONTENT[tier]

  return (
    <div style={{
      minHeight: '100vh', background: '#06102a',
      display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      padding: 'calc(var(--nav-h, 72px) + 48px) 24px 80px',
    }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>

        {/* Icon + badge */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px', textAlign: 'center' }}>
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: `${c.iconColor}18`, border: `1.5px solid ${c.iconColor}50`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '28px', marginBottom: '16px',
            boxShadow: `0 0 32px ${c.iconColor}30`,
          }}>
            {c.icon}
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: `${c.badgeColor}18`, border: `1px solid ${c.badgeColor}40`,
            borderRadius: '100px', padding: '4px 12px', marginBottom: '20px',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.badgeColor, animation: 'hero-pulse 2s ease-in-out infinite' }} />
            <span style={{ fontSize: '11px', fontWeight: 700, color: c.badgeColor, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {c.badge}
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 32px)', color: '#fff',
            letterSpacing: '-0.04em', lineHeight: 1.15, margin: '0 0 12px',
          }}>
            {c.title}
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, maxWidth: '480px', margin: 0 }}>
            {c.sub}
          </p>
        </div>

        {/* Calendly embed — Tier A e B */}
        {c.showCalendly && (
          <div style={{ marginBottom: '40px' }}>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                background: '#217FF1', color: '#fff',
                fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px',
                padding: '16px 32px', borderRadius: '14px', textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(33,127,241,0.45)',
                transition: 'transform 0.18s ease, box-shadow 0.18s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(33,127,241,0.55)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 32px rgba(33,127,241,0.45)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {c.ctaLabel}
            </a>
            {tier === 'A' && (
              <p style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '10px' }}>
                Gratuito · Sem compromisso · 45–60 minutos
              </p>
            )}
          </div>
        )}

        {/* Steps */}
        <div style={{
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px', padding: '24px', marginBottom: '32px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
            O que acontece a seguir
          </p>
          {c.steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0,
                background: 'rgba(33,127,241,0.15)', border: '1px solid rgba(33,127,241,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: 700, color: '#5aabff', fontFamily: 'Sora, sans-serif',
              }}>
                {s.n}
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', fontFamily: 'Sora, sans-serif', marginBottom: '4px' }}>{s.title}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '13px', color: 'rgba(255,255,255,0.4)',
          textDecoration: 'none', fontFamily: 'Sora, sans-serif',
          transition: 'color 0.15s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
        >
          ← Voltar ao início
        </Link>

      </div>
    </div>
  )
}
