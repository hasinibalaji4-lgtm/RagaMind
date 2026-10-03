const stages = ['Research', 'Design', 'Record', 'Test', 'Learn', 'Refine']

export function PilotProcessGraphic({ currentStage = 'Design' }: { currentStage?: (typeof stages)[number] }) {
  return (
    <div className="mt-10" role="img" aria-label={`Pilot roadmap: Research, Design, Record, Test, Learn, and Refine. Current stage: ${currentStage}.`}>
      <ol className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {stages.map((stage, index) => {
          const isCurrent = stage === currentStage
          return <li className={`relative rounded-2xl border p-4 text-center ${isCurrent ? 'border-burgundy bg-burgundy text-white' : 'border-border-warm bg-ivory text-ink'}`} key={stage}><span className="block text-xs font-bold uppercase tracking-widest opacity-75">0{index + 1}</span><span className="mt-2 block font-semibold">{stage}{isCurrent && <span className="block text-xs font-normal">Current stage</span>}</span>{index < stages.length - 1 && <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl text-gold-700 lg:block" aria-hidden="true">→</span>}</li>
        })}
      </ol>
    </div>
  )
}
