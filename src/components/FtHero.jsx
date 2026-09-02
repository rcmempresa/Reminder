import { useEffect, useRef } from 'react'
import gsap from 'gsap'

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

export default function FtHero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const children = Array.from(el.querySelectorAll('.ft-hero__anim'))
    gsap.set(children, { y: 40, opacity: 0 })
    const ctx = gsap.context(() => {
      gsap.to(children, {
        y: 0, opacity: 1,
        duration: 1, ease: 'power3.out',
        stagger: 0.12, delay: 0.2,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="ft-hero">
      <div className="ft-hero__bg" />

      <div className="ft-hero__inner" ref={contentRef}>
        {/* Left column */}
        <div className="ft-hero__left">
          <span className="ft-hero__label ft-hero__anim">FEATURES</span>
          <h1 className="ft-hero__h1 ft-hero__anim">
            Your AI workforce,<br />
            built for<br />
            modern teams
          </h1>
          <div className="ft-hero__trust ft-hero__anim">
            <div className="ayl-hero__avatars">
              <img src={AVATAR_1} alt="" className="ayl-hero__avatar" />
              <img src={AVATAR_2} alt="" className="ayl-hero__avatar" />
              <img src={AVATAR_3} alt="" className="ayl-hero__avatar" />
            </div>
            <div>
              <div className="ft-hero__stars">
                {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                <span className="ft-hero__rating">4.9 / 5</span>
              </div>
              <span className="ft-hero__trust-text">Trusted by <strong>300+ clients</strong></span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="ft-hero__right">
          <p className="ft-hero__sub ft-hero__anim">
            <strong>Powerful agents.</strong> Instant deployment. Built-in intelligence to automate what matters.
          </p>
          <div className="ft-hero__ctas ft-hero__anim">
            <a href="/case-studies" className="ayl-btn ft-hero__btn-ghost">Case studies</a>
            <a href="#contact" className="ayl-btn ft-hero__btn-solid">Get in touch</a>
          </div>
          <div className="ft-hero__scroll ft-hero__anim">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
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
