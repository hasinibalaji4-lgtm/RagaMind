import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Disclaimer } from '../components/evidence/Disclaimer'
import { EvidenceBadge } from '../components/evidence/EvidenceBadge'
import { EvidenceBubbleGraphic } from '../components/evidence/EvidenceBubbleGraphic'
import { ResearchFilters } from '../components/evidence/ResearchFilters'
import { ResearchThemeSection } from '../components/evidence/ResearchThemeSection'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'
import { evidenceAtGlance, evidenceLegend, researchSources, researchThemes } from '../data/evidence'

const supportedItems = [
  'Music engages distributed brain systems. [VERIFIED CITATIONS NEEDED]',
  'Personally meaningful music may be important. [VERIFIED CITATIONS NEEDED]',
  'Research on mood and depressive symptoms warrants careful synthesis. [VERIFIED CITATIONS NEEDED]',
  'Active participation may differ from passive listening. [VERIFIED CITATIONS NEEDED]',
]

const uncertainItems = [
  'Whether particular ragas produce specific effects.',
  'The ideal length and frequency of listening across people and settings.',
  'Whether observed short-term changes persist over time.',
  'Whether Carnatic music differs from other personally meaningful music in measured outcomes.',
]

const processSteps = ['Identify relevant literature', 'Group sources by theme', 'Summarize findings and limitations', 'Compare agreement and uncertainty', 'Translate findings into plain language', 'Review and correct the synthesis']

export function Evidence() {
  return <>
    <PageMeta title="The Evidence Hub" description="A cautious, accessible guide to what research suggests about music, the brain, emotional well-being, dementia, and healthy aging." />

    <header className="border-b border-teal-900/10 py-16 sm:py-24">
      <PageContainer className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
        <div><p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Research, translated carefully</p><h1 className="mt-5 font-display text-5xl font-bold leading-tight sm:text-7xl">The Evidence Hub</h1><p className="mt-7 max-w-3xl text-xl leading-8 text-teal-800">What current research suggests about music, the brain, dementia, emotional well-being, and healthy aging.</p><p className="mt-6 max-w-3xl leading-7 text-teal-700">Evidence labels are simplified educational summaries, not clinical ratings or recommendations. Verified synthesis and citations are still required wherever placeholders appear.</p><div className="mt-8" aria-labelledby="evidence-legend-title"><h2 className="text-base font-bold" id="evidence-legend-title">Evidence-level legend</h2><ul className="mt-4 flex flex-wrap gap-3">{evidenceLegend.map((item) => <li key={item.level}><EvidenceBadge level={item.level} /><span className="sr-only">: {item.description}</span></li>)}</ul></div></div>
        <EvidenceBubbleGraphic />
      </PageContainer>
    </header>

    <section className="py-20 sm:py-24">
      <PageContainer><SectionHeading title="Evidence at a Glance" subtitle="Six distinct topics provide a concise orientation. Each summary must be source-reviewed before publication." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{evidenceAtGlance.map((item) => <article className="rounded-2xl border border-teal-900/15 bg-white/60 p-6" key={item.id}><EvidenceBadge level={item.evidenceLevel} /><h3 className="mt-5 font-display text-xl font-bold">{item.topic}</h3><p className="mt-4 leading-7 text-teal-800">{item.synthesis}</p><p className="mt-4 border-l-2 border-gold-700 pl-4 text-sm leading-6 text-teal-700"><strong>Important limitation:</strong> {item.limitation}</p></article>)}</div></PageContainer>
    </section>

    <section className="border-y border-teal-900/10 bg-sage-100/60 py-20 sm:py-24">
      <PageContainer><SectionHeading title="Three Research Themes" subtitle="These broader themes organize the source library without repeating each topic summary." /><div className="mt-8">{researchThemes.map((theme) => <ResearchThemeSection key={theme.id} theme={theme} />)}</div></PageContainer>
    </section>

    <section className="py-20 sm:py-24">
      <PageContainer><SectionHeading title="Limits and Research Gaps" subtitle="Careful communication distinguishes provisional support from unanswered questions." /><div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16"><article><h3 className="font-display text-2xl font-bold">What current evidence supports</h3><ul className="mt-5 divide-y divide-teal-900/15 border-y border-teal-900/15">{supportedItems.map((item) => <li className="py-4 leading-7 text-teal-800" key={item}>{item}</li>)}</ul></article><article><h3 className="font-display text-2xl font-bold">What remains uncertain</h3><ul className="mt-5 divide-y divide-teal-900/15 border-y border-teal-900/15">{uncertainItems.map((item) => <li className="py-4 leading-7 text-teal-800" key={item}>{item}</li>)}</ul></article></div><p className="mt-10 max-w-4xl rounded-2xl bg-sage-100 p-6 text-lg leading-8 text-teal-900">RagaMind helps organize evidence, cultural context, expert perspectives, and future community learning in an accessible educational resource. It is not a clinical trial or medical treatment.</p></PageContainer>
    </section>

    <section className="border-t border-teal-900/10 bg-white/35 py-20 sm:py-24">
      <PageContainer><SectionHeading id="research-library" title="Research Library and Method" subtitle="The library remains visibly provisional until complete sources and references are verified." /><div className="mt-10 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><div><h3 className="font-display text-2xl font-bold">Review method</h3><p className="mt-4 leading-7 text-teal-800">RagaMind uses a structured literature review, annotated bibliography, and research synthesis. It is not described as a formal systematic review.</p><ol className="mt-6 space-y-3">{processSteps.map((step, index) => <li className="flex gap-3 leading-7" key={step}><span className="font-bold text-gold-700">{index + 1}.</span><span>{step}</span></li>)}</ol></div><div><h3 className="font-display text-2xl font-bold">References and transparency</h3><dl className="mt-5 space-y-4">{[['Full APA references', '[VERIFIED REFERENCES NEEDED]'], ['Date last reviewed', '[REVIEW DATE NEEDED]'], ['Correction policy', '[CORRECTION POLICY NEEDED]']].map(([term, detail]) => <div className="border-t border-teal-900/15 pt-4" key={term}><dt className="font-bold">{term}</dt><dd className="mt-1 text-teal-700">{detail}</dd></div>)}</dl><Link className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-teal-900 underline decoration-gold-700 underline-offset-4" to="/contact">Suggest a correction <ArrowRight aria-hidden="true" size={17} /></Link></div></div><div className="mt-12"><ResearchFilters sources={researchSources} /></div><div className="mt-12"><Disclaimer /></div></PageContainer>
    </section>
  </>
}
