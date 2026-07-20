export type ExpertCategory =
  | 'Neuroscience and Cognitive Aging'
  | 'Music Therapy'
  | 'Carnatic Music'
  | 'Senior Living and Community Practice'
  | 'Caregivers and Listeners'

export type InterviewStatus =
  | 'Status not published'
  | 'Confirmed'
  | 'Scheduled'
  | 'In progress'
  | 'Seeking perspective'

export interface PublicationPermission {
  biography: 'awaiting-verification' | 'approved'
  quotations: 'awaiting-approval' | 'approved'
  headshot: 'awaiting-permission' | 'approved'
  transcript: 'not-published' | 'approved'
}

export interface ExpertQuote {
  text: string
  status: 'awaiting-approval' | 'approved'
}

export interface ExpertTranscriptSection {
  heading: string
  content: string
  status: 'approved'
}

export interface RelatedEvidenceTopic {
  label: string
  route: '/evidence'
  status: 'awaiting-topic-mapping' | 'verified'
}

export interface ExpertInterview {
  date: string
  format: string
  status: InterviewStatus
  keyThemes: string[]
  summary: string
  approvedQuotes: ExpertQuote[]
  transcriptSections: ExpertTranscriptSection[]
}

export interface Expert {
  id: string
  slug: string
  name: string
  title: string
  institution: string
  category?: ExpertCategory
  biography: string
  headshot?: string
  headshotAlt: string
  interview: ExpertInterview
  whyPerspectiveMatters: string
  approvedInsights: string[]
  questionsRemaining: string[]
  relatedEvidenceTopics: RelatedEvidenceTopic[]
  references: string[]
  permissions: PublicationPermission
  lastReviewed: string
}

export interface ExpertPerspective {
  id: string
  category: string
  whyItMatters: string
  status: InterviewStatus
  relatedExpertIds: string[]
}
