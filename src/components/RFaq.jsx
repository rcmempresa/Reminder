import { useState } from 'react'

const faqs = [
  {
    q: 'O que é exatamente a Auditoria Do Pedido ao Pagamento?',
    a: 'É uma sessão de 60–90 minutos onde mapeamos o processo completo da empresa — desde o primeiro pedido do cliente até ao pagamento. Analisamos duas dimensões: Revenue (como entram e são acompanhados os pedidos e orçamentos) e Operations (como funciona a execução, faturação e cobrança). No final, identifica os principais gargalos e a prioridade de resolução. É gratuita e sem compromisso.',
  },
  {
    q: 'O que vendem exatamente? O que é que eu vou receber?',
    a: 'Vendemos sistemas. Não vendemos automações, IA, chatbots ou CRMs — essas são ferramentas de entrega. O que implementamos são processos comerciais e operacionais que eliminam fugas de receita, tempo e produtividade. Cada sistema tem um nome, um problema que resolve e um resultado esperado. Começamos pelo maior gargalo identificado na Auditoria.',
  },
  {
    q: 'Por onde começamos — Revenue ou Operations?',
    a: 'Pela Auditoria. O que a Auditoria revelar é o que determina o ponto de entrada. Normalmente, empresas AVAC com maior volume de pedidos começam pelo Revenue (Lead Recovery ou Quote Conversion). Empresas com problemas de cash flow começam pelo Operations (Invoicing Recovery ou Payment Follow-Up). Nunca assumimos — analisamos primeiro.',
  },
  {
    q: 'Quanto custa?',
    a: 'A implementação de cada sistema começa a partir de €1.500. A gestão mensal começa a partir de €500/mês. O investimento final depende da complexidade do processo e das integrações necessárias. Cada sistema adicional tem um setup separado e aumenta a mensalidade. A Auditoria é sempre gratuita — só depois apresentamos uma proposta com números concretos.',
  },
  {
    q: 'Quanto tempo demora a implementação?',
    a: 'O prazo objetivo para implementações standard é de 14 dias a partir da aprovação do blueprint. O prazo final pode variar consoante as integrações necessárias e a complexidade do processo. Nunca colocamos o sistema em produção sem testes — e nunca começamos a cobrar mensalidade antes do sistema estar funcional.',
  },
  {
    q: 'A minha equipa vai ter de aprender uma ferramenta nova?',
    a: 'Não é o objetivo. Tratamos de toda a análise, configuração, integrações, mensagens e testes. A equipa aprende apenas o que precisa de fazer no dia-a-dia — que normalmente é menos do que faz agora, não mais.',
  },
  {
    q: 'O que acontece depois da implementação?',
    a: 'Continuamos responsáveis. A gestão mensal inclui monitorização dos workflows, ajustes ao processo, novas automações acordadas e melhoria contínua. À medida que o primeiro sistema está estável, identificamos o próximo gargalo e propõemos a expansão — só quando faz sentido.',
  },
  {
    q: 'Os meus clientes não querem falar com sistemas automáticos.',
    a: 'Compreendemos. O nível de automação é configurado em conjunto com a empresa. Em muitos casos, o sistema faz triagem inicial e passa imediatamente para um humano — com o contexto necessário. A comunicação e as regras são definidas pela empresa. Antes de ativar, aprova tudo.',
  },
  {
    q: 'Já faço isto manualmente. Por que é que não funciona?',
    a: 'O trabalho manual depende de memória, disponibilidade e rotina. É consistente quando tudo corre bem — e falha exatamente quando há mais trabalho, mais obras, mais pressão. Um processo implementado funciona de forma igual em semanas tranquilas e em semanas caóticas.',
  },
  {
    q: 'Que garantia tenho?',
    a: 'Se não conseguirmos entregar os elementos acordados dentro do âmbito definido, continuamos a trabalhar sem custo adicional até concluir. Não prometemos um valor específico de receita recuperada. Prometemos um processo implementado e funcional — e esse, garantimos.',
  },
]

export default function RFaq() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className="rfaq" id="faq">
      <div className="r-container">
        <div className="rfaq__top">
          <p className="r-label anim">FAQ</p>
          <h2 className="r-h2 anim anim--d1">As perguntas que<br />toda a gente faz.</h2>
          <p className="r-body anim anim--d2">Com respostas directas. Sem marketing.</p>
        </div>

        <div className="rfaq__list anim anim--d2">
          {faqs.map((item, i) => (
            <div key={i} className={`rfaq__item${open === i ? ' is-open' : ''}`}>
              <button className="rfaq__question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="rfaq__icon">+</span>
              </button>
              <div className="rfaq__answer">
                <div className="rfaq__answer-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
