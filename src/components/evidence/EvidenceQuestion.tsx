import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import type { ResearchQuestion } from '../../types/evidence'
import { EvidenceBadge } from './EvidenceBadge'

export function EvidenceQuestion({ item }: { item: ResearchQuestion }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return <article className="border-t border-teal-900/20">
    <h3>
      <button className="flex min-h-20 w-full items-center justify-between gap-5 py-5 text-left" type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((value) => !value)}>
        <span className="font-display text-xl font-bold sm:text-2xl">{item.question}</span>
        <ChevronDown className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
    </h3>
    <div className="pb-8" id={panelId} hidden={!open}>
      <EvidenceBadge level={item.evidenceLevel} />
      <dl className="mt-6 grid gap-6 md:grid-cols-2">
        {[
          ['Concise answer', item.answer], ['Summary of findings', item.findings],
          ['Important limitations', item.limitations], ['Relevance to RagaMind', item.relevance],
        ].map(([term, detail]) => <div key={term}><dt className="font-bold text-teal-950">{term}</dt><dd className="mt-2 leading-7 text-teal-700">{detail}</dd></div>)}
      </dl>
      <p className="mt-6 border-l-2 border-gold-700 pl-4 text-sm text-teal-700"><strong className="text-teal-950">Citations:</strong> {item.citations}</p>
    </div>
  </article>
}
