import { BookOpen, Brain, Building2, GraduationCap, HeartHandshake, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { PageContentsLayout } from '../components/PageContentsLayout'
import { PageMeta } from '../components/PageMeta'
import { AudienceCard } from '../components/resource/AudienceCard'
import { ResourceCategoryList } from '../components/resource/ResourceCategoryList'
import { ResourceLibrary } from '../components/resource/ResourceLibrary'
import { SectionHeading } from '../components/SectionHeading'

const pageContents = [
  { id: 'resources-overview', label: 'Overview' },
  { id: 'choose-your-path', label: 'Choose Your Path' },
  { id: 'caregivers-families', label: 'Caregivers and Families' },
  { id: 'older-adults', label: 'Older Adults' },
  { id: 'music-therapy-care', label: 'Music Therapy' },
  { id: 'carnatic-music-education', label: 'Carnatic Music' },
  { id: 'senior-living', label: 'Senior Living' },
  { id: 'students-educators', label: 'Students and Educators' },
  { id: 'research-further-reading', label: 'Further Reading' },
  { id: 'resource-standards', label: 'Resource Standards' },
]

const audiences = [
  { title: 'For Older Adults', description: 'Find plain-language starting points for healthy aging, connection, and meaningful activity.', targetId: 'older-adults', icon: HeartHandshake },
  { title: 'For Caregivers and Families', description: 'Find future support for daily life, caregiver well-being, and informed conversations.', targetId: 'caregivers-families', icon: Brain },
  { title: 'For Students and Educators', description: 'Explore pathways for research literacy, culture, interviews, and community projects.', targetId: 'students-educators', icon: GraduationCap },
  { title: 'For Researchers', description: 'Follow curated pathways to evidence types and further reading.', targetId: 'research-further-reading', icon: BookOpen },
  { title: 'For Senior Living Communities', description: 'Review future materials for inclusive, accessible community music programming.', targetId: 'senior-living', icon: Building2 },
  { title: 'For Musicians and Music Therapists', description: 'Understand how educational listening, recreational music, and professional care differ.', targetId: 'music-therapy-care', icon: Music2 },
]

const sectionClassName = 'border-t border-teal-900/10 py-20 sm:py-24'

export function Resources() {
  return <>
    <PageMeta title="Resources" description="Trusted educational and community starting points for caregivers, older adults, students, educators, and community organizations." />

    <section className="py-20 sm:py-28">
      <PageContainer>
        <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Practical next steps</p>
        <h1 className="mt-6 scroll-mt-28 max-w-5xl font-display text-5xl font-bold leading-tight focus:outline-none sm:text-7xl lg:scroll-mt-52" id="resources-overview" tabIndex={-1}>Resources</h1>
        <p className="mt-7 max-w-4xl text-xl leading-8 text-teal-800 sm:text-2xl sm:leading-9">Trusted starting points for caregivers, older adults, students, educators, and community organizations.</p>
        <div className="mt-8 max-w-4xl space-y-4 text-lg leading-8 text-teal-800">
          <p>This page gathers educational and community resources. Every external listing should be independently verified before publication, and inclusion does not imply endorsement.</p>
          <p>For medical concerns, consult a qualified healthcare professional.</p>
        </div>
      </PageContainer>
    </section>

    <PageContentsLayout items={pageContents}>
      <section className="border-y border-teal-900/10 bg-sage-100/55 py-20 sm:py-24">
        <PageContainer>
          <SectionHeading id="choose-your-path" title="Choose Your Path" subtitle="Select the starting point that best matches what you need today." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{audiences.map((audience) => <AudienceCard key={audience.title} {...audience} />)}</div>
        </PageContainer>
      </section>

      <section className={sectionClassName}><PageContainer><SectionHeading id="caregivers-families" title="For Caregivers and Families" subtitle="Future resources will support informed, practical conversations and caregiver well-being." /><ResourceCategoryList categories={['Understanding dementia', 'Communication and daily routines', 'Caregiver well-being', 'Finding local support', 'Preparing for medical appointments', 'Music-based activities at home']} /></PageContainer></section>

      <section className={`${sectionClassName} bg-white/35`}><PageContainer><SectionHeading id="older-adults" title="For Older Adults" subtitle="Plain-language resources for learning, connection, and meaningful activity—without treating normal aging and dementia as the same." /><ResourceCategoryList categories={['Healthy aging', 'Brain-health education', 'Meaningful activity and engagement', 'Accessible music listening', 'Community and social connection', 'Questions to discuss with a healthcare professional']} /></PageContainer></section>

      <section className={sectionClassName}>
        <PageContainer>
          <SectionHeading id="music-therapy-care" title="Music Therapy and Music-Based Care" subtitle="These terms describe different forms of participation and should not be used interchangeably. RagaMind is not a music-therapy provider." />
          <dl className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sage-100 p-6"><dt className="font-display text-xl font-bold">Credentialed music therapy</dt><dd className="mt-3 leading-relaxed text-teal-800">A professional service delivered within the scope of an appropriate credential. [VERIFIED CREDENTIALING DETAILS NEEDED]</dd></div>
            <div className="rounded-2xl bg-sage-100 p-6"><dt className="font-display text-xl font-bold">Recreational music activities</dt><dd className="mt-3 leading-relaxed text-teal-800">Music participation for enjoyment, engagement, or community rather than a clinical service.</dd></div>
            <div className="rounded-2xl bg-sage-100 p-6"><dt className="font-display text-xl font-bold">Personal music listening</dt><dd className="mt-3 leading-relaxed text-teal-800">Listening chosen independently according to a person’s preferences and comfort.</dd></div>
            <div className="rounded-2xl bg-sage-100 p-6"><dt className="font-display text-xl font-bold">Educational raga listening</dt><dd className="mt-3 leading-relaxed text-teal-800">Listening with cultural and musical context for education; it is not presented as therapy.</dd></div>
          </dl>
          <ResourceCategoryList categories={['Professional music therapy organizations', 'Finding a credentialed music therapist', 'Caregiver music-activity guides', 'Ethical and safety considerations', 'Research summaries']} />
        </PageContainer>
      </section>

      <section className={`${sectionClassName} bg-white/35`}><PageContainer><SectionHeading id="carnatic-music-education" title="Learning About Carnatic Music" subtitle="Future sources in this section require teacher verification before publication." /><ResourceCategoryList categories={['Introductory explanations — teacher verification needed', 'Raga and tala education — teacher verification needed', 'Pronunciation guides — teacher verification needed', 'Listening guides — teacher verification needed', 'Cultural and historical context — teacher verification needed', 'Teacher-approved educational resources — verification needed']} /><Link className="mt-8 inline-flex min-h-11 items-center rounded-full bg-teal-900 px-6 py-3 font-bold text-white hover:bg-teal-800" to="/ragas">Explore the Raga Library</Link></PageContainer></section>

      <section className={sectionClassName}><PageContainer><div className="mb-5 inline-flex rounded-full border border-gold-700 px-3 py-1 text-sm font-bold text-gold-700">In Development</div><SectionHeading id="senior-living" title="For Senior Living Communities" subtitle="Future educational materials will support inclusive community activities. RagaMind does not currently provide clinical programming." /><ResourceCategoryList categories={['Planning an inclusive music session', 'Selecting familiar and culturally meaningful music', 'Accessibility considerations', 'Gathering resident feedback', 'Involving families and caregivers', 'Contacting RagaMind about future pilot programs']} /></PageContainer></section>

      <section className={`${sectionClassName} bg-white/35`}><PageContainer><SectionHeading id="students-educators" title="For Students and Educators" subtitle="Future materials will support careful inquiry; no downloadable worksheets are available yet." /><ResourceCategoryList categories={['Understanding research evidence', 'Evaluating scientific claims', 'Neuroscience of music', 'Carnatic music and culture', 'Interview methods', 'Community-project planning', 'Citation and source evaluation']} /><nav aria-label="Related educational pages" className="mt-8 flex flex-wrap gap-4"><Link className="font-bold text-teal-900 underline decoration-gold-700 decoration-2 underline-offset-4" to="/evidence">Evidence Hub</Link><Link className="font-bold text-teal-900 underline decoration-gold-700 decoration-2 underline-offset-4" to="/experts">Expert Perspectives</Link><Link className="font-bold text-teal-900 underline decoration-gold-700 decoration-2 underline-offset-4" to="/about">About RagaMind</Link></nav></PageContainer></section>

      <section className={sectionClassName}>
        <PageContainer>
          <SectionHeading id="research-further-reading" title="Research and Further Reading" subtitle="Curated pathways will complement—not duplicate—the Evidence Hub research library." />
          <ResourceCategoryList categories={['Systematic review', 'Meta-analysis', 'Review article', 'Original research', 'Educational overview', 'Professional organization', 'Caregiver guide']} />
          <p className="mt-7 text-lg leading-8 text-teal-800">Titles, authors or organizations, years, summaries, citations, links, and verification dates will appear only after source review.</p>
          <Link className="mt-6 inline-flex font-bold text-teal-900 underline decoration-gold-700 decoration-2 underline-offset-4" to="/evidence">Review research context in the Evidence Hub</Link>
          <div className="mt-16"><h3 className="font-display text-3xl font-bold text-teal-950">Search the Resource Library</h3><p className="mt-3 max-w-3xl text-lg leading-8 text-teal-800">Filter the verified collection as it grows. The library is intentionally empty until real resources have been reviewed.</p><ResourceLibrary /></div>
        </PageContainer>
      </section>

      <section className="border-y border-teal-900/15 bg-sage-100 py-16 sm:py-20"><PageContainer><SectionHeading id="professional-help" title="When to Seek Professional Help" /><div className="mt-7 max-w-4xl space-y-4 text-lg leading-8 text-teal-900"><p>Contact a qualified healthcare professional for new or worsening cognitive, behavioral, or mood concerns.</p><p>Use local emergency services for urgent or immediate safety concerns. RagaMind cannot provide diagnosis, crisis support, or medical treatment.</p></div></PageContainer></section>

      <section className={sectionClassName}><PageContainer><SectionHeading id="resource-standards" title="How Resources Are Selected" subtitle="Future resources should be reviewed consistently and revisited over time." /><ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">{['Source credibility', 'Relevance', 'Accessibility', 'Clarity', 'Scientific accuracy', 'Cultural respect', 'Current availability', 'Conflicts of interest', 'Date last verified'].map((standard) => <li className="rounded-xl border border-sage-300 bg-white/65 px-5 py-4 font-semibold" key={standard}>{standard}</li>)}</ul><p className="mt-8 text-lg leading-8 text-teal-800">To suggest a correction or share feedback, <Link className="font-bold text-teal-900 underline decoration-gold-700 decoration-2 underline-offset-4" to="/contact">contact RagaMind</Link>.</p></PageContainer></section>

      <section className="bg-teal-950 py-14 text-white"><PageContainer><p className="max-w-5xl text-lg leading-8">RagaMind provides educational resources only. Inclusion of an external resource does not imply endorsement. Information may change over time, and visitors should verify current details directly with the source.</p></PageContainer></section>
    </PageContentsLayout>
  </>
}
