import type { ReactNode } from 'react'
import type { SectionProgressItem } from '../types/navigation'
import { SectionProgressNav } from './SectionProgressNav'

interface PageContentsLayoutProps {
  items: SectionProgressItem[]
  children: ReactNode
}

export function PageContentsLayout({ items, children }: PageContentsLayoutProps) {
  if (items.length < 3) return <>{children}</>

  return <div className="mx-auto grid w-full max-w-[100rem] lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-3 lg:px-4 xl:grid-cols-[14rem_minmax(0,1fr)] xl:gap-5 xl:px-6 2xl:gap-8">
    <SectionProgressNav items={items} />
    <div className="min-w-0">{children}</div>
  </div>
}
