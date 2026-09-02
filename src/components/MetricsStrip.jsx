import { useEffect, useRef, useState } from 'react'

function useCounter(target, duration = 1400) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          function tick(now) {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(Math.round(target * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            requestAnimationFrame(tick)
          } else {
            setValue(target)
          }
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return [ref, value]
}

function Metric({ value, suffix, prefix, label }) {
  const [ref, count] = useCounter(value)
  return (
    <div className="metric-item" ref={ref}>
      <div className="metric-item__value">
        {prefix}<span>{count.toLocaleString('pt-PT')}</span>{suffix}
      </div>
      <div className="metric-item__label">{label}</div>
    </div>
  )
}

export default function MetricsStrip() {
  return (
    <div className="metrics-strip">
      <div className="container">
        <div className="metrics-strip__inner">
          <Metric value={24}  suffix="%"      label="Aumento médio de faturação" />
          <Metric value={62}  suffix="%"      label="Redução de faltas (no-shows)" />
          <Metric value={4}   suffix="–6 sem." label="Do diagnóstico aos primeiros resultados" />
          <Metric value={4}   suffix=".5×"    label="ROI médio em 90 dias" />
        </div>
      </div>
    </div>
  )
}
