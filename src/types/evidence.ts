export type EvidenceLevel =
  | 'Strong'
  | 'Moderate to Strong'
  | 'Moderate'
  | 'Emerging to Moderate'
  | 'Emerging'
  | 'Limited'
  | 'Strong theoretical support'
  | 'Strong practical support'

export type ResearchTheme =
  | 'Music Therapy and Dementia'
  | 'Music and Neuroscience'
  | 'Carnatic Music and Musicology'

export interface ResearchSource {
  id: string
  title: string
  authors: string
  year: string
  sourceType: string
  theme: ResearchTheme
  summary: string
  keyFinding: string
  limitations: string
  relevance: string
  externalLink?: string
  citation: string
  isPlaceholder: true
}

export interface EvidenceSummary {
  id: string
  topic: string
  evidenceLevel: EvidenceLevel
  synthesis: string
  limitation: string
}

export interface ResearchThemeContent {
  id: string
  title: string
  summary: string
  takeaways: string[]
  limitations: string[]
  relatedTheme: ResearchTheme
}
