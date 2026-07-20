import { BookOpenCheck, CircleDashed, CircleDot, Library } from 'lucide-react'

export type EvidenceDisplayLabel = 'Stronger evidence' | 'Emerging evidence' | 'Background context' | 'Most consistent evidence' | 'Promising evidence' | 'Mixed evidence'

export function EvidenceBadge({ label }: { label: EvidenceDisplayLabel }) {
  const Icon = label === 'Stronger evidence' || label === 'Most consistent evidence' ? BookOpenCheck : label === 'Emerging evidence' ? CircleDashed : label === 'Background context' ? Library : CircleDot
  return <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-teal-900/20 bg-ivory px-3 py-1.5 text-sm font-bold text-teal-900"><Icon aria-hidden="true" size={16} /><span>{label}</span></span>
}
