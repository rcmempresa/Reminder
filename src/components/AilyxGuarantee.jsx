import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GUARANTEES = [
  {
    icon: '🔍',
    title: 'Garantia de Diagnóstico',
    body: 'Se no diagnóstico gratuito não identificarmos pelo menos €30.000 em oportunidades de receita ou eficiência, não avançamos para proposta — e dizemos-lhe porquê.',
    tag: '€30k mínimo identificado — ou não avançamos',
    color: '#5aabff',
  },
  {
    icon: '⚙️',
    title: 'Garantia de Entrega',
    body: 'Se o sistema não estiver funcional conforme o âmbito acordado dentro do prazo definido, continuamos a trabalhar até estar — sem custo adicional.',
    tag: 'Sistema funcional garantido ou trabalhamos de borla',
    color: '#4ade80',
  },
  {
    icon: '↩️',
    title: 'Garantia de Satisfação — 90 dias',
    body: 'Se nos primeiros 90 dias o sistema implementado não estiver a funcionar conforme acordado, devolvemos 100% do valor pago. Sem letras pequenas.',
    tag: 'Devolução total em 90 dias',
    color: '#f59e0b',
  },
]

export default function AilyxGuarantee() {
  const headRef  = useRef(null)
  const cardsRef = useRef([])
  const boxRef   = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        y: 28, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: headRef.current, start: 'top 78%', once: true },
      })
      cardsRef.current.filter(Boolean).forEach((card, i) => {
        gsap.from(card, {
          y: 40, opacity: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.1,
          scrollTrigger: { trigger: headRef.current, start: 'top 72%', once: true },
        })
      })
      gsap.from(boxRef.current, {
        y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.3,
        scrollTrigger: { trigger: boxRef.current, start: 'top 82%', once: true },
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
            background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)',
            borderRadius: '100px', padding: '5px 14px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#16a34a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Risco zero para si
            </span>
          </div>
          <h2 className="ayl-h2" style={{ color: '#0a1c42', marginBottom: '16px' }}>
            Três garantias.<br />
            <span style={{ color: '#217FF1' }}>Uma por cada fase do processo.</span>
          </h2>
          <p style={{ color: '#666', fontSize: '17px', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
            Não prometemos resultados de negócio que não controlamos. Garantimos aquilo que está nas nossas mãos — e fazemo-lo com consequências reais se falharmos.
          </p>
        </div>

        {/* Guarantee cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {GUARANTEES.map((g, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="ayl-card--hover"
              style={{
                background: '#F8FAFF',
                border: '1.5px solid #e8edf5',
                borderRadius: '20px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: '12px',
                background: `${g.color}15`,
                border: `1px solid ${g.color}35`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '22px',
              }}>
                {g.icon}
              </div>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', color: '#0a1c42', lineHeight: 1.35 }}>
                {g.title}
              </div>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.65, margin: 0, flex: 1 }}>
                {g.body}
              </p>
              <div style={{
                fontSize: '12px', fontWeight: 700,
                color: g.color,
                background: `${g.color}12`,
                border: `1px solid ${g.color}30`,
                borderRadius: '10px',
                padding: '10px 12px',
                lineHeight: 1.4,
              }}>
                ✓ {g.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div
          ref={boxRef}
          style={{
            background: '#06102a',
            borderRadius: '20px',
            padding: '36px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ maxWidth: '560px' }}>
            <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(18px, 2vw, 26px)', color: '#fff', marginBottom: '10px', letterSpacing: '-0.03em', lineHeight: 1.3 }}>
              O risco é todo nosso.<br />
              <span style={{ color: '#5aabff' }}>O benefício é todo seu.</span>
            </div>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              Se não identificarmos €30k+ em oportunidades, não avançamos. Se o sistema não funcionar em 90 dias, devolvemos tudo. Não há nada a perder em começar.
            </p>
          </div>
          <a
            href="/diagnostico"
            style={{
              flexShrink: 0,
              background: '#217FF1', color: '#fff',
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: '14px', padding: '16px 32px',
              borderRadius: '14px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center',
              whiteSpace: 'nowrap',
              transition: 'transform 0.18s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}
          >
            Ver quanto estou a perder →
          </a>
        </div>

      </div>
    </section>
  )
}
