import { ArrowRight, BookOpenCheck, Brain, CircleAlert, MessageCircleMore, Music2, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'
import { EditorialInfoCard } from '../components/EditorialInfoCard'
import { EvidencePreview } from '../components/home/EvidencePreview'
import { EditorialPrincipleCard } from '../components/home/EditorialPrincipleCard'
import { FeatureCard } from '../components/home/FeatureCard'
import { JourneyTimeline } from '../components/home/JourneyTimeline'

const primaryButton = 'inline-flex items-center justify-center gap-2 rounded-full bg-teal-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-800'
const secondaryButton = 'inline-flex items-center justify-center gap-2 rounded-full border border-teal-900 px-6 py-3 font-semibold text-teal-900 transition-colors hover:bg-sage-100'

const editorialPrinciples = [
  {
    title: 'Evidence Comes First',
    description: 'Peer-reviewed research is the foundation for scientific claims on RagaMind. Stronger evidence, such as systematic reviews and meta-analyses, is given greater weight than individual or exploratory studies.',
    icon: BookOpenCheck,
    tone: 'bg-surface-burgundy',
  },
  {
    title: 'Expert Perspectives Add Context',
    description: 'Interviews with clinicians and researchers help explain how evidence may be understood in real-world settings. Expert perspectives are presented as interpretation and guidance—not as proof.',
    icon: MessageCircleMore,
    tone: 'bg-surface-cream',
  },
  {
    title: 'Tradition Is Clearly Identified',
    description: 'Carnatic music carries centuries of cultural knowledge, teaching, and lived experience. RagaMind respects that tradition while clearly distinguishing it from conclusions supported by modern scientific research.',
    icon: Music2,
    tone: 'bg-surface-gold',
  },
  {
    title: 'Limitations Stay Visible',
    description: 'Research findings are presented together with their limitations, uncertainties, and unanswered questions. Promising findings are not presented as established fact when the evidence is still developing.',
    icon: CircleAlert,
    tone: 'bg-cream/45',
  },
  {
    title: 'Evidence Evolves',
    description: 'RagaMind is an evolving educational project. Research sources and conclusions will be reviewed periodically as new studies, expert insights, recordings, and community feedback become available.',
    icon: RefreshCw,
    tone: 'border-gold-700/35 bg-ivory',
  },
] as const

const homePillars = [
  { title: 'Science', description: 'Evidence-based exploration of music, the brain, aging, and cognition.', icon: Brain },
  { title: 'Culture', description: 'Carnatic music is presented with respect for its history, traditions, and lived knowledge.', icon: Music2 },
  { title: 'Community', description: 'RagaMind is designed to grow through expert conversations, user feedback, and future listening experiences.', icon: MessageCircleMore },
]

export function Home() {
  return <>
    <PageMeta title="Where Ancient Music Meets Modern Neuroscience" description="RagaMind is an evidence-informed educational initiative exploring Carnatic music, neuroscience, brain health, and healthy aging." />
    <section className="overflow-hidden border-b border-teal-900/10 py-16 sm:py-24 lg:py-28">
      <PageContainer>
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Where Ancient Music Meets Modern Neuroscience</p>
          <h1 className="mt-6 font-display text-6xl font-bold leading-[.95] tracking-tight text-teal-950 sm:text-7xl lg:text-8xl" tabIndex={-1}>RagaMind</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-teal-800 sm:text-xl">An evidence-informed educational initiative exploring how Carnatic music, neuroscience, expert insight, and community engagement can support conversations about brain health and healthy aging.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className={primaryButton} to="/evidence">Explore the Evidence <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link className={secondaryButton} to="/experts">Meet the Experts</Link>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">{homePillars.map((pillar) => <EditorialInfoCard key={pillar.title} {...pillar} />)}</div>
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer>
        <SectionHeading id="music-memory-meaning" title="Music, Memory, and Meaning" subtitle="RagaMind brings scientific literature into conversation with Carnatic musical tradition, expert perspectives, and future community pilots. It approaches each area with care—without claiming that Carnatic music cures, prevents, or treats dementia." />
        <div className="mt-14 grid gap-x-8 md:grid-cols-3">
          <FeatureCard icon={Brain} title="The Science" description="Explore accessible summaries of current research on music, the brain, dementia, mood, cognition, and healthy aging." to="/evidence" />
          <FeatureCard icon={Music2} title="The Music" description="Learn about Carnatic music, ragas, musical structure, cultural familiarity, and the role of active participation." to="/ragas" />
          <FeatureCard icon={MessageCircleMore} title="Expert Perspectives" description="Hear from researchers, clinicians, music therapists, Carnatic musicians, and senior-living professionals." to="/experts" />
        </div>
      </PageContainer>
    </section>

    <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-24" aria-labelledby="editorial-principles">
      <PageContainer>
        <SectionHeading id="editorial-principles" title="Editorial Principles" subtitle="RagaMind is designed to make research understandable without oversimplifying it. These principles guide how evidence, expert perspectives, and Carnatic musical traditions are presented across the site." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {editorialPrinciples.map((principle, index) => (
            <EditorialPrincipleCard
              key={principle.title}
              {...principle}
              className={`lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''}`}
            />
          ))}
        </div>
        <p className="mt-8 max-w-4xl border-l-2 border-gold-700 pl-4 text-sm leading-6 text-teal-800">
          RagaMind is an educational resource and does not provide medical advice, diagnosis, or treatment.
        </p>
      </PageContainer>
    </section>

    <section className="bg-sage-100/65 py-20 sm:py-28">
      <PageContainer className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading id="evidence-preview" title="What the Evidence Suggests" subtitle="A concise orientation to research presented with appropriate context and caution." />
          <p className="mt-6 text-sm leading-6 text-teal-700">These labels are simplified educational summaries. The Evidence Hub connects them to source cards, limitations, and interpretation guidance.</p>
          <Link className={`${primaryButton} mt-8`} to="/evidence">Visit the Evidence Hub <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <EvidencePreview />
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="expert-perspectives-preview" title="Learning Across Disciplines" subtitle="Future conversations will connect perspectives from research, clinical practice, music, and community life." />
          <Link className={secondaryButton} to="/experts">Explore Expert Perspectives</Link>
        </div>
        <div className="mt-12 max-w-4xl border-l-2 border-gold-700 bg-sage-100/55 p-6 sm:p-8"><h3 className="font-display text-2xl font-bold">A growing collection of perspectives</h3><p className="mt-4 leading-7 text-teal-800">This section will continue to grow as interviews are reviewed and participants approve their biographies, credentials, and words for publication. No quotation or profile is published before that review is complete.</p></div>
      </PageContainer>
    </section>

    <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-28">
      <PageContainer>
        <SectionHeading id="project-journey" title="From Research to Community" subtitle="A staged path from careful review to future community engagement." />
        <div className="mt-14"><JourneyTimeline /></div>
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Founder perspective</p>
        <div>
          <SectionHeading id="founder-story" title="Why RagaMind Began" />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-teal-800">RagaMind grew from more than thirteen years of Carnatic vocal training, an interest in neuroscience, and a desire to translate research into an accessible community resource. The project combines careful evidence review with ongoing learning in music, science, and software engineering.</p>
          <Link className={`${secondaryButton} mt-8`} to="/about">Read the Story</Link>
        </div>
      </PageContainer>
    </section>

    <section className="bg-teal-950 py-20 text-white sm:py-24">
      <PageContainer className="text-center">
        <h2 className="mx-auto max-w-4xl scroll-mt-28 font-display text-4xl font-bold leading-tight lg:scroll-mt-52 sm:text-5xl" id="final-invitation" tabIndex={-1}>Explore the Connection Between Music and Mind</h2>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className="inline-flex items-center justify-center rounded-full bg-ivory px-6 py-3 font-semibold text-teal-950 transition-colors hover:bg-sage-100" to="/evidence">Explore the Evidence</Link>
          <Link className="inline-flex items-center justify-center rounded-full border border-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10" to="/ragas">Discover the Ragas</Link>
        </div>
      </PageContainer>
    </section>
  </>
}
