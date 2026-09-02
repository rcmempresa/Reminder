import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RCalculator() {
  const navigate = useNavigate()
  const [leads, setLeads] = useState(30)
  const [lossRate, setLossRate] = useState(35)
  const [ticketValue, setTicketValue] = useState(2500)

  const lostRevenue = useMemo(() => {
    const lost = (leads * lossRate) / 100
    return Math.round(lost * ticketValue)
  }, [leads, lossRate, ticketValue])

  const fmt = (n) =>
    n.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })

  return (
    <section className="rcalc" id="calculadora">
      <div className="r-container">
        <div className="rcalc__inner">
          <div className="rcalc__copy">
            <p className="r-label anim">Calcule a Fuga</p>
            <h2 className="r-h2 anim anim--d1">
              Faça as contas.<br />Só neste ponto do processo.
            </h2>
            <p className="r-body anim anim--d2">
              Este é apenas um dos pontos de fuga — pedidos sem resposta ou follow-up. O processo completo tem mais. Mas comece aqui.
            </p>

            <div className="rcalc__formula anim anim--d3">
              <div><strong>Pedidos recebidos/mês</strong></div>
              <div className="op">×</div>
              <div><strong>% sem resposta ou acompanhamento</strong></div>
              <div className="op">×</div>
              <div><strong>Valor médio de um contrato</strong></div>
              <div><span className="eq">=</span> <strong>Receita potencialmente recuperável</strong></div>
            </div>
          </div>

          <div className="rcalc__tool anim anim--d2">
            <p className="rcalc__tool-title">Calcule a sua fuga de receita</p>

            <div className="rcalc__fields">
              <div className="rcalc__field">
                <label>Pedidos de orçamento que recebe por mês</label>
                <input
                  type="number"
                  min="1"
                  value={leads}
                  onChange={e => setLeads(Number(e.target.value))}
                />
              </div>
              <div className="rcalc__field">
                <label>% estimada de pedidos sem acompanhamento adequado</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={lossRate}
                  onChange={e => setLossRate(Number(e.target.value))}
                />
              </div>
              <div className="rcalc__field">
                <label>Valor médio de um contrato ou obra (€)</label>
                <input
                  type="number"
                  min="1"
                  value={ticketValue}
                  onChange={e => setTicketValue(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="rcalc__result">
              <p className="rcalc__result-label">Receita potencialmente recuperável — só na fase de pedidos</p>
              <p className="rcalc__result-value">
                <em>{fmt(lostRevenue)}</em>
              </p>
              <p className="rcalc__result-sub">
                {fmt(lostRevenue * 12)} por ano. E este é apenas um dos pontos do processo.
              </p>
              <button
                className="r-btn r-btn--primary r-btn--lg"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => navigate('/diagnostico')}
              >
                Mapear todos os pontos de fuga — grátis →
              </button>
              <p className="rcalc__disclaimer">
                Estes valores são ilustrativos e baseados nos dados que inseriu.
                A Remindr não garante resultados específicos de vendas ou recuperação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
