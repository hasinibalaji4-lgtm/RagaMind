import type { PilotPhase } from '../../types/pilot'
import { StatusBadge } from '../shared/StatusBadge'

export function PilotPhaseTimeline({ phases }: { phases: PilotPhase[] }) {
  return <ol className="mt-12">{phases.map((phase, index) => <li className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 pb-10 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-7 lg:grid-cols-[4rem_minmax(0,1fr)]" key={phase.id}>{index < phases.length - 1 && <span aria-hidden="true" className="absolute bottom-0 left-[1.35rem] top-11 w-px bg-teal-900/20 sm:left-[1.72rem] lg:left-8" />}<span aria-hidden="true" className="relative z-10 grid h-11 w-11 place-items-center rounded-full border-2 border-gold-700 bg-ivory font-bold text-gold-700 sm:h-14 sm:w-14 lg:h-16 lg:w-16">{index + 1}</span><article className="rounded-2xl border border-teal-900/15 bg-white/65 p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-3"><h3 className="font-display text-xl font-bold sm:text-2xl">{phase.title}</h3><StatusBadge status={phase.status} /></div><p className="mt-4 max-w-3xl leading-7 text-teal-800">{phase.description}</p></article></li>)}</ol>
}
