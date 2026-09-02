import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import AilyxNav    from './components/AilyxNav'
import HermesChat  from './components/HermesChat'
import AilyxMotion from './components/AilyxMotion'
import HomePage    from './pages/HomePage'
import DiagnosticoPage from './pages/DiagnosticoPage'
import ThankYouPage    from './pages/ThankYouPage'

function LenisWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    let rafId
    function raf(time) { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)
    return () => { lenis.destroy(); cancelAnimationFrame(rafId) }
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

  if (pathname === '/diagnostico' || pathname === '/obrigado') return null

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

export default function App() {
  return (
    <BrowserRouter>
      <AilyxMotion />
      <UrgencyBar />
      <AilyxNav />
      <HermesChat />
      <Routes>
        <Route path="/" element={
          <LenisWrapper>
            <HomePage />
          </LenisWrapper>
        } />
        <Route path="/case-studies" element={<Navigate to="/" replace />} />
        <Route path="/features" element={<Navigate to="/" replace />} />
        <Route path="/crm" element={<Navigate to="/" replace />} />
        <Route path="/crm/diagnostico" element={<Navigate to="/diagnostico" replace />} />
        <Route path="/diagnostico" element={<DiagnosticoPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  )
}
