import type { PilotPhase } from '../types/pilot'

export const pilotPhases: PilotPhase[] = [
  { id: 'research-foundation', title: 'Research Foundation', status: 'Complete', description: 'The initial annotated bibliography and research matrix provide the project foundation.' },
  { id: 'expert-interviews', title: 'Expert Interviews', status: 'In Progress', description: 'Conversations are helping refine scientific, musical, and community questions.' },
  { id: 'raga-selection', title: 'Raga Selection', status: 'Complete', description: 'The initial group of ragas for educational exploration has been selected.' },
  { id: 'recordings-materials', title: 'Recordings and Listening Materials', status: 'In Progress', description: 'Educational listening materials are being prepared for future review.' },
  { id: 'community-outreach', title: 'Community Outreach', status: 'Planned', description: 'Future outreach will invite conversations with suitable community organizations.' },
  { id: 'first-pilot', title: 'First Senior Living Pilot', status: 'Planned', description: 'A small educational listening session will be planned with community guidance.' },
  { id: 'feedback-revision', title: 'Feedback and Revision', status: 'Future', description: 'Future participant and staff feedback may guide accessible revisions.' },
  { id: 'cas-expansion', title: 'CAS Expansion', status: 'Future', description: 'Later community work may continue as part of the RagaMind CAS project.' },
]
