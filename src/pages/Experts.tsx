import { BookOpenCheck, MessagesSquare, ScanText } from 'lucide-react'
import { ExpertCard } from '../components/expert/ExpertCard'
import { PerspectiveCard } from '../components/expert/PerspectiveCard'
import { EditorialInfoCard } from '../components/EditorialInfoCard'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'
import { expertPerspectives, experts } from '../data/experts'

const perspectiveRoles = [
  { title: 'Evidence', description: 'What research currently supports', icon: BookOpenCheck },
  { title: 'Expert Context', description: 'How researchers and clinicians interpret the field', icon: MessagesSquare },
  { title: 'Public Understanding', description: 'How RagaMind translates those ideas clearly', icon: ScanText },
]

export function Experts() {
  const featuredExperts = experts.filter((expert) => expert.interview.status === 'Confirmed').slice(0, 3)

  return <>
    <PageMeta title="Expert Perspectives" description="Educational conversations across neuroscience, music, aging, and community care." />

    <header className="border-b border-teal-900/10 py-16 sm:py-24">
      <PageContainer>
        <p className="text-sm font-bold uppercase tracking-[.2em] text-gold-700">Across disciplines</p>
        <h1 className="mt-5 font-display text-5xl font-bold sm:text-7xl">Expert Perspectives</h1>
        <p className="mt-7 max-w-4xl text-xl leading-8 text-teal-800">RagaMind includes educational interviews to explore practical questions that published literature may not fully address.</p>
        <p className="mt-6 max-w-4xl border-l-2 border-gold-700 pl-4 leading-7 text-teal-700">Expert commentary complements but does not replace published evidence. Quotations and profile details are published only after review and permission.</p>
      </PageContainer>
    </header>

    <section className="border-b border-burgundy/10 py-16 sm:py-20"><PageContainer><SectionHeading title="How Perspectives Contribute" /><div className="mt-9 grid gap-5 md:grid-cols-3">{perspectiveRoles.map((role) => <EditorialInfoCard key={role.title} {...role} />)}</div><p className="mt-7 max-w-4xl leading-7 text-text-secondary">Expert perspectives provide interpretation and context; they are not treated as equivalent to peer-reviewed evidence.</p></PageContainer></section>

    <section className="py-20 sm:py-24">
      <PageContainer>
        <SectionHeading title="Featured Interviews" subtitle="Published profiles will provide concise entry points to fully reviewed conversations." />
        {featuredExperts.length ? <div className="mt-10 grid gap-6 lg:grid-cols-2">{featuredExperts.map((expert) => <ExpertCard expert={expert} key={expert.id} />)}</div> : <div className="mt-8 max-w-4xl border-l-2 border-gold-700 bg-sage-100/55 p-6"><h3 className="font-display text-xl font-bold">Interviews are being prepared with care</h3><p className="mt-3 leading-7 text-teal-800">This collection will continue to grow as interviewees review and approve their profiles and words for publication. In the meantime, explore the disciplines guiding future conversations below.</p></div>}
      </PageContainer>
    </section>

    <section className="border-y border-teal-900/10 bg-sage-100/60 py-20 sm:py-24">
      <PageContainer>
        <SectionHeading title="Perspectives Across Disciplines" subtitle="These cards show where verified interviews are available and where perspectives are still being gathered." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{expertPerspectives.map((perspective) => <PerspectiveCard key={perspective.id} perspective={perspective} relatedExperts={experts.filter((expert) => perspective.relatedExpertIds.includes(expert.id))} />)}</div>
      </PageContainer>
    </section>

    <section className="py-16 sm:py-20">
      <PageContainer>
        <aside className="max-w-5xl rounded-2xl border border-teal-900/15 bg-white/60 p-6 sm:p-8" aria-labelledby="interview-standards-title">
          <h2 className="font-display text-2xl font-bold" id="interview-standards-title">Interview and publication standards</h2>
          <p className="mt-4 max-w-4xl leading-7 text-teal-800">Roles, institutions, biographies, and quotations require verification or approval before publication. Interviews provide educational perspectives; they do not establish clinical effectiveness, replace published evidence, or constitute medical advice.</p>
        </aside>
      </PageContainer>
    </section>
  </>
}
