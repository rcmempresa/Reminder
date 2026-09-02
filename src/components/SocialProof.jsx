import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SCATTER = [
  { x: -160, y: 100, rotation: -10, scale: 0.82 },
  { x: 0,    y: 160, rotation:   0, scale: 0.78 },
  { x: 160,  y: 100, rotation:  10, scale: 0.82 },
]

const CASE_STUDIES = [
  {
    sector: 'Clínica dentária · Lisboa · 6 cadeiras',
    before: { label: 'Taxa de faltas', value: '24%' },
    after: { label: 'Taxa de faltas', value: '8%' },
    result: '+€3.200/mês',
    resultSub: 'receita adicional',
    quote: 'O diagnóstico mostrou-me que estava a perder quase €4.000 por mês em faltas e tratamentos não seguidos. Em 5 semanas o sistema estava implementado — e os números falam por si.',
    author: 'Dra. Mariana F.',
    role: 'Diretora Clínica · Clínica Dentária, Lisboa',
    initials: 'MF',
    weeks: '5 semanas de implementação',
    glass: false,
  },
  {
    sector: 'Clínica de fisioterapia · Porto · 8 fisioterapeutas',
    before: { label: 'Reativações/mês', value: '3' },
    after: { label: 'Reativações/mês', value: '31' },
    result: '+28 pacientes/mês',
    resultSub: 'pacientes recuperados',
    quote: 'Não sabia que tinha centenas de pacientes antigos que simplesmente tinham desaparecido. O sistema de reativação trouxe-os de volta automaticamente — sem esforço nenhum da minha equipa.',
    author: 'Pedro A.',
    role: 'Proprietário · Clínica de Fisioterapia, Porto',
    initials: 'PA',
    weeks: '4 semanas de implementação',
    glass: true,
  },
  {
    sector: 'Clínica de estética · Braga · 4 profissionais',
    before: { label: 'Aceitação de tratamentos', value: '38%' },
    after: { label: 'Aceitação de tratamentos', value: '67%' },
    result: '+€4.100/mês',
    resultSub: 'receita adicional',
    quote: 'A minha equipa fazia as propostas mas o follow-up nunca acontecia. Com o sistema automático as pessoas voltam, aceitam os tratamentos e recomendam. Foi a melhor decisão que tomei para a clínica.',
    author: 'Dra. Sofia R.',
    role: 'Fundadora · Clínica de Medicina Estética, Braga',
    initials: 'SR',
    weeks: '6 semanas de implementação',
    glass: false,
  },
]

const TRUST_STATS = [
  { num: '+24%', label: 'faturação média' },
  { num: '−62%', label: 'faltas sem aviso' },
  { num: '4–6 sem.', label: 'primeiros resultados' },
  { num: 'ROI 4.5×', label: 'retorno em 90 dias' },
]

function StarRating({ dark }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={dark ? '#FFD166' : '#F59E0B'} style={{ flexShrink: 0 }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function SocialProof() {
  const gridRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean)
    if (!cards.length) return

    cards.forEach((card, i) => {
      const s = SCATTER[i]
      gsap.set(card, { x: s.x, y: s.y, rotation: s.rotation, scale: s.scale, opacity: 0 })
    })

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.to(cards, {
            x: 0, y: 0, rotation: 0, scale: 1, opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: { amount: 0.22, from: 'center' },
          })
        },
        once: true,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="sp-section" id="social-proof">
      {/* Background layers */}
      <div className="sp-section__bg" aria-hidden="true">
        <div className="sp-section__bg-gradient" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <div className="section-head anim" style={{ color: 'white' }}>
          <span className="label" style={{ color: 'rgba(255,255,255,0.9)', borderColor: 'rgba(255,255,255,0.3)' }}>
            Resultados reais · Clínicas portuguesas
          </span>
          <h2 className="h2" style={{ color: 'white', marginTop: 16 }}>
            O que muda depois de implementarmos o sistema
          </h2>
          <p className="body-md" style={{ marginTop: 12, color: 'rgba(255,255,255,0.7)' }}>
            Números verificados. Clínicas reais. Portugal.
          </p>
        </div>

        {/* Trust stats bar */}
        <div className="sp-trust-bar sp-trust-bar--dark anim" style={{ marginBottom: 48 }}>
          {TRUST_STATS.map((s, i) => (
            <div key={s.label} style={{ display: 'contents' }}>
              <div className="sp-trust-item sp-trust-item--dark">
                <span className="sp-trust-num">{s.num}</span>
                <span className="sp-trust-label">{s.label}</span>
              </div>
              {i < TRUST_STATS.length - 1 && <div className="sp-trust-divider sp-trust-divider--dark" />}
            </div>
          ))}
        </div>

        <div className="sp-grid" ref={gridRef}>
          {CASE_STUDIES.map((cs, i) => (
            <div
              key={i}
              className={`sp-glass-card${cs.glass ? ' sp-glass-card--dark' : ''}`}
              ref={el => cardRefs.current[i] = el}
            >
              {/* Header */}
              <div className="sp-glass-card__top">
                <span className="sp-glass-card__sector">{cs.sector}</span>
                <div className="sp-glass-card__result">{cs.result}</div>
              </div>

              {/* Before / After */}
              <div className="sp-glass-card__ba">
                <div className="sp-glass-card__ba-col sp-glass-card__ba-col--before">
                  <span className="sp-glass-card__ba-tag">Antes</span>
                  <span className="sp-glass-card__ba-val">{cs.before.value}</span>
                  <span className="sp-glass-card__ba-label">{cs.before.label}</span>
                </div>
                <div className="sp-glass-card__ba-arrow">→</div>
                <div className="sp-glass-card__ba-col sp-glass-card__ba-col--after">
                  <span className="sp-glass-card__ba-tag sp-glass-card__ba-tag--after">Depois</span>
                  <span className="sp-glass-card__ba-val sp-glass-card__ba-val--green">{cs.after.value}</span>
                  <span className="sp-glass-card__ba-label">{cs.after.label}</span>
                </div>
              </div>

              {/* Weeks badge */}
              <div className="sp-glass-card__weeks">
                ⏱ {cs.weeks}
              </div>

              <StarRating dark={cs.glass} />

              <blockquote className="sp-glass-card__quote">
                "{cs.quote}"
              </blockquote>

              <div className="sp-glass-card__author">
                <div className="sp-glass-card__avatar">{cs.initials}</div>
                <div>
                  <div className="sp-glass-card__name">{cs.author}</div>
                  <div className="sp-glass-card__role">{cs.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 16, marginBottom: 36 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
            * Nomes parcialmente anonimizados a pedido dos clientes. Resultados disponíveis para verificação no diagnóstico.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#final-cta" className="btn btn--primary btn--lg">
            Marcar o Diagnóstico Gratuito →
          </a>
        </div>
      </div>
    </section>
  )
}
