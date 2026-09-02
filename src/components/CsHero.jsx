import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const HERO_BG = 'https://framerusercontent.com/images/bKExIpOffkgXAjdSThzw9GHx0k.png?width=4320&height=3024'
const AVATAR_1 = 'https://framerusercontent.com/images/b5y3qfYzvPX9R9yQzoe3BrYGhQ0.jpg?scale-down-to=512'
const AVATAR_2 = 'https://framerusercontent.com/images/YRUZjQBxT47td08mXOdUUq0NN8o.png?scale-down-to=512'
const AVATAR_3 = 'https://framerusercontent.com/images/T6jEThz4CMlhwWVLjhBXAh03hPQ.png?scale-down-to=512'

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFD166" style={{ flexShrink: 0 }}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export default function CsHero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const children = Array.from(el.children)
    gsap.set(children, { y: 40, opacity: 0 })
    const ctx = gsap.context(() => {
      gsap.to(children, {
        y: 0, opacity: 1,
        duration: 1, ease: 'power3.out',
        stagger: 0.12, delay: 0.3,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="cs-hero">
      <div className="cs-hero__bg">
        <img src={HERO_BG} alt="" className="cs-hero__bg-img" />
        <div className="cs-hero__bg-overlay" />
      </div>

      <div className="cs-hero__inner" ref={contentRef}>
        {/* Left column */}
        <div className="cs-hero__left">
          <span className="cs-hero__label">Case Studies</span>
          <h1 className="ayl-h1 cs-hero__h1">
            See What's Possible<br />with Aylix
          </h1>
          <div className="cs-hero__trust">
            <div className="ayl-hero__avatars">
              <img src={AVATAR_1} alt="" className="ayl-hero__avatar" />
              <img src={AVATAR_2} alt="" className="ayl-hero__avatar" />
              <img src={AVATAR_3} alt="" className="ayl-hero__avatar" />
            </div>
            <div>
              <div className="cs-hero__stars">
                {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                <span className="cs-hero__rating-text">4.9 / 5</span>
              </div>
              <span className="cs-hero__trust-text">Trusted by <strong>300+ clients</strong></span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="cs-hero__right">
          <p className="cs-hero__sub">
            <strong>Real-world automation.</strong> Real impact. Here's how teams are using Aylix to save hours, reduce costs, and move faster.
          </p>
          <a href="#contact" className="ayl-btn ayl-btn--outline-white cs-hero__cta">
            Get in touch
          </a>
          <div className="cs-hero__scroll">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12l4 4 4-4" />
            </svg>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  )
}
