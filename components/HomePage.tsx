'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { City, cities, searchCities } from '@/lib/cities'
import { getTimeOfDay, getSunTimes, formatSunTime } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { getWeather, WeatherResponse } from '@/lib/weather'
import { TimeIcons } from '@/components/TimeIcons'
import CityCard from '@/components/CityCard'

// Find nearest city by coordinates
function findNearestCity(lat: number, lng: number): City {
  let nearest = cities[0]
  let minDist = Infinity
  for (const city of cities) {
    const dist = Math.pow(city.lat - lat, 2) + Math.pow(city.lng - lng, 2)
    if (dist < minDist) {
      minDist = dist
      nearest = city
    }
  }
  return nearest
}

// Popular comparisons for internal linking
const popularComparisons = [
  { from: 'new-york', to: 'london', label: 'NYC ↔ London' },
  { from: 'tokyo', to: 'los-angeles', label: 'Tokyo ↔ LA' },
  { from: 'dubai', to: 'singapore', label: 'Dubai ↔ Singapore' },
  { from: 'paris', to: 'toronto', label: 'Paris ↔ Toronto' },
  { from: 'istanbul', to: 'berlin', label: 'Istanbul ↔ Berlin' },
]

// Popular cities for quick access
const popularCities = [
  'london', 'tokyo', 'new-york', 'paris', 'dubai', 'sydney',
  'singapore', 'berlin', 'toronto', 'hong-kong', 'los-angeles', 'mumbai'
]

// Top cities for grid display (first 12 major cities)
const topCitySlugs = [
  'new-york', 'london', 'tokyo', 'paris', 'dubai', 'singapore',
  'hong-kong', 'shanghai', 'sydney', 'los-angeles', 'toronto', 'berlin'
]

