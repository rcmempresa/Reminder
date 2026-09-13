import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num: '01', label: 'Diagnóstico',
    title: 'Descobrimos onde está o desperdício',
    desc: 'Sessão gratuita de 60 min onde mapeamos as 5 áreas da empresa. Identificamos processos manuais recorrentes e quantificamos o impacto de cada um.',
    tag: 'Gratuito · 60 min',
    accent: false,
  },
  {
    num: '02', label: 'Priorização',
    title: 'Ranking por ROI',
    desc: 'Cada oportunidade é pontuada por impacto financeiro, tempo consumido, frequência e facilidade de implementação. Entregamos um Revenue & Capacity Map com as prioridades.',
    tag: 'Revenue & Capacity Map',
    accent: true,
  },
  {
    num: '03', label: 'Implementação',
    title: 'Construímos o sistema',
    desc: 'Implementamos de ponta a ponta — integrações, automações, agentes de IA. A equipa não toca em nada técnico. Prazo conforme complexidade definida.',
    tag: 'Sprint de implementação',
    accent: false,
  },
  {
    num: '04', label: 'Medição',
    title: 'Antes vs. depois documentado',
    desc: 'Medimos horas poupadas, receita recuperada, capacidade libertada e erros reduzidos. O impacto é visível, mensurável e documentado.',
    tag: 'Impacto em números',
    accent: false,
  },
  {
    num: '05', label: 'Optimização',
    title: 'Crescemos com a empresa',
    desc: 'Monitorização, manutenção e novas automações à medida que o negócio cresce. O sistema evolui continuamente sem necessidade de mais headcount.',
    tag: 'Gestão mensal',
    accent: false,
  },
]

export default function AilyxSolution() {
  const headRef  = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.set(headRef.current.children, { clipPath: 'inset(0 0 100% 0)', y: 10 })
      gsap.to(headRef.current.children, {
        clipPath: 'inset(0 0 0% 0)', y: 0,
        duration: 0.85, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: headRef.current, start: 'top 76%', once: true },
      })

      // Initial state: all steps dim
      stepsRef.current.filter(Boolean).forEach((el) => {
        gsap.set(el, { opacity: 0.28 })
      })

      // Entrance: slide up on first sight
      stepsRef.current.filter(Boolean).forEach((el, i) => {
        gsap.from(el, {
          y: 40, duration: 0.7, ease: 'power3.out', delay: i * 0.06,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      // Scrub: each step brightens as it enters center of viewport
      stepsRef.current.filter(Boolean).forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 72%',
            end: 'top 38%',
            scrub: 0.8,
          },
        })
        // Fade back out as it leaves
        gsap.to(el, {
          opacity: 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'bottom 50%',
            end: 'bottom 20%',
            scrub: 0.8,
          },
        })
      })
      // Keep last step fully visible
      const last = stepsRef.current.filter(Boolean).slice(-1)[0]
      if (last) ScrollTrigger.create({
        trigger: last,
        start: 'top 38%',
        onEnter: () => gsap.set(last, { opacity: 1 }),
        onLeaveBack: () => gsap.set(last, { opacity: 0.28 }),
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#fff', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }} id="mechanism">
      <div className="ayl-container">

        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            Da primeira conversa<br />ao sistema a funcionar.
          </h2>
          <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.65, maxWidth: '440px', margin: '0 auto' }}>
            Um processo claro, sem surpresas, com resultados mensuráveis em cada fase.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '780px', margin: '0 auto' }}>
          {STEPS.map((step, i) => (
            <div
              key={i}
              ref={el => stepsRef.current[i] = el}
              style={{
                display: 'grid',
                gridTemplateColumns: '52px 1fr auto',
                gap: '20px',
                alignItems: 'center',
                padding: '22px 28px',
                background: step.accent ? '#06102a' : '#F8FAFF',
                border: `1.5px solid ${step.accent ? 'rgba(33,127,241,0.3)' : '#e8edf5'}`,
                borderRadius: '16px',
              }}
            >
              <div style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 800,
                fontSize: '30px', color: step.accent ? 'rgba(90,171,255,0.35)' : 'rgba(33,127,241,0.15)',
                letterSpacing: '-0.04em', lineHeight: 1, userSelect: 'none',
              }}>
                {step.num}
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 700, color: step.accent ? '#5aabff' : '#217FF1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Sora, sans-serif' }}>
                  {step.label}
                </div>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', color: step.accent ? '#fff' : '#0a1c42', marginBottom: '5px' }}>
                  {step.title}
                </div>
                <p style={{ fontSize: '13px', color: step.accent ? 'rgba(255,255,255,0.5)' : '#666', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
              <div style={{
                whiteSpace: 'nowrap', fontSize: '11px', fontWeight: 600,
                color: step.accent ? '#5aabff' : '#217FF1',
                background: step.accent ? 'rgba(33,127,241,0.15)' : '#EEF4FF',
                border: `1px solid ${step.accent ? 'rgba(33,127,241,0.3)' : 'rgba(33,127,241,0.15)'}`,
                borderRadius: '100px', padding: '5px 12px',
              }}>
                {step.tag}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="/diagnostico" className="ayl-btn ayl-btn--primary">
            Começar pelo diagnóstico gratuito →
          </a>
          <span style={{ fontSize: '13px', color: '#aaa' }}>60 min · Sem compromisso</span>
        </div>

      </div>
    </section>
  )
}
