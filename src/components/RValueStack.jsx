import { useNavigate } from 'react-router-dom'

const categories = [
  {
    icon: '💰',
    title: 'Vendas',
    items: ['Novos leads', 'Qualificação', 'Follow-up', 'Propostas', 'Reativação de clientes'],
  },
  {
    icon: '🤝',
    title: 'Clientes',
    items: ['Pedidos', 'Marcações', 'Confirmações', 'Acompanhamento', 'Recuperação'],
  },
  {
    icon: '⚙️',
    title: 'Operações',
    items: ['Passagem de informação', 'Ordens de trabalho', 'Notificações', 'Coordenação de equipa'],
  },
  {
    icon: '📋',
    title: 'Administração',
    items: ['Emails', 'Documentos', 'Faturação', 'Relatórios', 'Introdução de dados'],
  },
]

export default function RValueStack() {
  const navigate = useNavigate()
  return (
    <section className="rvalue" id="o-que-inclui">
      <div className="r-container">
        <div className="rvalue__top">
          <p className="r-label r-label--white anim">O Que a Remindr Pode Assumir</p>
          <h2 className="r-h2 r-h2--white anim anim--d1">
            Quando algo acontece<br />na sua empresa,<br />a Remindr trata do que vem a seguir.
          </h2>
          <p className="r-body r-body--white anim anim--d2">
            O processo muda de empresa para empresa. A lógica é sempre a mesma: um evento acontece — a Remindr interpreta, decide o que fazer, executa e atualiza os sistemas.
          </p>
        </div>

        <div className="rvalue__categories anim anim--d2">
          {categories.map((cat, i) => (
            <div key={i} className="rvalue__category">
              <div className="rvalue__category-header">
                <span className="rvalue__category-icon">{cat.icon}</span>
                <p className="rvalue__category-title">{cat.title}</p>
              </div>
              <ul className="rvalue__category-items">
                {cat.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rvalue__tese anim">
          <div className="rvalue__tese-flow">
            <span className="rvalue__tese-node rvalue__tese-node--event">Evento</span>
            <span className="rvalue__tese-arrow">→</span>
            <span className="rvalue__tese-node rvalue__tese-node--remindr">Remindr interpreta</span>
            <span className="rvalue__tese-arrow">→</span>
            <span className="rvalue__tese-node rvalue__tese-node--action">Decide e executa</span>
            <span className="rvalue__tese-arrow">→</span>
            <span className="rvalue__tese-node rvalue__tese-node--systems">Atualiza os sistemas</span>
          </div>
          <p className="rvalue__tese-caption">
            O Diagnóstico de Execução descobre quais os fluxos que vale a pena assumir primeiro.
          </p>
        </div>

        <div className="rvalue__dfy anim">
          <div>
            <p className="rvalue__dfy-text">Implementação a partir de €1.500 · Gestão mensal a partir de €500/mês</p>
            <p className="rvalue__dfy-sub">O valor final depende da complexidade do processo e das integrações necessárias. O primeiro passo é sempre o Diagnóstico gratuito — para perceber qual o fluxo que cria mais impacto imediato.</p>
          </div>
          <button className="r-btn r-btn--primary r-btn--lg" onClick={() => navigate('/diagnostico')}>
            Fazer o Diagnóstico Gratuito →
          </button>
        </div>
      </div>
    </section>
  )
}
