import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AilyxMotion() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 900

    // ── 1. Scroll progress bar (all devices) ─────────────────────
    const bar = document.createElement('div')
    bar.className = 'ax-scroll-bar'
    document.body.prepend(bar)
    const updateBar = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      bar.style.transform = `scaleX(${Math.min(pct, 1)})`
    }
    window.addEventListener('scroll', updateBar, { passive: true })

    if (isMobile) {
      return () => {
        bar.remove()
        window.removeEventListener('scroll', updateBar)
      }
    }

    // ── 2. Custom cursor ──────────────────────────────────────────
    document.body.classList.add('has-custom-cursor')
    const dot = document.createElement('div')
    dot.className = 'ax-cursor-dot'
    const ring = document.createElement('div')
    ring.className = 'ax-cursor-ring'
    document.body.appendChild(dot)
    document.body.appendChild(ring)

    gsap.set([dot, ring], { x: -100, y: -100 })

    const onMove = e => {
      gsap.to(dot,  { x: e.clientX, y: e.clientY, duration: 0.06, ease: 'none' })
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.38, ease: 'power3.out' })
    }
    window.addEventListener('mousemove', onMove)

    document.addEventListener('mouseover', e => {
      if (e.target.closest('a, button, [data-cursor]')) {
        dot.classList.add('ax-cursor-dot--link')
        ring.classList.add('ax-cursor-ring--link')
      }
    })
    document.addEventListener('mouseout', e => {
      if (e.target.closest('a, button, [data-cursor]')) {
        dot.classList.remove('ax-cursor-dot--link')
        ring.classList.remove('ax-cursor-ring--link')
      }
    })

    // ── 3. Magnetic buttons ───────────────────────────────────────
    const applyMagnetic = () => {
      document.querySelectorAll('.ayl-btn:not([data-magnet])').forEach(btn => {
        btn.setAttribute('data-magnet', '1')
        btn.addEventListener('mousemove', e => {
          const r = btn.getBoundingClientRect()
          const x = (e.clientX - r.left - r.width  / 2) * 0.28
          const y = (e.clientY - r.top  - r.height / 2) * 0.28
          gsap.to(btn, { x, y, duration: 0.22, ease: 'power2.out', overwrite: 'auto' })
        })
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.75, ease: 'elastic.out(1, 0.45)', overwrite: 'auto' })
        })
      })
    }
    applyMagnetic()
    ScrollTrigger.addEventListener('refresh', applyMagnetic)

    // ── 4. 3D card tilt ───────────────────────────────────────────
    document.addEventListener('mousemove', e => {
      const card = e.target.closest('.ayl-card--hover')
      if (!card) return
      const r = card.getBoundingClientRect()
      const xRatio = (e.clientX - r.left)  / r.width  - 0.5
      const yRatio = (e.clientY - r.top)   / r.height - 0.5
      gsap.to(card, {
        rotateY: xRatio * 10,
        rotateX: -yRatio * 10,
        scale: 1.025,
        duration: 0.28,
        ease: 'power2.out',
        transformPerspective: 900,
        overwrite: 'auto',
      })
    })
    document.addEventListener('mouseout', e => {
      const card = e.target.closest('.ayl-card--hover')
      if (!card || card.contains(e.relatedTarget)) return
      gsap.to(card, {
        rotateX: 0, rotateY: 0, scale: 1,
        duration: 0.6, ease: 'elastic.out(1, 0.55)', overwrite: 'auto',
      })
    })

    // ── 5. Hero mouse parallax ────────────────────────────────────
    const hero = document.querySelector('.ayl-hero--blue')
    if (hero) {
      hero.addEventListener('mousemove', e => {
        const xN = (e.clientX / window.innerWidth  - 0.5)
        const yN = (e.clientY / window.innerHeight - 0.5)
        gsap.to('.hero-dashboard', { x: -xN * 22, y: -yN * 12, duration: 0.75, ease: 'power2.out', overwrite: 'auto' })
        gsap.to('.hero-dot-grid',  { x:  xN * 10, y:  yN *  6, duration: 1.1,  ease: 'power2.out', overwrite: 'auto' })
        gsap.to('.hero-ambient-left', { x: xN * 40, y: yN * 25, duration: 1.4, ease: 'power2.out', overwrite: 'auto' })
      })
      hero.addEventListener('mouseleave', () => {
        gsap.to(['.hero-dashboard', '.hero-dot-grid', '.hero-ambient-left'], {
          x: 0, y: 0, duration: 1.1, ease: 'power3.out', overwrite: 'auto',
        })
      })
    }

    // ── 6. Section heading scroll reveals (clip-path wipe) ────────
    document.querySelectorAll('.ayl-h2').forEach(el => {
      if (el.dataset.axReveal) return
      el.dataset.axReveal = '1'
      gsap.fromTo(el,
        { clipPath: 'inset(0 0 100% 0)', y: 20 },
        {
          clipPath: 'inset(0 0 0% 0)', y: 0,
          duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
        }
      )
    })

    // ── 7. Section label pill shimmer on scroll ───────────────────
    document.querySelectorAll('.ayl-section-label').forEach((el, i) => {
      if (el.dataset.axLabel) return
      el.dataset.axLabel = '1'
      gsap.fromTo(el,
        { opacity: 0, x: -16 },
        {
          opacity: 1, x: 0, duration: 0.55, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          delay: 0.05 * i,
        }
      )
    })

    return () => {
      dot.remove()
      ring.remove()
      bar.remove()
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', updateBar)
      ScrollTrigger.removeEventListener('refresh', applyMagnetic)
    }
  }, [])

  return null
}
