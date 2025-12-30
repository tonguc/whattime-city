'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import { City, cities, searchCities } from '@/lib/cities'
import { getWeather, WeatherResponse } from '@/lib/weather'
import { TimeIcons } from '@/components/TimeIcons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CompareWidget from '@/components/CompareWidget'
import AnalogClock from '@/components/AnalogClock'


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
    themeMode,
    theme,
    isLight,
    clockMode,
  } = useCityContext()
  
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  
  // HomePage uses CityContext theme (respects user's theme preference)
  // themeMode: 'auto' = follows time of day, 'light'/'dark' = manual override
  const homeTheme = theme
  const homeIsLight = isLight
  
  // Compare tool state
  const [fromCity, setFromCity] = useState<City | null>(null)
  const [toCity, setToCity] = useState<City | null>(null)
  const [fromQuery, setFromQuery] = useState('')
  const [toQuery, setToQuery] = useState('')
  const [fromResults, setFromResults] = useState<City[]>([])
  const [toResults, setToResults] = useState<City[]>([])
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)
  
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

  const handleCompare = () => {
    if (fromCity && toCity) router.push(`/time/${fromCity.slug}/${toCity.slug}`)
  }

  // Derived data
  const favoriteCities = favorites.map(slug => cities.find(c => c.slug === slug)).filter((c): c is City => c !== undefined)
  
  // Top cities list
  const topCitySlugs = [
    'london', 'new-york', 'tokyo', 'paris', 'dubai', 'sydney',
    'singapore', 'los-angeles', 'berlin', 'hong-kong', 'mumbai', 'sao-paulo',
    'toronto', 'moscow', 'shanghai', 'seoul', 'bangkok', 'istanbul',
    'cairo', 'amsterdam'
  ]
  
  // Get cities by continent
  const getCitiesByContinent = (continent: string) => {
    return cities
      .filter(c => c.continent === continent && c.slug !== detectedCity?.slug)
      .sort((a, b) => (a.tier || 3) - (b.tier || 3))
      .slice(0, 18)
  }
  
  // Get world cities based on tab
  const worldCities = (() => {
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
      default:
        return topCitySlugs
          .map(slug => cities.find(c => c.slug === slug))
          .filter((c): c is City => c !== undefined && c.slug !== detectedCity?.slug)
          .slice(0, 18)
    }
  })()
  
  // Get relative offset in hours
  const getRelativeOffset = (targetCity: City): number => {
    if (!detectedCity) return 0
    const now = new Date()
    const userTime = new Date(now.toLocaleString('en-US', { timeZone: detectedCity.timezone }))
    const targetTime = new Date(now.toLocaleString('en-US', { timeZone: targetCity.timezone }))
    return Math.round((targetTime.getTime() - userTime.getTime()) / (1000 * 60 * 60))
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${homeTheme.bg}`} style={{ overflow: 'visible' }}>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-4" style={{ overflow: 'visible' }}>
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
              
              <div className="text-center w-full md:w-auto">
                {/* Digital or Analog Clock based on user preference */}
                {clockMode === 'analog' ? (
                  <div className="flex justify-center mb-2">
                    <AnalogClock 
                      time={time} 
                      theme={getCityTimeOfDay(detectedCity)}
                      themeData={homeTheme}
                    />
                  </div>
                ) : (
                  <div className={`text-5xl md:text-6xl font-bold tracking-tight ${homeTheme.text}`}>
                    {getLocalTime(detectedCity)}
                  </div>
                )}
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
              </div>
            </div>
          </section>
        )}

        {/* HERO - Compare Tool */}
        <section className={`rounded-3xl p-6 md:p-8 mb-4 backdrop-blur-xl border ${homeTheme.card} text-center`} style={{ overflow: 'visible' }}>
          <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${homeTheme.text} flex items-center justify-center gap-3`}>
            <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            World Clock — Compare Time Instantly
          </h1>
          
          <div className={`max-w-2xl mx-auto mt-6 p-4 rounded-2xl ${homeIsLight ? 'bg-slate-100' : 'bg-slate-800/50'}`} style={{ overflow: 'visible' }}>
            <CompareWidget 
              initialFromCity={fromCity}
              initialToCity={toCity}
              isLight={homeIsLight}
            />
          </div>
        </section>

        {/* QUICK TOOLS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <Link href="/meeting/" className={`p-5 rounded-2xl backdrop-blur-xl transition-all hover:scale-[1.02] group border ${homeTheme.card}`}>
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
          <Link href="/time-converter/" className={`p-5 rounded-2xl backdrop-blur-xl transition-all hover:scale-[1.02] group border ${homeTheme.card}`}>
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
          <Link href="/flight-time/" className={`p-5 rounded-2xl backdrop-blur-xl transition-all hover:scale-[1.02] group border ${homeTheme.card}`}>
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
            <Link href="/time-converter/" className={`text-sm font-medium ${homeTheme.accentText} hover:underline`}>
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

        {/* WORLD CITIES */}
        <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${homeTheme.card}`}>
          {/* Header with tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <svg className={`w-5 h-5 ${homeIsLight ? 'text-emerald-500' : 'text-emerald-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <h3 className={`text-lg font-semibold ${homeTheme.text}`}>World Cities</h3>
              {detectedCity && (
                <span className={`text-sm ${homeTheme.textMuted} hidden sm:inline`}>· relative to {detectedCity.city}</span>
              )}
            </div>
            
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
                      ? 'bg-emerald-500 text-white'
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {worldCities.map(city => {
              const cityTime = getLocalTime(city)
              const offset = getRelativeOffset(city)
              const offsetStr = offset === 0 ? 'Same time' : `${offset > 0 ? '+' : ''}${offset}h`
              const tod = getCityTimeOfDay(city)
              const Icon = TimeIcons[tod]
              
              return (
                <div key={city.slug} className={`flex items-center gap-4 p-4 rounded-xl ${homeIsLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
                  <Icon className={`w-5 h-5 flex-shrink-0 ${
                    tod === 'day' ? 'text-amber-500' : 
                    tod === 'night' ? 'text-indigo-400' : 
                    tod === 'dawn' ? 'text-orange-400' : 'text-purple-400'
                  }`} />
                  <Link href={`/${city.slug}`} className="flex-1 min-w-0 group">
                    <div className={`font-medium group-hover:underline ${homeTheme.text}`}>{city.city}</div>
                    <div className={`text-xs ${homeTheme.textMuted}`}>{city.country}</div>
                  </Link>
                  <div className="text-right">
                    <div className={`text-xl font-bold tabular-nums ${homeTheme.text}`}>{cityTime}</div>
                    <div className={`text-xs ${offset > 0 ? 'text-green-500' : offset < 0 ? 'text-orange-500' : homeTheme.textMuted}`}>
                      {offsetStr}
                    </div>
                  </div>
                  <Link 
                    href={detectedCity ? `/time/${detectedCity.slug}/${city.slug}` : `/${city.slug}`}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
                      homeIsLight ? 'bg-blue-100 hover:bg-blue-200 text-blue-700' : 'bg-blue-900/50 hover:bg-blue-800/50 text-blue-300'
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
            <Link href="/cities" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
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
