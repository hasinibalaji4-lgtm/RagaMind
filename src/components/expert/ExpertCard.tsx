import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Expert } from '../../types/expert'

export function ExpertCard({ expert }: { expert: Expert }) {
  return <article className="flex h-full flex-col rounded-2xl border border-teal-900/15 bg-white/65 p-6 shadow-sm sm:p-7">
    <span className="self-start rounded-full border border-teal-900/20 bg-sage-100 px-3 py-1.5 text-sm font-bold text-teal-900">Interview status: {expert.interview.status}</span>
    <h3 className="mt-5 font-display text-3xl font-bold">{expert.name}</h3>
    <p className="mt-2 text-sm font-semibold leading-6 text-teal-700">{expert.title} · {expert.institution}</p>
    <p className="mt-5 leading-7 text-teal-800">{expert.interview.summary}</p>
    <div className="mt-5 flex-1"><h4 className="font-bold">Key themes</h4><p className="mt-2 text-sm leading-6 text-teal-700">{expert.interview.keyThemes.length ? expert.interview.keyThemes.slice(0, 3).join(', ') : '[UP TO THREE APPROVED KEY THEMES NEEDED]'}</p></div>
    <Link className="mt-7 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-teal-900 underline decoration-gold-700 underline-offset-4" to={`/experts/${expert.slug}`}>View interview <span className="sr-only">with {expert.name}</span><ArrowRight size={17} aria-hidden="true" /></Link>
  </article>
}
