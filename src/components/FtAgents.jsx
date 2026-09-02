const AGENTS = [
  {
    label: 'LOGISTICS',
    title: 'Customer Support Agent',
    desc: 'Each AI agent is trained on your internal docs, SOPs, and conversations—so it speaks your language, follows your processes, and improves over time.',
    img: 'https://framerusercontent.com/images/TNC2JvXI8mt5coRSlZ7vTmQaNlc.jpg',
  },
  {
    label: 'LOGISTICS',
    title: 'Sales Assistant',
    desc: 'Engages leads, qualifies them through smart questions, updates your CRM, and drafts follow-up emails tailored to each prospect—so you stay fast, consistent, and on top of every opportunity.',
    img: 'https://framerusercontent.com/images/nNn3gFQV2Uu6AZyPcFtLQ63vXIM.jpg',
  },
  {
    label: 'LOGISTICS',
    title: 'Ops Coordinator',
    desc: 'Handles repetitive internal tasks like updating sheets, routing requests, and triggering workflows—freeing your ops team to focus on strategy, not admin.',
    img: 'https://framerusercontent.com/images/ET3VXuLOYFxNcVQoB0d861br4A.jpg',
  },
  {
    label: 'LOGISTICS',
    title: 'Research Copilot',
    desc: 'Reads and summarizes long docs, web pages, or transcripts in seconds—turning information overload into organized insights your team can act on.',
    img: 'https://framerusercontent.com/images/AgxfwqMZI7EpCCo2jWUe1DCM.jpg',
  },
]

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function FtAgents() {
  return (
    <section className="ft-agents">
      <div className="ft-agents__top">
        <h2 className="ft-agents__h2">Agents that understand<br />your business</h2>
        <p className="ft-agents__sub">
          Each AI agent is trained on your internal docs, SOPs, and team conversations—so it speaks your language, follows your rules, and gets better over time.
        </p>
        <a href="#contact" className="ayl-btn ft-agents__btn">Book a demo</a>
        <div className="ft-agents__stats">
          <div className="ft-agents__stat">
            <span className="ft-agents__stat-num">300k+</span>
            <span className="ft-agents__stat-label">Registers Users</span>
          </div>
          <div className="ft-agents__stat">
            <span className="ft-agents__stat-num">27</span>
            <span className="ft-agents__stat-label">Available Countries</span>
          </div>
          <div className="ft-agents__stat">
            <span className="ft-agents__stat-num">50+</span>
            <span className="ft-agents__stat-label">Payment Methods</span>
          </div>
        </div>
      </div>

      <div className="ft-agents__grid">
        {AGENTS.map((agent) => (
          <div className="ft-agent-card" key={agent.title}>
            <img src={agent.img} alt={agent.title} className="ft-agent-card__bg" />
            <div className="ft-agent-card__overlay" />
            <div className="ft-agent-card__content">
              <div className="ft-agent-card__top-row">
                <span className="ft-agent-card__label">{agent.label}</span>
                <ArrowIcon />
              </div>
              <h3 className="ft-agent-card__title">{agent.title}</h3>
              <p className="ft-agent-card__desc">{agent.desc}</p>
              <a href="#contact" className="ayl-btn ft-agent-card__cta">Get in touch</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
