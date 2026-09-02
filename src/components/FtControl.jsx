const FEATURES = [
  {
    label: 'Approval queues',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Confidence scoring',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Activity logs',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Agent sandbox mode',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
]

export default function FtControl() {
  return (
    <section className="ft-control">
      <div className="ayl-container">
        <div className="ayl-services__pill ft-control__pill">Control</div>

        <div className="ft-control__header">
          <h2 className="ft-control__h2">
            You stay in<br />control—always
          </h2>
          <p className="ft-control__desc">
            Set thresholds for review, route tasks for approval, and monitor every interaction with full transparency.
          </p>
        </div>

        <div className="ft-control__features">
          {FEATURES.map((f) => (
            <div className="ft-control__feat" key={f.label}>
              <div className="ft-control__feat-icon">{f.icon}</div>
              <span className="ft-control__feat-label">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
