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
  },
  {
    icon: '📄',
    title: 'Propostas enviadas e esquecidas',
    desc: 'Ninguém faz follow-up porque não há sistema. A oportunidade esfria.',
    metric: 'Até 40% das propostas nunca recebem 2º contacto',
  },
  {
    icon: '🔁',
    title: 'A equipa a copiar informação entre sistemas',
    desc: 'CRM, Excel, email, WhatsApp. Alguém está sempre a fazer a ponte manual.',
    metric: 'Média de 5–8h/semana por colaborador',
  },
  {
    icon: '📊',
    title: 'Relatórios que demoram horas a preparar',
    desc: 'Dados que podiam estar prontos automaticamente consomem tempo da equipa.',
    metric: 'Trabalho de baixo valor com alto custo de oportunidade',
  },
  {
    icon: '🧾',
    title: 'Faturação atrasada por falta de processo',
    desc: 'A informação não chega a tempo. O cash flow ressente-se.',
    metric: 'Atraso médio de 7 dias por falta de automação',
  },
  {
    icon: '💬',
    title: 'Clientes inativos que ninguém reativa',
    desc: 'A base de clientes existente é a fonte de receita mais barata — e a mais ignorada.',
    metric: 'Custo de reativação 5x menor que aquisição',
  },
]

export default function AilyxServices() {
  const sectionRef = useRef(null)
  const trackRef   = useRef(null)
  const headRef    = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) {
      const ctx = gsap.context(() => {
        gsap.from(headRef.current.children, {
          y: 24, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: headRef.current, start: 'top 80%', once: true },
        })
        gsap.from(Array.from(trackRef.current.children), {
          y: 32, opacity: 0, duration: 0.65, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: trackRef.current, start: 'top 78%', once: true },
        })
      })
      return () => ctx.revert()
    }

    const ctx = gsap.context(() => {
      // Heading clip-path reveal
      const headChildren = Array.from(headRef.current.children)
      gsap.set(headChildren, { clipPath: 'inset(0 0 100% 0)', y: 12 })
      gsap.to(headChildren, {
        clipPath: 'inset(0 0 0% 0)', y: 0,
        duration: 0.85, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      })

      const track = trackRef.current
      const getDistance = () => track.scrollWidth - window.innerWidth + 120

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          scrub: 1.4,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      Array.from(track.children).forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 28, scale: 0.94 },
          {
            opacity: 1, y: 0, scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: 'left right',
              end: 'left 55%',
              scrub: true,
            },
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: '#fff', borderTop: '1px solid #e8edf5', overflow: 'hidden' }}
    >
      {/* Header */}
      <div className="ayl-container" style={{ paddingTop: 'clamp(80px, 10vw, 120px)', paddingBottom: '48px' }}>
        <div ref={headRef}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#F3F3F3', border: '1px solid #e0e0e0',
            borderRadius: '100px', padding: '5px 14px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              O problema
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'end' }}>
            <h2 className="ayl-h2" style={{ color: '#0a1c42', margin: 0 }}>
              A empresa cresce.<br />
              <span style={{ color: '#217FF1' }}>A equipa afoga-se em trabalho manual.</span>
            </h2>
            <p style={{ color: '#888', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
              Cada vez que algo acontece — um lead, uma proposta, um pedido — alguém tem de se lembrar de agir. É aí que o dinheiro desaparece.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '16px',
          paddingLeft: 'max(calc((100vw - 1200px) / 2), 40px)',
          paddingRight: '200px',
          paddingBottom: 'clamp(80px, 10vw, 120px)',
          willChange: 'transform',
          flexWrap: window.innerWidth <= 768 ? 'wrap' : 'nowrap',
        }}
      >
        {PAINS.map((pain, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: 'clamp(300px, 32vw, 380px)',
              background: '#F8FAFF',
              border: '1.5px solid #e8edf5',
              borderRadius: '20px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: '12px',
              background: 'rgba(33,127,241,0.07)',
              border: '1px solid rgba(33,127,241,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '22px', flexShrink: 0,
            }}>
              {pain.icon}
            </div>
            <div>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', color: '#0a1c42', marginBottom: '8px', lineHeight: 1.3 }}>
                {pain.title}
              </div>
              <p style={{ fontSize: '13.5px', color: '#888', lineHeight: 1.65, margin: 0 }}>
                {pain.desc}
              </p>
            </div>
            <div style={{
              marginTop: 'auto',
              fontSize: '12px', fontWeight: 700,
              color: '#217FF1',
              background: '#EEF4FF',
              border: '1px solid rgba(33,127,241,0.15)',
              borderRadius: '10px',
              padding: '10px 12px',
              lineHeight: 1.4,
            }}>
              {pain.metric}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
