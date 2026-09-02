import { useState, useEffect, useRef } from 'react'

/* ─── Panel 1: No-shows destroying revenue ───────────────────────────── */
function PanelFaltas() {
  const days = [
    { day: 'Seg', slots: [{ time: '09:00', status: 'ok' }, { time: '10:30', status: 'falta' }, { time: '14:00', status: 'ok' }, { time: '15:30', status: 'falta' }] },
    { day: 'Ter', slots: [{ time: '09:00', status: 'ok' }, { time: '10:30', status: 'ok' }, { time: '14:00', status: 'falta' }, { time: '15:30', status: 'ok' }] },
    { day: 'Qua', slots: [{ time: '09:00', status: 'falta' }, { time: '10:30', status: 'ok' }, { time: '14:00', status: 'ok' }, { time: '15:30', status: 'falta' }] },
  ]

  const totalSlots = days.flatMap(d => d.slots).length
  const faltas = days.flatMap(d => d.slots).filter(s => s.status === 'falta').length
  const lostRevenue = faltas * 120

  return (
    <div className="sol-panel sol-panel--purple">
      <div className="sol-panel__glow sol-panel__glow--purple" />
      <div className="sol-panel__card">
        <div className="sol-panel__section-label">Agenda esta semana · faltas registadas</div>

        <div style={{ display: 'flex', gap: 10, marginBottom: 16, paddingTop: 8 }}>
          {days.map(d => (
            <div key={d.day} style={{ flex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-3)', textAlign: 'center', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{d.day}</div>
              {d.slots.map(s => (
                <div key={s.time} style={{
                  marginBottom: 5, borderRadius: 6, padding: '5px 7px',
                  background: s.status === 'falta' ? '#FEF2F2' : '#F0FDF4',
                  border: `1px solid ${s.status === 'falta' ? '#FECACA' : '#BBF7D0'}`,
                  display: 'flex', alignItems: 'center', gap: 5,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.status === 'falta' ? 'var(--danger)' : 'var(--success)', flexShrink: 0 }} />
                  <span style={{ fontSize: 10, color: s.status === 'falta' ? 'var(--danger)' : 'var(--success)', fontWeight: 600 }}>{s.time}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
          <div style={{ flex: 1, background: '#FEF2F2', borderRadius: 8, padding: '10px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--danger)', lineHeight: 1 }}>{faltas}</div>
            <div style={{ fontSize: 10, color: '#991B1B', fontWeight: 600, marginTop: 3 }}>faltas esta semana</div>
          </div>
          <div style={{ flex: 1, background: '#FEF2F2', borderRadius: 8, padding: '10px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--danger)', lineHeight: 1 }}>€{lostRevenue}</div>
            <div style={{ fontSize: 10, color: '#991B1B', fontWeight: 600, marginTop: 3 }}>receita perdida</div>
          </div>
        </div>

        <div className="sol-panel__result">
          <div className="sol-result-icon" style={{ background: 'var(--danger-bg)', color: 'var(--danger)' }}>↑</div>
          <div>
            <p className="sol-result-title">22% das consultas resultam em falta sem aviso</p>
            <p className="sol-result-sub">Sem sistema de confirmação automática, a agenda destrói-se</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Panel 2: Revenue leaking from lost patients ────────────────────── */
function PanelReceita() {
  const items = [
    { label: 'Implante proposto · follow-up pendente', type: 'perdido', value: '€1.800' },
    { label: 'Paciente inativo há 8 meses · sem contacto', type: 'perdido', value: '€600/ano' },
    { label: 'Tratamento ortodôntico · nunca fechado', type: 'perdido', value: '€3.200' },
    { label: 'Check-up anual · nunca reagendado', type: 'perdido', value: '€80' },
  ]

  return (
    <div className="sol-panel sol-panel--blue">
      <div className="sol-panel__glow sol-panel__glow--blue" />
      <div className="sol-panel__card">
        <div className="sol-panel__section-label">Receita por recuperar · esta semana</div>
        <div className="sol-qual-list">
          {items.map((item, i) => (
            <div className="sol-qual-row" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="sol-qual-avatar" style={{ background: '#FEF3C7', color: '#92400E', fontSize: 12 }}>
                ⏱
              </div>
              <div className="sol-qual-info">
                <p className="sol-qual-name" style={{ fontSize: 13 }}>{item.label}</p>
              </div>
              <div className="sol-qual-right">
                <span className="sol-qual-badge" style={{ background: 'var(--danger-bg)', color: 'var(--danger)', border: 'none', fontWeight: 700 }}>
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="sol-qual-summary">
          <div className="sol-qual-stat">
            <span className="sol-qual-stat-val">&lt;50%</span>
            <span className="sol-qual-stat-label">tratamentos aceites</span>
          </div>
          <div className="sol-qual-stat">
            <span className="sol-qual-stat-val">0</span>
            <span className="sol-qual-stat-label">follow-ups automáticos</span>
          </div>
          <div className="sol-qual-stat">
            <span className="sol-qual-stat-val">€8k+</span>
            <span className="sol-qual-stat-label">receita invisível/mês</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Panel 3: Hiring more staff doesn't fix the process ─────────────── */
function PanelOperacao() {
  return (
    <div className="sol-panel sol-panel--purple">
      <div className="sol-panel__glow sol-panel__glow--purple" />
      <div className="sol-panel__card">
        <div className="sol-panel__section-label">O ciclo que não resolve o problema</div>

        {[
          { step: '1', text: 'Agenda cheia — secretária sobrecarregada', color: 'var(--success)' },
          { step: '2', text: 'Confirmações manuais ficam por fazer', color: '#F59E0B' },
          { step: '3', text: 'Faltas aumentam · follow-up não acontece', color: '#F97316' },
          { step: '4', text: 'Contratam mais uma secretária', color: 'var(--danger)' },
          { step: '5', text: 'Custos sobem · o processo continua igual', color: 'var(--danger)' },
          { step: '6', text: 'Volume aumenta → o ciclo repete-se →', color: 'var(--purple)', italic: true },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: i < 5 ? '1px solid var(--border)' : 'none' }}>
            <span style={{
              width: 24, height: 24, borderRadius: '50%', background: item.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 800, color: 'white', flexShrink: 0,
            }}>{item.step}</span>
            <span style={{ fontSize: 13, color: 'var(--text-2)', fontStyle: item.italic ? 'italic' : 'normal' }}>{item.text}</span>
          </div>
        ))}

        <div className="sol-panel__result" style={{ marginTop: 16 }}>
          <div className="sol-result-icon" style={{ background: 'var(--purple-light)', color: 'var(--purple)' }}>→</div>
          <div>
            <p className="sol-result-title">Contratar mais não resolve. É o processo que tem de mudar.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const slides = [
  {
    label: 'PROBLEMA',
    title: 'FALTAS',
    titleGradient: 'linear-gradient(90deg, #0D0C1D 0%, #5B4FE9 50%, #9B93F5 100%)',
    description: 'Uma em cada cinco consultas resulta em falta sem aviso. Cada falta é receita que desaparece — e a agenda que fica vazia enquanto outros pacientes esperavam. Sem confirmação automática, o problema cresce com a clínica.',
    tags: ['22% taxa de faltas', 'Agenda destruída', 'Receita não recuperada', 'Confirmação manual'],
    tagColor: { bg: '#EDE9FF', border: '#C4BCFF', text: '#2D1FA8' },
    cta: 'Calcular o impacto na minha clínica →',
    Panel: PanelFaltas,
  },
  {
    label: 'PROBLEMA',
    title: 'RECEITA INVISÍVEL',
    titleGradient: 'linear-gradient(90deg, #0D0C1D 0%, #2563EB 50%, #60A5FA 100%)',
    description: 'Numa clínica com €300k+ de faturação, mais de metade dos tratamentos propostos nunca são aceites — não porque o paciente recusou, mas porque o follow-up nunca aconteceu. São €8.000 ou mais por mês que ficam em cima da mesa.',
    tags: ['<50% aceitação', 'Follow-up inexistente', 'Pacientes perdidos', 'Milhares por recuperar'],
    tagColor: { bg: '#EFF6FF', border: '#BFDBFE', text: '#1E3A8A' },
    cta: 'Calcular o impacto na minha clínica →',
    Panel: PanelReceita,
  },
  {
    label: 'PROBLEMA',
    title: 'OPERAÇÃO',
    titleGradient: 'linear-gradient(90deg, #0D0C1D 0%, #5B4FE9 50%, #9B93F5 100%)',
    description: 'A resposta instintiva é contratar mais uma secretária. Mas mais pessoas a fazer processos manuais não resolve — só aumenta o custo de ter o mesmo problema à escala maior. O processo é que tem de mudar.',
    tags: ['Ciclo vicioso', 'Custo fixo crescente', 'Processos manuais', 'Margem em queda'],
    tagColor: { bg: '#EDE9FF', border: '#C4BCFF', text: '#2D1FA8' },
    cta: 'Calcular o impacto na minha clínica →',
    Panel: PanelOperacao,
  },
]

export default function Solutions() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY
      const scrolled = window.scrollY - sectionTop
      const slideHeight = window.innerHeight
      const newSlide = Math.min(slides.length - 1, Math.max(0, Math.floor(scrolled / slideHeight)))
      setActive(newSlide)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="solutions" id="solutions" ref={sectionRef}>
      <div className="solutions__sticky">
        <div className="solutions__header container">
          <h2 className="h2 solutions__title">
            O que está a custar{' '}
            <mark className="solutions__mark">em silêncio.</mark>
          </h2>
        </div>

        <div className="solutions__track-wrap">
          <div
            className="solutions__track"
            style={{ transform: `translateX(calc(-${active * 100}% - ${active * 20}px))` }}
          >
            {slides.map(({ label, title, titleGradient, description, tags, tagColor, cta, Panel }, i) => (
              <div className="solutions__slide" key={i} aria-hidden={i !== active}>
                <div className="solutions__card">
                  <div className="solutions__left">
                    <p className="solutions__slide-label">{label}</p>
                    <h3 className="solutions__slide-title" style={{ backgroundImage: titleGradient }}>
                      {title}
                    </h3>
                    <p className="solutions__slide-desc">{description}</p>
                    <ul className="solutions__tags">
                      {tags.map(tag => (
                        <li key={tag} className="solutions__tag" style={{ background: tagColor.bg, border: `1px solid ${tagColor.border}`, color: tagColor.text }}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <a href="#final-cta" className="solutions__cta">{cta}</a>
                  </div>
                  <div className="solutions__right">
                    <Panel />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="solutions__nav">
          <div className="solutions__dots" role="tablist">
            {slides.map((s, i) => (
              <button
                key={i} role="tab" aria-selected={i === active}
                className={`solutions__dot${i === active ? ' solutions__dot--active' : ''}`}
                style={i === active ? { backgroundImage: s.titleGradient } : {}}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
