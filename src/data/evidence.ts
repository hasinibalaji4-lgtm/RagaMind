import type { EvidenceLevel, ResearchQuestion, ResearchSource, ResearchTheme, ResearchThemeContent } from '../types/evidence'

const placeholder = (label: string) => `[VERIFIED RESEARCH ${label.toUpperCase()} NEEDED]`

export const evidenceLegend: { level: EvidenceLevel; description: string }[] = [
  { level: 'Strong', description: 'Reserved for findings supported by multiple high-quality sources.' },
  { level: 'Moderate', description: 'Reserved for a useful but qualified body of evidence.' },
  { level: 'Emerging', description: 'Reserved for early or developing evidence.' },
  { level: 'Limited', description: 'Reserved for areas with too little evidence for firm conclusions.' },
]

const questions = [
  ['mood', 'Can music support mood and emotional well-being?', 'Strong'],
  ['depression', 'Can music reduce depressive symptoms in people with dementia?', 'Moderate to Strong'],
  ['cognition', 'Can music support cognition?', 'Emerging to Moderate'],
  ['participation', 'Does active participation matter?', 'Emerging to Moderate'],
  ['brain', 'Why does music affect the brain?', 'Strong theoretical support'],
  ['familiarity', 'Does cultural familiarity and personalization matter?', 'Strong practical support'],
  ['carnatic', 'What evidence exists specifically for Carnatic music?', 'Emerging'],
  ['programs', 'How should music-based programs be designed?', 'Limited'],
] as const

export const researchQuestions: ResearchQuestion[] = questions.map(([id, question, evidenceLevel]) => ({
  id,
  question,
  evidenceLevel,
  answer: placeholder('concise answer'),
  findings: placeholder('synthesis'),
  limitations: placeholder('limitations'),
  relevance: placeholder('RagaMind relevance'),
  citations: '[VERIFIED CITATIONS NEEDED]',
}))

export const evidenceSnapshot: { topic: string; level: EvidenceLevel; explanation: string }[] = [
  ['Mood and emotional well-being', 'Strong'],
  ['Depressive symptoms', 'Moderate to Strong'],
  ['Behavioral symptoms', 'Moderate'],
  ['Cognition', 'Emerging to Moderate'],
  ['Active participation', 'Emerging to Moderate'],
  ['Music and neural reward systems', 'Strong theoretical support'],
  ['Cultural familiarity and personalization', 'Strong practical support'],
  ['Carnatic-specific brain-health research', 'Emerging'],
].map(([topic, level]) => ({ topic, level: level as EvidenceLevel, explanation: placeholder('explanation') }))

export const researchThemes: ResearchThemeContent[] = [
  { id: 'therapy', title: 'Music Therapy and Dementia', sourceCount: 5 },
  { id: 'brain', title: 'Music and the Brain', sourceCount: 4 },
  { id: 'carnatic', title: 'Carnatic Music and Musicology', sourceCount: 5 },
].map(({ id, title, sourceCount }) => ({
  id, title, sourceCount,
  introduction: placeholder('plain-language introduction'),
  findings: placeholder('key findings'),
  limitations: placeholder('limitations'),
  questions: placeholder('unanswered questions'),
  relevance: placeholder('RagaMind relevance'),
  references: '[VERIFIED REFERENCES NEEDED]',
}))

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
