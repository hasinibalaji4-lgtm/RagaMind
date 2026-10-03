import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { PilotRoadmap } from '../components/pilot/PilotRoadmap'
import { SectionHeading } from '../components/SectionHeading'
import { EducationalDisclaimer } from '../components/shared/EducationalDisclaimer'
import { StatusBadge } from '../components/shared/StatusBadge'
import { pilotRoadmap } from '../data/pilot'
import { PilotProcessGraphic } from '../components/visuals/PilotProcessGraphic'

export function Pilot() {
  return <>
    <PageMeta title="Pilot Program" description="Follow RagaMind's flexible roadmap toward educational community listening experiences and user feedback." />
    <header className="border-b border-teal-900/10 py-20 sm:py-28"><PageContainer><StatusBadge status="In Development" /><h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-tight sm:text-7xl">Pilot Program</h1><p className="mt-7 max-w-4xl text-xl leading-8 text-teal-800 sm:text-2xl sm:leading-9">A flexible path from careful preparation to community feedback.</p></PageContainer></header>

    <section className="py-20 sm:py-24"><PageContainer className="max-w-5xl"><SectionHeading title="Pilot Vision" /><p className="mt-6 max-w-4xl text-lg leading-8 text-teal-800">RagaMind’s future pilot will explore how people respond to carefully selected Carnatic music experiences and how the website itself can be improved through direct user feedback. It will be educational and community-based, not clinical therapy or a test of treatment effectiveness.</p></PageContainer></section>

    <section className="border-y border-teal-900/10 bg-sage-100/60 py-20 sm:py-24"><PageContainer><SectionHeading title="Current Progress" subtitle="A flexible roadmap without artificial dates or promises." /><PilotProcessGraphic currentStage="Design" /><PilotRoadmap groups={pilotRoadmap} /><p className="mt-8 max-w-5xl border-l-2 border-gold-700 bg-yellow/25 p-5 leading-7 text-teal-800">The roadmap may evolve as feedback, ethical considerations, and new research shape the project.</p></PageContainer></section>

    <section className="py-16 sm:py-20"><PageContainer className="max-w-5xl"><SectionHeading title="Interested in a Future Pilot?" /><p className="mt-5 max-w-3xl text-lg leading-8 text-teal-800">Senior living staff, music therapists, caregivers, and community organizations are welcome to start a conversation about a future educational pilot.</p><Link className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-900 px-6 py-3 font-bold text-white hover:bg-teal-800" to="/contact">Contact RagaMind <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link></PageContainer></section>

    <EducationalDisclaimer>RagaMind’s planned pilot activities are educational and community-based. They are not clinical music therapy, medical treatment, or a substitute for professional care.</EducationalDisclaimer>
  </>
}
