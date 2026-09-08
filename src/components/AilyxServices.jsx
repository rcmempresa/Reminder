import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Cards with positions inside the 500×440 visual panel
// Center of logo hub: (250, 220)
const NODES = [
  { label: 'Novo lead',      icon: '📩', color: '#5aabff', px: 28,  py: 32,  dur: '2.2s', delay: '0s'    },
  { label: 'Orçamento',      icon: '📄', color: '#4ade80', px: 330, py: 18,  dur: '2.8s', delay: '0.4s'  },
  { label: 'Follow-up',      icon: '↗',  color: '#f59e0b', px: 348, py: 188, dur: '1.9s', delay: '0.8s'  },
  { label: 'OT criada',      icon: '🔧', color: '#a78bfa', px: 320, py: 358, dur: '2.5s', delay: '0.2s'  },
  { label: 'Fatura emitida', icon: '🧾', color: '#34d399', px: 20,  py: 362, dur: '3.1s', delay: '0.6s'  },
  { label: 'Reativação',     icon: '🔁', color: '#fb7185', px: 14,  py: 200, dur: '2.4s', delay: '1.0s'  },
]

// Center of each card (card ≈ 138×40px, so center = px+69, py+20)
const CX = 250, CY = 220
const cardCx = n => n.px + 69
const cardCy = n => n.py + 20

