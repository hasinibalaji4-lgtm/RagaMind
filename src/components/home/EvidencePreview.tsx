interface EvidenceItem { topic: string; level: string }

const items: EvidenceItem[] = [
  { topic: 'Mood and emotional well-being', level: 'Strong' },
  { topic: 'Depressive symptoms', level: 'Moderate to Strong' },
  { topic: 'Cognition and active participation', level: 'Emerging to Moderate' },
  { topic: 'Carnatic-specific applications', level: 'Emerging' },
]

export function EvidencePreview() {
  return <div className="divide-y divide-teal-900/15 border-y border-teal-900/15">{items.map((item, index) => <div className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-5" key={item.topic}><span className="hidden font-display text-lg text-gold sm:block" aria-hidden="true">0{index + 1}</span><p className="font-semibold text-teal-950">{item.topic}</p><p className="text-sm font-bold text-sage-700"><span className="font-normal text-teal-700">Evidence level: </span>{item.level}</p></div>)}</div>
}
