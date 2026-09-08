import { useNavigate } from 'react-router-dom'

const flowSteps = [
  'Analisa o pedido',
  'Recolhe informação',
  'Atualiza o CRM',
  'Avisa o responsável',
  'Inicia o follow-up',
]

export default function RHero() {
  const navigate = useNavigate()
  const goToAudit = () => navigate('/diagnostico')

  return (
    <section className="rhero">
      <div className="rhero__inner">
        <div className="rhero__label anim">
          <span className="r-badge r-badge--dark">DIAGNÓSTICO DE EXECUÇÃO</span>
        </div>

        <h1 className="r-h1 rhero__headline anim anim--d1">
          Faça mais com a equipa que já tem.
        </h1>

        <p className="rhero__sub anim anim--d2">
          A Remindr transforma eventos da sua empresa em ações executadas automaticamente — desde novos leads e orçamentos até follow-ups, tarefas e processos administrativos.
        </p>

        <div className="rhero__actions anim anim--d3">
          <button className="r-btn r-btn--primary r-btn--xl" onClick={goToAudit}>
            Descobrir onde podemos criar impacto →
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
          Diagnóstico gratuito · 60 min · Sem compromisso
        </p>

        <div className="rhero__flow-panel anim anim--d5">
          <div className="rhero__flow-event">
            <span className="rhero__flow-tag">NOVO EVENTO</span>
            <p className="rhero__flow-trigger">Novo pedido de orçamento</p>
          </div>
          <div className="rhero__flow-arrow">↓</div>
          <div className="rhero__flow-engine">
            <span className="rhero__flow-brand">REMINDR</span>
          </div>
          <div className="rhero__flow-arrow">↓</div>
          <div className="rhero__flow-steps">
            {flowSteps.map((step, i) => (
              <div key={i} className="rhero__flow-step">
                <span className="rhero__flow-check">✓</span>
                {step}
              </div>
            ))}
          </div>
          <p className="rhero__flow-caption">O trabalho acontece. Sem alguém ter de o perseguir.</p>
        </div>
      </div>
    </section>
  )
}
