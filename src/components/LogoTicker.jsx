const LOGOS = [
  { src: '/logo_rdpower.png',        alt: 'RD Power Nutrition' },
  { src: '/logo_nrtechsolucion.png', alt: 'NR Techsolución' },
  { src: '/logo_jpcrodrigues.png',   alt: 'JPC Rodrigues' },
  { src: '/logo_jj_bespoke.png',     alt: 'J&J Bespoke Travel' },
]

export default function LogoTicker() {
  const items = [...LOGOS, ...LOGOS]
  return (
    <div className="logo-ticker">
      <p className="logo-ticker__label">Empresas que já trabalham com a Reminder</p>
      <div className="logo-ticker__track-wrap">
        <div className="logo-ticker__track">
          {items.map((l, i) => (
            <div key={i} className="logo-ticker__item">
              <img src={l.src} alt={l.alt} className="logo-ticker__img" />
              {i < items.length - 1 && (
                <span className="logo-ticker__divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
