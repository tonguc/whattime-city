'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
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
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 })
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

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
    if (!showDropdown || !inputRef.current) return
    
    const updatePosition = () => {
      if (!inputRef.current) return
      const rect = inputRef.current.getBoundingClientRect()
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
        width: rect.width
      })
    }
    
    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    
    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [showDropdown])

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

  const clearInput = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setQuery('')
    setShowDropdown(false)
    setTimeout(() => inputRef.current?.focus(), 10)
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${isLight ? 'bg-slate-100' : 'bg-slate-800'}`}>
        <svg className={`w-4 h-4 flex-shrink-0 ${isLight ? 'text-slate-500' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (query) {
              setShowDropdown(true)
            }
          }}
          placeholder={placeholder}
          className={`flex-1 bg-transparent outline-none text-sm ${isLight ? 'text-slate-800 placeholder:text-slate-400' : 'text-white placeholder:text-slate-500'}`}
          style={{ fontSize: '16px' }}
        />
        {query && (
          <button
            type="button"
            onClick={clearInput}
            className={`flex-shrink-0 p-1 rounded-full transition-all hover:scale-110 ${isLight ? 'hover:bg-slate-200 text-slate-400 hover:text-slate-600' : 'hover:bg-slate-700 text-slate-500 hover:text-slate-300'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {showDropdown && results.length > 0 && createPortal(
        <div 
          className={`rounded-xl overflow-hidden shadow-2xl ${isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'}`}
          style={{
            position: 'absolute',
            top: `${position.top}px`,
            left: `${position.left}px`,
            width: `${position.width}px`,
            maxHeight: '300px',
            overflowY: 'auto',
            zIndex: 999999
          }}
        >
          {results.map((city) => (
            <button
              key={city.slug}
              type="button"
              data-city-search-result="true"
              onMouseDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleSelect(city)
              }}
              className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${isLight ? 'hover:bg-slate-50 active:bg-slate-100' : 'hover:bg-slate-700 active:bg-slate-600'}`}
            >
              <div>
                <span className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>{city.city}</span>
                <span className={`text-sm ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{city.country}</span>
              </div>
            </button>
          ))}
        </div>,
        document.body
      )}
    </div>
  )
}
