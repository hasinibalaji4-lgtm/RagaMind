import { Accessibility, BookOpenCheck, Eye, HeartHandshake, Lightbulb, Search, Sparkles, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FounderDetail } from '../components/about/FounderDetail'
import { JourneyTimeline } from '../components/about/JourneyTimeline'
import { PrincipleCard } from '../components/about/PrincipleCard'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'

const principles = [
  { title: 'Evidence', description: 'Every statement should be supported by research.', icon: BookOpenCheck },
  { title: 'Curiosity', description: 'Ask questions before making conclusions.', icon: Search },
  { title: 'Accessibility', description: 'Knowledge should be understandable by everyone.', icon: Accessibility },
  { title: 'Community', description: 'Research should ultimately benefit people.', icon: UsersRound },
]

const values = [
  { title: 'Scientific integrity', icon: BookOpenCheck },
  { title: 'Accessibility', icon: Accessibility },
  { title: 'Transparency', icon: Eye },
  { title: 'Respect for culture', icon: HeartHandshake },
  { title: 'Continuous learning', icon: Lightbulb },
]

const founderDetails = [
  { title: 'Background', placeholder: '[FOUNDER-WRITTEN BACKGROUND NEEDED — include only details approved for publication.]' },
  { title: 'Interests', placeholder: '[FOUNDER-WRITTEN CONTEXT NEEDED — chromesthesia, neuroscience, and Carnatic music may be discussed here without adding unsupplied personal stories.]' },
  { title: 'Current work', placeholder: '[FOUNDER-WRITTEN SUMMARY NEEDED — describe current research and educational outreach without publishing confidential interview material.]' },
  { title: 'Future vision', placeholder: '[FOUNDER-WRITTEN VISION NEEDED — describe the intended educational and community direction.]' },
]

export function About() {
  return <>
    <PageMeta title="About RagaMind" description="Learn about the purpose, journey, principles, and future direction of RagaMind." />

    <section className="border-b border-teal-900/10 py-20 sm:py-28">
      <PageContainer className="grid items-end gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">About the project</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-tight sm:text-7xl">About RagaMind</h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-teal-800 sm:text-2xl sm:leading-9">An educational initiative exploring the intersection of Carnatic music, neuroscience, and healthy aging.</p>
        </div>
        <div className="min-h-52 border border-dashed border-teal-900/25 bg-sage-100/45 p-6 text-sm leading-6 text-teal-700">
          <Sparkles className="text-gold-700" aria-hidden="true" />
          <p className="mt-10">[FUTURE EDITORIAL ILLUSTRATION SPACE — add approved artwork with appropriate alternative text if it conveys information.]</p>
        </div>
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
        <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Why RagaMind?</p>
        <div>
          <SectionHeading title="Why This Project Exists" />
          <div className="mt-7 max-w-3xl space-y-5 text-lg leading-8 text-teal-800">
            <p>[FOUNDER-WRITTEN MISSION NEEDED] Describe the curiosity about the brain and long-standing interest in Carnatic music that shaped the project.</p>
            <p>[FOUNDER-WRITTEN MISSION NEEDED] Explain the desire to bridge scientific inquiry and culture, make research more accessible, and create a useful educational resource for caregivers and communities.</p>
          </div>
        </div>
      </PageContainer>
    </section>

    <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-28">
      <PageContainer>
        <SectionHeading title="My Journey" subtitle="A future founder-reviewed account of the experiences and questions that led to RagaMind." />
        <JourneyTimeline />
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer>
        <SectionHeading title="Guiding Principles" subtitle="The standards intended to guide how RagaMind learns, communicates, and grows." />
        <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">{principles.map((principle) => <PrincipleCard key={principle.title} {...principle} />)}</div>
      </PageContainer>
    </section>

    <section className="bg-sage-100/65 py-20 sm:py-24">
      <PageContainer>
        <SectionHeading title="Project Values" />
        <ul className="mt-10 grid gap-px overflow-hidden border border-teal-900/15 bg-teal-900/15 sm:grid-cols-2 lg:grid-cols-5">{values.map(({ title, icon: Icon }) => <li className="flex min-h-40 flex-col justify-between bg-ivory p-6" key={title}><Icon className="text-gold-700" aria-hidden="true" /><span className="mt-8 font-display text-xl font-bold">{title}</span></li>)}</ul>
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Founder profile</p>
          <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Meet the Founder</h2>
          <p className="mt-6 text-lg leading-8 text-teal-800">This section is reserved for a founder-reviewed introduction. No biography or personal narrative has been inferred.</p>
          <div className="mt-8 min-h-48 border border-dashed border-teal-900/25 p-6 text-sm leading-6 text-teal-700">[FOUNDER PORTRAIT OR ILLUSTRATION PLACEHOLDER — add consented media and descriptive alternative text.]</div>
        </div>
        <div>{founderDetails.map((detail) => <FounderDetail key={detail.title} {...detail} />)}</div>
      </PageContainer>
    </section>

    <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-28">
      <PageContainer className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Looking ahead</p>
        <div>
          <SectionHeading title="The Future of RagaMind" />
          <p className="mt-7 max-w-3xl text-lg leading-8 text-teal-800">RagaMind is intended to continue through expert interviews, evidence reviews, Carnatic recordings, senior living pilots, and educational outreach. [FUTURE-PLAN DETAILS NEEDED — add timelines or commitments only after they are approved.]</p>
        </div>
      </PageContainer>
    </section>

    <section className="bg-teal-950 py-20 text-white sm:py-24">
      <PageContainer className="text-center">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Continue exploring the Evidence Hub.</h2>
        <Link className="mt-9 inline-flex items-center justify-center rounded-full bg-ivory px-6 py-3 font-semibold text-teal-950 transition-colors hover:bg-sage-100" to="/evidence">Explore the Evidence</Link>
      </PageContainer>
    </section>
  </>
}
