'use client'

import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import CountrySearchModal from '@/components/CountrySearchModal'

interface Props {
  title: string
  subtitle: string
}

export default function HubPageHeader({ title, subtitle }: Props) {
  const { isLight } = useCityContext()
  const titleClass = isLight ? 'text-slate-800' : 'text-white'
  const subtitleClass = isLight ? 'text-slate-500' : 'text-slate-400'
  const crumbActive = isLight ? 'text-slate-600' : 'text-slate-300'

  return (
    <>
      <nav className="text-xs text-slate-400 mb-3" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-sky-500">Home</Link>
        {' / '}
        <Link href="/country" className="hover:text-sky-500">Countries</Link>
        {' / '}
        <span className={crumbActive}>{title.replace(/^(Current )?Time in /i, '').trim()}</span>
      </nav>
      <h1 className={`text-2xl sm:text-3xl font-bold mb-1 ${titleClass}`}>{title}</h1>
      <p className={`text-sm mb-4 ${subtitleClass}`}>{subtitle}</p>
      <CountrySearchModal />
    </>
  )
}

