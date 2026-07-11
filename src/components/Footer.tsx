import { Link } from 'react-router-dom'
import { PageContainer } from './PageContainer'

export function Footer() { return <footer className="bg-teal-950 py-12 text-white"><PageContainer className="grid gap-8 md:grid-cols-2"><div><p className="font-display text-xl font-bold">Carnatic Music, Brain Health, and Healthy Aging</p><p className="mt-3 max-w-xl text-sm text-sage-300">A future evidence-informed educational initiative. Content is currently in development.</p></div><div className="md:text-right"><Link className="underline decoration-gold underline-offset-4" to="/contact">Contact</Link><p className="mt-3 text-sm text-sage-300">© {new Date().getFullYear()} Educational initiative</p></div></PageContainer></footer> }
