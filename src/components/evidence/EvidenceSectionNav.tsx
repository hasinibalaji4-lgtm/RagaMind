import { ArrowDownRight, Brain, HeartHandshake, LibraryBig, Music2, Scale, Sparkles, type LucideIcon } from 'lucide-react'
import type { MouseEvent } from 'react'
import { PageContainer } from '../PageContainer'

type EvidenceSectionLink = { description: string; icon: LucideIcon; id: string; title: string }

const sectionLinks: EvidenceSectionLink[] = [
  { id: 'music-and-brain', title: 'Music & the Brain', description: 'How music engages brain networks related to memory, emotion, attention, movement, prediction, and reward.', icon: Brain },
  { id: 'music-and-dementia', title: 'Music & Dementia', description: 'What current research suggests about mood, communication, engagement, cognition, and quality of life in dementia care.', icon: HeartHandshake },
  { id: 'evidence-strength', title: 'Evidence Strength', description: 'How RagaMind evaluates study types, limitations, and the strength of different kinds of evidence.', icon: Scale },
  { id: 'carnatic-music', title: 'Carnatic Music', description: 'What research currently says about Carnatic music, emotion, aging, and the distinction between science and tradition.', icon: Music2 },
  { id: 'healthy-aging', title: 'Healthy Aging', description: 'How musical engagement may relate to cognitive, emotional, and social well-being across the lifespan.', icon: Sparkles },
  { id: 'key-takeaways', title: 'Summary & Takeaways', description: 'Key findings, expert perspectives, limitations, research gaps, and future questions.', icon: LibraryBig },
]

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function jumpToSection(id: string, event: MouseEvent<HTMLAnchorElement>) {
  const destination = document.getElementById(id)
  if (!destination) return
  event.preventDefault()
  destination.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  destination.focus({ preventScroll: true })
}

export function EvidenceSectionNav() {
  return <section className="evidence-section-nav" aria-labelledby="evidence-section-nav-title">
    <PageContainer>
      <div className="section-heading">
        <p className="eyebrow">Explore the page</p>
        <h2 id="evidence-section-nav-title">Explore the Evidence</h2>
        <p>Jump directly to the research, expert perspectives, and key takeaways that interest you.</p>
      </div>
      <nav aria-label="Evidence Hub sections">
        <ul className="evidence-section-nav-grid">
          {sectionLinks.map(({ description, icon: Icon, id, title }) => <li key={id}>
            <a className="evidence-nav-card" href={`#${id}`} onClick={(event) => jumpToSection(id, event)}>
              <div className="evidence-nav-card__icon" aria-hidden="true"><Icon size={23} strokeWidth={1.8} /></div>
              <div className="evidence-nav-card__content">
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="evidence-nav-card__link">Go to section <ArrowDownRight size={17} aria-hidden="true" /></span>
              </div>
            </a>
          </li>)}
        </ul>
      </nav>
    </PageContainer>
  </section>
}
