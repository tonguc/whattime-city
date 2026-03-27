'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCityContext } from '@/lib/CityContext'
import { countries } from '@/lib/cities'
import { getFlagUrl } from '@/shared/utils'

interface Props {
  title: string
  subtitle: string
}

export default function HubPageHeader({ title, subtitle }: Props) {
  const { isLight } = useCityContext()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const titleClass = isLight ? 'text-slate-800' : 'text-white'
  const subtitleClass = isLight ? 'text-slate-500' : 'text-slate-400'
  const textMuted = isLight ? 'text-slate-500' : 'text-slate-400'

  const filteredCountries = searchQuery.trim().length > 0
    ? countries.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.capital.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8)
    : []

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <h1 className={`text-2xl sm:text-3xl font-bold mb-1 ${titleClass}`}>{title}</h1>
      <p className={`text-sm mb-4 ${subtitleClass}`}>{subtitle}</p>

      {/* Country search */}
      <div ref={searchRef} className="relative max-w-sm mb-6">
        <div className="relative">
          <svg className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${textMuted}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={e => { setSearchQuery(e.target.value); setShowDropdown(true) }}
            onFocus={() => setShowDropdown(true)}
            placeholder="Search another country…"
            className={`w-full pl-9 pr-4 py-2 rounded-xl border text-sm outline-none transition-colors ${
              isLight
                ? 'bg-white border-slate-300 focus:border-cyan-400 text-slate-800 placeholder-slate-400'
                : 'bg-slate-800 border-slate-600 focus:border-cyan-500 text-white placeholder-slate-500'
            }`}
            autoComplete="off"
          />
        </div>
        {showDropdown && filteredCountries.length > 0 && (
          <div className={`absolute z-50 mt-1 w-full rounded-xl shadow-lg border overflow-hidden ${
            isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'
          }`}>
            {filteredCountries.map(c => (
              <button
                key={c.slug}
                onMouseDown={() => {
                  setShowDropdown(false)
                  setSearchQuery('')
                  router.push(`/country/${c.slug}/`)
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-left transition-colors ${
                  isLight ? 'hover:bg-slate-50 text-slate-700' : 'hover:bg-slate-700 text-slate-200'
                }`}
              >
                <img src={getFlagUrl(c.code, 'sm')} alt="" className="w-5 h-3.5 object-cover rounded-sm" />
                <span className="font-medium">{c.name}</span>
                <span className={`ml-auto text-xs ${textMuted}`}>{c.capital}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
