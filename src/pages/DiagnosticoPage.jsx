import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* ── Data ── */
const SETORES = [
  'Serviços B2B',
  'Construção / AVAC / Engenharia',
  'Saúde / Clínicas',
  'Imobiliário',
  'E-commerce / Retalho',
  'Indústria / Manufactura',
  'Serviços Profissionais (Jurídico, Contabilidade)',
  'Tecnologia / Software',
  'Outro',
]

const EQUIPA = ['1–5', '6–10', '11–25', '26–50', '51–100', '100+']

const FATURACAO = [
  '< €250k',
  '€250k – €500k',
  '€500k – €1M',
  '€1M – €3M',
  '€3M – €10M',
  '€10M+',
]

const PROBLEMAS = [
  { id: 'leads',      label: 'Gerar mais leads' },
  { id: 'vendas',     label: 'Converter mais vendas' },
  { id: 'followup',   label: 'Follow-up de leads / orçamentos' },
  { id: 'atendimento',label: 'Atendimento ao cliente' },
  { id: 'admin',      label: 'Trabalho administrativo' },
  { id: 'operacoes',  label: 'Operações internas' },
  { id: 'info',       label: 'Processamento de informação' },
  { id: 'relatorios', label: 'Relatórios / gestão' },
  { id: 'outro',      label: 'Outro' },
]

const IA_MATURIDADE = [
  { id: 'nao',           label: 'Não utilizamos IA' },
  { id: 'a_comecar',     label: 'Estamos a começar a explorar' },
  { id: 'algumas',       label: 'Já usamos algumas ferramentas' },
  { id: 'regularmente',  label: 'Usamos IA regularmente' },
  { id: 'varios',        label: 'Temos vários sistemas de IA' },
]

const INTENCAO = [
  { id: 'sim',           label: 'Sim, se o ROI fizer sentido' },
  { id: 'possivelmente', label: 'Possivelmente — quero primeiro perceber o potencial' },
  { id: 'nao',           label: 'Não estou a considerar investimento agora' },
]

const STEPS = [
  { id: 'identidade',    title: 'Sobre si e a empresa',    desc: 'Só precisamos do básico para começar.' },
  { id: 'qualificacao',  title: 'Contexto do negócio',     desc: 'Para perceber onde existe maior oportunidade.' },
]

/* ── Lead scoring (hidden from user) ── */
function calcScore(v) {
  let s = 0

  // Team size — sweet spot 11–50
  const eq = { '1–5': 0, '6–10': 8, '11–25': 20, '26–50': 25, '51–100': 18, '100+': 10 }
  s += eq[v.equipa] || 0

  // Revenue — higher is better
  const fat = {
    '< €250k': 0,
    '€250k – €500k': 8,
    '€500k – €1M': 18,
    '€1M – €3M': 28,
    '€3M – €10M': 35,
    '€10M+': 20,
  }
  s += fat[v.faturacao] || 0

  // Problems selected (up to 2)
  s += Math.min((v.problemas || []).length * 8, 16)

  // AI maturity — starting/some = ideal buyer
  const ia = { nao: 5, a_comecar: 20, algumas: 15, regularmente: 8, varios: 4 }
  s += ia[v.ia_maturidade] || 0

  // Investment intent — biggest signal
  const intent = { sim: 30, possivelmente: 15, nao: 0 }
  s += intent[v.intencao] || 0

  // Open field answered
  if (v.prioridade?.trim().length > 25) s += 10

  if (s >= 80) return { score: s, tier: 'A', label: 'Lead ideal — agendar directo' }
  if (s >= 45) return { score: s, tier: 'B', label: 'Lead potencial — follow-up' }
  return         { score: s, tier: 'C', label: 'Lead fraco — baixa prioridade' }
}

