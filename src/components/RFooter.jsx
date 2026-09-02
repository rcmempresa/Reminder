import { Link } from 'react-router-dom'

export default function RFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="rfooter">
      <div className="r-container rfooter__inner">
        <Link to="/" className="rfooter__logo">
          REMIN<span>DR</span>
        </Link>
        <p className="rfooter__copy">
          © {year} Remindr. Todos os direitos reservados.<br />
          Business Leak Audit™ e Revenue & Operations System™ são marcas da Remindr.
        </p>
        <ul className="rfooter__links">
          <li><a href="mailto:hello@remindr-ai.com">hello@remindr-ai.com</a></li>
          <li><Link to="/diagnostico">Auditoria Gratuita</Link></li>
        </ul>
      </div>
    </footer>
  )
}
