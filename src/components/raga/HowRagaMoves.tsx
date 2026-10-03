import { ArrowDown, ArrowUp, Music2 } from 'lucide-react'

export function HowRagaMoves() {
  return <aside className="mx-auto w-full max-w-md rounded-2xl border border-burgundy/20 bg-surface-cream p-6 sm:p-7" aria-labelledby="raga-movement-title">
    <h2 className="font-display text-2xl font-bold text-ink" id="raga-movement-title">How a Raga Moves</h2>
    <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
      <div><ArrowUp className="mx-auto h-5 w-5 text-gold-700" aria-hidden="true" /><p className="mt-2 font-bold text-burgundy">Arohanam</p><p className="mt-1 text-sm text-text-secondary">Ascending movement</p></div>
      <div className="grid h-20 w-20 place-items-center rounded-full border border-burgundy/20 bg-ivory text-burgundy"><div><Music2 className="mx-auto h-5 w-5" aria-hidden="true" /><span className="mt-1 block text-sm font-bold">Raga</span></div></div>
      <div><ArrowDown className="mx-auto h-5 w-5 text-gold-700" aria-hidden="true" /><p className="mt-2 font-bold text-burgundy">Avarohanam</p><p className="mt-1 text-sm text-text-secondary">Descending movement</p></div>
    </div>
    <p className="mt-6 border-t border-border-warm pt-4 text-sm leading-6 text-text-secondary">This illustration represents melodic movement conceptually and is not a notation of a specific raga.</p>
  </aside>
}
