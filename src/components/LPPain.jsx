import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CARDS = [
  {
    title: 'Chamada perdida',
    desc: 'O pedido fica no telemóvel de alguém e não volta a ser tratado.',
  },
  {
    title: 'WhatsApp respondido tarde',
    desc: 'Quando a equipa responde, o cliente já falou com outra empresa.',
  },
  {
    title: 'Orçamento sem próximo passo',
    desc: 'A proposta é enviada, mas não há dono, data ou cadência de follow-up.',
  },
  {
    title: 'Pipeline invisível',
    desc: 'A direção não sabe quais as oportunidades em risco nem por que se perderam.',
  },
]

export default function LPPain() {
  const topRef  = useRef(null)
  const cardsRef = useRef([])
  const closeRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(topRef.current, {
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: topRef.current, start: 'top 78%', once: true },
      })

      const cards = cardsRef.current.filter(Boolean)
      gsap.from(cards, {
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: cards[0], start: 'top 80%', once: true },
      })

      gsap.from(closeRef.current, {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: closeRef.current, start: 'top 82%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="lp-pain">
      <div className="r-container">

        <div className="lp-pain__top" ref={topRef}>
          <p className="lp-section-label">O problema</p>
          <h2 className="lp-h2">
            Os pedidos chegam. O problema é o que acontece depois.
          </h2>
          <p className="lp-pain__intro">
            Em empresas AVAC, os pedidos podem entrar por chamadas, WhatsApp, email, website e indicações. Quando a equipa está em obra, ocupada ou sem um processo claro, alguns ficam sem resposta, outros recebem orçamento sem seguimento e ninguém tem visibilidade sobre o que realmente aconteceu.
          </p>
        </div>

        <div className="lp-pain__cards">
          {CARDS.map((c, i) => (
            <div key={i} className="lp-pain__card" ref={el => cardsRef.current[i] = el}>
              <div className="lp-pain__card-num">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="lp-pain__card-title">{c.title}</h3>
              <p className="lp-pain__card-desc">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="lp-pain__close" ref={closeRef}>
          <p>
            Antes de gastar mais em anúncios ou geração de leads, vale a pena perceber quanto da procura atual já está a escapar.
          </p>
          <a href="/diagnostico" className="lp-cta-btn lp-cta-btn--outline">
            Pedir Diagnóstico de Fugas de Receita →
          </a>
        </div>

      </div>
    </section>
  )
}
