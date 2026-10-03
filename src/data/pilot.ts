import type { PilotRoadmapGroup } from '../types/pilot'

export const pilotRoadmap: PilotRoadmapGroup[] = [
  { id: 'completed', title: 'Completed', status: 'Completed', items: ['Initial literature review', 'Evidence Hub', 'Initial expert interviews', 'Website development'] },
  { id: 'in-progress', title: 'In progress', status: 'In progress', items: ['Selecting and preparing raga recordings', 'Refining accessibility and public-facing content'] },
  { id: 'next', title: 'Next', status: 'Next', items: ['Record selected ragas', 'Conduct website usability testing', 'Gather participant feedback', 'Refine the experience', 'Explore a small community-based pilot', 'Review findings and update RagaMind'] },
]
