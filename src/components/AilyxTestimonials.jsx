import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function formatEuro(n) {
  if (!n || isNaN(n)) return '—'
  return '€' + Math.round(n).toLocaleString('pt-PT')
}

export default function AilyxTestimonials() {
  const [pedidos, setPedidos] = useState('')
  const [percentagem, setPercentagem] = useState('')
  const [valor, setValor] = useState('')
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const resultRef = useRef(null)

  const p = parseFloat(pedidos)
  const pct = parseFloat(percentagem)
  const v = parseFloat(valor)
  const perdidas = (!isNaN(p) && !isNaN(pct)) ? Math.round(p * (pct / 100)) : null
  const total = (!isNaN(p) && !isNaN(pct) && !isNaN(v)) ? p * (pct / 100) * v : null
  const hasResult = total !== null && total > 0

  useEffect(() => {
    if (!resultRef.current || !hasResult) return
    gsap.fromTo(resultRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    )
  }, [hasResult, total])

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="ayl-section" id="resultados" ref={sectionRef} style={{ background: '#F3F6FB', borderTop: '1px solid #e8edf5' }}>
      <div className="ayl-container">
        <div className="ayl-section-label" style={{ textAlign: 'center' }}>Leak Estimator</div>
        <h2 className="ayl-h2" style={{ marginBottom: '12px', textAlign: 'center' }}>
          Quanto pode estar a escapar?
        </h2>
        <p style={{ color: '#555', fontSize: '17px', maxWidth: '520px', lineHeight: 1.6, margin: '0 auto 16px', textAlign: 'center' }}>
          Introduza os seus números. Este cálculo cobre apenas um dos pontos de fuga — pedidos sem resposta ou follow-up. A Auditoria encontra todos.
        </p>

        <div ref={cardRef} style={{
          maxWidth: '640px', margin: '0 auto',
          background: 'white', border: '1.5px solid #e8edf5',
          borderRadius: '24px', padding: 'clamp(28px, 5vw, 48px)',
          boxShadow: '0 4px 32px rgba(33,127,241,0.07)',
        }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#111', fontFamily: 'Sora, sans-serif' }}>
                Pedidos recebidos por mês
              </span>
              <input
                type="number"
                min="0"
                placeholder="ex: 40"
                value={pedidos}
                onChange={e => setPedidos(e.target.value)}
                style={{
                  width: '100%', padding: '14px 16px', fontSize: '17px',
                  border: '1.5px solid #dde3ee', borderRadius: '12px',
                  fontFamily: 'Sora, sans-serif', color: '#111', outline: 'none',
                  boxSizing: 'border-box', background: '#FAFBFD',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = '#217FF1'}
                onBlur={e => e.target.style.borderColor = '#dde3ee'}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#111', fontFamily: 'Sora, sans-serif' }}>
                % estimada que não recebe follow-up adequado
              </span>
              <div style={{ position: 'relative' }}>
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="ex: 30"
                  value={percentagem}
                  onChange={e => setPercentagem(e.target.value)}
                  style={{
                    width: '100%', padding: '14px 16px', fontSize: '17px',
                    border: '1.5px solid #dde3ee', borderRadius: '12px',
                    fontFamily: 'Sora, sans-serif', color: '#111', outline: 'none',
                    boxSizing: 'border-box', background: '#FAFBFD',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = '#217FF1'}
                  onBlur={e => e.target.style.borderColor = '#dde3ee'}
                />
                <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '16px', pointerEvents: 'none' }}>%</span>
              </div>
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#111', fontFamily: 'Sora, sans-serif' }}>
                Valor médio de uma venda
              </span>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#217FF1', fontSize: '17px', fontWeight: 600, pointerEvents: 'none' }}>€</span>
                <input
                  type="number"
                  min="0"
                  placeholder="ex: 1200"
                  value={valor}
                  onChange={e => setValor(e.target.value)}
                  style={{
                    width: '100%', padding: '14px 16px 14px 30px', fontSize: '17px',
                    border: '1.5px solid #dde3ee', borderRadius: '12px',
                    fontFamily: 'Sora, sans-serif', color: '#111', outline: 'none',
                    boxSizing: 'border-box', background: '#FAFBFD',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = '#217FF1'}
                  onBlur={e => e.target.style.borderColor = '#dde3ee'}
                />
              </div>
            </label>

          </div>

          <div style={{
            marginTop: '28px', padding: '24px',
            background: hasResult ? 'rgba(33,127,241,0.06)' : '#F8FAFC',
            border: `1.5px solid ${hasResult ? 'rgba(33,127,241,0.2)' : '#eee'}`,
            borderRadius: '16px', transition: 'all 0.3s ease',
          }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#217FF1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Potencial em fuga — só neste ponto
            </div>
            {hasResult ? (
              <div ref={resultRef}>
                <div style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 800, color: '#111', fontFamily: 'Sora, sans-serif', lineHeight: 1 }}>
                  {formatEuro(total)}
                </div>
                <div style={{ fontSize: '14px', color: '#666', marginTop: '6px' }}>
                  {perdidas} oportunidade{perdidas !== 1 ? 's' : ''} por mês, apenas neste ponto do processo
                </div>
                <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div style={{ background: '#F3F6FB', borderRadius: '10px', padding: '12px 14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Ao ano</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#217FF1', fontFamily: 'Sora, sans-serif' }}>{formatEuro(total * 12)}</div>
                  </div>
                  <div style={{ background: '#F3F6FB', borderRadius: '10px', padding: '12px 14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Em 3 anos</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#111', fontFamily: 'Sora, sans-serif' }}>{formatEuro(total * 36)}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#ccc', fontFamily: 'Sora, sans-serif' }}>€—</div>
            )}
          </div>

          {hasResult && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <a href="/diagnostico" className="ayl-btn ayl-btn--primary" style={{ display: 'inline-block' }}>
                Mapear todos os pontos de fuga — grátis →
              </a>
            </div>
          )}

          <p style={{ fontSize: '12px', color: '#bbb', textAlign: 'center', marginTop: '20px', lineHeight: 1.5 }}>
            Estimativa com base nos dados inseridos. Este cálculo cobre apenas um ponto de fuga. A Auditoria analisa o processo completo Da Pedido ao Pagamento.
          </p>
        </div>
      </div>
    </section>
  )
}
