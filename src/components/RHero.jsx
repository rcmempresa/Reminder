import { useNavigate } from 'react-router-dom'

export default function RHero() {
  const navigate = useNavigate()
  const goToAudit = () => navigate('/diagnostico')

  return (
    <section className="rhero">
      <div className="rhero__inner">
        <div className="rhero__label anim">
          <span className="r-badge r-badge--dark">SISTEMAS DE REVENUE & OPERATIONS PARA AVAC</span>
        </div>

        <h1 className="r-h1 rhero__headline anim anim--d1">
          Do Pedido<br />
          ao Pagamento.<br />
          Sem fugas.
        </h1>

        <p className="rhero__sub anim anim--d2">
          A maioria das empresas AVAC não perde por falta de leads.<br />
          Perde porque entre o pedido e o pagamento existem fugas em cada etapa — e ninguém as fecha.<br />
          Nós fechamos.
        </p>

        <div className="rhero__actions anim anim--d3">
          <button className="r-btn r-btn--primary r-btn--xl" onClick={goToAudit}>
            Fazer a Auditoria Do Pedido ao Pagamento — Grátis
          </button>
          <a
            href="#como-funciona"
            className="r-btn r-btn--ghost r-btn--lg"
            onClick={e => { e.preventDefault(); document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Ver Como Funciona
          </a>
        </div>

        <p className="rhero__note anim anim--d4">
          60–90 minutos · Gratuito · Sem compromisso · Para empresas AVAC com processo estabelecido
        </p>

        <div className="rhero__metrics anim anim--d5">
          <div className="rhero__metric">
            <div className="rhero__metric-value"><em>13</em></div>
            <div className="rhero__metric-label">etapas entre o primeiro pedido e o pagamento onde pode existir perda</div>
          </div>
          <div className="rhero__metric">
            <div className="rhero__metric-value"><em>€0</em></div>
            <div className="rhero__metric-label">em novos clientes necessários para recuperar receita que já entra mas se perde</div>
          </div>
          <div className="rhero__metric">
            <div className="rhero__metric-value"><em>60–90 min</em></div>
            <div className="rhero__metric-label">para mapear o processo completo e identificar os principais gargalos</div>
          </div>
          <div className="rhero__metric">
            <div className="rhero__metric-value"><em>14 dias</em></div>
            <div className="rhero__metric-label">prazo objetivo para o primeiro sistema em funcionamento</div>
          </div>
        </div>
      </div>
    </section>
  )
}
