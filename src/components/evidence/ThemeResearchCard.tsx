import type { ResearchSource } from '../../data/research'

const content = (source: ResearchSource) => <>
  <p className="font-semibold leading-6">{source.citation}</p>
  <p className="mt-2 text-sm text-teal-700">{source.evidenceLevel} · {source.evidenceLabel}</p>
  {source.url && <p className="mt-4 text-sm font-bold text-gold-700" aria-hidden="true">Read paper ↗</p>}
</>

export function ThemeResearchCard({ source }: { source: ResearchSource }) {
  const className = 'block min-h-full rounded-xl border border-teal-900/15 bg-white/55 p-4'
  if (!source.url) return <div className={className}>{content(source)}</div>

  return <a
    aria-label={`Read ${source.citation} (opens in a new tab)`}
    className={`${className} cursor-pointer transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-mauve hover:shadow-soft focus-visible:border-gold-700`}
    href={source.url}
    rel="noopener noreferrer"
    target="_blank"
  >{content(source)}</a>
}
