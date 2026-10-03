export type ExpertInsightId =
  | 'recovery-neuroplasticity'
  | 'communicating-science'
  | 'evidence-forms'
  | 'music-as-connection'
  | 'support-not-disease-modification'
  | 'choosing-music'
  | 'tradition-and-research'
  | 'music-across-lifespan'

export interface ExpertInsight {
  id: ExpertInsightId
  title: string
  text: string
  attribution: string
  noteTitle?: string
  note?: string
}
