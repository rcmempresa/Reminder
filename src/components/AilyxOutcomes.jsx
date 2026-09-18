import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BEFORE = [
  'Alguém tem de se lembrar',
  'Email manual',
  'Copiar e colar',
  'CRM desatualizado',
  'Follow-up esquecido',
  'Relatório demorado',
  'Depende de uma pessoa',
]

const AFTER = [
  'Acontece automaticamente',
  'Enviado no momento certo',
  'Processado sem intervenção',
  'Atualizado em tempo real',
  'Acompanhamento garantido',
  'Gerado instantaneamente',
  'Funciona sempre',
]

const OUTCOMES = [
  { icon: '📈', label: 'Vendas',      desc: 'Mais capacidade para acompanhar e converter oportunidades.' },
  { icon: '🤝', label: 'Clientes',    desc: 'Atendimento mais rápido, sem sobrecarregar a equipa.' },
  { icon: '⚙️', label: 'Operações',  desc: 'Processos mais rápidos e menos dependentes de intervenção manual.' },
  { icon: '🗂️', label: 'Administração', desc: 'Menos tempo a copiar, inserir e organizar informação.' },
  { icon: '🧠', label: 'Decisão',    desc: 'Mais informação disponível para a equipa decidir melhor e mais rápido.' },
]

const ICONS = {
  Vendas: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  Clientes: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Operações: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
    </svg>
  ),
  Administração: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  Decisão: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
}

export default function AilyxOutcomes() {
  const sectionRef = useRef(null)
  const tableRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(Array.from(tableRef.current.querySelectorAll('.outcomes-row')), {
        opacity: 0, y: 16, duration: 0.5, ease: 'power2.out', stagger: 0.06,
        scrollTrigger: { trigger: tableRef.current, start: 'top 80%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{ background: '#fff', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }}>
      <div className="ayl-container">

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="ayl-section-label" style={{ display: 'inline-block', marginBottom: '16px' }}>O resultado</div>
          <h2 className="ayl-h2" style={{ marginBottom: '12px' }}>
            O que muda quando o sistema<br />está a funcionar.
          </h2>
        </div>

        {/* Comparison table */}
        <div ref={tableRef} style={{ border: '1.5px solid #e8edf5', borderRadius: '20px', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#F8FAFF' }}>
            <div style={{ padding: '12px 20px', borderRight: '1px solid #e8edf5', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f87171', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '12px', color: '#999', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Hoje</span>
            </div>
            <div style={{ padding: '12px 20px', background: '#06142e', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', flexShrink: 0, animation: 'hero-pulse 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '12px', color: '#90c8ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Com o sistema</span>
            </div>
          </div>

          {/* Rows */}
          {BEFORE.map((before, i) => (
            <div key={i} className="outcomes-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid #e8edf5' }}>
              <div style={{ padding: '10px 20px', borderRight: '1px solid #e8edf5', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                <span style={{ fontSize: '14px', color: '#777' }}>{before}</span>
              </div>
              <div style={{ padding: '10px 20px', background: 'rgba(6,20,46,0.03)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#217FF1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span style={{ fontSize: '14px', color: '#0a1c42', fontWeight: 500 }}>{AFTER[i]}</span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
