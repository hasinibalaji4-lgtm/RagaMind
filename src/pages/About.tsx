import { Accessibility, BookOpenCheck, Brain, HeartHandshake, Music2, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PrincipleCard } from '../components/about/PrincipleCard'
import { ChromesthesiaMotif } from '../components/about/ChromesthesiaMotif'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'
import { EditorialInfoCard } from '../components/EditorialInfoCard'

const principles = [
  { title: 'Evidence', description: 'Scientific statements should be supported, carefully qualified, and connected to verified sources.', icon: BookOpenCheck },
  { title: 'Accessibility', description: 'Educational information should be understandable and usable by people with varied needs.', icon: Accessibility },
  { title: 'Cultural respect', description: 'Carnatic musical tradition should be represented with care and appropriate teacher review.', icon: HeartHandshake },
  { title: 'Community', description: 'The project should remain attentive to older adults, caregivers, educators, and community partners.', icon: UsersRound },
]

const foundations = [
  { title: 'Science', description: 'Understanding what research currently supports.', icon: Brain },
  { title: 'Culture', description: 'Respecting Carnatic tradition and clearly identifying cultural knowledge.', icon: Music2 },
  { title: 'Community', description: 'Learning from experts, musicians, caregivers, older adults, and users.', icon: UsersRound },
]

export function About() {
  return <>
    <PageMeta title="About RagaMind" description="Learn about RagaMind's purpose, founder story, guiding principles, and future direction." />

    <header className="border-b border-teal-900/10 py-20 sm:py-28">
      <PageContainer>
        <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">About the project</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-tight sm:text-7xl">About RagaMind</h1>
        <p className="mt-7 max-w-3xl text-xl leading-8 text-teal-800 sm:text-2xl sm:leading-9">An educational initiative exploring the intersection of Carnatic music, neuroscience, and healthy aging.</p>
      </PageContainer>
    </header>

    <section className="py-20 sm:py-24">
      <PageContainer className="grid gap-8 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
        <p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Why RagaMind?</p>
        <div><SectionHeading title="Why RagaMind" /><div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-teal-800"><p>RagaMind grew from a long-standing connection to Carnatic music and a curiosity about how the brain responds to musical experience.</p><p>The project brings science and culture into careful conversation, making research more understandable for students, older adults, caregivers, and communities without presenting educational material as medical guidance.</p></div></div>
      </PageContainer>
    </section>

    <section className="border-y border-burgundy/10 bg-white/35 py-20 sm:py-24">
      <PageContainer className="grid gap-8 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
        <div><p className="text-sm font-bold uppercase tracking-[.22em] text-gold-700">Personal origin</p><ChromesthesiaMotif /></div>
        <div><SectionHeading title="Where RagaMind Began" /><div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-teal-800"><p>RagaMind grew from a personal curiosity about how the brain experiences music.</p><p>I experience chromesthesia, a form of synesthesia in which sound can evoke consistent visual impressions such as color, shape, or movement. For years, music was not something I only heard—it also felt visually structured.</p><p>That experience made me curious about a larger question:</p><p className="border-l-2 border-gold-700 pl-4 font-display text-2xl font-bold leading-9 text-ink">Why can music affect perception, emotion, memory, and attention so strongly?</p><p>That question gradually developed into an interest in neuroscience, especially how the brain processes music and why musical experiences can remain meaningful across the lifespan.</p><p>As I explored research on music, cognition, and healthy aging, I became interested in another gap: Carnatic music, the tradition I grew up learning, is rarely represented in this research.</p><p>RagaMind grew from the intersection of those two interests—neuroscience and Carnatic music.</p></div></div>
      </PageContainer>
    </section>

    <section className="py-20 sm:py-24">
      <PageContainer><SectionHeading title="Three Foundations of RagaMind" /><div className="mt-10 grid gap-5 md:grid-cols-3">{foundations.map((foundation) => <EditorialInfoCard key={foundation.title} {...foundation} />)}</div></PageContainer>
    </section>

    <section className="border-y border-teal-900/10 bg-white/35 py-20 sm:py-24">
      <PageContainer className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div><SectionHeading title="Founder Story" /><p className="mt-5 text-sm leading-6 text-teal-700">A student-led project grounded in research, music, and community learning.</p></div>
        <div className="max-w-3xl space-y-4 text-lg leading-8 text-teal-800"><p>The founder is a high school student with more than thirteen years of Carnatic vocal training and an interest in neuroscience. Building RagaMind is also a way to learn software engineering through a real, long-term educational project.</p><p>The work began with an annotated bibliography and research matrix and continues through conversations with researchers, clinicians, music therapists, and Carnatic musicians. This section will grow as founder-reviewed reflections are ready to share.</p></div>
      </PageContainer>
    </section>

    <section className="py-20 sm:py-24">
      <PageContainer><SectionHeading title="Guiding Principles" subtitle="Four standards guide how RagaMind learns, communicates, and grows." /><div className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">{principles.map((principle) => <PrincipleCard key={principle.title} {...principle} />)}</div></PageContainer>
    </section>

    <section className="bg-sage-100/65 py-20 sm:py-24">
      <PageContainer className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        <div><SectionHeading title="Looking Ahead" /></div>
        <div><p className="max-w-3xl text-lg leading-8 text-teal-800">RagaMind will continue to grow through reviewed expert interviews, approved Carnatic recordings, evidence updates, educational outreach, and a future senior-living pilot. Each addition will be published only after the relevant content, permissions, and sources are verified.</p><Link className="mt-8 inline-flex min-h-11 items-center rounded-full bg-teal-900 px-6 py-3 font-bold text-white hover:bg-teal-800" to="/evidence">Explore the Evidence Hub</Link></div>
      </PageContainer>
    </section>
  </>
}
