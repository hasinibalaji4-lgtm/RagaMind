import { Menu, Music2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../data/navigation'
import { PageContainer } from './PageContainer'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) => `block rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-sage-100 text-teal-950' : 'text-teal-900 hover:bg-white'}`
  return <header className="sticky top-0 z-40 border-b border-teal-900/10 bg-ivory/95 backdrop-blur"><PageContainer className="flex min-h-20 items-center justify-between gap-4"><NavLink to="/" className="flex items-center gap-3 font-display font-bold"><span className="grid h-10 w-10 place-items-center rounded-full bg-teal-900 text-gold"><Music2 aria-hidden="true" /></span><span className="max-w-48 leading-tight">Carnatic Music & Brain Health</span></NavLink><nav className="hidden lg:block" aria-label="Primary navigation"><ul className="flex gap-1">{navigation.map((item) => <li key={item.to}><NavLink className={linkClass} to={item.to}>{item.label}</NavLink></li>)}</ul></nav><button type="button" className="rounded-lg p-2 lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button></PageContainer>{open && <nav id="mobile-navigation" className="border-t border-teal-900/10 pb-5 lg:hidden" aria-label="Mobile navigation"><PageContainer><ul className="grid gap-1 pt-3">{navigation.map((item) => <li key={item.to}><NavLink className={linkClass} to={item.to}>{item.label}</NavLink></li>)}</ul></PageContainer></nav>}</header>
}
