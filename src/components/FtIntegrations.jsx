const TOOLS = [
  {
    name: 'Slack',
    icon: 'https://framerusercontent.com/images/Af5cQZewqqYVrhWcQVlsCr8NA.png',
    bg: '#fff',
  },
  {
    name: 'Google Workspace',
    icon: 'https://framerusercontent.com/images/1Rna51Pys4qkD0wsBspQcS34fME.png',
    bg: '#fff',
  },
  {
    name: 'Zapier',
    icon: 'https://framerusercontent.com/images/homdw2cd30pShE1GIPFTUsDYi0.png',
    bg: '#fff',
  },
  {
    name: 'Notion',
    icon: 'https://framerusercontent.com/images/43WRfyB91QkF59TBud7rCfpF44.png',
    bg: '#fff',
  },
]

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" stroke="#217FF1" strokeWidth="1.5" />
      <path d="M7 12.5l3.5 3.5 6-7" stroke="#217FF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FtIntegrations() {
  return (
    <section className="ft-int">
      <div className="ayl-container ft-int__inner">
        {/* Left */}
        <div className="ft-int__left">
          <div className="ayl-services__pill ft-int__pill">Integrations</div>
          <h2 className="ft-int__h2">Works with your<br />tools out of the box</h2>
          <p className="ft-int__sub">
            Seamlessly connect AI Supply with your existing stack. No dev time. No switching platforms.
          </p>
          <a href="#contact" className="ayl-btn ft-int__btn">Get started today</a>
        </div>

        {/* Right */}
        <div className="ft-int__right">
          {TOOLS.map((tool) => (
            <div className="ft-int__row" key={tool.name}>
              <div className="ft-int__tool-icon">
                <img src={tool.icon} alt={tool.name} width={32} height={32} />
              </div>
              <span className="ft-int__tool-name">{tool.name}</span>
              <CheckIcon />
            </div>
          ))}
          <div className="ft-int__row ft-int__row--more">
            <span className="ft-int__more-text">&amp; more...</span>
            <a href="#contact" className="ft-int__get-started">
              Get started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
