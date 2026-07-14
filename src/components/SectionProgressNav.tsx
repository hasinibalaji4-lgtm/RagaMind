import { ChevronDown } from 'lucide-react'
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
    const isMobile = context === 'mobile'
    return <li className="relative" key={`${context}-${item.id}`}>
      <button className={`group flex w-full items-center text-left leading-5 transition-colors ${isMobile ? 'min-h-11 gap-3 py-2 text-[0.9375rem]' : 'min-h-9 gap-2 py-1.5 text-[0.8125rem]'} ${isActive ? 'font-semibold text-teal-950' : 'font-normal text-teal-700 hover:text-teal-950'}`} type="button" aria-current={isActive ? 'location' : undefined} onClick={(event) => jumpTo(item.id, event)}>
        <span className={`relative z-10 shrink-0 rounded-full border transition-[width,height,background-color] ${isActive ? 'h-3 w-3 border-teal-900 bg-teal-900' : isComplete ? 'h-2.5 w-2.5 border-gold-700 bg-gold-700' : 'h-2.5 w-2.5 border-teal-700 bg-ivory'}`} aria-hidden="true" />
        <span>{item.label}</span>
      </button>
    </li>
  })

  return <aside className="contents 2xl:absolute 2xl:inset-y-0 2xl:left-4 2xl:z-20 2xl:block 2xl:w-24 min-[1700px]:w-40">
    <nav className="sticky top-20 z-30 px-5 py-2 sm:px-8 2xl:hidden" aria-label="Jump to a section">
      <button className="flex min-h-14 max-w-full items-center gap-4 border border-teal-900/20 bg-ivory px-4 py-2 text-left shadow-soft" type="button" aria-expanded={open} aria-controls={mobileListId} onClick={() => setOpen((value) => !value)}><span className="min-w-0"><span className="block text-sm font-bold">Jump to section</span><span className="block truncate text-sm text-teal-700">Current: {activeLabel}</span></span><ChevronDown className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" /></button>
      <div className="absolute left-5 right-5 top-full max-h-[min(60vh,28rem)] overflow-y-auto border border-teal-900/20 bg-ivory p-3 shadow-soft sm:left-8 sm:right-8" id={mobileListId} hidden={!open}>
        <span className="absolute bottom-[1.375rem] left-[1.2rem] top-[1.375rem] w-px bg-teal-900/20" aria-hidden="true" />
        <ul className="grid gap-1 pb-2">{itemButtons('mobile')}</ul>
      </div>
    </nav>
    <nav className="sticky top-1/2 hidden -translate-y-1/2 py-3 2xl:block" aria-label="Page sections">
      <div className="relative">
        <span className="absolute bottom-[1.125rem] left-[0.3rem] top-[1.125rem] w-px bg-teal-900/15" aria-hidden="true" />
        <ol>{itemButtons('desktop')}</ol>
      </div>
    </nav>
    <BackToTop />
  </aside>
}
