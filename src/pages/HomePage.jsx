import AilyxHero      from '../components/AilyxHero'
import AilyxServices  from '../components/AilyxServices'
import AilyxSolution  from '../components/AilyxSolution'
import AilyxAudit     from '../components/AilyxAudit'
import AilyxIncludes  from '../components/AilyxIncludes'
import AilyxOutcomes  from '../components/AilyxOutcomes'
import AilyxForWho    from '../components/AilyxForWho'
import AilyxProof     from '../components/AilyxProof'
import AilyxGuarantee from '../components/AilyxGuarantee'
import CsFaq          from '../components/CsFaq'
import AilyxFooterCTA from '../components/AilyxFooterCTA'
import AilyxFooter    from '../components/AilyxFooter'

export default function HomePage() {
  return (
    <>
      <main>
        <AilyxHero />       {/* 1 · Dream outcome */}
        <AilyxServices />   {/* 2 · Problema */}
        <AilyxSolution />   {/* 3 · Diferenciação */}
        <AilyxAudit />      {/* 4 · A oferta */}
        <AilyxIncludes />   {/* 5 · O que inclui */}
        <AilyxOutcomes />   {/* 6 · Antes / Depois */}
        <AilyxForWho />     {/* 7 · Qualificação */}
        <AilyxProof />      {/* 8 · Prova social */}
        <AilyxGuarantee />  {/* 9 · Risco zero */}
        <CsFaq />           {/* 10 · Objeções */}
        <AilyxFooterCTA />  {/* 11 · Push final */}
      </main>
      <AilyxFooter />
    </>
  )
}
