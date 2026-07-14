const disciplines = ['Neuroscience', 'Music therapy', 'Geriatric care', 'Carnatic music', 'Community practice', 'Listener experience']

export function DisciplineNetwork() {
  return <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
    <svg className="absolute inset-0 h-full w-full text-teal-900/20" viewBox="0 0 400 400" fill="none"><path d="m52 191 91-112 193 54-60 190-224-132Zm91-112 133 244m60-190L52 191m224 132 60-190" stroke="currentColor" strokeWidth="2" /></svg>
    {disciplines.map((discipline, index) => <span className={`absolute grid h-20 w-20 place-items-center rounded-full border border-teal-900/15 px-2 text-center text-xs font-bold ${index % 3 === 0 ? 'bg-teal-900 text-white' : index % 3 === 1 ? 'bg-sage-100 text-teal-950' : 'bg-ivory text-teal-950'} ${['left-[2%] top-[36%]', 'left-[27%] top-[3%]', 'right-[3%] top-[24%]', 'bottom-[3%] left-[24%]', 'bottom-[10%] right-[2%]', 'left-[42%] top-[41%]'][index]}`} key={discipline}>{discipline}</span>)}
  </div>
}
