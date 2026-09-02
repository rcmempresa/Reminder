import { useNavigate } from 'react-router-dom'

const revenueGroups = [
  {
    icon: '📩',
    title: 'Lead Recovery System',
    sub: 'Pedidos que entram e ficam sem resposta ou acompanhamento.',
    items: [
      'Centralização de pedidos de todos os canais',
      'Processo de primeira resposta e qualificação',
      'Alertas e acompanhamento de oportunidades paradas',
    ],
  },
  {
    icon: '📄',
    title: 'Quote Conversion System',
    sub: 'Orçamentos enviados sem processo de acompanhamento.',
    items: [
      'Tracking de orçamentos enviados e estado de cada um',
      'Cadências de follow-up automáticas configuradas pela empresa',
      'Registo de motivos de perda para otimização futura',
    ],
  },
  {
    icon: '🔄',
    title: 'Customer Reactivation System',
    sub: 'Clientes antigos que nunca voltam a ser contactados.',
    items: [
      'Segmentação da base de clientes existente',
      'Campanhas de reativação para clientes inativos',
      'Recuperação de oportunidades antigas esquecidas',
    ],
  },
  {
    icon: '🛡',
    title: 'Maintenance Retention System',
    sub: 'Equipamentos instalados sem manutenção agendada.',
    items: [
      'Processo de acompanhamento pós-instalação',
      'Lembretes automáticos de manutenção e revisão',
      'Ciclos de renovação para contratos de manutenção',
    ],
  },
]

const opsGroups = [
  {
    icon: '📋',
    title: 'Work Order Automation',
    sub: 'Ordens de trabalho criadas manualmente ou perdidas.',
    items: [
      'Criação automática de OT a partir do pedido',
      'Atribuição, notificações e acompanhamento de estado',
      'Menos trabalho administrativo para a equipa interna',
    ],
  },
  {
    icon: '🔧',
    title: 'Field Operations System',
    sub: 'Técnicos sem processo estruturado no terreno.',
    items: [
      'Registo de materiais utilizados e tempo de execução',
      'Assinatura do cliente no campo',
      'Informação chega ao escritório sem depender de memória',
    ],
  },
  {
    icon: '🧾',
    title: 'Invoicing Recovery System',
    sub: 'Trabalhos concluídos que ficam por faturar.',
    items: [
      'Alerta automático após conclusão do trabalho',
      'Processo de validação e aprovação para faturação',
      'Menos trabalhos esquecidos entre a conclusão e a fatura',
    ],
  },
  {
    icon: '💸',
    title: 'Payment Follow-Up System',
    sub: 'Faturas emitidas que ficam por pagar.',
    items: [
      'Controlo e monitorização de faturas em aberto',
      'Lembretes e follow-up automáticos por prazo',
      'Escalamento de alertas internos para casos prioritários',
    ],
  },
  {
    icon: '🤖',
    title: 'AI Admin Layer',
    sub: 'Trabalho administrativo repetitivo que pode ser eliminado.',
    items: [
      'Resumo e extração de informação de pedidos e registos',
      'Preparação de emails e relatórios automatizados',
      'Redução do tempo gasto em tarefas manuais evitáveis',
    ],
  },
]

export default function RValueStack() {
  const navigate = useNavigate()
  return (
    <section className="rvalue" id="o-que-inclui">
      <div className="r-container">
        <div className="rvalue__top">
          <p className="r-label r-label--white anim">Os Sistemas</p>
          <h2 className="r-h2 r-h2--white anim anim--d1">
            9 sistemas.<br />O maior gargalo primeiro.
          </h2>
          <p className="r-body r-body--white anim anim--d2">
            A Auditoria diz onde está a maior perda. Começamos por aí. Os restantes sistemas entram à medida que cada problema é resolvido — sem comprar tudo de uma vez.
          </p>
        </div>

        <p className="r-label r-label--white anim" style={{ marginBottom: '16px', marginTop: '8px' }}>
          💰 Revenue Systems
        </p>
        <div className="rvalue__groups" style={{ marginBottom: '40px' }}>
          {revenueGroups.map((g, i) => (
            <div key={i} className={`rvalue__group anim anim--d${(i % 4) + 1}`}>
              <div className="rvalue__group-icon">{g.icon}</div>
              <p className="rvalue__group-title">{g.title}</p>
              <p className="rvalue__group-sub">{g.sub}</p>
              <ul className="rvalue__items">
                {g.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="r-label r-label--white anim" style={{ marginBottom: '16px' }}>
          ⚙️ Operations Systems
        </p>
        <div className="rvalue__groups" style={{ marginBottom: '48px' }}>
          {opsGroups.map((g, i) => (
            <div key={i} className={`rvalue__group anim anim--d${(i % 4) + 1}`}>
              <div className="rvalue__group-icon">{g.icon}</div>
              <p className="rvalue__group-title">{g.title}</p>
              <p className="rvalue__group-sub">{g.sub}</p>
              <ul className="rvalue__items">
                {g.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rvalue__dfy anim">
          <div>
            <p className="rvalue__dfy-text">Implementação a partir de €1.500 · Gestão mensal a partir de €500/mês</p>
            <p className="rvalue__dfy-sub">O valor final depende da complexidade do processo e das integrações necessárias. O primeiro passo é sempre a Auditoria gratuita — para perceber qual o sistema que cria mais impacto para o seu negócio.</p>
          </div>
          <button className="r-btn r-btn--primary r-btn--lg" onClick={() => navigate('/diagnostico')}>
            Fazer a Auditoria Gratuita →
          </button>
        </div>
      </div>
    </section>
  )
}
