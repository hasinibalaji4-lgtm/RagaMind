export type PilotStatus = 'Complete' | 'In Progress' | 'Planned' | 'Future'

export interface PilotPhase {
  id: string
  title: string
  status: PilotStatus
  description: string
}
