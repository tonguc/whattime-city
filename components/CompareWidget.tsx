'use client'

import { useState, useEffect } from 'react'
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

  // Update query when initial cities change
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

  // Search handlers
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

  const handleCompare = () => {
    if (fromCity && toCity) {
      router.push(`/time/${fromCity.slug}/${toCity.slug}`)
    }
  }

  return (
    <div className={className}>
      <div className={`flex flex-col sm:flex-row items-center gap-3 ${isLight ? '' : ''}`}>
        {/* From City */}
        <div className="relative flex-1 w-full" style={{ overflow: 'visible' }}>
          <input 
            type="text" 
            value={fromQuery}
            onChange={(e) => { 
              setFromQuery(e.target.value); 
              setFromCity(null); 
            }}
            onFocus={() => { 
              if (fromQuery && !fromCity) setShowFromDropdown(true); 
            }}
            placeholder="From city..."
            className={`w-full px-4 py-3 rounded-xl border text-center ${isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-700 text-white'} outline-none focus:ring-2 focus:ring-blue-500`}
            style={{ fontSize: '16px' }}
          />
          {showFromDropdown && fromResults.length > 0 && (
            <div 
              className={`absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden shadow-xl z-[100] ${isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'}`}
              style={{ maxHeight: '300px', overflowY: 'auto' }}
            >
              {fromResults.map(c => (
                <button 
                  key={c.slug} 
                  type="button"
                  data-compare-result="true"
                  onClick={(e) => { 
                    e.preventDefault()
                    e.stopPropagation()
                    setFromCity(c); 
                    setFromQuery(c.city); 
                    setShowFromDropdown(false); 
                  }}
                  className={`w-full px-4 py-2 text-left ${isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'}`}
                >
                  <span className={isLight ? 'text-slate-800' : 'text-white'}>{c.city}</span>
                  <span className={`text-sm ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{c.country}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        <span className={`text-2xl ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>↔</span>
        
        {/* To City */}
        <div className="relative flex-1 w-full" style={{ overflow: 'visible' }}>
          <input 
            type="text" 
            value={toQuery}
            onChange={(e) => { 
              setToQuery(e.target.value); 
              setToCity(null); 
            }}
            onFocus={() => { 
              if (toQuery && !toCity) setShowToDropdown(true); 
            }}
            placeholder="To city..."
            className={`w-full px-4 py-3 rounded-xl border text-center ${isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-700 text-white'} outline-none focus:ring-2 focus:ring-blue-500`}
            style={{ fontSize: '16px' }}
          />
          {showToDropdown && toResults.length > 0 && (
            <div 
              className={`absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden shadow-xl z-[100] ${isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'}`}
              style={{ maxHeight: '300px', overflowY: 'auto' }}
            >
              {toResults.map(c => (
                <button 
                  key={c.slug}
                  type="button"
                  data-compare-result="true"
                  onClick={(e) => { 
                    e.preventDefault()
                    e.stopPropagation()
                    setToCity(c); 
                    setToQuery(c.city); 
                    setShowToDropdown(false); 
                  }}
                  className={`w-full px-4 py-2 text-left ${isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'}`}
                >
                  <span className={isLight ? 'text-slate-800' : 'text-white'}>{c.city}</span>
                  <span className={`text-sm ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{c.country}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* IMPROVED BUTTON: High-Contrast Primary CTA */}
        <button 
          onClick={handleCompare} 
          disabled={!fromCity || !toCity}
          className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap shadow-lg ${
            fromCity && toCity 
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white cursor-pointer transform hover:scale-105 shadow-blue-500/50' 
              : isLight 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
          }`}
        >
          Compare Time
        </button>
      </div>
      <p className={`text-sm mt-3 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
        Compare cities or find meeting overlap
      </p>
    </div>
  )
}
