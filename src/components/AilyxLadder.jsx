import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  { num: '01', label: 'Diagnóstico Gratuito',    sub: 'Descobrir.',              color: '#217FF1', cta: true },
  { num: '02', label: 'Sistema de Automação',    sub: 'Construir.',              color: '#0e4dc4', cta: false },
  { num: '03', label: 'Gestão dos Sistemas',     sub: 'Gerir e evoluir.',        color: '#08224e', cta: false },
  { num: '04', label: 'Novos Sistemas',          sub: 'Expandir.',               color: '#333',    cta: false },
  { num: '05', label: 'Parceiro Estratégico',    sub: 'Transformação contínua.', color: '#111',    cta: false },
]

export default function AilyxLadder() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current.children, {
        y: 32, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#F3F6FB', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }}>
      <div className="ayl-container">

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="ayl-section-label" style={{ display: 'inline-block', marginBottom: '16px' }}>
            O modelo de relação
          </div>
          <h2 className="ayl-h2" style={{ marginBottom: '12px' }}>
            Uma parceria que cresce<br />com o seu negócio.
          </h2>
        </div>

        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '680px', margin: '0 auto' }}>
          {STEPS.map((step, i) => (
            <div key={step.num} style={{
              display: 'flex', alignItems: 'center', gap: '20px',
              padding: '20px 28px',
              background: i === 0 ? '#EEF4FF' : 'white',
              border: `1.5px solid ${i === 0 ? 'rgba(33,127,241,0.3)' : '#e8edf5'}`,
              borderRadius: '16px',
              boxShadow: i === 0 ? '0 4px 24px rgba(33,127,241,0.1)' : 'none',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: '12px', flexShrink: 0,
                background: step.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '12px', color: 'white' }}>{step.num}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', color: '#111', marginBottom: '2px' }}>
                  {step.label}
                </div>
                <div style={{ fontSize: '13px', color: '#888' }}>{step.sub}</div>
              </div>
              {step.cta && (
                <a href="/diagnostico" className="ayl-btn ayl-btn--primary" style={{ fontSize: '13px', padding: '10px 20px', flexShrink: 0 }}>
                  Começar aqui →
                </a>
              )}
              {i < STEPS.length - 1 && !step.cta && (
                <div style={{ fontSize: '12px', color: '#ddd' }}>↓</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
