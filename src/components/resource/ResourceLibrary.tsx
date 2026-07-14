import { useMemo, useState } from 'react'
import { resources, resourceAudiences, resourceTopics, resourceTypes } from '../../data/resources'
import type { ResourceAudience } from '../../types/resource'
import { ResourceCard } from './ResourceCard'

const controlClassName = 'mt-2 w-full rounded-xl border border-sage-300 bg-white px-4 py-3 text-teal-950'

interface ResourceLibraryProps {
  audience: ResourceAudience | ''
  onAudienceChange: (audience: ResourceAudience | '') => void
}

export function ResourceLibrary({ audience, onAudienceChange }: ResourceLibraryProps) {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('')
  const [type, setType] = useState('')

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return resources.filter((resource) => {
      const searchableText = [resource.title, resource.organization, resource.description, ...resource.topics].join(' ').toLowerCase()
      return (!normalizedQuery || searchableText.includes(normalizedQuery))
        && (!audience || resource.audience.includes(audience as never))
        && (!topic || resource.topics.includes(topic as never))
        && (!type || resource.type === type)
    })
  }, [audience, query, topic, type])

  const hasFilters = Boolean(query || audience || topic || type)

  return (
    <div className="mt-8">
      <div className="rounded-3xl border border-sage-300 bg-sage-100/70 p-5 sm:p-7">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <label className="font-bold text-teal-950">Search resources
            <input className={controlClassName} onChange={(event) => setQuery(event.target.value)} placeholder="Search by keyword" type="search" value={query} />
          </label>
          <label className="font-bold text-teal-950">Audience
            <select className={controlClassName} onChange={(event) => onAudienceChange(event.target.value as ResourceAudience | '')} value={audience}><option value="">All audiences</option>{resourceAudiences.map((item) => <option key={item}>{item}</option>)}</select>
          </label>
          <label className="font-bold text-teal-950">Topic
            <select className={controlClassName} onChange={(event) => setTopic(event.target.value)} value={topic}><option value="">All topics</option>{resourceTopics.map((item) => <option key={item}>{item}</option>)}</select>
          </label>
          <label className="font-bold text-teal-950">Resource type
            <select className={controlClassName} onChange={(event) => setType(event.target.value)} value={type}><option value="">All types</option>{resourceTypes.map((item) => <option key={item}>{item}</option>)}</select>
          </label>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p aria-live="polite" className="font-semibold text-teal-900" role="status">{results.length} {results.length === 1 ? 'resource' : 'resources'} found</p>
          {hasFilters && <button className="rounded-full border border-teal-900 px-4 py-2 font-bold text-teal-900 hover:bg-white" onClick={() => { setQuery(''); onAudienceChange(''); setTopic(''); setType('') }} type="button">Clear filters</button>}
        </div>
      </div>
      {results.length > 0 ? <div className="mt-6 grid gap-5 md:grid-cols-2">{results.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}</div> : <div className="mt-6 rounded-2xl border border-dashed border-sage-700 p-8 text-center"><p className="font-display text-xl font-bold text-teal-950">Verified resources will be added here.</p><p className="mt-2 text-teal-800">Every listing will be reviewed before publication.</p></div>}
    </div>
  )
}
