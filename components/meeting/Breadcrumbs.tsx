'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'

interface BreadcrumbsProps {
  cities: City[]
  isLight: boolean
}

export default function Breadcrumbs({ cities, isLight }: BreadcrumbsProps) {
  const cityNames = cities.map(c => c.city).join(' vs ')
  
  return (
    <nav aria-label="Breadcrumb" className={`mb-4 text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
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
            href="/tools/meeting-planner" 
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
            <li className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>
              {cityNames}
            </li>
          </>
        )}
      </ol>
    </nav>
  )
}
