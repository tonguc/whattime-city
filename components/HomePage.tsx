'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import { City, cities, searchCities } from '@/lib/cities'
import { getWeather, WeatherResponse } from '@/lib/weather'
import { TimeIcons } from '@/components/TimeIcons'
import Header from '@/components/Header'


// Data
const popularComparisons = [
  { from: 'new-york', to: 'london', label: 'NYC ↔ London' },
  { from: 'tokyo', to: 'los-angeles', label: 'Tokyo ↔ LA' },
  { from: 'dubai', to: 'singapore', label: 'Dubai ↔ Singapore' },
  { from: 'paris', to: 'toronto', label: 'Paris ↔ Toronto' },
  { from: 'istanbul', to: 'berlin', label: 'Istanbul ↔ Berlin' },
  { from: 'london', to: 'sydney', label: 'London ↔ Sydney' },
  { from: 'new-york', to: 'tokyo', label: 'NYC ↔ Tokyo' },
  { from: 'mumbai', to: 'london', label: 'Mumbai ↔ London' },
]

const popularCitySlugs = [
  'london', 'tokyo', 'new-york', 'paris', 'dubai', 'sydney',
  'singapore', 'berlin', 'toronto', 'hong-kong', 'los-angeles', 
  'mumbai', 'shanghai', 'moscow', 'amsterdam', 'bangkok',
  'seoul', 'istanbul', 'cairo', 'jakarta'
]

// 20+ major cities for world cities grid (ensures 18 after filtering user's city)
const majorCitySlugs = [
  'london', 'new-york', 'tokyo', 'paris', 'dubai', 'sydney',
  'singapore', 'los-angeles', 'berlin', 'hong-kong', 'mumbai', 'sao-paulo',
  'toronto', 'moscow', 'shanghai', 'seoul', 'bangkok', 'istanbul',
  'cairo', 'amsterdam', 'jakarta', 'mexico-city'
]

