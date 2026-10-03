import { Link } from 'react-router-dom'
import { PageContainer } from './PageContainer'

export function Footer() { return <footer className="bg-teal-950 py-12 text-white"><PageContainer className="grid gap-8 md:grid-cols-2"><div><p className="font-display text-xl font-bold">RagaMind</p><p className="mt-3 max-w-xl text-sm text-sage-300">An evidence-informed educational initiative exploring Carnatic music, neuroscience, and healthy aging.</p></div><div className="md:text-right"><Link className="inline-flex min-h-11 items-center underline decoration-gold underline-offset-4" to="/contact">Contact</Link><p className="mt-3 text-sm text-sage-300">© {new Date().getFullYear()} RagaMind</p></div></PageContainer></footer> }
