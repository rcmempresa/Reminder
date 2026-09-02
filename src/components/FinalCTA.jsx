const TOTAL_SLOTS = 3
const FILLED_SLOTS = 2  // change this manually each month

const HOW = [
  'Preenche o formulário (2 min) → recebe resposta em 24h úteis → chamada de 15 min (telefone ou Zoom).',
  'Calculamos a receita perdida com os dados reais da sua clínica e apresentamos o ROI projetado.',
  'Se o ROI justificar, implementamos o Sistema em 4–6 semanas. A clínica não para.',
]

const TRUST = [
  { icon: '🔒', label: 'RGPD Compliant' },
  { icon: '🏥', label: 'Só clínicas privadas' },
  { icon: '🇵🇹', label: 'Equipa em Portugal' },
]

export default function FinalCTA() {
  return (
    <section className="finalcta" id="final-cta">
      <div className="container">
        <div className="finalcta__inner anim">

          {/* Slots indicator */}
          <div className="finalcta__slots-wrap">
            <div className="finalcta__slots">
              {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
                <div
                  key={i}
                  className={`finalcta__slot${i < FILLED_SLOTS ? ' finalcta__slot--taken' : ' finalcta__slot--open'}`}
                >
                  {i < FILLED_SLOTS ? (
                    <span className="finalcta__slot-icon">✓</span>
                  ) : (
                    <span className="finalcta__slot-pulse" />
                  )}
                </div>
              ))}
            </div>
            <p className="finalcta__slots-label">
              Implementamos no máximo 3 clínicas/mês para garantir qualidade.{' '}
              <strong style={{ color: '#4ADE80' }}>
                {TOTAL_SLOTS - FILLED_SLOTS} vaga{TOTAL_SLOTS - FILLED_SLOTS !== 1 ? 's' : ''} disponível em Agosto.
              </strong>
            </p>
          </div>

          <h2>
            Descubra quanto perde —<br />e o que pode recuperar.
          </h2>

          <p className="finalcta__sub">
            Gratuito. 15 minutos. Sem compromisso.<br />
            Um número em euros antes de qualquer decisão.
          </p>

          {/* Como funciona */}
          <div className="finalcta__how">
            <p className="finalcta__how-label">Como funciona</p>
            {HOW.map((text, i) => (
              <div key={i} className="finalcta__how-step">
                <span className="finalcta__how-num">{i + 1}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <a href="#final-cta" className="btn btn--primary btn--xl finalcta__btn btn--pulse">
            Marcar o Diagnóstico Gratuito →
          </a>

          {/* Money-back guarantee */}
          <div className="finalcta__guarantee">
            <div className="finalcta__guarantee-shield">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <div>
              <p className="finalcta__guarantee-title">Garantia de Resultados — 60 dias</p>
              <p className="finalcta__guarantee-text">
                Se em 60 dias o sistema não reduzir as faltas da sua clínica em pelo menos{' '}
                <strong>30%</strong>, devolvemos o investimento na íntegra — sem perguntas,
                sem burocracia. O risco é inteiramente nosso.
              </p>
            </div>
          </div>

          {/* Trust seals */}
          <div className="finalcta__trust">
            {TRUST.map(t => (
              <div key={t.label} className="finalcta__trust-item">
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </div>
            ))}
          </div>

          <p className="finalcta__fine">
            Para donos e diretores de clínicas privadas &nbsp;·&nbsp; resposta em 24h úteis
          </p>

        </div>
      </div>
    </section>
  )
}
