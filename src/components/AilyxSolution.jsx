import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    step: 'Passo 1',
    title: 'Ligamos ao seu negócio',
    desc: 'Analisamos processos, ferramentas e fluxos existentes. Percebemos onde está o tempo perdido — sem precisar de preparar nada.',
    visual: <StepVisual1 />,
    accent: false,
  },
  {
    step: 'Passo 2',
    title: 'Definimos o que atacar',
    desc: 'Cada oportunidade é avaliada por impacto e retorno. Entrega um plano claro: o que fazer primeiro e porquê.',
    visual: <StepVisual2 />,
    accent: true,
  },
  {
    step: 'Passo 3',
    title: 'Construímos e lançamos',
    desc: 'Construímos, integramos e testamos tudo. A equipa não toca em nada técnico. O prazo depende da complexidade e das integrações necessárias.',
    visual: <StepVisual3 />,
    accent: false,
  },
]

function StepVisual1() {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {['Vendas e propostas', 'Atendimento', 'Operações internas', 'Administração'].map((item, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '10px 14px',
          background: i === 0 ? '#EEF4FF' : '#F8FAFF',
          border: `1px solid ${i === 0 ? 'rgba(33,127,241,0.25)' : '#e8edf5'}`,
          borderRadius: '10px',
          animation: `slide-in-left 0.4s ease ${i * 0.1}s both`,
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: i === 0 ? '#217FF1' : '#cdd5e0', flexShrink: 0,
          }} />
          <span style={{ fontSize: '13px', fontWeight: 600, color: i === 0 ? '#217FF1' : '#555' }}>{item}</span>
          {i === 0 && <span style={{ marginLeft: 'auto', fontSize: '10px', fontWeight: 700, color: '#217FF1', letterSpacing: '0.06em' }}>ALTO</span>}
        </div>
      ))}
    </div>
  )
}

function StepVisual2() {
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '12px', fontSize: '11px', fontWeight: 700, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        Plano de prioridades
      </div>
      {[
        { label: 'Follow-up automático', pct: 90, color: '#217FF1' },
        { label: 'Relatórios automáticos', pct: 68, color: '#5aabff' },
        { label: 'Gestão de CRM', pct: 44, color: '#a3c4f3' },
      ].map((item, i) => (
        <div key={i} style={{ marginBottom: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#333' }}>{item.label}</span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: item.color }}>{item.pct}%</span>
          </div>
          <div style={{ height: '6px', background: '#f0f2f8', borderRadius: '100px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${item.pct}%`, background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`, borderRadius: '100px' }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function StepVisual3() {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {[
        { label: 'Sistema construído', done: true },
        { label: 'Integrações ligadas', done: true },
        { label: 'Testes realizados', done: true },
        { label: 'Sistema activo', done: true, highlight: true },
      ].map((item, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '10px 14px',
          background: item.highlight ? '#EEF4FF' : '#F8FAFF',
          border: `1px solid ${item.highlight ? 'rgba(33,127,241,0.25)' : '#e8edf5'}`,
          borderRadius: '10px',
        }}>
          <div style={{
            width: 20, height: 20, borderRadius: '6px',
            background: item.done ? '#217FF1' : '#e8edf5',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            {item.done && (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
          <span style={{ fontSize: '13px', fontWeight: item.highlight ? 700 : 500, color: item.highlight ? '#217FF1' : '#444' }}>{item.label}</span>
          {item.highlight && (
            <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', animation: 'hero-pulse 2.2s ease-in-out infinite' }} />
              <span style={{ fontSize: '10px', color: '#4ade80', fontWeight: 700 }}>Live</span>
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default function AilyxSolution() {
  const headRef  = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        y: 32, opacity: 0, duration: 0.85, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: headRef.current, start: 'top 76%', once: true },
      })
      cardsRef.current.filter(Boolean).forEach((card, i) => {
        gsap.from(card, {
          y: 60, opacity: 0, duration: 0.85, ease: 'power3.out',
          delay: i * 0.15,
          scrollTrigger: { trigger: card, start: 'top 84%', once: true },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#fff', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }} id="mechanism">
      <div className="ayl-container">

        {/* Header */}
        <div ref={headRef} style={{ marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#EEF4FF', border: '1px solid rgba(33,127,241,0.2)',
            borderRadius: '100px', padding: '5px 14px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#217FF1', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Como funciona
            </span>
          </div>
          <h2 className="ayl-h2" style={{ color: '#0a1c42', marginBottom: '12px' }}>
            Não começamos pela tecnologia.<br />
            <span style={{ color: '#217FF1' }}>Começamos pelo que acontece na sua empresa.</span>
          </h2>
          <p style={{ color: '#666', fontSize: '17px', lineHeight: 1.65, maxWidth: '520px' }}>
            Identificamos os eventos que geram trabalho manual, percebemos o que precisa de acontecer a seguir — e construímos o sistema que executa esse processo.
          </p>
        </div>

        {/* 3 step cards */}
        <div className="ayl-solution-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {STEPS.map((step, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="ayl-card--hover"
              style={{
                background: step.accent ? '#06142e' : '#fff',
                border: `1.5px solid ${step.accent ? 'rgba(33,127,241,0.3)' : '#e8edf5'}`,
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Illustration area */}
              <div style={{
                background: step.accent
                  ? 'linear-gradient(135deg, rgba(33,127,241,0.15), rgba(14,40,100,0.3))'
                  : '#F8FAFF',
                borderBottom: `1px solid ${step.accent ? 'rgba(33,127,241,0.2)' : '#e8edf5'}`,
                minHeight: '220px',
              }}>
                {step.visual}
              </div>

              {/* Text */}
              <div style={{ padding: '24px' }}>
                <div style={{
                  fontSize: '11px', fontWeight: 700,
                  color: step.accent ? '#5aabff' : '#217FF1',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  marginBottom: '10px', fontFamily: 'Sora, sans-serif',
                }}>
                  {step.step}
                </div>
                <h3 style={{
                  fontFamily: 'Sora, sans-serif', fontWeight: 700,
                  fontSize: '20px', color: step.accent ? '#fff' : '#0a1c42',
                  letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '12px',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: step.accent ? 'rgba(255,255,255,0.55)' : '#666', lineHeight: 1.65, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/diagnostico" className="ayl-btn ayl-btn--primary">
            Começar o diagnóstico →
          </a>
          <span style={{ fontSize: '13px', color: '#aaa' }}>Gratuito · 60 min · Sem compromisso</span>
        </div>

      </div>
    </section>
  )
}
