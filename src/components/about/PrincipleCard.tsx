import type { LucideIcon } from 'lucide-react'

interface PrincipleCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function PrincipleCard({ title, description, icon: Icon }: PrincipleCardProps) {
  return <article className="border-t border-teal-900/20 py-7">
    <Icon className="text-gold-700" aria-hidden="true" />
    <h3 className="mt-7 font-display text-2xl font-bold">{title}</h3>
    <p className="mt-3 leading-7 text-teal-800">{description}</p>
  </article>
}
