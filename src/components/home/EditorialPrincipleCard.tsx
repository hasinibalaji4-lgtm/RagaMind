import type { LucideIcon } from 'lucide-react'

type EditorialPrincipleCardProps = {
  description: string
  icon: LucideIcon
  title: string
  tone: string
  className?: string
}

export function EditorialPrincipleCard({ className = '', description, icon: Icon, title, tone }: EditorialPrincipleCardProps) {
  return (
    <article className={`rounded-2xl border border-teal-900/15 p-6 transition-[border-color,box-shadow] hover:border-teal-900/25 hover:shadow-soft sm:p-7 ${tone} ${className}`}>
      <div className="flex size-10 items-center justify-center rounded-full border border-teal-900/15 bg-ivory/80 text-teal-900">
        <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
      </div>
      <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-teal-950">{title}</h3>
      <p className="mt-3 leading-7 text-teal-800">{description}</p>
    </article>
  )
}
