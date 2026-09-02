import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const STACK = [
  { label: 'Mapa completo dos canais de entrada',              value: 'incluído' },
  { label: 'Análise pedido → resposta → orçamento → resultado', value: 'incluído' },
  { label: 'Identificação de oportunidades paradas',           value: 'incluído' },
  { label: 'Baseline de métricas do processo comercial',       value: 'incluído' },
  { label: 'Estimativa do valor económico em risco',           value: 'incluído' },
  { label: 'Recomendação honesta: avançar ou não',             value: 'incluído' },
]

export default function LPFinalCta() {
  const innerRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(innerRef.current.children, {
        y: 36, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: innerRef.current, start: 'top 75%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="lp-finalcta">
      {/* Background glow */}
      <div className="lp-finalcta__glow" />

      <div className="r-container">
        <div className="lp-finalcta__inner" ref={innerRef}>

          {/* Eyebrow */}
          <p className="lp-section-label lp-section-label--light">O próximo passo</p>

          {/* Headline */}
          <h2 className="lp-finalcta__h2">
            Cada pedido sem resposta é receita<br />que não volta.
          </h2>

          <p className="lp-finalcta__sub">
            Em 30 minutos analisamos o processo real, identificamos onde as oportunidades estão a morrer e estimamos o valor em risco com base nos seus dados. Se não houver caso económico credível, dizemos-lhe isso.
          </p>

          {/* Value stack */}
          <div className="lp-finalcta__stack">
            <p className="lp-finalcta__stack-title">O que recebe no diagnóstico gratuito:</p>
            <div className="lp-finalcta__stack-items">
              {STACK.map((s, i) => (
                <div key={i} className="lp-finalcta__stack-item">
                  <span className="lp-finalcta__stack-check">✓</span>
                  <span className="lp-finalcta__stack-label">{s.label}</span>
                  <span className="lp-finalcta__stack-value">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="lp-finalcta__cta-wrap">
            <a href="/diagnostico" className="lp-finalcta__btn">
              Pedir Diagnóstico de Fugas de Receita →
            </a>
            <p className="lp-finalcta__risk">
              Gratuito · 30 minutos · Sem compromisso · Resposta em 24 horas úteis
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
