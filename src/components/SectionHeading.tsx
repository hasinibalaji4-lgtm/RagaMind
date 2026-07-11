export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return <header className="max-w-3xl"><h2 className="font-display text-3xl font-bold text-teal-950 sm:text-4xl">{title}</h2>{subtitle && <p className="mt-4 text-lg text-teal-800">{subtitle}</p>}</header>
}
