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
    <div className={className} style={{ overflow: 'visible', position: 'relative', zIndex: 1 }}>
      {/* FIX #4: MOBILE COMPACT STACK - flex-col on mobile, flex-row on desktop */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3">
        
        {/* From City Input */}
        <div className="relative flex-1 w-full" style={{ overflow: 'visible' }}>
          <input 
            type="text" 
            value={fromQuery}
            onChange={(e) => { 
              setFromQuery(e.target.value); 
              setFromCity(null); 
            }}
            {/* FIX #2: AUTO-CLEAR ON FOCUS */}
            onFocus={() => {
              setFromQuery(''); // Clear immediately on focus
              setFromCity(null);
            }}
            placeholder="From city..."
            {/* FIX #4: COMPACT MOBILE - h-10, text-sm, px-3 */}
            className={`
              w-full h-10 px-3 
              rounded-xl border text-center 
              text-sm
              ${isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-700 text-white'} 
              outline-none focus:ring-2 focus:ring-blue-500
            `}
            style={{ fontSize: '16px' }}
          />
          
          {/* FIX #1: DROPDOWN - GLOBAL Z-INDEX FIX with position: fixed */}
          {showFromDropdown && fromResults.length > 0 && (
            <div 
              className={`
                fixed left-0 right-0 mt-1 
                rounded-xl overflow-hidden shadow-2xl 
                z-[9999]
                max-w-md mx-auto
                ${isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'}
              `}
              style={{ 
                maxHeight: '300px', 
                overflowY: 'auto',
                top: 'auto'
              }}
            >
              {fromResults.map(c => (
                <button 
                  key={c.slug} 
                  type="button"
                  onClick={(e) => { 
                    e.preventDefault()
                    e.stopPropagation()
                    setFromCity(c); 
                    setFromQuery(c.city); 
                    setShowFromDropdown(false); 
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm ${isLight ? 'hover:bg-slate-100 active:bg-slate-200' : 'hover:bg-slate-700 active:bg-slate-600'}`}
                >
                  <span className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>{c.city}</span>
                  <span className={`text-xs ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{c.country}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Arrow - Hidden on mobile, visible on desktop */}
        <span className={`hidden md:block text-xl ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>↔</span>
        
        {/* To City Input */}
        <div className="relative flex-1 w-full" style={{ overflow: 'visible' }}>
          <input 
            type="text" 
            value={toQuery}
            onChange={(e) => { 
              setToQuery(e.target.value); 
              setToCity(null); 
            }}
            {/* FIX #2: AUTO-CLEAR ON FOCUS */}
            onFocus={() => {
              setToQuery(''); // Clear immediately on focus
              setToCity(null);
            }}
            placeholder="To city..."
            {/* FIX #4: COMPACT MOBILE - h-10, text-sm, px-3 */}
            className={`
              w-full h-10 px-3 
              rounded-xl border text-center 
              text-sm
              ${isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-700 text-white'} 
              outline-none focus:ring-2 focus:ring-blue-500
            `}
            style={{ fontSize: '16px' }}
          />
          
          {/* FIX #1: DROPDOWN - GLOBAL Z-INDEX FIX with position: fixed */}
          {showToDropdown && toResults.length > 0 && (
            <div 
              className={`
                fixed left-0 right-0 mt-1 
                rounded-xl overflow-hidden shadow-2xl 
                z-[9999]
                max-w-md mx-auto
                ${isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'}
              `}
              style={{ 
                maxHeight: '300px', 
                overflowY: 'auto',
                top: 'auto'
              }}
            >
              {toResults.map(c => (
                <button 
                  key={c.slug}
                  type="button"
                  onClick={(e) => { 
                    e.preventDefault()
                    e.stopPropagation()
                    setToCity(c); 
                    setToQuery(c.city); 
                    setShowToDropdown(false); 
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm ${isLight ? 'hover:bg-slate-100 active:bg-slate-200' : 'hover:bg-slate-700 active:bg-slate-600'}`}
                >
                  <span className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>{c.city}</span>
                  <span className={`text-xs ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{c.country}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* FIX #3: BUTTON ALWAYS ACTIVE - No gray disabled state, always blue */}
        {/* FIX #4: MOBILE FULL WIDTH - w-full on mobile, auto on desktop */}
        <button 
          onClick={handleCompare} 
          disabled={!fromCity || !toCity}
          className={`
            w-full md:w-auto
            h-10 px-6
            rounded-xl font-semibold 
            text-sm
            transition-all whitespace-nowrap 
            ${fromCity && toCity 
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/50 cursor-pointer transform hover:scale-105' 
              : 'bg-blue-600 text-white opacity-50 cursor-not-allowed'
            }
          `}
        >
          Compare Time
        </button>
      </div>
      
      {/* Helper Text */}
      <p className={`text-xs mt-2 text-center md:text-left ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
        Compare cities or find meeting overlap
      </p>
    </div>
  )
}
