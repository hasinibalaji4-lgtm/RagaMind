import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'
import { helpfulResourceCategories, resources } from '../data/resources'

const resourcePathways = [
  { title: 'Research', description: 'Peer-reviewed studies and evidence-focused organizations.', icon: BookOpenCheck },
  { title: 'Clinical Information', description: 'Independent health information from established clinical sources.', icon: Hospital },
  { title: 'Healthy Aging', description: 'Resources supporting well-being and engagement across later life.', icon: Sprout },
  { title: 'Caregiver Support', description: 'Practical information for families, caregivers, and care communities.', icon: HeartHandshake },
]

export function Resources() {
  const verifiedResources = resources.filter((resource) => resource.verificationStatus === 'verified' && resource.externalUrl)

  return <>
    <PageMeta title="Helpful Resources" description="Independent starting points for dementia, healthy aging, music and health research, and caregiver support." />
    <header className="border-b border-teal-900/10 py-20 sm:py-28"><PageContainer><p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Independent starting points</p><h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-tight sm:text-7xl">Helpful Resources</h1><p className="mt-7 max-w-4xl text-xl leading-8 text-teal-800 sm:text-2xl sm:leading-9">RagaMind is designed as an educational starting point. These independent organizations provide additional information about dementia, healthy aging, caregiving, and current research.</p></PageContainer></header>

    <section className="border-b border-burgundy/10 py-16 sm:py-20"><PageContainer><SectionHeading title="Trusted Information Pathways" /><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{resourcePathways.map((pathway) => <EditorialInfoCard key={pathway.title} {...pathway} />)}</div></PageContainer></section>

    <section className="py-20 sm:py-24"><PageContainer><SectionHeading title="Explore by Topic" subtitle="Only independently verified external resources are published." /><div className="mt-10 grid gap-5 sm:grid-cols-2">{helpfulResourceCategories.map((category) => <article className="rounded-2xl border border-rose/70 bg-peach/20 p-6 sm:p-7" key={category.title}><h3 className="font-display text-2xl font-bold">{category.title}</h3><p className="mt-3 leading-7 text-teal-800">{category.description}</p></article>)}</div>
      {verifiedResources.length > 0 ? <ul className="mt-10 grid gap-5 sm:grid-cols-2">{verifiedResources.map((resource) => <li key={resource.id}><a aria-label={`Visit ${resource.title} (opens in a new tab)`} className="block min-h-full rounded-2xl border border-teal-900/15 bg-white/60 p-6 transition-colors hover:border-mauve" href={resource.externalUrl} rel="noopener noreferrer" target="_blank"><p className="font-display text-xl font-bold underline decoration-mauve underline-offset-4">{resource.title}</p><p className="mt-2 text-sm font-semibold text-teal-700">{resource.organization}</p><p className="mt-4 leading-7 text-teal-800">{resource.description}</p><p className="mt-4 text-sm font-bold text-gold-700" aria-hidden="true">Visit resource ↗</p></a></li>)}</ul> : <div className="mt-10 max-w-4xl border-l-2 border-gold-700 bg-yellow/25 p-6"><h3 className="font-display text-xl font-bold">The collection is being reviewed</h3><p className="mt-3 leading-7 text-teal-800">Verified organizations will be added as this focused collection develops. No placeholder or unverified links are shown.</p></div>}
    </PageContainer></section>

    <section className="border-t border-teal-900/10 bg-sage-100/60 py-12 sm:py-14"><PageContainer><h2 className="font-display text-2xl font-bold">External resource disclaimer</h2><p className="mt-4 max-w-4xl leading-7 text-teal-800">RagaMind does not endorse every statement or recommendation made by external organizations. Information can change, so visitors should confirm current guidance directly with each source.</p></PageContainer></section>
  </>
}
import { BookOpenCheck, HeartHandshake, Hospital, Sprout } from 'lucide-react'
import { EditorialInfoCard } from '../components/EditorialInfoCard'
