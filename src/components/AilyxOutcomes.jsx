import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BEFORE = [
  'Alguém tem de se lembrar',
  'Email manual',
  'Copiar e colar',
  'CRM desatualizado',
  'Follow-up esquecido',
  'Relatório demorado',
  'Depende de uma pessoa',
]

const AFTER = [
  'Acontece automaticamente',
  'Enviado no momento certo',
  'Processado sem intervenção',
  'Atualizado em tempo real',
  'Acompanhamento garantido',
  'Gerado instantaneamente',
  'Funciona sempre',
]

const OUTCOMES = [
  { icon: '📈', label: 'Vendas',      desc: 'Mais capacidade para acompanhar e converter oportunidades.' },
  { icon: '🤝', label: 'Clientes',    desc: 'Atendimento mais rápido, sem sobrecarregar a equipa.' },
  { icon: '⚙️', label: 'Operações',  desc: 'Processos mais rápidos e menos dependentes de intervenção manual.' },
  { icon: '🗂️', label: 'Administração', desc: 'Menos tempo a copiar, inserir e organizar informação.' },
  { icon: '🧠', label: 'Decisão',    desc: 'Mais informação disponível para a equipa decidir melhor e mais rápido.' },
]

export default function AilyxOutcomes() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelector('.outcomes-before'), {
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
      })
      gsap.from(ref.current.querySelector('.outcomes-after'), {
        x: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
      })
      gsap.from(ref.current.querySelector('.outcomes-arrow'), {
        scale: 0, opacity: 0, duration: 0.6, ease: 'back.out(2)', delay: 0.3,
        scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#fff', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }}>
      <div className="ayl-container">

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="ayl-section-label" style={{ display: 'inline-block', marginBottom: '16px' }}>
            O resultado
          </div>
          <h2 className="ayl-h2" style={{ marginBottom: '12px' }}>
            O que muda quando o sistema<br />está a funcionar.
          </h2>
        </div>

        <div ref={ref}>
          {/* Before / After */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '24px',
            alignItems: 'center',
            marginBottom: '64px',
          }}>
            {/* Before */}
            <div className="outcomes-before" style={{ background: '#F8FAFF', border: '1.5px solid #e8edf5', borderRadius: '20px', overflow: 'hidden' }}>
              <div style={{ padding: '16px 24px', borderBottom: '1px solid #e8edf5', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f87171' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#999', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Hoje</span>
              </div>
              <div style={{ padding: '20px 24px' }}>
                {BEFORE.map((item, i) => (
                  <div key={i}>
                    <div style={{ padding: '10px 0', fontSize: '14px', color: '#555', textAlign: 'center' }}>{item}</div>
                    {i < BEFORE.length - 1 && (
                      <div style={{ textAlign: 'center', color: '#ddd', fontSize: '16px', lineHeight: 1 }}>↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="outcomes-arrow" style={{ textAlign: 'center' }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'linear-gradient(135deg, #217FF1, #08224e)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(33,127,241,0.3)',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* After */}
            <div className="outcomes-after" style={{ background: 'linear-gradient(135deg, #08224e 0%, #1a5dc8 100%)', borderRadius: '20px', overflow: 'hidden' }}>
              <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#90c8ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Com o sistema</span>
              </div>
              <div style={{ padding: '20px 24px' }}>
                {AFTER.map((item, i) => (
                  <div key={i}>
                    <div style={{ padding: '10px 0', fontSize: '14px', color: 'rgba(255,255,255,0.85)', textAlign: 'center', fontWeight: 500 }}>{item}</div>
                    {i < AFTER.length - 1 && (
                      <div style={{ textAlign: 'center', color: 'rgba(144,200,255,0.3)', fontSize: '16px', lineHeight: 1 }}>↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5 outcome cards */}
          <div className="ayl-outcomes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px' }}>
            {OUTCOMES.map((o, i) => (
              <div key={i} className="ayl-card--hover" style={{
                padding: '24px 20px',
                background: i === 0 ? '#EEF4FF' : '#F8FAFF',
                border: `1.5px solid ${i === 0 ? 'rgba(33,127,241,0.2)' : '#e8edf5'}`,
                borderRadius: '18px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{o.icon}</div>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', color: i === 0 ? '#217FF1' : '#0a1c42', marginBottom: '10px' }}>
                  {o.label}
                </div>
                <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.55, margin: 0 }}>
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