export default function HomePage() {
  const router = useRouter()
  const [time, setTime] = useState(new Date())
  const [detectedCity, setDetectedCity] = useState<City | null>(null)
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  const [fromCity, setFromCity] = useState<City | null>(null)
  const [toCity, setToCity] = useState<City | null>(null)
  const [fromQuery, setFromQuery] = useState('')
  const [toQuery, setToQuery] = useState('')
  const [fromResults, setFromResults] = useState<City[]>([])
  const [toResults, setToResults] = useState<City[]>([])
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)
  const [favorites, setFavorites] = useState<string[]>([])

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('whattime-favorites')
    if (saved) {
      try {
        setFavorites(JSON.parse(saved))
      } catch {}
    }
  }, [])

  // Detect user location
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const nearest = findNearestCity(position.coords.latitude, position.coords.longitude)
          setDetectedCity(nearest)
          setFromCity(nearest)
          setFromQuery(nearest.city)
        },
        () => {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
          const cityByTz = cities.find(c => c.timezone === tz) || cities[0]
          setDetectedCity(cityByTz)
          setFromCity(cityByTz)
          setFromQuery(cityByTz.city)
        },
        { timeout: 5000, maximumAge: 300000 }
      )
    }
  }, [])

  // Fetch weather for detected city
  useEffect(() => {
    if (detectedCity) {
      getWeather(detectedCity.city).then(setWeather).catch(() => {})
    }
  }, [detectedCity])

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

  // Theme based on detected city or default
  const themeCity = detectedCity || cities[0]
  const timeOfDay = getTimeOfDay(time, themeCity.lat, themeCity.lng, themeCity.timezone)
  const theme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)
  const TimeIcon = TimeIcons[timeOfDay]

  // Top cities for grid
  const topCities = topCitySlugs
    .map(slug => cities.find(c => c.slug === slug))
    .filter((c): c is City => c !== undefined)

  // Get local time for detected city
  const getLocalTime = (city: City) => {
    return time.toLocaleTimeString('en-US', {
      timeZone: city.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  const getLocalDate = (city: City) => {
    return time.toLocaleDateString('en-US', {
      timeZone: city.timezone,
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    })
  }

  // Compare handler
  const handleCompare = () => {
    if (fromCity && toCity) {
      router.push(`/time/${fromCity.slug}/${toCity.slug}`)
    }
  }

  // Favorite cities data
  const favoriteCities = favorites
    .map(slug => cities.find(c => c.slug === slug))
    .filter((c): c is City => c !== undefined)
    .slice(0, 5)

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b ${isLight ? 'bg-white/80 border-slate-200' : 'bg-slate-900/80 border-slate-800'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <img 
              src={isLight ? "/logo.svg" : "/logo-dark.svg"} 
              alt="whattime.city" 
              className="h-11 sm:h-14"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/map" className={`text-sm font-medium ${theme.textMuted} hover:opacity-80`}>Map</Link>
            <Link href="/tools" className={`text-sm font-medium ${theme.textMuted} hover:opacity-80`}>Tools</Link>
            <Link href="/country" className={`text-sm font-medium ${theme.textMuted} hover:opacity-80`}>Countries</Link>
            <Link href="/widget" className={`text-sm font-medium ${theme.textMuted} hover:opacity-80`}>Widget</Link>
          </nav>
          
          <div className="flex items-center gap-2">
            {/* Mobile nav */}
            <Link href="/map" className={`md:hidden p-2 rounded-full ${isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-800'}`}>
              <span className="text-lg">🗺️</span>
            </Link>
            <Link href="/tools" className={`md:hidden p-2 rounded-full ${isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-800'}`}>
              <span className="text-lg">🛠️</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-10">
          <h1 className={`text-3xl md:text-4xl font-bold mb-3 ${theme.text}`}>
            🌍 World Clock & Time Zone Tools
          </h1>
          <p className={`text-lg mb-8 ${theme.textMuted}`}>
            Compare cities to find the best meeting time
          </p>
          
          {/* Compare Tool */}
          <div className={`max-w-2xl mx-auto p-4 rounded-2xl backdrop-blur-xl border ${theme.card}`}>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* From City */}
              <div className="relative flex-1 w-full">
                <input
                  type="text"
                  value={fromQuery}
                  onChange={(e) => {
                    setFromQuery(e.target.value)
                    setFromCity(null)
                  }}
                  onFocus={() => fromQuery && !fromCity && setShowFromDropdown(true)}
                  placeholder="From city..."
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isLight 
                      ? 'bg-white border-slate-200 text-slate-800' 
                      : 'bg-slate-800 border-slate-700 text-white'
                  } outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {showFromDropdown && fromResults.length > 0 && (
                  <div className={`absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden shadow-xl z-50 ${
                    isLight ? 'bg-white' : 'bg-slate-800'
                  }`}>
                    {fromResults.map(city => (
                      <button
                        key={city.slug}
                        onClick={() => {
                          setFromCity(city)
                          setFromQuery(city.city)
                          setShowFromDropdown(false)
                        }}
                        className={`w-full px-4 py-2 text-left ${
                          isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'
                        }`}
                      >
                        <span className={theme.text}>{city.city}</span>
                        <span className={`text-sm ml-2 ${theme.textMuted}`}>{city.country}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <span className={`text-2xl ${theme.textMuted}`}>↔</span>
              
              {/* To City */}
              <div className="relative flex-1 w-full">
                <input
                  type="text"
                  value={toQuery}
                  onChange={(e) => {
                    setToQuery(e.target.value)
                    setToCity(null)
                  }}
                  onFocus={() => toQuery && !toCity && setShowToDropdown(true)}
                  placeholder="To city..."
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isLight 
                      ? 'bg-white border-slate-200 text-slate-800' 
                      : 'bg-slate-800 border-slate-700 text-white'
                  } outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {showToDropdown && toResults.length > 0 && (
                  <div className={`absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden shadow-xl z-50 ${
                    isLight ? 'bg-white' : 'bg-slate-800'
                  }`}>
                    {toResults.map(city => (
                      <button
                        key={city.slug}
                        onClick={() => {
                          setToCity(city)
                          setToQuery(city.city)
                          setShowToDropdown(false)
                        }}
                        className={`w-full px-4 py-2 text-left ${
                          isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'
                        }`}
                      >
                        <span className={theme.text}>{city.city}</span>
                        <span className={`text-sm ml-2 ${theme.textMuted}`}>{city.country}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button
                onClick={handleCompare}
                disabled={!fromCity || !toCity}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  fromCity && toCity
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : isLight 
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}
              >
                Compare
              </button>
            </div>
            <p className={`text-sm mt-3 ${theme.textMuted}`}>
              Find the best meeting time instantly
            </p>
          </div>
        </section>

        {/* Quick Tools */}
        <section className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link 
              href="/tools/meeting-planner"
              className={`p-6 rounded-2xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${theme.card}`}
            >
              <div className="text-3xl mb-3">📅</div>
              <h3 className={`font-semibold mb-1 ${theme.text}`}>Meeting Planner</h3>
              <p className={`text-sm mb-4 ${theme.textMuted}`}>Find overlap hours across multiple cities</p>
              <span className={`inline-flex items-center gap-1 text-sm font-medium ${theme.accentText}`}>
                Plan → 
              </span>
            </Link>
            
            <Link 
              href="/tools/converter"
              className={`p-6 rounded-2xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${theme.card}`}
            >
              <div className="text-3xl mb-3">🔄</div>
              <h3 className={`font-semibold mb-1 ${theme.text}`}>Convert Time</h3>
              <p className={`text-sm mb-4 ${theme.textMuted}`}>Convert any time between cities instantly</p>
              <span className={`inline-flex items-center gap-1 text-sm font-medium ${theme.accentText}`}>
                Convert →
              </span>
            </Link>
            
            <Link 
              href="/tools/flight-times"
              className={`p-6 rounded-2xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${theme.card}`}
            >
              <div className="text-3xl mb-3">✈️</div>
              <h3 className={`font-semibold mb-1 ${theme.text}`}>Travel Time</h3>
              <p className={`text-sm mb-4 ${theme.textMuted}`}>Calculate arrival time at your destination</p>
              <span className={`inline-flex items-center gap-1 text-sm font-medium ${theme.accentText}`}>
                Calculate →
              </span>
            </Link>
          </div>
        </section>

        {/* Your Location */}
        {detectedCity && (
          <section className={`mb-10 p-6 rounded-2xl backdrop-blur-xl border ${theme.card}`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h2 className={`text-xl font-semibold ${theme.text}`}>{detectedCity.city}</h2>
                  <p className={`text-sm ${theme.textMuted}`}>
                    {detectedCity.country} • {getLocalDate(detectedCity)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className={`text-3xl font-bold ${theme.text}`}>
                    {getLocalTime(detectedCity)}
                  </div>
                  <div className={`flex items-center justify-end gap-2 text-sm ${theme.textMuted}`}>
                    <TimeIcon className="w-4 h-4" />
                    <span className="capitalize">{timeOfDay}</span>
                    {weather && (
                      <span>• {Math.round(weather.current.temp_c)}°C</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-slate-200/20">
              <Link
                href={`/${detectedCity.slug}`}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                View City
              </Link>
              <button
                onClick={() => {
                  if (detectedCity) {
                    setFromCity(detectedCity)
                    setFromQuery(detectedCity.city)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  isLight
                    ? 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                    : 'bg-blue-900/50 hover:bg-blue-800/50 text-blue-300'
                }`}
              >
                Compare with...
              </button>
            </div>
          </section>
        )}

        {/* Favorites Section */}
        {favoriteCities.length > 0 && (
          <section className={`mb-10 p-6 rounded-2xl backdrop-blur-xl border ${theme.card}`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-lg font-semibold ${theme.text}`}>★ Your Favorites</h2>
              <Link href="/tools" className={`text-sm ${theme.accentText}`}>+ Add</Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {favoriteCities.map(city => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className={`px-4 py-2 rounded-xl text-sm ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200' : 'bg-slate-800 hover:bg-slate-700'
                  }`}
                >
                  <span className={theme.text}>{city.city}</span>
                  <span className={`ml-2 ${theme.textMuted}`}>
                    {getLocalTime(city)}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Popular Comparisons */}
        <section className={`mb-10 p-6 rounded-2xl backdrop-blur-xl border ${theme.card}`}>
          <h2 className={`text-lg font-semibold mb-4 ${theme.text}`}>Popular Time Comparisons</h2>
          <div className="flex flex-wrap gap-3">
            {popularComparisons.map(comp => (
              <Link
                key={`${comp.from}-${comp.to}`}
                href={`/time/${comp.from}/${comp.to}`}
                className={`px-4 py-2 rounded-xl text-sm transition-all ${
                  isLight 
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' 
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                {comp.label}
              </Link>
            ))}
            <Link
              href="/tools/converter"
              className={`px-4 py-2 rounded-xl text-sm ${theme.accentText}`}
            >
              All →
            </Link>
          </div>
        </section>

        {/* World Map Preview */}
        <section className={`mb-10 p-6 rounded-2xl backdrop-blur-xl border ${theme.card}`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className={`text-lg font-semibold mb-1 ${theme.text}`}>🗺️ World Map</h2>
              <p className={`text-sm ${theme.textMuted}`}>See where it's day or night around the world</p>
            </div>
            <Link
              href="/map"
              className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                isLight
                  ? 'bg-slate-800 hover:bg-slate-900 text-white'
                  : 'bg-white hover:bg-slate-100 text-slate-900'
              }`}
            >
              Explore Map →
            </Link>
          </div>
        </section>

        {/* World Cities Grid */}
        <section className={`mb-10 p-6 rounded-2xl backdrop-blur-xl border ${theme.card}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-xl font-semibold ${theme.text}`}>🌍 World Cities</h2>
            <Link href="/country" className={`text-sm ${theme.accentText}`}>
              All Countries →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topCities.map(city => (
              <CityCard
                key={city.slug}
                city={city}
                isSelected={false}
                onClick={() => router.push(`/${city.slug}`)}
                currentTheme={timeOfDay}
                themeData={theme}
                use12Hour={false}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 border-t ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/map" className={`text-sm ${theme.textMuted} hover:underline`}>World Map</Link>
            <Link href="/country" className={`text-sm ${theme.textMuted} hover:underline`}>Countries</Link>
            <Link href="/tools" className={`text-sm ${theme.textMuted} hover:underline`}>Tools</Link>
            <Link href="/widget" className={`text-sm ${theme.textMuted} hover:underline`}>Free Widget</Link>
          </nav>
          <p className={`text-center text-sm ${theme.textMuted}`}>
            © {new Date().getFullYear()} whattime.city
          </p>
        </div>
      </footer>
    </div>
  )
}
