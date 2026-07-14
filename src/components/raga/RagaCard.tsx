import { ArrowRight, AudioLines } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Raga } from '../../types/raga'
import { RagaVisual } from './RagaVisual'

export function RagaCard({ raga, index }: { raga: Raga; index: number }) {
  return <article className="grid border-t border-teal-900/20 py-8 sm:grid-cols-[12rem_1fr] sm:gap-8 lg:block">
    <div><RagaVisual name={raga.name} index={index} /><p className="mt-2 text-sm leading-6 text-teal-700">[APPROVED IMAGE OR ABSTRACT VISUAL NEEDED]</p></div>
    <div className="mt-6 sm:mt-0 lg:mt-6">
      <p className="text-sm font-bold uppercase tracking-[.16em] text-gold-700">{raga.experienceTheme}</p>
      <h3 className="mt-3 font-display text-3xl font-bold">{raga.name}</h3>
      <p className="mt-4 leading-7 text-teal-800">{raga.shortDescription}</p>
      <p className="mt-4 text-sm leading-6 text-teal-700">Emotional responses vary by listener and context.</p>
      <div className="mt-6 flex items-center gap-2 text-sm text-teal-700"><AudioLines size={18} aria-hidden="true" /><span>3–5 minute recording coming soon</span></div>
      <Link className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-teal-900 underline decoration-gold-700 underline-offset-4" to={`/ragas/${raga.slug}`}>Explore {raga.name} <ArrowRight size={17} aria-hidden="true" /></Link>
    </div>
  </article>
}
