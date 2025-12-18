'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { City, searchCities } from '@/lib/cities'
import { Theme } from '@/lib/themes'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { saveCityContext } from '@/lib/city-context'

interface SearchProps {
  theme: Theme
  currentTheme: string
}

export default function Search({ theme, currentTheme }: SearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<City[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [now, setNow] = useState(new Date())
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  
  const isLight = ['day', 'light'].includes(currentTheme)
  
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  // Click outside handler to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  useEffect(() => {
    if (query.length >= 1) {
      const found = searchCities(query).slice(0, 8)
      setResults(found)
      setIsOpen(found.length > 0)
      setSelectedIndex(0)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])
  
  const handleSelect = (city: City) => {
    // Save city context BEFORE navigation - ensures Tools page gets correct theme
    saveCityContext({
      slug: city.slug,
      city: city.city,
      lat: city.lat,
      lng: city.lng,
      timezone: city.timezone
    })
    router.push(`/${city.slug}`)
    setQuery('')
    setIsOpen(false)
  }
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      handleSelect(results[selectedIndex])
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setQuery('')
    }
  }
  
  const getCityTime = (city: City) => {
    return now.toLocaleTimeString('en-US', {
      timeZone: city.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }
  
  // Use real UTC time (now) for correct day/night calculation
  const getCityDayNight = (city: City) => {
    const timeOfDay = getTimeOfDay(now, city.lat, city.lng, city.timezone)
    return timeOfDay === 'day' || timeOfDay === 'dawn' || timeOfDay === 'dusk' ? '☀️' : '🌙'
  }
  
  return (
    <div ref={containerRef} className="relative w-full sm:w-auto flex-shrink-0">
      <div 
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full overflow-hidden box-border ${
          isLight ? 'bg-white/80 shadow-sm' : 'bg-slate-800/80'
        } backdrop-blur-xl border ${isLight ? 'border-slate-200/50' : 'border-slate-700/50'}`}
        style={{ minHeight: '42px', height: '42px' }}
      >
        <svg className={`w-4 h-4 flex-shrink-0 ${isLight ? 'text-slate-500' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search (e.g. Tokyo, Berlin)"
          className={`bg-transparent outline-none w-full sm:w-52 box-border ${
            isLight ? 'text-slate-800 placeholder-slate-400' : 'text-white placeholder-slate-500'
          }`}
          style={{ fontSize: '16px' }}
        />
      </div>
      
      {isOpen && results.length > 0 && (
        <div className={`absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden shadow-2xl z-50 ${
          isLight ? 'bg-white' : 'bg-slate-800'
        }`}>
          {results.map((city, index) => (
            <button
              key={city.slug}
              onClick={() => handleSelect(city)}
              className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                index === selectedIndex
                  ? isLight ? 'bg-slate-100' : 'bg-slate-700'
                  : ''
              } ${isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/50'}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-base">{getCityDayNight(city)}</span>
                <div>
                  <div className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>
                    {city.city}
                  </div>
                  <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    {city.country}
                  </div>
                </div>
              </div>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                {getCityTime(city)}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
