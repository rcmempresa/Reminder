import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AilyxFooterCTA() {
  const contentRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: contentRef.current, start: 'top 75%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{
      background: 'linear-gradient(135deg, #08224e 0%, #1056cc 55%, #217FF1 100%)',
      padding: 'clamp(80px, 10vw, 120px) 0',
      position: 'relative',
      overflow: 'hidden',
    }} id="contact">

      {/* Subtle dot grid on blue */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '26px 26px',
        pointerEvents: 'none',
      }} />

      <div className="ayl-container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={contentRef} style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '100px', padding: '6px 18px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#c8e8ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Pronto para começar?
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 52px)',
            color: 'white', lineHeight: 1.08, letterSpacing: '-0.04em', margin: 0,
          }}>
            Descubra quanto mais a sua empresa<br />poderia fazer com a mesma equipa.
          </h2>

          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', maxWidth: '500px', margin: 0, lineHeight: 1.65 }}>
            O próximo gargalo da sua empresa pode ser mais fácil de resolver do que pensa. Em 7 dias identificamos onde a IA pode criar maior impacto. Depois decide se quer avançar.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <a href="/diagnostico" className="ayl-btn ayl-btn--white" style={{ fontSize: '17px', padding: '18px 40px' }}>
              Descobrir a minha maior oportunidade →
            </a>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
              Diagnóstico gratuito · 7 dias · Sem compromisso
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
