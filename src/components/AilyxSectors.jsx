import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const SECTORS = [
  { name: 'AVAC / Climatização' },
  { name: 'Solar / Fotovoltaico' },
  { name: 'Electricidade' },
  { name: 'Remodelações' },
  { name: 'Canalização' },
  { name: 'Serralharia' },
  { name: 'Carpintaria' },
  { name: 'Pintura / Obras' },
  { name: 'Limpeza Industrial' },
  { name: 'Jardinagem' },
]

/* Small SVG icons per sector */
function SectorIcon({ name }) {
  if (name.startsWith('AVAC'))
    return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v4l3 3" /><circle cx="12" cy="12" r="2" /></svg>
  if (name.startsWith('Solar'))
    return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
  if (name.startsWith('Elect'))
    return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

export default function AilyxSectors() {
  const wrapRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(wrapRef.current.children, {
        y: 20, opacity: 0, duration: 0.6, ease: 'power2.out', stagger: 0.06,
        scrollTrigger: { trigger: wrapRef.current, start: 'top 82%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{
      background: '#0d1f4a',
      padding: 'clamp(48px, 6vw, 72px) 0',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="ayl-container">

        <p style={{
          textAlign: 'center',
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'rgba(144,200,255,0.55)',
          marginBottom: '28px',
        }}>
          Implementado em empresas de serviços como
        </p>

        <div
          ref={wrapRef}
          style={{
            display: 'flex', flexWrap: 'wrap',
            gap: '10px', justifyContent: 'center',
          }}
        >
          {SECTORS.map(s => (
            <div
              key={s.name}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '9px 16px', borderRadius: '100px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(144,200,255,0.15)',
                color: 'rgba(255,255,255,0.72)',
                fontSize: '13px', fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                transition: 'background 0.2s, border-color 0.2s',
              }}
            >
              <span style={{ color: 'rgba(144,200,255,0.7)', display: 'flex' }}>
                <SectorIcon name={s.name} />
              </span>
              {s.name}
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center', marginTop: '28px',
          fontSize: '13px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6,
        }}>
          Se a sua empresa recebe pedidos de clientes e depende de resposta rápida para fechar vendas — é para si.
        </p>

      </div>
    </section>
  )
}
