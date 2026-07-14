import { UserRound } from 'lucide-react'

export function ExpertPortrait({ name, hasApprovedImage = false, src, alt }: { name: string; hasApprovedImage?: boolean; src?: string; alt: string }) {
  if (hasApprovedImage && src) return <img className="aspect-[4/5] w-full object-cover" src={src} alt={alt} />

  return <div className="grid aspect-[4/5] w-full place-items-center border border-dashed border-teal-900/25 bg-sage-100/55 px-5 text-center text-teal-700" role="img" aria-label={`Headshot placeholder for ${name}. Image publication permission is pending.`}><div><UserRound className="mx-auto text-gold-700" size={42} aria-hidden="true" /><p className="mt-5 text-sm leading-6">Headshot awaiting permission</p></div></div>
}
