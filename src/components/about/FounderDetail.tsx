interface FounderDetailProps {
  title: string
  placeholder: string
}

export function FounderDetail({ title, placeholder }: FounderDetailProps) {
  return <section className="border-t border-teal-900/15 py-6">
    <h3 className="font-display text-xl font-bold">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-teal-700">{placeholder}</p>
  </section>
}
