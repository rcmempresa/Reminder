import { useState, useRef } from 'react'

const TESTIMONIALS = [
  {
    // Substitui src pelo caminho do teu vídeo: '/videos/testemunho-mariana.mp4'
    src: null,
    poster: 'https://i.pravatar.cc/600?img=16',
    name: 'Dra. Mariana F.',
    role: 'Diretora Clínica · Clínica Dentária · Lisboa',
    result: '+€3.200/mês',
    label: 'receita recuperada',
    quote: '"Em 5 semanas o sistema estava implementado — e os números falam por si."',
  },
  {
    src: null,
    poster: 'https://i.pravatar.cc/600?img=47',
    name: 'Pedro A.',
    role: 'Proprietário · Clínica de Fisioterapia · Porto',
    result: '+28 pacientes',
    label: 'reativados por mês',
    quote: '"Agora tenho uma lista de espera pela primeira vez."',
  },
  {
    src: null,
    poster: 'https://i.pravatar.cc/600?img=25',
    name: 'Dra. Sofia R.',
    role: 'Fundadora · Clínica de Estética · Braga',
    result: '+€4.100/mês',
    label: 'de faturação adicional',
    quote: '"Sinto pela primeira vez que a clínica trabalha para mim."',
  },
]

function VideoCard({ t }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const toggle = () => {
    if (!t.src) return
    if (playing) {
      videoRef.current?.pause()
    } else {
      videoRef.current?.play()
    }
    setPlaying(!playing)
  }

  return (
    <div style={{
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--bg-dark)',
      border: '1.5px solid rgba(255,255,255,0.06)',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Video area */}
      <div
        onClick={toggle}
        style={{
          position: 'relative',
          aspectRatio: '16/9',
          background: '#0D0C1D',
          cursor: t.src ? 'pointer' : 'default',
          overflow: 'hidden',
        }}
      >
        {t.src ? (
          <video
            ref={videoRef}
            src={t.src}
            poster={t.poster}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onEnded={() => setPlaying(false)}
            playsInline
          />
        ) : (
          <img
            src={t.poster}
            alt={t.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.75)' }}
          />
        )}

        {/* Play button */}
        {!playing && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              transition: 'transform 0.2s ease',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--purple)">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        )}

        {/* Result badge */}
        <div style={{
          position: 'absolute',
          top: 12,
          left: 12,
          background: 'rgba(13,12,29,0.75)',
          backdropFilter: 'blur(8px)',
          borderRadius: 100,
          padding: '4px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--success)' }}>{t.result}</span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{t.label}</span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '20px 24px' }}>
        <p style={{
          fontSize: 14,
          color: 'rgba(255,255,255,0.75)',
          fontStyle: 'italic',
          lineHeight: 1.6,
          margin: '0 0 16px',
        }}>
          {t.quote}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src={t.poster}
            alt={t.name}
            style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.1)' }}
          />
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: 'white', margin: 0 }}>{t.name}</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', margin: 0 }}>{t.role}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default function VideoTestimonials() {
  return (
    <section className="section section--dark" style={{ background: 'var(--bg-dark-2)' }}>
      <div className="container">

        <div className="section-head" style={{ color: 'white' }}>
          <span className="label" style={{ color: '#9B93F5' }}>Testemunhos em vídeo</span>
          <h2 className="h2" style={{ color: 'white' }}>O que os donos de clínica dizem</h2>
          <p className="body-md" style={{ marginTop: 12, color: 'rgba(255,255,255,0.55)' }}>
            Resultados reais. Clínicas portuguesas. Nas palavras deles.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          marginTop: 48,
        }}>
          {TESTIMONIALS.map((t) => (
            <VideoCard key={t.name} t={t} />
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 24 }}>
          Testemunhos verificados · Clínicas portuguesas · Resultados individuais podem variar
        </p>

      </div>
    </section>
  )
}
