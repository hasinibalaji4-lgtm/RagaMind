import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { researchCategories, researchEvidenceLabels, type ResearchCategory, type ResearchEvidenceLabel, type ResearchSource } from '../../data/research'
import { ResearchCard } from './ResearchCard'

type CategoryFilter = 'All' | ResearchCategory
type EvidenceFilter = 'All evidence' | ResearchEvidenceLabel

export function ResearchFilters({ sources }: { sources: ResearchSource[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<CategoryFilter>('All')
  const [evidence, setEvidence] = useState<EvidenceFilter>('All evidence')

  const filteredSources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return sources.filter((source) => {
      const searchable = [source.citation, source.category, source.evidenceLevel, source.summary, source.keyFinding].join(' ').toLowerCase()
      return (!normalizedQuery || searchable.includes(normalizedQuery)) && (category === 'All' || source.category === category) && (evidence === 'All evidence' || source.evidenceLabel === evidence)
    })
  }, [category, evidence, query, sources])

  return <>
    <form className="grid gap-5 rounded-2xl border border-teal-900/15 bg-sage-100/60 p-5 md:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_auto] xl:items-end" onSubmit={(event) => event.preventDefault()}>
      <label className="font-bold">Search sources<span className="relative mt-2 block"><Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-teal-700" size={19} /><input className="min-h-12 w-full border border-teal-900/30 bg-ivory py-3 pl-11 pr-3 text-base" onChange={(event) => setQuery(event.target.value)} placeholder="Search citations or topics" type="search" value={query} /></span></label>
      <label className="font-bold">Category<select className="mt-2 min-h-12 w-full border border-teal-900/30 bg-ivory px-3 py-3 text-base" onChange={(event) => setCategory(event.target.value as CategoryFilter)} value={category}><option>All</option>{researchCategories.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label className="font-bold">Evidence label<select className="mt-2 min-h-12 w-full border border-teal-900/30 bg-ivory px-3 py-3 text-base" onChange={(event) => setEvidence(event.target.value as EvidenceFilter)} value={evidence}><option>All evidence</option>{researchEvidenceLabels.map((item) => <option key={item}>{item}</option>)}</select></label>
      <button className="min-h-12 border border-teal-900 px-5 py-3 font-bold text-teal-900 hover:bg-ivory" onClick={() => { setQuery(''); setCategory('All'); setEvidence('All evidence') }} type="button">Clear filters</button>
    </form>
    <p aria-live="polite" className="mt-6 font-semibold text-teal-700" role="status">Showing {filteredSources.length} of {sources.length} sources.</p>
    {filteredSources.length ? <div className="mt-6 grid gap-6 lg:grid-cols-2">{filteredSources.map((source) => <ResearchCard key={source.id} source={source} />)}</div> : <div className="mt-6 border border-dashed border-teal-900/30 p-8"><h3 className="font-display text-xl font-bold">No matching sources</h3><p className="mt-2 text-teal-700">Try another search or clear the filters.</p></div>}
  </>
}
