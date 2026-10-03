export function RagaVisual({ name, index = 0 }: { name: string; index?: number }) {
  const positions = [
    'left-[12%] top-[18%] h-20 w-20', 'right-[10%] top-[14%] h-16 w-16',
    'bottom-[9%] left-[28%] h-24 w-24', 'bottom-[15%] right-[12%] h-20 w-20',
  ]

  return <div className="relative aspect-[4/3] overflow-hidden border border-teal-900/15 bg-sage-100/55" aria-hidden="true">
    <div className="absolute inset-[12%] rounded-full border border-gold/60" />
    <div className={`absolute rounded-full bg-teal-900/90 ${positions[index % positions.length]}`} />
    <div className="absolute bottom-[12%] right-[16%] h-16 w-16 rounded-full border-2 border-gold-700 bg-ivory" />
    <svg className="absolute inset-0 h-full w-full text-gold-700/60" viewBox="0 0 400 300" fill="none"><path d="M28 184c69-86 105 61 168-28s111-71 176 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
    <span className="sr-only">Decorative abstract artwork for {name}</span>
  </div>
}
