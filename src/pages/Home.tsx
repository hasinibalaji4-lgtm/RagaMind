import { ArrowRight, Brain, MessageCircleMore, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'
import { EvidencePreview } from '../components/home/EvidencePreview'
import { ExpertPreviewCard } from '../components/home/ExpertPreviewCard'
import { FeatureCard } from '../components/home/FeatureCard'
import { HeroArtwork } from '../components/home/HeroArtwork'
import { JourneyTimeline } from '../components/home/JourneyTimeline'

const primaryButton = 'inline-flex items-center justify-center gap-2 rounded-full bg-teal-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-800'
const secondaryButton = 'inline-flex items-center justify-center gap-2 rounded-full border border-teal-900 px-6 py-3 font-semibold text-teal-900 transition-colors hover:bg-sage-100'

export function Home() {
  return <>
    <PageMeta title="Where Ancient Music Meets Modern Neuroscience" description="RagaMind is an evidence-informed educational initiative exploring Carnatic music, neuroscience, brain health, and healthy aging." />
    <section className="overflow-hidden border-b border-teal-900/10 py-16 sm:py-24 lg:py-28">
      <PageContainer className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Where Ancient Music Meets Modern Neuroscience</p>
          <h1 className="mt-6 font-display text-6xl font-bold leading-[.95] tracking-tight text-teal-950 sm:text-7xl lg:text-8xl">RagaMind</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-teal-800 sm:text-xl">An evidence-informed educational initiative exploring how Carnatic music, neuroscience, expert insight, and community engagement can support conversations about brain health and healthy aging.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className={primaryButton} to="/evidence">Explore the Evidence <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link className={secondaryButton} to="/experts">Meet the Experts</Link>
          </div>
        </div>
        <HeroArtwork />
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer>
        <SectionHeading title="Music, Memory, and Meaning" subtitle="RagaMind brings scientific literature into conversation with Carnatic musical tradition, expert perspectives, and future community pilots. It approaches each area with care—without claiming that Carnatic music cures, prevents, or treats dementia." />
        <div className="mt-14 grid gap-x-8 md:grid-cols-3">
          <FeatureCard icon={Brain} title="The Science" description="Explore accessible summaries of current research on music, the brain, dementia, mood, cognition, and healthy aging." to="/evidence" />
          <FeatureCard icon={Music2} title="The Music" description="Learn about Carnatic music, ragas, musical structure, cultural familiarity, and the role of active participation." to="/ragas" />
          <FeatureCard icon={MessageCircleMore} title="Expert Perspectives" description="Hear from researchers, clinicians, music therapists, Carnatic musicians, and senior-living professionals." to="/experts" />
        </div>
      </PageContainer>
    </section>

    <section className="bg-sage-100/65 py-20 sm:py-28">
      <PageContainer className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading title="What the Evidence Suggests" subtitle="A concise orientation to areas that the future Evidence Hub will examine with appropriate context and caution." />
          <p className="mt-6 text-sm leading-6 text-teal-700">These labels are simplified educational summaries. They will be connected to verified citations and reviewed research context before publication.</p>
          <Link className={`${primaryButton} mt-8`} to="/evidence">Visit the Evidence Hub <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <EvidencePreview />
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading title="Learning Across Disciplines" subtitle="Future conversations will connect perspectives from research, clinical practice, music, and community life." />
          <Link className={secondaryButton} to="/experts">Explore Expert Perspectives</Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ExpertPreviewCard name="Dr. Amy Rodriguez" />
          <ExpertPreviewCard name="Dr. Kayci Vickers" />
        </div>
      </PageContainer>
    </section>

    <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-28">
      <PageContainer>
        <SectionHeading title="From Research to Community" subtitle="A staged path from careful review to future community engagement." />
        <div className="mt-14"><JourneyTimeline /></div>
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Founder perspective</p>
        <div>
          <SectionHeading title="Why RagaMind Began" />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-teal-800">[FOUNDER STORY PLACEHOLDER] RagaMind grew from more than thirteen years of Carnatic vocal training, an interest in neuroscience and medicine, the experience of chromesthesia, and a desire to translate research into an accessible community resource.</p>
          <Link className={`${secondaryButton} mt-8`} to="/about">Read the Story</Link>
        </div>
      </PageContainer>
    </section>

    <section className="bg-teal-950 py-20 text-white sm:py-24">
      <PageContainer className="text-center">
        <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl">Explore the Connection Between Music and Mind</h2>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className="inline-flex items-center justify-center rounded-full bg-ivory px-6 py-3 font-semibold text-teal-950 transition-colors hover:bg-sage-100" to="/evidence">Explore the Evidence</Link>
          <Link className="inline-flex items-center justify-center rounded-full border border-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10" to="/ragas">Discover the Ragas</Link>
        </div>
      </PageContainer>
    </section>
  </>
}
