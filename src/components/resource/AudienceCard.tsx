import type { LucideIcon } from 'lucide-react'

interface AudienceCardProps {
  title: string
  description: string
  targetId: string
  icon: LucideIcon
}

export function AudienceCard({ title, description, targetId, icon: Icon }: AudienceCardProps) {
  function moveToSection(isKeyboardActivation: boolean) {
    const target = document.getElementById(targetId)
    if (!target) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    if (isKeyboardActivation) target.focus({ preventScroll: true })
  }

  return (
    <button
      className="group w-full rounded-3xl border border-sage-300 bg-white/70 p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-gold-700 hover:shadow-md"
      onClick={(event) => moveToSection(event.detail === 0)}
      type="button"
    >
      <Icon aria-hidden="true" className="h-6 w-6 text-gold-700" strokeWidth={1.7} />
      <span className="mt-5 block font-display text-xl font-bold text-teal-950">{title}</span>
      <span className="mt-2 block leading-relaxed text-teal-800">{description}</span>
      <span className="mt-5 inline-block text-sm font-bold text-teal-900 group-hover:underline">View this path</span>
    </button>
  )
}
