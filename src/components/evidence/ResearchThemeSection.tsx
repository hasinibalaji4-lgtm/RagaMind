import type { ResearchThemeContent } from '../../types/evidence'

export function ResearchThemeSection({ theme }: { theme: ResearchThemeContent }) {
  const fields = [
    ['Plain-language introduction', theme.introduction],
    ['Key findings', theme.findings],
    ['Limitations', theme.limitations],
    ['Unanswered questions', theme.questions],
    ['Relevance to RagaMind', theme.relevance],
  ]

  return <article className="grid gap-8 border-t border-teal-900/20 py-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
    <div>
      <p className="text-sm font-bold uppercase tracking-[.18em] text-gold-700">{theme.sourceCount}-source review structure</p>
      <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{theme.title}</h3>
      <p className="mt-5 text-sm leading-6 text-teal-700">Source count is structural context only; no findings are represented until verified synthesis is inserted.</p>
    </div>
    <div>
      <dl className="grid gap-6 sm:grid-cols-2">{fields.map(([term, detail]) => <div key={term}><dt className="font-bold">{term}</dt><dd className="mt-2 leading-7 text-teal-700">{detail}</dd></div>)}</dl>
      <p className="mt-7 border-l-2 border-gold-700 pl-4 text-sm text-teal-700"><strong className="text-teal-950">Verified references:</strong> {theme.references}</p>
    </div>
  </article>
}
