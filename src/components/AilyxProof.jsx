import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EXAMPLES = [
  {
    problem: 'Follow-up de orçamentos',
    before: '34 propostas enviadas num mês. 11 nunca receberam segundo contacto. O processo de follow-up dependia de cada comercial se lembrar de voltar a contactar.',
    after: '100% das propostas entram automaticamente num processo de acompanhamento. A equipa é alertada quando é necessária intervenção humana.',
    metric: 'Nenhuma proposta esquecida.',
  },
  {
    problem: 'Faturação pós-obra',
    before: 'Algumas ordens de trabalho ficavam 4 a 10 dias à espera de informação para faturar. A faturação dependia de alguém enviar um WhatsApp com os dados.',
    after: 'A conclusão de uma obra gera automaticamente o processo de faturação. A informação chega a quem precisa, sem intervenção manual.',
    metric: 'Tempo até faturação: de 7 dias para 1.',
  },
  {
    problem: 'Cobranças em atraso',
    before: 'Faturas com 30, 60, 90 dias de atraso sem processo ativo. A equipa evitava o contacto por desconforto. O cash flow era imprevisível.',
    after: 'Sequência estruturada de lembretes progressivos — profissional, sem confronto. O processo é consistente independentemente de quem gere.',
    metric: 'Tempo de recebimento: de 47 dias para 12.',
  },
]

export default function AilyxProof() {
  const headRef  = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        y: 32, opacity: 0, duration: 0.85, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: headRef.current, start: 'top 78%', once: true },
      })
      cardRefs.current.filter(Boolean).forEach((card, i) => {
        gsap.from(card, {
          y: 48, opacity: 0, duration: 0.85, ease: 'power3.out', delay: i * 0.13,
          scrollTrigger: { trigger: card, start: 'top 80%', once: true },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#06142e', padding: 'clamp(70px, 9vw, 110px) 0' }}>
      <div className="ayl-container">

        {/* Header */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(33,127,241,0.18)', border: '1px solid rgba(33,127,241,0.3)',
            borderRadius: '100px', padding: '5px 14px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#90c8ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Prova
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 50px)',
            color: '#fff', lineHeight: 1.08, letterSpacing: '-0.05em',
            marginBottom: '16px',
          }}>
            Números reais. Processos reais.<br />Resultados que ficam.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.65 }}>
            Três exemplos do tipo de problemas que identificamos nos primeiros 7 dias — e o que acontece 30 dias depois.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {EXAMPLES.map((ex, i) => (
            <div
              key={i}
              ref={el => cardRefs.current[i] = el}
              style={{
                background: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 40px rgba(0,0,0,0.3)',
              }}
            >
              {/* Problem label */}
              <div style={{ padding: '18px 24px', background: '#F8FAFF', borderBottom: '1px solid #e8edf5' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#217FF1' }}>
                  {ex.problem}
                </span>
              </div>

              {/* Before */}
              <div style={{ padding: '20px 24px', borderBottom: '1px solid #f0f3f9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f87171', flexShrink: 0 }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Antes</span>
                </div>
                <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.6, margin: 0 }}>{ex.before}</p>
              </div>

              {/* After */}
              <div style={{ padding: '20px 24px', borderBottom: '1px solid #f0f3f9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#217FF1', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Depois</span>
                </div>
                <p style={{ fontSize: '13px', color: '#333', lineHeight: 1.6, margin: 0 }}>{ex.after}</p>
              </div>

              {/* Metric */}
              <div style={{ padding: '14px 24px', background: '#EEF4FF', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#217FF1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#217FF1' }}>{ex.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '56px', textAlign: 'center' }}>
          <a href="/diagnostico" className="ayl-btn" style={{
            background: '#fff', color: '#0a1c42', borderRadius: '16px',
            fontSize: '15px', fontWeight: 700, padding: '17px 36px',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
          }}>
            Começar o Diagnóstico Gratuito →
          </a>
          <p style={{ marginTop: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            Gratuito · 7 dias · Sem compromisso
          </p>
        </div>

      </div>
    </section>
  )
}
