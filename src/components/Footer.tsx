import { Link } from 'react-router-dom'
import { PageContainer } from './PageContainer'

export function Footer() { return <footer className="bg-teal-950 py-8 text-white"><PageContainer><div className="flex flex-wrap items-center justify-center gap-x-3 text-center text-sm text-sage-300"><p>© 2026 RagaMind. All rights reserved.</p><span aria-hidden="true">|</span><Link className="inline-flex min-h-11 items-center font-semibold text-white underline decoration-gold underline-offset-4" to="/contact">Contact</Link></div></PageContainer></footer> }
