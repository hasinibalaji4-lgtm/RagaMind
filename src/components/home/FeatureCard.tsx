import type { LucideIcon } from 'lucide-react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface FeatureCardProps { title: string; description: string; to: string; icon: LucideIcon }

export function FeatureCard({ title, description, to, icon: Icon }: FeatureCardProps) {
  return <Link className="group block h-full rounded-xl focus-visible:ring-offset-4" to={to}><article className="h-full border-t border-teal-900/20 px-1 py-7 transition-[transform,border-color,box-shadow] group-hover:-translate-y-1 group-hover:border-burgundy/50 group-hover:shadow-[0_12px_24px_-18px_rgba(60,30,35,.45)] sm:py-8"><div className="flex items-start justify-between gap-6"><Icon className="text-gold" aria-hidden="true" /><ArrowUpRight className="text-teal-700 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" /></div><h3 className="mt-8 font-display text-2xl font-bold">{title}</h3><p className="mt-3 leading-7 text-teal-800">{description}</p><span className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-900 underline decoration-gold underline-offset-4">Explore <ArrowRight className="h-4 w-4" aria-hidden="true" /></span></article></Link>
}
