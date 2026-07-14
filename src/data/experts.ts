import type { Expert, ExpertCategory, InterviewStatus } from '../types/expert'

export const expertCategories: ExpertCategory[] = [
  'Neuroscience and Cognitive Aging',
  'Music Therapy',
  'Geriatrics and Healthy Aging',
  'Carnatic Music and Musicology',
  'Senior Living and Community Programs',
  'Caregivers and Listeners',
]

const createPlaceholderExpert = (id: string, slug: string, name: string): Expert => ({
  id,
  slug,
  name,
  title: '[APPROVED TITLE NEEDED]',
  institution: '[APPROVED INSTITUTION NEEDED]',
  biography: '[BIOGRAPHY AWAITING VERIFICATION]',
  headshotAlt: `[APPROVED HEADSHOT AND DESCRIPTIVE ALT TEXT NEEDED FOR ${name}]`,
  interview: {
    date: '[INTERVIEW DATE NOT PUBLISHED]',
    format: '[INTERVIEW FORMAT NOT PUBLISHED]',
    status: 'Status not published',
    keyThemes: [],
    summary: '[INTERVIEW SUMMARY COMING SOON AFTER REVIEW AND APPROVAL]',
    approvedQuotes: [],
    transcriptSections: [],
  },
  whyPerspectiveMatters: '[APPROVED EXPLANATION NEEDED]',
  approvedInsights: [],
  questionsRemaining: [],
  relatedEvidenceTopics: [{ label: '[RELATED EVIDENCE HUB TOPIC MAPPING NEEDED]', route: '/evidence', status: 'awaiting-topic-mapping' }],
  references: ['[VERIFIED RELATED RESOURCE NEEDED]'],
  permissions: {
    biography: 'awaiting-verification', quotations: 'awaiting-approval',
    headshot: 'awaiting-permission', transcript: 'not-published',
  },
  lastReviewed: '[REVIEW DATE NEEDED]',
})

export const experts: Expert[] = [
  createPlaceholderExpert('expert-1', 'amy-rodriguez', 'Dr. Amy Rodriguez'),
  createPlaceholderExpert('expert-2', 'kayci-vickers', 'Dr. Kayci Vickers'),
]

export const futurePerspectives: { label: string; status: InterviewStatus }[] = [
  { label: 'Music therapist', status: 'Seeking perspective' },
  { label: 'Senior living activities director', status: 'Seeking perspective' },
  { label: 'Carnatic musician or teacher', status: 'Seeking perspective' },
  { label: 'Geriatrician', status: 'Seeking perspective' },
  { label: 'Caregiver', status: 'Seeking perspective' },
  { label: 'Older adult listener', status: 'Seeking perspective' },
]

export const sharedInterviewQuestions = [
  'What is one misconception people have about music and brain health?',
  'What makes a music-based experience meaningful for an older adult?',
  'What should caregivers realistically expect from music-based activities?',
  'How should emerging evidence be communicated responsibly?',
  'What research gaps are most important?',
  'How does cultural familiarity shape engagement?',
]
