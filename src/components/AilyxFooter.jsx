export default function AilyxFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="ayl-footer">
      <div className="ayl-container">

        <div className="ayl-footer__top">
          <span className="ayl-footer__logo-wrap">
            <img src="/logotipo-editado.png" alt="" className="ayl-footer__logo-bird" />
            <span className="ayl-footer__logo-mark">
              <span className="ayl-footer__logo-remindr">Reminder</span>
              <span className="ayl-footer__logo-ai"> AI</span>
            </span>
          </span>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', marginTop: '12px', fontStyle: 'italic' }}>
            Não vendemos IA. Construímos capacidade.
          </p>
        </div>

        <div className="ayl-footer__nav">
          <div className="ayl-footer__col">
            <div className="ayl-footer__col-title">Começar</div>
            <a href="/diagnostico" className="ayl-footer__link">Diagnóstico Gratuito</a>
            <a href="/diagnostico" className="ayl-footer__link">Falar com a equipa</a>
          </div>
          <div className="ayl-footer__col">
            <div className="ayl-footer__col-title">O que fazemos</div>
            <a href="#audit" className="ayl-footer__link">Diagnóstico de Processos</a>
            <a href="#build" className="ayl-footer__link">Implementação de Sistemas</a>
            <a href="#method" className="ayl-footer__link">A Nossa Metodologia</a>
          </div>
          <div className="ayl-footer__col">
            <div className="ayl-footer__col-title">Empresa</div>
            <a href="#systems" className="ayl-footer__link">Sistemas</a>
            <a href="#faq" className="ayl-footer__link">FAQ</a>
          </div>
          <div className="ayl-footer__col">
            <div className="ayl-footer__col-title">Legal</div>
            <a href="/privacy.html" className="ayl-footer__link">Política de Privacidade</a>
            <a href="/terms.html" className="ayl-footer__link">Termos e Condições</a>
          </div>
        </div>

        <div className="ayl-footer__bottom">
          <span className="ayl-footer__copy">Reminder AI {year}. Todos os direitos reservados.</span>
          <span className="ayl-footer__design">Não vendemos IA. Construímos capacidade.</span>
        </div>

      </div>
    </footer>
  )
}
