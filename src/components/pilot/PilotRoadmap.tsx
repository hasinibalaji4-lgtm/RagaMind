import { Check, Circle, LoaderCircle } from 'lucide-react'
import type { PilotRoadmapGroup } from '../../types/pilot'

export function PilotRoadmap({ groups }: { groups: PilotRoadmapGroup[] }) {
  return <div className="mt-12 grid gap-6 lg:grid-cols-3">{groups.map((group) => {
    const Icon = group.status === 'Completed' ? Check : group.status === 'In progress' ? LoaderCircle : Circle
    return <section className="rounded-2xl border border-teal-900/15 bg-white/60 p-6 sm:p-7" key={group.id} aria-labelledby={`roadmap-${group.id}`}><div className="flex items-center gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-mauve bg-rose/20 text-teal-900"><Icon aria-hidden="true" size={19} /></span><h3 className="font-display text-2xl font-bold" id={`roadmap-${group.id}`}>{group.title}</h3></div><ul className="mt-6 space-y-4">{group.items.map((item) => <li className="flex gap-3 leading-7 text-teal-800" key={item}><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-700" aria-hidden="true" /><span>{item}</span></li>)}</ul></section>
  })}</div>
}
