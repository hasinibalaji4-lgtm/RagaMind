import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { ResourceLibrary } from '../components/resource/ResourceLibrary'
import { SectionHeading } from '../components/SectionHeading'
import type { ResourceAudience } from '../types/resource'

const audiences: { label: string; value: ResourceAudience }[] = [
  { label: 'Older Adults', value: 'Older Adults' },
  { label: 'Caregivers and Families', value: 'Caregivers' },
  { label: 'Students and Educators', value: 'Students and Educators' },
  { label: 'Senior Living Communities', value: 'Senior Living' },
  { label: 'Musicians and Music Therapists', value: 'Musicians and Therapists' },
  { label: 'Researchers', value: 'Researchers' },
]

const resourceTypes = [
  ['Music therapy', 'A credentialed professional service. [VERIFIED CREDENTIALING DETAILS NEEDED]'],
  ['Recreational music', 'Music participation for enjoyment, engagement, or community rather than clinical care.'],
  ['Personal listening', 'Music selected according to an individual’s preferences and comfort.'],
  ['RagaMind educational content', 'Music and cultural context presented for learning, not as therapy or treatment.'],
]

export function Resources() {
  const [audience, setAudience] = useState<ResourceAudience | ''>('')

  function chooseAudience(value: ResourceAudience) {
    setAudience(value)
    document.getElementById('resource-library')?.focus()
  }

  return <>
    <PageMeta title="Resources" description="Trusted educational and community starting points for caregivers, older adults, students, educators, and community organizations." />

    <header className="border-b border-teal-900/10 py-20 sm:py-28"><PageContainer><p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Practical next steps</p><h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-tight sm:text-7xl">Resources</h1><p className="mt-7 max-w-4xl text-xl leading-8 text-teal-800 sm:text-2xl sm:leading-9">Trusted starting points for caregivers, older adults, students, educators, and community organizations.</p><p className="mt-6 max-w-4xl leading-7 text-teal-700">Every external listing should be independently verified before publication. Inclusion does not imply endorsement, and visitors should confirm current details directly with the source.</p></PageContainer></header>

    <section className="py-20 sm:py-24"><PageContainer><SectionHeading title="Start by Audience" subtitle="Choose an audience to apply that filter to the single resource library." /><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{audiences.map((item) => <button className={`min-h-14 rounded-xl border px-5 py-4 text-left font-bold transition-colors ${audience === item.value ? 'border-teal-900 bg-teal-900 text-white' : 'border-sage-300 bg-white/60 text-teal-900 hover:bg-sage-100'}`} key={item.value} onClick={() => chooseAudience(item.value)} type="button" aria-pressed={audience === item.value}>{item.label}<span className="mt-1 block text-sm font-normal">View resources</span></button>)}</div></PageContainer></section>

    <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-24"><PageContainer><SectionHeading id="resource-library" title="Resource Library" subtitle="Search and filter one verified collection. The empty state remains until real resources have completed review." /><ResourceLibrary audience={audience} onAudienceChange={setAudience} /></PageContainer></section>

    <section className="py-20 sm:py-24"><PageContainer><SectionHeading title="Guidance and Standards" /><div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16"><article><h3 className="font-display text-2xl font-bold">Understanding resource types</h3><dl className="mt-5 space-y-5">{resourceTypes.map(([term, detail]) => <div className="border-t border-teal-900/15 pt-4" key={term}><dt className="font-bold">{term}</dt><dd className="mt-2 leading-7 text-teal-800">{detail}</dd></div>)}</dl></article><div className="space-y-10"><article><h3 className="font-display text-2xl font-bold">When professional help is needed</h3><p className="mt-4 leading-7 text-teal-800">Contact a qualified healthcare professional for new or worsening cognitive, behavioral, or mood concerns, and use local emergency services for urgent safety concerns. RagaMind cannot provide diagnosis, crisis support, or medical treatment.</p></article><article><h3 className="font-display text-2xl font-bold">How resources are selected</h3><ul className="mt-4 grid gap-3 sm:grid-cols-2" role="list">{['Source credibility', 'Accessibility', 'Scientific accuracy', 'Cultural respect', 'Date last verified'].map((item) => <li className="border-l-2 border-gold-700 pl-4 leading-7" key={item}>{item}</li>)}</ul></article></div></div><div className="mt-12 flex flex-wrap gap-5"><Link className="inline-flex min-h-11 items-center font-bold text-teal-900 underline decoration-gold-700 underline-offset-4" to="/contact">Suggest a correction</Link><Link className="inline-flex min-h-11 items-center font-bold text-teal-900 underline decoration-gold-700 underline-offset-4" to="/evidence">Visit the Evidence Hub for detailed research</Link></div><p className="mt-8 max-w-5xl rounded-2xl bg-sage-100 p-6 text-lg leading-8 text-teal-900">RagaMind provides educational resources only. Inclusion of an external resource does not imply endorsement. Information may change over time, and visitors should verify current details directly with the source.</p></PageContainer></section>
  </>
}
