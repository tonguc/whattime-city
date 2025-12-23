'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import { City, cities, searchCities } from '@/lib/cities'
import { getWeather, WeatherResponse } from '@/lib/weather'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { TimeIcons } from '@/components/TimeIcons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


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
  { from: 'hong-kong', to: 'new-york', label: 'Hong Kong ↔ NYC' },
  { from: 'singapore', to: 'london', label: 'Singapore ↔ London' },
  { from: 'dubai', to: 'new-york', label: 'Dubai ↔ NYC' },
  { from: 'tokyo', to: 'paris', label: 'Tokyo ↔ Paris' },
]

export default function HomePage() {
  const router = useRouter()
  const {
    time,
    activeCity,
    setActiveCity,
    detectedCity,
    favorites,
    getLocalTime,
    getLocalDate,
    getCityTimeOfDay,
  } = useCityContext()
  
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  
  // HomePage uses detectedCity for theme (user's location)
  // This is different from Tools which use activeCity (last visited city)
  const homeTimeOfDay = detectedCity 
    ? getTimeOfDay(time, detectedCity.lat, detectedCity.lng, detectedCity.timezone)
    : 'day'
  const homeTheme = themes[homeTimeOfDay]
  const homeIsLight = isLightTheme(homeTimeOfDay)
  
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
  
  // World Cities tab state
  const [worldCitiesTab, setWorldCitiesTab] = useState<'top' | 'americas' | 'europe' | 'asia' | 'africa' | 'oceania'>('top')

  // Set fromCity when detectedCity becomes available (for comparison feature)
  useEffect(() => {
    if (detectedCity && !fromCity) {
      setFromCity(detectedCity)
      setFromQuery(detectedCity.city)
    }
  }, [detectedCity, fromCity])

  // Update activeCity to detectedCity on homepage
  // This ensures header theme matches user's location when on homepage
  useEffect(() => {
    if (detectedCity) {
      setActiveCity(detectedCity)
    }
  }, [detectedCity, setActiveCity])

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
  
  // Top cities for "Top Cities" tab
  const topCitySlugs = [
    'new-york', 'london', 'tokyo', 'paris', 'dubai', 'singapore',
    'hong-kong', 'shanghai', 'sydney', 'los-angeles', 'toronto', 'berlin'
  ]
  
  // Get cities by continent - filter out user's detected city
  const getCitiesByContinent = (continent: string) => {
    return cities
      .filter(c => c.continent === continent && c.slug !== detectedCity?.slug)
      .sort((a, b) => (a.tier || 3) - (b.tier || 3))
      .slice(0, 12)
  }
  
  // Get cities based on current tab
  const getWorldCities = () => {
    switch (worldCitiesTab) {
      case 'americas':
        return getCitiesByContinent('americas')
      case 'europe':
        return getCitiesByContinent('europe')
      case 'asia':
        return getCitiesByContinent('asia')
      case 'africa':
        return getCitiesByContinent('africa')
      case 'oceania':
        return getCitiesByContinent('oceania')
      default: // 'top'
        return topCitySlugs
          .map(slug => cities.find(c => c.slug === slug))
          .filter((c): c is City => c !== undefined && c.slug !== detectedCity?.slug)
          .slice(0, 12)
    }
  }
  
  const worldCities = getWorldCities()
  
  // Get relative offset in hours
  const getRelativeOffset = (targetCity: City): number => {
    if (!detectedCity) return 0
    const now = new Date()
    const userTime = new Date(now.toLocaleString('en-US', { timeZone: detectedCity.timezone }))
    const targetTime = new Date(now.toLocaleString('en-US', { timeZone: targetCity.timezone }))
    return Math.round((targetTime.getTime() - userTime.getTime()) / (1000 * 60 * 60))
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${homeTheme.bg}`}>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* YOUR LOCATION - Big Clock with Weather */}
        {detectedCity && (
          <section className={`rounded-3xl p-5 md:p-6 mb-4 backdrop-blur-xl border ${homeTheme.card}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h2 className={`text-xl font-semibold ${homeTheme.text}`}>{detectedCity.city}</h2>
                  <p className={`text-sm ${homeTheme.textMuted}`}>
                    {detectedCity.country} • {getLocalDate(detectedCity)}
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-5xl md:text-6xl font-bold tracking-tight ${homeTheme.text}`}>
                  {getLocalTime(detectedCity)}
                </div>
                <div className={`flex items-center justify-center gap-3 mt-2`}>
                  {/* Time of day */}
                  <div className={`flex items-center gap-1.5 text-sm ${homeTheme.textMuted}`}>
                    {(() => {
                      const tod = getCityTimeOfDay(detectedCity)
                      const Icon = TimeIcons[tod]
                      return <><Icon className="w-4 h-4" /><span className="capitalize">{tod}</span></>
                    })()}
                  </div>
                  {/* Weather */}
                  {weather && (
                    <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-sm ${homeIsLight ? 'bg-slate-100' : 'bg-slate-800'}`}>
                      <img 
                        src={weather.current.condition.icon.startsWith('//') ? `https:${weather.current.condition.icon}` : weather.current.condition.icon} 
                        alt={weather.current.condition.text}
                        className="w-6 h-6"
                      />
                      <span className={homeTheme.text}>{Math.round(weather.current.temp_c)}°C</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link href={`/${detectedCity.slug}`}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${homeIsLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                  View City
                </Link>
                <div className="relative" ref={compareWithRef}>
                  <button onClick={() => setShowCompareWith(!showCompareWith)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${homeIsLight ? 'bg-blue-100 hover:bg-blue-200 text-blue-700' : 'bg-blue-900/50 hover:bg-blue-800/50 text-blue-300'}`}>
                    Compare with…
                  </button>
                  {showCompareWith && (
                    <div className={`absolute right-0 top-full mt-2 w-64 rounded-xl shadow-xl border ${homeIsLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'} p-3 z-50`}>
                      <input type="text" value={compareWithQuery} onChange={(e) => setCompareWithQuery(e.target.value)}
                        placeholder="Search city..." autoFocus
                        className={`w-full px-3 py-2 rounded-lg border text-sm ${homeIsLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-700'} outline-none`}
                        style={{ fontSize: '16px' }}
                      />
                      {compareWithResults.length > 0 && (
                        <div className="mt-2 max-h-48 overflow-y-auto">
                          {compareWithResults.map(c => (
                            <button key={c.slug} onClick={() => handleCompareWith(c)}
                              className={`w-full px-3 py-2 text-left text-sm rounded-lg ${homeIsLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'}`}>
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
        <section className={`rounded-3xl p-6 md:p-8 mb-4 backdrop-blur-xl border ${homeTheme.card} text-center`}>
          <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${homeTheme.text} flex items-center justify-center gap-3`}>
            <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            World Clock — Compare Time Instantly
          </h1>
          
          <div className={`max-w-2xl mx-auto mt-6 p-4 rounded-2xl ${homeIsLight ? 'bg-slate-100' : 'bg-slate-800/50'}`}>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* From City */}
              <div className="relative flex-1 w-full">
                <input type="text" value={fromQuery}
                  onChange={(e) => { setFromQuery(e.target.value); setFromCity(null) }}
                  onFocus={() => { if (fromQuery && !fromCity) setShowFromDropdown(true) }}
                  placeholder="From city..."
                  className={`w-full px-4 py-3 rounded-xl border text-center ${homeIsLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-700 text-white'} outline-none focus:ring-2 focus:ring-blue-500`}
                  style={{ fontSize: '16px' }}
                />
                {showFromDropdown && fromResults.length > 0 && (
                  <div className={`absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden shadow-xl z-50 ${homeIsLight ? 'bg-white' : 'bg-slate-800'}`}>
                    {fromResults.map(c => (
                      <button key={c.slug} onClick={() => { setFromCity(c); setFromQuery(c.city); setShowFromDropdown(false) }}
                        className={`w-full px-4 py-2 text-left ${homeIsLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'}`}>
                        <span className={homeTheme.text}>{c.city}</span>
                        <span className={`text-sm ml-2 ${homeTheme.textMuted}`}>{c.country}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <span className={`text-2xl ${homeTheme.textMuted}`}>↔</span>
              
              {/* To City */}
              <div className="relative flex-1 w-full">
                <input type="text" value={toQuery}
                  onChange={(e) => { setToQuery(e.target.value); setToCity(null) }}
                  onFocus={() => { if (toQuery && !toCity) setShowToDropdown(true) }}
                  placeholder="To city..."
                  className={`w-full px-4 py-3 rounded-xl border text-center ${homeIsLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-700 text-white'} outline-none focus:ring-2 focus:ring-blue-500`}
                  style={{ fontSize: '16px' }}
                />
                {showToDropdown && toResults.length > 0 && (
                  <div className={`absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden shadow-xl z-50 ${homeIsLight ? 'bg-white' : 'bg-slate-800'}`}>
                    {toResults.map(c => (
                      <button key={c.slug} onClick={() => { setToCity(c); setToQuery(c.city); setShowToDropdown(false) }}
                        className={`w-full px-4 py-2 text-left ${homeIsLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'}`}>
                        <span className={homeTheme.text}>{c.city}</span>
                        <span className={`text-sm ml-2 ${homeTheme.textMuted}`}>{c.country}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button onClick={handleCompare} disabled={!fromCity || !toCity}
                className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${fromCity && toCity ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' : homeIsLight ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}>
                Compare Time
              </button>
            </div>
            <p className={`text-sm mt-3 ${homeTheme.textMuted}`}>Compare cities or find meeting overlap</p>
          </div>
        </section>

        {/* QUICK TOOLS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <Link href="/tools/meeting-planner" className={`p-5 rounded-2xl backdrop-blur-xl transition-all hover:scale-[1.02] group ${homeIsLight ? 'bg-white/60 border border-white/70' : 'bg-slate-800/60 border border-slate-600/60'}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${homeIsLight ? 'bg-blue-100' : 'bg-blue-900/30'}`}>
              <svg className={`w-5 h-5 ${homeIsLight ? 'text-blue-600' : 'text-blue-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={`font-semibold mb-1 ${homeTheme.text}`}>Meeting Planner</h3>
            <p className={`text-sm mb-3 ${homeTheme.textMuted}`}>Find overlap hours</p>
            <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${homeIsLight ? 'bg-blue-500 text-white group-hover:bg-blue-600' : 'bg-blue-600 text-white group-hover:bg-blue-500'}`}>
              Find Overlap
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link href="/tools/converter" className={`p-5 rounded-2xl backdrop-blur-xl transition-all hover:scale-[1.02] group ${homeIsLight ? 'bg-white/60 border border-white/70' : 'bg-slate-800/60 border border-slate-600/60'}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${homeIsLight ? 'bg-green-100' : 'bg-green-900/30'}`}>
              <svg className={`w-5 h-5 ${homeIsLight ? 'text-green-600' : 'text-green-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className={`font-semibold mb-1 ${homeTheme.text}`}>Convert Time</h3>
            <p className={`text-sm mb-3 ${homeTheme.textMuted}`}>Convert one time to another city</p>
            <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${homeIsLight ? 'bg-green-500 text-white group-hover:bg-green-600' : 'bg-green-600 text-white group-hover:bg-green-500'}`}>
              Convert
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link href="/tools/flight-times" className={`p-5 rounded-2xl backdrop-blur-xl transition-all hover:scale-[1.02] group ${homeIsLight ? 'bg-white/60 border border-white/70' : 'bg-slate-800/60 border border-slate-600/60'}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${homeIsLight ? 'bg-purple-100' : 'bg-purple-900/30'}`}>
              <svg className={`w-5 h-5 ${homeIsLight ? 'text-purple-600' : 'text-purple-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className={`font-semibold mb-1 ${homeTheme.text}`}>Travel Time</h3>
            <p className={`text-sm mb-3 ${homeTheme.textMuted}`}>Calculate arrival time across zones</p>
            <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${homeIsLight ? 'bg-purple-500 text-white group-hover:bg-purple-600' : 'bg-purple-600 text-white group-hover:bg-purple-500'}`}>
              Calculate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </section>

        {/* YOUR FAVORITES */}
        {favoriteCities.length > 0 && (
          <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${homeTheme.card}`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-lg font-semibold flex items-center gap-2 ${homeTheme.text}`}>
                <svg className={`w-5 h-5 ${homeIsLight ? 'text-amber-500' : 'text-amber-400'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Your Favorites
              </h3>
              <Link href="/tools" className={`text-sm ${homeTheme.accentText}`}>+ Add</Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {favoriteCities.slice(0, 6).map(city => (
                <Link key={city.slug} href={`/${city.slug}`}
                  className={`px-4 py-2 rounded-xl text-sm transition-all ${homeIsLight ? 'bg-slate-100 hover:bg-slate-200' : 'bg-slate-800 hover:bg-slate-700'}`}>
                  <span className={homeTheme.text}>{city.city}</span>
                  <span className={`ml-2 ${homeTheme.textMuted}`}>{getLocalTime(city)}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* POPULAR COMPARISONS */}
        <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${homeTheme.card}`}>
          <div className="flex items-center justify-between mb-3">
            <h3 className={`text-lg font-semibold flex items-center gap-2 ${homeTheme.text}`}>
              <svg className={`w-5 h-5 ${homeIsLight ? 'text-blue-500' : 'text-blue-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Popular Comparisons
            </h3>
            <Link href="/tools/converter" className={`text-sm font-medium ${homeTheme.accentText} hover:underline`}>
              See All →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {popularComparisons.map(c => (
              <Link key={`${c.from}-${c.to}`} href={`/time/${c.from}/${c.to}`}
                className={`px-3 py-2 rounded-lg text-sm text-left transition-all ${homeIsLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}>
                {c.label}
              </Link>
            ))}
          </div>
        </section>

        {/* WORLD CITIES - Tab-based design */}
        <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${homeTheme.card}`}>
          {/* Header with tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h3 className={`text-lg font-semibold ${homeTheme.text}`}>World Cities</h3>
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-1">
              {[
                { id: 'top', label: 'Top Cities' },
                { id: 'americas', label: 'Americas' },
                { id: 'europe', label: 'Europe' },
                { id: 'asia', label: 'Asia' },
                { id: 'africa', label: 'Africa' },
                { id: 'oceania', label: 'Oceania' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setWorldCitiesTab(tab.id as typeof worldCitiesTab)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    worldCitiesTab === tab.id
                      ? homeIsLight
                        ? 'bg-purple-500 text-white'
                        : 'bg-purple-500 text-white'
                      : homeIsLight
                        ? 'text-slate-600 hover:bg-slate-100'
                        : 'text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* City Grid - 3 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* My Location Card - First position, special styling */}
            {detectedCity && (
              <Link 
                href={`/${detectedCity.slug}`}
                className={`flex items-center justify-between p-4 rounded-xl transition-all hover:scale-[1.02] ${
                  homeIsLight 
                    ? 'bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300 hover:border-amber-400' 
                    : 'bg-gradient-to-r from-amber-900/40 to-orange-900/40 border-2 border-amber-600 hover:border-amber-500'
                }`}
              >
                <div>
                  <div className={`text-xs font-medium uppercase tracking-wide ${homeIsLight ? 'text-amber-700' : 'text-amber-400'}`}>
                    📍 Your Location
                  </div>
                  <div className={`text-lg font-bold ${homeTheme.text}`}>{detectedCity.city}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-2xl font-bold tabular-nums ${homeTheme.text}`}>
                    {getLocalTime(detectedCity)}
                  </span>
                  {(() => {
                    const tod = getCityTimeOfDay(detectedCity)
                    const Icon = TimeIcons[tod]
                    return <Icon className={`w-5 h-5 ${
                      tod === 'day' ? 'text-amber-500' : 
                      tod === 'night' ? 'text-indigo-400' : 
                      tod === 'dawn' ? 'text-orange-400' : 'text-purple-400'
                    }`} />
                  })()}
                </div>
              </Link>
            )}
            
            {/* World Cities */}
            {worldCities.map(city => {
              const cityTime = getLocalTime(city)
              const tod = getCityTimeOfDay(city)
              const Icon = TimeIcons[tod]
              
              return (
                <Link 
                  key={city.slug} 
                  href={`/${city.slug}`}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all hover:scale-[1.02] ${
                    homeIsLight ? 'bg-slate-100 hover:bg-slate-200' : 'bg-slate-800/50 hover:bg-slate-700/50'
                  }`}
                >
                  <div>
                    <div className={`text-xs uppercase tracking-wide ${homeTheme.textMuted}`}>
                      {city.country}
                    </div>
                    <div className={`text-lg font-bold ${homeTheme.text}`}>{city.city}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-2xl font-bold tabular-nums ${homeTheme.text}`}>
                      {cityTime}
                    </span>
                    <Icon className={`w-5 h-5 ${
                      tod === 'day' ? 'text-amber-500' : 
                      tod === 'night' ? 'text-indigo-400' : 
                      tod === 'dawn' ? 'text-orange-400' : 'text-purple-400'
                    }`} />
                  </div>
                </Link>
              )
            })}
          </div>
          
          {/* All Cities Button */}
          <div className="mt-4 text-center">
            <Link href="/country" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              homeIsLight ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-700' : 'bg-emerald-900/30 hover:bg-emerald-900/50 text-emerald-400'
            }`}>
              All Cities
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
        
        {/* SEO Content Section */}
        <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${homeTheme.card}`}>
          <h2 className={`text-lg font-semibold mb-3 ${homeTheme.text}`}>
            World Clock - Check Current Time Anywhere
          </h2>
          <div className={`space-y-3 text-sm ${homeTheme.textMuted}`}>
            <p>
              Welcome to whattime.city, your free online world clock for checking the current local time in any 
              city around the globe. Our real-time clock automatically detects your location and displays your 
              local time along with sunrise, sunset times, and live weather conditions.
            </p>
            <p>
              Whether you're scheduling international business meetings, planning calls with friends and family 
              abroad, or coordinating travel across time zones, our tools make it easy to convert time between 
              cities, find optimal meeting times, and calculate arrival times for flights.
            </p>
            <p>
              Explore our interactive world map to visualize day and night across the globe, browse time zones 
              by country, or use our specialized tools including the Time Converter, Meeting Planner, Flight Time 
              Calculator, and Jet Lag Advisor. All features are completely free and work on any device.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer isLight={homeIsLight} />
    </div>
  )
}
