import { MessageSquareQuote } from 'lucide-react'
import type { ExpertInsight } from '../../types/expertInsight'

export function ExpertInsightCallout({ insight, className = '', headingLevel = 3 }: { insight: ExpertInsight; className?: string; headingLevel?: 3 | 4 }) {
  const titleClassName = 'mt-4 font-display text-2xl font-bold leading-tight text-teal-950'
  return <aside className={`rounded-2xl border border-mauve/55 bg-rose/20 p-6 sm:p-7 ${className}`} aria-label={`Expert perspective: ${insight.title}`}>
    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-gold-700"><MessageSquareQuote aria-hidden="true" size={18} />Expert perspective</p>
    {headingLevel === 4 ? <h4 className={titleClassName}>{insight.title}</h4> : <h3 className={titleClassName}>{insight.title}</h3>}
    <p className="mt-4 max-w-4xl text-lg leading-8 text-teal-900">{insight.text}</p>
    {insight.note && <div className="mt-5 border-l-2 border-gold-700 bg-yellow/30 p-4"><p className="font-bold text-teal-950">{insight.noteTitle}</p><p className="mt-2 leading-7 text-teal-800">{insight.note}</p></div>}
    <p className="mt-5 border-t border-mauve/40 pt-4 text-sm leading-6 text-teal-700"><span className="block font-bold uppercase tracking-[.12em] text-gold-700">Expert Perspective</span>{insight.attribution}</p>
  </aside>
}
