'use client'

import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  title: string
  subtitle: string
}

export default function HubPageHeader({ title, subtitle }: Props) {
  const { isLight } = useCityContext()
  const titleClass = isLight ? 'text-slate-800' : 'text-white'
  const subtitleClass = isLight ? 'text-slate-500' : 'text-slate-400'

  return (
    <>
      <h1 className={`text-2xl sm:text-3xl font-bold mb-1 ${titleClass}`}>{title}</h1>
      <p className={`text-sm mb-4 ${subtitleClass}`}>{subtitle}</p>
      <Link
        href="/country/"
        className={`inline-flex items-center gap-1.5 text-sm mb-6 px-3 py-1.5 rounded-lg transition-colors ${
          isLight
            ? 'text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200'
            : 'text-slate-400 hover:text-slate-200 bg-slate-800 hover:bg-slate-700'
        }`}
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search another country
      </Link>
    </>
  )
}

