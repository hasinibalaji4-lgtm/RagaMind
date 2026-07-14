import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DisciplineNetwork } from '../components/expert/DisciplineNetwork'
import { ExpertDirectory } from '../components/expert/ExpertDirectory'
import { PageContainer } from '../components/PageContainer'
import { PageContentsLayout } from '../components/PageContentsLayout'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'
import { expertCategories, experts, futurePerspectives, sharedInterviewQuestions } from '../data/experts'

const pageContents = [
  { id: 'expert-perspectives-overview', label: 'Expert Perspectives' },
  { id: 'disciplines-represented', label: 'Disciplines Represented' },
  { id: 'featured-experts', label: 'Featured Experts' },
  { id: 'interview-method', label: 'How Interviews Are Conducted' },
  { id: 'shared-questions', label: 'Common Questions' },
  { id: 'evidence-to-conversation', label: 'From Evidence to Conversation' },
  { id: 'publication-standards', label: 'Publication and Consent Standards' },
  { id: 'future-perspectives', label: 'Future Perspectives' },
]

const interviewProcess = [
  'Identify a relevant expert or community perspective', 'Send a focused interview request',
  'Prepare questions based on research gaps', 'Conduct and document the conversation',
  'Review notes or transcript', 'Request approval for quotations and profile details',
  'Publish approved insights', 'Connect interview themes to the Evidence Hub',
]

const publicationStandards = [
  'Quotations are published only with permission.',
  'Biographies and credentials are verified before publication.',
  'Participants may review how their comments are presented.',
  'Edited quotations should preserve their original meaning.',
  'Unpublished notes and contact details are not displayed.',
  'Interview participation does not imply institutional endorsement of RagaMind.',
]

