import { ExternalLink } from 'lucide-react'
import type { ResearchSource } from '../../types/evidence'

export function ResearchCard({ source }: { source: ResearchSource }) {
  return <article className="border border-teal-900/15 bg-white/45 p-6 transition-shadow hover:shadow-soft focus-within:shadow-soft">
    <div className="flex flex-wrap items-start justify-between gap-3"><span className="rounded-full bg-sage-100 px-3 py-1 text-xs font-bold text-teal-900">Placeholder entry</span><span className="text-sm text-teal-700">{source.year}</span></div>
    <h3 className="mt-5 font-display text-2xl font-bold">{source.title}</h3>
    <p className="mt-2 text-sm text-teal-700">{source.authors} · {source.sourceType}</p>
    <p className="mt-4 text-sm font-semibold text-sage-700">Theme: {source.theme}</p>
    <dl className="mt-6 grid gap-5">
      {[
        ['Summary', source.summary], ['Key finding', source.keyFinding], ['Limitations', source.limitations],
        ['Relevance to RagaMind', source.relevance], ['Citation', source.citation],
      ].map(([term, detail]) => <div key={term}><dt className="text-sm font-bold">{term}</dt><dd className="mt-1 text-sm leading-6 text-teal-700">{detail}</dd></div>)}
    </dl>
    {source.externalLink ? <a className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-teal-900 underline decoration-gold-700 underline-offset-4" href={source.externalLink} target="_blank" rel="noreferrer">View verified source <ExternalLink size={16} aria-hidden="true" /></a> : <p className="mt-6 text-sm text-teal-700">[DIRECT SOURCE LINK NEEDED]</p>}
  </article>
}