export default function AilyxServices() {
  const sectionRef = useRef(null)
  const cardsRef   = useRef([])
  const textRef    = useRef(null)
  const hubRef     = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: textRef.current, start: 'top 76%', once: true },
      })
      gsap.from(hubRef.current, {
        scale: 0.6, opacity: 0, duration: 0.9, ease: 'back.out(1.6)',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 76%', once: true },
      })
      cardsRef.current.filter(Boolean).forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, scale: 0.75,
          duration: 0.7, ease: 'back.out(1.4)',
          delay: NODES[i].delay === '0s' ? 0.2 : parseFloat(NODES[i].delay) + 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
        })
        gsap.to(card, {
          y: `+=${5 + i * 1.5}`, duration: 2.4 + i * 0.35,
          ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.25 + 1,
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: '#06142e', padding: 'clamp(80px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-5%', width: '50%', height: '80%',
        background: 'radial-gradient(ellipse, rgba(33,127,241,0.12) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="ayl-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="ayl-services-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

          {/* LEFT */}
          <div ref={textRef} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{
              alignSelf: 'flex-start',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(33,127,241,0.18)', border: '1px solid rgba(33,127,241,0.3)',
              borderRadius: '100px', padding: '5px 14px',
            }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#90c8ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                O problema
              </span>
            </div>

            <h2 style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              color: '#fff', lineHeight: 1.06, letterSpacing: '-0.05em', margin: 0,
            }}>
              O problema não é<br />
              <span style={{ color: '#5aabff' }}>falta de ferramentas.</span><br />
              É o que acontece entre elas.
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: 1.7, maxWidth: '380px', margin: 0 }}>
              A empresa já tem CRM, email, WhatsApp e calendário. Mas entre uma ferramenta e outra, alguém copia informação, envia um email, cria uma tarefa. É aí que a capacidade desaparece.
            </p>

            <div style={{
              padding: '16px 20px',
              background: 'rgba(33,127,241,0.12)',
              border: '1px solid rgba(33,127,241,0.25)',
              borderRadius: '12px',
            }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                Evento → alguém tem de se lembrar → trabalho manual → atraso → esquecimento.<br />
                <span style={{ color: '#5aabff' }}>Com a Remindr: evento → ação executada automaticamente.</span>
              </p>
            </div>

            <a href="/diagnostico" style={{
              alignSelf: 'flex-start',
              background: '#fff', color: '#0a1c42',
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: '14px', padding: '14px 26px',
              borderRadius: '12px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center',
              transition: 'transform 0.18s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = ''}
            >
              Ver como funciona →
            </a>
          </div>

          {/* RIGHT — live AI system visual */}
          <div className="ayl-services-visual" style={{ position: 'relative', height: '440px', width: '100%' }}>

            {/* SVG: connection lines + animated data pulses */}
            <svg
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
              viewBox="0 0 500 440"
              preserveAspectRatio="xMidYMid meet"
            >
              {NODES.map((n, i) => {
                const x2 = cardCx(n), y2 = cardCy(n)
                const path = `M${CX},${CY} L${x2},${y2}`
                return (
                  <g key={i}>
                    {/* Static dashed line */}
                    <line
                      x1={CX} y1={CY} x2={x2} y2={y2}
                      stroke={`${n.color}30`} strokeWidth="1.5" strokeDasharray="5 7"
                    />
                    {/* Animated data pulse */}
                    <circle r="3.5" fill={n.color} opacity="0.9">
                      <animateMotion dur={n.dur} repeatCount="indefinite" begin={n.delay} path={path} />
                    </circle>
                    {/* Second pulse offset */}
                    <circle r="2" fill={n.color} opacity="0.5">
                      <animateMotion dur={n.dur} repeatCount="indefinite" begin={`calc(${n.delay} + ${parseFloat(n.dur) / 2}s)`} path={path} />
                    </circle>
                  </g>
                )
              })}

              {/* Orbit rings */}
              <circle cx={CX} cy={CY} r="68" stroke="rgba(33,127,241,0.15)" strokeWidth="1" fill="none" strokeDasharray="3 9" />
              <circle cx={CX} cy={CY} r="110" stroke="rgba(33,127,241,0.07)" strokeWidth="1" fill="none" />
            </svg>

            {/* Central logo hub */}
            <div
              ref={hubRef}
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 4,
              }}
            >
              {/* Outer pulse ring */}
              <div style={{
                position: 'absolute', inset: '-20px',
                borderRadius: '50%',
                border: '1px solid rgba(33,127,241,0.25)',
                animation: 'robot-ring-pulse 2.5s ease-in-out infinite',
              }} />
              <div style={{
                position: 'absolute', inset: '-36px',
                borderRadius: '50%',
                border: '1px solid rgba(33,127,241,0.1)',
                animation: 'robot-ring-pulse 2.5s ease-in-out infinite 0.6s',
              }} />

              {/* Hub circle */}
              <div style={{
                width: '96px', height: '96px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #0e3ba0, #0a1c42)',
                border: '1.5px solid rgba(33,127,241,0.5)',
                boxShadow: '0 0 40px rgba(33,127,241,0.35), 0 0 80px rgba(33,127,241,0.1)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '4px',
              }}>
                <img
                  src="/logotipo-editado.png"
                  alt="Logo"
                  style={{ width: '52px', height: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.95 }}
                />
              </div>

              {/* Live badge */}
              <div style={{
                position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)',
                background: '#06142e', border: '1px solid rgba(74,222,128,0.4)',
                borderRadius: '100px', padding: '2px 8px',
                display: 'flex', alignItems: 'center', gap: '4px',
                whiteSpace: 'nowrap',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', animation: 'hero-pulse 2s ease-in-out infinite', flexShrink: 0 }} />
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#4ade80', letterSpacing: '0.08em' }}>LIVE</span>
              </div>
            </div>

            {/* Node cards */}
            {NODES.map((n, i) => (
              <div
                key={i}
                ref={el => cardsRef.current[i] = el}
                style={{
                  position: 'absolute',
                  left: `${(n.px / 500) * 100}%`,
                  top: `${(n.py / 440) * 100}%`,
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${n.color}33`,
                  backdropFilter: 'blur(12px)',
                  borderRadius: '12px',
                  padding: '9px 13px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  zIndex: 3,
                  minWidth: '138px',
                }}
              >
                <span style={{
                  width: '26px', height: '26px', borderRadius: '7px',
                  background: `${n.color}18`,
                  border: `1px solid ${n.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', flexShrink: 0,
                }}>
                  {n.icon}
                </span>
                <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#fff', fontFamily: 'Sora, sans-serif', whiteSpace: 'nowrap', flex: 1 }}>
                  {n.label}
                </span>
                {/* Processing dot */}
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: n.color, opacity: 0.8, animation: `hero-pulse ${1.5 + i * 0.3}s ease-in-out infinite`, flexShrink: 0 }} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
