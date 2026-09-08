const scenarios = [
  {
    channel: 'Receita — Resposta',
    icon: '📩',
    tag: 'Fuga de Receita',
    text: 'Um pedido entra pelo WhatsApp enquanto o técnico está numa instalação. Ninguém responde nesse dia. No dia seguinte, o cliente já contratou outra empresa.',
    outcome: 'Oportunidade perdida. Sem aviso. Sem registo.',
  },
  {
    channel: 'Receita — Follow-up',
    icon: '📄',
    tag: 'Fuga de Receita',
    dark: true,
    text: 'O orçamento é enviado. O cliente diz que vai pensar. Não há follow-up sistemático. Dois dias depois, silêncio. O trabalho vai para a concorrência.',
    outcome: 'Semanas de trabalho comercial. Resultado zero.',
  },
  {
    channel: 'Cash Flow — Faturação',
    icon: '🧾',
    tag: 'Fuga de Cash Flow',
    text: 'O técnico termina o trabalho. As informações ficam no telemóvel ou no bloco de notas. A fatura atrasa dias — às vezes semanas. O dinheiro também.',
    outcome: 'Trabalho feito. Dinheiro parado.',
  },
  {
    channel: 'Cash Flow — Pagamentos',
    icon: '💸',
    tag: 'Fuga de Cash Flow',
    dark: true,
    text: 'A fatura é emitida. Ninguém acompanha. O cliente não paga dentro do prazo. Ninguém se lembra de ligar. A fatura fica em aberto.',
    outcome: 'Faturado mas não recebido. Durante meses.',
  },
  {
    channel: 'Recorrência — Retenção',
    icon: '🔁',
    tag: 'Fuga de Recorrência',
    text: 'A empresa instala um sistema AVAC. O cliente fica satisfeito. Mas nunca mais é contactado para manutenção, revisão ou upgrade. A recorrência que podia existir, não existe.',
    outcome: 'Um cliente satisfeito que a concorrência vai reconquistar.',
  },
  {
    channel: 'Produtividade — Operações',
    icon: '⚙️',
    tag: 'Fuga de Tempo',
    dark: true,
    text: 'A equipa administrativa passa horas a inserir informação manualmente, a ligar para saber o estado dos trabalhos, a criar OT no Excel. Tempo que podia estar em trabalho de valor.',
    outcome: 'Horas perdidas por dia. Em trabalho repetitivo evitável.',
  },
]

export default function RProblem() {
  return (
    <section className="rproblem">
      <div className="r-container">
        <div className="rproblem__top">
          <p className="r-label anim">O Problema Real</p>
          <h2 className="r-h2 anim anim--d1">
            O problema não é falta<br />de ferramentas.<br />É o que acontece entre elas.
          </h2>
          <p className="r-body anim anim--d2">
            A empresa já tem CRM, email, WhatsApp, ERP e calendário. Mas entre uma ferramenta e outra — alguém copia informação, alguém envia um email, alguém se lembra de fazer follow-up. É aí que a capacidade desaparece.
          </p>
        </div>

        <div className="rproblem__scenarios">
          {scenarios.map((s, i) => (
            <div
              key={i}
              className={`rproblem__card anim anim--d${(i % 4) + 1}${s.dark ? ' rproblem__card--dark' : ''}`}
            >
              <div className="rproblem__channel">
                <span>{s.icon}</span>
                {s.channel}
              </div>
              <p className="rproblem__scenario">{s.text}</p>
              <p className="rproblem__outcome">{s.outcome}</p>
            </div>
          ))}
        </div>

        <div className="rproblem__bottom anim">
          <p className="rproblem__bottom-text">
            Cada passo manual parece pequeno. Em conjunto, são dezenas de milhares de euros por ano a sair pela porta — em silêncio.
          </p>
          <p className="rproblem__bottom-sub">
            O Diagnóstico de Execução mapeia os eventos que geram trabalho manual recorrente na sua empresa e calcula quais os fluxos com maior potencial de impacto.
          </p>
        </div>
      </div>
    </section>
  )
}
