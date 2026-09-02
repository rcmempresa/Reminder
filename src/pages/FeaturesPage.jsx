import FtHero from '../components/FtHero'
import FtAccordion from '../components/FtAccordion'
import FtIntegrations from '../components/FtIntegrations'
import FtAgents from '../components/FtAgents'
import FtUseCases from '../components/FtUseCases'
import FtControl from '../components/FtControl'
import CsFaq from '../components/CsFaq'
import AilyxFooterCTA from '../components/AilyxFooterCTA'
import AilyxFooter from '../components/AilyxFooter'

export default function FeaturesPage() {
  return (
    <>
      <main>
        <FtHero />
        <FtAccordion />
        <FtIntegrations />
        <FtAgents />
        <FtUseCases />
        <FtControl />
        <CsFaq />
        <AilyxFooterCTA />
      </main>
      <AilyxFooter />
    </>
  )
}
