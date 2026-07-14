import { useMemo, useState } from 'react'
import { expertCategories } from '../../data/experts'
import type { Expert, ExpertCategory } from '../../types/expert'
import { ExpertCard } from './ExpertCard'

type CategoryFilter = 'All categories' | ExpertCategory

export function ExpertDirectory({ experts }: { experts: Expert[] }) {
  const [category, setCategory] = useState<CategoryFilter>('All categories')
  const visibleExperts = useMemo(() => category === 'All categories' ? experts : experts.filter((expert) => expert.category === category), [category, experts])

  return <>
    <label className="block max-w-xl"><span className="text-base font-bold">Filter perspectives by category</span><select className="mt-2 min-h-12 w-full border border-teal-900/30 bg-ivory px-3 py-3 text-base" value={category} onChange={(event) => setCategory(event.target.value as CategoryFilter)}><option>All categories</option>{expertCategories.map((option) => <option key={option}>{option}</option>)}</select></label>
    <p className="mt-5 text-sm text-teal-700" role="status" aria-live="polite">Showing {visibleExperts.length} {visibleExperts.length === 1 ? 'profile' : 'profiles'}.</p>
    {visibleExperts.length ? <div className="mt-5">{visibleExperts.map((expert) => <ExpertCard expert={expert} key={expert.id} />)}</div> : <div className="mt-8 border border-dashed border-teal-900/30 bg-white/35 p-8"><h3 className="font-display text-2xl font-bold">Perspectives in this area are currently being gathered.</h3><p className="mt-3 leading-7 text-teal-700">No approved profile is available in this category yet.</p></div>}
  </>
}
