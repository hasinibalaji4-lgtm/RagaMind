import { Check, Circle, LoaderCircle } from 'lucide-react'

const steps = [
  { title: 'Literature Review', status: 'Complete' },
  { title: 'Expert Interviews', status: 'In progress' },
  { title: 'Raga Selection and Recording', status: 'Upcoming' },
  { title: 'Senior Living Pilot', status: 'Upcoming' },
  { title: 'Community Expansion', status: 'Upcoming' },
] as const

export function JourneyTimeline() {
  return <ol className="grid gap-0 lg:grid-cols-5">{steps.map((step, index) => { const Icon = step.status === 'Complete' ? Check : step.status === 'In progress' ? LoaderCircle : Circle; return <li className="relative grid grid-cols-[2.75rem_1fr] gap-4 pb-8 lg:block lg:pb-0 lg:pr-6" key={step.title}><div className="absolute bottom-0 left-[1.35rem] top-11 w-px bg-teal-900/20 lg:left-6 lg:right-0 lg:top-6 lg:h-px lg:w-auto" aria-hidden="true" /><span className={`relative z-10 grid h-12 w-12 place-items-center rounded-full border ${step.status === 'Complete' ? 'border-teal-900 bg-teal-900 text-white' : step.status === 'In progress' ? 'border-gold bg-ivory text-gold' : 'border-teal-900/25 bg-ivory text-teal-700'}`}><Icon size={20} aria-hidden="true" /></span><div className="pt-1 lg:mt-6"><span className="text-xs font-bold uppercase tracking-[.15em] text-gold">Step {index + 1}</span><h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3><p className="mt-1 text-sm text-teal-700">{step.status}</p></div></li> })}</ol>
}
