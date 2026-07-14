import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { researchThemeOptions } from '../../data/evidence'
import type { ResearchSource, ResearchTheme } from '../../types/evidence'
import { ResearchCard } from './ResearchCard'

type ThemeFilter = 'All themes' | ResearchTheme

export function ResearchFilters({ sources }: { sources: ResearchSource[] }) {
  const [query, setQuery] = useState('')
  const [theme, setTheme] = useState<ThemeFilter>('All themes')

  const filteredSources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return sources.filter((source) => {
      const matchesTheme = theme === 'All themes' || source.theme === theme
      const searchable = [source.title, source.authors, source.theme, source.citation].join(' ').toLowerCase()
      return matchesTheme && searchable.includes(normalizedQuery)
    })
  }, [query, sources, theme])

  return <>
    <form className="grid gap-5 border-y border-teal-900/15 py-7 md:grid-cols-[1fr_1fr_auto] md:items-end" onSubmit={(event) => event.preventDefault()}>
      <label className="block"><span className="text-sm font-bold">Search the research library</span><span className="relative mt-2 block"><Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-teal-700" size={19} aria-hidden="true" /><input className="min-h-12 w-full rounded-none border border-teal-900/30 bg-ivory py-3 pl-11 pr-3 text-base" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search placeholder records" /></span></label>
      <label className="block"><span className="text-sm font-bold">Filter by theme</span><select className="mt-2 min-h-12 w-full rounded-none border border-teal-900/30 bg-ivory px-3 py-3 text-base" value={theme} onChange={(event) => setTheme(event.target.value as ThemeFilter)}><option>All themes</option>{researchThemeOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
      <button className="min-h-12 border border-teal-900 px-5 py-3 font-semibold text-teal-900 hover:bg-sage-100" type="button" onClick={() => { setQuery(''); setTheme('All themes') }}>Clear filters</button>
    </form>
    <p className="mt-6 text-sm text-teal-700" role="status" aria-live="polite">Showing {filteredSources.length} placeholder {filteredSources.length === 1 ? 'record' : 'records'}.</p>
    {filteredSources.length > 0 ? <div className="mt-6 grid gap-6 lg:grid-cols-2">{filteredSources.map((source) => <ResearchCard key={source.id} source={source} />)}</div> : <div className="mt-6 border border-dashed border-teal-900/30 p-8"><h3 className="font-display text-xl font-bold">No matching records</h3><p className="mt-2 text-teal-700">Adjust the search or clear the filters. Verified sources have not yet been published.</p></div>}
  </>
}
