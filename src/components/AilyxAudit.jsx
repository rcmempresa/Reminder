import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PRIORITIES = [
  { num: '01', opp: 'Automatizar follow-up de propostas', impact: 'Alto',  roi: '€ +++ ' },
  { num: '02', opp: 'Reativar leads e clientes inativos',  impact: 'Alto',  roi: '€ ++  ' },
  { num: '03', opp: 'Automatizar reporting operacional',   impact: 'Médio', roi: '€ +   ' },
]

export default function AilyxAudit() {
  const leftRef    = useRef(null)
  const rightRef   = useRef(null)
  const headRef    = useRef(null)
  const statsRef   = useRef([])
  const metricsRef = useRef([])

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {

      // Heading clip-path reveal
      gsap.set(headRef.current.children, { clipPath: 'inset(0 0 100% 0)', y: 10 })
      gsap.to(headRef.current.children, {
        clipPath: 'inset(0 0 0% 0)', y: 0,
        duration: 0.85, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: headRef.current, start: 'top 78%', once: true },
      })

      // Left panel slide in
      gsap.from(leftRef.current, {
        x: -48, opacity: 0, duration: 1.0, ease: 'power3.out',
        scrollTrigger: { trigger: leftRef.current, start: 'top 75%', once: true },
      })
      // Left rows stagger
      gsap.from(leftRef.current.querySelectorAll('.audit-row'), {
        x: -20, opacity: 0, duration: 0.6, ease: 'power2.out', stagger: 0.07,
        scrollTrigger: { trigger: leftRef.current, start: 'top 72%', once: true },
      })

      // Right panel slide in
      gsap.from(rightRef.current, {
        x: 48, opacity: 0, duration: 1.0, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: rightRef.current, start: 'top 75%', once: true },
      })

      // Counter animations — stats row (27, 11, 4)
      const statTargets = [27, 11, 4]
      statsRef.current.filter(Boolean).forEach((el, i) => {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: statTargets[i],
          duration: 1.4,
          ease: 'power2.out',
          snap: { val: 1 },
          scrollTrigger: { trigger: el, start: 'top 80%', once: true },
          onUpdate() { el.textContent = Math.round(obj.val) },
        })
      })

      // Counter animations — metrics (€72.000, 1.240)
      if (metricsRef.current[0]) {
        const m0 = { val: 0 }
        gsap.to(m0, {
          val: 72000,
          duration: 1.6,
          ease: 'power2.out',
          snap: { val: 1000 },
          scrollTrigger: { trigger: metricsRef.current[0], start: 'top 80%', once: true },
          onUpdate() {
            metricsRef.current[0].textContent = '€' + (m0.val / 1000).toFixed(0) + '.000'
          },
        })
      }
      if (metricsRef.current[1]) {
        const m1 = { val: 0 }
        gsap.to(m1, {
          val: 1240,
          duration: 1.6,
          ease: 'power2.out',
          snap: { val: 10 },
          scrollTrigger: { trigger: metricsRef.current[1], start: 'top 80%', once: true },
          onUpdate() {
            metricsRef.current[1].textContent = m1.val.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
          },
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{ background: '#F3F6FB', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }} id="audit">
      <div className="ayl-container">

        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#EEF4FF', border: '1px solid rgba(33,127,241,0.2)',
            borderRadius: '100px', padding: '5px 14px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#217FF1', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Diagnóstico de Capacidade
            </span>
          </div>
          <h2 className="ayl-h2" style={{ marginBottom: '12px', color: '#0a1c42' }}>
            Não chegamos e dizemos<br />"vamos automatizar tudo."
          </h2>
          <p style={{ color: '#666', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
            Primeiro descobrimos onde existe maior oportunidade económica. Só depois recomendamos o que implementar.
          </p>
        </div>

        <div className="ayl-audit-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>

          {/* Left — o que analisamos */}
          <div ref={leftRef}>
            <div style={{ background: 'white', border: '1.5px solid #e8edf5', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(33,127,241,0.06)' }}>
              <div style={{ padding: '20px 28px', borderBottom: '1px solid #e8edf5', background: '#EEF4FF' }}>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '12px', color: '#217FF1', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  5 áreas analisadas
                </div>
              </div>
              {[
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#217FF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, label: 'Vendas & Receita', q: 'Quanto dinheiro pode estar a escapar?' },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#217FF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>, label: 'Atendimento', q: 'Quanto tempo em respostas repetitivas?' },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#217FF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>, label: 'Operações internas', q: 'Que trabalho não precisa de ser manual?' },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#217FF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>, label: 'Administração', q: 'Quantas horas em trabalho de baixo valor?' },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#217FF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>, label: 'Ferramentas', q: 'Onde há um humano a fazer a ponte entre sistemas?' },
              ].map((item, i) => (
                <div key={i} className="audit-row" style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  padding: '14px 28px',
                  borderBottom: i < 4 ? '1px solid #f0f2f8' : 'none',
                }}>
                  <span style={{ flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '13px', color: '#333', fontWeight: 600, marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ fontSize: '11px', color: '#999', lineHeight: 1.45, fontStyle: 'italic' }}>{item.q}</div>
                  </div>
                </div>
              ))}
              <div style={{ padding: '20px 28px', borderTop: '1px solid #e8edf5' }}>
                <a href="/diagnostico" className="ayl-btn ayl-btn--primary" style={{ display: 'block', textAlign: 'center', justifyContent: 'center' }}>
                  Marcar diagnóstico gratuito →
                </a>
                <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '12px', color: '#aaa', marginBottom: 0 }}>
                  Gratuito · 60 min · Sem compromisso
                </p>
              </div>
            </div>
          </div>

          {/* Right — o que recebe */}
          <div ref={rightRef} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#111', letterSpacing: '-0.03em', marginBottom: '12px' }}>
                O que recebe no final:
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.65, marginBottom: 0 }}>
                Não uma lista de ideias. Um Revenue & Capacity Map — com as oportunidades priorizadas por ROI e um plano de implementação claro.
              </p>
            </div>

            {/* Revenue & Capacity Map mockup */}
            <div style={{ background: 'white', border: '1.5px solid #e8edf5', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(33,127,241,0.04)' }}>
              <div style={{ padding: '16px 20px', background: '#06102a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '12px', color: '#fff' }}>Revenue & Capacity Map</span>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>Reminder AI</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: '#e8edf5' }}>
                {[
                  { val: '27', label: 'processos analisados' },
                  { val: '11', label: 'oportunidades identificadas' },
                  { val: '4',  label: 'alta prioridade' },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#fff', padding: '16px', textAlign: 'center' }}>
                    <div ref={el => statsRef.current[i] = el} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '28px', color: '#217FF1', letterSpacing: '-0.04em' }}>{s.val}</div>
                    <div style={{ fontSize: '11px', color: '#999', marginTop: '2px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#e8edf5' }}>
                <div style={{ background: '#EEF4FF', padding: '16px 20px' }}>
                  <div style={{ fontSize: '10px', color: '#217FF1', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Receita recuperável</div>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '22px', color: '#0a1c42' }}><span ref={el => metricsRef.current[0] = el}>€72.000</span><span style={{ fontSize: '13px', fontWeight: 500, color: '#999' }}>/ano</span></div>
                </div>
                <div style={{ background: '#EEF4FF', padding: '16px 20px' }}>
                  <div style={{ fontSize: '10px', color: '#217FF1', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Capacidade operacional</div>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '22px', color: '#0a1c42' }}><span ref={el => metricsRef.current[1] = el}>1.240</span><span style={{ fontSize: '13px', fontWeight: 500, color: '#999' }}>h/ano</span></div>
                </div>
              </div>
              <div style={{ padding: '12px 20px', borderTop: '1px solid #e8edf5' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>Primeiras recomendações</div>
                {PRIORITIES.map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '10px 0',
                    borderBottom: i < PRIORITIES.length - 1 ? '1px solid #f0f2f8' : 'none',
                  }}>
                    <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '13px', color: i === 0 ? '#217FF1' : '#ccc', flexShrink: 0 }}>{row.num}</span>
                    <span style={{ fontSize: '13px', color: '#333', fontWeight: 500, flex: 1 }}>{row.opp}</span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: row.impact === 'Alto' ? '#217FF1' : '#aaa', flexShrink: 0 }}>{row.impact}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: '#EEF4FF', borderRadius: '12px', borderLeft: '3px solid #217FF1' }}>
              <p style={{ fontSize: '14px', color: '#0a1c42', lineHeight: 1.6, margin: 0 }}>
                <strong>Não estamos a vender automação.</strong><br />
                Estamos a dizer: "Encontrámos estas oportunidades, estimamos este impacto e recomendamos esta implementação."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
