import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AilyxHero() {
  const contentRef = useRef(null)
  const robotRef   = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const lines    = Array.from(el.querySelectorAll('.hero-h1-inner'))
    const siblings = Array.from(el.children).filter(c => !c.classList.contains('hero-h1'))

    gsap.set(lines, { y: '115%' })
    gsap.to(lines, { y: '0%', duration: 1.15, ease: 'power4.out', stagger: 0.11, delay: 0.1 })
    gsap.set(siblings, { y: 28, opacity: 0 })
    gsap.to(siblings, { y: 0, opacity: 1, duration: 0.95, ease: 'power3.out', stagger: 0.11, delay: 0.6 })

    // Robot entrance + float
    if (robotRef.current) {
      gsap.fromTo(robotRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.8 }
      )
      gsap.to(robotRef.current, { y: -14, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2.2 })
    }
  }, [])

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#06102a',
      overflow: 'hidden',
    }}>

      {/* Animated mesh background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-20%', left: '-10%',
          width: '60%', height: '80%',
          background: 'radial-gradient(ellipse, rgba(33,127,241,0.35) 0%, transparent 65%)',
          filter: 'blur(60px)',
          animation: 'blob1 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', right: '5%',
          width: '55%', height: '70%',
          background: 'radial-gradient(ellipse, rgba(14,60,160,0.4) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'blob2 10s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '30%', right: '20%',
          width: '30%', height: '40%',
          background: 'radial-gradient(ellipse, rgba(100,180,255,0.15) 0%, transparent 65%)',
          filter: 'blur(40px)',
          animation: 'blob3 12s ease-in-out infinite',
        }} />
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        {/* Top edge glow */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(100,180,255,0.7) 40%, rgba(33,127,241,0.4) 70%, transparent)',
        }} />
      </div>

      {/* Main content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: 'calc(var(--nav-h) + 32px) 0 40px',
        position: 'relative',
        zIndex: 2,
      }}>
        <div className="ayl-container">
          <div className="ayl-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

            {/* LEFT — copy */}
            <div ref={contentRef} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                <h1 className="hero-h1" style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 700,
                fontSize: 'clamp(26px, 3vw, 44px)',
                lineHeight: 1.1, letterSpacing: '-0.045em',
                color: '#fff', margin: 0,
              }}>
                Faça a sua empresa crescer{' '}
                <span style={{ color: '#5aabff' }}>sem depender de mais pessoas.</span>
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', lineHeight: 1.7, maxWidth: '480px', margin: 0 }}>
                Encontramos os workflows que estão a consumir mais tempo e dinheiro, construímos sistemas para os executar automaticamente e medimos o impacto real no negócio.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <a href="/diagnostico" style={{
                  background: '#217FF1', color: '#fff',
                  fontFamily: 'Sora, sans-serif', fontWeight: 700,
                  fontSize: '15px', padding: '16px 32px',
                  borderRadius: '14px', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center',
                  boxShadow: '0 8px 32px rgba(33,127,241,0.45)',
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(33,127,241,0.55)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 32px rgba(33,127,241,0.45)' }}
                >
                  Descobrir onde podemos criar impacto →
                </a>
              </div>

              <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.02em' }}>
                Diagnóstico gratuito · 60 min · Sem compromisso
              </span>
            </div>

            {/* RIGHT — Robot visual */}
            <div ref={robotRef} className="ayl-hero-robot" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', opacity: 0 }}>
              <RobotVisual />
            </div>

          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div style={{
        position: 'relative', zIndex: 2, width: '100%',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(10px)',
      }}>
        <div className="ayl-container">
          <div className="ayl-hero-trustbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '20px 0' }}>
            {[
              { value: '60 min', label: 'para ter clareza' },
              { value: 'Implementação rápida', label: 'conforme âmbito definido' },
              { value: '100% feito por nós', label: 'sem trabalho técnico seu' },
              { value: 'Risco zero', label: 'sem compromisso' },
            ].map((s, i) => (
              <div key={i} style={{
                textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                padding: '4px 0',
              }}>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', color: '#fff', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

// Hub center in the 440×440 space. Robot head is centered at ~(220,200).
const HUB_CX = 220, HUB_CY = 200
const HERO_CARDS = [
  { label: 'Novo pedido recebido', sub: 'evento → ação imediata', color: '#5aabff', icon: '📩', px: 290, py: 28,  dur: '2.2s', delay: '0s'   },
  { label: 'Orçamento gerado',     sub: 'sem intervenção manual', color: '#4ade80', icon: '📄', px: 320, py: 185, dur: '2.8s', delay: '0.5s'  },
  { label: 'OT criada',            sub: 'após aceitação',         color: '#a78bfa', icon: '🔧', px: 270, py: 355, dur: '2.0s', delay: '1.0s'  },
  { label: 'Follow-up enviado',    sub: 'no momento certo',       color: '#fb7185', icon: '↗',  px: 30,  py: 330, dur: '3.0s', delay: '0.3s'  },
  { label: 'Cliente respondido',   sub: 'em segundos',            color: '#f59e0b', icon: '💬', px: 10,  py: 150, dur: '2.5s', delay: '0.7s'  },
]
const heroCx = c => c.px + 80  // card ~160px wide
const heroCy = c => c.py + 24  // card ~48px tall

function RobotVisual() {
  return (
    <div className="ayl-robot-canvas" style={{ position: 'relative', width: '440px', height: '440px' }}>

      {/* Deep glow behind robot */}
      <div style={{
        position: 'absolute', top: '20%', left: '20%', width: '60%', height: '60%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(33,127,241,0.28) 0%, transparent 70%)',
        filter: 'blur(32px)',
        animation: 'robot-ring-pulse 3s ease-in-out infinite',
      }} />

      {/* SVG: orbit rings + connection lines + data pulses */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
        viewBox="0 0 440 440"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Orbit rings */}
        <circle cx={HUB_CX} cy={HUB_CY} r="80"  stroke="rgba(33,127,241,0.18)" strokeWidth="1" fill="none" strokeDasharray="3 8" />
        <circle cx={HUB_CX} cy={HUB_CY} r="130" stroke="rgba(33,127,241,0.08)" strokeWidth="1" fill="none" />

        {HERO_CARDS.map((c, i) => {
          const x2 = heroCx(c), y2 = heroCy(c)
          const path = `M${HUB_CX},${HUB_CY} L${x2},${y2}`
          return (
            <g key={i}>
              {/* Dashed connector */}
              <line
                x1={HUB_CX} y1={HUB_CY} x2={x2} y2={y2}
                stroke={`${c.color}28`} strokeWidth="1.5" strokeDasharray="5 7"
              />
              {/* Primary pulse */}
              <circle r="3.5" fill={c.color} opacity="0.9">
                <animateMotion dur={c.dur} repeatCount="indefinite" begin={c.delay} path={path} />
              </circle>
              {/* Secondary pulse (offset) */}
              <circle r="2" fill={c.color} opacity="0.45">
                <animateMotion dur={c.dur} repeatCount="indefinite" begin={`calc(${c.delay} + ${parseFloat(c.dur) / 2}s)`} path={path} />
              </circle>
              {/* Node dot at card end */}
              <circle cx={x2} cy={y2} r="4" fill={`${c.color}50`} stroke={c.color} strokeWidth="1" opacity="0.6" />
            </g>
          )
        })}
      </svg>

      {/* Main sphere — chrome robot head */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -54%)',
        width: '240px', height: '280px',
        borderRadius: '50% 50% 45% 45% / 55% 55% 45% 45%',
        background: `
          radial-gradient(ellipse at 35% 28%, rgba(180,220,255,0.95) 0%, rgba(100,170,255,0.7) 22%, rgba(33,100,200,0.82) 52%, rgba(10,30,90,0.95) 82%, #040d20 100%)
        `,
        boxShadow: `
          0 0 90px rgba(33,127,241,0.5),
          0 0 180px rgba(10,60,180,0.2),
          inset 0 -30px 60px rgba(0,10,40,0.8),
          inset 30px 0 60px rgba(0,0,0,0.3),
          inset -10px 0 30px rgba(100,180,255,0.15)
        `,
        overflow: 'hidden',
        zIndex: 4,
      }}>
        {/* Specular highlight */}
        <div style={{
          position: 'absolute', top: '10%', left: '18%',
          width: '55%', height: '28%',
          background: 'radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.6) 0%, rgba(200,230,255,0.25) 50%, transparent 75%)',
          borderRadius: '50%',
          transform: 'rotate(-15deg)',
        }} />
        {/* Scan line sweep */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(100,200,255,0.8), transparent)',
          animation: 'hero-scan-line 3s linear infinite',
        }} />
        {/* Eyes */}
        <div style={{ position: 'absolute', top: '41%', left: '20%', display: 'flex', gap: '48px' }}>
          {[0, 1].map(i => (
            <div key={i} style={{
              width: '38px', height: '13px',
              borderRadius: '3px',
              background: 'rgba(150,210,255,0.92)',
              boxShadow: '0 0 14px rgba(100,190,255,1), 0 0 28px rgba(33,127,241,0.9)',
              animation: `eye-glow 2.5s ease-in-out infinite ${i * 0.3}s`,
            }} />
          ))}
        </div>
        {/* Processing dots row */}
        <div style={{
          position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '6px',
        }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: 5, height: 5, borderRadius: '50%',
              background: 'rgba(100,190,255,0.7)',
              animation: `hero-pulse ${1.2 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`,
            }} />
          ))}
        </div>
        {/* Chin line */}
        <div style={{
          position: 'absolute', bottom: '20%', left: '28%', right: '28%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(100,180,255,0.5), transparent)',
          borderRadius: '1px',
        }} />
      </div>

      {/* Pulsing rings around hub */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -54%)',
        width: '240px', height: '240px',
        borderRadius: '50%',
        border: '1px solid rgba(33,127,241,0.3)',
        animation: 'robot-ring-pulse 2.5s ease-in-out infinite',
        zIndex: 3,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -54%)',
        width: '290px', height: '290px',
        borderRadius: '50%',
        border: '1px solid rgba(33,127,241,0.12)',
        animation: 'robot-ring-pulse 2.5s ease-in-out infinite 0.7s',
        zIndex: 3,
        pointerEvents: 'none',
      }} />

      {/* Action cards */}
      {HERO_CARDS.map((c, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${c.px}px`,
            top: `${c.py}px`,
            background: 'rgba(255,255,255,0.055)',
            border: `1px solid ${c.color}35`,
            backdropFilter: 'blur(14px)',
            borderRadius: '12px',
            padding: '8px 12px',
            display: 'flex', alignItems: 'center', gap: '8px',
            zIndex: 5,
            minWidth: '160px',
            animation: `float-card-${['a','b','c','a','b'][i]} ${3.5 + i * 0.6}s ease-in-out infinite ${i * 0.4}s`,
          }}
        >
          <span style={{
            width: '24px', height: '24px', borderRadius: '6px',
            background: `${c.color}18`, border: `1px solid ${c.color}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '12px', flexShrink: 0,
          }}>
            {c.icon}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff', fontFamily: 'Sora, sans-serif', whiteSpace: 'nowrap' }}>{c.label}</div>
            <div style={{ fontSize: '9.5px', color: `${c.color}cc`, marginTop: '1px', whiteSpace: 'nowrap' }}>{c.sub}</div>
          </div>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: c.color, opacity: 0.85, animation: `hero-pulse ${1.4 + i * 0.25}s ease-in-out infinite`, flexShrink: 0 }} />
        </div>
      ))}
    </div>
  )
}
