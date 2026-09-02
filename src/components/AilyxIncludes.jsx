import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DELIVERABLES = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Analisamos os processos críticos da sua empresa e identificamos onde existe maior potencial de melhoria.',
    detail: '7 dias · Gratuito',
  },
  {
    num: '02',
    title: 'Mapa de prioridades',
    desc: 'Cada oportunidade avaliada por impacto, complexidade e retorno. Uma visão clara do que fazer primeiro.',
    detail: 'Priorização por impacto e retorno',
  },
  {
    num: '03',
    title: 'Plano de implementação',
    desc: 'Desenhamos como a solução deve funcionar antes de construir — processos, integrações e lógica necessária.',
    detail: 'Arquitetura e plano detalhado',
  },
  {
    num: '04',
    title: 'Implementação completa',
    desc: 'Construímos, configuramos, integramos e testamos tudo. A sua equipa não toca em nada técnico.',
    detail: 'Construção, integrações e testes',
  },
  {
    num: '05',
    title: 'Lançamento',
    desc: 'Colocamos o sistema a funcionar e acompanhamos o arranque para garantir que tudo corre bem no contexto real.',
    detail: 'Validação e arranque',
  },
  {
    num: '06',
    title: 'Melhoria contínua',
    desc: 'Depois do lançamento, medimos, corrigimos e melhoramos. E identificamos a próxima oportunidade.',
    detail: 'Monitorização e evolução',
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
    <section style={{ background: '#fff', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }}>
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
              Gratuito · 7 dias · Sem compromisso
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
