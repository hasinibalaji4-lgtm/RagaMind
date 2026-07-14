interface TimelineMilestoneProps {
  index: number
  title: string
  note: string
  isLast: boolean
}

export function TimelineMilestone({ index, title, note, isLast }: TimelineMilestoneProps) {
  return <li className="relative grid grid-cols-[3rem_1fr] gap-5 pb-10 sm:grid-cols-[4rem_1fr] sm:gap-7">
    {!isLast && <span className="absolute bottom-0 left-6 top-12 w-px bg-teal-900/20 sm:left-8" aria-hidden="true" />}
    <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-gold-700 bg-ivory font-display text-lg font-bold text-gold-700 sm:h-16 sm:w-16">{index + 1}<span className="sr-only"> of 7</span></span>
    <div className="pt-1 sm:pt-3">
      <h3 className="font-display text-2xl font-bold text-teal-950">{title}</h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-teal-700">{note}</p>
    </div>
  </li>
}
