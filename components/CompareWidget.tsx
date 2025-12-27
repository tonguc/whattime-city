'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'
import { City, searchCities } from '@/lib/cities'

interface CompareWidgetProps {
  initialFromCity?: City | null
  initialToCity?: City | null
  isLight?: boolean
  className?: string
}

interface DropdownPortalProps {
  isOpen: boolean
  results: City[]
  onSelect: (city: City) => void
  inputRef: React.RefObject<HTMLInputElement>
  isLight: boolean
}

function DropdownPortal({ isOpen, results, onSelect, inputRef, isLight }: DropdownPortalProps) {
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
      setPosition({
        top: rect.bottom + 4,
        left: rect.left,
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
        position: 'fixed',
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${position.width}px`,
        maxHeight: '300px',
        zIndex: 99999
      }}
    >
      {results.map(city => (
        <button 
          key={city.slug}
          type="button"
          onMouseDown={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onSelect(city)
          }}
          className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${isLight ? 'hover:bg-slate-100 active:bg-slate-200' : 'hover:bg-slate-700 active:bg-slate-600'}`}
        >
          <span className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>{city.city}</span>
          <span className={`text-xs ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{city.country}</span>
        </button>
      ))}
    </div>,
    document.body
  )
}

export default function CompareWidget({ 
  initialFromCity = null, 
  initialToCity = null,
  isLight = false,
  className = ""
}: CompareWidgetProps) {
  const router = useRouter()
  
  const [fromCity, setFromCity] = useState<City | null>(initialFromCity)
  const [toCity, setToCity] = useState<City | null>(initialToCity)
  const [fromQuery, setFromQuery] = useState(initialFromCity?.city || '')
  const [toQuery, setToQuery] = useState(initialToCity?.city || '')
  const [fromResults, setFromResults] = useState<City[]>([])
  const [toResults, setToResults] = useState<City[]>([])
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)
  
  const fromInputRef = useRef<HTMLInputElement>(null)
  const toInputRef = useRef<HTMLInputElement>(null)
  const fromContainerRef = useRef<HTMLDivElement>(null)
  const toContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (initialFromCity && !fromCity) {
      setFromCity(initialFromCity)
      setFromQuery(initialFromCity.city)
    }
  }, [initialFromCity, fromCity])

  useEffect(() => {
    if (initialToCity && !toCity) {
      setToCity(initialToCity)
      setToQuery(initialToCity.city)
    }
  }, [initialToCity, toCity])

  useEffect(() => {
    if (fromQuery.length >= 1 && !fromCity) {
      setFromResults(searchCities(fromQuery).slice(0, 6))
      setShowFromDropdown(true)
    } else {
      setFromResults([])
      setShowFromDropdown(false)
    }
  }, [fromQuery, fromCity])

  useEffect(() => {
    if (toQuery.length >= 1 && !toCity) {
      setToResults(searchCities(toQuery).slice(0, 6))
      setShowToDropdown(true)
    } else {
      setToResults([])
      setShowToDropdown(false)
    }
  }, [toQuery, toCity])

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

  const handleCompare = () => {
    if (fromCity && toCity) {
      router.push(`/time/${fromCity.slug}/${toCity.slug}`)
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
            }}
            onFocus={() => {
              if (fromQuery && !fromCity) {
                setShowFromDropdown(true)
              }
            }}
            placeholder="From city..."
            className={`w-full h-10 md:h-14 px-3 ${fromQuery ? 'pr-10' : 'pr-3'} rounded-xl border text-center text-sm md:text-base ${isLight ? 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400' : 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'} outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            style={{ fontSize: '16px' }}
          />
          
          {fromQuery && (
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setFromQuery('')
                setFromCity(null)
                setShowFromDropdown(false)
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
            onSelect={(city) => {
              setFromCity(city)
              setFromQuery(city.city)
              setShowFromDropdown(false)
            }}
            inputRef={fromInputRef}
            isLight={isLight}
          />
        </div>
        
        <button
          type="button"
          onClick={handleSwap}
          disabled={!fromCity || !toCity}
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
            }}
            onFocus={() => {
              if (toQuery && !toCity) {
                setShowToDropdown(true)
              }
            }}
            placeholder="To city..."
            className={`w-full h-10 md:h-14 px-3 ${toQuery ? 'pr-10' : 'pr-3'} rounded-xl border text-center text-sm md:text-base ${isLight ? 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400' : 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'} outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            style={{ fontSize: '16px' }}
          />
          
          {toQuery && (
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setToQuery('')
                setToCity(null)
                setShowToDropdown(false)
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
            onSelect={(city) => {
              setToCity(city)
              setToQuery(city.city)
              setShowToDropdown(false)
            }}
            inputRef={toInputRef}
            isLight={isLight}
          />
        </div>
        
        <button 
          onClick={handleCompare}
          disabled={!fromCity || !toCity}
          className="w-full md:w-auto h-10 md:h-14 px-6 md:px-8 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap text-sm md:text-base"
        >
          Compare Time
        </button>
      </div>
      
      <p className={`text-xs mt-2 text-center md:text-left ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
        Compare cities or find meeting overlap
      </p>
    </div>
  )
}
