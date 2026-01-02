'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useThemeClasses } from '@/lib/useThemeClasses'
import { useRouter } from 'next/navigation'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { saveCityContext } from '@/lib/city-context'

/**
 * 🔍 Search Component (Statik Export Uyumlu)
 * 
 * Full cities data yerine hafif search-index.json kullanır.
 * Client-side fetch ile veri çeker - bundle size'ı etkilemez.
 */

// Hafif search index tipi (minified keys)
interface SearchCity {
  s: string   // slug
  c: string   // city
  z: string   // timezone
  n: string   // country (nation)
  cc: string  // countryCode
  lt: number  // lat
  ln: number  // lng
  t: number   // tier
}

// Component içinde kullanılacak tip
interface City {
  slug: string
  city: string
  timezone: string
  country: string
  countryCode: string
  lat: number
  lng: number
  tier: number
}

interface SearchProps {
  // No props needed - uses useThemeClasses
}

// SearchCity -> City dönüşümü
function mapToCity(sc: SearchCity): City {
  return {
    slug: sc.s,
    city: sc.c,
    timezone: sc.z,
    country: sc.n,
    countryCode: sc.cc,
    lat: sc.lt,
    lng: sc.ln,
    tier: sc.t
  }
}

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<City[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [now, setNow] = useState(new Date())
  const [searchIndex, setSearchIndex] = useState<City[]>([])
  const [isLoading, setIsLoading] = useState(false)
  
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  
  const { text, textMuted, isLight } = useThemeClasses()
  
  // ⏰ Saat güncelleme
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  // 🔍 Search Index'i Lazy Load Et (ilk focus'ta)
  const loadSearchIndex = useCallback(async () => {
    if (searchIndex.length > 0 || isLoading) return
    
    setIsLoading(true)
    try {
      const res = await fetch('/search-index.json')
      const data: SearchCity[] = await res.json()
      setSearchIndex(data.map(mapToCity))
    } catch (error) {
      console.error('Search index yüklenemedi:', error)
    } finally {
      setIsLoading(false)
    }
  }, [searchIndex.length, isLoading])
  
  // 🖱️ Dışarı tıklayınca kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  // 🔎 Arama işlemi
  useEffect(() => {
    if (query.length >= 1 && searchIndex.length > 0) {
      const q = query.toLowerCase()
      const found = searchIndex
        .filter(c => 
          c.city.toLowerCase().includes(q) || 
          c.country.toLowerCase().includes(q) ||
          c.slug.includes(q)
        )
        .slice(0, 8)
      
      setResults(found)
      setIsOpen(found.length > 0)
      setSelectedIndex(0)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query, searchIndex])
  
  // 🏙️ Şehir seçimi
  const handleSelect = (city: City) => {
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
  
  // ⌨️ Klavye navigasyonu
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
  
  // 🕐 Şehir saati
  const getCityTime = (city: City) => {
    return now.toLocaleTimeString('en-US', {
      timeZone: city.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }
  
  // 🌅 Gündüz/Gece ikonu
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
        <svg className={`w-4 h-4 flex-shrink-0 ${textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            loadSearchIndex() // İlk focus'ta yükle
            if (query) setIsOpen(true)
          }}
          placeholder={isLoading ? 'Loading...' : 'Search (e.g. Tokyo, Berlin)'}
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
                  <div className={`font-medium ${text}`}>
                    {city.city}
                  </div>
                  <div className={`text-xs ${textMuted}`}>
                    {city.country}
                  </div>
                </div>
              </div>
              <div className={`text-sm font-medium ${textMuted}`}>
                {getCityTime(city)}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
