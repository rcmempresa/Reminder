import RHero from '../components/RHero'
import RProblem from '../components/RProblem'
import RCalculator from '../components/RCalculator'
import RMechanism from '../components/RMechanism'
import RValueStack from '../components/RValueStack'
import RSocialProof from '../components/RSocialProof'
import RGuarantee from '../components/RGuarantee'
import RFaq from '../components/RFaq'
import RFinalCta from '../components/RFinalCta'
import RFooter from '../components/RFooter'

export default function RemindrHomePage() {
  return (
    <>
      <main>
        <RHero />
        <RProblem />
        <RCalculator />
        <RMechanism />
        <RValueStack />
        <RSocialProof />
        <RGuarantee />
        <RFaq />
        <RFinalCta />
      </main>
      <RFooter />
    </>
  )
}