export default function HomePage() {
  const router = useRouter()
  const {
    time,
    activeCity,
    setActiveCity,
    detectedCity,
    theme,
    isLight,
    favorites,
    getLocalTime,
    getLocalDate,
    getCityTimeOfDay,
  } = useCityContext()
  
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  
  // Compare tool state
  const [fromCity, setFromCity] = useState<City | null>(null)
  const [toCity, setToCity] = useState<City | null>(null)
  const [fromQuery, setFromQuery] = useState('')
  const [toQuery, setToQuery] = useState('')
  const [fromResults, setFromResults] = useState<City[]>([])
  const [toResults, setToResults] = useState<City[]>([])
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)
  
  // Compare with dropdown
  const [showCompareWith, setShowCompareWith] = useState(false)
  const [compareWithQuery, setCompareWithQuery] = useState('')
  const [compareWithResults, setCompareWithResults] = useState<City[]>([])
  const compareWithRef = useRef<HTMLDivElement>(null)

  // CRITICAL: Reset activeCity to detectedCity when HomePage mounts
  // This ensures theme updates when navigating back home via logo
  useEffect(() => {
    if (detectedCity) {
      setActiveCity(detectedCity)
    }
  }, [detectedCity, setActiveCity])

  // Set fromCity when detectedCity becomes available
  useEffect(() => {
    if (detectedCity && !fromCity) {
      setFromCity(detectedCity)
      setFromQuery(detectedCity.city)
    }
  }, [detectedCity, fromCity])

  // Fetch weather for detected city
  useEffect(() => {
    if (detectedCity) {
      getWeather(detectedCity.city).then(setWeather).catch(() => {})
    }
  }, [detectedCity])

  // Compare tool search handlers
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
    if (compareWithQuery.length >= 1) {
      setCompareWithResults(searchCities(compareWithQuery).slice(0, 6))
    } else {
      setCompareWithResults([])
    }
  }, [compareWithQuery])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (compareWithRef.current && !compareWithRef.current.contains(e.target as Node)) {
        setShowCompareWith(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleCompare = () => {
    if (fromCity && toCity) router.push(`/time/${fromCity.slug}/${toCity.slug}`)
  }
  
  const handleCompareWith = (city: City) => {
    if (detectedCity) router.push(`/time/${detectedCity.slug}/${city.slug}`)
    setShowCompareWith(false)
    setCompareWithQuery('')
  }

  // Derived data
  const favoriteCities = favorites.map(slug => cities.find(c => c.slug === slug)).filter((c): c is City => c !== undefined)
  const popularCities = popularCitySlugs.map(slug => cities.find(c => c.slug === slug)).filter((c): c is City => c !== undefined)
  
  // Always show 18 cities (exclude user's detected city)
  const majorCities = majorCitySlugs
    .map(slug => cities.find(c => c.slug === slug))
    .filter((c): c is City => c !== undefined && c.slug !== detectedCity?.slug)
    .slice(0, 18)
  
  // Get relative offset in hours
  const getRelativeOffset = (targetCity: City): number => {
    if (!detectedCity) return 0
    const now = new Date()
    const userTime = new Date(now.toLocaleString('en-US', { timeZone: detectedCity.timezone }))
    const targetTime = new Date(now.toLocaleString('en-US', { timeZone: targetCity.timezone }))
    return Math.round((targetTime.getTime() - userTime.getTime()) / (1000 * 60 * 60))
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* YOUR LOCATION - Big Clock with Weather */}
        {detectedCity && (
          <section className={`rounded-3xl p-5 md:p-6 mb-4 backdrop-blur-xl border ${theme.card}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h2 className={`text-xl font-semibold ${theme.text}`}>{detectedCity.city}</h2>
                  <p className={`text-sm ${theme.textMuted}`}>
                    {detectedCity.country} • {getLocalDate(detectedCity)}
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-5xl md:text-6xl font-bold tracking-tight ${theme.text}`}>
                  {getLocalTime(detectedCity)}
                </div>
                <div className={`flex items-center justify-center gap-3 mt-2`}>
                  {/* Time of day */}
                  <div className={`flex items-center gap-1.5 text-sm ${theme.textMuted}`}>
                    {(() => {
                      const tod = getCityTimeOfDay(detectedCity)
                      const Icon = TimeIcons[tod]
                      return <><Icon className="w-4 h-4" /><span className="capitalize">{tod}</span></>
                    })()}
                  </div>
                  {/* Weather */}
                  {weather && (
                    <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-sm ${isLight ? 'bg-slate-100' : 'bg-slate-800'}`}>
                      <img 
                        src={weather.current.condition.icon} 
                        alt={weather.current.condition.text}
                        className="w-6 h-6"
                      />
                      <span className={theme.text}>{Math.round(weather.current.temp_c)}°C</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link href={`/${detectedCity.slug}`}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                  View City
                </Link>
                <div className="relative" ref={compareWithRef}>
                  <button onClick={() => setShowCompareWith(!showCompareWith)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${isLight ? 'bg-blue-100 hover:bg-blue-200 text-blue-700' : 'bg-blue-900/50 hover:bg-blue-800/50 text-blue-300'}`}>
                    Compare with…
                  </button>
                  {showCompareWith && (
                    <div className={`absolute right-0 top-full mt-2 w-64 rounded-xl shadow-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'} p-3 z-50`}>
                      <input type="text" value={compareWithQuery} onChange={(e) => setCompareWithQuery(e.target.value)}
                        placeholder="Search city..." autoFocus
                        className={`w-full px-3 py-2 rounded-lg border text-sm ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-700'} outline-none`}
                        style={{ fontSize: '16px' }}
                      />
                      {compareWithResults.length > 0 && (
                        <div className="mt-2 max-h-48 overflow-y-auto">
                          {compareWithResults.map(c => (
                            <button key={c.slug} onClick={() => handleCompareWith(c)}
                              className={`w-full px-3 py-2 text-left text-sm rounded-lg ${isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'}`}>
                              {c.city}, {c.country}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* HERO - Compare Tool */}
        <section className={`rounded-3xl p-6 md:p-8 mb-4 backdrop-blur-xl border ${theme.card} text-center`}>
          <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${theme.text}`}>
            🌍 World Clock — Compare Time Instantly
          </h1>
          
          <div className={`max-w-2xl mx-auto mt-6 p-4 rounded-2xl ${isLight ? 'bg-slate-100' : 'bg-slate-800/50'}`}>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* From City */}
              <div className="relative flex-1 w-full">
                <input type="text" value={fromQuery}
                  onChange={(e) => { setFromQuery(e.target.value); setFromCity(null) }}
                  onFocus={() => { if (fromQuery && !fromCity) setShowFromDropdown(true) }}
                  placeholder="From city..."
                  className={`w-full px-4 py-3 rounded-xl border text-center ${isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-700 text-white'} outline-none focus:ring-2 focus:ring-blue-500`}
                  style={{ fontSize: '16px' }}
                />
                {showFromDropdown && fromResults.length > 0 && (
                  <div className={`absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden shadow-xl z-50 ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
                    {fromResults.map(c => (
                      <button key={c.slug} onClick={() => { setFromCity(c); setFromQuery(c.city); setShowFromDropdown(false) }}
                        className={`w-full px-4 py-2 text-left ${isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'}`}>
                        <span className={theme.text}>{c.city}</span>
                        <span className={`text-sm ml-2 ${theme.textMuted}`}>{c.country}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <span className={`text-2xl ${theme.textMuted}`}>↔</span>
              
              {/* To City */}
              <div className="relative flex-1 w-full">
                <input type="text" value={toQuery}
                  onChange={(e) => { setToQuery(e.target.value); setToCity(null) }}
                  onFocus={() => { if (toQuery && !toCity) setShowToDropdown(true) }}
                  placeholder="To city..."
                  className={`w-full px-4 py-3 rounded-xl border text-center ${isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-700 text-white'} outline-none focus:ring-2 focus:ring-blue-500`}
                  style={{ fontSize: '16px' }}
                />
                {showToDropdown && toResults.length > 0 && (
                  <div className={`absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden shadow-xl z-50 ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
                    {toResults.map(c => (
                      <button key={c.slug} onClick={() => { setToCity(c); setToQuery(c.city); setShowToDropdown(false) }}
                        className={`w-full px-4 py-2 text-left ${isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'}`}>
                        <span className={theme.text}>{c.city}</span>
                        <span className={`text-sm ml-2 ${theme.textMuted}`}>{c.country}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button onClick={handleCompare} disabled={!fromCity || !toCity}
                className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${fromCity && toCity ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' : isLight ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}>
                Compare Time
              </button>
            </div>
            <p className={`text-sm mt-3 ${theme.textMuted}`}>Compare cities or find meeting overlap</p>
          </div>
        </section>

        {/* QUICK TOOLS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <Link href="/tools/meeting-planner" className={`p-5 rounded-2xl backdrop-blur-xl transition-all hover:scale-[1.02] group ${isLight ? 'bg-white/60 border border-white/70' : 'bg-slate-800/60 border border-slate-600/60'}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${isLight ? 'bg-blue-100' : 'bg-blue-900/30'}`}>
              <svg className={`w-5 h-5 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={`font-semibold mb-1 ${theme.text}`}>Meeting Planner</h3>
            <p className={`text-sm mb-3 ${theme.textMuted}`}>Find overlap hours</p>
            <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${isLight ? 'bg-blue-500 text-white group-hover:bg-blue-600' : 'bg-blue-600 text-white group-hover:bg-blue-500'}`}>
              Find Overlap
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link href="/tools/converter" className={`p-5 rounded-2xl backdrop-blur-xl transition-all hover:scale-[1.02] group ${isLight ? 'bg-white/60 border border-white/70' : 'bg-slate-800/60 border border-slate-600/60'}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${isLight ? 'bg-green-100' : 'bg-green-900/30'}`}>
              <svg className={`w-5 h-5 ${isLight ? 'text-green-600' : 'text-green-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className={`font-semibold mb-1 ${theme.text}`}>Convert Time</h3>
            <p className={`text-sm mb-3 ${theme.textMuted}`}>Convert one time to another city</p>
            <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${isLight ? 'bg-green-500 text-white group-hover:bg-green-600' : 'bg-green-600 text-white group-hover:bg-green-500'}`}>
              Convert
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link href="/tools/flight-times" className={`p-5 rounded-2xl backdrop-blur-xl transition-all hover:scale-[1.02] group ${isLight ? 'bg-white/60 border border-white/70' : 'bg-slate-800/60 border border-slate-600/60'}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${isLight ? 'bg-purple-100' : 'bg-purple-900/30'}`}>
              <svg className={`w-5 h-5 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className={`font-semibold mb-1 ${theme.text}`}>Travel Time</h3>
            <p className={`text-sm mb-3 ${theme.textMuted}`}>Calculate arrival time across zones</p>
            <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${isLight ? 'bg-purple-500 text-white group-hover:bg-purple-600' : 'bg-purple-600 text-white group-hover:bg-purple-500'}`}>
              Calculate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </section>

        {/* YOUR FAVORITES */}
        {favoriteCities.length > 0 && (
          <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${theme.card}`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-lg font-semibold flex items-center gap-2 ${theme.text}`}>
                <svg className={`w-5 h-5 ${isLight ? 'text-amber-500' : 'text-amber-400'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Your Favorites
              </h3>
              <Link href="/tools" className={`text-sm ${theme.accentText}`}>+ Add</Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {favoriteCities.slice(0, 6).map(city => (
                <Link key={city.slug} href={`/${city.slug}`}
                  className={`px-4 py-2 rounded-xl text-sm transition-all ${isLight ? 'bg-slate-100 hover:bg-slate-200' : 'bg-slate-800 hover:bg-slate-700'}`}>
                  <span className={theme.text}>{city.city}</span>
                  <span className={`ml-2 ${theme.textMuted}`}>{getLocalTime(city)}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* POPULAR COMPARISONS */}
        <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${theme.card}`}>
          <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${theme.text}`}>
            <svg className={`w-5 h-5 ${isLight ? 'text-blue-500' : 'text-blue-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Popular Comparisons
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {popularComparisons.map(c => (
              <Link key={`${c.from}-${c.to}`} href={`/time/${c.from}/${c.to}`}
                className={`px-3 py-2 rounded-lg text-sm text-center transition-all ${isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}>
                {c.label}
              </Link>
            ))}
            <Link href="/tools/converter" className={`px-3 py-2 rounded-lg text-sm text-center font-medium ${theme.accentText} ${isLight ? 'bg-blue-50' : 'bg-blue-900/20'}`}>
              All →
            </Link>
          </div>
        </section>

        {/* WORLD CITIES */}
        <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${theme.card}`}>
          <div className="flex items-center gap-2 mb-4">
            <svg className={`w-5 h-5 ${isLight ? 'text-emerald-500' : 'text-emerald-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <ellipse cx="12" cy="12" rx="4" ry="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2c2.5 3.5 2.5 14.5 0 20"/>
              <path d="M12 2c-2.5 3.5-2.5 14.5 0 20"/>
            </svg>
            <h3 className={`text-lg font-semibold ${theme.text}`}>World Cities</h3>
            {detectedCity && (
              <span className={`text-sm ${theme.textMuted}`}>· relative to {detectedCity.city}</span>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {majorCities.map(city => {
              const cityTime = getLocalTime(city)
              const offset = getRelativeOffset(city)
              const offsetStr = offset === 0 ? 'Same time' : `${offset > 0 ? '+' : ''}${offset}h`
              const tod = getCityTimeOfDay(city)
              const Icon = TimeIcons[tod]
              
              return (
                <div key={city.slug} className={`flex items-center gap-4 p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
                  <Icon className={`w-5 h-5 flex-shrink-0 ${
                    tod === 'day' ? 'text-amber-500' : 
                    tod === 'night' ? 'text-indigo-400' : 
                    tod === 'dawn' ? 'text-orange-400' : 'text-purple-400'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium ${theme.text}`}>{city.city}</div>
                    <div className={`text-xs ${theme.textMuted}`}>{city.country}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold ${theme.text}`}>{cityTime}</div>
                    <div className={`text-xs ${offset > 0 ? 'text-green-500' : offset < 0 ? 'text-orange-500' : theme.textMuted}`}>
                      {offsetStr}
                    </div>
                  </div>
                  <Link 
                    href={detectedCity ? `/time/${detectedCity.slug}/${city.slug}` : `/${city.slug}`}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
                      isLight ? 'bg-blue-100 hover:bg-blue-200 text-blue-700' : 'bg-blue-900/50 hover:bg-blue-800/50 text-blue-300'
                    }`}
                  >
                    Compare
                  </Link>
                </div>
              )
            })}
          </div>
          
          {/* All Cities Button */}
          <div className="mt-4 text-center">
            <Link href="/country" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isLight ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-700' : 'bg-emerald-900/30 hover:bg-emerald-900/50 text-emerald-400'
            }`}>
              All Cities
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* POPULAR CITIES */}
        <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${theme.card}`}>
          <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${theme.text}`}>
            <svg className={`w-5 h-5 ${isLight ? 'text-orange-500' : 'text-orange-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Popular Cities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {popularCities.slice(0, 16).map(city => {
              const tod = getCityTimeOfDay(city)
              const Icon = TimeIcons[tod]
              return (
                <Link key={city.slug} href={`/${city.slug}`}
                  className={`px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-center gap-1.5 ${isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}
                  title={`${city.city} - ${tod}`}>
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{city.city}</span>
                </Link>
              )
            })}
          </div>
          
          {/* All Cities Button */}
          <div className="mt-4 text-center">
            <Link href="/country" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isLight ? 'bg-orange-100 hover:bg-orange-200 text-orange-700' : 'bg-orange-900/30 hover:bg-orange-900/50 text-orange-400'
            }`}>
              All Cities
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={`py-8 border-t ${isLight ? 'border-slate-200 bg-white/50' : 'border-slate-800 bg-slate-900/50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            <Link href="/map" className={`flex items-center gap-2 text-sm ${theme.textMuted} hover:${theme.text} transition-colors group`} title="Interactive world time map">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={2}/>
                <path strokeWidth={2} d="M2 12h20"/>
                <path strokeWidth={2} d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span className="group-hover:underline">World Map</span>
            </Link>
            <Link href="/country" className={`flex items-center gap-2 text-sm ${theme.textMuted} hover:${theme.text} transition-colors group`} title="Browse cities by country">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              <span className="group-hover:underline">Countries</span>
            </Link>
            <Link href="/tools" className={`flex items-center gap-2 text-sm ${theme.textMuted} hover:${theme.text} transition-colors group`} title="Time zone tools">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="group-hover:underline">Tools</span>
            </Link>
            <Link href="/widget" className={`flex items-center gap-2 text-sm ${theme.textMuted} hover:${theme.text} transition-colors group`} title="Embed a clock on your site">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="group-hover:underline">Free Widget</span>
            </Link>
          </nav>
          
          {/* Time of day legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {(['dawn', 'day', 'dusk', 'night'] as const).map(tod => {
              const Icon = TimeIcons[tod]
              const labels = { dawn: 'Dawn', day: 'Day', dusk: 'Dusk', night: 'Night' }
              return (
                <div key={tod} className={`flex items-center gap-1.5 text-xs ${theme.textMuted}`} title={labels[tod]}>
                  <Icon className="w-4 h-4" />
                  <span>{labels[tod]}</span>
                </div>
              )
            })}
          </div>
          
          <p className={`text-center text-sm ${theme.textMuted}`}>© {new Date().getFullYear()} whattime.city</p>
        </div>
      </footer>
    </div>
  )
}
