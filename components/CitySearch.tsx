'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { City, searchCities } from '@/lib/cities'

interface CitySearchProps {
  placeholder?: string
  onSelect?: (city: City) => void
  className?: string
  isLight?: boolean
}

export default function CitySearch({ 
  placeholder = "Search city...", 
  onSelect,
  className = "",
  isLight = false
}: CitySearchProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<City[]>([])
  const [showDropdown, setShowDropdown] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.length >= 1) {
      setResults(searchCities(query).slice(0, 6))
      setShowDropdown(true)
    } else {
      setResults([])
      setShowDropdown(false)
    }
  }, [query])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-city-search-result]')) {
        return
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSelect = (city: City) => {
    if (onSelect) {
      onSelect(city)
    } else {
      router.push(`/${city.slug}`)
    }
    setQuery('')
    setShowDropdown(false)
  }

  return (
    <div ref={searchRef} className={`relative ${className}`} style={{ overflow: 'visible' }}>
      <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${isLight ? 'bg-slate-100' : 'bg-slate-800'}`}>
        <svg className={`w-4 h-4 ${isLight ? 'text-slate-500' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setQuery('')}
          placeholder={placeholder}
          className={`flex-1 bg-transparent outline-none text-sm ${isLight ? 'text-slate-800' : 'text-white'}`}
          style={{ fontSize: '16px' }}
        />
      </div>

      {showDropdown && results.length > 0 && (
        <div 
          className={`fixed left-0 right-0 mt-2 rounded-xl overflow-hidden shadow-2xl z-[9999] max-w-md mx-auto ${isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'}`}
          style={{ maxHeight: '300px', overflowY: 'auto', top: 'auto' }}
        >
          {results.map((city) => (
            <button
              key={city.slug}
              type="button"
              data-city-search-result="true"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleSelect(city)
              }}
              className={`w-full px-4 py-3 text-left flex items-center justify-between ${isLight ? 'hover:bg-slate-50 active:bg-slate-100' : 'hover:bg-slate-700 active:bg-slate-600'}`}
            >
              <div>
                <span className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>{city.city}</span>
                <span className={`text-sm ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{city.country}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
