import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Raga } from '../../types/raga'
import { PageContainer } from '../PageContainer'
import { PageMeta } from '../PageMeta'
import { SectionHeading } from '../SectionHeading'
import { RagaAudio } from './RagaAudio'
import { RagaVisual } from './RagaVisual'

export function RagaProfile({ raga, index }: { raga: Raga; index: number }) {
  return <>
    <PageMeta title={raga.name} description={`An educational RagaMind profile of ${raga.name} and its traditional associations.`} />
    <header className="border-b border-teal-900/10 py-16 sm:py-24">
      <PageContainer className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div>
          <Link className="inline-flex min-h-11 items-center gap-2 font-semibold text-teal-900 underline decoration-gold-700 underline-offset-4" to="/ragas"><ArrowLeft size={17} aria-hidden="true" />Raga Library</Link>
          <p className="mt-8 text-sm font-bold uppercase tracking-[.18em] text-gold-700">{raga.experienceTheme}</p>
          <h1 className="mt-4 scroll-mt-28 font-display text-5xl font-bold sm:text-7xl lg:scroll-mt-52" id="profile-overview" tabIndex={-1}>{raga.name}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-teal-800">{raga.shortDescription}</p>
          <p className="mt-6 max-w-3xl border-l-2 border-gold-700 pl-4 text-sm leading-6 text-teal-700">{raga.limitations}</p>
        </div>
        <div><RagaVisual name={raga.name} index={index} /><p className="mt-2 text-sm text-teal-700">[APPROVED PROFILE VISUAL NEEDED]</p></div>
      </PageContainer>
    </header>

      <section className="py-20 sm:py-28">
        <PageContainer>
          <SectionHeading id="musical-context" title="Musical and Traditional Context" subtitle="Traditional musical knowledge and teacher insight are presented separately from scientific evidence." />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article><h3 className="font-display text-2xl font-bold">Traditional background</h3><p className="mt-4 leading-7 text-teal-700">{raga.traditionalBackground}</p></article>
            <article><h3 className="font-display text-2xl font-bold">Musical characteristics</h3><p className="mt-4 leading-7 text-teal-700">{raga.musicalCharacteristics}</p></article>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">{raga.traditionalAssociations.map((association) => <article className="border border-teal-900/15 bg-white/45 p-6" key={association.type}><p className="text-sm font-bold uppercase tracking-[.14em] text-gold-700">{association.type}</p><p className="mt-4 leading-7 text-teal-800">{association.text}</p></article>)}</div>
          <article className="mt-10 border-t border-teal-900/20 pt-8"><h3 className="font-display text-2xl font-bold">Teacher-informed perspective</h3><p className="mt-4 leading-7 text-teal-800">{raga.teacherNotes}</p><p className="mt-4 text-sm text-teal-700">Final published descriptions will be reviewed before release. The teacher is not identified because a verified name and publication permission have not been supplied.</p></article>
        </PageContainer>
      </section>

      <section className="border-y border-teal-900/10 bg-sage-100/60 py-20 sm:py-24">
        <PageContainer>
          <SectionHeading id="profile-scientific-context" title="Scientific Context" />
          <p className="mt-7 max-w-4xl text-lg leading-8 text-teal-800">{raga.scientificContext}</p>
          <div className="mt-8 max-w-4xl border-l-2 border-gold-700 pl-4"><h3 className="font-bold">Important limitations</h3><p className="mt-2 leading-7 text-teal-700">{raga.limitations}</p></div>
          <p className="mt-8 text-teal-700">[VERIFIED EVIDENCE HUB CITATIONS NEEDED]</p>
          <Link className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-teal-900 underline decoration-gold-700 underline-offset-4" to="/evidence">Explore broader research context <ArrowRight size={17} aria-hidden="true" /></Link>
        </PageContainer>
      </section>

      <section className="py-20 sm:py-28">
        <PageContainer>
          <SectionHeading id="listening-experience" title="Listening Experience" subtitle="This optional listening guide is educational and reflective. It is not therapy or medical guidance." />
          <div className="mt-12 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <article><h3 className="font-display text-2xl font-bold">How to listen</h3><ul className="mt-5 divide-y divide-teal-900/15 border-y border-teal-900/15">{raga.listeningGuidance.map((item) => <li className="py-4 leading-7 text-teal-800" key={item}>{item}</li>)}</ul></article>
            <RagaAudio recording={raga.audio} ragaName={raga.name} />
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-24">
        <PageContainer>
          <SectionHeading id="private-reflection" title="Optional Private Reflection" subtitle="These prompts are for your own reflection. RagaMind does not collect, save, or transmit your responses." />
          <ol className="mt-10 grid gap-px border border-teal-900/15 bg-teal-900/15 sm:grid-cols-2 lg:grid-cols-3">{raga.reflectionPrompts.map((prompt, promptIndex) => <li className="min-h-40 bg-ivory p-6" key={prompt}><span className="font-display text-xl font-bold text-gold-700">0{promptIndex + 1}</span><p className="mt-6 leading-7 text-teal-800">{prompt}</p></li>)}</ol>
        </PageContainer>
      </section>

      <section className="py-20 sm:py-28">
        <PageContainer>
          <SectionHeading id="profile-transparency" title="Transparency and Review" />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article><h3 className="font-display text-2xl font-bold">Expert perspective</h3><blockquote className="mt-5 border-l-2 border-gold-700 pl-4 italic text-teal-700">“{raga.expertInsight.quotation}”</blockquote><p className="mt-4 text-sm text-teal-700">{raga.expertInsight.expert} · {raga.expertInsight.approvalStatus}</p></article>
            <article><h3 className="font-display text-2xl font-bold">References and review</h3><ul className="mt-5 space-y-3">{raga.references.map((reference, referenceIndex) => <li className="text-teal-700" key={referenceIndex}>{reference.citation} · {reference.verificationStatus}</li>)}</ul><p className="mt-5"><strong>Last reviewed:</strong> {raga.lastReviewed}</p></article>
          </div>
          <aside className="mt-12 border border-teal-900/20 bg-sage-100/65 p-6 sm:p-8"><h3 className="font-display text-2xl font-bold">Educational disclaimer</h3><p className="mt-4 max-w-4xl leading-7 text-teal-800">RagaMind presents traditional musical perspectives, teacher-informed commentary, and general research context for educational purposes. Individual responses to music vary. This resource is not medical advice, diagnosis, or treatment.</p></aside>
        </PageContainer>
      </section>
  </>
}
