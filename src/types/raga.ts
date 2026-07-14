export type RagaTheme =
  | 'Rest and Relaxation'
  | 'Morning and Renewal'
  | 'Joy and Warmth'
  | 'Compassion and Calm'
  | 'Strength and Confidence'

export interface RagaAssociation {
  type: 'Traditional association' | 'Teacher insight'
  text: string
}

export interface AudioRecording {
  status: 'coming-soon' | 'available'
  title: string
  duration?: string
  performer: string
  credits: string
  listeningNotes: string
  src?: string
}

export interface RagaReference {
  citation: string
  link?: string
  verificationStatus: 'awaiting-verification'
}

export interface RagaExpertInsight {
  expert: string
  quotation: string
  approvalStatus: 'awaiting-approval'
}

export interface Raga {
  id: string
  slug: string
  name: string
  experienceTheme: RagaTheme
  shortDescription: string
  traditionalBackground: string
  traditionalAssociations: RagaAssociation[]
  teacherNotes: string
  musicalCharacteristics: string
  scientificContext: string
  limitations: string
  listeningGuidance: string[]
  reflectionPrompts: string[]
  audio: AudioRecording
  expertInsight: RagaExpertInsight
  references: RagaReference[]
  lastReviewed: string
  imageStatus: 'awaiting-approved-visual'
}
