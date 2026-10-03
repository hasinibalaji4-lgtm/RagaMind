import type { PilotRoadmapStatus } from '../../types/pilot'

export function StatusBadge({ status }: { status: PilotRoadmapStatus | 'In Development' }) {
  return <span className="inline-flex rounded-full border border-gold-700 bg-ivory px-3 py-1 text-sm font-bold text-gold-700">Status: {status}</span>
}
