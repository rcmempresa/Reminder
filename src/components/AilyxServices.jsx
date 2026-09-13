import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PAINS = [
  {
    icon: '📩',
    title: 'Leads que não recebem resposta a tempo',
    desc: 'Enquanto a equipa decide quem contacta, o concorrente já fechou.',
    metric: '78% dos leads compram ao primeiro a responder',
    color: '#f87171',
  },
  {
    icon: '📄',
    title: 'Propostas enviadas e esquecidas',
    desc: 'Ninguém faz follow-up porque não há sistema. A oportunidade esfria.',
    metric: 'Até 40% das propostas nunca recebem 2º contacto',
    color: '#f59e0b',
  },
  {
    icon: '🔁',
    title: 'A equipa a copiar informação entre sistemas',
    desc: 'CRM, Excel, email, WhatsApp. Alguém está sempre a fazer a ponte manual.',
    metric: 'Média de 5–8h/semana por colaborador',
    color: '#a78bfa',
  },
  {
    icon: '📊',
    title: 'Relatórios que demoram horas a preparar',
    desc: 'Dados que podiam estar prontos automaticamente consomem tempo da equipa.',
    metric: 'Trabalho de baixo valor com alto custo de oportunidade',
    color: '#34d399',
  },
  {
    icon: '🧾',
    title: 'Faturação atrasada por falta de processo',
    desc: 'A informação não chega a tempo. O cash flow ressente-se.',
    metric: 'Atraso médio de 7 dias por falta de automação',
    color: '#5aabff',
  },
  {
    icon: '💬',
    title: 'Clientes inativos que ninguém reativa',
    desc: 'A base de clientes existente é a fonte de receita mais barata — e a mais ignorada.',
    metric: 'Custo de reativação 5x menor que aquisição',
    color: '#fb7185',
  },
]

export default function AilyxServices() {
  const headRef  = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        y: 28, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: headRef.current, start: 'top 78%', once: true },
      })
      cardsRef.current.filter(Boolean).forEach((card, i) => {
        gsap.from(card, {
          y: 48, opacity: 0, duration: 0.7, ease: 'power3.out',
          delay: i * 0.07,
          scrollTrigger: { trigger: headRef.current, start: 'top 72%', once: true },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#fff', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }}>
      <div className="ayl-container">

        {/* Header */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#FEF2F2', border: '1px solid rgba(248,113,113,0.3)',
            borderRadius: '100px', padding: '5px 14px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#ef4444', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              O problema
            </span>
          </div>
          <h2 className="ayl-h2" style={{ color: '#0a1c42', marginBottom: '16px' }}>
            A empresa cresce.<br />
            <span style={{ color: '#217FF1' }}>A equipa afoga-se em trabalho manual.</span>
          </h2>
          <p style={{ color: '#666', fontSize: '17px', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
            Cada vez que algo acontece na empresa — um lead, uma proposta, um pedido — alguém tem de se lembrar de agir. É aí que o dinheiro e o tempo desaparecem.
          </p>
        </div>

        {/* Pain cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {PAINS.map((pain, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="ayl-card--hover"
              style={{
                background: '#F8FAFF',
                border: '1.5px solid #e8edf5',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: '10px',
                background: `${pain.color}15`,
                border: `1px solid ${pain.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', flexShrink: 0,
              }}>
                {pain.icon}
              </div>
              <div>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', color: '#0a1c42', marginBottom: '6px', lineHeight: 1.3 }}>
                  {pain.title}
                </div>
                <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.6, margin: 0 }}>
                  {pain.desc}
                </p>
              </div>
              <div style={{
                marginTop: 'auto',
                fontSize: '11px', fontWeight: 600,
                color: pain.color,
                background: `${pain.color}10`,
                borderRadius: '8px',
                padding: '8px 10px',
                lineHeight: 1.4,
              }}>
                {pain.metric}
              </div>
            </div>
          ))}
        </div>

        {/* Bridge to solution */}
        <div style={{
          marginTop: '56px',
          padding: '32px 40px',
          background: '#06102a',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2vw, 24px)', color: '#fff', marginBottom: '8px', letterSpacing: '-0.03em' }}>
              Evento → alguém tem de se lembrar → trabalho manual → atraso → esquecimento.
            </div>
            <div style={{ fontSize: '15px', color: '#5aabff', fontWeight: 600 }}>
              Com a Reminder: evento → ação executada automaticamente.
            </div>
          </div>
          <a href="/diagnostico" style={{
            flexShrink: 0,
            background: '#217FF1', color: '#fff',
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: '14px', padding: '14px 28px',
            borderRadius: '12px', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center',
            whiteSpace: 'nowrap',
            transition: 'transform 0.18s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}
          >
            Ver como funciona →
          </a>
        </div>

      </div>
    </section>
  )
}
