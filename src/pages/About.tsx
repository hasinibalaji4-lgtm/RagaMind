import { Accessibility, BookOpenCheck, HeartHandshake, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PrincipleCard } from '../components/about/PrincipleCard'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'

const principles = [
  { title: 'Evidence', description: 'Scientific statements should be supported, carefully qualified, and connected to verified sources.', icon: BookOpenCheck },
  { title: 'Accessibility', description: 'Educational information should be understandable and usable by people with varied needs.', icon: Accessibility },
  { title: 'Cultural respect', description: 'Carnatic musical tradition should be represented with care and appropriate teacher review.', icon: HeartHandshake },
  { title: 'Community', description: 'The project should remain attentive to older adults, caregivers, educators, and community partners.', icon: UsersRound },
]

export function About() {
  return <>
    <PageMeta title="About RagaMind" description="Learn about RagaMind's purpose, founder story, guiding principles, and future direction." />

    <header className="border-b border-teal-900/10 py-20 sm:py-28">
      <PageContainer>
        <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">About the project</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-tight sm:text-7xl">About RagaMind</h1>
        <p className="mt-7 max-w-3xl text-xl leading-8 text-teal-800 sm:text-2xl sm:leading-9">An educational initiative exploring the intersection of Carnatic music, neuroscience, and healthy aging.</p>
      </PageContainer>
    </header>

    <section className="py-20 sm:py-24">
      <PageContainer className="grid gap-8 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
        <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Why RagaMind?</p>
        <div><SectionHeading title="Why RagaMind" /><div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-teal-800"><p>[FOUNDER-WRITTEN MISSION NEEDED] Describe how a long-standing connection to Carnatic music and curiosity about neuroscience shaped the project.</p><p>[FOUNDER-WRITTEN MISSION NEEDED] Explain the goal of connecting science, culture, healthy aging, and accessible education for caregivers and communities.</p></div></div>
      </PageContainer>
    </section>

    <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-24">
      <PageContainer className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div><SectionHeading title="Founder Story" /><p className="mt-5 text-sm leading-6 text-teal-700">Founder-reviewed wording is still required before publication.</p></div>
        <div className="max-w-3xl space-y-4 text-lg leading-8 text-teal-800"><p>[FOUNDER-WRITTEN STORY NEEDED] Connect more than thirteen years of Carnatic music training with an interest in neuroscience and medicine. Include chromesthesia only in the founder’s own approved words.</p><p>[FOUNDER-WRITTEN STORY NEEDED] Describe the motivation to make careful research more accessible and to build a project that can contribute to community conversations without presenting RagaMind as a medical service.</p></div>
      </PageContainer>
    </section>

    <section className="py-20 sm:py-24">
      <PageContainer><SectionHeading title="Guiding Principles" subtitle="Four standards guide how RagaMind learns, communicates, and grows." /><div className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">{principles.map((principle) => <PrincipleCard key={principle.title} {...principle} />)}</div></PageContainer>
    </section>

    <section className="bg-sage-100/65 py-20 sm:py-24">
      <PageContainer className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        <div><SectionHeading title="Looking Ahead" /></div>
        <div><p className="max-w-3xl text-lg leading-8 text-teal-800">RagaMind is intended to continue through expert interviews, Carnatic recordings, a future senior-living pilot, and expansion through the founder’s CAS project. [APPROVED FUTURE-PLAN DETAILS NEEDED]</p><Link className="mt-8 inline-flex min-h-11 items-center rounded-full bg-teal-900 px-6 py-3 font-bold text-white hover:bg-teal-800" to="/evidence">Explore the Evidence Hub</Link></div>
      </PageContainer>
    </section>
  </>
}
