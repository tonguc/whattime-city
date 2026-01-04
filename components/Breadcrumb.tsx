'use client'

import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface Props {
  items: BreadcrumbItem[]
  isLight: boolean
}

export default function Breadcrumb({ items, isLight }: Props) {
  const textColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const linkColor = isLight ? 'text-slate-700 hover:text-amber-600' : 'text-slate-300 hover:text-amber-400'
  const currentColor = isLight ? 'text-slate-800' : 'text-white'
  
  // Generate Schema.org BreadcrumbList
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://whattime.city${item.href}` })
    }))
  }
  
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Visible Breadcrumb */}
      <nav aria-label="Breadcrumb" className={`text-sm ${textColor}`}>
        <ol className="flex items-center flex-wrap gap-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            
            return (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">›</span>}
                
                {item.href && !isLast ? (
                  <Link 
                    href={item.href} 
                    className={`${linkColor} transition-colors`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? `font-medium ${currentColor}` : ''}>
                    {item.label}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
