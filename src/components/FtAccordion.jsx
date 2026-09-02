import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

const ITEMS = [
  {
    title: 'Smart AI Agents',
    body: 'Deploy AI agents that work 24/7, handle complex workflows, and improve with every interaction. Trained on your data, aligned to your processes.',
  },
  {
    title: 'Visual Workflow Builder',
    body: 'Build powerful automations without writing code using our intuitive drag-and-drop interface. Connect triggers, actions, and conditions in minutes.',
  },
  {
    title: 'Deep Integrations',
    body: 'Connect with 500+ tools and platforms right out of the box. Slack, Google Workspace, Zapier, Notion, and more — no custom dev work required.',
  },
  {
    title: 'Human Oversight',
    body: 'Set approval thresholds, review AI decisions, and stay in full control at every step. Confidence scoring and activity logs keep you informed.',
  },
]

function AccItem({ item, isOpen, onToggle }) {
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
    <div className={`ft-acc__item${isOpen ? ' ft-acc__item--open' : ''}`}>
      <button className="ft-acc__trigger" onClick={onToggle}>
        <span className="ft-acc__icon">{isOpen ? '−' : '+'}</span>
        <span className="ft-acc__title">{item.title}</span>
      </button>
      <div className="ft-acc__body" ref={bodyRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
        <p className="ft-acc__text">{item.body}</p>
      </div>
      <div className="ft-acc__divider" />
    </div>
  )
}

export default function FtAccordion() {
  const [openIndex, setOpenIndex] = useState(-1)
  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section className="ft-acc">
      <div className="ayl-container">
        <div className="ayl-services__pill ft-acc__pill">Features</div>
        <h2 className="ft-acc__h2">
          Built for speed, scale,<br />and real-world use
        </h2>
        <div className="ft-acc__list">
          {ITEMS.map((item, i) => (
            <AccItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
