import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STACK = [
  {
    icon: '🗺️',
    title: 'Revenue & Capacity Map',
    desc: 'Diagnóstico completo de 60 min: mapeamos todos os fluxos de trabalho, identificamos onde está o desperdício e quantificamos o impacto em €.',
    value: '€2.000',
    tag: 'Entregue gratuitamente',
    highlight: false,
  },
  {
    icon: '📊',
    title: 'Ranking de Oportunidades por ROI',
    desc: 'Lista priorizada com as automações de maior impacto para o seu negócio — com estimativa de tempo recuperado e receita protegida.',
    value: '€1.000',
    tag: 'Incluído no diagnóstico',
    highlight: false,
  },
  {
    icon: '📋',
    title: 'Plano de Implementação Personalizado',
    desc: 'Roteiro detalhado com âmbito, integrações necessárias, prazo estimado e métricas de sucesso para cada sistema.',
    value: '€1.500',
    tag: 'Incluído no diagnóstico',
    highlight: false,
  },
  {
    icon: '⚡',
    title: 'Implementação de Ponta a Ponta',
    desc: 'Construímos o sistema completo — integrações, automações, lógica de negócio. A sua equipa não toca em nada técnico.',
    value: 'Conforme âmbito',
    tag: 'Sprint de implementação',
    highlight: true,
  },
  {
    icon: '📈',
    title: 'Relatório Antes vs. Depois',
    desc: 'Documentação do impacto real: horas recuperadas, leads não perdidos, receita protegida. Números concretos, não estimativas.',
    value: '€500',
    tag: 'Incluído na implementação',
    highlight: false,
  },
]

export default function AilyxIncludes() {
  const headRef = useRef(null)
  const stackRef = useRef(null)
  const totalRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        y: 28, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: headRef.current, start: 'top 78%', once: true },
      })
      gsap.from(stackRef.current.children, {
        x: -24, opacity: 0, duration: 0.65, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: stackRef.current, start: 'top 75%', once: true },
      })
      gsap.from(totalRef.current, {
        y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.4,
        scrollTrigger: { trigger: totalRef.current, start: 'top 82%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#F8FAFF', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }} id="systems">
      <div className="ayl-container">

        {/* Header */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#EEF4FF', border: '1px solid rgba(33,127,241,0.25)',
            borderRadius: '100px', padding: '5px 14px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#217FF1', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              O que recebe
            </span>
          </div>
          <h2 className="ayl-h2" style={{ color: '#0a1c42', marginBottom: '16px' }}>
            Tudo o que está incluído.<br />
            <span style={{ color: '#217FF1' }}>O diagnóstico é sempre gratuito.</span>
          </h2>
          <p style={{ color: '#666', fontSize: '17px', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
            Não vendemos consultoria — entregamos sistemas. Antes de existir qualquer custo, já recebeu um mapa completo do que está a perder.
          </p>
        </div>

        {/* Value Stack */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr clamp(280px, 32%, 380px)', gap: '32px', alignItems: 'start' }}>

          <div ref={stackRef} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {STACK.map((item, i) => (
              <div
                key={i}
                className="ayl-card--hover"
                style={{
                  background: item.highlight ? '#06102a' : '#fff',
                  border: item.highlight ? '1.5px solid rgba(33,127,241,0.35)' : '1.5px solid #e8edf5',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: '10px', flexShrink: 0,
                  background: item.highlight ? 'rgba(33,127,241,0.2)' : '#F0F5FF',
                  border: `1px solid ${item.highlight ? 'rgba(33,127,241,0.35)' : '#dce9ff'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px',
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', color: item.highlight ? '#fff' : '#0a1c42' }}>
                      {item.title}
                    </div>
                    <div style={{
                      fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '14px',
                      color: item.highlight ? '#5aabff' : '#217FF1',
                      letterSpacing: '-0.02em', flexShrink: 0,
                    }}>
                      {item.value}
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: item.highlight ? 'rgba(255,255,255,0.6)' : '#777', lineHeight: 1.6, margin: '0 0 8px 0' }}>
                    {item.desc}
                  </p>
                  <span style={{
                    fontSize: '11px', fontWeight: 600,
                    color: item.highlight ? '#4ade80' : '#217FF1',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    ✓ {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary card */}
          <div ref={totalRef} style={{ position: 'sticky', top: '100px' }}>
            <div style={{
              background: '#fff',
              border: '1.5px solid #e8edf5',
              borderRadius: '20px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Resumo de valor
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Revenue & Capacity Map', val: '€2.000', free: true },
                  { label: 'Ranking por ROI', val: '€1.000', free: true },
                  { label: 'Plano de Implementação', val: '€1.500', free: true },
                  { label: 'Relatório Antes vs. Depois', val: '€500', free: false },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '13px', color: '#555', lineHeight: 1.4 }}>{row.label}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                      {row.free && (
                        <span style={{ fontSize: '10px', fontWeight: 700, color: '#4ade80', background: 'rgba(74,222,128,0.1)', borderRadius: '6px', padding: '2px 6px', border: '1px solid rgba(74,222,128,0.25)' }}>GRÁTIS</span>
                      )}
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#217FF1' }}>{row.val}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1.5px solid #e8edf5', paddingTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', color: '#888' }}>Valor total entregue antes de pagar</span>
                </div>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '32px', color: '#0a1c42', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  €4.500
                </div>
                <div style={{ fontSize: '12px', color: '#4ade80', fontWeight: 600, marginTop: '4px' }}>
                  Entregue gratuitamente no diagnóstico
                </div>
              </div>

              <a href="/diagnostico" className="ayl-btn ayl-btn--primary" style={{ textAlign: 'center', display: 'block' }}>
                Começar o Diagnóstico →
              </a>
              <p style={{ margin: 0, fontSize: '12px', color: '#bbb', textAlign: 'center' }}>
                Gratuito · 60 min · Sem compromisso
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
