import type { ResearchSource } from '../../data/research'
import { EvidenceBadge } from './EvidenceBadge'

const interpretationByLabel = {
  'Stronger evidence': 'This source combines findings from multiple studies. Its conclusions are stronger than those of a single study, but variation among the included studies still matters.',
  'Emerging evidence': 'This source contributes an early or observational finding. It can guide future questions but does not establish a clinical effect or cause-and-effect relationship.',
  'Background context': 'This source explains scientific mechanisms, history, or musical context. It should not be interpreted as direct evidence that an intervention is effective.',
} as const

export function ResearchCard({ source }: { source: ResearchSource }) {
  return <article className="rounded-2xl border border-teal-900/15 bg-white/60 p-6 shadow-sm">
    <div className="flex flex-wrap items-center gap-3"><EvidenceBadge label={source.evidenceLabel} /><span className="text-sm font-semibold text-teal-700">{source.year}</span></div>
    <h3 className="mt-5 font-display text-xl font-bold leading-7 text-teal-950">
      {source.url ? <a
        aria-label={`Open article: ${source.citation} (opens in a new tab)`}
        className="rounded-sm text-inherit underline decoration-teal-800/40 decoration-[0.08em] underline-offset-[0.16em] transition-[text-decoration-thickness] hover:decoration-[0.12em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        href={source.url}
        rel="noopener noreferrer"
        target="_blank"
      >{source.citation}</a> : source.citation}
    </h3>
    <dl className="mt-5 grid gap-3 text-sm"><div><dt className="font-bold">Category</dt><dd className="mt-1 text-teal-700">{source.category}</dd></div><div><dt className="font-bold">Evidence type</dt><dd className="mt-1 text-teal-700">{source.evidenceLevel}</dd></div></dl>
    <div className="mt-5"><h4 className="font-bold">Key finding</h4><p className="mt-2 leading-7 text-teal-800">{source.keyFinding}</p></div>
    <details className="mt-6 border-t border-teal-900/15 pt-4"><summary className="min-h-11 cursor-pointer py-2 font-bold text-teal-900">Read full source details</summary><div className="mt-4 space-y-5"><div><h4 className="font-bold">Summary</h4><p className="mt-2 leading-7 text-teal-800">{source.summary}</p></div><div><h4 className="font-bold">Limitations</h4><ul className="mt-2 list-disc space-y-2 pl-5 text-teal-800">{source.limitations.map((item) => <li className="leading-7" key={item}>{item}</li>)}</ul></div><div><h4 className="font-bold">Relevance to RagaMind</h4><p className="mt-2 leading-7 text-teal-800">{source.relevance}</p></div><div className="rounded-xl bg-sage-100 p-4"><h4 className="font-bold">How to interpret this source</h4><p className="mt-2 leading-7 text-teal-800">{interpretationByLabel[source.evidenceLabel]}</p></div></div></details>
  </article>
}
