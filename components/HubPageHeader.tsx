'use client'

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

  return (
    <>
      <h1 className={`text-2xl sm:text-3xl font-bold mb-1 ${titleClass}`}>{title}</h1>
      <p className={`text-sm mb-4 ${subtitleClass}`}>{subtitle}</p>
      <CountrySearchModal />
    </>
  )
}

