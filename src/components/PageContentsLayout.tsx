import type { ReactNode } from 'react'
import type { SectionProgressItem } from '../types/navigation'
import { SectionProgressNav } from './SectionProgressNav'

interface PageContentsLayoutProps {
  items: SectionProgressItem[]
  children: ReactNode
}

export function PageContentsLayout({ items, children }: PageContentsLayoutProps) {
  if (items.length < 3) return <>{children}</>

  return <div className="relative w-full">
    <SectionProgressNav items={items} />
    {children}
  </div>
}
