import type { EvidenceLevel, EvidenceSummary, ResearchSource, ResearchTheme, ResearchThemeContent } from '../types/evidence'

const placeholder = (label: string) => `[VERIFIED RESEARCH ${label.toUpperCase()} NEEDED]`

export const evidenceLegend: { level: EvidenceLevel; description: string }[] = [
  { level: 'Strong', description: 'Reserved for findings supported by multiple high-quality sources.' },
  { level: 'Moderate', description: 'Reserved for a useful but qualified body of evidence.' },
  { level: 'Emerging', description: 'Reserved for early or developing evidence.' },
  { level: 'Limited', description: 'Reserved for areas with too little evidence for firm conclusions.' },
]

export const evidenceAtGlance: EvidenceSummary[] = [
  ['mood', 'Mood and emotional well-being', 'Strong'],
  ['depression', 'Depressive symptoms', 'Moderate to Strong'],
  ['cognition', 'Cognition and active participation', 'Emerging to Moderate'],
  ['brain', 'Music and brain systems', 'Strong theoretical support'],
  ['familiarity', 'Personalization and cultural familiarity', 'Strong practical support'],
  ['carnatic', 'Carnatic-specific evidence', 'Emerging'],
].map(([id, topic, evidenceLevel]) => ({ id, topic, evidenceLevel: evidenceLevel as EvidenceLevel, synthesis: placeholder('synthesis'), limitation: placeholder('important limitation') }))

export const researchThemes: ResearchThemeContent[] = [
  { id: 'therapy', title: 'Music Therapy and Dementia', relatedTheme: 'Music Therapy and Dementia' },
  { id: 'brain', title: 'Music and the Brain', relatedTheme: 'Music and Neuroscience' },
  { id: 'carnatic', title: 'Carnatic Music and Musicology', relatedTheme: 'Carnatic Music and Musicology' },
].map(({ id, title, relatedTheme }) => ({ id, title, relatedTheme: relatedTheme as ResearchTheme, summary: placeholder('plain-language summary'), takeaways: [placeholder('key takeaway')], limitations: [placeholder('theme limitation')] }))

export const researchThemeOptions: ResearchTheme[] = [
  'Music Therapy and Dementia',
  'Music and Neuroscience',
  'Carnatic Music and Musicology',
]

// Structural entries only. Replace complete records with verified source data; never partially publish them.
export const researchSources: ResearchSource[] = researchThemeOptions.map((theme, index) => ({
  id: `source-placeholder-${index + 1}`,
  title: '[VERIFIED SOURCE TITLE NEEDED]',
  authors: '[VERIFIED AUTHORS NEEDED]',
  year: '[YEAR NEEDED]',
  sourceType: '[SOURCE TYPE NEEDED]',
  theme,
  summary: '[VERIFIED SUMMARY NEEDED]',
  keyFinding: '[VERIFIED KEY FINDING NEEDED]',
  limitations: '[VERIFIED LIMITATIONS NEEDED]',
  relevance: '[VERIFIED RAGAMIND RELEVANCE NEEDED]',
  citation: '[FULL APA CITATION NEEDED]',
  isPlaceholder: true,
}))
