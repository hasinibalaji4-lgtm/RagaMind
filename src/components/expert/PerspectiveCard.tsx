import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Expert, ExpertPerspective } from '../../types/expert'

export function PerspectiveCard({ perspective, relatedExperts }: { perspective: ExpertPerspective; relatedExperts: Expert[] }) {
  const hasInterviews = relatedExperts.length > 0
  return <article className={`group flex h-full flex-col rounded-2xl border border-teal-900/15 bg-ivory p-6 ${hasInterviews ? 'transition-colors hover:border-teal-900/30 focus-within:border-teal-900/30' : ''}`}>
    <h3 className="font-display text-xl font-bold">{perspective.category}</h3>
    <p className="mt-3 flex-1 leading-7 text-teal-800">{perspective.whyItMatters}</p>
    <div className={`mt-6 border-t border-teal-900/15 pt-4 ${hasInterviews ? 'transition-opacity [@media(hover:hover)]:lg:opacity-0 [@media(hover:hover)]:lg:group-hover:opacity-100 [@media(hover:hover)]:lg:group-focus-within:opacity-100' : ''}`}>
      <p className="text-sm font-bold text-gold-700">{perspective.status}</p>
      {relatedExperts.length ? <><p className="mt-2 text-sm leading-6 text-teal-700">Related: {relatedExperts.map((expert) => expert.name).join(', ')}</p><div className="mt-3 flex flex-wrap gap-3">{relatedExperts.map((expert) => <Link className="inline-flex min-h-11 items-center gap-2 font-bold text-teal-900 underline decoration-gold-700 underline-offset-4" key={expert.id} to={`/experts/${expert.slug}`}>View interviews <span className="sr-only">for {perspective.category}: {expert.name}</span><ArrowRight aria-hidden="true" size={16} /></Link>)}</div></> : <p className="mt-2 text-sm leading-6 text-teal-700">No verified interviewees are linked yet. Perspective being gathered.</p>}
    </div>
  </article>
}
