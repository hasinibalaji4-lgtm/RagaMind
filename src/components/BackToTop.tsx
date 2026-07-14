import { ArrowUp } from 'lucide-react'
import { useEffect, useState, type MouseEvent } from 'react'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const heading = document.querySelector('main h1')
    if (!heading) return
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { rootMargin: '-80px 0px 0px' })
    observer.observe(heading)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  const returnToTop = (event: MouseEvent<HTMLButtonElement>) => {
    const heading = document.querySelector<HTMLElement>('main h1')
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    if (event.detail === 0) heading?.focus({ preventScroll: true })
  }

  return <button className="fixed bottom-4 right-4 z-30 inline-flex min-h-12 items-center gap-2 border border-teal-900/25 bg-ivory px-4 py-3 text-sm font-semibold text-teal-900 shadow-soft hover:bg-sage-100 sm:bottom-6 sm:right-6 lg:static lg:mt-4 lg:w-full lg:justify-center lg:shadow-none" type="button" onClick={returnToTop}><ArrowUp size={18} aria-hidden="true" />Back to top</button>
}
