import { BookOpenCheck, Ear, GraduationCap, Microscope } from 'lucide-react'
import { PageContainer } from '../components/PageContainer'
import { PageContentsLayout } from '../components/PageContentsLayout'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'
import { RagaCard } from '../components/raga/RagaCard'
import { ragas } from '../data/ragas'

const pageContents = [
  { id: 'raga-library-overview', label: 'Raga Library' },
  { id: 'featured-ragas', label: 'Featured Ragas' },
  { id: 'how-to-listen', label: 'How to Listen' },
  { id: 'teacher-guidance', label: 'Teacher Guidance' },
  { id: 'library-scientific-context', label: 'Scientific Context' },
  { id: 'library-disclaimer', label: 'Educational Disclaimer' },
]

const contextTypes = [
  { title: 'Traditional association', text: 'Perspectives carried through Carnatic musical practice and interpretation.', icon: BookOpenCheck },
  { title: 'Teacher insight', text: 'Context supplied through consultation with a Carnatic music teacher.', icon: GraduationCap },
  { title: 'Scientific context', text: 'Broader research framing that does not establish an effect for a specific raga.', icon: Microscope },
  { title: 'Listener reflection', text: 'A private, individual response that may differ across listeners and settings.', icon: Ear },
]

const listeningGuidance = [
  'Find a comfortable, quiet setting.',
  'Listen without needing to identify every musical detail.',
  'Notice attention, imagery, memory, emotion, or physical tension without expecting a particular response.',
  'Stop listening if the experience is uncomfortable.',
]

export function Ragas() {
  return <>
    <PageMeta title="Raga Library" description="Explore five Carnatic ragas through traditional associations, teacher insight, scientific context, and private reflection." />
    <header className="border-b border-teal-900/10 py-16 sm:py-24">
      <PageContainer>
        <p className="text-sm font-bold uppercase tracking-[.2em] text-gold-700">Tradition, context, and listening</p>
        <h1 className="mt-5 scroll-mt-28 font-display text-5xl font-bold sm:text-7xl lg:scroll-mt-52" id="raga-library-overview" tabIndex={-1}>Raga Library</h1>
        <p className="mt-7 max-w-4xl text-xl leading-8 text-teal-800">Five Carnatic ragas exploring rest, renewal, joy, compassion, and strength.</p>
        <div className="mt-8 max-w-4xl space-y-4 text-lg leading-8 text-teal-800">
          <p>Ragas are melodic frameworks within Carnatic music. Their emotional associations can arise through tradition, musical structure, performance, context, and each listener’s experience.</p>
          <p>These five ragas were selected with teacher guidance. Individual responses vary, and this educational library is not a therapeutic prescription.</p>
        </div>
        <section className="mt-12" aria-labelledby="context-types-title">
          <h2 className="font-display text-2xl font-bold" id="context-types-title">How perspectives are distinguished</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-teal-700">These categories provide different kinds of context and should not be treated as equivalent forms of evidence.</p>
          <div className="mt-7 grid gap-px border border-teal-900/15 bg-teal-900/15 sm:grid-cols-2 lg:grid-cols-4">{contextTypes.map(({ title, text, icon: Icon }) => <article className="bg-ivory p-6" key={title}><Icon className="text-gold-700" aria-hidden="true" /><h3 className="mt-6 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-teal-700">{text}</p></article>)}</div>
        </section>
      </PageContainer>
    </header>

    <PageContentsLayout items={pageContents}>
      <section className="py-20 sm:py-28">
        <PageContainer>
          <SectionHeading id="featured-ragas" title="Featured Ragas" subtitle="Organized by teacher-informed experience themes rather than promised outcomes." />
          <div className="mt-10 grid gap-x-8 lg:grid-cols-2">{ragas.map((raga, index) => <RagaCard raga={raga} index={index} key={raga.id} />)}</div>
        </PageContainer>
      </section>

      <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-24">
        <PageContainer>
          <SectionHeading id="how-to-listen" title="How to Listen" subtitle="Listening here is optional, non-clinical, and reflective. There is no correct emotional response." />
          <ol className="mt-10 grid gap-px border border-teal-900/15 bg-teal-900/15 sm:grid-cols-2 lg:grid-cols-4">{listeningGuidance.map((item, index) => <li className="min-h-40 bg-ivory p-6" key={item}><span className="font-display text-xl font-bold text-gold-700">0{index + 1}</span><p className="mt-6 leading-7 text-teal-800">{item}</p></li>)}</ol>
        </PageContainer>
      </section>

      <section className="py-20 sm:py-28">
        <PageContainer className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-gold-700">Selection and review</p>
          <div><SectionHeading id="teacher-guidance" title="Teacher Guidance" /><p className="mt-7 max-w-3xl text-lg leading-8 text-teal-800">The initial selection was informed by consultation with a Carnatic music teacher. Teacher guidance contributed traditional and musical context. Final published descriptions will be reviewed before release, and traditional associations are presented separately from scientific evidence.</p><p className="mt-5 text-sm leading-6 text-teal-700">The teacher will not be identified unless a verified name and publication permission are supplied.</p></div>
        </PageContainer>
      </section>

      <section className="border-y border-teal-900/10 bg-sage-100/60 py-20 sm:py-24">
        <PageContainer>
          <SectionHeading id="library-scientific-context" title="Scientific Context" />
          <p className="mt-7 max-w-4xl text-lg leading-8 text-teal-800">Research on music more broadly suggests that familiarity, personalization, attention, active participation, and emotional meaning can shape the listening experience. Current evidence does not establish that a specific raga produces a particular clinical outcome.</p>
          <p className="mt-6 text-teal-700">[VERIFIED EVIDENCE HUB CITATIONS NEEDED]</p>
        </PageContainer>
      </section>

      <section className="py-20 sm:py-24">
        <PageContainer>
          <aside className="border border-teal-900/20 bg-sage-100/65 p-6 sm:p-8" aria-labelledby="library-disclaimer">
            <h2 className="scroll-mt-28 font-display text-2xl font-bold lg:scroll-mt-52" id="library-disclaimer" tabIndex={-1}>Educational Disclaimer</h2>
            <p className="mt-4 max-w-4xl leading-7 text-teal-800">RagaMind presents traditional musical perspectives, teacher-informed commentary, and general research context for educational purposes. Individual responses to music vary. This resource is not medical advice, diagnosis, or treatment.</p>
          </aside>
        </PageContainer>
      </section>
    </PageContentsLayout>
  </>
}
