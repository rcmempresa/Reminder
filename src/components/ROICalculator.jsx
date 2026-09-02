import { useState } from 'react'

const fmt = (n) =>
  new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)

export default function ROICalculator() {
  const [consultas, setConsultas] = useState(50)
  const [taxaFaltas, setTaxaFaltas] = useState(22)
  const [ticket, setTicket] = useState(80)

  const semanasPorMes = 4.33
  const faltasMes = Math.round(consultas * semanasPorMes * (taxaFaltas / 100))
  const perdaFaltas = faltasMes * ticket
  const tratamentosMes = Math.round(consultas * semanasPorMes * 0.15)
  const perdaTratamentos = Math.round(tratamentosMes * ticket * 1.8)
  const perdaInativos = Math.round(8 * ticket * 1.5)
  const totalPerda = perdaFaltas + perdaTratamentos + perdaInativos
  const recuperavel = Math.round(totalPerda * 0.7)

  const SLIDERS = [
    { label: 'Consultas por semana', val: consultas, set: setConsultas, min: 10, max: 200, step: 5, fmt: v => `${v}` },
    { label: 'Taxa de faltas atual', val: taxaFaltas, set: setTaxaFaltas, min: 2, max: 45, step: 1, fmt: v => `${v}%` },
    { label: 'Ticket médio por consulta', val: ticket, set: setTicket, min: 30, max: 400, step: 10, fmt: v => `${v}€` },
  ]

  return (
    <section className="section section--dark" id="roi-calculator">
      <div className="container">

        <div className="anim" style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="label" style={{ color: 'rgba(255,255,255,0.35)' }}>Calculadora de perdas</span>
          <h2 className="h2" style={{ color: 'white', marginTop: 10 }}>
            Quanto perde a sua clínica<br />
            <span style={{ color: '#9B93F5' }}>— agora mesmo?</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', marginTop: 12 }}>
            Ajuste os valores. O resultado aparece em tempo real.
          </p>
        </div>

        <div className="roi-calc anim anim--d1">
          <div className="roi-calc__inner">

            {/* Inputs */}
            <div className="roi-calc__inputs">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 36 }}>
                Os dados da sua clínica
              </p>

              {SLIDERS.map(({ label, val, set, min, max, step, fmt: fmtVal }) => (
                <div key={label} className="roi-calc__input-group">
                  <div className="roi-calc__label">
                    <span>{label}</span>
                    <span className="roi-calc__val">{fmtVal(val)}</span>
                  </div>
                  <input
                    type="range"
                    min={min} max={max} step={step}
                    value={val}
                    onChange={e => set(Number(e.target.value))}
                    className="roi-calc__range"
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>{fmtVal(min)}</span>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>{fmtVal(max)}</span>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 28, padding: '14px 18px', background: 'rgba(255,255,255,0.04)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)' }}>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>
                  Estimativa conservadora baseada em dados reais de clínicas portuguesas. O diagnóstico gratuito calcula os valores exactos para a sua clínica.
                </p>
              </div>
            </div>

            {/* Result */}
            <div className="roi-calc__result">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>
                Estimativa de perda mensal
              </p>

              <div className="roi-calc__total" key={totalPerda}>
                {fmt(totalPerda)}
              </div>
              <p className="roi-calc__total-label">perdidos por mês — estimativa conservadora</p>

              <div className="roi-calc__breakdown">
                {[
                  { label: `Faltas sem aviso (${faltasMes}/mês)`, val: perdaFaltas },
                  { label: 'Tratamentos não seguidos', val: perdaTratamentos },
                  { label: 'Pacientes inativos não reativados', val: perdaInativos },
                ].map(({ label, val }) => (
                  <div key={label} className="roi-calc__breakdown-item">
                    <span>↳ {label}</span>
                    <span className="roi-calc__breakdown-val">{fmt(val)}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: '16px 18px', background: 'rgba(155,147,245,0.12)', borderRadius: 12, border: '1px solid rgba(155,147,245,0.22)', marginBottom: 24 }}>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: '0 0 6px' }}>
                  Receita recuperável estimada (60–80%):
                </p>
                <p style={{ fontSize: 22, fontWeight: 900, color: '#9B93F5', margin: 0, letterSpacing: '-0.03em' }}>
                  {fmt(recuperavel)}<span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(155,147,245,0.6)' }}>/mês</span>
                </p>
              </div>

              <a href="#final-cta" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center' }}>
                Calcular o valor exacto da minha clínica →
              </a>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 10, textAlign: 'center' }}>
                Diagnóstico gratuito · 15 minutos · sem compromisso
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
