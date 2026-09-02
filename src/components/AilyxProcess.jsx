import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const STEPS = [
  {
    num: '01',
    label: 'Conhecer o Negócio',
    day: 'Dia 1',
    desc: 'Entendemos o negócio, a equipa, as ferramentas e os processos. Percebemos onde a empresa passa mais tempo e onde existem maiores pontos de fricção.',
  },
  {
    num: '02',
    label: 'Mapear os Processos',
    day: 'Dias 2–4',
    desc: 'Mapeamos os processos críticos do negócio. Identificamos os fluxos de trabalho, as dependências entre equipas e os pontos onde o trabalho abranda ou para.',
  },
  {
    num: '03',
    label: 'Identificar Oportunidades',
    day: 'Dias 5–6',
    desc: 'Identificamos oportunidades de automação e IA. Calculamos o impacto potencial de cada uma e classificamos por prioridade e viabilidade.',
  },
  {
    num: '04',
    label: 'Plano de Ação',
    day: 'Dia 7',
    desc: 'Entregamos o Plano de Prioridades — com as oportunidades identificadas, o impacto esperado, a complexidade de cada uma e a ordem de implementação recomendada.',
    detail: 'Entrega do Plano de Prioridades',
  },
]

export default function AilyxProcess() {
  const stepsRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      const children = Array.from(stepsRef.current.children)
      children.forEach((el, i) => {
        gsap.from(el, {
          x: i % 2 === 0 ? -30 : 30, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="ayl-section ayl-section--alt" id="processo">
      <div className="ayl-container">

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px', marginBottom: '56px', flexWrap: 'wrap' }}>
          <div>
            <div className="ayl-section-label">Como funciona o Diagnóstico</div>
            <h2 className="ayl-h2">
              7 dias para saber<br />onde está a oportunidade.
            </h2>
          </div>
          <div style={{ maxWidth: '320px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#217FF1', marginBottom: '4px' }}>
              Conhecer → Mapear → Identificar → Planear
            </div>
            <div style={{ fontSize: '14px', color: '#888' }}>Um processo estruturado. Uma entrega concreta.</div>
          </div>
        </div>

        <div ref={stepsRef} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {STEPS.map((step, i) => (
            <div key={step.num} style={{
              display: 'grid',
              gridTemplateColumns: '180px 1px 1fr',
              gap: '0 32px',
              alignItems: 'stretch',
              minHeight: '100px',
            }}>
              {/* Left */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', paddingTop: '4px', paddingRight: '32px' }}>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 3vw, 40px)', color: '#e8edf5', lineHeight: 1, letterSpacing: '-0.04em' }}>
                  {step.num}
                </div>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#217FF1', marginTop: '4px', textAlign: 'right' }}>
                  {step.label}
                </div>
                <div style={{ fontSize: '11px', color: '#aaa', marginTop: '3px', textAlign: 'right' }}>
                  {step.day}
                </div>
              </div>

              {/* Timeline */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', flexShrink: 0, background: i === 3 ? '#217FF1' : '#e8edf5', border: `2px solid ${i === 3 ? '#217FF1' : '#d0d7e4'}`, marginTop: '8px' }} />
                {i < STEPS.length - 1 && <div style={{ width: 1, flex: 1, background: '#e8edf5', marginTop: '4px' }} />}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: i < STEPS.length - 1 ? '44px' : '0', paddingTop: '0' }}>
                <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 'clamp(16px, 1.8vw, 20px)', color: '#111', letterSpacing: '-0.02em', marginBottom: '10px', lineHeight: 1.3 }}>
                  {step.label}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.65, marginBottom: step.detail ? '10px' : '0', maxWidth: '560px' }}>
                  {step.desc}
                </p>
                {step.detail && (
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#217FF1', background: '#EEF4FF', borderRadius: '100px', padding: '4px 12px', display: 'inline-block' }}>
                    {step.detail}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
          <a href="/diagnostico" className="ayl-btn ayl-btn--primary">
            Quero identificar as minhas oportunidades →
          </a>
          <span style={{ fontSize: '13px', color: '#aaa' }}>
            7 dias · Análise completa · Plano de prioridades
          </span>
        </div>

      </div>
    </section>
  )
}
