'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'
import { useCitySearch, CitySearchResult } from '@/lib/useCitySearch'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface CompareWidgetProps {
  initialFromCity?: CitySearchResult | null
  initialToCity?: CitySearchResult | null
  className?: string
  onCitiesChange?: (fromCity: CitySearchResult | null, toCity: CitySearchResult | null) => void
}

interface DropdownPortalProps {
  isOpen: boolean
  results: CitySearchResult[]
  onSelect: (city: CitySearchResult) => void
  inputRef: React.RefObject<HTMLInputElement>
  highlightIndex?: number
}

function DropdownPortal({ isOpen, results, onSelect, inputRef, highlightIndex = -1 }: DropdownPortalProps) {
  const { text, textMuted, isLight } = useThemeClasses()
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 })
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  useEffect(() => {
    if (!isOpen || !inputRef.current) return
    
    const updatePosition = () => {
      if (!inputRef.current) return
      const rect = inputRef.current.getBoundingClientRect()
      
      // Always position below the input
      const topPosition = rect.bottom + window.scrollY + 4
      
      setPosition({
        top: topPosition,
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
  }, [isOpen, inputRef])
  
  if (!mounted || !isOpen || results.length === 0) return null
  
  return createPortal(
    <div 
      className={`rounded-xl overflow-y-auto shadow-2xl ${isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'}`}
      style={{
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${position.width}px`,
        maxHeight: '300px',
        zIndex: 99999
      }}
    >
      {results.map((city, index) => (
        <button 
          key={city.slug}
          type="button"
          aria-label={`Select ${city.city}, ${city.country}`}
          onMouseDown={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onSelect(city)
          }}
          className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
            index === highlightIndex 
              ? (isLight ? 'bg-blue-100' : 'bg-blue-900/50')
              : (isLight ? 'hover:bg-slate-100 active:bg-slate-200' : 'hover:bg-slate-700 active:bg-slate-600')
          }`}
        >
          <span className={`font-medium ${text}`}>{city.city}</span>
          <span className={`text-xs ml-2 ${textMuted}`}>{city.country}</span>
        </button>
      ))}
    </div>,
    document.body
  )
}

