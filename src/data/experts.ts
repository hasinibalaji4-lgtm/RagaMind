import type { Expert, ExpertPerspective } from '../types/expert'

// Add an expert only after their public name, profile details, and publication
// permissions have been verified. This keeps unpublished interview work private.
export const experts: Expert[] = []

export const expertPerspectives: ExpertPerspective[] = [
  { id: 'neuroscience-aging', category: 'Neuroscience and Cognitive Aging', whyItMatters: 'Helps place questions about music, cognition, and aging within appropriate scientific limits.', status: 'Seeking perspective', relatedExpertIds: [] },
  { id: 'music-therapy', category: 'Music Therapy', whyItMatters: 'Helps distinguish credentialed practice from recreational and educational music activities.', status: 'Seeking perspective', relatedExpertIds: [] },
  { id: 'carnatic-music', category: 'Carnatic Music', whyItMatters: 'Helps preserve cultural, musical, and teaching context.', status: 'Seeking perspective', relatedExpertIds: [] },
  { id: 'senior-living', category: 'Senior Living and Community Practice', whyItMatters: 'Helps identify practical needs for accessible community programming.', status: 'Seeking perspective', relatedExpertIds: [] },
  { id: 'caregivers-listeners', category: 'Caregivers and Listeners', whyItMatters: 'Helps include lived experience, preferences, and practical questions.', status: 'Seeking perspective', relatedExpertIds: [] },
]

export const sharedInterviewQuestions = [
  'What is one misconception people have about music and brain health?',
  'What makes a music-based experience meaningful for an older adult?',
  'What should caregivers realistically expect from music-based activities?',
  'How should emerging evidence be communicated responsibly?',
  'What research gaps are most important?',
  'How does cultural familiarity shape engagement?',
]
