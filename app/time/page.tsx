'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCityContext } from '@/lib/CityContext'
import { useThemeClasses } from '@/lib/useThemeClasses'
import { City, searchCities } from '@/lib/cities'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Note: Metadata is in layout.tsx since this is a client component

// Dropdown Portal Component
function CityDropdown({ 
  results, 
  onSelect, 
  highlightIndex,
  isLight 
}: { 
  results: City[]
  onSelect: (city: City) => void
  highlightIndex: number
  isLight: boolean
}) {
  if (results.length === 0) return null
  
  return (
    <div 
      className={`absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden shadow-2xl border z-50 ${
        isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'
      }`}
    >
      {results.map((city, index) => (
        <button 
          key={city.slug}
          type="button"
          onMouseDown={(e) => {
            e.preventDefault()
            onSelect(city)
          }}
          className={`w-full px-4 py-3 text-left transition-colors ${
            index === highlightIndex 
              ? (isLight ? 'bg-blue-100' : 'bg-blue-900/50')
              : (isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700')
          }`}
        >
          <span className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>
            {city.city}
          </span>
          <span className={`text-sm ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            {city.country}
          </span>
        </button>
      ))}
    </div>
  )
}

export default function CompareTimePage() {
  const router = useRouter()
  const context = useCityContext()
  const { theme, isLight, text, textMuted, card } = useThemeClasses()
  
  // From city - auto-detected
  const [fromCity, setFromCity] = useState<City | null>(null)
  const [fromQuery, setFromQuery] = useState('')
  const [fromResults, setFromResults] = useState<City[]>([])
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [fromHighlightIndex, setFromHighlightIndex] = useState(-1)
  
  // To city - empty by default
  const [toCity, setToCity] = useState<City | null>(null)
  const [toQuery, setToQuery] = useState('')
  const [toResults, setToResults] = useState<City[]>([])
  const [showToDropdown, setShowToDropdown] = useState(false)
  const [toHighlightIndex, setToHighlightIndex] = useState(-1)
  
  // Initialize fromCity from user's detected location
  useEffect(() => {
    if (context.detectedCity) {
      setFromCity(context.detectedCity)
      setFromQuery(context.detectedCity.city)
    } else if (context.activeCity) {
      setFromCity(context.activeCity)
      setFromQuery(context.activeCity.city)
    }
  }, [context.detectedCity, context.activeCity])
  
  // Search effects
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
  
  // Navigate when both cities are selected
  useEffect(() => {
    if (fromCity && toCity) {
      // Use shallow routing to update URL without reload
      router.push(`/time/${fromCity.slug}/${toCity.slug}`)
    }
  }, [fromCity, toCity, router])
  
  // Keyboard handlers
  const handleFromKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showFromDropdown || fromResults.length === 0) return
    
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFromHighlightIndex(prev => Math.min(prev + 1, fromResults.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFromHighlightIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const selectedCity = fromHighlightIndex >= 0 ? fromResults[fromHighlightIndex] : fromResults[0]
      if (selectedCity) handleFromSelect(selectedCity)
    } else if (e.key === 'Escape') {
      setShowFromDropdown(false)
    }
  }
  
  const handleToKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showToDropdown || toResults.length === 0) return
    
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setToHighlightIndex(prev => Math.min(prev + 1, toResults.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setToHighlightIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const selectedCity = toHighlightIndex >= 0 ? toResults[toHighlightIndex] : toResults[0]
      if (selectedCity) handleToSelect(selectedCity)
    } else if (e.key === 'Escape') {
      setShowToDropdown(false)
    }
  }
  
  const handleFromSelect = (city: City) => {
    setFromCity(city)
    setFromQuery(city.city)
    setShowFromDropdown(false)
    setFromHighlightIndex(-1)
  }
  
  const handleToSelect = (city: City) => {
    setToCity(city)
    setToQuery(city.city)
    setShowToDropdown(false)
    setToHighlightIndex(-1)
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
  
  const clearFrom = () => {
    setFromCity(null)
    setFromQuery('')
    setShowFromDropdown(false)
  }
  
  const clearTo = () => {
    setToCity(null)
    setToQuery('')
    setShowToDropdown(false)
  }
  
  return (
    <div className={`min-h-screen transition-colors duration-700 bg-gradient-to-br ${theme.bg}`}>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${text}`}>
            Compare Time Between Cities
          </h1>
          <p className={`text-lg ${textMuted}`}>
            See the current time difference between any two cities
          </p>
        </div>
        
        {/* Compare Widget */}
        <div className={`rounded-3xl p-6 md:p-8 backdrop-blur-xl border ${card}`}>
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
            
            {/* From City Input */}
            <div className="relative flex-1">
              <label className={`block text-sm font-medium mb-2 ${textMuted}`}>From</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={fromQuery}
                  onChange={(e) => { 
                    setFromQuery(e.target.value)
                    setFromCity(null)
                    setFromHighlightIndex(-1)
                  }}
                  onKeyDown={handleFromKeyDown}
                  onFocus={() => {
                    if (fromQuery && !fromCity) setShowFromDropdown(true)
                  }}
                  onBlur={() => setTimeout(() => setShowFromDropdown(false), 200)}
                  placeholder="Select a city"
                  className={`w-full h-14 px-4 ${fromQuery ? 'pr-10' : ''} rounded-xl border text-lg ${
                    isLight 
                      ? 'bg-white border-slate-300 text-slate-800 placeholder:text-slate-400' 
                      : 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'
                  } outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  style={{ fontSize: '16px' }}
                />
                
                {fromQuery && (
                  <button
                    type="button"
                    onClick={clearFrom}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all hover:scale-110 ${
                      isLight ? 'hover:bg-slate-200 text-slate-400' : 'hover:bg-slate-700 text-slate-500'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                
                {showFromDropdown && (
                  <CityDropdown 
                    results={fromResults}
                    onSelect={handleFromSelect}
                    highlightIndex={fromHighlightIndex}
                    isLight={isLight}
                  />
                )}
              </div>
            </div>
            
            {/* Swap Button */}
            <div className="flex justify-center md:mt-6">
              <button
                type="button"
                onClick={handleSwap}
                disabled={!fromCity || !toCity}
                className={`p-3 rounded-xl transition-all ${
                  fromCity && toCity 
                    ? (isLight ? 'hover:bg-slate-200 text-slate-600' : 'hover:bg-slate-700 text-slate-400') 
                    : 'opacity-30 cursor-not-allowed text-slate-400'
                }`}
                title="Swap cities"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
            </div>
            
            {/* To City Input */}
            <div className="relative flex-1">
              <label className={`block text-sm font-medium mb-2 ${textMuted}`}>To</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={toQuery}
                  onChange={(e) => { 
                    setToQuery(e.target.value)
                    setToCity(null)
                    setToHighlightIndex(-1)
                  }}
                  onKeyDown={handleToKeyDown}
                  onFocus={() => {
                    if (toQuery && !toCity) setShowToDropdown(true)
                  }}
                  onBlur={() => setTimeout(() => setShowToDropdown(false), 200)}
                  placeholder="Select a city"
                  className={`w-full h-14 px-4 ${toQuery ? 'pr-10' : ''} rounded-xl border text-lg ${
                    isLight 
                      ? 'bg-white border-slate-300 text-slate-800 placeholder:text-slate-400' 
                      : 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'
                  } outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  style={{ fontSize: '16px' }}
                />
                
                {toQuery && (
                  <button
                    type="button"
                    onClick={clearTo}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all hover:scale-110 ${
                      isLight ? 'hover:bg-slate-200 text-slate-400' : 'hover:bg-slate-700 text-slate-500'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                
                {showToDropdown && (
                  <CityDropdown 
                    results={toResults}
                    onSelect={handleToSelect}
                    highlightIndex={toHighlightIndex}
                    isLight={isLight}
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* Help Text */}
          <p className={`text-center mt-6 text-sm ${textMuted}`}>
            Select both cities to see the time comparison
          </p>
        </div>
        
        {/* Popular Comparisons */}
        <div className="mt-12">
          <h2 className={`text-xl font-semibold mb-4 text-center ${text}`}>
            Popular Time Comparisons
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { from: 'new-york', to: 'london', label: 'New York → London' },
              { from: 'london', to: 'tokyo', label: 'London → Tokyo' },
              { from: 'los-angeles', to: 'sydney', label: 'Los Angeles → Sydney' },
              { from: 'dubai', to: 'singapore', label: 'Dubai → Singapore' },
              { from: 'paris', to: 'new-york', label: 'Paris → New York' },
              { from: 'tokyo', to: 'san-francisco', label: 'Tokyo → San Francisco' },
            ].map(({ from, to, label }) => (
              <button
                key={`${from}-${to}`}
                onClick={() => router.push(`/time/${from}/${to}`)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                  isLight 
                    ? 'bg-white/60 border-slate-200 hover:bg-white hover:shadow-md text-slate-700' 
                    : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 hover:shadow-md text-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        
        {/* SEO Content */}
        <section className={`mt-12 rounded-2xl p-6 backdrop-blur-xl border ${card}`}>
          <h2 className={`text-xl font-semibold mb-4 ${text}`}>
            About Time Zone Comparison
          </h2>
          <div className={`space-y-4 text-sm ${textMuted}`}>
            <p>
              Our time comparison tool helps you instantly see the current time in two cities side by side. 
              Whether you're scheduling an international call, planning a meeting with colleagues abroad, 
              or coordinating with family in different time zones, this tool makes it easy.
            </p>
            <p>
              Simply select your local city and the destination city to see the live time difference, 
              best times to call, business hours overlap, and more. The comparison updates in real-time, 
              showing you accurate current times for both locations.
            </p>
            <p>
              Need to compare more than two cities? Try our Meeting Planner tool for multi-city 
              time zone coordination with visual overlap indicators.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
