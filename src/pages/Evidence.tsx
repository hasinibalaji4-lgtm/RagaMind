import { ArrowRight, BookOpenCheck, Brain, CircleAlert, Link2Off } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Disclaimer } from '../components/evidence/Disclaimer'
import { EvidenceBadge } from '../components/evidence/EvidenceBadge'
import { EvidenceBubbleGraphic } from '../components/evidence/EvidenceBubbleGraphic'
import { EvidenceQuestion } from '../components/evidence/EvidenceQuestion'
import { ResearchFilters } from '../components/evidence/ResearchFilters'
import { ResearchThemeSection } from '../components/evidence/ResearchThemeSection'
import { PageContainer } from '../components/PageContainer'
import { PageContentsLayout } from '../components/PageContentsLayout'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'
import { evidenceLegend, evidenceSnapshot, researchQuestions, researchSources, researchThemes } from '../data/evidence'

const readingPrinciples = [
  { title: 'Start with the body of evidence', text: 'Systematic reviews and meta-analyses generally provide stronger evidence than a single study.', icon: BookOpenCheck },
  { title: 'Keep individual studies in context', text: 'An individual study may offer a useful insight, but its design, sample, and limitations matter.', icon: CircleAlert },
  { title: 'Association is not causation', text: 'When two things occur together, that alone does not show that one caused the other.', icon: Link2Off },
  { title: 'Do not overgeneralize', text: 'Findings about music broadly should not automatically be applied to a particular Carnatic raga.', icon: Brain },
]

const knownItems = [
  'Research indicates that music engages distributed brain networks. [VERIFIED CITATIONS NEEDED]',
  'Individualized and personally meaningful music appears important. [VERIFIED CITATIONS NEEDED]',
  'Mood and depressive symptoms show promising evidence in reviewed literature. [VERIFIED CITATIONS NEEDED]',
  'Active participation may offer added benefits in some contexts. [VERIFIED CITATIONS NEEDED]',
  'Music-based approaches may support aspects of quality of life. [VERIFIED CITATIONS NEEDED]',
]

const unknownItems = [
  'Whether particular ragas produce specific effects.',
  'The ideal length and frequency of a session across different people and settings.',
  'Whether observed short-term benefits persist over time.',
  'How outcomes vary across cultures, contexts, and individuals.',
  'Whether Carnatic music has effects distinct from other personally meaningful music.',
]

const processSteps = [
  'Identify relevant literature', 'Group sources by theme', 'Summarize findings and limitations',
  'Compare areas of agreement and uncertainty', 'Translate findings into plain language',
  'Use expert interviews to explore remaining gaps',
]

const pageContents = [
  { id: 'how-to-read', label: 'How to Read This Page' },
  { id: 'research-questions', label: 'Key Research Questions' },
  { id: 'evidence-snapshot', label: 'Evidence Snapshot' },
  { id: 'research-themes', label: 'Research Themes' },
  { id: 'known-and-unknown', label: 'What We Know and Do Not Know' },
  { id: 'research-gaps', label: 'Where RagaMind Fits' },
  { id: 'research-library', label: 'Research Library' },
  { id: 'research-method', label: 'How the Evidence Was Reviewed' },
  { id: 'references-transparency', label: 'References and Transparency' },
  { id: 'medical-disclaimer-title', label: 'Medical Disclaimer' },
]

