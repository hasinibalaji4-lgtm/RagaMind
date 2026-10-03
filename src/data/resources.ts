import type { Resource, ResourceAudience, ResourceTopic, ResourceType } from '../types/resource'

export const resourceAudiences: ResourceAudience[] = [
  'Older Adults',
  'Caregivers',
  'Students and Educators',
  'Researchers',
  'Senior Living',
  'Musicians and Therapists',
]

export const resourceTopics: ResourceTopic[] = [
  'Dementia Education',
  'Healthy Aging',
  'Music Therapy',
  'Carnatic Music',
  'Caregiving',
  'Community Programming',
  'Research Literacy',
]

export const resourceTypes: ResourceType[] = [
  'Guide',
  'Organization',
  'Article',
  'Video',
  'Directory',
  'Educational Tool',
]

export const helpfulResourceCategories = [
  { title: 'Understanding dementia', description: 'Clear introductions to dementia, cognitive change, and when to seek professional guidance.' },
  { title: 'Healthy aging', description: 'Evidence-informed information about well-being, participation, and health across later life.' },
  { title: 'Music and health research', description: 'Independent organizations that explain current music, health, and music-therapy research.' },
  { title: 'Caregiver support', description: 'Practical education and support for families, caregivers, and community partners.' },
] as const

// Add only resources whose organization, description, link, and review status
// have been verified. An empty collection prevents placeholders from being
// mistaken for recommendations.
export const resources: Resource[] = []
