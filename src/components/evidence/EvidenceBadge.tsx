import { CheckCircle2, CircleDashed, CircleDot, ShieldQuestion } from 'lucide-react'
import type { EvidenceLevel } from '../../types/evidence'

const iconForLevel = (level: EvidenceLevel) => {
  if (level === 'Strong' || level.startsWith('Strong ')) return CheckCircle2
  if (level === 'Moderate' || level === 'Moderate to Strong') return CircleDot
  if (level.startsWith('Emerging')) return CircleDashed
  return ShieldQuestion
}

export function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  const Icon = iconForLevel(level)
  return <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-teal-900/20 bg-ivory px-3 py-1.5 text-xs font-bold text-teal-900"><Icon size={15} aria-hidden="true" /><span>{level}</span></span>
}
