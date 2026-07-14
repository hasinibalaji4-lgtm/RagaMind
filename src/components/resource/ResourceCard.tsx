import { ExternalLink } from 'lucide-react'
import type { Resource } from '../../types/resource'

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="rounded-2xl border border-sage-300 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-sage-700">
        <span>{resource.type}</span><span aria-hidden="true">·</span><span>{resource.region}</span>
      </div>
      <h3 className="mt-3 font-display text-xl font-bold text-teal-950">{resource.title}</h3>
      <p className="mt-1 text-sm font-semibold text-teal-800">{resource.organization}</p>
      <p className="mt-4 leading-relaxed text-teal-800">{resource.description}</p>
      <p className="mt-4 text-sm text-teal-800"><span className="font-bold">Accessibility:</span> {resource.accessibilityNotes}</p>
      {resource.verifiedDate && <p className="mt-2 text-sm text-teal-800"><span className="font-bold">Date verified:</span> {resource.verifiedDate}</p>}
      {resource.verificationStatus === 'verified' && resource.externalUrl && (
        <a className="mt-5 inline-flex items-center gap-2 font-bold text-teal-900 underline decoration-gold-700 decoration-2 underline-offset-4" href={resource.externalUrl} rel="noreferrer" target="_blank">
          Visit external resource <ExternalLink aria-hidden="true" className="h-4 w-4" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </article>
  )
}
