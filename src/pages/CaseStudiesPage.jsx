import CsHero from '../components/CsHero'
import CsGrid from '../components/CsGrid'
import AilyxTestimonials from '../components/AilyxTestimonials'
import CsFaq from '../components/CsFaq'
import AilyxFooterCTA from '../components/AilyxFooterCTA'
import AilyxFooter from '../components/AilyxFooter'

export default function CaseStudiesPage() {
  return (
    <>
      <main>
        <CsHero />
        <CsGrid />
        <AilyxTestimonials />
        <CsFaq />
        <AilyxFooterCTA />
      </main>
      <AilyxFooter />
    </>
  )
}
