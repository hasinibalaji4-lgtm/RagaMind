import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
export function NotFound() { return <><PageMeta title="Page not found" description="The requested RagaMind page could not be found." /><section className="grid min-h-[60vh] place-items-center py-20 text-center"><PageContainer><p className="text-sm font-bold uppercase tracking-[.2em] text-gold-700">404</p><h1 className="mt-4 font-display text-5xl font-bold">Page not found</h1><p className="mt-5 text-lg text-teal-800">The page you requested does not exist.</p><Link className="mt-8 inline-flex rounded-full bg-teal-900 px-6 py-3 font-semibold text-white hover:bg-teal-800" to="/">Return home</Link></PageContainer></section></> }
