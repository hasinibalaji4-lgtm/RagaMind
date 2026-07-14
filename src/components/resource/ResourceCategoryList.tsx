interface ResourceCategoryListProps {
  categories: string[]
}

export function ResourceCategoryList({ categories }: ResourceCategoryListProps) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2" role="list">
      {categories.map((category) => (
        <li className="rounded-2xl border border-sage-300 bg-white/65 p-5" key={category}>
          <h3 className="font-display text-lg font-bold text-teal-950">{category}</h3>
          <p className="mt-2 text-sm leading-relaxed text-teal-800">Verified resources will be added after review.</p>
        </li>
      ))}
    </ul>
  )
}
