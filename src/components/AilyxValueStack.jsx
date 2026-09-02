import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PHASES = [
  {
    tag: 'Diagnóstico',
    price: 'Gratuito',
    priceNote: 'sem compromisso',
    color: '#217FF1',
    items: [
      { label: 'Auditoria Do Pedido ao Pagamento', note: '60–90 minutos, Revenue + Operations' },
      { label: 'Mapa completo das principais fugas', note: 'onde e porque está a perder' },
      { label: 'Estimativa do impacto de cada problema', note: 'quantificado por prioridade' },
      { label: 'Identificação do problema prioritário', note: 'o que resolver primeiro' },
      { label: 'Roadmap de implementação', note: 'o que fazer a seguir, passo a passo' },
    ],
  },
  {
    tag: 'Implementação',
    price: 'Proposta após diagnóstico',
    priceNote: 'valor calculado com base no seu caso',
    color: '#0e4dc4',
    items: [
      { label: 'Blueprint do processo corrigido', note: 'desenhado para o seu negócio' },
      { label: 'Configuração e integrações', note: 'com o que já usa — sem substituir o que funciona' },
      { label: 'Testes completos antes de ir a produção', note: 'nenhum risco de erros ao vivo' },
      { label: 'Lançamento Done-for-You', note: 'sem desenvolvimento técnico da sua parte' },
      { label: 'Formação da equipa', note: 'apenas o essencial — sem cursos longos' },
    ],
  },
  {
    tag: 'Acompanhamento Contínuo',
    price: 'Definido por projeto',
    priceNote: 'só começa quando o sistema está operacional',
    color: '#333',
    items: [
      { label: 'Monitorização do sistema', note: 'identificamos problemas antes de si' },
      { label: 'Ajustes e melhorias contínuas', note: 'o processo melhora ao longo do tempo' },
      { label: 'Novas automações incluídas', note: 'conforme o acordo inicial' },
      { label: 'Identificação do próximo problema', note: 'quando o primeiro estiver resolvido' },
      { label: 'Suporte direto', note: 'sem tickets, sem filas' },
    ],
  },
]

function Check({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function AilyxValueStack() {
  const sectionRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(innerRef.current.children, {
        y: 40, opacity: 0, duration: 0.85, ease: 'power3.out', stagger: 0.14,
        scrollTrigger: { trigger: innerRef.current, start: 'top 78%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{
      background: '#F3F6FB',
      padding: 'clamp(80px, 10vw, 120px) 0',
      borderTop: '1px solid #e8edf5',
    }}>
      <div className="ayl-container">

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="ayl-section-label" style={{ display: 'inline-block', marginBottom: '16px' }}>
            O que recebe
          </div>
          <h2 className="ayl-h2" style={{ marginBottom: '16px' }}>
            Tudo o que está incluído.<br />Fase a fase.
          </h2>
          <p style={{ color: '#666', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.65 }}>
            Começamos sempre pela Auditoria — gratuita, sem compromisso. Só depois de perceber o seu negócio apresentamos uma proposta concreta para o que fizer sentido resolver.
          </p>
        </div>

        <div ref={innerRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          alignItems: 'start',
        }}>
          {PHASES.map((phase, i) => (
            <div key={phase.tag} style={{
              background: 'white',
              border: i === 0 ? `2px solid ${phase.color}` : '1.5px solid #e8edf5',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: i === 0 ? '0 8px 32px rgba(33,127,241,0.12)' : '0 2px 16px rgba(33,127,241,0.04)',
              position: 'relative',
            }}>
              {/* Header */}
              <div style={{
                padding: '24px 28px',
                background: i === 0 ? '#EEF4FF' : '#FAFBFD',
                borderBottom: '1px solid #e8edf5',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: phase.color,
                  }}>
                    {phase.tag}
                  </span>
                  {i === 0 && (
                    <span style={{
                      fontSize: '11px', fontWeight: 700, background: '#217FF1', color: 'white',
                      borderRadius: '100px', padding: '3px 10px', letterSpacing: '0.06em',
                    }}>
                      COMEÇA AQUI
                    </span>
                  )}
                </div>
                <div style={{
                  fontFamily: 'Sora, sans-serif', fontWeight: 800,
                  fontSize: 'clamp(18px, 2vw, 22px)', color: '#111',
                  letterSpacing: '-0.03em', marginTop: '8px', lineHeight: 1.2,
                }}>
                  {phase.price}
                </div>
                <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
                  {phase.priceNote}
                </div>
              </div>

              {/* Items */}
              <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {phase.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <Check color={phase.color} />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#111', lineHeight: 1.4 }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: '12px', color: '#999', marginTop: '2px', lineHeight: 1.4 }}>
                        {item.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA only on first card */}
              {i === 0 && (
                <div style={{ padding: '0 28px 28px' }}>
                  <a href="/diagnostico" className="ayl-btn ayl-btn--primary" style={{ display: 'block', textAlign: 'center', justifyContent: 'center' }}>
                    Fazer a Auditoria →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '13px', color: '#aaa', lineHeight: 1.6 }}>
          O acompanhamento contínuo só começa depois de o sistema estar operacional e a funcionar — não antes.
        </p>

      </div>
    </section>
  )
}
