import { useEffect, useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import AilyxNav    from './components/AilyxNav'
import HermesChat  from './components/HermesChat'
import AilyxMotion from './components/AilyxMotion'
import HomePage    from './pages/HomePage'
import DiagnosticoPage from './pages/DiagnosticoPage'
import ThankYouPage    from './pages/ThankYouPage'
import CrmPage         from './pages/CrmPage'

function LenisWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    // Sync Lenis with GSAP ScrollTrigger — critical for scrub animations
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => { lenis.raf(time * 1000) })
    gsap.ticker.lagSmoothing(0)
    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => { lenis.raf(time * 1000) })
    }
  }, [])
  return children
}

function UrgencyBar() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (pathname === '/diagnostico' || pathname === '/obrigado' || pathname.startsWith('/crm')) return null

  return (
    <div className={`urgency-bar urgency-bar--bottom${visible ? ' urgency-bar--visible' : ''}`}>
      <span className="urgency-bar__dot" />
      <span className="urgency-bar__text">
        Diagnóstico gratuito disponível para 4 empresas por mês — vagas limitadas.
      </span>
      <a href="/diagnostico" className="urgency-bar__cta">
        Garantir o meu lugar →
      </a>
    </div>
  )
}

function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(() => sessionStorage.getItem('ann-bar') === '1')
  const { pathname } = useLocation()

  const dismiss = useCallback(() => {
    setDismissed(true)
    sessionStorage.setItem('ann-bar', '1')
    document.documentElement.style.setProperty('--bar-h', '0px')
  }, [])

  useEffect(() => {
    if (pathname === '/diagnostico' || pathname === '/obrigado' || pathname.startsWith('/crm')) return
    document.documentElement.style.setProperty('--bar-h', dismissed ? '0px' : '36px')
  }, [dismissed, pathname])

  if (dismissed) return null
  if (pathname === '/diagnostico' || pathname === '/obrigado' || pathname.startsWith('/crm')) return null

  return (
    <div className="ann-bar">
      <span className="ann-bar__dot" />
      <span className="ann-bar__text">
        Só 4 empresas por mês. As primeiras a agir ganham.
      </span>
      <button className="ann-bar__close" onClick={dismiss} aria-label="Fechar">✕</button>
    </div>
  )
}

function LandingShell({ children }) {
  const { pathname } = useLocation()
  if (pathname.startsWith('/crm')) return children
  return (
    <>
      <AnnouncementBar />
      <AilyxMotion />
      <AilyxNav />
      <HermesChat />
      {children}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <UrgencyBar />
      <LandingShell>
        <Routes>
          <Route path="/" element={
            <LenisWrapper>
              <HomePage />
            </LenisWrapper>
          } />
          <Route path="/case-studies" element={<Navigate to="/" replace />} />
          <Route path="/features" element={<Navigate to="/" replace />} />
          <Route path="/diagnostico" element={<DiagnosticoPage />} />
          <Route path="/obrigado" element={<ThankYouPage />} />
          <Route path="/crm" element={<CrmPage />} />
          <Route path="/crm/*" element={<CrmPage />} />
        </Routes>
      </LandingShell>
    </BrowserRouter>
  )
}
