import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AREAS = [
  { label: 'Vendas e receita',    desc: 'Leads, follow-up, propostas e oportunidades em aberto.' },
  { label: 'Atendimento',        desc: 'Respostas repetitivas, triagem e tempo da equipa com clientes.' },
  { label: 'Operações internas', desc: 'Tarefas manuais, coordenação e fluxos que dependem de pessoas.' },
  { label: 'Administração',      desc: 'Emails, documentos, relatórios e introdução de dados.' },
  { label: 'Ferramentas',        desc: 'Sistemas que não comunicam e trabalho manual entre plataformas.' },
]

const ROADMAP = [
  { opp: 'Acompanhamento de propostas', impact: 'Alto',  complexity: 'Baixa', priority: '01' },
  { opp: 'Suporte automatizado',        impact: 'Alto',  complexity: 'Média', priority: '02' },
  { opp: 'Relatórios automáticos',      impact: 'Médio', complexity: 'Baixa', priority: '03' },
  { opp: 'Gestão de conhecimento',      impact: 'Médio', complexity: 'Média', priority: '04' },
  { opp: 'Automatização de CRM',        impact: 'Baixo', complexity: 'Alta',  priority: '05' },
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

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#217FF1', borderRadius: '100px', padding: '6px 18px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Passo 1 — Diagnóstico gratuito
            </span>
          </div>
          <h2 className="ayl-h2" style={{ marginBottom: '12px', color: '#0a1c42' }}>
            Descubra numa reunião de 60 min onde a sua empresa<br />está a perder tempo e dinheiro.
          </h2>
          <p style={{ color: '#666', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
            Sem precisar de saber o que é IA, sem escolher ferramentas, sem preparar nada.<br />
            Nós analisamos. Você recebe clareza.
          </p>
        </div>

        <div className="ayl-audit-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>

          {/* Left — areas de análise */}
          <div ref={leftRef}>
            <div style={{ background: 'white', border: '1.5px solid #e8edf5', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(33,127,241,0.06)' }}>
              <div style={{ padding: '20px 28px', borderBottom: '1px solid #e8edf5', background: '#EEF4FF' }}>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '12px', color: '#217FF1', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  O que analisamos
                </div>
              </div>
              <div style={{ padding: '8px 28px' }}>
                {AREAS.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                    padding: '14px 0',
                    borderBottom: i < AREAS.length - 1 ? '1px solid #f0f2f8' : 'none',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#217FF1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <div style={{ fontSize: '14px', color: '#333', fontWeight: 600, marginBottom: '2px' }}>{item.label}</div>
                      <div style={{ fontSize: '12px', color: '#888', lineHeight: 1.45 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '20px 28px', borderTop: '1px solid #e8edf5' }}>
                <a href="/diagnostico" className="ayl-btn ayl-btn--primary" style={{ display: 'block', textAlign: 'center', justifyContent: 'center' }}>
                  Começar o diagnóstico →
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
              <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#111', letterSpacing: '-0.03em', marginBottom: '12px' }}>
                Não recebe uma lista de ideias.<br />Recebe um plano com prioridades.
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.65, marginBottom: 0 }}>
                O que fazer, em que ordem e porquê — com base nos seus processos reais.
              </p>
            </div>

            {/* Tabela de exemplo */}
            <div style={{ background: 'white', border: '1.5px solid #e8edf5', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(33,127,241,0.04)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', padding: '12px 20px', background: '#F8FAFF', borderBottom: '1px solid #e8edf5', gap: '12px' }}>
                {['Oportunidade', 'Impacto', 'Complexidade', 'Prioridade'].map((h, i) => (
                  <div key={i} style={{ fontSize: '10px', fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: i > 0 ? 'center' : 'left' }}>
                    {h}
                  </div>
                ))}
              </div>
              {ROADMAP.map((row, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1fr auto auto auto', padding: '14px 20px', gap: '12px',
                  borderBottom: i < ROADMAP.length - 1 ? '1px solid #f0f2f8' : 'none',
                  alignItems: 'center',
                  background: i === 0 ? '#EEF4FF' : 'transparent',
                }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#111' }}>{row.opp}</span>
                  <span style={{ fontSize: '12px', color: row.impact === 'Alto' ? '#217FF1' : row.impact === 'Médio' ? '#888' : '#bbb', fontWeight: 600, textAlign: 'center' }}>{row.impact}</span>
                  <span style={{ fontSize: '12px', color: '#888', textAlign: 'center' }}>{row.complexity}</span>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: i === 0 ? '#217FF1' : '#ccc', fontFamily: 'Sora, sans-serif', textAlign: 'center' }}>{row.priority}</span>
                </div>
              ))}
            </div>

            <div style={{ padding: '16px 20px', background: '#EEF4FF', borderRadius: '12px', borderLeft: '3px solid #217FF1' }}>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#0a1c42', lineHeight: 1.55, margin: '0 0 4px 0' }}>
                A questão não é "o que se pode automatizar?"
              </p>
              <p style={{ fontSize: '14px', color: '#217FF1', fontWeight: 700, lineHeight: 1.55, margin: 0 }}>
                É "o que deve acontecer primeiro?"
              </p>
            </div>

            <a href="/diagnostico" className="ayl-btn ayl-btn--primary" style={{ display: 'inline-flex' }}>
              Quero fazer o diagnóstico →
            </a>
            <p style={{ marginTop: '-12px', fontSize: '12px', color: '#aaa', marginBottom: 0 }}>Gratuito · 60 min · Sem compromisso</p>
          </div>

        </div>
      </div>
    </section>
  )
}
