import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useId, useState, type MouseEvent } from 'react'
import type { SectionProgressItem } from '../types/navigation'
import { BackToTop } from './BackToTop'

interface SectionProgressNavProps {
  items: SectionProgressItem[]
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function SectionProgressNav({ items }: SectionProgressNavProps) {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')
  const mobileListId = useId()
  const activeIndex = Math.max(0, items.findIndex((item) => item.id === activeId))
  const activeLabel = items[activeIndex]?.label ?? items[0]?.label ?? ''
  const progress = items.length > 1 ? (activeIndex / (items.length - 1)) * 100 : 0

  useEffect(() => {
    const sections = items.map((item) => document.getElementById(item.id)).filter((section): section is HTMLElement => section !== null)
    if (!sections.length || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (!visible.length) return
      const closest = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      setActiveId(closest.target.id)
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  const jumpTo = (id: string, event: MouseEvent<HTMLButtonElement>) => {
    const destination = document.getElementById(id)
    if (!destination) return
    setActiveId(id)
    setOpen(false)
    destination.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })

    // Keyboard and assistive-technology activation produces detail 0. Pointer users
    // retain their visual context without receiving a large programmatic focus cue.
    if (event.detail === 0) destination.focus({ preventScroll: true })
  }

  const itemButtons = (context: string) => items.map((item, index) => {
    const isActive = activeId === item.id
    const isComplete = index < activeIndex
    return <li className="relative" key={`${context}-${item.id}`}>
      <button className={`group flex min-h-11 w-full items-center gap-3 py-2 text-left text-[0.9375rem] leading-5 transition-colors ${isActive ? 'font-bold text-teal-950' : 'text-teal-700 hover:text-teal-950'}`} type="button" aria-current={isActive ? 'location' : undefined} onClick={(event) => jumpTo(item.id, event)}>
        <span className={`relative z-10 grid h-4 w-4 shrink-0 place-items-center rounded-full border-2 transition-colors ${isActive ? 'scale-110 border-teal-900 bg-teal-900 ring-2 ring-gold-700 ring-offset-2 ring-offset-ivory' : isComplete ? 'border-gold-700 bg-gold-700' : 'border-teal-700 bg-ivory'}`} aria-hidden="true">{isComplete && <Check size={10} className="text-ivory" strokeWidth={3} />}</span>
        <span className={`${isActive ? 'border-l-2 border-gold-700 pl-2' : 'pl-0'} transition-all`}>{item.label}</span>
      </button>
    </li>
  })

  return <aside className="contents lg:sticky lg:top-24 lg:block lg:self-start" aria-label="Section progress">
    <nav className="sticky top-20 z-30 px-5 py-2 sm:px-8 lg:hidden" aria-label="Jump to a section">
      <button className="flex min-h-14 max-w-full items-center gap-4 border border-teal-900/20 bg-ivory px-4 py-2 text-left shadow-soft" type="button" aria-expanded={open} aria-controls={mobileListId} onClick={() => setOpen((value) => !value)}><span className="min-w-0"><span className="block text-sm font-bold">Jump to section</span><span className="block truncate text-sm text-teal-700">Current: {activeLabel}</span></span><ChevronDown className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" /></button>
      <div className="absolute left-5 right-5 top-full max-h-[min(60vh,28rem)] overflow-y-auto border border-teal-900/20 bg-ivory p-3 shadow-soft sm:left-8 sm:right-8" id={mobileListId} hidden={!open}>
        <span className="absolute bottom-[1.375rem] left-[1.1875rem] top-[1.375rem] w-px bg-teal-900/20" aria-hidden="true" />
        <ul className="grid gap-1 pb-2">{itemButtons('mobile')}</ul>
      </div>
    </nav>
    <nav className="hidden px-3 py-3 lg:block" aria-label="Page sections">
      <h2 className="font-display text-lg font-bold">Page progress</h2>
      <div className="relative mt-4">
        <span className="absolute bottom-[1.375rem] left-[0.4375rem] top-[1.375rem] w-px bg-teal-900/20" aria-hidden="true"><span className="block w-full bg-gold-700 transition-[height] duration-300" style={{ height: `${progress}%` }} /></span>
        <ol className="grid gap-1">{itemButtons('desktop')}</ol>
      </div>
    </nav>
    <BackToTop />
  </aside>
}