export default function DiagnosticoPage() {
  const navigate = useNavigate()
  const [step, setStep]             = useState(0)
  const [values, setValues]         = useState({ problemas: [] })
  const [submitting, setSubmitting] = useState(false)

  const set = (k, v) => setValues(prev => ({ ...prev, [k]: v }))

  const toggleProblema = id => {
    const current = values.problemas || []
    if (current.includes(id)) {
      set('problemas', current.filter(p => p !== id))
    } else if (current.length < 2) {
      set('problemas', [...current, id])
    }
  }

  const canProceed = () => {
    if (step === 0) return values.nome?.trim() && values.email?.trim() && values.empresa?.trim() && values.setor
    if (step === 1) return values.equipa && values.faturacao && values.problemas?.length > 0 && values.intencao
    return false
  }

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep(s => s + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    const scoring = calcScore(values)
    const problemasLabels = (values.problemas || [])
      .map(id => PROBLEMAS.find(p => p.id === id)?.label)
      .join(', ')
    const iaMaturidadeLabel = IA_MATURIDADE.find(i => i.id === values.ia_maturidade)?.label || '—'
    const intencaoLabel = INTENCAO.find(i => i.id === values.intencao)?.label || '—'

    // Substitui pelo URL da tua Apps Script Web App
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby_Yfcy8gQeR25U6j45ZU0dzQwHzaEXtcdXm8BzcXo2MPiqNBrezJlEeaFXpiZv0Q1PPQ/exec'
    try {
      // mode: 'no-cors' necessário por causa dos redirects do Google Apps Script
      // A resposta é opaca mas os dados chegam sempre ao script
      fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          nome:           values.nome,
          email:          values.email,
          empresa:        values.empresa,
          website:        values.website || '—',
          setor:          values.setor,
          equipa:         values.equipa,
          faturacao:      values.faturacao,
          problemas:      problemasLabels,
          ia_maturidade:  iaMaturidadeLabel,
          intencao:       intencaoLabel,
          prioridade:     values.prioridade || '—',
          _score:         scoring.score,
          _tier:          scoring.tier,
          _tier_label:    scoring.label,
          _subject: `[TIER ${scoring.tier}] AI Growth Audit — ${values.empresa} (${values.setor}) · Score ${scoring.score}`,
        }),
      })
    } catch (_) {}
    // Navega para /obrigado com o tier como query param
    navigate(`/obrigado?tier=${scoring.tier}`)
  }

  return (
    <div className="raudit">
      {/* Header */}
      <div className="raudit__header">
        <div className="r-container">
          <p className="r-label" style={{ marginBottom: '12px', color: '#217FF1' }}>
            Diagnóstico Gratuito
          </p>
          <h2 className="r-h2" style={{ marginBottom: '12px', color: '#0a1c42' }}>
            Veja se a sua empresa é elegível<br />para o AI Growth Audit
          </h2>
          <p className="r-body" style={{ maxWidth: '520px', margin: '0 auto', color: '#666' }}>
            O diagnóstico é gratuito, mas trabalhamos apenas com empresas onde acreditamos
            que a IA pode gerar impacto real. Se não houver oportunidade clara, dizemos-lhe — sem rodeios.
          </p>
        </div>
      </div>

      <div className="raudit__body">
        <div className="raudit__form-wrap">

          {/* Progress */}
          <div className="raudit__progress-bar-wrap">
            <div className="raudit__progress-bar-top">
              <span className="raudit__progress-step-label">{STEPS[step].title}</span>
              <span className="raudit__progress-counter">{step + 1} / {STEPS.length}</span>
            </div>
            <div className="raudit__progress-track">
              <div
                className="raudit__progress-fill"
                style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
              />
            </div>
            <div className="raudit__progress-steps">
              {STEPS.map((s, i) => (
                <div
                  key={s.id}
                  className={`raudit__progress-pip${i < step ? ' is-done' : i === step ? ' is-active' : ''}`}
                  title={s.title}
                />
              ))}
            </div>
          </div>

          <div className="raudit__form">
            <div className="raudit__step is-active">
              <h3 className="raudit__step-title">{STEPS[step].title}</h3>
              <p className="raudit__step-desc">{STEPS[step].desc}</p>

              {/* ── PASSO 0 — Identidade ── */}
              {step === 0 && <>
                <div className="raudit__field">
                  <label>O seu nome <span style={{ color: 'var(--blue)' }}>*</span></label>
                  <input
                    type="text"
                    placeholder="João Silva"
                    value={values.nome || ''}
                    onChange={e => set('nome', e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="raudit__field">
                  <label>Email profissional <span style={{ color: 'var(--blue)' }}>*</span></label>
                  <input
                    type="email"
                    placeholder="joao@empresa.pt"
                    value={values.email || ''}
                    onChange={e => set('email', e.target.value)}
                  />
                </div>
                <div className="raudit__field">
                  <label>Nome da empresa <span style={{ color: 'var(--blue)' }}>*</span></label>
                  <input
                    type="text"
                    placeholder="Empresa Exemplo, Lda."
                    value={values.empresa || ''}
                    onChange={e => set('empresa', e.target.value)}
                  />
                </div>
                <div className="raudit__field">
                  <label>Website <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(opcional)</span></label>
                  <input
                    type="url"
                    placeholder="https://empresa.pt"
                    value={values.website || ''}
                    onChange={e => set('website', e.target.value)}
                  />
                </div>
                <div className="raudit__field">
                  <label>Setor de actividade <span style={{ color: 'var(--blue)' }}>*</span></label>
                  <select value={values.setor || ''} onChange={e => set('setor', e.target.value)}>
                    <option value="">Seleccionar...</option>
                    {SETORES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </>}

              {/* ── PASSO 1 — Qualificação ── */}
              {step === 1 && <>

                {/* Equipa */}
                <div className="raudit__field">
                  <label>Quantas pessoas trabalham na empresa? <span style={{ color: 'var(--blue)' }}>*</span></label>
                  <div className="raudit__card-grid raudit__card-grid--3">
                    {EQUIPA.map(e => (
                      <button key={e} type="button"
                        className={`raudit__card-opt${values.equipa === e ? ' is-selected' : ''}`}
                        onClick={() => set('equipa', e)}>
                        {e}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Faturação */}
                <div className="raudit__field" style={{ marginTop: '28px' }}>
                  <label>Faturação anual aproximada <span style={{ color: 'var(--blue)' }}>*</span></label>
                  <div className="raudit__card-grid raudit__card-grid--3">
                    {FATURACAO.map(f => (
                      <button key={f} type="button"
                        className={`raudit__card-opt${values.faturacao === f ? ' is-selected' : ''}`}
                        onClick={() => set('faturacao', f)}>
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Problemas — pick up to 2 */}
                <div className="raudit__field" style={{ marginTop: '28px' }}>
                  <label>
                    Onde sente maior potencial de melhoria? <span style={{ color: 'var(--blue)' }}>*</span>
                  </label>
                  <p className="raudit__field-hint">Escolha até 2 áreas.</p>
                  <div className="raudit__check-grid">
                    {PROBLEMAS.map(p => {
                      const selected = (values.problemas || []).includes(p.id)
                      const maxed = (values.problemas || []).length >= 2 && !selected
                      return (
                        <button key={p.id} type="button"
                          className={`raudit__check-item${selected ? ' is-selected' : ''}${maxed ? ' is-disabled' : ''}`}
                          onClick={() => !maxed && toggleProblema(p.id)}>
                          {p.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* IA maturity */}
                <div className="raudit__field" style={{ marginTop: '28px' }}>
                  <label>Já utilizam IA na empresa?</label>
                  <div className="raudit__radio-stack">
                    {IA_MATURIDADE.map(i => (
                      <button key={i.id} type="button"
                        className={`raudit__radio-item${values.ia_maturidade === i.id ? ' is-selected' : ''}`}
                        onClick={() => set('ia_maturidade', i.id)}>
                        <span className="raudit__radio-dot" />
                        {i.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Investment intent */}
                <div className="raudit__field" style={{ marginTop: '28px' }}>
                  <label>
                    Se identificarmos uma oportunidade clara, estaria disposto a investir na implementação?
                    <span style={{ color: 'var(--blue)' }}> *</span>
                  </label>
                  <div className="raudit__radio-stack">
                    {INTENCAO.map(i => (
                      <button key={i.id} type="button"
                        className={`raudit__radio-item${values.intencao === i.id ? ' is-selected' : ''}`}
                        onClick={() => set('intencao', i.id)}>
                        <span className="raudit__radio-dot" />
                        {i.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Open field */}
                <div className="raudit__field" style={{ marginTop: '28px' }}>
                  <label>
                    Se pudéssemos resolver uma única coisa na sua empresa nos próximos 90 dias, o que escolheria?
                    <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}> (opcional)</span>
                  </label>
                  <textarea
                    placeholder="Ex: Os comerciais passam demasiado tempo a responder a emails. / Temos 300 propostas em aberto sem follow-up. / A equipa perde horas a colocar informação no CRM..."
                    value={values.prioridade || ''}
                    onChange={e => set('prioridade', e.target.value)}
                    style={{ resize: 'none', height: '110px' }}
                  />
                </div>

                <div className="raudit__info-box" style={{ marginTop: '20px' }}>
                  <p style={{ fontSize: '14px', color: '#1a4d8a', lineHeight: 1.55 }}>
                    Após submeter, entramos em contacto em 24h úteis. O audit é uma conversa de 45–60 minutos
                    — deve participar quem conhece os processos operacionais e toma decisões de investimento.
                  </p>
                </div>
              </>}

              {/* Navigation */}
              <div className="raudit__nav">
                {step > 0
                  ? <button className="raudit__back" onClick={() => setStep(s => s - 1)}>← Voltar</button>
                  : <span />
                }
                <button
                  className="r-btn r-btn--primary r-btn--lg"
                  onClick={handleNext}
                  disabled={!canProceed() || submitting}
                  style={{ opacity: canProceed() && !submitting ? 1 : 0.45 }}
                >
                  {submitting
                    ? 'A enviar...'
                    : step < STEPS.length - 1
                    ? 'Continuar →'
                    : 'Descobrir onde a IA pode ter maior impacto →'}
                </button>
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)', marginTop: '20px' }}>
            Os seus dados são tratados com confidencialidade e utilizados apenas para preparar o audit.
          </p>
        </div>
      </div>
    </div>
  )
}
