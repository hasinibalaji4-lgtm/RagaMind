import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ScrollToTop } from '../components/ScrollToTop'

export function SiteLayout() { return <div className="flex min-h-screen flex-col"><ScrollToTop /><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-teal-900 focus:px-4 focus:py-3 focus:text-white">Skip to content</a><Navbar /><main id="main-content" className="flex-1"><Outlet /></main><Footer /></div> }
