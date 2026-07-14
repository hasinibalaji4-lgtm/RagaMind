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
    status: 'Confirmed',
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

export const perspectivesBeingGathered: { discipline: string; whyItMatters: string; status: InterviewStatus }[] = [
  { discipline: 'Neuroscience and Cognitive Aging', whyItMatters: 'Helps place questions about music, cognition, and aging within appropriate scientific limits.', status: 'Seeking perspective' },
  { discipline: 'Music Therapy', whyItMatters: 'Helps distinguish credentialed practice from recreational and educational music activities.', status: 'Seeking perspective' },
  { discipline: 'Carnatic Music', whyItMatters: 'Helps preserve cultural, musical, and teaching context.', status: 'Seeking perspective' },
  { discipline: 'Senior Living', whyItMatters: 'Helps identify practical needs for accessible community programming.', status: 'Seeking perspective' },
  { discipline: 'Geriatrics', whyItMatters: 'Helps keep healthy-aging communication cautious and clinically appropriate.', status: 'Seeking perspective' },
  { discipline: 'Caregivers and Listeners', whyItMatters: 'Helps include lived experience, preferences, and practical questions.', status: 'Seeking perspective' },
]

export const sharedInterviewQuestions = [
  'What is one misconception people have about music and brain health?',
  'What makes a music-based experience meaningful for an older adult?',
  'What should caregivers realistically expect from music-based activities?',
  'How should emerging evidence be communicated responsibly?',
  'What research gaps are most important?',
  'How does cultural familiarity shape engagement?',
]