export function Evidence() {
  return <>
    <PageMeta title="The Evidence Hub" description="A cautious, accessible guide to what research suggests about music, the brain, emotional well-being, dementia, and healthy aging." />

    <section className="border-b border-teal-900/10 py-16 sm:py-24">
      <PageContainer className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Research, translated carefully</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-tight sm:text-7xl" tabIndex={-1}>The Evidence Hub</h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-teal-800">What current research suggests about music, the brain, dementia, emotional well-being, and healthy aging.</p>
          <p className="mt-6 max-w-2xl border-l-2 border-gold-700 pl-4 text-sm leading-6 text-teal-700">This page distinguishes established findings from emerging ideas and traditional musical knowledge.</p>
          <div className="mt-9" aria-labelledby="evidence-legend-title">
            <h2 className="text-sm font-bold" id="evidence-legend-title">Evidence-level legend</h2>
            <ul className="mt-4 flex flex-wrap gap-3">{evidenceLegend.map((item) => <li key={item.level}><EvidenceBadge level={item.level} /><span className="sr-only">: {item.description}</span></li>)}</ul>
          </div>
        </div>
        <EvidenceBubbleGraphic />
      </PageContainer>
    </section>

    <PageContentsLayout items={pageContents}>

    <section className="py-20 sm:py-28">
      <PageContainer>
        <SectionHeading id="how-to-read" title="How to Read This Page" subtitle="Evidence is not simply strong or weak. Study design, consistency, population, context, and limitations all shape what can reasonably be concluded." />
        <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">{readingPrinciples.map(({ title, text, icon: Icon }) => <article className="border-t border-teal-900/20 py-7" key={title}><Icon className="text-gold-700" aria-hidden="true" /><h3 className="mt-6 font-display text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-teal-700">{text}</p></article>)}</div>
        <p className="mt-8 max-w-4xl bg-sage-100/70 p-5 text-sm leading-6 text-teal-800"><strong>About the labels:</strong> Evidence levels on RagaMind are simplified educational summaries, not clinical ratings or recommendations.</p>
      </PageContainer>
    </section>

    <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-28">
      <PageContainer>
        <SectionHeading id="research-questions" title="Key Research Questions" subtitle="Open each question to see the structure that will hold a verified synthesis, its limitations, and its relevance to RagaMind." />
        <div className="mt-12">{researchQuestions.map((question) => <EvidenceQuestion item={question} key={question.id} />)}</div>
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer>
        <SectionHeading id="evidence-snapshot" title="Evidence Snapshot" subtitle="A provisional overview designed to make uncertainty visible at a glance." />
        <div className="mt-6 border-l-2 border-gold-700 pl-4 text-sm leading-6 text-teal-700">These labels are simplified educational placeholders based on literature categories supplied for this page. Verified synthesis text and citations are required before publication.</div>
        <div className="mt-10 grid gap-px border border-teal-900/15 bg-teal-900/15 sm:grid-cols-2 lg:grid-cols-4">{evidenceSnapshot.map((item) => <article className="min-h-64 bg-ivory p-6" key={item.topic}><EvidenceBadge level={item.level} /><h3 className="mt-7 font-display text-xl font-bold">{item.topic}</h3><p className="mt-4 text-sm leading-6 text-teal-700">{item.explanation}</p></article>)}</div>
      </PageContainer>
    </section>

    <section className="bg-sage-100/60 py-20 sm:py-28">
      <PageContainer>
        <SectionHeading id="research-themes" title="Research Themes" subtitle="Three bodies of literature provide the organizational structure for the future verified synthesis." />
        <div className="mt-10">{researchThemes.map((theme) => <ResearchThemeSection theme={theme} key={theme.id} />)}</div>
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer>
        <SectionHeading id="known-and-unknown" title="What We Know / What We Do Not Know" subtitle="A provisional boundary between cautious synthesis and questions that remain open. Every research statement below still requires verified citations." />
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <article><h3 className="font-display text-3xl font-bold">What We Know</h3><ul className="mt-6 divide-y divide-teal-900/15 border-y border-teal-900/15">{knownItems.map((item) => <li className="py-4 leading-7 text-teal-800" key={item}>{item}</li>)}</ul></article>
          <article><h3 className="font-display text-3xl font-bold">What We Do Not Yet Know</h3><ul className="mt-6 divide-y divide-teal-900/15 border-y border-teal-900/15">{unknownItems.map((item) => <li className="py-4 leading-7 text-teal-800" key={item}>{item}</li>)}</ul></article>
        </div>
      </PageContainer>
    </section>

    <section className="border-y border-teal-900/10 bg-teal-900 py-20 text-white sm:py-24">
      <PageContainer className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <p className="text-sm font-bold uppercase tracking-[.22em] text-sage-300">Research gaps</p>
        <div><h2 className="scroll-mt-28 font-display text-4xl font-bold lg:scroll-mt-52 sm:text-5xl" id="research-gaps" tabIndex={-1}>Where RagaMind Fits</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-sage-100">RagaMind responds to gaps in culturally specific music resources, accessible science communication, perspectives across disciplines, Carnatic-specific education, and future community-based observation and feedback.</p><p className="mt-6 max-w-3xl border-l-2 border-gold pl-4 font-semibold leading-7">RagaMind is an educational and community initiative. It is not a clinical trial or medical treatment.</p></div>
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer>
        <SectionHeading id="research-library" title="Research Library" subtitle="Search and filter the typed source structure. Every current record is an explicit placeholder—not a published paper or citation." />
        <div className="mt-10"><ResearchFilters sources={researchSources} /></div>
      </PageContainer>
    </section>

    <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-28">
      <PageContainer>
        <SectionHeading id="research-method" title="How the Evidence Was Reviewed" subtitle="RagaMind uses a structured literature review, annotated bibliography, and research synthesis. It is not described as a formal systematic review." />
        <ol className="mt-12 grid gap-px border border-teal-900/15 bg-teal-900/15 sm:grid-cols-2 lg:grid-cols-3">{processSteps.map((step, index) => <li className="min-h-44 bg-ivory p-6" key={step}><span className="font-display text-xl font-bold text-gold-700">0{index + 1}</span><h3 className="mt-7 font-display text-xl font-bold">{step}</h3></li>)}</ol>
      </PageContainer>
    </section>

    <section className="py-20 sm:py-28">
      <PageContainer className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading id="references-transparency" title="References and Transparency" subtitle="Research summaries will be updated as new evidence becomes available." />
          <dl className="mt-8 space-y-5">{[
            ['Full APA references', '[VERIFIED REFERENCES NEEDED]'], ['Direct links', '[VERIFIED LINKS NEEDED]'],
            ['Date last reviewed', '[REVIEW DATE NEEDED]'], ['Correction policy', '[CORRECTION POLICY NEEDED]'],
          ].map(([term, detail]) => <div className="border-t border-teal-900/15 pt-4" key={term}><dt className="font-bold">{term}</dt><dd className="mt-1 text-teal-700">{detail}</dd></div>)}</dl>
          <Link className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-teal-900 underline decoration-gold-700 underline-offset-4" to="/contact">Share feedback about the Evidence Hub <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
        <Disclaimer />
      </PageContainer>
    </section>
    </PageContentsLayout>
  </>
}
