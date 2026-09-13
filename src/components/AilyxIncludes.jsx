import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DELIVERABLES = [
  {
    num: '01',
    title: 'Revenue & Capacity Map',
    desc: 'Em 60 minutos mapeamos os fluxos de trabalho da sua empresa e identificamos exatamente onde está o desperdício de tempo, leads perdidos e capacidade não aproveitada.',
    outcome: 'Sabe onde está o problema antes de gastar um euro.',
  },
  {
    num: '02',
    title: 'Plano de ação priorizado',
    desc: 'Entregamos uma lista ordenada por impacto: quais os sistemas a implementar primeiro, o que automatizam e qual o resultado esperado para o seu negócio.',
    outcome: 'Clareza total sobre o que atacar e porquê.',
  },
  {
    num: '03',
    title: 'Implementação de ponta a ponta',
    desc: 'Construímos o sistema completo — integrações, automações, lógica de negócio. A sua equipa não toca em nada técnico. Nós tratamos de tudo.',
    outcome: 'Sistema a funcionar, não um relatório esquecido.',
  },
  {
    num: '04',
    title: 'Impacto documentado',
    desc: 'Medimos o antes e o depois. Horas recuperadas, leads que já não escapam, processos que deixaram de depender de alguém para acontecer.',
    outcome: 'Números concretos, não estimativas.',
  },
]

export default function AilyxIncludes() {
  const headRef = useRef(null)
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
          y: 40, opacity: 0, duration: 0.65, ease: 'power3.out', delay: i * 0.09,
          scrollTrigger: { trigger: headRef.current, start: 'top 72%', once: true },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#fff', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }} id="processo">
      <div className="ayl-container">

        {/* Header */}
        <div ref={headRef} style={{ marginBottom: '52px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#EEF4FF', border: '1px solid rgba(33,127,241,0.25)',
            borderRadius: '100px', padding: '5px 14px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#217FF1', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Como funciona
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'end' }}>
            <h2 className="ayl-h2" style={{ color: '#0a1c42', margin: 0 }}>
              Do diagnóstico ao sistema a funcionar.
            </h2>
            <p style={{ color: '#888', fontSize: '16px', lineHeight: 1.7, margin: 0 }}>
              Não entregamos relatórios. Entregamos sistemas que funcionam — e que a equipa não tem de gerir manualmente.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {DELIVERABLES.map((d, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="ayl-card--hover"
              style={{
                background: i === 2 ? '#06102a' : '#F8FAFF',
                border: i === 2 ? '1.5px solid rgba(33,127,241,0.25)' : '1.5px solid #e8edf5',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 800,
                fontSize: '48px', lineHeight: 1,
                color: i === 2 ? 'rgba(33,127,241,0.25)' : 'rgba(33,127,241,0.12)',
                letterSpacing: '-0.04em', userSelect: 'none',
              }}>
                {d.num}
              </div>
              <div>
                <div style={{
                  fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '17px',
                  color: i === 2 ? '#fff' : '#0a1c42',
                  marginBottom: '10px', lineHeight: 1.3,
                }}>
                  {d.title}
                </div>
                <p style={{ fontSize: '14px', color: i === 2 ? 'rgba(255,255,255,0.55)' : '#777', lineHeight: 1.65, margin: 0 }}>
                  {d.desc}
                </p>
              </div>
              <div style={{
                marginTop: 'auto',
                fontSize: '13px', fontWeight: 700,
                color: i === 2 ? '#5aabff' : '#217FF1',
                paddingTop: '16px',
                borderTop: `1px solid ${i === 2 ? 'rgba(255,255,255,0.08)' : '#e8edf5'}`,
              }}>
                → {d.outcome}
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{
          marginTop: '40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '24px', flexWrap: 'wrap',
          padding: '24px 32px',
          background: '#F0F5FF',
          borderRadius: '16px',
          border: '1.5px solid rgba(33,127,241,0.15)',
        }}>
          <div style={{ fontSize: '15px', fontWeight: 600, color: '#0a1c42' }}>
            O diagnóstico é gratuito e sem compromisso.
            <span style={{ fontWeight: 400, color: '#888', marginLeft: '8px' }}>
              Decide depois se quer avançar.
            </span>
          </div>
          <a href="/diagnostico" className="ayl-btn ayl-btn--primary" style={{ flexShrink: 0 }}>
            Marcar diagnóstico →
          </a>
        </div>

      </div>
    </section>
  )
}
