'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { City, cities, searchCities } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { getWeather, WeatherResponse } from '@/lib/weather'
import { TimeIcons } from '@/components/TimeIcons'
import DigitalClock from '@/components/DigitalClock'
import AnalogClock from '@/components/AnalogClock'
import SunInfoCard from '@/components/SunInfoCard'
import ThemeToggle from '@/components/ThemeToggle'
import Search from '@/components/Search'
import CityCard from '@/components/CityCard'

import { translations } from '@/lib/translations'

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
]

const topCitySlugs = [
  'new-york', 'london', 'tokyo', 'paris', 'dubai', 'singapore',
  'hong-kong', 'shanghai', 'sydney', 'los-angeles', 'toronto', 'berlin'
]

// Use English translations
const t = translations.en

// Weather Badge
function WeatherBadge({ weather, isLight }: { weather: WeatherResponse; isLight: boolean }) {
  const text = weather.current.condition.text.toLowerCase()
  const icon = text.includes('sun') || text.includes('clear') ? '☀️' : text.includes('cloud') ? '☁️' : text.includes('rain') ? '🌧️' : text.includes('snow') ? '❄️' : '🌤️'
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5 ${isLight ? 'bg-slate-200/80 text-slate-700' : 'bg-slate-700/80 text-slate-300'}`}>
      <span>{icon}</span>
      <span>{Math.round(weather.current.temp_c)}°C</span>
      <span className="hidden sm:inline text-xs opacity-70">{weather.current.condition.text}</span>
    </span>
  )
}

export default function HomePage() {
  const router = useRouter()
  const [time, setTime] = useState(new Date())
  const [selectedCity, setSelectedCity] = useState<City>(cities[0])
  const [detectedCity, setDetectedCity] = useState<City | null>(null)
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  const [clockMode, setClockMode] = useState<'digital' | 'analog'>('digital')
  const [use12Hour, setUse12Hour] = useState(false)
  const [themeMode, setThemeMode] = useState<'auto' | 'light' | 'dark'>('auto')
  const [favorites, setFavorites] = useState<string[]>([])
  
  // Compare tool
  const [fromCity, setFromCity] = useState<City | null>(null)
  const [toCity, setToCity] = useState<City | null>(null)
  const [fromQuery, setFromQuery] = useState('')
  const [toQuery, setToQuery] = useState('')
  const [fromResults, setFromResults] = useState<City[]>([])
  const [toResults, setToResults] = useState<City[]>([])
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    try {
      const f = localStorage.getItem('whattime-favorites')
      if (f) setFavorites(JSON.parse(f))
      const cm = localStorage.getItem('whattime-clock-mode')
      if (cm === 'analog' || cm === 'digital') setClockMode(cm)
      const tm = localStorage.getItem('whattime-theme-mode')
      if (tm === 'auto' || tm === 'light' || tm === 'dark') setThemeMode(tm)
    } catch {}
  }, [])

  useEffect(() => { localStorage.setItem('whattime-clock-mode', clockMode) }, [clockMode])
  useEffect(() => { localStorage.setItem('whattime-theme-mode', themeMode) }, [themeMode])

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const nearest = findNearestCity(pos.coords.latitude, pos.coords.longitude)
          setDetectedCity(nearest); setSelectedCity(nearest); setFromCity(nearest); setFromQuery(nearest.city)
        },
        () => {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
          const c = cities.find(c => c.timezone === tz) || cities[0]
          setDetectedCity(c); setSelectedCity(c); setFromCity(c); setFromQuery(c.city)
        },
        { timeout: 5000, maximumAge: 300000 }
      )
    }
  }, [])

  useEffect(() => {
    if (selectedCity) getWeather(selectedCity.city).then(setWeather).catch(() => {})
  }, [selectedCity])

  useEffect(() => {
    if (fromQuery.length >= 1 && !fromCity) { setFromResults(searchCities(fromQuery).slice(0, 6)); setShowFromDropdown(true) }
    else { setFromResults([]); setShowFromDropdown(false) }
  }, [fromQuery, fromCity])

  useEffect(() => {
    if (toQuery.length >= 1 && !toCity) { setToResults(searchCities(toQuery).slice(0, 6)); setShowToDropdown(true) }
    else { setToResults([]); setShowToDropdown(false) }
  }, [toQuery, toCity])

  const autoTheme = getTimeOfDay(time, selectedCity.lat, selectedCity.lng, selectedCity.timezone)
  const currentTheme = themeMode === 'auto' ? autoTheme : themeMode === 'light' ? 'day' : 'night'
  const theme = themes[currentTheme]
  const isLight = isLightTheme(currentTheme)
  const localTime = new Date(time.toLocaleString('en-US', { timeZone: selectedCity.timezone }))
  const dateStr = localTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
  const offset = new Date().toLocaleString('en-US', { timeZone: selectedCity.timezone, timeZoneName: 'shortOffset' }).split(' ').pop() || ''

  const isFavorite = (slug: string) => favorites.includes(slug)
  const toggleFavorite = (slug: string) => {
    const newFavs = isFavorite(slug) ? favorites.filter(f => f !== slug) : [...favorites, slug]
    setFavorites(newFavs); localStorage.setItem('whattime-favorites', JSON.stringify(newFavs))
  }

  const favoriteCities = favorites.map(slug => cities.find(c => c.slug === slug)).filter((c): c is City => c !== undefined)
  const topCities = topCitySlugs.map(slug => cities.find(c => c.slug === slug)).filter((c): c is City => c !== undefined)
  const handleCompare = () => { if (fromCity && toCity) router.push(`/time/${fromCity.slug}/${toCity.slug}`) }
  const TimeIcon = TimeIcons[autoTheme]

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full backdrop-blur-xl ${isLight ? 'bg-white/70' : 'bg-slate-900/70'}`}>
        <div className="max-w-6xl mx-auto px-4 py-2 sm:py-3 flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
            <img src={isLight ? "/logo.svg" : "/logo-dark.svg"} alt="whattime.city" className="h-11 sm:h-14" />
          </Link>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Search theme={theme} currentTheme={currentTheme} />
            
            <div className="flex items-center justify-center w-full sm:w-auto gap-1 sm:gap-2">
              {/* Digital/Analog */}
              <div className={`flex rounded-full p-1 ${isLight ? 'bg-white/60' : 'bg-slate-800/60'} backdrop-blur-xl`}>
                {(['digital', 'analog'] as const).map((mode) => (
                  <button key={mode} onClick={() => setClockMode(mode)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${clockMode === mode ? `${theme.accentBg} text-white shadow-lg` : isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    <span className="hidden sm:inline capitalize">{t[mode]}</span>
                    <span className="sm:hidden">{mode === 'digital' ? '🔢' : '🕐'}</span>
                  </button>
                ))}
              </div>
              
              {/* 24h/12h */}
              <div className={`flex rounded-full p-1 ${isLight ? 'bg-white/60' : 'bg-slate-800/60'} backdrop-blur-xl`}>
                <button onClick={() => setUse12Hour(false)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!use12Hour ? `${theme.accentBg} text-white shadow-lg` : isLight ? 'text-slate-600' : 'text-slate-400'}`}>24h</button>
                <button onClick={() => setUse12Hour(true)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${use12Hour ? `${theme.accentBg} text-white shadow-lg` : isLight ? 'text-slate-600' : 'text-slate-400'}`}>12h</button>
              </div>
              
              {/* Theme Toggle */}
              <ThemeToggle mode={themeMode} setMode={setThemeMode} currentTheme={currentTheme} t={t} themeData={theme} />
              
              {/* Map */}
              <a href="/map" className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all ${isLight ? 'bg-white/60 text-slate-600 hover:bg-white/80' : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'} backdrop-blur-xl`}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </a>
              
              {/* Tools */}
              <a href="/tools" className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all ${isLight ? 'bg-white/60 text-slate-600 hover:bg-white/80' : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'} backdrop-blur-xl`}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* Hero - Big Clock */}
        <section className={`rounded-3xl p-4 md:p-5 mb-4 backdrop-blur-xl border ${theme.card}`}>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full flex justify-center">
              {clockMode === 'analog' ? <AnalogClock time={localTime} theme={currentTheme} themeData={theme} /> : <DigitalClock time={localTime} theme={currentTheme} themeData={theme} use12Hour={use12Hour} />}
            </div>
            
            <div className="mt-4 md:mt-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <h2 className={`text-3xl md:text-5xl font-medium ${theme.text}`}>{selectedCity.city}</h2>
                <button onClick={() => toggleFavorite(selectedCity.slug)} className={`text-xl md:text-3xl transition-all hover:scale-110 ${isFavorite(selectedCity.slug) ? 'text-amber-400' : isLight ? 'text-slate-300 hover:text-amber-400' : 'text-slate-600 hover:text-amber-400'}`}>
                  {isFavorite(selectedCity.slug) ? '★' : '☆'}
                </button>
              </div>
              <p className={`text-base md:text-lg mt-1 ${theme.textMuted}`}>{selectedCity.country}</p>
              
              {detectedCity && detectedCity.slug !== selectedCity.slug && (
                <p className={`text-xs mt-1 ${theme.textMuted} opacity-50`}>
                  Time difference: {(() => {
                    const so = new Date().toLocaleString('en-US', { timeZone: selectedCity.timezone, timeZoneName: 'shortOffset' }).split(' ').pop()
                    const dt = new Date().toLocaleString('en-US', { timeZone: detectedCity.timezone, timeZoneName: 'shortOffset' }).split(' ').pop()
                    const parse = (s: string) => { const m = s?.match(/GMT([+-]?\d+)?/); return m ? (parseInt(m[1]) || 0) : 0 }
                    const diff = parse(so || '') - parse(dt || ''); return diff === 0 ? 'same' : `${diff > 0 ? '+' : ''}${diff}h`
                  })()}
                </p>
              )}
              
              {detectedCity && <p className={`text-xs mt-1 ${theme.textMuted} opacity-70`}>📍 Your location: {detectedCity.city}</p>}
              <p className={`mt-1 text-sm md:text-base ${theme.textMuted}`}>{dateStr}</p>
              
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${isLight ? 'bg-slate-200/80 text-slate-700' : 'bg-slate-700/80 text-slate-300'}`}>{offset}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5 ${theme.accentBgLight} ${theme.accentClass}`}>
                  <TimeIcon className="w-4 h-4" />{t[autoTheme]}
                </span>
                {weather && <WeatherBadge weather={weather} isLight={isLight} />}
              </div>
            </div>
            
            <div className="mt-4 w-full max-w-xs">
              <SunInfoCard city={selectedCity} localTime={localTime} theme={currentTheme} t={t} />
            </div>
          </div>
        </section>

        {/* Quick Compare */}
        <section className={`rounded-3xl p-4 md:p-6 mb-4 backdrop-blur-xl border ${theme.card}`}>
          <h3 className={`text-lg font-semibold mb-3 ${theme.text}`}>⚡ Quick Compare</h3>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <input type="text" value={fromQuery} onChange={(e) => { setFromQuery(e.target.value); setFromCity(null) }} onFocus={() => fromQuery && !fromCity && setShowFromDropdown(true)} placeholder="From city..."
                className={`w-full px-4 py-3 rounded-xl border ${isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-800 border-slate-700 text-white'} outline-none focus:ring-2 focus:ring-blue-500`} />
              {showFromDropdown && fromResults.length > 0 && (
                <div className={`absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden shadow-xl z-50 ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
                  {fromResults.map(c => (<button key={c.slug} onClick={() => { setFromCity(c); setFromQuery(c.city); setShowFromDropdown(false) }} className={`w-full px-4 py-2 text-left ${isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'}`}><span className={theme.text}>{c.city}</span><span className={`text-sm ml-2 ${theme.textMuted}`}>{c.country}</span></button>))}
                </div>
              )}
            </div>
            <span className={`text-2xl ${theme.textMuted}`}>↔</span>
            <div className="relative flex-1 w-full">
              <input type="text" value={toQuery} onChange={(e) => { setToQuery(e.target.value); setToCity(null) }} onFocus={() => toQuery && !toCity && setShowToDropdown(true)} placeholder="To city..."
                className={`w-full px-4 py-3 rounded-xl border ${isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-800 border-slate-700 text-white'} outline-none focus:ring-2 focus:ring-blue-500`} />
              {showToDropdown && toResults.length > 0 && (
                <div className={`absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden shadow-xl z-50 ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
                  {toResults.map(c => (<button key={c.slug} onClick={() => { setToCity(c); setToQuery(c.city); setShowToDropdown(false) }} className={`w-full px-4 py-2 text-left ${isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'}`}><span className={theme.text}>{c.city}</span><span className={`text-sm ml-2 ${theme.textMuted}`}>{c.country}</span></button>))}
                </div>
              )}
            </div>
            <button onClick={handleCompare} disabled={!fromCity || !toCity} className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${fromCity && toCity ? 'bg-blue-600 hover:bg-blue-700 text-white' : isLight ? 'bg-slate-200 text-slate-400' : 'bg-slate-700 text-slate-500'}`}>Compare</button>
          </div>
          <p className={`text-sm mt-2 ${theme.textMuted}`}>Find the best meeting time instantly</p>
        </section>

        {/* Quick Tools */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <Link href="/tools/meeting-planner" className={`p-5 rounded-2xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${theme.card}`}>
            <div className="text-2xl mb-2">📅</div>
            <h3 className={`font-semibold mb-1 ${theme.text}`}>Meeting Planner</h3>
            <p className={`text-sm mb-3 ${theme.textMuted}`}>Find overlap hours</p>
            <span className={`text-sm font-medium ${theme.accentText}`}>Plan →</span>
          </Link>
          <Link href="/tools/converter" className={`p-5 rounded-2xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${theme.card}`}>
            <div className="text-2xl mb-2">🔄</div>
            <h3 className={`font-semibold mb-1 ${theme.text}`}>Convert Time</h3>
            <p className={`text-sm mb-3 ${theme.textMuted}`}>Any time, any city</p>
            <span className={`text-sm font-medium ${theme.accentText}`}>Convert →</span>
          </Link>
          <Link href="/tools/flight-times" className={`p-5 rounded-2xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${theme.card}`}>
            <div className="text-2xl mb-2">✈️</div>
            <h3 className={`font-semibold mb-1 ${theme.text}`}>Travel Time</h3>
            <p className={`text-sm mb-3 ${theme.textMuted}`}>Arrival calculator</p>
            <span className={`text-sm font-medium ${theme.accentText}`}>Calculate →</span>
          </Link>
        </section>

        {/* Favorites */}
        {favoriteCities.length > 0 && (
          <section className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card} mb-4`}>
            <h3 className={`text-lg font-semibold mb-4 ${theme.text}`}>★ Your Favorites</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {favoriteCities.slice(0, 6).map(city => (
                <CityCard key={city.slug} city={city} isSelected={selectedCity.slug === city.slug} onClick={() => { setSelectedCity(city); router.push(`/${city.slug}`) }} currentTheme={currentTheme} themeData={theme} use12Hour={use12Hour} />
              ))}
            </div>
          </section>
        )}

        {/* Popular Comparisons */}
        <section className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card} mb-4`}>
          <h3 className={`text-lg font-semibold mb-4 ${theme.text}`}>🔥 Popular Comparisons</h3>
          <div className="flex flex-wrap gap-3">
            {popularComparisons.map(c => (<Link key={`${c.from}-${c.to}`} href={`/time/${c.from}/${c.to}`} className={`px-4 py-2 rounded-xl text-sm transition-all ${isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}>{c.label}</Link>))}
          </div>
        </section>

        {/* World Cities */}
        <section className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card} mb-4`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-semibold ${theme.text}`}>🌍 World Cities</h3>
            <Link href="/country" className={`text-sm ${theme.accentText}`}>All Countries →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topCities.map(city => (
              <CityCard key={city.slug} city={city} isSelected={selectedCity.slug === city.slug} onClick={() => { setSelectedCity(city); router.push(`/${city.slug}`) }} currentTheme={currentTheme} themeData={theme} use12Hour={use12Hour} />
            ))}
          </div>
        </section>

        {/* World Map */}
        <section className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card} mb-4`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className={`text-lg font-semibold mb-1 ${theme.text}`}>🗺️ World Map</h3>
              <p className={`text-sm ${theme.textMuted}`}>See where it's day or night</p>
            </div>
            <Link href="/map" className={`px-5 py-2.5 rounded-xl font-medium transition-all ${isLight ? 'bg-slate-800 hover:bg-slate-900 text-white' : 'bg-white hover:bg-slate-100 text-slate-900'}`}>Explore Map →</Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 border-t ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
        <nav className="flex flex-wrap justify-center gap-6 mb-4">
          <Link href="/map" className={`text-sm ${theme.textMuted} hover:underline`}>World Map</Link>
          <Link href="/country" className={`text-sm ${theme.textMuted} hover:underline`}>Countries</Link>
          <Link href="/tools" className={`text-sm ${theme.textMuted} hover:underline`}>Tools</Link>
          <Link href="/widget" className={`text-sm ${theme.textMuted} hover:underline`}>Free Widget</Link>
        </nav>
        <p className={`text-center text-sm ${theme.textMuted}`}>© {new Date().getFullYear()} whattime.city</p>
      </footer>
    </div>
  )
}
