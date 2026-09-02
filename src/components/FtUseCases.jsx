import { Link } from 'react-router-dom'

export default function FtUseCases() {
  return (
    <section className="ft-usecases">
      <div className="ft-usecases__inner">
        <div className="ayl-services__pill ft-usecases__pill">Use Cases</div>
        <h2 className="ft-usecases__h2">View Example Case Studies</h2>
        <p className="ft-usecases__sub">
          Discover exactly how businesses like yours are using AI agents<br />
          to save time, reduce costs, and scale faster.
        </p>
        <Link to="/case-studies" className="ayl-btn ft-usecases__btn">View use cases</Link>
      </div>
    </section>
  )
}
