import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AVATAR_1 = 'https://framerusercontent.com/images/b5y3qfYzvPX9R9yQzoe3BrYGhQ0.jpg?scale-down-to=512'
const AVATAR_2 = 'https://framerusercontent.com/images/YRUZjQBxT47td08mXOdUUq0NN8o.png?scale-down-to=512'
const AVATAR_3 = 'https://framerusercontent.com/images/T6jEThz4CMlhwWVLjhBXAh03hPQ.png?scale-down-to=512'

const STUDIES = [
  {
    company: 'Acme Corp',
    logo: 'https://framerusercontent.com/images/AFhhd764QHVaxtt7TV5970GBp8.svg?width=202&height=48',
    industry: 'Healthcare',
    title: 'Lowered 68% onboarding time',
    date: 'Sep 3, 2025',
  },
  {
    company: 'CloudWatch',
    logo: 'https://framerusercontent.com/images/89qCGaB3XORPblq8jJyLoGkybTY.svg?width=202&height=48',
    industry: 'SaaS / B2B Tech',
    title: 'Reduced 80% support ticket volume in 14 days',
    date: 'Sep 1, 2025',
  },
  {
    company: 'Epicurious',
    logo: 'https://framerusercontent.com/images/5D9Pej59FnVCUmYJgy908jmjdo.svg?width=189&height=48',
    industry: 'Logistics',
    title: 'Saved 12+ hours/week on task routing',
    date: 'Aug 31, 2025',
  },
  {
    company: 'FocalPoint',
    logo: 'https://framerusercontent.com/images/mMsW63iwK7kISmV2ITXWfmlw3f8.svg?width=199&height=48',
    industry: 'Marketing Agency',
    title: '2× client capacity without hiring',
    date: 'Aug 28, 2025',
  },
  {
    company: 'Galileo',
    logo: 'https://framerusercontent.com/images/H69qEwYqamP3xfb9rcbxAsAtYl0.svg?width=150&height=48',
    industry: 'Fintech',
    title: 'Reduced 50% time spent on client queries',
    date: 'Aug 26, 2025',
  },
  {
    company: 'Interlock',
    logo: 'https://framerusercontent.com/images/jpGahxDLL7KJekFtQ2AHtD41VN0.svg?width=163&height=48',
    industry: 'Education',
    title: 'Increased 30% course completion rates',
    date: 'Aug 18, 2025',
  },
]

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

export default function CsGrid() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean)
    if (!cards.length) return

    gsap.set(cards, { y: 60, opacity: 0 })

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.to(cards, {
            y: 0, opacity: 1,
            duration: 0.8, ease: 'power3.out',
            stagger: 0.1,
          })
        },
        once: true,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="cs-grid" ref={sectionRef}>
      <div className="cs-grid__top">
        <div className="cs-grid__top-left">
          <div className="cs-grid__pill">Case studies</div>
          <h2 className="ayl-h2">
            Explore our<br />case studies
          </h2>
        </div>
        <div className="cs-grid__trust">
          <div className="ayl-hero__avatars">
            <img src={AVATAR_1} alt="" className="ayl-hero__avatar" />
            <img src={AVATAR_2} alt="" className="ayl-hero__avatar" />
            <img src={AVATAR_3} alt="" className="ayl-hero__avatar" />
          </div>
          <div>
            <div className="cs-grid__trust-rating">4.9 / 5</div>
            <div className="cs-grid__trust-sub">Trusted by <strong>300+ clients</strong></div>
          </div>
        </div>
      </div>

      <div className="cs-grid__grid">
        {STUDIES.map((s, i) => (
          <article
            key={s.company}
            className="cs-card"
            ref={el => cardRefs.current[i] = el}
          >
            <div className="cs-card__header">
              <span className="cs-card__company">{s.company}</span>
              <span className="cs-card__arrow"><ArrowIcon /></span>
            </div>
            <div className="cs-card__logo-area">
              <img src={s.logo} alt={s.company} className="cs-card__logo" />
            </div>
            <div className="cs-card__body">
              <span className="cs-card__industry">{s.industry}</span>
              <h3 className="cs-card__title">{s.title}</h3>
              <div className="cs-card__date">
                <CalendarIcon />
                <span>{s.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
