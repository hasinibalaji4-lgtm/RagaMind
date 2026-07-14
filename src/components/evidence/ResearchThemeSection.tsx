import type { ResearchThemeContent } from '../../types/evidence'

export function ResearchThemeSection({ theme }: { theme: ResearchThemeContent }) {
  return <article className="border-t border-teal-900/20 py-10">
    <h3 className="font-display text-3xl font-bold">{theme.title}</h3>
    <p className="mt-4 max-w-4xl leading-7 text-teal-800">{theme.summary}</p>
    <div className="mt-6 grid gap-6 sm:grid-cols-2"><div><h4 className="font-bold">Key takeaways</h4><ul className="mt-3 space-y-2">{theme.takeaways.slice(0, 3).map((item) => <li className="leading-7 text-teal-700" key={item}>{item}</li>)}</ul></div><div><h4 className="font-bold">Important limitations</h4><ul className="mt-3 space-y-2">{theme.limitations.slice(0, 2).map((item) => <li className="leading-7 text-teal-700" key={item}>{item}</li>)}</ul></div></div>
    <a className="mt-6 inline-flex min-h-11 items-center font-bold text-teal-900 underline decoration-gold-700 underline-offset-4" href="#research-library">View related library records</a>
  </article>
}
