import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─── Step 4 mini-UI (no image available) ────────────── */

function VisualPlan() {
  const rows = [
    { label: 'Acomp. propostas',   imp: 'Alto',  pri: '01', hi: true  },
    { label: 'Suporte automático', imp: 'Alto',  pri: '02', hi: false },
    { label: 'Relatórios auto.',   imp: 'Médio', pri: '03', hi: false },
  ]
  return (
    <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '10px', height: '100%', boxSizing: 'border-box', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
        <div style={{ fontSize: '9px', fontWeight: 700, color: '#5a8aff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Plano de Prioridades</div>
        <span style={{ fontSize: '9px', fontWeight: 700, color: 'white', background: '#217FF1', borderRadius: '4px', padding: '2px 6px' }}>Dia 7</span>
      </div>

      <div style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 44px 52px', padding: '7px 12px', background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {['Ação', 'Impacto', 'Prior.'].map((h, i) => (
            <div key={h} style={{ fontSize: '8px', color: 'rgba(255,255,255,0.35)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: i > 0 ? 'center' : 'left' }}>{h}</div>
          ))}
        </div>
        {rows.map((r, i) => (
          <div key={r.label} style={{ display: 'grid', gridTemplateColumns: '1fr 44px 52px', padding: '8px 12px', alignItems: 'center', background: r.hi ? 'rgba(33,127,241,0.18)' : 'transparent', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
            <span style={{ fontSize: '9px', fontWeight: 600, color: r.hi ? 'white' : 'rgba(255,255,255,0.6)' }}>{r.label}</span>
            <span style={{ fontSize: '9px', fontWeight: 700, color: r.hi ? '#5aabff' : 'rgba(255,255,255,0.3)', textAlign: 'center' }}>{r.imp}</span>
            <span style={{ fontSize: '11px', fontWeight: 800, color: r.hi ? '#5aabff' : 'rgba(255,255,255,0.15)', fontFamily: 'Sora, sans-serif', textAlign: 'center' }}>{r.pri}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: '#217FF1', borderRadius: '10px', marginTop: '4px' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
        <span style={{ fontSize: '10px', fontWeight: 700, color: 'white' }}>Entrega do Plano de Prioridades</span>
      </div>
    </div>
  )
}

/* ─── Step data ───────────────────────────────────────── */

const STEPS = [
  {
    num: '01', day: 'Dia 1', label: 'Conhecer o Negócio',
    desc: 'Entendemos o negócio, a equipa, as ferramentas e os processos. Percebemos onde a empresa passa mais tempo e onde existem maiores pontos de fricção.',
    image: '/solucao_1.png',
    imageAlt: 'Análise do negócio',
  },
  {
    num: '02', day: 'Dias 2–4', label: 'Mapear os Processos',
    desc: 'Mapeamos os processos críticos do negócio. Identificamos os fluxos de trabalho e os pontos onde o trabalho abranda ou para.',
    image: '/solucao_2.png',
    imageAlt: 'Mapeamento de processos',
  },
  {
    num: '03', day: 'Dias 5–6', label: 'Identificar Oportunidades',
    desc: 'Identificamos oportunidades de automação e IA. Calculamos o impacto potencial de cada uma e classificamos por prioridade e viabilidade.',
    image: '/solucao_3.png',
    imageAlt: 'Identificação de oportunidades',
  },
  {
    num: '04', day: 'Dia 7', label: 'Plano de Ação',
    desc: 'Entregamos o Plano de Prioridades — com as oportunidades, o impacto esperado, a complexidade e a ordem de implementação recomendada.',
    image: null,
    delivery: true,
  },
]

/* ─── Main component ──────────────────────────────────── */

export default function AilyxProcess() {
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(gridRef.current.children),
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.75, ease: 'power3.out',
          stagger: { each: 0.11, from: 'start' },
          scrollTrigger: { trigger: gridRef.current, start: 'top 78%', once: true },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="ayl-section ayl-section--alt" id="processo">
      <div className="ayl-container">

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px', marginBottom: '52px', flexWrap: 'wrap' }}>
          <div>
            <div className="ayl-section-label">Como funciona o Diagnóstico</div>
            <h2 className="ayl-h2">
              60 minutos para saber<br />onde está a oportunidade.
            </h2>
          </div>
          <div style={{ maxWidth: '300px' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#217FF1', marginBottom: '4px' }}>
              Conhecer → Mapear → Identificar → Planear
            </div>
            <div style={{ fontSize: '13px', color: '#888' }}>Um processo estruturado. Uma entrega concreta.</div>
          </div>
        </div>

        {/* Photo strip — pessoas e processo */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '0', marginBottom: '52px', position: 'relative', height: '180px',
        }}>
          {[
            { src: '/1.png', rot: '-6deg', z: 1, x: '0px'   },
            { src: '/2.png', rot: '-2deg', z: 3, x: '-12px'  },
            { src: '/3.png', rot:  '2deg', z: 5, x: '-20px'  },
            { src: '/4.png', rot:  '5deg', z: 3, x: '-12px'  },
            { src: '/5.png', rot:  '8deg', z: 1, x: '0px'   },
          ].map((p, i) => (
            <div key={i} style={{
              width: '108px', height: '144px', flexShrink: 0,
              borderRadius: '12px', overflow: 'hidden',
              border: '3px solid white',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              transform: `rotate(${p.rot}) translateX(${p.x})`,
              zIndex: p.z, position: 'relative',
              transition: 'transform 0.2s ease, z-index 0s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = `rotate(0deg) translateY(-8px) scale(1.05)`; e.currentTarget.style.zIndex = 10 }}
              onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${p.rot}) translateX(${p.x})`; e.currentTarget.style.zIndex = p.z }}
            >
              <img src={p.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} loading="lazy" />
            </div>
          ))}
          {/* Ambient glow behind photos */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0,
            background: 'radial-gradient(ellipse at center, rgba(33,127,241,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* 2×2 card grid */}
        <div ref={gridRef} className="ayl-process-grid">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="ayl-process-card"
              style={{
                background: step.image ? '#06142e' : 'white',
                border: step.image ? '1px solid rgba(255,255,255,0.08)' : '1.5px solid #e8edf5',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: step.image
                  ? '0 8px 40px rgba(6,20,46,0.25)'
                  : '0 4px 24px rgba(33,127,241,0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = step.image
                  ? '0 20px 60px rgba(6,20,46,0.4)'
                  : '0 16px 48px rgba(33,127,241,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = step.image
                  ? '0 8px 40px rgba(6,20,46,0.25)'
                  : '0 4px 24px rgba(33,127,241,0.05)'
              }}
            >
              {/* Visual area */}
              <div style={{
                position: 'relative',
                height: '220px',
                overflow: 'hidden',
                background: step.image
                  ? 'linear-gradient(135deg, #08224e 0%, #0e3a9c 100%)'
                  : 'linear-gradient(140deg, #EEF4FF 0%, #F4F8FF 100%)',
                borderBottom: step.image ? '1px solid rgba(255,255,255,0.06)' : '1px solid #e8edf5',
              }}>
                {/* Dot grid overlay */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 1,
                  backgroundImage: step.image
                    ? 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)'
                    : 'radial-gradient(circle, rgba(33,127,241,0.07) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }} />

                {step.image ? (
                  /* Screenshot mockup */
                  <div style={{
                    position: 'absolute', inset: 0, zIndex: 2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '16px',
                  }}>
                    <div style={{
                      width: '100%',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      transform: 'perspective(800px) rotateX(3deg)',
                      transformOrigin: 'center top',
                    }}>
                      {/* Browser bar */}
                      <div style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '5px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        {['#f87171','#fbbf24','#4ade80'].map((c) => (
                          <span key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c, opacity: 0.8 }} />
                        ))}
                        <div style={{ flex: 1, height: 12, background: 'rgba(255,255,255,0.06)', borderRadius: '4px', marginLeft: '8px' }} />
                      </div>
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top', maxHeight: '140px' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : (
                  /* Step 4: mini plan UI */
                  <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
                    <VisualPlan />
                  </div>
                )}
              </div>

              {/* Card body */}
              <div style={{
                padding: '20px 22px 22px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                background: step.image ? 'transparent' : 'white',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '13px', color: step.image ? 'rgba(255,255,255,0.4)' : '#217FF1', letterSpacing: '-0.02em' }}>
                    {step.num}
                  </span>
                  <span style={{ width: 1, height: 12, background: step.image ? 'rgba(255,255,255,0.1)' : '#e8edf5', display: 'inline-block' }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: step.image ? 'rgba(255,255,255,0.4)' : '#888' }}>
                    {step.day}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '16px', color: step.image ? 'white' : '#0a1c42', letterSpacing: '-0.02em', lineHeight: 1.3, margin: 0 }}>
                  {step.label}
                </h3>

                <p style={{ fontSize: '13px', color: step.image ? 'rgba(255,255,255,0.55)' : '#666', lineHeight: 1.65, margin: 0, flex: 1 }}>
                  {step.desc}
                </p>

                {step.delivery && (
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#217FF1', background: '#EEF4FF', borderRadius: '100px', padding: '5px 14px', display: 'inline-block', alignSelf: 'flex-start', marginTop: '4px' }}>
                    Entrega do Plano de Prioridades
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
          <a href="/diagnostico" className="ayl-btn ayl-btn--primary">
            Quero identificar as minhas oportunidades →
          </a>
          <span style={{ fontSize: '13px', color: '#aaa' }}>
            60 min · Análise completa · Plano de prioridades
          </span>
        </div>

      </div>
    </section>
  )
}
