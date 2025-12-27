'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { City, searchCities } from '@/lib/cities'

interface CompareWidgetProps {
  initialFromCity?: City | null
  initialToCity?: City | null
  isLight?: boolean
  className?: string
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
  const fromDropdownRef = useRef<HTMLDivElement>(null)
  const toDropdownRef = useRef<HTMLDivElement>(null)

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
      if (fromDropdownRef.current && !fromDropdownRef.current.contains(e.target as Node) && !fromInputRef.current?.contains(e.target as Node)) {
        setShowFromDropdown(false)
      }
      if (toDropdownRef.current && !toDropdownRef.current.contains(e.target as Node) && !toInputRef.current?.contains(e.target as Node)) {
        setShowToDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleCompare = () => {
    if (fromCity && toCity) {
      router.push(`/time/${fromCity.slug}/${toCity.slug}`)
    }
  }

  const clearFromInput = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setFromQuery('')
    setFromCity(null)
    setShowFromDropdown(false)
    setTimeout(() => fromInputRef.current?.focus(), 0)
  }

  const clearToInput = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setToQuery('')
    setToCity(null)
    setShowToDropdown(false)
    setTimeout(() => toInputRef.current?.focus(), 0)
  }

  return (
    <div className={className} style={{ position: 'relative', zIndex: 10, overflow: 'visible' }}>
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3">
        
        <div className="relative flex-1 w-full" style={{ position: 'relative', overflow: 'visible' }}>
          <div className="relative w-full">
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
              className={`w-full h-10 md:h-14 px-3 pr-10 rounded-xl border text-center text-sm md:text-base ${isLight ? 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400' : 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'} outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
              style={{ fontSize: '16px' }}
            />
            
            {fromQuery && (
              <button
                type="button"
                onMouseDown={clearFromInput}
                className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all hover:scale-110 z-10 ${isLight ? 'hover:bg-slate-200 text-slate-400 hover:text-slate-600' : 'hover:bg-slate-700 text-slate-500 hover:text-slate-300'}`}
                aria-label="Clear input"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          {showFromDropdown && fromResults.length > 0 && (
            <div 
              ref={fromDropdownRef}
              className={`fixed left-4 right-4 md:left-auto md:right-auto md:absolute md:left-0 md:right-0 mt-1 rounded-xl overflow-hidden shadow-2xl ${isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'}`}
              style={{ zIndex: 99999, maxHeight: '300px', overflowY: 'auto', maxWidth: '500px', margin: '0 auto' }}
            >
              {fromResults.map(c => (
                <button 
                  key={c.slug} 
                  type="button"
                  onMouseDown={(e) => { 
                    e.preventDefault()
                    e.stopPropagation()
                    setFromCity(c)
                    setFromQuery(c.city)
                    setShowFromDropdown(false)
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${isLight ? 'hover:bg-slate-100 active:bg-slate-200' : 'hover:bg-slate-700 active:bg-slate-600'}`}
                >
                  <span className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>{c.city}</span>
                  <span className={`text-xs ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{c.country}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        <span className={`hidden md:block text-xl flex-shrink-0 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>↔</span>
        
        <div className="relative flex-1 w-full" style={{ position: 'relative', overflow: 'visible' }}>
          <div className="relative w-full">
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
              className={`w-full h-10 md:h-14 px-3 pr-10 rounded-xl border text-center text-sm md:text-base ${isLight ? 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400' : 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'} outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
              style={{ fontSize: '16px' }}
            />
            
            {toQuery && (
              <button
                type="button"
                onMouseDown={clearToInput}
                className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all hover:scale-110 z-10 ${isLight ? 'hover:bg-slate-200 text-slate-400 hover:text-slate-600' : 'hover:bg-slate-700 text-slate-500 hover:text-slate-300'}`}
                aria-label="Clear input"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          {showToDropdown && toResults.length > 0 && (
            <div 
              ref={toDropdownRef}
              className={`fixed left-4 right-4 md:left-auto md:right-auto md:absolute md:left-0 md:right-0 mt-1 rounded-xl overflow-hidden shadow-2xl ${isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'}`}
              style={{ zIndex: 99999, maxHeight: '300px', overflowY: 'auto', maxWidth: '500px', margin: '0 auto' }}
            >
              {toResults.map(c => (
                <button 
                  key={c.slug}
                  type="button"
                  onMouseDown={(e) => { 
                    e.preventDefault()
                    e.stopPropagation()
                    setToCity(c)
                    setToQuery(c.city)
                    setShowToDropdown(false)
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${isLight ? 'hover:bg-slate-100 active:bg-slate-200' : 'hover:bg-slate-700 active:bg-slate-600'}`}
                >
                  <span className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>{c.city}</span>
                  <span className={`text-xs ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{c.country}</span>
                </button>
              ))}
            </div>
          )}
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
