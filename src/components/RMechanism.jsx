const phases = [
  {
    num: '01',
    title: 'Diagnóstico de Execução',
    desc: 'Em 60 minutos, descobrimos quais os processos que a Remindr pode assumir primeiro. Analisamos os eventos que geram trabalho manual recorrente, identificamos onde existe perda de receita, tempo e capacidade — e calculamos quais os fluxos com maior impacto.',
    active: true,
  },
  {
    num: '02',
    title: 'Implementação do Primeiro Sistema',
    desc: 'Identificamos o maior gargalo. Desenhamos o novo processo. Construímos e colocamos em funcionamento o sistema — integrações, automações, alertas. A sua equipa não configura nada. O prazo depende da complexidade e integrações necessárias.',
    active: false,
  },
  {
    num: '03',
    title: 'Gestão Contínua e Expansão',
    desc: 'Após o lançamento, continuamos responsáveis pela manutenção, otimização e melhoria. À medida que o primeiro sistema está estável, identificamos o próximo evento a assumir — e expandimos sem forçar nada antes de estar pronto.',
    active: true,
  },
]

const auditDimensions = [
  {
    side: '💰 Revenue',
    items: ['Todos os pedidos recebem resposta?', 'Os orçamentos recebem follow-up?', 'Existem oportunidades perdidas sem motivo registado?', 'Clientes antigos são recontactados?'],
  },
  {
    side: '⚙️ Operations',
    items: ['Como é criada a ordem de trabalho?', 'O técnico regista material e tempo?', 'O cliente assina no campo?', 'Quanto tempo demora até à faturação após o trabalho?'],
  },
]

export default function RMechanism() {
  return (
    <section className="rmech" id="como-funciona">
      <div className="r-container">
        <div className="rmech__top">
          <p className="r-label anim">Como Funciona</p>
          <h2 className="r-h2 anim anim--d1">
            Não começamos pela tecnologia.<br />Começamos pelo que acontece<br />na sua empresa.
          </h2>
          <p className="r-body anim anim--d2">
            Identificamos os eventos que geram trabalho manual, percebemos o que precisa de acontecer a seguir — e construímos o sistema que executa esse processo.
          </p>
        </div>

        <div className="rmech__flow anim anim--d2">
          {phases.map((phase, i) => (
            <div key={i} className="rmech__step">
              <div className="rmech__step-left">
                <div className={`rmech__step-num${phase.active ? ' rmech__step-num--active' : ''}`}>
                  {phase.num}
                </div>
                {i < phases.length - 1 && <div className="rmech__connector" />}
              </div>
              <div className="rmech__step-content">
                <p className="rmech__step-title">{phase.title}</p>
                <p className="rmech__step-desc">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rmech__channels anim" style={{ flexDirection: 'column', gap: '20px', alignItems: 'stretch', padding: '28px 32px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
          <p style={{ textAlign: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontWeight: '600', marginBottom: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            O que analisamos na Auditoria
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {auditDimensions.map((dim, i) => (
              <div key={i}>
                <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--blue)', marginBottom: '10px' }}>{dim.side}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {dim.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.48)', lineHeight: 1.5 }}>→ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
