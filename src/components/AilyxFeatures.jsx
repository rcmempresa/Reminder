import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const LEAKS = [
  {
    num: '01',
    title: 'Pedidos sem resposta a tempo',
    desc: 'Chegam ao WhatsApp, email ou Instagram. Quando a equipa está em obra, alguns ficam sem resposta e sem responsável.',
    highlight: false,
  },
  {
    num: '02',
    title: 'Propostas enviadas e esquecidas',
    desc: 'O orçamento foi enviado. O cliente ficou em silêncio. E ninguém voltou a contactar — este padrão repete-se todos os meses.',
    highlight: true,
  },
  {
    num: '03',
    title: 'Obras concluídas sem faturação imediata',
    desc: 'O trabalho foi feito mas a informação não chega a quem fatura — e o dinheiro espera dias ou semanas pelo documento.',
    highlight: false,
  },
  {
    num: '04',
    title: 'Faturas em atraso sem acompanhamento',
    desc: 'A data de vencimento passou. Não existe um processo consistente para cobrar — e o cliente não tem urgência.',
    highlight: false,
  },
  {
    num: '05',
    title: 'Clientes antigos que nunca voltam a receber contacto',
    desc: 'Centenas de clientes já servidos. Zero processo de reativação. A concorrência aproveita esse silêncio.',
    highlight: false,
  },
]

const SCATTER = [
  { x: -140, y: 90,  rotation: -8,  scale: 0.85 },
  { x: 140,  y: 90,  rotation: 8,   scale: 0.85 },
  { x: -140, y: -90, rotation: 6,   scale: 0.85 },
  { x: 140,  y: -90, rotation: -6,  scale: 0.85 },
  { x: 0,    y: 120, rotation: 0,   scale: 0.82 },
]

export default function AilyxFeatures() {
  const gridRef = useRef(null)
  const cardRefs = useRef([])
  const rightRef = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    const cards = cardRefs.current.filter(Boolean)
    if (!cards.length) return

    if (isMobile) {
      gsap.set(cards, { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 })
      return
    }

    cards.forEach((card, i) => {
      const s = SCATTER[i]
      gsap.set(card, { x: s.x, y: s.y, rotation: s.rotation, scale: s.scale, opacity: 0 })
    })

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.to(cards, {
            x: 0, y: 0, rotation: 0, scale: 1, opacity: 1,
            duration: 0.9, ease: 'power3.out',
            stagger: { amount: 0.22, from: 'center' },
          })
        },
        once: true,
      })

      gsap.from(rightRef.current, {
        x: 80, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: rightRef.current, start: 'top 75%', once: true },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="ayl-section ayl-section--alt" id="features">
      <div className="ayl-container">

        <div className="ayl-features__layout">
          <div className="ayl-features__left">
            <div className="ayl-section-label">Exemplos do que resolvemos</div>
            <h2 className="ayl-h2 ayl-features__heading">
              Qual é o principal problema da sua empresa?
            </h2>
            <p style={{ color: '#555', fontSize: '17px', lineHeight: 1.7, maxWidth: '500px', marginBottom: '28px' }}>
              Cada empresa tem um bloqueio diferente. A Auditoria identifica o seu — e mostra qual resolver primeiro para ter maior impacto imediato.
            </p>
            <a href="/diagnostico" className="ayl-btn ayl-btn--primary ayl-features__cta">
              Fazer a Auditoria Gratuita →
            </a>

            <div style={{ marginTop: '36px', marginBottom: '12px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#aaa' }}>
                Problemas que tipicamente encontramos:
              </p>
            </div>

            <div className="ayl-features__grid" ref={gridRef}>
              {LEAKS.map((leak, i) => (
                <div
                  key={leak.num}
                  className={`ayl-feature-card${leak.highlight ? ' ayl-feature-card--highlight' : ''}`}
                  ref={el => cardRefs.current[i] = el}
                >
                  <div className="ayl-feature-card__icon" style={{ color: leak.highlight ? '#217FF1' : '#bbb' }}>
                    <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px' }}>{leak.num}</span>
                  </div>
                  <div className="ayl-feature-card__body">
                    <h3 className="ayl-h3">{leak.title}</h3>
                    <p className="ayl-feature-card__desc">{leak.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ayl-features__right" ref={rightRef}>
            <div style={{
              width: '100%',
              maxWidth: '460px',
              background: 'white',
              border: '1.5px solid #e8edf5',
              borderRadius: '20px',
              padding: '36px 32px',
              boxShadow: '0 4px 24px rgba(33,127,241,0.06)',
            }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#217FF1', marginBottom: '8px' }}>
                Cada empresa é diferente
              </p>
              <p style={{ fontSize: '14px', color: '#888', marginBottom: '24px', lineHeight: 1.5 }}>
                Não sabemos qual é o seu maior bloqueio antes de analisar. Mas sabemos o que encontramos com mais frequência nas empresas AVAC:
              </p>

              {[
                { icon: '📩', title: 'Pedidos que não são respondidos a tempo', desc: 'Canais não monitorizados, equipa em obra, mensagens em fila — as oportunidades evaporam.' },
                { icon: '📄', title: 'Propostas sem follow-up após envio', desc: 'O silêncio do cliente é interpretado como desinteresse. Mas muitas vezes é só falta de insistência.' },
                { icon: '🏗️', title: 'Obras concluídas com faturação atrasada', desc: 'A informação não flui entre equipa de campo e quem fatura — os dias acumulam-se.' },
                { icon: '💳', title: 'Faturas em atraso sem processo de cobrança', desc: 'Desconforto em pedir o dinheiro. Sem processo consistente, o cliente não tem urgência.' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '14px', marginBottom: i < 3 ? '20px' : '0',
                  paddingBottom: i < 3 ? '20px' : '0',
                  borderBottom: i < 3 ? '1px solid #f0f2f8' : 'none',
                }}>
                  <span style={{ fontSize: '20px', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', color: '#111', marginBottom: '4px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.5 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: '24px',
                padding: '16px',
                background: '#EEF4FF',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '10px',
                  background: 'linear-gradient(135deg, #08224e 0%, #217FF1 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', color: '#111' }}>
                    A Auditoria identifica o bloqueio específico da sua empresa.
                  </div>
                  <div style={{ fontSize: '12px', color: '#217FF1', marginTop: '2px' }}>
                    Gratuita · 60–90 minutos · Sem compromisso
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
