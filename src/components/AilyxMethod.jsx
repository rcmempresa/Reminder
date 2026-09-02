import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const METHOD_STEPS = [
  { num: '01', label: 'Diagnóstico', desc: 'Identificamos onde está o problema.' },
  { num: '02', label: 'Priorizar',   desc: 'Escolhemos pelo impacto real.' },
  { num: '03', label: 'Desenhar',    desc: 'Redesenhamos antes de automatizar.' },
  { num: '04', label: 'Construir',   desc: 'Desenvolvemos o sistema.' },
  { num: '05', label: 'Lançar',      desc: 'Colocamos em produção.' },
  { num: '06', label: 'Medir',       desc: 'Aferimos resultados reais.' },
  { num: '07', label: 'Expandir',    desc: 'Resolvemos o próximo problema.' },
]

export default function AilyxMethod() {
  const methodRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(methodRef.current.children, {
        y: 36, opacity: 0, duration: 0.85, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: methodRef.current, start: 'top 78%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{
      background: 'linear-gradient(180deg, #08224e 0%, #0d3080 100%)',
      padding: 'clamp(80px, 10vw, 120px) 0',
    }} id="method">
      <div className="ayl-container">

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '100px', padding: '6px 18px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#90c8ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              A Nossa Metodologia
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 52px)',
            color: 'white', lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '12px',
          }}>
            Um problema real.<br />Um sistema funcional.<br />
            <span style={{ color: '#90c8ff' }}>Depois, o próximo.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
            Não tentamos resolver tudo ao mesmo tempo. Resolvemos um problema de cada vez — bem, de forma permanente — e expandimos a partir daí.
          </p>
        </div>

        <div ref={methodRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', marginBottom: '48px' }}>
          {METHOD_STEPS.map((step, i) => (
            <div key={step.num} style={{
              background: i === 0 ? 'rgba(33,127,241,0.28)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${i === 0 ? 'rgba(144,200,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '14px',
              padding: '22px 14px',
              textAlign: 'center',
              position: 'relative',
            }}>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '10px', letterSpacing: '0.1em', color: i === 0 ? '#90c8ff' : 'rgba(255,255,255,0.22)', marginBottom: '10px' }}>
                {step.num}
              </div>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', color: 'white', marginBottom: '8px' }}>
                {step.label}
              </div>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, margin: 0 }}>
                {step.desc}
              </p>
              {i < METHOD_STEPS.length - 1 && (
                <div style={{ position: 'absolute', right: '-12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.15)', fontSize: '14px', zIndex: 1 }}>→</div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/diagnostico" className="ayl-btn ayl-btn--white">
            Começar pelo primeiro problema →
          </a>
          <p style={{ marginTop: '14px', fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
            Gratuito · 7 dias · Sem compromisso
          </p>
        </div>

      </div>
    </section>
  )
}
