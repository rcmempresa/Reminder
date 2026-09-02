const STEPS = [
  {
    num: 'PASSO 1',
    badge: 'Gratuito',
    badgeColor: 'var(--success)',
    title: 'Diagnóstico de Receita',
    desc: 'Começamos sempre aqui. Em 15 minutos analisamos o percurso do paciente da sua clínica — da primeira marcação ao follow-up. Identificamos cada ponto de fuga de receita: faltas, tratamentos não aceites, pacientes perdidos, trabalho manual evitável. O resultado é um número concreto em euros — não uma estimativa genérica.',
    note: 'Se o retorno projetado não justificar o investimento, dizemos isso logo. Sem compromisso, sem custo.',
    cta: { label: 'Começar pelo Diagnóstico Grátis →', href: '#final-cta' },
  },
  {
    num: 'PASSO 2',
    badge: '€497',
    badgeColor: 'var(--purple)',
    title: 'Auditoria de Recuperação',
    desc: 'Para quem quer resultados imediatos, sem esperar pelo sistema completo. Em 72 horas implementamos três correções automáticas na sua clínica: confirmação de consultas por WhatsApp, lembrete inteligente 24 horas antes, e follow-up pós-consulta. Entregamos também um relatório completo com a receita perdida quantificada em euros e um plano prioritizado para recuperar €50.000+ por ano.',
    note: 'O seu esforço: 45 minutos numa call. O resto é connosco.',
    cta: { label: 'Comprar Auditoria — €497 →', href: '#audit' },
  },
  {
    num: 'PASSO 3',
    badge: 'Sob consulta',
    badgeColor: 'var(--text-3)',
    title: 'Sistema de Recuperação',
    desc: 'Para quem quer transformar a clínica de raiz. Implementamos o sistema completo em 4–6 semanas: confirmações automáticas, reativação de pacientes inativos, follow-up de tratamentos propostos, automatização dos processos administrativos, e um relatório mensal de crescimento entregue ao dono da clínica. Primeiros resultados visíveis nas primeiras semanas.',
    note: 'O valor é calculado após o diagnóstico, com base no tamanho da sua clínica e na receita recuperável. O ROI é projetado antes de avançarmos.',
    cta: { label: 'Pedir proposta personalizada →', href: '#final-cta' },
  },
]

export default function SolutionSteps() {
  return (
    <section className="section" id="solution">
      <div className="container">
        <div className="section-head">
          <span className="label">A Solução</span>
          <h2 className="h2">Como recuperamos a receita perdida</h2>
          <p className="body-md" style={{ marginTop: 12 }}>
            O nosso processo tem três passos. Cada um constrói sobre o anterior.
            Nunca avançamos sem saber exatamente quanto a sua clínica vai recuperar.
          </p>
        </div>

        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {STEPS.map((s, i) => (
            <div key={s.num} style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: 0,
              borderRadius: 'var(--radius-xl)',
              border: '1.5px solid var(--border-dark)',
              overflow: 'hidden',
              background: 'var(--bg)',
            }}>
              {/* Left label */}
              <div style={{
                background: i === 1 ? 'var(--bg-dark)' : 'var(--bg-alt)',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: 10,
                borderRight: '1px solid var(--border-dark)',
              }}>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: i === 1 ? 'rgba(255,255,255,0.4)' : 'var(--text-3)' }}>
                  {s.num}
                </span>
                <span style={{
                  display: 'inline-block',
                  fontSize: 12, fontWeight: 700,
                  color: i === 1 ? 'white' : s.badgeColor,
                  background: i === 1 ? 'rgba(255,255,255,0.08)' : `${s.badgeColor}15`,
                  border: `1px solid ${i === 1 ? 'rgba(255,255,255,0.15)' : s.badgeColor}40`,
                  borderRadius: 100, padding: '4px 12px',
                }}>
                  {s.badge}
                </span>
              </div>

              {/* Right content */}
              <div style={{ padding: '32px 36px' }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, margin: '0 0 12px' }}>
                  {s.desc}
                </p>
                <p style={{ fontSize: 13, color: 'var(--text-3)', fontStyle: 'italic', margin: '0 0 20px', lineHeight: 1.5 }}>
                  {s.note}
                </p>
                <a href={s.cta.href} style={{
                  display: 'inline-flex', alignItems: 'center',
                  fontSize: 13, fontWeight: 700, color: 'var(--purple)',
                  textDecoration: 'none',
                }}>
                  {s.cta.label}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
