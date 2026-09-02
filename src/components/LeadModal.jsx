import { useEffect, useRef } from 'react'
import LeadForm from './LeadForm'

export default function LeadModal({ isOpen, onClose }) {
  const overlayRef = useRef(null)

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="lf-modal__overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className="lf-modal__panel">
        <button className="lf-modal__close" onClick={onClose} aria-label="Fechar">
          ✕
        </button>
        <LeadForm />
      </div>
    </div>
  )
}
