import { useEffect, useState, type MouseEvent } from 'react'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function BackToTop() {
  const [pastFirstViewport, setPastFirstViewport] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setPastFirstViewport(window.scrollY > window.innerHeight * 0.9)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)
    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting))
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  if (!pastFirstViewport || footerVisible) return null

  const returnToTop = (event: MouseEvent<HTMLButtonElement>) => {
    const heading = document.querySelector<HTMLElement>('main h1')
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    if (event.detail === 0) heading?.focus({ preventScroll: true })
  }

  return <button className="fixed bottom-4 right-4 z-40 inline-flex min-h-11 items-center rounded-full border border-teal-900/25 bg-teal-950 px-4 py-2 text-sm font-bold text-white shadow-soft hover:bg-teal-900 sm:bottom-6 sm:right-6" type="button" onClick={returnToTop}>Top</button>
}
