import { useNavigate } from 'react-router-dom'

export default function RFinalCta() {
  const navigate = useNavigate()
  return (
    <section className="rfinalcta">
      <div className="r-container rfinalcta__inner">
        <p className="r-label r-label--white anim" style={{ marginBottom: '20px' }}>
          Business Leak Audit™ — Gratuita
        </p>
        <h2 className="rfinalcta__headline anim anim--d1">
          A Auditoria é gratuita.<br />O custo de não a fazer,<br /><em>não é.</em>
        </h2>
        <p className="rfinalcta__sub anim anim--d2">
          Em 60–90 minutos mapeamos o processo completo Do Pedido ao Pagamento.
          Revenue e Operations. Identificamos os gargalos, a prioridade e o que fazer a seguir.
          Se não houver nada a melhorar, dizemos-lhe honestamente.
        </p>
        <div className="rfinalcta__actions anim anim--d3">
          <button className="r-btn r-btn--white r-btn--xl" onClick={() => navigate('/diagnostico')}>
            Fazer a Auditoria Gratuita →
          </button>
        </div>
        <div className="rfinalcta__trust anim anim--d4">
          <span className="rfinalcta__trust-item">Gratuito</span>
          <span className="rfinalcta__trust-item">60–90 minutos</span>
          <span className="rfinalcta__trust-item">Sem compromisso</span>
          <span className="rfinalcta__trust-item">Revenue + Operations</span>
          <span className="rfinalcta__trust-item">Análise honesta</span>
        </div>
      </div>
    </section>
  )
}
