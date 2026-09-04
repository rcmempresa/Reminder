import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

const FAQS = [
  {
    q: 'Precisamos de substituir pessoas?',
    a: 'Não. O objetivo é retirar da equipa trabalho repetitivo e de baixo valor — para que as pessoas possam fazer mais daquilo que realmente importa.',
  },
  {
    q: 'Precisamos de mudar as ferramentas que já usamos?',
    a: 'Não necessariamente. Começamos por perceber o que já existe e tentamos aproveitar a infraestrutura atual. Só recomendamos mudanças quando fizerem sentido.',
  },
  {
    q: 'A equipa precisa de perceber de tecnologia?',
    a: 'Não. A implementação é feita por nós. A equipa aprende apenas o necessário para usar o sistema no dia-a-dia.',
  },
  {
    q: 'Podem melhorar qualquer processo?',
    a: 'Nem tudo deve ser automatizado. Primeiro avaliamos se faz sentido. Por vezes, a melhor resposta é simplificar o processo — e dizemos isso claramente.',
  },
  {
    q: 'Quanto custa a implementação?',
    a: 'Depende da oportunidade e da complexidade. O investimento é definido depois do diagnóstico, quando sabemos exatamente o que vamos construir.',
  },
  {
    q: 'Quanto tempo demora o diagnóstico?',
    a: 'É uma reunião de 60 minutos. No final apresentamos as oportunidades identificadas, a prioridade e o caminho recomendado.',
  },
  {
    q: 'E a implementação?',
    a: 'O prazo depende do sistema a construir. O objetivo é colocar a primeira solução a funcionar rapidamente — sem transformar isto num projeto interminável.',
  },
  {
    q: 'O diagnóstico obriga-nos a avançar com a implementação?',
    a: 'Não. O objetivo é perceber se existe uma oportunidade real. Se não houver uma solução que faça sentido económico para a empresa, dizemos isso.',
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  const bodyRef = useRef(null)

  useEffect(() => {
    const el = bodyRef.current
    if (!el) return
    if (isOpen) {
      gsap.set(el, { height: 'auto', opacity: 1 })
      const h = el.offsetHeight
      gsap.fromTo(el, { height: 0, opacity: 0 }, { height: h, opacity: 1, duration: 0.35, ease: 'power2.out' })
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.25, ease: 'power2.in' })
    }
  }, [isOpen])

  return (
    <div className={`cs-faq__item${isOpen ? ' cs-faq__item--open' : ''}`}>
      <button className="cs-faq__question" onClick={onToggle}>
        <span>{item.q}</span>
        <span className="cs-faq__icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div className="cs-faq__body" ref={bodyRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
        <p className="cs-faq__answer">{item.a}</p>
      </div>
    </div>
  )
}

export default function CsFaq() {
  const [openIndex, setOpenIndex] = useState(0)
  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section className="cs-faq">
      <div className="ayl-container">
        <div className="cs-faq__layout">
          <div className="cs-faq__head" id="faq">
            <div className="ayl-services__pill" style={{ marginBottom: 0 }}>FAQ</div>
          </div>
          <div className="cs-faq__content">
            <h2 className="ayl-h2 cs-faq__h2" style={{ color: '#0a1c42' }}>
              As perguntas<br />que provavelmente<br />está a fazer
            </h2>
            <div className="cs-faq__list">
              {FAQS.map((item, i) => (
                <FaqItem key={i} item={item} isOpen={openIndex === i} onToggle={() => toggle(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
