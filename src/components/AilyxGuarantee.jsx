import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GUARANTEES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Diagnóstico sem risco',
    body: '60 minutos gratuitos. Recebe o mapa completo da empresa — independentemente de avançar ou não.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    title: 'Implementação garantida',
    body: 'Se o sistema não estiver funcional dentro do prazo acordado, continuamos até estar. Sem custo adicional.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>
      </svg>
    ),
    title: 'Devolução total em 90 dias',
    body: 'Se em 90 dias o sistema não estiver a funcionar conforme o âmbito definido, devolvemos 100% do valor pago.',
  },
]

export default function AilyxGuarantee() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current.children, {
        y: 36, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#06102a', padding: 'clamp(80px, 10vw, 120px) 0' }}>
      <div className="ayl-container">
        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', textAlign: 'center' }}>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)',
            borderRadius: '100px', padding: '5px 14px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#4ade80', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              A nossa garantia
            </span>
          </div>

          <div style={{ maxWidth: '720px' }}>
            <h2 style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.15,
              margin: '0 0 24px 0',
            }}>
              Se não funcionar,<br />
              <span style={{ color: '#5aabff' }}>não pagou nada.</span>
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
              O diagnóstico é sempre gratuito. Só avança para implementação se quiser — e se o sistema não estiver funcional conforme o acordado em 90 dias, devolvemos tudo.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', width: '100%', textAlign: 'left' }}>
            {GUARANTEES.map((g, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                <div style={{ color: '#5aabff' }}>{g.icon}</div>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', color: '#fff' }}>
                  {g.title}
                </div>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: 0 }}>
                  {g.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <a
              href="/diagnostico"
              style={{
                background: '#217FF1', color: '#fff',
                fontFamily: 'Sora, sans-serif', fontWeight: 700,
                fontSize: '15px', padding: '16px 36px',
                borderRadius: '14px', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center',
                transition: 'transform 0.18s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = ''}
            >
              Marcar diagnóstico gratuito →
            </a>
            <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.25)' }}>
              Sem compromisso · Apenas 4 vagas por mês
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
