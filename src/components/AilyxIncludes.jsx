import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DELIVERABLES = [
  {
    num: '01',
    title: 'Identificamos',
    desc: 'Qual é o trabalho que está a acontecer repetidamente na sua empresa? Mapeamos os eventos que geram trabalho manual recorrente.',
    detail: '60 min · Gratuito',
  },
  {
    num: '02',
    title: 'Quantificamos',
    desc: 'Quanto tempo, dinheiro ou capacidade está envolvido em cada fluxo? Cada oportunidade avaliada por impacto e complexidade.',
    detail: 'Priorização por impacto e retorno',
  },
  {
    num: '03',
    title: 'Priorizamos',
    desc: 'O que vale a pena assumir primeiro? Entregamos um plano claro com o fluxo de maior impacto imediato para o seu negócio.',
    detail: 'Plano de execução definido',
  },
  {
    num: '04',
    title: 'Construímos',
    desc: 'Implementamos o sistema de ponta a ponta — integrações, automações e lógica. A equipa não toca em nada técnico.',
    detail: 'Prazo conforme âmbito definido',
  },
  {
    num: '05',
    title: 'Medimos',
    desc: 'Comparamos o antes e o depois. Medimos o impacto real — tempo recuperado, receita protegida, capacidade libertada.',
    detail: 'Antes vs. depois documentado',
  },
]

export default function AilyxIncludes() {
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
    <section style={{ background: '#fff', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }} id="systems">
      <div className="ayl-container">

        <div className="ayl-includes-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>

          {/* Left — copy */}
          <div>
            <div className="ayl-section-label" style={{ marginBottom: '20px' }}>O que recebe</div>
            <h2 className="ayl-h2" style={{ marginBottom: '20px' }}>
              Do diagnóstico<br />ao sistema a funcionar.
            </h2>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.7, marginBottom: '16px' }}>
              Não entregamos um relatório e ficamos por aqui. Seguimos todo o processo até existir um sistema funcional — e a sua equipa não toca em nada técnico.
            </p>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.65, marginBottom: '32px' }}>
              No final do diagnóstico, decide se quer avançar. Sem pressão.
            </p>
            <a href="/diagnostico" className="ayl-btn ayl-btn--primary">
              Começar o diagnóstico →
            </a>
            <p style={{ marginTop: '12px', fontSize: '12px', color: '#bbb', marginBottom: 0 }}>
              Gratuito · 60 min · Sem compromisso
            </p>
          </div>

          {/* Right — deliverables */}
          <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {DELIVERABLES.map((d) => (
              <div key={d.num} className="ayl-card--hover" style={{
                background: '#F8FAFF',
                border: '1.5px solid #e8edf5',
                borderRadius: '16px',
                padding: '22px 24px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  fontFamily: 'Sora, sans-serif', fontWeight: 800,
                  fontSize: '36px', color: 'rgba(33,127,241,0.15)',
                  letterSpacing: '-0.05em', flexShrink: 0,
                  lineHeight: 1, marginTop: '-2px',
                  userSelect: 'none',
                }}>
                  {d.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', color: '#0a1c42', marginBottom: '6px' }}>
                    {d.title}
                  </div>
                  <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, margin: '0 0 8px 0' }}>
                    {d.desc}
                  </p>
                  <div style={{ fontSize: '11px', color: '#217FF1', fontWeight: 600, letterSpacing: '0.04em' }}>
                    {d.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
