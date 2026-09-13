import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PRIORITIES = [
  { num: '01', opp: 'Automatizar follow-up de propostas', impact: 'Alto',  roi: '€ +++ ' },
  { num: '02', opp: 'Reativar leads e clientes inativos',  impact: 'Alto',  roi: '€ ++  ' },
  { num: '03', opp: 'Automatizar reporting operacional',   impact: 'Médio', roi: '€ +   ' },
]

export default function AilyxAudit() {
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: leftRef.current, start: 'top 75%', once: true },
      })
      gsap.from(rightRef.current, {
        x: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: rightRef.current, start: 'top 75%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#F3F6FB', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }} id="audit">
      <div className="ayl-container">

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#217FF1', borderRadius: '100px', padding: '6px 18px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Passo 1 — Diagnóstico de Capacidade
            </span>
          </div>
          <h2 className="ayl-h2" style={{ marginBottom: '12px', color: '#0a1c42' }}>
            Não chegamos e dizemos<br />"vamos automatizar tudo."
          </h2>
          <p style={{ color: '#666', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
            Primeiro descobrimos onde existe maior oportunidade económica. Só depois recomendamos o que implementar.
          </p>
        </div>

        <div className="ayl-audit-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>

          {/* Left — o que analisamos */}
          <div ref={leftRef}>
            <div style={{ background: 'white', border: '1.5px solid #e8edf5', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(33,127,241,0.06)' }}>
              <div style={{ padding: '20px 28px', borderBottom: '1px solid #e8edf5', background: '#EEF4FF' }}>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '12px', color: '#217FF1', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  5 áreas analisadas
                </div>
              </div>
              {[
                { icon: '💰', label: 'Vendas & Receita',    q: 'Quanto dinheiro pode estar a escapar?' },
                { icon: '🎧', label: 'Atendimento',          q: 'Quanto tempo em respostas repetitivas?' },
                { icon: '⚙️', label: 'Operações internas',  q: 'Que trabalho não precisa de ser manual?' },
                { icon: '🗂️', label: 'Administração',        q: 'Quantas horas em trabalho de baixo valor?' },
                { icon: '🔌', label: 'Ferramentas',          q: 'Onde há um humano a fazer a ponte entre sistemas?' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  padding: '14px 28px',
                  borderBottom: i < 4 ? '1px solid #f0f2f8' : 'none',
                }}>
                  <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '13px', color: '#333', fontWeight: 600, marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ fontSize: '11px', color: '#999', lineHeight: 1.45, fontStyle: 'italic' }}>{item.q}</div>
                  </div>
                </div>
              ))}
              <div style={{ padding: '20px 28px', borderTop: '1px solid #e8edf5' }}>
                <a href="/diagnostico" className="ayl-btn ayl-btn--primary" style={{ display: 'block', textAlign: 'center', justifyContent: 'center' }}>
                  Marcar diagnóstico gratuito →
                </a>
                <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '12px', color: '#aaa', marginBottom: 0 }}>
                  Gratuito · 60 min · Sem compromisso
                </p>
              </div>
            </div>
          </div>

          {/* Right — o que recebe */}
          <div ref={rightRef} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#111', letterSpacing: '-0.03em', marginBottom: '12px' }}>
                O que recebe no final:
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.65, marginBottom: 0 }}>
                Não uma lista de ideias. Um Revenue & Capacity Map — com as oportunidades priorizadas por ROI e um plano de implementação claro.
              </p>
            </div>

            {/* Revenue & Capacity Map mockup */}
            <div style={{ background: 'white', border: '1.5px solid #e8edf5', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(33,127,241,0.04)' }}>
              <div style={{ padding: '16px 20px', background: '#06102a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '12px', color: '#fff' }}>Revenue & Capacity Map</span>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>Reminder AI</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: '#e8edf5' }}>
                {[
                  { val: '27', label: 'processos analisados' },
                  { val: '11', label: 'oportunidades identificadas' },
                  { val: '4',  label: 'alta prioridade' },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#fff', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '28px', color: '#217FF1', letterSpacing: '-0.04em' }}>{s.val}</div>
                    <div style={{ fontSize: '11px', color: '#999', marginTop: '2px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#e8edf5' }}>
                <div style={{ background: '#EEF4FF', padding: '16px 20px' }}>
                  <div style={{ fontSize: '10px', color: '#217FF1', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Receita recuperável</div>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '22px', color: '#0a1c42' }}>€72.000<span style={{ fontSize: '13px', fontWeight: 500, color: '#999' }}>/ano</span></div>
                </div>
                <div style={{ background: '#EEF4FF', padding: '16px 20px' }}>
                  <div style={{ fontSize: '10px', color: '#217FF1', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Capacidade operacional</div>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '22px', color: '#0a1c42' }}>1.240<span style={{ fontSize: '13px', fontWeight: 500, color: '#999' }}>h/ano</span></div>
                </div>
              </div>
              <div style={{ padding: '12px 20px', borderTop: '1px solid #e8edf5' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>Primeiras recomendações</div>
                {PRIORITIES.map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '10px 0',
                    borderBottom: i < PRIORITIES.length - 1 ? '1px solid #f0f2f8' : 'none',
                  }}>
                    <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '13px', color: i === 0 ? '#217FF1' : '#ccc', flexShrink: 0 }}>{row.num}</span>
                    <span style={{ fontSize: '13px', color: '#333', fontWeight: 500, flex: 1 }}>{row.opp}</span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: row.impact === 'Alto' ? '#217FF1' : '#aaa', flexShrink: 0 }}>{row.impact}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: '#EEF4FF', borderRadius: '12px', borderLeft: '3px solid #217FF1' }}>
              <p style={{ fontSize: '14px', color: '#0a1c42', lineHeight: 1.6, margin: 0 }}>
                <strong>Não estamos a vender automação.</strong><br />
                Estamos a dizer: "Encontrámos estas oportunidades, estimamos este impacto e recomendamos esta implementação."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
