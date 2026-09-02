import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CATEGORIES = [
  {
    tag: 'Vendas e Receita',
    color: '#217FF1',
    items: ['Resposta automática a leads', 'Qualificação de leads', 'Follow-up de propostas', 'Geração de propostas', 'Reativação de clientes', 'Inteligência comercial'],
  },
  {
    tag: 'Clientes e Atendimento',
    color: '#0e4dc4',
    items: ['Suporte automático ao cliente', 'Rececionista virtual', 'Gestão de agendamentos', 'Integração de novos clientes', 'Comunicação com clientes'],
  },
  {
    tag: 'Operações Internas',
    color: '#08224e',
    items: ['Automatização de fluxos', 'Agentes de IA internos', 'Processamento de dados', 'Relatórios automáticos', 'Automatização de tarefas'],
  },
  {
    tag: 'Administração',
    color: '#333',
    items: ['Gestão de emails', 'Automatização de CRM', 'Processos de faturação', 'Geração de relatórios', 'Gestão de conhecimento'],
  },
]

export default function AilyxSystemTypes() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current.children, {
        y: 36, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="ayl-section ayl-section--alt" id="systems">
      <div className="ayl-container">

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="ayl-section-label" style={{ display: 'inline-block', marginBottom: '16px' }}>
            O que podemos construir
          </div>
          <h2 className="ayl-h2" style={{ marginBottom: '16px' }}>
            Um sistema para cada problema.
          </h2>
          <p style={{ color: '#666', fontSize: '16px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
            Cada empresa tem problemas diferentes. Por isso não começamos por escolher uma ferramenta — começamos por identificar o processo que está a limitar o negócio.
          </p>
        </div>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {CATEGORIES.map((cat, i) => (
            <div key={i} style={{
              background: 'white',
              border: '1.5px solid #e8edf5',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 2px 16px rgba(33,127,241,0.04)',
            }}>
              <div style={{ padding: '20px 22px', borderBottom: '1px solid #e8edf5', background: '#F8FAFF' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: cat.color }}>
                  {cat.tag}
                </span>
              </div>
              <div style={{ padding: '16px 22px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cat.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: cat.color, opacity: 0.4, flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#444', lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Central message */}
        <div style={{
          maxWidth: '560px',
          margin: '0 auto',
          padding: '32px',
          background: 'linear-gradient(135deg, #08224e 0%, #217FF1 100%)',
          borderRadius: '20px',
          textAlign: 'center',
        }}>
          <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2vw, 24px)', color: 'white', lineHeight: 1.4, letterSpacing: '-0.02em', margin: 0 }}>
            O cliente não compra um chatbot.<br />
            <span style={{ color: '#90c8ff' }}>Compra a solução para o seu problema.</span>
          </p>
        </div>

      </div>
    </section>
  )
}
