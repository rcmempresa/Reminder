import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DELIVERY_STACK = [
  { num: '01', label: 'Estratégia',          desc: 'Definimos o objetivo, o processo e o critério de sucesso.' },
  { num: '02', label: 'Redesenho',           desc: 'Simplificamos o processo antes de o automatizar.' },
  { num: '03', label: 'Arquitetura',         desc: 'Desenhamos a solução — agentes, fluxos e integrações.' },
  { num: '04', label: 'Desenvolvimento',     desc: 'Construímos os fluxos, agentes e sistemas de IA.' },
  { num: '05', label: 'Integração',          desc: 'Ligamos às ferramentas que a empresa já utiliza.' },
  { num: '06', label: 'Testes',              desc: 'Testamos exaustivamente antes de ir a produção.' },
  { num: '07', label: 'Lançamento',          desc: 'Colocamos o sistema em produção de forma controlada.' },
  { num: '08', label: 'Formação',            desc: 'Preparamos a equipa para o dia-a-dia com o sistema.' },
  { num: '09', label: 'Documentação',        desc: 'Documentamos o sistema para referência futura.' },
  { num: '10', label: 'Otimização',          desc: 'Monitorizamos resultados e melhoramos continuamente.' },
]

export default function AilyxBuild() {
  const bridgeRef = useRef(null)
  const stackRef  = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(bridgeRef.current.children, {
        y: 36, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: bridgeRef.current, start: 'top 75%', once: true },
      })
      gsap.from(stackRef.current.children, {
        y: 24, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06,
        scrollTrigger: { trigger: stackRef.current, start: 'top 78%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Bridge — transition from Audit to Build */}
      <section style={{ background: '#fff', padding: 'clamp(80px, 10vw, 120px) 0', borderTop: '1px solid #e8edf5' }}>
        <div className="ayl-container">
          <div ref={bridgeRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
            <div>
              <div className="ayl-section-label" style={{ marginBottom: '20px' }}>Do diagnóstico ao sistema</div>
              <h2 className="ayl-h2" style={{ marginBottom: '20px' }}>
                Saber onde está o problema<br />é o início. Resolvê-lo é o trabalho.
              </h2>
              <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.7, marginBottom: '24px' }}>
                A maioria das empresas sabe que tem ineficiências. O que não têm é o tempo ou equipa para as resolver. É exatamente aí que entramos.
              </p>
              <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.65 }}>
                Tratamos de tudo — do desenho à integração, testes e lançamento. A sua equipa não toca em nada técnico.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { step: 'Diagnóstico', desc: 'Identificamos a oportunidade com maior impacto.', done: true },
                { step: 'Design', desc: 'Desenhamos a solução e apresentamos o blueprint.', done: false },
                { step: 'Build', desc: 'Construímos e integramos o sistema de IA.', done: false },
                { step: 'Launch', desc: 'Colocamos em produção com a equipa.', done: false },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '16px',
                  padding: '16px 20px',
                  background: item.done ? '#EEF4FF' : '#F8FAFF',
                  border: `1.5px solid ${item.done ? 'rgba(33,127,241,0.25)' : '#e8edf5'}`,
                  borderRadius: '14px',
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    background: item.done ? '#217FF1' : '#e8edf5',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {item.done ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ccc' }} />
                    )}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', color: item.done ? '#217FF1' : '#111', marginBottom: '3px' }}>{item.step}</div>
                    <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Growth System — Build section */}
      <section style={{
        background: 'linear-gradient(135deg, #08224e 0%, #0e3a9c 55%, #1a5dc8 100%)',
        padding: 'clamp(80px, 10vw, 120px) 0',
      }} id="build">
        <div className="ayl-container">

          <div style={{ marginBottom: '56px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '100px', padding: '6px 18px', marginBottom: '20px',
            }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#c8e8ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>IMPLEMENTAÇÃO</span>
            </div>
            <h2 style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 600,
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              color: 'white', lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '16px',
            }}>
              Transformamos a oportunidade<br />num sistema funcional.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.65, maxWidth: '520px' }}>
              Do desenho do processo à integração, testes e lançamento — nós tratamos de tudo. A sua equipa não toca em nada técnico.
            </p>
          </div>

          <div ref={stackRef} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '8px',
          }}>
            {DELIVERY_STACK.map((item, i) => (
              <div key={item.num} style={{
                background: i === 3 ? 'rgba(33,127,241,0.25)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${i === 3 ? 'rgba(144,200,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '14px',
                padding: '18px 16px',
              }}>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '10px', letterSpacing: '0.1em', color: i === 3 ? '#90c8ff' : 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>
                  {item.num}
                </div>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '12px', color: 'white', marginBottom: '6px' }}>
                  {item.label}
                </div>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
