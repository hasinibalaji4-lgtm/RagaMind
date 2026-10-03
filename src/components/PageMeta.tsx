import { useEffect } from 'react'

interface PageMetaProps {
  title: string
  description: string
  noIndex?: boolean
}

export function PageMeta({ title, description, noIndex = false }: PageMetaProps) {
  useEffect(() => {
    const pageTitle = `${title} | RagaMind`
    document.title = pageTitle

    const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }
      element.content = content
    }

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', pageTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'RagaMind')
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="robots"]', 'name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
  }, [description, noIndex, title])

  return null
}
