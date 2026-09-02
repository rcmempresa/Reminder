import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SCATTER = [
  { x: -180, y: 90, rotation: -10, scale: 0.84 },
  { x: 180,  y: 90, rotation:  10, scale: 0.84 },
]

const YES_ITEMS = [
  'É uma clínica dentária, de fisioterapia, estética ou multidisciplinar com faturação acima de €300k/ano.',
  'Já tem procura e equipa constituída — o problema não é falta de pacientes, é a operação que limita o crescimento.',
  'Quer crescer sem contratar proporcionalmente mais pessoas.',
  'Sente que a clínica depende demasiado de si e que é difícil desligar.',
  'Já perdeu pacientes por falta de follow-up ou pelas faltas sem aviso que destroem a agenda.',
]

const NO_ITEMS = [
  'Está a abrir a primeira clínica — o nosso processo pressupõe uma operação já funcionando.',
  'Trabalha maioritariamente com o SNS ou subvenções públicas sem autonomia de preços.',
  'Procura apenas uma ferramenta de software — vendemos crescimento, não licenças.',
  'Não está disponível para uma chamada inicial de diagnóstico de 15 minutos.',
]

export default function ForWho() {
  const [checked, setChecked] = useState([])
  const score = checked.length
  const toggle = (i) =>
    setChecked(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])

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
            stagger: { amount: 0.18, from: 'center' },
          })
        },
        once: true,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="for-who">
      <div className="container">

        <div className="section-head anim">
          <span className="label">Perfil de cliente</span>
          <h2 className="h2">Para quem é o Sistema de Recuperação?</h2>
          <p className="body-md" style={{ marginTop: 12 }}>
            Trabalhamos com um perfil específico de clínica — e essa especificidade é o que garante os resultados.
          </p>
        </div>

        <div className="forwho3__grid" ref={gridRef}>

          <div className="forwho3__col" ref={el => cardRefs.current[0] = el}>
            <div className="forwho3__col-head forwho3__col-head--yes">
              <span className="forwho3__col-icon">✓</span>
              <span>É para a sua clínica se…</span>
            </div>
            <ul className="forwho3__list">
              {YES_ITEMS.map((item, i) => {
                const on = checked.includes(i)
                return (
                  <li
                    key={i}
                    className={`forwho3__item forwho3__item--yes${on ? ' forwho3__item--on' : ''}`}
                    onClick={() => toggle(i)}
                  >
                    <span className="forwho3__check">{on ? '✓' : ''}</span>
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>

            {score >= 3 && (
              <div className="forwho3__match">
                <p>Tem {score} de {YES_ITEMS.length} critérios — é exatamente o perfil com que trabalhamos.</p>
                <a href="#final-cta" className="btn btn--primary btn--md">
                  Marcar o Diagnóstico →
                </a>
              </div>
            )}
          </div>

          <div className="forwho3__col" ref={el => cardRefs.current[1] = el}>
            <div className="forwho3__col-head forwho3__col-head--no">
              <span className="forwho3__col-icon forwho3__col-icon--no">✕</span>
              <span>Não é para a sua clínica se…</span>
            </div>
            <ul className="forwho3__list">
              {NO_ITEMS.map((item, i) => (
                <li key={i} className="forwho3__item forwho3__item--no">
                  <span className="forwho3__cross">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="forwho3__note">
              <p>
                Se o momento ainda não é o certo, ficamos disponíveis para quando for.
                O contexto da clínica muda — e o sistema pode fazer todo o sentido daqui a 6 meses.
              </p>
            </div>
          </div>

        </div>

        <div className="forwho3__bottom">
          <p>
            O Sistema de Recuperação foi desenhado para clínicas privadas que já têm procura
            e querem crescer sem que a operação ou a faturação perdida limite esse crescimento.
          </p>
          <a href="#final-cta" className="btn btn--primary btn--md" style={{ flexShrink: 0 }}>
            Marcar o Diagnóstico →
          </a>
        </div>

      </div>
    </section>
  )
}
