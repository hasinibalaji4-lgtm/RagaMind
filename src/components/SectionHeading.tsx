export function SectionHeading({ title, subtitle, id }: { title: string; subtitle?: string; id?: string }) {
  return <header className="max-w-3xl"><h2 className="scroll-mt-28 font-display text-3xl font-bold text-teal-950 focus:outline-none lg:scroll-mt-52 sm:text-4xl" id={id} tabIndex={id ? -1 : undefined}>{title}</h2>{subtitle && <p className="mt-4 text-lg text-teal-800">{subtitle}</p>}</header>
}
