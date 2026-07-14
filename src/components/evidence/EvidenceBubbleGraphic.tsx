const bubbles = [
  ['Music', 'left-[4%] top-[38%] h-24 w-24 bg-teal-900 text-white'],
  ['Memory', 'left-[30%] top-[4%] h-20 w-20 bg-sage-100 text-teal-950'],
  ['Emotion', 'right-[8%] top-[24%] h-24 w-24 bg-gold text-teal-950'],
  ['Cognition', 'bottom-[4%] left-[24%] h-24 w-24 bg-sage-300 text-teal-950'],
  ['Culture', 'bottom-[10%] right-[6%] h-20 w-20 bg-teal-700 text-white'],
  ['Community', 'left-[41%] top-[37%] h-28 w-28 bg-ivory text-teal-950'],
]

export function EvidenceBubbleGraphic() {
  return <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
    <svg className="absolute inset-0 h-full w-full text-teal-900/20" viewBox="0 0 400 400" fill="none"><path d="M52 190 155 74l189 68-96 193L52 190Zm103-116 93 261m96-193L52 190m196 145 96-193" stroke="currentColor" strokeWidth="2" /></svg>
    {bubbles.map(([label, classes]) => <span className={`absolute grid place-items-center rounded-full border border-teal-900/15 text-xs font-bold shadow-soft ${classes}`} key={label}>{label}</span>)}
  </div>
}
