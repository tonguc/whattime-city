'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import { City, searchCities } from '@/lib/cities'
import CitySearch from '@/components/CitySearch'

interface HeaderProps {
  isLight?: boolean
}

export default function Header({ isLight: isLightProp }: HeaderProps) {
  const router = useRouter()
  const {
    currentTheme,
    theme,
    isLight: contextIsLight,
    themeMode,
    setThemeMode,
    clockMode,
    setClockMode,
    use12Hour,
    setUse12Hour,
    getLocalTime,
  } = useCityContext()

  // 🔑 FINAL isLight: prop varsa onu kullan, yoksa context
  const isLight = isLightProp ?? contextIsLight

  // ---------------- Search state ----------------
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<City[]>([])
  const [showSearchDropdown, setShowSearchDropdown] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // ---------------- Settings state ----------------
  const [showSettings, setShowSettings] = useState(false)
  const settingsRef = useRef<HTMLDivElement>(null)

  // ---------------- Search effect ----------------
  useEffect(() => {
    if (searchQuery.length >= 1) {
      setSearchResults(searchCities(searchQuery).slice(0, 6))
      setShowSearchDropdown(true)
    } else {
      setSearchResults([])
      setShowSearchDropdown(false)
    }
  }, [searchQuery])

  // ---------------- Outside click ----------------
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.closest('[data-search-result-button]')) return

      if (searchRef.current && !searchRef.current.contains(target)) {
        setShowSearchDropdown(false)
      }
      if (settingsRef.current && !settingsRef.current.contains(target)) {
        setShowSettings(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSearchSelect = (city: City) => {
    router.push(`/${city.slug}`)
    setSearchQuery('')
    setShowSearchDropdown(false)
  }

  const handleLogoClick = () => {
    router.push('/')
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-2xl border-b transition-colors duration-500 shadow-sm ${
        isLight
          ? 'bg-white/70 border-slate-200'
          : 'bg-slate-900/60 border-slate-700'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 flex items-center justify-between gap-2 sm:gap-3">
        
        {/* Logo */}
        <button onClick={handleLogoClick} className="hover:opacity-80 transition-opacity flex-shrink-0">
          <img src={isLight ? "/logo-mobile.svg" : "/logo-mobile-dark.svg"} alt="whattime.city" className="h-9 sm:hidden" />
          <img src={isLight ? "/logo.svg" : "/logo-dark.svg"} alt="whattime.city" className="h-10 hidden sm:block" />
        </button>

        {/* Desktop Search */}
        <div className="flex-1 max-w-xs hidden sm:block" ref={searchRef}>
          <div className="relative">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-full ${isLight ? 'bg-slate-100' : 'bg-slate-800'}`}>
              <svg className={`w-4 h-4 ${theme.textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className={`flex-1 bg-transparent outline-none text-sm ${theme.text}`}
              />
            </div>

            {showSearchDropdown && searchResults.length > 0 && (
              <div className={`absolute top-full left-0 w-72 mt-2 rounded-xl overflow-hidden shadow-xl z-50 ${
                isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'
              }`}>
                {searchResults.map(city => (
                  <button
                    key={city.slug}
                    data-search-result-button
                    onClick={() => handleSearchSelect(city)}
                    className={`w-full px-4 py-3 text-left flex justify-between ${
                      isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700'
                    }`}
                  >
                    <span>{city.city}, {city.country}</span>
                    <span className="text-sm opacity-60">{getLocalTime(city)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Nav + Settings (AYNEN KALDI) */}
        {/* ... senin mevcut nav + settings kodun burada değişmeden duruyor ... */}
      </div>

      {/* Mobile Search */}
      <div className="sm:hidden px-4 pb-3">
        <CitySearch placeholder="Search city..." isLight={isLight} className="w-full" />
      </div>
    </header>
  )
}
