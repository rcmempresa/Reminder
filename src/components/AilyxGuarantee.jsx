import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const POINTS = [
  { text: 'O diagnóstico é gratuito — sem qualquer compromisso' },
  { text: 'Não começa a pagar gestão contínua antes da implementação estar funcional' },
  { text: 'Se o sistema acordado não estiver a funcionar conforme o âmbito definido, continuamos a trabalhar até estar' },
  { text: 'Tratamos da implementação de ponta a ponta — a sua equipa não toca em nada técnico' },
]

export default function AilyxGuarantee() {
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current.children, {
        y: 36, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: leftRef.current, start: 'top 78%', once: true },
      })
      gsap.from(rightRef.current, {
        scale: 0.92, opacity: 0, duration: 1.0, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: rightRef.current, start: 'top 80%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#fff', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }}>
      <div className="ayl-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>

          <div ref={leftRef} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <div className="ayl-section-label" style={{ marginBottom: '20px' }}>A nossa garantia</div>
              <h2 className="ayl-h2" style={{ marginBottom: '16px', color: '#0a1c42' }}>
                Sistema funcional — ou continuamos até estar.
              </h2>
              <p style={{ color: '#666', fontSize: '17px', lineHeight: 1.65, maxWidth: '460px', marginBottom: '20px' }}>
                Não controlamos o mercado, as suas vendas ou as decisões dos seus clientes. Controlamos aquilo que está nas nossas mãos: a implementação, a qualidade e o funcionamento do sistema.
              </p>
              <div style={{ padding: '18px 22px', background: 'linear-gradient(135deg, #EEF4FF, #F8FAFF)', border: '1.5px solid rgba(33,127,241,0.2)', borderRadius: '14px' }}>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '15px', color: '#0a1c42', lineHeight: 1.45 }}>
                  Não prometemos uma faturação que não controlamos.<br />
                  <span style={{ color: '#217FF1' }}>Garantimos aquilo que controlamos: a entrega do sistema.</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {POINTS.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 16px', background: '#F8FAFF', border: '1.5px solid #e8edf5', borderRadius: '12px' }}>
                  <span style={{
                    width: 26, height: 26, borderRadius: '8px',
                    background: '#EEF4FF', border: '1px solid rgba(33,127,241,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#217FF1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span style={{ fontSize: '14px', color: '#444', lineHeight: 1.55, paddingTop: '3px' }}>
                    {p.text}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <a href="/diagnostico" className="ayl-btn ayl-btn--primary">
                Começar o Diagnóstico Gratuito →
              </a>
              <p style={{ marginTop: '12px', fontSize: '13px', color: '#aaa' }}>
                7 dias · Gratuito · Sem compromisso
              </p>
            </div>
          </div>

          <div ref={rightRef} style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 'clamp(240px, 30vw, 340px)', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {[1, 0.72, 0.46].map((scale, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  width: `${scale * 100}%`, height: `${scale * 100}%`,
                  borderRadius: '50%',
                  border: `1px solid rgba(33,127,241,${0.1 + i * 0.08})`,
                  animation: `robot-ring-pulse ${2.5 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }} />
              ))}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <svg width="90" height="108" viewBox="0 0 100 120" fill="none">
                  <path d="M50 4L8 20v32c0 24 18 46 42 54 24-8 42-30 42-54V20L50 4z" fill="#EEF4FF" stroke="rgba(33,127,241,0.3)" strokeWidth="1.5" />
                  <path d="M50 18L20 30v22c0 16 12 30 30 36 18-6 30-20 30-36V30L50 18z" fill="#dce9ff" stroke="rgba(33,127,241,0.2)" strokeWidth="1" />
                  <polyline points="34 60 46 72 68 48" stroke="#217FF1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 60px)', color: '#0a1c42', lineHeight: 1, letterSpacing: '-0.04em' }}>
                    Risco<br /><span style={{ color: '#217FF1' }}>Zero</span>
                  </div>
                  <div style={{ marginTop: '10px', fontSize: '11px', fontWeight: 600, color: '#aaa', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    para si
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
