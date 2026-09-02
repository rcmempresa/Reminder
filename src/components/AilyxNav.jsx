import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function AilyxNav() {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const { pathname } = useLocation()
  const isDiag = pathname === '/diagnostico' || pathname === '/obrigado'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`ayl-nav${scrolled ? ' ayl-nav--scrolled' : ''}${isDiag ? ' ayl-nav--blue' : ''}`} ref={navRef}>
      <div className="ayl-nav__inner">
        <Link to="/" className="ayl-nav__logo">
          <img src="/logotipo-editado.png" alt="" className="ayl-nav__logo-bird" />
          <span className="ayl-nav__logo-mark">
            <span className="ayl-nav__logo-remindr">Reminder</span>
            <span className="ayl-nav__logo-ai"> AI</span>
          </span>
        </Link>

        <div className="ayl-nav__links">
          <a href="#audit" className="ayl-nav__link">
            <span className="ayl-nav__link-inner">
              <span>Diagnóstico</span>
              <span aria-hidden="true">Diagnóstico</span>
            </span>
          </a>
          <a href="#build" className="ayl-nav__link">
            <span className="ayl-nav__link-inner">
              <span>Como construímos</span>
              <span aria-hidden="true">Como construímos</span>
            </span>
          </a>
          <a href="#systems" className="ayl-nav__link">
            <span className="ayl-nav__link-inner">
              <span>Sistemas</span>
              <span aria-hidden="true">Sistemas</span>
            </span>
          </a>
          <a href="#faq" className="ayl-nav__link">
            <span className="ayl-nav__link-inner">
              <span>FAQ</span>
              <span aria-hidden="true">FAQ</span>
            </span>
          </a>
        </div>

        <a href="/diagnostico" className="ayl-btn ayl-btn--nav">
          Diagnóstico Gratuito →
        </a>
      </div>
    </nav>
  )
}
