'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { City, searchCities } from '@/lib/cities'
import { Theme } from '@/lib/themes'
import { getTimeOfDay } from '@/lib/sun-calculator'

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
  const router = useRouter()
  
  const isLight = ['day', 'light'].includes(currentTheme)
  
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
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
  
  const getCityDayNight = (city: City) => {
    const localTime = new Date(now.toLocaleString('en-US', { timeZone: city.timezone }))
    const timeOfDay = getTimeOfDay(localTime, city.lat, city.lng)
    return timeOfDay === 'day' || timeOfDay === 'dawn' || timeOfDay === 'dusk' ? '☀️' : '🌙'
  }
  
  return (
    <div className="relative">
      <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${
        isLight ? 'bg-white/80 shadow-sm' : 'bg-slate-800/80'
      } backdrop-blur-xl border ${isLight ? 'border-slate-200/50' : 'border-slate-700/50'}`}>
        <svg className={`w-4 h-4 ${isLight ? 'text-slate-500' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className={`bg-transparent outline-none text-sm w-40 sm:w-52 ${
            isLight ? 'text-slate-800 placeholder-slate-400' : 'text-white placeholder-slate-500'
          }`}
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
