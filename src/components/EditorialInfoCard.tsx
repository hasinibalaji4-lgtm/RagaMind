import type { LucideIcon } from 'lucide-react'

type EditorialInfoCardProps = {
  description: string
  icon: LucideIcon
  title: string
  className?: string
}

export function EditorialInfoCard({ className = '', description, icon: Icon, title }: EditorialInfoCardProps) {
  return <article className={`rounded-2xl border border-burgundy/15 bg-surface-cream p-5 sm:p-6 ${className}`}>
    <Icon className="h-5 w-5 text-gold-700" strokeWidth={1.8} aria-hidden="true" />
    <h3 className="mt-4 text-sm font-bold uppercase tracking-[.14em] text-burgundy">{title}</h3>
    <p className="mt-3 leading-7 text-text-secondary">{description}</p>
  </article>
}
