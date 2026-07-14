import { CheckCircle2 } from 'lucide-react'
import { ExpertCard } from '../components/expert/ExpertCard'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'
import { experts, perspectivesBeingGathered, sharedInterviewQuestions } from '../data/experts'

const interviewProcess = [
  'Identify a relevant professional or community perspective.',
  'Prepare focused questions informed by research gaps.',
  'Conduct and document the educational conversation.',
  'Verify credentials, biography details, and context.',
  'Request approval before publishing quotations or interview material.',
]

export function Experts() {
  const confirmedExperts = experts.filter((expert) => expert.interview.status === 'Confirmed')
  return <>
    <PageMeta title="Expert Perspectives" description="Educational conversations across neuroscience, music, aging, and community care." />

    <header className="border-b border-teal-900/10 py-16 sm:py-24"><PageContainer><p className="text-sm font-bold uppercase tracking-[.2em] text-gold-700">Across disciplines</p><h1 className="mt-5 font-display text-5xl font-bold sm:text-7xl">Expert Perspectives</h1><p className="mt-7 max-w-4xl text-xl leading-8 text-teal-800">RagaMind includes educational interviews to explore practical questions that published literature may not fully address.</p><p className="mt-6 max-w-4xl border-l-2 border-gold-700 pl-4 leading-7 text-teal-700">Expert commentary complements but does not replace published evidence. Quotations and profile details are published only after review and permission.</p></PageContainer></header>

    <section className="py-20 sm:py-24"><PageContainer><SectionHeading title="Featured Conversations" subtitle="Full context belongs on each expert profile; this page provides one concise entry point per confirmed conversation." />{confirmedExperts.length ? <div className="mt-8">{confirmedExperts.map((expert) => <ExpertCard expert={expert} key={expert.id} />)}</div> : <p className="mt-8 border border-dashed border-teal-900/30 p-6 text-teal-700">No confirmed conversations are ready to display.</p>}</PageContainer></section>

    <section className="border-y border-teal-900/10 bg-sage-100/60 py-20 sm:py-24"><PageContainer><SectionHeading title="Perspectives Being Gathered" subtitle="These statuses describe areas where additional viewpoints are being sought; they do not imply that interviews have occurred." /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{perspectivesBeingGathered.map((item) => <article className="rounded-2xl border border-teal-900/15 bg-ivory p-6" key={item.discipline}><span className="text-sm font-bold text-gold-700">{item.status}</span><h3 className="mt-4 font-display text-xl font-bold">{item.discipline}</h3><p className="mt-3 leading-7 text-teal-800">{item.whyItMatters}</p></article>)}</div></PageContainer></section>

    <section className="py-20 sm:py-24"><PageContainer><SectionHeading title="How Interviews Are Used" subtitle="Interviews contribute qualitative educational perspective; they are not peer-reviewed research and do not establish clinical effectiveness." /><div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20"><div><h3 className="font-display text-2xl font-bold">Five-step process</h3><ol className="mt-5 space-y-4">{interviewProcess.map((step, index) => <li className="flex gap-3 leading-7" key={step}><span className="font-bold text-gold-700">{index + 1}.</span><span>{step}</span></li>)}</ol></div><div><h3 className="font-display text-2xl font-bold">Shared questions</h3><ol className="mt-5 space-y-4">{sharedInterviewQuestions.slice(0, 3).map((question) => <li className="border-t border-teal-900/15 pt-4 leading-7" key={question}>{question}</li>)}</ol></div></div><aside className="mt-12 rounded-2xl bg-sage-100 p-6 sm:p-8"><h3 className="font-display text-2xl font-bold">Publication standard</h3><ul className="mt-5 grid gap-4 sm:grid-cols-2">{['Quotations require permission before publication.', 'Roles, institutions, and biographies require verification.', 'Edited material should preserve its original meaning.', 'Private notes and contact details are not published.'].map((item) => <li className="flex gap-3 leading-7 text-teal-800" key={item}><CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-gold-700" /><span>{item}</span></li>)}</ul></aside></PageContainer></section>
  </>
}
