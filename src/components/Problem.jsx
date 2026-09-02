import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Ailyx-style initial scatter positions for 3 cards
const SCATTER = [
  { x: -160, y: 100, rotation: -10, scale: 0.82 },
  { x: 0,    y: 160, rotation:   0, scale: 0.78 },
  { x: 160,  y: 100, rotation:  10, scale: 0.82 },
]

function useCountUp(target, duration = 1600) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const num = parseFloat(target.replace(/[^0-9.]/g, ''))
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(num * ease * 10) / 10)
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])
  return [ref, val]
}

function BigStat({ stat, prefix = '', suffix = '' }) {
  const [ref, val] = useCountUp(stat)
  return (
    <span ref={ref} style={{
      fontSize: 'clamp(52px, 7vw, 72px)',
      fontWeight: 900,
      letterSpacing: '-0.04em',
      color: 'var(--danger)',
      lineHeight: 1,
      display: 'block',
    }}>
      {prefix}{val}{suffix}
    </span>
  )
}

const PAINS = [
  {
    stat: '22', prefix: '', suffix: '%',
    eyebrow: 'Faltas sem aviso',
    headline: 'Uma consulta em cada 5 não aparece. A cadeira fica vazia. A hora perdeu-se para sempre.',
    detail: 'Em 50 consultas por semana, são 11 horas paradas. À quinta-feira já perdeu mais de €800 nessa semana.',
  },
  {
    stat: '50', prefix: '<', suffix: '%',
    eyebrow: 'Tratamentos não aceites',
    headline: 'Propõe o plano. O paciente diz que pensa. Nunca mais volta — e ninguém vai buscar.',
    detail: 'Metade dos tratamentos propostos ficam por fechar. Sem follow-up automático, essa receita desaparece silenciosamente.',
  },
  {
    stat: '68', prefix: '', suffix: '%',
    eyebrow: 'Pacientes inativos',
    headline: 'A maioria da sua base de pacientes não voltou nos últimos 12 meses. Ninguém os contactou.',
    detail: 'Para uma clínica com 800 pacientes, mais de 500 estão inativos. Cada um representa uma consulta — e receita — que está na mesa.',
  },
]

export default function Problem() {
  const gridRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const cards = cardRefs.current
    if (!cards.length) return

    // Set initial scattered state immediately (no animation yet)
    cards.forEach((card, i) => {
      const s = SCATTER[i]
      gsap.set(card, {
        x: s.x,
        y: s.y,
        rotation: s.rotation,
        scale: s.scale,
        opacity: 0,
        transformOrigin: 'center center',
      })
    })

    // ScrollTrigger: fly cards into grid position on scroll
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.to(cards, {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: {
              amount: 0.22,
              from: 'center',
            },
          })
        },
        once: true,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="section section--alt" id="problem">
      <div className="container">

        <div className="anim" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(220,38,38,0.08)',
            color: 'var(--danger)',
            borderRadius: 100,
            padding: '4px 14px',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: 16,
          }}>
            O problema — em números reais
          </span>
          <h2 className="h2">
            Três fugas de receita.{' '}
            <span style={{ color: 'var(--text-2)' }}>Todas invisíveis. Todas evitáveis.</span>
          </h2>
        </div>

        {/* Cards grid — GSAP scatter effect */}
        <div className="problem__grid problem__grid--scatter" ref={gridRef}>
          {PAINS.map((p, i) => (
            <div
              key={i}
              ref={el => cardRefs.current[i] = el}
              className="problem__wrapper"
            >
              {/* Big stat */}
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--danger)', opacity: 0.7, display: 'block', marginBottom: 10 }}>
                  {p.eyebrow}
                </span>
                <BigStat stat={p.stat} prefix={p.prefix} suffix={p.suffix} />
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', lineHeight: 1.4, letterSpacing: '-0.01em', margin: '0 0 12px' }}>
                  {p.headline}
                </h3>
                <p style={{ fontSize: 13.5, color: 'var(--text-3)', lineHeight: 1.6, margin: 0 }}>
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="anim" style={{ marginTop: 52, textAlign: 'center' }}>
          <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 20 }}>
            Estas três fugas juntas custam tipicamente{' '}
            <span style={{ color: 'var(--danger)', fontWeight: 800 }}>€5.000–€8.000 por mês</span>{' '}
            a uma clínica com 40+ consultas semanais.
          </p>
          <a href="#final-cta" className="btn btn--primary btn--lg">
            Calcular a perda real da minha clínica →
          </a>
          <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 10 }}>
            Gratuito · sem compromisso · resultado em euros reais
          </p>
        </div>

      </div>
    </section>
  )
}
