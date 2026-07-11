import { PageContainer } from './PageContainer'

export function PlaceholderPage({ title, subtitle }: { title: string; subtitle: string }) {
  return <section className="py-20 sm:py-28"><PageContainer><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-gold">Page foundation</p><h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-6xl">{title}</h1><p className="mt-6 text-xl leading-8 text-teal-800">{subtitle}</p><div className="mt-10 rounded-3xl border border-dashed border-teal-900/30 bg-white/60 p-8"><h2 className="font-display text-2xl font-bold">Content coming soon</h2><p className="mt-3 text-teal-800">This placeholder establishes the page route and layout. Verified, reviewed content will be added in a future phase.</p></div></div></PageContainer></section>
}
