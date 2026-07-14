import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface FeatureCardProps { title: string; description: string; to: string; icon: LucideIcon }

export function FeatureCard({ title, description, to, icon: Icon }: FeatureCardProps) {
  return <article className="group border-t border-teal-900/20 py-7 sm:py-8"><div className="flex items-start justify-between gap-6"><Icon className="text-gold" aria-hidden="true" /><ArrowUpRight className="text-teal-700 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" /></div><h3 className="mt-8 font-display text-2xl font-bold">{title}</h3><p className="mt-3 leading-7 text-teal-800">{description}</p><Link className="mt-6 inline-block font-semibold text-teal-900 underline decoration-gold underline-offset-4" to={to}><span className="sr-only">Explore </span>{title}</Link></article>
}
