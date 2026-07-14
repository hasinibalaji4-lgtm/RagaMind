export type ResourceAudience =
  | 'Older Adults'
  | 'Caregivers'
  | 'Students and Educators'
  | 'Researchers'
  | 'Senior Living'
  | 'Musicians and Therapists'

export type ResourceTopic =
  | 'Dementia Education'
  | 'Healthy Aging'
  | 'Music Therapy'
  | 'Carnatic Music'
  | 'Caregiving'
  | 'Community Programming'
  | 'Research Literacy'

export type ResourceType =
  | 'Guide'
  | 'Organization'
  | 'Article'
  | 'Video'
  | 'Directory'
  | 'Educational Tool'

export type ResourceVerificationStatus = 'awaiting-verification' | 'verified'

export interface Resource {
  id: string
  title: string
  organization: string
  description: string
  audience: ResourceAudience[]
  topics: ResourceTopic[]
  type: ResourceType
  externalUrl?: string
  region: string
  accessibilityNotes: string
  verifiedDate?: string
  verificationStatus: ResourceVerificationStatus
  featured: boolean
}
