import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AilyxReframe() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current.children, {
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.14,
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#fff', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }}>
      <div className="ayl-container">
        <div ref={ref} style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>

          <div className="ayl-section-label" style={{ display: 'inline-block', marginBottom: '24px' }}>
            A questão que muda tudo
          </div>

          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: 'clamp(26px, 3.8vw, 54px)',
            color: '#0a1c42', lineHeight: 1.08, letterSpacing: '-0.05em',
            marginBottom: '48px',
          }}>
            Enquanto contrata para crescer,<br />
            os melhores <span style={{ color: '#217FF1' }}>eliminam o trabalho que não devia existir.</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '24px',
            alignItems: 'center',
            marginBottom: '48px',
            textAlign: 'left',
          }}>
            <div style={{ padding: '28px', background: '#F8FAFF', border: '1.5px solid #e8edf5', borderRadius: '18px' }}>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '12px', color: '#bbb', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                A resposta habitual
              </div>
              {['Contratar mais pessoas', 'Comprar mais software', 'Trabalhar mais horas', 'Adicionar mais reuniões'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </span>
                  <span style={{ fontSize: '14px', color: '#666' }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '13px', color: '#217FF1', letterSpacing: '0.06em' }}>VS</div>
            </div>

            <div style={{ padding: '28px', background: '#EEF4FF', border: '1.5px solid rgba(33,127,241,0.25)', borderRadius: '18px' }}>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '12px', color: '#217FF1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                A pergunta certa
              </div>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '17px', color: '#0a1c42', lineHeight: 1.45, marginBottom: '14px' }}>
                "Que trabalho está a consumir a minha equipa que não deveria existir?"
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, margin: 0 }}>
                Identificar e eliminar esse trabalho vale mais do que qualquer contratação. É capacidade criada sem custo fixo adicional.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <div style={{ padding: '20px 28px', background: '#F3F6FB', borderRadius: '14px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', color: '#888' }}>
                Não começamos
              </div>
              <div style={{ fontSize: '13px', color: '#bbb', marginTop: '2px' }}>pela tecnologia</div>
            </div>
            <div style={{ padding: '20px 28px', background: '#217FF1', borderRadius: '14px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', color: 'white' }}>
                Começamos
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>pelo problema real</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
