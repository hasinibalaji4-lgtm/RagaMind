interface ExpertPreviewCardProps { name: string }

export function ExpertPreviewCard({ name }: ExpertPreviewCardProps) {
  return <article className="border border-teal-900/15 bg-white/45 p-6 sm:p-8"><div className="flex items-center gap-4"><div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-sage-100 font-display text-xl text-teal-800" aria-hidden="true">{name.split(' ').slice(1).map((part) => part[0]).join('')}</div><div><h3 className="font-display text-2xl font-bold">{name}</h3><p className="mt-1 text-sm font-semibold text-teal-700">[ROLE PLACEHOLDER — UNVERIFIED]</p></div></div><p className="mt-6 text-teal-800">[BIOGRAPHY AND INTERVIEW SUMMARY PLACEHOLDER — content will be added only after verification and approval.]</p><blockquote className="mt-6 border-l-2 border-gold pl-4 italic text-teal-800">“[APPROVED QUOTATION PLACEHOLDER — not an actual quote.]”</blockquote></article>
}