export default function CompareWidget({
  initialFromCity = null,
  initialToCity = null,
  className = "",
  onCitiesChange
}: CompareWidgetProps) {
  const router = useRouter()
  const { isLight } = useThemeClasses()

  const [fromCity, setFromCity] = useState<CitySearchResult | null>(initialFromCity)
  const [toCity, setToCity] = useState<CitySearchResult | null>(initialToCity)
  const [fromQuery, setFromQuery] = useState(initialFromCity?.city || '')
  const [toQuery, setToQuery] = useState(initialToCity?.city || '')
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)
  const [fromHighlightIndex, setFromHighlightIndex] = useState(-1)
  const [toHighlightIndex, setToHighlightIndex] = useState(-1)
  
  const fromInputRef = useRef<HTMLInputElement>(null)
  const toInputRef = useRef<HTMLInputElement>(null)
  const fromContainerRef = useRef<HTMLDivElement>(null)
  const toContainerRef = useRef<HTMLDivElement>(null)

  // Initialize with user's location
  useEffect(() => {
    if (initialFromCity) {
      setFromCity(initialFromCity)
      setFromQuery(initialFromCity.city)
    } else {
      // Detect user's location and set default city
      detectUserLocation()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (initialToCity) {
      setToCity(initialToCity)
      setToQuery(initialToCity.city)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Detect user's location via API
  const detectUserLocation = async () => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const tzCity = timezone.split('/').pop()?.replace(/_/g, ' ') || ''
      if (!tzCity) return
      const res = await fetch(`/api/cities/search?q=${encodeURIComponent(tzCity)}&limit=1`)
      if (res.ok) {
        const data: CitySearchResult[] = await res.json()
        if (data.length > 0) {
          setFromCity(data[0])
          setFromQuery(data[0].city)
          onCitiesChange?.(data[0], toCity)
        }
      }
    } catch {
      // silently ignore
    }
  }

  // Use search hook for from/to queries (only when city not already selected)
  const fromSearchQuery = fromCity ? '' : fromQuery
  const toSearchQuery = toCity ? '' : toQuery
  const { results: fromResults } = useCitySearch(fromSearchQuery, 6)
  const { results: toResults } = useCitySearch(toSearchQuery, 6)

  useEffect(() => {
    setShowFromDropdown(fromQuery.length >= 1 && !fromCity && fromResults.length > 0)
  }, [fromQuery, fromCity, fromResults])

  useEffect(() => {
    setShowToDropdown(toQuery.length >= 1 && !toCity && toResults.length > 0)
  }, [toQuery, toCity, toResults])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      if (fromContainerRef.current?.contains(target) || toContainerRef.current?.contains(target)) {
        return
      }
      
      setShowFromDropdown(false)
      setShowToDropdown(false)
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Keyboard navigation handlers
  const handleFromKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showFromDropdown || fromResults.length === 0) {
      if (e.key === 'Enter' && fromCity && toCity) {
        handleCompare()
      }
      return
    }
    
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFromHighlightIndex(prev => Math.min(prev + 1, fromResults.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFromHighlightIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (fromHighlightIndex >= 0 && fromResults[fromHighlightIndex]) {
        handleFromCitySelect(fromResults[fromHighlightIndex])
      } else if (fromResults.length > 0) {
        handleFromCitySelect(fromResults[0])
      }
    } else if (e.key === 'Escape') {
      setShowFromDropdown(false)
      setFromHighlightIndex(-1)
    }
  }

  const handleToKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showToDropdown || toResults.length === 0) {
      if (e.key === 'Enter' && fromCity && toCity) {
        handleCompare()
      }
      return
    }
    
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setToHighlightIndex(prev => Math.min(prev + 1, toResults.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setToHighlightIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (toHighlightIndex >= 0 && toResults[toHighlightIndex]) {
        handleToCitySelect(toResults[toHighlightIndex])
      } else if (toResults.length > 0) {
        handleToCitySelect(toResults[0])
      }
    } else if (e.key === 'Escape') {
      setShowToDropdown(false)
      setToHighlightIndex(-1)
    }
  }

  const handleCompare = () => {
    if (fromCity && toCity) {
      // Ensure slugs are valid before navigation
      const fromSlug = fromCity.slug || fromCity.city.toLowerCase().replace(/\s+/g, '-')
      const toSlug = toCity.slug || toCity.city.toLowerCase().replace(/\s+/g, '-')
      router.push(`/time/${fromSlug}/${toSlug}`)
    }
  }

  const handleSwap = () => {
    if (!fromCity || !toCity) return
    const tempCity = fromCity
    const tempQuery = fromQuery
    setFromCity(toCity)
    setFromQuery(toQuery)
    setToCity(tempCity)
    setToQuery(tempQuery)
    
    // Notify parent component about the swap
    onCitiesChange?.(toCity, tempCity)
  }

  const handleFromCitySelect = (city: CitySearchResult) => {
    setFromCity(city)
    setFromQuery(city.city)
    setShowFromDropdown(false)
    onCitiesChange?.(city, toCity)
  }

  const handleToCitySelect = (city: CitySearchResult) => {
    setToCity(city)
    setToQuery(city.city)
    setShowToDropdown(false)
    onCitiesChange?.(fromCity, city)
  }

  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3">
        
        <div ref={fromContainerRef} className="relative flex-1 w-full">
          <input 
            ref={fromInputRef}
            type="text" 
            value={fromQuery}
            onChange={(e) => { 
              setFromQuery(e.target.value)
              setFromCity(null)
              setFromHighlightIndex(-1)
            }}
            onKeyDown={handleFromKeyDown}
            onFocus={() => {
              if (fromQuery && !fromCity) {
                setShowFromDropdown(true)
              }
            }}
            placeholder="From city..."
            className={`w-full h-10 md:h-14 px-3 ${fromQuery ? 'pr-10' : 'pr-3'} rounded-xl border text-center text-sm md:text-base ${isLight ? 'bg-slate-50 border-slate-300 text-slate-800 placeholder:text-slate-400' : 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'} outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            style={{ fontSize: '16px' }}
          />
          
          {fromQuery && (
            <button
              type="button"
              aria-label="Clear from city"
              onMouseDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setFromQuery('')
                setFromCity(null)
                setShowFromDropdown(false)
                onCitiesChange?.(null, toCity)
              }}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all hover:scale-110 z-10 ${isLight ? 'hover:bg-slate-200 text-slate-400 hover:text-slate-600' : 'hover:bg-slate-700 text-slate-500 hover:text-slate-300'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          
          <DropdownPortal
            isOpen={showFromDropdown}
            results={fromResults}
            onSelect={handleFromCitySelect}
            inputRef={fromInputRef}
            
            highlightIndex={fromHighlightIndex}
          />
        </div>
        
        <button
          type="button"
          onClick={handleSwap}
          disabled={!fromCity || !toCity}
          aria-label="Swap cities"
          className={`flex-shrink-0 p-2 md:p-3 rounded-xl transition-all ${fromCity && toCity ? (isLight ? 'hover:bg-slate-200 text-slate-600 hover:text-slate-800' : 'hover:bg-slate-700 text-slate-400 hover:text-slate-200') : 'opacity-30 cursor-not-allowed text-slate-400'}`}
          title="Swap cities"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </button>
        
        <div ref={toContainerRef} className="relative flex-1 w-full">
          <input 
            ref={toInputRef}
            type="text" 
            value={toQuery}
            onChange={(e) => { 
              setToQuery(e.target.value)
              setToCity(null)
              setToHighlightIndex(-1)
            }}
            onKeyDown={handleToKeyDown}
            onFocus={() => {
              if (toQuery && !toCity) {
                setShowToDropdown(true)
              }
            }}
            placeholder="To city..."
            className={`w-full h-10 md:h-14 px-3 ${toQuery ? 'pr-10' : 'pr-3'} rounded-xl border text-center text-sm md:text-base ${isLight ? 'bg-slate-50 border-slate-300 text-slate-800 placeholder:text-slate-400' : 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'} outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            style={{ fontSize: '16px' }}
          />
          
          {toQuery && (
            <button
              type="button"
              aria-label="Clear destination city"
              onMouseDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setToQuery('')
                setToCity(null)
                setShowToDropdown(false)
                onCitiesChange?.(fromCity, null)
              }}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all hover:scale-110 z-10 ${isLight ? 'hover:bg-slate-200 text-slate-400 hover:text-slate-600' : 'hover:bg-slate-700 text-slate-500 hover:text-slate-300'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          
          <DropdownPortal
            isOpen={showToDropdown}
            results={toResults}
            onSelect={handleToCitySelect}
            inputRef={toInputRef}
            
            highlightIndex={toHighlightIndex}
          />
        </div>
        
        <button 
          onClick={handleCompare}
          disabled={!fromCity || !toCity}
          className="w-full md:w-auto h-10 md:h-14 px-6 md:px-8 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap text-sm md:text-base"
        >
          Convert Time
        </button>
      </div>
    </div>
  )
}