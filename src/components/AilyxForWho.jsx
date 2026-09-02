import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FOR_WHO = [
  { title: 'Clientes e receita',     desc: 'Existe volume suficiente para haver processos que possam ser melhorados.' },
  { title: 'Uma equipa ocupada',     desc: 'As pessoas já estão a gastar tempo em tarefas repetitivas ou administrativas.' },
  { title: 'Processos que se repetem', desc: 'O trabalho acontece regularmente e segue padrões — as primeiras candidatas à melhoria.' },
  { title: 'Ambição de crescer',     desc: 'A empresa quer aumentar o output sem aumentar a estrutura na mesma proporção.' },
  { title: 'Capacidade para investir', desc: 'Existe valor económico suficiente para que melhorar o processo faça sentido.' },
]

const NOT_FOR = [
  'Está apenas à procura de um chatbot',
  'Quer experimentar IA sem um problema de negócio concreto',
  'Não tem volume suficiente para justificar uma implementação',
  'Procura apenas uma lista de recomendações',
  'Espera que a IA substitua toda a sua equipa',
]

const SECTORS = ['Serviços', 'Construção', 'Imobiliário', 'Consultoria', 'Saúde', 'E-commerce']

export default function AilyxForWho() {
  const cardsRef = useRef(null)
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current.children, {
        y: 36, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: leftRef.current, start: 'top 78%', once: true },
      })
      gsap.from(Array.from(cardsRef.current.children), {
        y: 40, opacity: 0, duration: 0.65, ease: 'power2.out', stagger: 0.1,
        scrollTrigger: { trigger: cardsRef.current, start: 'top 82%', once: true },
      })
      gsap.from(rightRef.current, {
        x: 50, opacity: 0, duration: 1.0, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: rightRef.current, start: 'top 78%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="ayl-forwho" id="about">
      <div className="ayl-container ayl-forwho__inner">

        {/* LEFT */}
        <div className="ayl-forwho__left" ref={leftRef}>
          <div className="ayl-section-label" style={{ marginBottom: '16px' }}>É para si?</div>
          <h2 className="ayl-h2" style={{ fontSize: 'clamp(26px, 3vw, 44px)', marginBottom: '12px', color: '#0a1c42' }}>
            Construído para empresas<br />que já têm negócio.
          </h2>
          <p className="ayl-forwho__sub">
            Este modelo faz mais sentido quando a empresa já tem algumas destas características. Não trabalhamos com toda a gente — para garantir que faz sentido para ambos.
          </p>

          <div className="ayl-forwho__cards" ref={cardsRef}>
            {FOR_WHO.map((ut, i) => (
              <div key={i} className="ayl-forwho__card">
                <div style={{
                  width: 30, height: 30, borderRadius: '10px',
                  background: '#EEF4FF', border: '1px solid rgba(33,127,241,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#217FF1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div className="ayl-forwho__card-title">{ut.title}</div>
                  <div className="ayl-forwho__card-desc">{ut.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Not for */}
          <div style={{ marginTop: '28px', padding: '20px 24px', background: '#fff', border: '1.5px solid #e8edf5', borderRadius: '14px' }}>
            <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '11px', color: '#bbb', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Não é para si se:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {NOT_FOR.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#f87171', fontWeight: 700, fontSize: '13px', flexShrink: 0, marginTop: '1px' }}>✕</span>
                  <span style={{ fontSize: '13px', color: '#666', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '20px', padding: '16px 20px', background: '#EEF4FF', borderRadius: '12px', borderLeft: '3px solid #217FF1' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#0a1c42', margin: 0, lineHeight: 1.5 }}>
              Nós não vendemos "IA". Vendemos capacidade empresarial.
            </p>
          </div>

          <div style={{ marginTop: '24px' }}>
            <a href="/diagnostico" className="ayl-btn ayl-btn--primary">
              Descobrir a minha maior oportunidade →
            </a>
          </div>
        </div>

        {/* RIGHT — Profile card */}
        <div className="ayl-forwho__right" ref={rightRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: '100%', maxWidth: '420px',
            background: '#fff',
            border: '1.5px solid #e8edf5',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 8px 48px rgba(33,127,241,0.1)',
          }}>
            {/* Card header */}
            <div style={{ padding: '24px 28px', background: 'linear-gradient(135deg, #06142e 0%, #1056cc 100%)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Perfil de empresa qualificada
                </div>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '20px', color: '#fff', letterSpacing: '-0.03em' }}>
                  Empresa em crescimento
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>
                  com processos que limitam a escala
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #f0f3f9' }}>
              {[
                { value: '5–50', label: 'pessoas na equipa' },
                { value: '3+', label: 'processos manuais' },
              ].map((m, i) => (
                <div key={i} style={{
                  padding: '20px 24px',
                  borderRight: i === 0 ? '1px solid #f0f3f9' : 'none',
                }}>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '28px', color: '#0a1c42', letterSpacing: '-0.04em', lineHeight: 1 }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* Time waste visual */}
            <div style={{ padding: '20px 28px', borderBottom: '1px solid #f0f3f9' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#555' }}>Tempo em trabalho manual</span>
                <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '14px', color: '#217FF1' }}>~60%</span>
              </div>
              <div style={{ height: '6px', background: '#f0f3f9', borderRadius: '100px', overflow: 'hidden' }}>
                <div style={{
                  height: '100%', width: '60%',
                  background: 'linear-gradient(90deg, #217FF1, #4ade80)',
                  borderRadius: '100px',
                  animation: 'ax-bar-grow 1.2s ease-out 0.5s both',
                }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                <span style={{ fontSize: '11px', color: '#bbb' }}>Tarefas repetitivas</span>
                <span style={{ fontSize: '11px', color: '#4ade80', fontWeight: 600 }}>↓ automatizável</span>
              </div>
            </div>

            {/* Sectors */}
            <div style={{ padding: '20px 28px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#bbb', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Sectores mais frequentes
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {SECTORS.map(s => (
                  <span key={s} style={{
                    fontSize: '12px', fontWeight: 600, color: '#217FF1',
                    background: '#EEF4FF', border: '1px solid rgba(33,127,241,0.18)',
                    borderRadius: '8px', padding: '4px 10px',
                  }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
