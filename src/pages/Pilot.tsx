import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { PilotPhaseTimeline } from '../components/pilot/PilotPhaseTimeline'
import { EducationalDisclaimer } from '../components/shared/EducationalDisclaimer'
import { StatusBadge } from '../components/shared/StatusBadge'
import { SectionHeading } from '../components/SectionHeading'
import { pilotPhases } from '../data/pilot'

export function Pilot() {
  return <>
    <PageMeta title="Pilot Program" description="Follow RagaMind's planned path from research and expert guidance to educational community listening sessions." />

    <header className="border-b border-teal-900/10 py-20 sm:py-28">
      <PageContainer>
        <StatusBadge status="In Development" />
        <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-tight sm:text-7xl">Pilot Program</h1>
        <p className="mt-7 max-w-4xl text-xl leading-8 text-teal-800 sm:text-2xl sm:leading-9">From research and expert guidance to community listening sessions.</p>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-teal-800">RagaMind plans to develop educational, non-clinical Carnatic music listening sessions for senior living communities. No pilot has been conducted yet. Any future sessions will be educational and community-based—not medical treatment or clinical music therapy.</p>
      </PageContainer>
    </header>

    <div>
      <section className="py-20 sm:py-28">
        <PageContainer className="max-w-5xl">
          <SectionHeading title="Project Timeline" subtitle="A concise view of the work completed, underway, and planned. No dates are shown because they have not been verified." />
          <PilotPhaseTimeline phases={pilotPhases} />
        </PageContainer>
      </section>

      <section className="border-t border-teal-900/10 bg-sage-100/60 py-16 sm:py-20">
        <PageContainer className="max-w-5xl">
          <SectionHeading title="Interested in a Future Pilot?" />
          <p className="mt-5 max-w-3xl text-lg leading-8 text-teal-800">Senior living staff, music therapists, caregivers, and community organizations are welcome to start a conversation about a future educational pilot.</p>
          <Link className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-900 px-6 py-3 font-bold text-white hover:bg-teal-800" to="/contact">Contact RagaMind <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link>
        </PageContainer>
      </section>
    </div>

    <EducationalDisclaimer>RagaMind’s planned pilot activities are educational and community-based. They are not clinical music therapy, medical treatment, or a substitute for professional care.</EducationalDisclaimer>
  </>
}
