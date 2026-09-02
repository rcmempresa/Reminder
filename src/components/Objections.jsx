import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SCATTER = [
  { x: -180, y: 90, rotation: -10, scale: 0.84 },
  { x: 180,  y: 90, rotation:  10, scale: 0.84 },
]

const OBJECTIONS = [
  {
    question: '"Por onde começo?"',
    tag: 'Primeiro passo',
    title: 'Pelo Diagnóstico. É gratuito e leva 15 minutos.',
    text: 'Analisamos a sua clínica especificamente, quantificamos a receita perdida em euros e calculamos o ROI projetado. Se os números não justificarem avançar, dizemos isso antes de propor qualquer solução. Sem compromisso, sem custo.',
    highlight: 'O diagnóstico existe para garantir que faz sentido — para si. Não para nós.',
  },
  {
    question: '"Já temos software de gestão. Para que precisamos disto?"',
    tag: 'Software existente',
    title: 'O seu software agenda e fatura. Não faz o que fica por fazer.',
    text: 'O que nenhum software de gestão clínica faz: confirmar consultas de forma inteligente, fazer follow-up de tratamentos propostos, e reativar pacientes inativos automaticamente. É exatamente esse espaço — entre o que o software faz e o que fica por fazer — que geramos receita.',
    highlight: 'O seu software fica intacto. O que muda é a receita que deixava de escapar.',
  },
  {
    question: '"A minha secretária já faz essas confirmações."',
    tag: 'Equipa atual',
    title: 'A sua secretária faz o que consegue. O problema é o que fica por fazer.',
    text: 'Com 40–60 consultas por semana, é fisicamente impossível confirmar tudo, fazer follow-up de tratamentos e reativar inativos em simultâneo. O sistema liberta a equipa do trabalho repetitivo — para que se foque no que exige toque humano.',
    highlight: 'A equipa não faz menos. Faz melhor — com o dobro da capacidade.',
  },
  {
    question: '"Não temos tempo para implementar mais uma coisa."',
    tag: 'Implementação',
    title: 'Implementamos nós. O tempo exigido à clínica é menos de 3 horas.',
    text: 'A nossa equipa faz tudo enquanto a clínica funciona normalmente — integrações, automações, testes. O tempo pedido à clínica resume-se às reuniões de diagnóstico e validação. Não há mais nada a fazer da vossa parte.',
    highlight: 'O seu tempo é escasso. Por isso fazemos nós o trabalho pesado.',
  },
  {
    question: '"Como sei que funciona para a minha clínica especificamente?"',
    tag: 'Garantia',
    title: 'O diagnóstico responde a isso antes de qualquer compromisso.',
    text: 'Não avançamos com soluções genéricas. Analisamos a sua operação, identificamos onde a receita está a escapar e calculamos o impacto projetado. Se os números não justificarem, dizemos isso. Os primeiros resultados são visíveis em 4 a 6 semanas.',
    highlight: 'Primeiros resultados em 4–6 semanas. ROI médio de 4.5× em 90 dias.',
  },
]

export default function Objections() {
  const [active, setActive] = useState(0)
  const current = OBJECTIONS[active]

  const innerRef = useRef(null)
  const panelRefs = useRef([])

  useEffect(() => {
    const panels = panelRefs.current.filter(Boolean)
    if (!panels.length) return

    panels.forEach((panel, i) => {
      const s = SCATTER[i]
      gsap.set(panel, { x: s.x, y: s.y, rotation: s.rotation, scale: s.scale, opacity: 0 })
    })

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: innerRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.to(panels, {
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
    <section className="section section--alt" id="objections">
      <div className="container">

        <div className="section-head anim">
          <span className="label">Perguntas frequentes</span>
          <h2 className="h2">O que os donos de clínicas nos perguntam</h2>
        </div>

        <div className="objections__inner" ref={innerRef}>
          <div className="objections__list" role="list" ref={el => panelRefs.current[0] = el}>
            {OBJECTIONS.map((obj, i) => (
              <button
                key={i}
                className={`obj-btn${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                role="listitem"
              >
                <span className="obj-btn__radio" aria-hidden="true" />
                <span>{obj.question}</span>
              </button>
            ))}
          </div>

          <div className="objections__answer" key={active} aria-live="polite" ref={el => panelRefs.current[1] = el}>
            <div className="obj-answer__tag">
              <span aria-hidden="true">💬</span>
              {current.tag}
            </div>
            <div className="obj-answer__title">{current.title}</div>
            <p className="obj-answer__text">{current.text}</p>
            <div className="obj-answer__highlight">{current.highlight}</div>
          </div>
        </div>

      </div>
    </section>
  )
}
