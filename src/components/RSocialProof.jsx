import { useNavigate } from 'react-router-dom'

export default function RSocialProof() {
  const navigate = useNavigate()
  return (
    <section className="rproof">
      <div className="r-container">
        <div className="rproof__top">
          <p className="r-label anim">Casos de Estudo</p>
          <h2 className="r-h2 anim anim--d1">
            Resultados reais,<br />em preparação.
          </h2>
          <p className="r-body anim anim--d2">
            Estamos a implementar os primeiros sistemas Revenue & Operations com empresas AVAC. Os casos de estudo — com resultados reais antes e depois — serão publicados aqui assim que disponíveis.
          </p>
        </div>

        <div className="rproof__grid">
          {[
            { label: 'Revenue System', desc: 'Lead Recovery + Quote Conversion. Empresa AVAC comercial, Lisboa.' },
            { label: 'Operations System', desc: 'Field Operations + Invoicing Recovery. Empresa AVAC residencial, Porto.' },
            { label: 'Revenue + Ops', desc: 'Auditoria completa. Sistema completo Do Pedido ao Pagamento. Em implementação.' },
          ].map((n, i) => (
            <div key={i} className="rproof__card anim anim--d1">
              <div className="rproof__placeholder">
                <span className="rproof__placeholder-icon">📋</span>
                <span className="rproof__placeholder-label">{n.label} — Em Preparação</span>
                <span style={{ fontSize: '13px', color: '#9CA3AF', textAlign: 'center', lineHeight: '1.5' }}>
                  {n.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="rproof__early anim">
          <p className="rproof__early-title">
            Quer ser um dos primeiros casos de estudo?
          </p>
          <p className="rproof__early-sub">
            Estamos a selecionar empresas AVAC para implementação inicial dos sistemas Revenue & Operations.
            A Auditoria Do Pedido ao Pagamento é gratuita — e se não encontrarmos uma oportunidade clara de melhoria, dizemos-lhe honestamente.
          </p>
          <button className="r-btn r-btn--primary r-btn--lg" onClick={() => navigate('/diagnostico')}>
            Fazer a Auditoria Gratuita →
          </button>
        </div>
      </div>
    </section>
  )
}
