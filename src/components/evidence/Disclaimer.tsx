import { Info } from 'lucide-react'

export function Disclaimer() {
  return <aside className="border border-teal-900/20 bg-sage-100/70 p-6 sm:p-8" aria-labelledby="medical-disclaimer-title">
    <Info className="text-teal-800" aria-hidden="true" />
    <h2 className="mt-5 font-display text-2xl font-bold" id="medical-disclaimer-title">Medical disclaimer</h2>
    <p className="mt-3 max-w-4xl leading-7 text-teal-800">RagaMind provides educational information only. It is not medical advice and should not replace consultation with qualified healthcare professionals.</p>
  </aside>
}
