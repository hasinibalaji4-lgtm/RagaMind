import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Expert } from '../../types/expert'
import { ExpertPortrait } from './ExpertPortrait'

export function ExpertCard({ expert }: { expert: Expert }) {
  const approvedQuote = expert.interview.approvedQuotes.find((quote) => quote.status === 'approved')

  return <article className="grid border-t border-teal-900/20 py-10 md:grid-cols-[13rem_1fr] md:gap-10">
    <ExpertPortrait name={expert.name} src={expert.headshot} alt={expert.headshotAlt} hasApprovedImage={expert.permissions.headshot === 'approved'} />
    <div className="mt-7 md:mt-0">
      <div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-teal-900/20 bg-sage-100 px-3 py-1.5 text-sm font-bold text-teal-900">{expert.interview.status}</span><span className="text-sm text-teal-700">{expert.category ?? '[DISCIPLINE AWAITING VERIFICATION]'}</span></div>
      <h3 className="mt-5 font-display text-3xl font-bold">{expert.name}</h3>
      <p className="mt-2 text-sm font-semibold text-teal-700">{expert.title} · {expert.institution}</p>
      <p className="mt-5 leading-7 text-teal-800">{expert.biography}</p>
      <dl className="mt-6 grid gap-5 sm:grid-cols-2"><div><dt className="font-bold">Key themes</dt><dd className="mt-2 text-sm leading-6 text-teal-700">{expert.interview.keyThemes.length ? expert.interview.keyThemes.slice(0, 3).join(', ') : '[UP TO THREE APPROVED KEY THEMES NEEDED]'}</dd></div><div><dt className="font-bold">Approved quotation</dt><dd className="mt-2 text-sm leading-6 text-teal-700">{approvedQuote?.text ?? '[APPROVED QUOTATION NEEDED]'}</dd></div></dl>
      <Link className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-teal-900 underline decoration-gold-700 underline-offset-4" to={`/experts/${expert.slug}`}>Read interview <span className="sr-only">with {expert.name}</span><ArrowRight size={17} aria-hidden="true" /></Link>
    </div>
  </article>
}