export function Experts() {
  return <>
    <PageMeta title="Expert Perspectives" description="Educational conversations across neuroscience, music, aging, and community care." />
    <header className="border-b border-teal-900/10 py-16 sm:py-24">
      <PageContainer>
        <p className="text-sm font-bold uppercase tracking-[.2em] text-gold-700">Across disciplines</p>
        <h1 className="mt-5 scroll-mt-28 font-display text-5xl font-bold sm:text-7xl lg:scroll-mt-52" id="expert-perspectives-overview" tabIndex={-1}>Expert Perspectives</h1>
        <p className="mt-7 max-w-4xl text-xl leading-8 text-teal-800">Conversations across neuroscience, music, aging, and community care.</p>
        <div className="mt-8 max-w-4xl space-y-4 text-lg leading-8 text-teal-800"><p>RagaMind interviews researchers, clinicians, musicians, therapists, and community professionals to explore practical questions and gaps that literature may not fully address.</p><p>Expert commentary complements but does not replace published evidence. Quotations are published only with permission and approval.</p></div>
        <p className="mt-8 max-w-4xl border-l-2 border-gold-700 pl-4 text-sm leading-6 text-teal-700">Interview insights represent individual professional perspectives and should be interpreted alongside current research.</p>
      </PageContainer>
    </header>

    <PageContentsLayout items={pageContents}>
      <section className="py-20 sm:py-28">
        <PageContainer className="grid items-center gap-12 lg:grid-cols-[1fr_.8fr] lg:gap-16">
          <div><SectionHeading id="disciplines-represented" title="Disciplines Represented" subtitle="RagaMind is designed to place several forms of professional and lived perspective in conversation without treating them as equivalent evidence." /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{expertCategories.map((category) => <li className="border-t border-teal-900/20 py-4 font-semibold" key={category}>{category}</li>)}</ul></div>
          <DisciplineNetwork />
        </PageContainer>
      </section>

      <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-28">
        <PageContainer>
          <SectionHeading id="featured-experts" title="Featured Experts" subtitle="Profiles remain visibly incomplete until identity, credentials, biography, interview details, quotations, and publication permission are verified." />
          <div className="mt-10"><ExpertDirectory experts={experts} /></div>
        </PageContainer>
      </section>

      <section className="py-20 sm:py-28">
        <PageContainer>
          <SectionHeading id="interview-method" title="How Interviews Are Conducted" subtitle="This is an educational interview process that gathers qualitative insight. Interviews are not peer-reviewed research." />
          <ol className="mt-10 grid gap-px border border-teal-900/15 bg-teal-900/15 sm:grid-cols-2 lg:grid-cols-4">{interviewProcess.map((step, index) => <li className="min-h-44 bg-ivory p-6" key={step}><span className="font-display text-xl font-bold text-gold-700">0{index + 1}</span><h3 className="mt-7 font-display text-xl font-bold">{step}</h3></li>)}</ol>
        </PageContainer>
      </section>

      <section className="border-y border-teal-900/10 bg-sage-100/60 py-20 sm:py-24">
        <PageContainer>
          <SectionHeading id="shared-questions" title="Common Questions Across Interviews" subtitle="These shared prompts will later help visitors compare approved responses across disciplines. No answers are currently published here." />
          <ol className="mt-10 grid gap-6 lg:grid-cols-2">{sharedInterviewQuestions.map((question, index) => <li className="border-t border-teal-900/20 py-5" key={question}><span className="text-sm font-bold text-gold-700">Question {index + 1}</span><p className="mt-3 text-lg leading-8 text-teal-800">{question}</p><p className="mt-3 text-sm text-teal-700">[APPROVED COMPARATIVE RESPONSES NOT YET AVAILABLE]</p></li>)}</ol>
        </PageContainer>
      </section>

      <section className="py-20 sm:py-28">
        <PageContainer className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-gold-700">Research connection</p>
          <div><SectionHeading id="evidence-to-conversation" title="From Evidence to Conversation" /><div className="mt-7 max-w-3xl space-y-4 text-lg leading-8 text-teal-800"><p>Literature can identify patterns, limitations, and areas of uncertainty. Educational interviews may help clarify practical implications and surface questions that research has not fully addressed.</p><p>Expert perspectives do not establish causation or therapeutic efficacy and should be considered alongside current evidence.</p></div><Link className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-teal-900 underline decoration-gold-700 underline-offset-4" to="/evidence">Visit the Evidence Hub <ArrowRight size={17} aria-hidden="true" /></Link></div>
        </PageContainer>
      </section>

      <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-24">
        <PageContainer>
          <SectionHeading id="publication-standards" title="Publication and Consent Standards" subtitle="Public profiles contain only information that is appropriate, verified, and approved for publication." />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">{publicationStandards.map((standard) => <li className="flex gap-4 border-t border-teal-900/20 py-5" key={standard}><CheckCircle2 className="mt-1 shrink-0 text-gold-700" size={20} aria-hidden="true" /><span className="leading-7 text-teal-800">{standard}</span></li>)}</ul>
          <p className="mt-8 max-w-4xl border-l-2 border-gold-700 pl-4 text-sm leading-6 text-teal-700">Private contact information, unpublished transcripts, raw notes, scheduling details, and consent records are not stored in public frontend data files.</p>
        </PageContainer>
      </section>

      <section className="py-20 sm:py-28">
        <PageContainer>
          <SectionHeading id="future-perspectives" title="Future Perspectives" subtitle="Additional perspectives are being sought. These labels describe future needs and do not imply that an interview has occurred." />
          <div className="mt-10 grid gap-px border border-teal-900/15 bg-teal-900/15 sm:grid-cols-2 lg:grid-cols-3">{futurePerspectives.map((perspective) => <article className="min-h-40 bg-ivory p-6" key={perspective.label}><span className="rounded-full border border-teal-900/20 bg-sage-100 px-3 py-1.5 text-sm font-bold text-teal-900">{perspective.status}</span><h3 className="mt-7 font-display text-xl font-bold">{perspective.label}</h3></article>)}</div>
          <aside className="mt-12 border border-teal-900/20 bg-sage-100/65 p-6 sm:p-8"><h3 className="font-display text-2xl font-bold">Educational perspective disclaimer</h3><p className="mt-4 max-w-4xl leading-7 text-teal-800">Expert interviews provide educational and professional perspectives. They do not constitute medical advice, institutional endorsement, or proof that a particular music-based approach is clinically effective.</p></aside>
        </PageContainer>
      </section>
    </PageContentsLayout>
  </>
}
