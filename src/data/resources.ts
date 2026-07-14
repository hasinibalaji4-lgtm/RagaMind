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

// Add only resources whose organization, description, link, and review status
// have been verified. An empty collection prevents placeholders from being
// mistaken for recommendations.
export const resources: Resource[] = []
