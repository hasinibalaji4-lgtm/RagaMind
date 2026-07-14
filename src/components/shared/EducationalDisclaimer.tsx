import { Info } from 'lucide-react'

export function EducationalDisclaimer({ children }: { children: string }) {
  return <aside aria-label="Educational disclaimer" className="bg-teal-950 py-12 text-white"><div className="mx-auto flex w-full max-w-7xl gap-4 px-5 sm:px-8 lg:px-12"><Info aria-hidden="true" className="mt-1 shrink-0 text-gold-700" /><p className="max-w-5xl text-lg leading-8">{children}</p></div></aside>
}
