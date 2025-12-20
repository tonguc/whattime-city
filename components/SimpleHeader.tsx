'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { City, searchCities } from '@/lib/cities'

interface SimpleHeaderProps {
  isLight?: boolean
}

export default function SimpleHeader({ isLight = false }: SimpleHeaderProps) {
  const router = useRouter()
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<City[]>([])
  const [showSearchDropdown, setShowSearchDropdown] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  
  // Search effect
  useEffect(() => {
    if (searchQuery.length >= 1) {
      setSearchResults(searchCities(searchQuery).slice(0, 6))
      setShowSearchDropdown(true)
    } else {
      setSearchResults([])
      setShowSearchDropdown(false)
    }
  }, [searchQuery])
  
  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchDropdown(false)
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
  
  const textColor = isLight ? 'text-slate-600' : 'text-slate-300'
  const textMuted = isLight ? 'text-slate-500' : 'text-slate-400'
  const bgHover = isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-800'
  const inputBg = isLight ? 'bg-slate-100' : 'bg-slate-800'
  const dropdownBg = isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'
  const dropdownHover = isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700'
  
  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-xl ${isLight ? 'bg-white/80 border-slate-200/50' : 'bg-slate-900/80 border-slate-700/50'} border-b`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
          <img src={isLight ? "/logo.svg" : "/logo-dark.svg"} alt="whattime.city" className="h-10 sm:h-12" />
        </Link>
        
        {/* Search */}
        <div className="flex-1 max-w-md hidden sm:block" ref={searchRef}>
          <div className="relative">
            <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${inputBg}`}>
              <svg className={`w-4 h-4 ${textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery && setShowSearchDropdown(true)}
                placeholder="Search city..."
                className={`flex-1 bg-transparent outline-none text-sm ${isLight ? 'text-slate-800' : 'text-white'}`}
                style={{ fontSize: '16px' }}
              />
            </div>
            
            {showSearchDropdown && searchResults.length > 0 && (
              <div className={`absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden shadow-xl z-50 border ${dropdownBg}`}>
                {searchResults.map((city) => (
                  <button key={city.slug} onClick={() => handleSearchSelect(city)}
                    className={`w-full px-4 py-3 text-left flex items-center justify-between ${dropdownHover}`}>
                    <div>
                      <span className={isLight ? 'text-slate-800' : 'text-white'}>{city.city}</span>
                      <span className={`text-sm ml-2 ${textMuted}`}>{city.country}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Nav Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link href="/map" className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${bgHover} ${textColor}`}>
            Map
          </Link>
          <Link href="/tools" className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${bgHover} ${textColor}`}>
            Tools
          </Link>
          <Link href="/widget" className={`hidden sm:block px-3 py-2 rounded-lg text-sm font-medium transition-all ${bgHover} ${textColor}`}>
            Widget
          </Link>
        </nav>
      </div>
      
      {/* Mobile Search */}
      <div className="sm:hidden px-4 pb-3" ref={searchRef}>
        <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${inputBg}`}>
          <svg className={`w-4 h-4 ${textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search city..."
            className={`flex-1 bg-transparent outline-none text-sm ${isLight ? 'text-slate-800' : 'text-white'}`}
            style={{ fontSize: '16px' }}
          />
        </div>
        
        {showSearchDropdown && searchResults.length > 0 && (
          <div className={`mt-2 rounded-xl overflow-hidden shadow-xl z-50 border ${dropdownBg}`}>
            {searchResults.map((city) => (
              <button key={city.slug} onClick={() => handleSearchSelect(city)}
                className={`w-full px-4 py-3 text-left ${dropdownHover}`}>
                <span className={isLight ? 'text-slate-800' : 'text-white'}>{city.city}</span>
                <span className={`text-sm ml-2 ${textMuted}`}>{city.country}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
