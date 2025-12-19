'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { City, cities, searchCities } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { getWeather, WeatherResponse } from '@/lib/weather'
import { TimeIcons } from '@/components/TimeIcons'

// Find nearest city
function findNearestCity(lat: number, lng: number): City {
  let nearest = cities[0]
  let minDist = Infinity
  for (const city of cities) {
    const dist = Math.pow(city.lat - lat, 2) + Math.pow(city.lng - lng, 2)
    if (dist < minDist) { minDist = dist; nearest = city }
  }
  return nearest
}

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
  'mumbai', 'shanghai', 'moscow', 'amsterdam', 'bangkok'
]

// 12 major cities for relative time comparison
const majorCitySlugs = [
  'london', 'new-york', 'tokyo', 'paris', 'dubai', 'sydney',
  'singapore', 'los-angeles', 'berlin', 'hong-kong', 'mumbai', 'sao-paulo'
]

export default function HomePage() {
  const router = useRouter()
  const [time, setTime] = useState(new Date())
  const [detectedCity, setDetectedCity] = useState<City | null>(() => {
    // Default to a major city until geolocation kicks in
    return cities.find(c => c.slug === 'london') || cities[0]
  })
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  
  // Preferences
  const [clockMode, setClockMode] = useState<'digital' | 'analog'>('digital')
  const [use12Hour, setUse12Hour] = useState(false)
  const [themeMode, setThemeMode] = useState<'auto' | 'light' | 'dark'>('auto')
  const [showSettings, setShowSettings] = useState(false)
  const settingsRef = useRef<HTMLDivElement>(null)
  
  // Global search
  const [globalQuery, setGlobalQuery] = useState('')
  const [globalResults, setGlobalResults] = useState<City[]>([])
  const [showGlobalDropdown, setShowGlobalDropdown] = useState(false)
  const globalSearchRef = useRef<HTMLDivElement>(null)
  
  // Compare tool state
  const defaultCity = cities.find(c => c.slug === 'london') || cities[0]
  const [fromCity, setFromCity] = useState<City | null>(defaultCity)
  const [toCity, setToCity] = useState<City | null>(null)
  const [fromQuery, setFromQuery] = useState(defaultCity.city)
  const [toQuery, setToQuery] = useState('')
  const [fromResults, setFromResults] = useState<City[]>([])
  const [toResults, setToResults] = useState<City[]>([])
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)
  
  // Compare with... state
  const [showCompareWith, setShowCompareWith] = useState(false)
  const [compareWithQuery, setCompareWithQuery] = useState('')
  const [compareWithResults, setCompareWithResults] = useState<City[]>([])
  const compareWithRef = useRef<HTMLDivElement>(null)
  
  // Favorites
  const [favorites, setFavorites] = useState<string[]>([])

  // Timer
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Load preferences
  useEffect(() => {
    try {
      const f = localStorage.getItem('whattime-favorites')
      if (f) setFavorites(JSON.parse(f))
      const cm = localStorage.getItem('whattime-clock-mode')
      if (cm === 'analog' || cm === 'digital') setClockMode(cm)
      const h = localStorage.getItem('whattime-12hour')
      if (h === 'true') setUse12Hour(true)
      const tm = localStorage.getItem('whattime-theme-mode')
      if (tm === 'auto' || tm === 'light' || tm === 'dark') setThemeMode(tm)
    } catch {}
  }, [])

  // Save preferences
  useEffect(() => { localStorage.setItem('whattime-clock-mode', clockMode) }, [clockMode])
  useEffect(() => { localStorage.setItem('whattime-12hour', String(use12Hour)) }, [use12Hour])
  useEffect(() => { localStorage.setItem('whattime-theme-mode', themeMode) }, [themeMode])

  // Detect location
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const nearest = findNearestCity(pos.coords.latitude, pos.coords.longitude)
          setDetectedCity(nearest)
          setFromCity(nearest)
          setFromQuery(nearest.city)
        },
        () => {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
          const c = cities.find(c => c.timezone === tz) || cities[0]
          setDetectedCity(c)
          setFromCity(c)
          setFromQuery(c.city)
        },
        { timeout: 5000, maximumAge: 300000 }
      )
    }
  }, [])

  // Fetch weather
  useEffect(() => {
    if (detectedCity) getWeather(detectedCity.city).then(setWeather).catch(() => {})
  }, [detectedCity])

  // Global search - handles single city or city pair
  useEffect(() => {
    if (globalQuery.length >= 1) {
      // Check if it's a pair (contains space or common separators)
      const parts = globalQuery.split(/[\s,\-]+/).filter(p => p.length > 0)
      if (parts.length >= 2) {
        // Try to find two cities
        const firstResults = searchCities(parts[0])
        const secondResults = searchCities(parts.slice(1).join(' '))
        if (firstResults.length > 0 && secondResults.length > 0) {
          // Show as pair suggestion
          setGlobalResults([firstResults[0], secondResults[0]])
        } else {
          setGlobalResults(searchCities(globalQuery).slice(0, 6))
        }
      } else {
        setGlobalResults(searchCities(globalQuery).slice(0, 6))
      }
      setShowGlobalDropdown(true)
    } else {
      setGlobalResults([])
      setShowGlobalDropdown(false)
    }
  }, [globalQuery])

  // Compare tool search
  useEffect(() => {
    if (fromQuery.length >= 1 && !fromCity) { setFromResults(searchCities(fromQuery).slice(0, 6)); setShowFromDropdown(true) }
    else { setFromResults([]); setShowFromDropdown(false) }
  }, [fromQuery, fromCity])

  useEffect(() => {
    if (toQuery.length >= 1 && !toCity) { setToResults(searchCities(toQuery).slice(0, 6)); setShowToDropdown(true) }
    else { setToResults([]); setShowToDropdown(false) }
  }, [toQuery, toCity])
  
  useEffect(() => {
    if (compareWithQuery.length >= 1) setCompareWithResults(searchCities(compareWithQuery).slice(0, 6))
    else setCompareWithResults([])
  }, [compareWithQuery])

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (globalSearchRef.current && !globalSearchRef.current.contains(e.target as Node)) setShowGlobalDropdown(false)
      if (compareWithRef.current && !compareWithRef.current.contains(e.target as Node)) setShowCompareWith(false)
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) setShowSettings(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Theme
  const themeCity = detectedCity || cities[0]
  const autoTheme = getTimeOfDay(time, themeCity.lat, themeCity.lng, themeCity.timezone)
  const currentTheme = themeMode === 'auto' ? autoTheme : themeMode === 'light' ? 'day' : 'night'
  const theme = themes[currentTheme]
  const isLight = isLightTheme(currentTheme)

  // Helpers
  const getLocalTime = (city: City) => time.toLocaleTimeString('en-US', { timeZone: city.timezone, hour: '2-digit', minute: '2-digit', hour12: use12Hour })
  const getLocalDate = (city: City) => time.toLocaleDateString('en-US', { timeZone: city.timezone, weekday: 'long', month: 'short', day: 'numeric' })
  const getCityTimeOfDay = (city: City) => getTimeOfDay(time, city.lat, city.lng, city.timezone)
  
  const handleCompare = () => {
    if (fromCity && toCity) router.push(`/time/${fromCity.slug}/${toCity.slug}`)
  }
  
  const handleGlobalSearch = (city: City, index: number) => {
    // If we have 2 results and user clicks, it might be a pair
    if (globalResults.length === 2 && index === 1) {
      router.push(`/time/${globalResults[0].slug}/${globalResults[1].slug}`)
    } else if (globalResults.length === 2 && index === 0) {
      router.push(`/${city.slug}`)
    } else {
      router.push(`/${city.slug}`)
    }
    setGlobalQuery('')
    setShowGlobalDropdown(false)
  }
  
  const handleCompareWith = (city: City) => {
    if (detectedCity) router.push(`/time/${detectedCity.slug}/${city.slug}`)
    setShowCompareWith(false)
    setCompareWithQuery('')
  }

  // Favorites
  const favoriteCities = favorites.map(slug => cities.find(c => c.slug === slug)).filter((c): c is City => c !== undefined)
  const popularCities = popularCitySlugs.map(slug => cities.find(c => c.slug === slug)).filter((c): c is City => c !== undefined)
  
  // Major cities for relative time (exclude user's city)
  const majorCities = majorCitySlugs
    .map(slug => cities.find(c => c.slug === slug))
    .filter((c): c is City => c !== undefined && c.slug !== detectedCity?.slug)
    .slice(0, 12)
  
  // Get relative offset in hours between detected city and target city
  const getRelativeOffset = (targetCity: City): number => {
    if (!detectedCity) return 0
    const now = new Date()
    const userTime = new Date(now.toLocaleString('en-US', { timeZone: detectedCity.timezone }))
    const targetTime = new Date(now.toLocaleString('en-US', { timeZone: targetCity.timezone }))
    const diffMs = targetTime.getTime() - userTime.getTime()
    return Math.round(diffMs / (1000 * 60 * 60))
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      {/* ═══════════════════════════════════════════════════════════════════════
          HEADER - Logo | Search | Map Tools Widget | ⚙ Settings
          ═══════════════════════════════════════════════════════════════════════ */}
      <header className={`sticky top-0 z-50 w-full backdrop-blur-xl ${isLight ? 'bg-white/80' : 'bg-slate-900/80'} border-b ${isLight ? 'border-slate-200/50' : 'border-slate-700/50'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
            <img src={isLight ? "/logo.svg" : "/logo-dark.svg"} alt="whattime.city" className="h-10 sm:h-12" />
          </Link>
          
          {/* Search */}
          <div className="flex-1 max-w-md hidden sm:block" ref={globalSearchRef}>
            <div className="relative">
              <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${isLight ? 'bg-slate-100' : 'bg-slate-800'}`}>
                <svg className={`w-4 h-4 ${theme.textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={globalQuery}
                  onChange={(e) => setGlobalQuery(e.target.value)}
                  onFocus={() => globalQuery && setShowGlobalDropdown(true)}
                  placeholder="Search city..."
                  className={`flex-1 bg-transparent outline-none text-sm ${theme.text}`}
                  style={{ fontSize: '16px' }}
                />
              </div>
              
              {showGlobalDropdown && globalResults.length > 0 && (
                <div className={`absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden shadow-xl z-50 ${isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'}`}>
                  {globalResults.map((city, i) => (
                    <button key={city.slug} onClick={() => handleGlobalSearch(city, i)}
                      className={`w-full px-4 py-3 text-left flex items-center justify-between ${isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700'}`}>
                      <div>
                        <span className={theme.text}>{city.city}</span>
                        <span className={`text-sm ml-2 ${theme.textMuted}`}>{city.country}</span>
                      </div>
                      <span className={`text-sm ${theme.textMuted}`}>{getLocalTime(city)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Nav Links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <Link href="/map" className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}>
              Map
            </Link>
            <Link href="/tools" className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}>
              Tools
            </Link>
            <Link href="/widget" className={`hidden sm:block px-3 py-2 rounded-lg text-sm font-medium transition-all ${isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}>
              Widget
            </Link>
            
            {/* Settings Dropdown */}
            <div className="relative" ref={settingsRef}>
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className={`p-2 rounded-lg transition-all ${isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}
                title="Settings"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              
              {showSettings && (
                <div className={`absolute right-0 top-full mt-2 w-56 rounded-xl shadow-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'} p-4 z-50`}>
                  <h4 className={`text-xs font-semibold uppercase tracking-wide mb-3 ${theme.textMuted}`}>Preferences</h4>
                  
                  {/* Clock Display */}
                  <div className="mb-4">
                    <label className={`text-sm font-medium ${theme.text} mb-2 block`}>Clock Display</label>
                    <div className="flex gap-2">
                      {(['digital', 'analog'] as const).map(mode => (
                        <button key={mode} onClick={() => setClockMode(mode)}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${clockMode === mode ? `${theme.accentBg} text-white` : isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'}`}>
                          {mode === 'digital' ? 'Digital' : 'Analog'}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Time Format */}
                  <div className="mb-4">
                    <label className={`text-sm font-medium ${theme.text} mb-2 block`}>Time Format</label>
                    <div className="flex gap-2">
                      <button onClick={() => setUse12Hour(false)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${!use12Hour ? `${theme.accentBg} text-white` : isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'}`}>24h</button>
                      <button onClick={() => setUse12Hour(true)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${use12Hour ? `${theme.accentBg} text-white` : isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'}`}>12h</button>
                    </div>
                  </div>
                  
                  {/* Theme */}
                  <div>
                    <label className={`text-sm font-medium ${theme.text} mb-2 block`}>Theme</label>
                    <div className="flex gap-2">
                      {(['light', 'auto', 'dark'] as const).map(mode => (
                        <button key={mode} onClick={() => setThemeMode(mode)}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${themeMode === mode ? `${theme.accentBg} text-white` : isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'}`}>
                          {mode === 'light' ? '☀️' : mode === 'dark' ? '🌙' : '🔄'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
        
        {/* Mobile Search */}
        <div className="sm:hidden px-4 pb-3" ref={globalSearchRef}>
          <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${isLight ? 'bg-slate-100' : 'bg-slate-800'}`}>
            <svg className={`w-4 h-4 ${theme.textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={globalQuery}
              onChange={(e) => setGlobalQuery(e.target.value)}
              placeholder="Search city..."
              className={`flex-1 bg-transparent outline-none text-sm ${theme.text}`}
              style={{ fontSize: '16px' }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* ═══════════════════════════════════════════════════════════════════════
            YOUR LOCATION - With Big Clock Display (First thing user sees)
            ═══════════════════════════════════════════════════════════════════════ */}
        {detectedCity && (
          <section className={`rounded-3xl p-5 md:p-6 mb-4 backdrop-blur-xl border ${theme.card}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* City Info */}
              <div className="flex items-center gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h2 className={`text-xl font-semibold ${theme.text}`}>{detectedCity.city}</h2>
                  <p className={`text-sm ${theme.textMuted}`}>
                    {detectedCity.country} • {getLocalDate(detectedCity)}
                  </p>
                </div>
              </div>
              
              {/* Big Clock Display */}
              <div className="text-center">
                <div className={`text-5xl md:text-6xl font-bold tracking-tight ${theme.text}`}>
                  {getLocalTime(detectedCity)}
                </div>
                <div className={`flex items-center justify-center gap-2 mt-1 text-sm ${theme.textMuted}`}>
                  {(() => {
                    const tod = getCityTimeOfDay(detectedCity)
                    const Icon = TimeIcons[tod]
                    return <><Icon className="w-4 h-4" /><span className="capitalize">{tod}</span></>
                  })()}
                  {weather && <span>• {Math.round(weather.current.temp_c)}°C</span>}
                </div>
              </div>
              
              {/* Actions */}
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

        {/* ═══════════════════════════════════════════════════════════════════════
            HERO - Compare Tool (Compact)
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className={`rounded-3xl p-6 md:p-8 mb-4 backdrop-blur-xl border ${theme.card} text-center`}>
          <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${theme.text}`}>
            🌍 World Clock & Time Zone Tools
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
            <p className={`text-sm mt-3 ${theme.textMuted}`}>
              Find the best meeting time instantly
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            QUICK TOOLS
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <Link href="/tools/meeting-planner" className={`p-5 rounded-2xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${theme.card}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${isLight ? 'bg-blue-100' : 'bg-blue-900/30'}`}>
              <svg className={`w-5 h-5 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={`font-semibold mb-1 ${theme.text}`}>Meeting Planner</h3>
            <p className={`text-sm mb-3 ${theme.textMuted}`}>Find overlap hours</p>
            <span className={`text-sm font-medium ${theme.accentText}`}>Plan →</span>
          </Link>
          <Link href="/tools/converter" className={`p-5 rounded-2xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${theme.card}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${isLight ? 'bg-green-100' : 'bg-green-900/30'}`}>
              <svg className={`w-5 h-5 ${isLight ? 'text-green-600' : 'text-green-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className={`font-semibold mb-1 ${theme.text}`}>Convert Time</h3>
            <p className={`text-sm mb-3 ${theme.textMuted}`}>Convert one time to another city</p>
            <span className={`text-sm font-medium ${theme.accentText}`}>Convert →</span>
          </Link>
          <Link href="/tools/flight-times" className={`p-5 rounded-2xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${theme.card}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${isLight ? 'bg-purple-100' : 'bg-purple-900/30'}`}>
              <svg className={`w-5 h-5 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className={`font-semibold mb-1 ${theme.text}`}>Travel Time</h3>
            <p className={`text-sm mb-3 ${theme.textMuted}`}>Calculate arrival time across zones</p>
            <span className={`text-sm font-medium ${theme.accentText}`}>Calc →</span>
          </Link>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            YOUR FAVORITES
            ═══════════════════════════════════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════════════════════════════════
            POPULAR COMPARISONS
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${theme.card}`}>
          <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${theme.text}`}>
            <svg className={`w-5 h-5 ${isLight ? 'text-blue-500' : 'text-blue-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Popular Comparisons
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularComparisons.map(c => (
              <Link key={`${c.from}-${c.to}`} href={`/time/${c.from}/${c.to}`}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}>
                {c.label}
              </Link>
            ))}
            <Link href="/tools/converter" className={`px-3 py-1.5 rounded-lg text-sm font-medium ${theme.accentText}`}>
              All →
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            MAJOR CITIES RELATIVE TO YOUR TIME
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${theme.card}`}>
          <h3 className={`text-lg font-semibold mb-1 flex items-center gap-2 ${theme.text}`}>
            <svg className={`w-5 h-5 ${isLight ? 'text-emerald-500' : 'text-emerald-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth={2}/>
              <path strokeWidth={2} d="M2 12h20"/>
              <path strokeWidth={2} d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            World Cities
          </h3>
          <p className={`text-sm mb-4 ${theme.textMuted}`}>
            {detectedCity ? `Times relative to ${detectedCity.city}` : 'Current times around the world'}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {majorCities.map(city => {
              const cityTime = getLocalTime(city)
              const offset = getRelativeOffset(city)
              const status = offset === 0 ? 'Same' : offset > 0 ? 'Ahead' : 'Behind'
              const offsetStr = offset === 0 ? '—' : `${offset > 0 ? '+' : ''}${offset}h`
              
              return (
                <div key={city.slug} className={`flex items-center justify-between p-3 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium ${theme.text} truncate`}>{city.city}</div>
                    <div className={`text-xs ${theme.textMuted}`}>{city.country}</div>
                  </div>
                  <div className="text-center px-3">
                    <div className={`text-lg font-bold ${theme.text}`}>{cityTime}</div>
                    <div className={`text-xs ${offset > 0 ? 'text-green-500' : offset < 0 ? 'text-orange-500' : theme.textMuted}`}>
                      {offsetStr} {status !== 'Same' && <span className="opacity-70">{status}</span>}
                    </div>
                  </div>
                  <Link 
                    href={detectedCity ? `/time/${detectedCity.slug}/${city.slug}` : `/${city.slug}`}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isLight ? 'bg-blue-100 hover:bg-blue-200 text-blue-700' : 'bg-blue-900/50 hover:bg-blue-800/50 text-blue-300'
                    }`}
                  >
                    Compare
                  </Link>
                </div>
              )
            })}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            POPULAR CITIES
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${theme.card}`}>
          <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${theme.text}`}>
            <svg className={`w-5 h-5 ${isLight ? 'text-orange-500' : 'text-orange-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Popular Cities
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularCities.map(city => (
              <Link key={city.slug} href={`/${city.slug}`}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}>
                {city.city}
              </Link>
            ))}
            <Link href="/country" className={`px-3 py-1.5 rounded-lg text-sm font-medium ${theme.accentText}`}>
              All →
            </Link>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════════════════════ */}
      <footer className={`py-8 border-t ${isLight ? 'border-slate-200 bg-white/50' : 'border-slate-800 bg-slate-900/50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/map" className={`text-sm ${theme.textMuted} hover:underline`}>World Map</Link>
            <Link href="/country" className={`text-sm ${theme.textMuted} hover:underline`}>Countries</Link>
            <Link href="/tools" className={`text-sm ${theme.textMuted} hover:underline`}>Tools</Link>
            <Link href="/widget" className={`text-sm ${theme.textMuted} hover:underline`}>Free Widget</Link>
          </nav>
          <p className={`text-center text-sm ${theme.textMuted}`}>© {new Date().getFullYear()} whattime.city</p>
        </div>
      </footer>
    </div>
  )
}
