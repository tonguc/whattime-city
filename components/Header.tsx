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

function Header({ isLight: propsIsLight }: HeaderProps) {
  const router = useRouter()
  const context = useCityContext()
  
  // ✅ Use prop if provided, otherwise use context
  const isLight = propsIsLight !== undefined ? propsIsLight : context.isLight
  
  // ✅ Create local theme
  const activeTheme = {
    text: isLight ? 'text-slate-800' : 'text-white',
    textMuted: isLight ? 'text-slate-500' : 'text-slate-400',
    accentBg: 'bg-blue-600',
  }
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<City[]>([])
  const [showSearchDropdown, setShowSearchDropdown] = useState(false)
  const [searchHighlightIndex, setSearchHighlightIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  
  // Settings state
  const [showSettings, setShowSettings] = useState(false)
  const settingsRef = useRef<HTMLDivElement>(null)
  
  // Search effect
  useEffect(() => {
    if (searchQuery.length >= 1) {
      setSearchResults(searchCities(searchQuery).slice(0, 6))
      setShowSearchDropdown(true)
      setSearchHighlightIndex(-1)
    } else {
      setSearchResults([])
      setShowSearchDropdown(false)
      setSearchHighlightIndex(-1)
    }
  }, [searchQuery])
  
  // Keyboard handler for search
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSearchDropdown || searchResults.length === 0) return
    
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSearchHighlightIndex(prev => Math.min(prev + 1, searchResults.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSearchHighlightIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (searchHighlightIndex >= 0 && searchResults[searchHighlightIndex]) {
        handleSearchSelect(searchResults[searchHighlightIndex])
      } else if (searchResults.length > 0) {
        handleSearchSelect(searchResults[0])
      }
    } else if (e.key === 'Escape') {
      setShowSearchDropdown(false)
      setSearchHighlightIndex(-1)
    }
  }
  
  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      if (target.closest('[data-search-result-button]')) {
        return
      }
      
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchDropdown(false)
      }
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
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
    <header className={`sticky top-0 z-50 w-full backdrop-blur-2xl border-b transition-colors duration-300 shadow-sm ${
      isLight 
        ? 'bg-white/80 border-slate-200' 
        : 'bg-slate-900/80 border-slate-700'
    }`}>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 flex items-center justify-between gap-2 sm:gap-3">
        <button onClick={handleLogoClick} className="hover:opacity-80 transition-opacity flex-shrink-0">
          <img src={isLight ? "/logo-mobile.svg" : "/logo-mobile-dark.svg"} alt="whattime.city" className="h-9 sm:hidden" />
          <img src={isLight ? "/logo.svg" : "/logo-dark.svg"} alt="whattime.city" className="h-10 hidden sm:block" />
        </button>
        
        <div className="flex-1 max-w-xs hidden sm:block" ref={searchRef}>
          <div className="relative">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-full ${isLight ? 'bg-slate-100' : 'bg-slate-800'}`}>
              <svg className={`w-4 h-4 ${activeTheme.textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                onFocus={() => searchQuery && setShowSearchDropdown(true)}
                placeholder="Search..."
                className={`flex-1 bg-transparent outline-none text-sm ${activeTheme.text} w-full`}
                style={{ fontSize: '16px' }}
              />
            </div>
            
            {showSearchDropdown && searchResults.length > 0 && (
              <div className={`absolute top-full left-0 w-72 mt-2 rounded-xl overflow-hidden shadow-xl ${isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'}`} style={{ zIndex: 99999 }}>
                {searchResults.map((city, index) => (
                  <button 
                    key={city.slug}
                    type="button"
                    data-search-result-button="true"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleSearchSelect(city)
                    }}
                    className={`w-full px-4 py-3 text-left flex items-center justify-between ${
                      index === searchHighlightIndex 
                        ? (isLight ? 'bg-blue-100' : 'bg-blue-900/50')
                        : (isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700')
                    }`}>
                    <div>
                      <span className={activeTheme.text}>{city.city}</span>
                      <span className={`text-sm ml-2 ${activeTheme.textMuted}`}>{city.country}</span>
                    </div>
                    <span className={`text-sm ${activeTheme.textMuted}`}>{context.getLocalTime(city)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <nav className="flex items-center gap-1 sm:gap-1">
          <Link href="/cities" className={`hidden sm:block px-2.5 py-2 rounded-lg text-sm font-medium transition-all ${isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}>
            Cities
          </Link>
          <Link href="/country" className={`hidden sm:block px-2.5 py-2 rounded-lg text-sm font-medium transition-all ${isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}>
            Countries
          </Link>
          <Link href="/map" className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-all ${isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}>
            Map
          </Link>
          <Link href="/guides" className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-all ${isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}>
            Guides
          </Link>
          <Link href="/tools" className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-all ${isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}>
            Tools
          </Link>
          
          <Link 
            href="/world-alarm" 
            className={`hidden sm:flex p-2 rounded-lg transition-all ${isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}
            title="Set Alarm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </Link>
          
          <div className="relative" ref={settingsRef}>
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2 rounded-lg transition-all ${isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}
              title="Settings"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            
            {showSettings && (
              <div className={`absolute right-0 top-full mt-2 w-56 rounded-xl shadow-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'} p-4`} style={{ zIndex: 99999 }}>
                <h4 className={`text-xs font-semibold uppercase tracking-wide mb-3 ${activeTheme.textMuted}`}>Preferences</h4>
                
                <div className="mb-4">
                  <label className={`text-sm font-medium ${activeTheme.text} mb-2 block`}>Clock Display</label>
                  <div className="flex gap-2">
                    {(['digital', 'analog'] as const).map(mode => (
                      <button key={mode} onClick={() => context.setClockMode(mode)}
                        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${context.clockMode === mode ? `${activeTheme.accentBg} text-white` : isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'}`}>
                        {mode === 'digital' ? 'Digital' : 'Analog'}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className={`text-sm font-medium ${activeTheme.text} mb-2 block`}>Time Format</label>
                  <div className="flex gap-2">
                    <button onClick={() => context.setUse12Hour(false)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${!context.use12Hour ? `${activeTheme.accentBg} text-white` : isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'}`}>24h</button>
                    <button onClick={() => context.setUse12Hour(true)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${context.use12Hour ? `${activeTheme.accentBg} text-white` : isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'}`}>12h</button>
                  </div>
                </div>
                
                <div>
                  <label className={`text-sm font-medium ${activeTheme.text} mb-2 block`}>Theme</label>
                  <div className="flex gap-2">
                    {(['light', 'auto', 'dark'] as const).map(mode => {
                      const labels = { light: 'Light Mode', auto: 'Auto (Day/Night)', dark: 'Dark Mode' }
                      const icons = { light: '☀️', auto: '🔄', dark: '🌙' }
                      return (
                        <button key={mode} onClick={() => context.setThemeMode(mode)}
                          title={labels[mode]}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${context.themeMode === mode ? `${activeTheme.accentBg} text-white` : isLight ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
                          {icons[mode]}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
      
      <div className="sm:hidden px-4 pb-3">
        <CitySearch 
          placeholder="Search city..."
          isLight={isLight}
          className="w-full"
        />
      </div>
    </header>
  )
}

export default Header
