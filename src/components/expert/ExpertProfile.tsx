import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Expert } from '../../types/expert'
import { PageContainer } from '../PageContainer'
import { PageMeta } from '../PageMeta'
import { SectionHeading } from '../SectionHeading'
import { ExpertPortrait } from './ExpertPortrait'

export function ExpertProfile({ expert }: { expert: Expert }) {
  const approvedQuotes = expert.interview.approvedQuotes.filter((quote) => quote.status === 'approved')

  return <>
    <PageMeta title={expert.name} description={`A placeholder RagaMind expert-perspective profile for ${expert.name}.`} />
    <header className="border-b border-teal-900/10 py-16 sm:py-24">
      <PageContainer className="grid items-center gap-10 lg:grid-cols-[1fr_15rem] lg:gap-16">
        <div>
          <Link className="inline-flex min-h-11 items-center gap-2 font-semibold text-teal-900 underline decoration-gold-700 underline-offset-4" to="/experts"><ArrowLeft size={17} aria-hidden="true" />Expert Perspectives</Link>
          <p className="mt-8 text-sm font-bold uppercase tracking-[.18em] text-gold-700">{expert.category ?? '[DISCIPLINE AWAITING VERIFICATION]'}</p>
          <h1 className="mt-4 scroll-mt-28 font-display text-5xl font-bold sm:text-7xl lg:scroll-mt-52" id="expert-profile-overview" tabIndex={-1}>{expert.name}</h1>
          <p className="mt-4 text-lg font-semibold text-teal-700">{expert.title} · {expert.institution}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-teal-800">{expert.biography}</p>
          <p className="mt-6 text-sm text-teal-700">Interview status: {expert.interview.status}. Profile information remains unpublished until reviewed and approved.</p>
        </div>
        <ExpertPortrait name={expert.name} src={expert.headshot} alt={expert.headshotAlt} hasApprovedImage={expert.permissions.headshot === 'approved'} />
      </PageContainer>
    </header>

      <section className="py-20 sm:py-28"><PageContainer><SectionHeading id="perspective-matters" title="Why This Perspective Matters" /><p className="mt-7 max-w-4xl text-lg leading-8 text-teal-800">{expert.whyPerspectiveMatters}</p></PageContainer></section>

      <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-24"><PageContainer><SectionHeading id="conversation-themes" title="Key Themes from the Conversation" /><div className="mt-10">{expert.interview.keyThemes.length ? <ul className="grid gap-4 sm:grid-cols-2">{expert.interview.keyThemes.map((theme) => <li className="border border-teal-900/15 bg-ivory p-5" key={theme}>{theme}</li>)}</ul> : <p className="border border-dashed border-teal-900/30 p-6 text-teal-700">[APPROVED KEY THEMES NEEDED AFTER INTERVIEW REVIEW]</p>}</div></PageContainer></section>

      <section className="py-20 sm:py-28"><PageContainer><SectionHeading id="approved-insights" title="Approved Insights" subtitle="Only quotations and paraphrases approved for publication will appear here." />{expert.approvedInsights.length || approvedQuotes.length ? <div className="mt-10 grid gap-6 lg:grid-cols-2">{expert.approvedInsights.map((insight) => <article className="border border-teal-900/15 p-6" key={insight}><h3 className="font-display text-xl font-bold">Approved insight</h3><p className="mt-3 leading-7 text-teal-800">{insight}</p></article>)}{approvedQuotes.map((quote) => <blockquote className="border-l-2 border-gold-700 p-6 text-lg italic leading-8 text-teal-800" key={quote.text}>{quote.text}</blockquote>)}</div> : <div className="mt-10 border border-dashed border-teal-900/30 bg-sage-100/45 p-8"><h3 className="font-display text-2xl font-bold">Approved insights pending</h3><p className="mt-3 leading-7 text-teal-700">No quotation or interview answer is currently published.</p></div>}</PageContainer></section>

      <section className="border-y border-teal-900/10 bg-sage-100/60 py-20 sm:py-24"><PageContainer><SectionHeading id="evidence-connection" title="Connection to Current Evidence" subtitle="Professional perspectives complement published evidence; they do not replace it or establish causation or therapeutic efficacy." /><div className="mt-8 space-y-4">{expert.relatedEvidenceTopics.map((topic, index) => <div className="flex flex-wrap items-center justify-between gap-4 border-t border-teal-900/15 pt-4" key={index}><span className="text-teal-700">{topic.label} · {topic.status}</span><Link className="inline-flex min-h-11 items-center gap-2 font-semibold text-teal-900 underline decoration-gold-700 underline-offset-4" to={topic.route}>Evidence Hub <ArrowRight size={17} aria-hidden="true" /></Link></div>)}</div></PageContainer></section>

      <section className="py-20 sm:py-28"><PageContainer><SectionHeading id="remaining-questions" title="Questions That Remain" />{expert.questionsRemaining.length ? <ul className="mt-8 space-y-4">{expert.questionsRemaining.map((question) => <li key={question}>{question}</li>)}</ul> : <p className="mt-8 border border-dashed border-teal-900/30 p-6 text-teal-700">[REVIEWED OPEN QUESTIONS NEEDED — no interview answers have been inferred.]</p>}</PageContainer></section>

      <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-24"><PageContainer><SectionHeading id="interview-transcript" title="Full Interview or Edited Transcript" subtitle="Raw notes, contact details, scheduling information, and unpublished transcripts are never displayed." />{expert.interview.transcriptSections.length ? <div className="mt-10 space-y-10">{expert.interview.transcriptSections.map((section) => <section key={section.heading}><h3 className="font-display text-2xl font-bold">{section.heading}</h3><p className="mt-4 max-w-4xl leading-8 text-teal-800">{section.content}</p></section>)}</div> : <div className="mt-8 border border-dashed border-teal-900/30 bg-ivory p-6 text-teal-700">[NO TRANSCRIPT PUBLISHED — EDITED SECTIONS REQUIRE REVIEW AND APPROVAL]</div>}</PageContainer></section>

      <section className="py-20 sm:py-28"><PageContainer><SectionHeading id="profile-publication" title="References, Publication, and Review" /><div className="mt-10 grid gap-8 lg:grid-cols-2"><article><h3 className="font-display text-2xl font-bold">Related resources</h3><ul className="mt-5 space-y-3">{expert.references.map((reference, index) => <li className="text-teal-700" key={index}>{reference}</li>)}</ul></article><article><h3 className="font-display text-2xl font-bold">Permission status</h3><dl className="mt-5 space-y-3">{Object.entries(expert.permissions).map(([field, status]) => <div className="flex justify-between gap-4 border-t border-teal-900/15 pt-3" key={field}><dt className="font-bold capitalize">{field}</dt><dd className="text-right text-teal-700">{status}</dd></div>)}</dl><p className="mt-5"><strong>Last reviewed:</strong> {expert.lastReviewed}</p></article></div><aside className="mt-12 border border-teal-900/20 bg-sage-100/65 p-6"><h3 className="font-display text-2xl font-bold">Educational perspective disclaimer</h3><p className="mt-4 max-w-4xl leading-7 text-teal-800">Expert interviews provide educational and professional perspectives. They do not constitute medical advice, institutional endorsement, or proof that a particular music-based approach is clinically effective.</p></aside></PageContainer></section>
  </>
}
