import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const frame = window.requestAnimationFrame(() => {
      document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  return null
}
