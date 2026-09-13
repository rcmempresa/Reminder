import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AREAS = [
  {
    icon: '💰',
    label: 'Vendas & Receita',
    question: 'Quanto dinheiro pode estar a escapar?',
    items: ['Leads sem follow-up', 'Propostas esquecidas', 'Oportunidades paradas', 'Clientes inativos', 'CRM desatualizado'],
    accent: true,
  },
  {
    icon: '🎧',
    label: 'Atendimento',
    question: 'Quanto tempo gasta a equipa a responder às mesmas coisas?',
    items: ['Perguntas repetitivas', 'Triagem de emails', 'Marcações manuais', 'Pedidos de informação', 'Encaminhamento'],
    accent: false,
  },
  {
    icon: '⚙️',
    label: 'Operações',
    question: 'Que trabalho depende de pessoas mas não precisa de ser manual?',
    items: ['Introdução de dados', 'Criação de documentos', 'Coordenação interna', 'Notificações', 'Reporting'],
    accent: false,
  },
  {
    icon: '🗂️',
    label: 'Administração',
    question: 'Quantas horas por semana em trabalho de baixo valor?',
    items: ['Processamento de emails', 'Excel e relatórios', 'Recolha de informação', 'Organização de dados', 'Aprovações'],
    accent: false,
  },
  {
    icon: '🔌',
    label: 'Ferramentas',
    question: 'Onde existe um humano a fazer a ponte entre sistemas?',
    items: ['CRM → Excel → ERP', 'Cópia manual entre apps', 'Re-introdução de dados', 'Sistemas desconectados', 'Processos duplicados'],
    accent: false,
  },
]

export default function AilyxServices() {
  const headRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        y: 32, opacity: 0, duration: 0.85, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: headRef.current, start: 'top 78%', once: true },
      })
      gsap.from(gridRef.current.children, {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#06142e', padding: 'clamp(80px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      <div className="ayl-container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(33,127,241,0.18)', border: '1px solid rgba(33,127,241,0.3)',
            borderRadius: '100px', padding: '5px 14px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#90c8ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Diagnóstico de Capacidade
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            color: '#fff', lineHeight: 1.08, letterSpacing: '-0.04em', margin: '0 0 16px',
          }}>
            Primeiro descobrimos<br />
            <span style={{ color: '#5aabff' }}>onde está o desperdício.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
            Analisamos 5 áreas da sua empresa. Em cada uma procuramos processos manuais que consomem tempo, dinheiro e capacidade — e que podem ser automatizados.
          </p>
        </div>

        {/* 5 area cards */}
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
          {AREAS.map((area, i) => (
            <div key={i} style={{
              background: area.accent ? 'rgba(33,127,241,0.15)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${area.accent ? 'rgba(33,127,241,0.4)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '16px',
              padding: '24px 20px',
              display: 'flex', flexDirection: 'column', gap: '16px',
            }}>
              <div>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{area.icon}</div>
                <div style={{
                  fontFamily: 'Sora, sans-serif', fontWeight: 700,
                  fontSize: '14px', color: area.accent ? '#5aabff' : '#fff',
                  marginBottom: '8px',
                }}>
                  {area.label}
                </div>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                {area.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: area.accent ? '#5aabff' : 'rgba(255,255,255,0.3)', flexShrink: 0, marginTop: '6px' }} />
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{
                fontSize: '11px', fontStyle: 'italic',
                color: area.accent ? '#90c8ff' : 'rgba(255,255,255,0.35)',
                lineHeight: 1.5, borderTop: `1px solid ${area.accent ? 'rgba(33,127,241,0.25)' : 'rgba(255,255,255,0.06)'}`,
                paddingTop: '12px',
              }}>
                {area.question}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)', margin: '0 0 24px' }}>
            Cada processo é avaliado por impacto financeiro, tempo consumido, frequência e facilidade de automatização.
          </p>
          <a href="/diagnostico" style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#fff', color: '#0a1c42',
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: '14px', padding: '14px 28px',
            borderRadius: '12px', textDecoration: 'none',
            transition: 'transform 0.18s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}
          >
            Fazer o diagnóstico gratuito →
          </a>
        </div>

      </div>
    </section>
  )
}
