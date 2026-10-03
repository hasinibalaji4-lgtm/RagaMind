export type PilotRoadmapStatus = 'Completed' | 'In progress' | 'Next'

export interface PilotRoadmapGroup {
  id: string
  title: string
  status: PilotRoadmapStatus
  items: string[]
}
