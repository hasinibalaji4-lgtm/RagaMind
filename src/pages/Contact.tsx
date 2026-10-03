import { ExternalLink, MessageCircleMore, MessagesSquare, UsersRound } from 'lucide-react'
import { PageContainer } from '../components/PageContainer'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'
import { googleFormUrl } from '../data/contact'

const inquiryTypes = [
  'Expert interview interest',
  'Senior living pilot interest',
  'Carnatic music or recording collaboration',
  'Research corrections',
  'Accessibility feedback',
  'General educational questions',
]

const waysToConnect = [
  { label: 'Feedback', icon: MessageCircleMore },
  { label: 'Collaboration', icon: UsersRound },
  { label: 'Interview inquiries', icon: MessagesSquare },
]

export function Contact() {
  return <>
    <PageMeta title="Contact RagaMind" description="Contact RagaMind about educational questions, corrections, collaborations, accessibility, or future community work." />

    <header className="border-b border-teal-900/10 py-20 sm:py-28">
      <PageContainer>
        <h1 className="max-w-5xl font-display text-5xl font-bold leading-tight sm:text-7xl">Contact RagaMind</h1>
        <p className="mt-7 max-w-4xl text-xl leading-8 text-teal-800 sm:text-2xl sm:leading-9">Questions, corrections, collaborations, and community conversations are welcome.</p>
        <ul className="mt-9 grid max-w-3xl gap-3 sm:grid-cols-3" aria-label="Ways to connect">{waysToConnect.map(({ icon: Icon, label }, index) => <li className={`flex items-center gap-3 rounded-2xl border border-burgundy/15 px-4 py-4 font-semibold text-ink ${index === 1 ? 'bg-surface-burgundy' : 'bg-surface-cream'}`} key={label}><Icon className="h-5 w-5 shrink-0 text-gold-700" strokeWidth={1.8} aria-hidden="true" />{label}</li>)}</ul>
      </PageContainer>
    </header>

    <div>
      <section className="py-16 sm:py-20">
        <PageContainer className="max-w-5xl">
          <SectionHeading title="How to Connect" subtitle="A future contact form will support:" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2" role="list">{inquiryTypes.map((item) => <li className="border-l-2 border-gold-700 py-2 pl-4 text-lg leading-7 text-teal-900" key={item}>{item}</li>)}</ul>
          <div className="mt-8 max-w-4xl space-y-4 text-lg leading-8 text-teal-800">
            <p>RagaMind cannot provide medical advice. Please do not submit medical records, diagnoses, medication details, passwords, or other sensitive information.</p>
            <p>Quotations or interview material will not be published without permission.</p>
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-teal-900/10 bg-sage-100/60 py-16 sm:py-20">
        <PageContainer className="max-w-5xl">
          <SectionHeading title="Contact Form" />
          {googleFormUrl ? <a className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-900 px-6 py-3 font-bold text-white hover:bg-teal-800" href={googleFormUrl} rel="noopener noreferrer" target="_blank">Open the RagaMind contact form <ExternalLink aria-hidden="true" className="h-5 w-5" /><span className="sr-only"> (opens in a new tab)</span></a> : <div className="mt-8 border-l-2 border-gold-700 bg-ivory p-6 sm:p-8"><p className="font-display text-2xl font-bold">Contact options are being prepared</p><p className="mt-3 leading-7 text-teal-800">A verified, privacy-conscious contact method will be published here when it is ready. The Evidence Hub and Resources pages remain available for self-guided exploration.</p></div>}
          {googleFormUrl && <p className="mt-6 leading-7 text-teal-800">Accessible alternatives will be documented alongside the form.</p>}
        </PageContainer>
      </section>

      <section className="py-14 sm:py-16">
        <PageContainer className="max-w-5xl">
          <h2 className="font-display text-2xl font-bold">Privacy note</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-teal-800">Information submitted through the form will be used only to respond to the inquiry and manage RagaMind project communication. Please do not submit sensitive medical or personal information.</p>
        </PageContainer>
      </section>
    </div>
  </>
}
