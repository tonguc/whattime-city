'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface BreadcrumbsProps {
  cities: City[]
}

export default function Breadcrumbs({ cities }: BreadcrumbsProps) {
  const { text, textMuted, isLight } = useThemeClasses()
  const cityNames = cities.map(c => c.city).join(' vs ')
  
  return (
    <nav aria-label="Breadcrumb" className={`mb-4 text-sm ${textMuted}`}>
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link 
            href="/" 
            className={`hover:underline ${isLight ? 'hover:text-slate-800' : 'hover:text-slate-200'}`}
          >
            Home
          </Link>
        </li>
        <li>
          <span className="mx-1">/</span>
        </li>
        <li>
          <Link 
            href="/meeting/" 
            className={`hover:underline ${isLight ? 'hover:text-slate-800' : 'hover:text-slate-200'}`}
          >
            Meeting Planner
          </Link>
        </li>
        {cities.length >= 1 && (
          <>
            <li>
              <span className="mx-1">/</span>
            </li>
            <li className={`font-medium ${text}`}>
              {cityNames}
            </li>
          </>
        )}
      </ol>
    </nav>
  )
}
