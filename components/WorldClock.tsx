'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { City, getTier1Cities, uses12HourFormat, cities, getCitiesByContinent, Continent, continentLabels } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { translations, detectLanguage, Language } from '@/lib/translations'
import { getWeather, WeatherData, getWeatherAnimation, WeatherAnimation } from '@/lib/weather'
import { saveCityContext } from '@/lib/city-context'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import DigitalClock from '@/components/DigitalClock'
import AnalogClock from '@/components/AnalogClock'
import SunInfoCard from '@/components/SunInfoCard'
import ThemeToggle from '@/components/ThemeToggle'
import CityCard from '@/components/CityCard'
import TimeIcons from '@/components/TimeIcons'
import Search from '@/components/Search'
import WeatherBackground from '@/components/WeatherBackground'
import WeatherBadge from '@/components/WeatherBadge'
import CityInfo from '@/components/CityInfo'
import AlarmModal, { ActiveAlarmPopup } from '@/components/AlarmModal'
import TimeConverter from '@/components/TimeConverter'
import MeetingPlanner from '@/components/MeetingPlanner'
import AboutSection from '@/components/AboutSection'

// Alarm type definition
interface Alarm {
  id: number
  city: City
  hour: string
  minute: string
  period: string | null
  displayTime: string
  label: string
  localTriggerTime: number
  active: boolean
}

interface WorldClockProps {
  initialCity?: City
}

// FavoriteCard component - matches existing CityCard style
function FavoriteCard({ 
  city, 
  isSelected, 
  onClick, 
  onRemove,
  currentTheme, 
  themeData, 
  use12Hour,
  isLight
}: {
  city: City
  isSelected: boolean
  onClick: () => void
  onRemove: () => void
  currentTheme: string
  themeData: typeof themes[keyof typeof themes]
  use12Hour: boolean
  isLight: boolean
}) {
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  // localTime for DISPLAY only (formatted string parsed as Date)
  const localTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  
  let timeStr: string
  if (use12Hour) {
    const hours = localTime.getHours()
    const minutes = localTime.getMinutes()
    const period = hours >= 12 ? 'PM' : 'AM'
    const displayHours = hours % 12 || 12
    timeStr = `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`
  } else {
    timeStr = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  }
  
  // Use real UTC time for theme calculation (time has correct UTC, localTime doesn't)
  const cityTimeOfDay = getTimeOfDay(time, city.lat, city.lng, city.timezone)
  const cityTheme = themes[cityTimeOfDay]
  const Icon = TimeIcons[cityTimeOfDay]
  
  return (
    <div
      className={`group p-4 rounded-2xl transition-all duration-300 backdrop-blur-xl border relative ${
        isSelected
          ? `${themeData.accentBgLight} ${themeData.accentBorder} shadow-lg`
          : isLight
            ? 'bg-white/40 border-white/50 hover:bg-white/60'
            : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-700/50'
      }`}
    >
      <button
        onClick={onRemove}
        className={`absolute top-2 right-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity ${
          isLight ? 'text-slate-400 hover:text-slate-600' : 'text-slate-500 hover:text-slate-300'
        }`}
        title="Remove from favorites"
      >
        ✕
      </button>
      <button onClick={onClick} className="w-full text-left">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className={`text-xs uppercase tracking-wide mb-0.5 truncate ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
              {city.country}
            </div>
            <div className={`text-lg font-semibold truncate ${isLight ? 'text-slate-800' : 'text-white'}`}>
              {city.city}
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className={`text-xl font-medium ${isLight ? 'text-slate-700' : 'text-slate-200'}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
              {timeStr}
            </div>
            <div className={`${cityTheme.accentClass}`} title={cityTheme.label}>
              <Icon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

function findNearestCity(lat: number, lng: number): City {
  let nearest = cities[0]
  let minDist = Infinity
  
  for (const city of cities) {
    const dist = Math.sqrt(
      Math.pow(city.lat - lat, 2) + Math.pow(city.lng - lng, 2)
    )
    if (dist < minDist) {
      minDist = dist
      nearest = city
    }
  }
  return nearest
}

export default function WorldClock({ initialCity }: WorldClockProps) {
  const router = useRouter()
  const { 
    setActiveCity, 
    clockMode, 
    setClockMode, 
    use12Hour, 
    setUse12Hour, 
    themeMode, 
    setThemeMode,
    favorites,
    toggleFavorite 
  } = useCityContext()
  const defaultCity = initialCity || getTier1Cities()[0]
  const [selectedCity, setSelectedCity] = useState<City>(defaultCity)
  const [time, setTime] = useState(new Date())
  const [lang, setLang] = useState<Language>('en')
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [weatherAnimation, setWeatherAnimation] = useState<WeatherAnimation>('clear')
  const [selectedContinent, setSelectedContinent] = useState<Continent>('all')
  const [continentFilter, setContinentFilter] = useState('')
  
  // Alarm states
  const [showAlarmModal, setShowAlarmModal] = useState(false)
  const [alarms, setAlarms] = useState<Alarm[]>([])
  const [activeAlarm, setActiveAlarm] = useState<Alarm | null>(null)
  
  // Detected user location
  const [detectedCity, setDetectedCity] = useState<City | null>(null)
  
  // Sync activeCity with global context when component mounts or city changes
  useEffect(() => {
    setActiveCity(selectedCity)
  }, [selectedCity, setActiveCity])
  
  const isFavorite = (slug: string) => favorites.includes(slug)
  const favoriteCities = cities.filter(c => favorites.includes(c.slug))
  
  // Save city context whenever selectedCity changes (for tools navigation)
  useEffect(() => {
    saveCityContext({
      slug: selectedCity.slug,
      city: selectedCity.city,
      lat: selectedCity.lat,
      lng: selectedCity.lng,
      timezone: selectedCity.timezone
    })
  }, [selectedCity])
  
  useEffect(() => {
    setLang(detectLanguage())
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  // Detect user location (always run to set detectedCity)
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const nearest = findNearestCity(position.coords.latitude, position.coords.longitude)
          setDetectedCity(nearest)
          // Only set selectedCity if no initialCity provided
          if (!initialCity) {
            setSelectedCity(nearest)
          }
        },
        (error) => {
          // User denied or error - try timezone fallback for detectedCity
          console.log('Geolocation not available:', error.message)
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
          const cityByTz = cities.find(c => c.timezone === tz) || cities[0]
          setDetectedCity(cityByTz)
          if (!initialCity) {
            setSelectedCity(cityByTz)
          }
        },
        { timeout: 5000, maximumAge: 300000 } // 5s timeout, cache for 5min
      )
    } else {
      // No geolocation - use timezone
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      const cityByTz = cities.find(c => c.timezone === tz) || cities[0]
      setDetectedCity(cityByTz)
      if (!initialCity) {
        setSelectedCity(cityByTz)
      }
    }
  }, [initialCity])
  
  // Check alarms every second
  useEffect(() => {
    const checkAlarms = () => {
      const now = Date.now()
      alarms.forEach(alarm => {
        if (alarm.active && alarm.localTriggerTime <= now && alarm.localTriggerTime > now - 60000) {
          setActiveAlarm(alarm)
          
          // Browser notification
          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(`⏰ ${alarm.label}`, {
              body: `It's ${alarm.displayTime} in ${alarm.city.city}!`
            })
          }
          
          // Play sound
          try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleogAAAGqzN3YpHVRQmm01NvOq3dPOVah0+Dpv4lfPWee0OfTq3JGP3Cn0+bcoXJDPXGl0OXZn29APXCjz+TYn25APHCjz+TYn25APHCjzuTYn25APHCjzuTYn25APHCjzuTYn25APHCjzuTYn25APHCjzuTYn25APHCjzuTYn25A')
            audio.play()
          } catch (e) {}
          
          // Mark as triggered
          setAlarms(prev => prev.map(a => 
            a.id === alarm.id ? { ...a, active: false } : a
          ))
        }
      })
    }
    
    const interval = setInterval(checkAlarms, 1000)
    return () => clearInterval(interval)
  }, [alarms])
  
  // Update 12h format when city changes
  useEffect(() => {
    setUse12Hour(uses12HourFormat(selectedCity.countryCode))
  }, [selectedCity])
  
  // Fetch weather when city changes
  useEffect(() => {
    async function fetchWeather() {
      const data = await getWeather(selectedCity.city)
      if (data) {
        setWeather(data.current)
        setWeatherAnimation(getWeatherAnimation(data.current.condition.code, data.current.is_day))
      }
    }
    fetchWeather()
  }, [selectedCity])
  
  const t = translations[lang]
  
  // localTime for DISPLAY only (date formatting, time display)
  const localTime = new Date(time.toLocaleString('en-US', { timeZone: selectedCity.timezone }))
  
  // Use real UTC time for theme calculation (time has correct UTC values)
  const autoTheme = getTimeOfDay(time, selectedCity.lat, selectedCity.lng, selectedCity.timezone)
  const currentTheme = themeMode === 'auto' ? autoTheme : themeMode
  const theme = themes[currentTheme]
  const isLight = isLightTheme(currentTheme)
  
  const dateStr = localTime.toLocaleDateString(lang, { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
  
  const offset = new Date().toLocaleString('en-US', { 
    timeZone: selectedCity.timezone, 
    timeZoneName: 'short' 
  }).split(' ').pop()
  
  const featuredCities = getTier1Cities()
  
  // Find city by user's timezone
  const findCityByTimezone = (): City => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    // Try to find exact timezone match
    const exactMatch = cities.find(c => c.timezone === userTimezone)
    if (exactMatch) return exactMatch
    // Fallback to first Tier 1 city
    return getTier1Cities()[0]
  }
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-all duration-1000 relative`}>
      {/* Weather Animation Background */}
      <WeatherBackground animation={weatherAnimation} isDay={weather?.is_day === 1} />
      
      {/* Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-1/4 -left-1/4 w-[800px] h-[800px] ${theme.glow} rounded-full blur-3xl opacity-60`}/>
        <div className={`absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] ${theme.glow} rounded-full blur-3xl opacity-40`}/>
      </div>
      
      {/* Shared Header */}
      <Header />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-4 sm:py-4">
        <div className={`rounded-3xl p-4 md:p-5 mb-4 backdrop-blur-xl border ${theme.card} relative overflow-hidden`}>
          <div className="flex flex-col items-center justify-center relative z-10 w-full">
            <div className="w-full flex justify-center">
              {clockMode === 'analog' ? (
                <AnalogClock time={localTime} theme={currentTheme} themeData={theme} />
              ) : (
                <DigitalClock time={localTime} theme={currentTheme} themeData={theme} use12Hour={use12Hour} />
              )}
            </div>
            
            <div className="mt-4 md:mt-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <h1 className={`text-3xl md:text-5xl font-medium ${theme.text}`}>
                  {selectedCity.city}
                </h1>
                <button
                  onClick={() => toggleFavorite(selectedCity.slug)}
                  className={`text-xl md:text-3xl transition-all hover:scale-110 ${
                    isFavorite(selectedCity.slug) 
                      ? 'text-amber-400' 
                      : isLight ? 'text-slate-300 hover:text-amber-400' : 'text-slate-600 hover:text-amber-400'
                  }`}
                  title={isFavorite(selectedCity.slug) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  {isFavorite(selectedCity.slug) ? '★' : '☆'}
                </button>
              </div>
              <p className={`text-base md:text-lg mt-1 ${theme.textMuted}`}>{selectedCity.country}</p>
              
              {detectedCity && detectedCity.slug !== selectedCity.slug && (
                <p className={`text-xs mt-1 ${theme.textMuted} opacity-50`}>
                  Time difference from your location: {(() => {
                    const selectedOffset = new Date().toLocaleString('en-US', { timeZone: selectedCity.timezone, timeZoneName: 'shortOffset' }).split(' ').pop()
                    const detectedOffset = new Date().toLocaleString('en-US', { timeZone: detectedCity.timezone, timeZoneName: 'shortOffset' }).split(' ').pop()
                    const parseOffset = (str: string) => {
                      const match = str?.match(/GMT([+-]?\d+)?/)
                      return match ? (parseInt(match[1]) || 0) : 0
                    }
                    const diff = parseOffset(selectedOffset || '') - parseOffset(detectedOffset || '')
                    if (diff === 0) return 'same time'
                    return `${diff > 0 ? '+' : ''}${diff}h`
                  })()}
                </p>
              )}
              
              {detectedCity && (
                <p className={`text-xs mt-1 ${theme.textMuted} opacity-70 flex items-center justify-center gap-1`}>
                  <span>📍</span>
                  <span>Your location: {detectedCity.city}</span>
                </p>
              )}
              
              <p className={`mt-1 text-sm md:text-base ${theme.textMuted}`}>{dateStr}</p>
              
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  isLight ? 'bg-slate-200/80 text-slate-700' : 'bg-slate-700/80 text-slate-300'
                }`}>
                  {offset}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5 ${theme.accentBgLight} ${theme.accentClass}`}>
                  {(() => {
                    const Icon = TimeIcons[autoTheme]
                    return Icon ? <Icon className="w-4 h-4" /> : null
                  })()}
                  {t[autoTheme]}
                </span>
                {weather && (
                  <WeatherBadge weather={weather} isLight={isLight} />
                )}
              </div>
            </div>
            
            <div className="mt-4 w-full max-w-xs">
              <SunInfoCard city={selectedCity} localTime={localTime} theme={currentTheme} t={t} />
            </div>
            
            {/* Compare Link - Text style */}
            <a 
              href={`/time/${selectedCity.slug}/london`}
              className={`mt-4 text-sm ${theme.accentText} hover:underline flex items-center gap-1`}
            >
              Compare {selectedCity.city} with another city →
            </a>
          </div>
        </div>
        
        {/* === 2. TWO_CITY_TIME_CONVERTER === */}
        <TimeConverter
          currentTheme={currentTheme}
          themeData={theme}
          use12Hour={use12Hour}
          isLight={isLight}
        />
        
        {/* === 3. MEETING_PLANNER === */}
        <MeetingPlanner
          currentTheme={currentTheme}
          themeData={theme}
          use12Hour={use12Hour}
          isLight={isLight}
        />
        
        {/* === 4. ABOUT_CITY === */}
        {selectedCity.info && (
          <div className={`rounded-3xl backdrop-blur-xl border ${theme.card} mb-4`}>
            <CityInfo city={selectedCity} theme={theme} isLight={isLight} />
          </div>
        )}
        
        {/* Favorite Cities Section - Only show if user has favorites */}
        {favoriteCities.length > 0 && (
          <div className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card} mb-4`}>
            <h3 className={`text-xl font-semibold ${theme.text} mb-4`}>
              {t.favoriteCities || 'Your Favorite Cities'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {favoriteCities.map(city => (
                <FavoriteCard
                  key={city.slug}
                  city={city}
                  isSelected={city.slug === selectedCity.slug}
                  onClick={() => {
                    setSelectedCity(city)
                    router.push(`/${city.slug}`)
                  }}
                  onRemove={() => toggleFavorite(city.slug)}
                  currentTheme={currentTheme}
                  themeData={theme}
                  use12Hour={use12Hour}
                  isLight={isLight}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* === 5. WORLD_CITIES === */}
        <div className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h3 className={`text-xl font-semibold ${theme.text} self-center`}>
              {t.worldCities}
            </h3>
            
            {/* Continent Tabs */}
            <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-full ${isLight ? 'bg-slate-100' : 'bg-slate-800/60'}`}>
              {(['all', 'americas', 'europe', 'asia', 'africa', 'oceania'] as Continent[]).map((continent) => (
                <button
                  key={continent}
                  onClick={() => {
                    setSelectedContinent(continent)
                    setContinentFilter('')
                  }}
                  className={`px-4 py-1.5 rounded-full text-base font-medium transition-all ${
                    selectedContinent === continent
                      ? `${theme.accentBg} text-white shadow`
                      : isLight ? 'text-slate-600 hover:bg-white' : 'text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {continent === 'all' ? t.topCities : t[continent]}
                </button>
              ))}
            </div>
          </div>
          
          {/* Continent Filter - only show when a specific continent is selected */}
          {selectedContinent !== 'all' && (
            <div className="flex items-center gap-3 mb-4">
              <div className={`flex items-center gap-2 flex-1 max-w-xs px-3 py-2 rounded-xl ${isLight ? 'bg-white/60' : 'bg-slate-800/60'}`}>
                <svg className={`w-4 h-4 ${theme.textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={continentFilter}
                  onChange={(e) => setContinentFilter(e.target.value)}
                  placeholder={`Filter ${t[selectedContinent]}...`}
                  className={`bg-transparent outline-none text-sm w-full ${theme.text} placeholder:${theme.textMuted}`}
                />
                {continentFilter && (
                  <button onClick={() => setContinentFilter('')} className={`${theme.textMuted} hover:${theme.text}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <span className={`text-sm ${theme.textMuted}`}>
                {getCitiesByContinent(selectedContinent).filter(city => 
                  city.city.toLowerCase().includes(continentFilter.toLowerCase()) ||
                  city.country.toLowerCase().includes(continentFilter.toLowerCase())
                ).length} cities
              </span>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {getCitiesByContinent(selectedContinent)
              .filter(city => 
                selectedContinent === 'all' || !continentFilter ||
                city.city.toLowerCase().includes(continentFilter.toLowerCase()) ||
                city.country.toLowerCase().includes(continentFilter.toLowerCase())
              )
              .map((city) => (
              <CityCard
                key={city.slug}
                city={city}
                isSelected={selectedCity.slug === city.slug}
                onClick={() => {
                  setSelectedCity(city)
                  router.push(`/${city.slug}`, { scroll: false })
                }}
                currentTheme={currentTheme}
                themeData={theme}
                use12Hour={use12Hour}
              />
            ))}
          </div>
        </div>
        
        {/* === 6. QUICK_TOOLS / FACTS / COMPARISONS === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Quick Facts */}
          <div className={`rounded-2xl p-5 backdrop-blur-xl border ${theme.card}`}>
            <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${theme.text}`}>
              <svg className={`w-5 h-5 ${isLight ? 'text-blue-500' : 'text-blue-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              Quick Facts
            </h3>
            <div className="space-y-3">
              <div className={`flex items-center justify-between py-2 border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                <span className={theme.textMuted}>Timezone</span>
                <span className={`font-medium ${theme.text}`}>{selectedCity.timezone.split('/').pop()?.replace('_', ' ')}</span>
              </div>
              <div className={`flex items-center justify-between py-2 border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                <span className={theme.textMuted}>UTC Offset</span>
                <span className={`font-medium ${theme.text}`}>{offset}</span>
              </div>
              {selectedCity.info && (
                <>
                  <div className={`flex items-center justify-between py-2 border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                    <span className={theme.textMuted}>Population</span>
                    <span className={`font-medium ${theme.text}`}>{selectedCity.info.population}</span>
                  </div>
                  <div className={`flex items-center justify-between py-2`}>
                    <span className={theme.textMuted}>Currency</span>
                    <span className={`font-medium ${theme.text}`}>{selectedCity.info.currency}</span>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Planning a Trip */}
          <div className={`rounded-2xl p-5 backdrop-blur-xl border ${theme.card}`}>
            <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${theme.text}`}>
              <svg className={`w-5 h-5 ${isLight ? 'text-green-500' : 'text-green-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              Planning a Trip
            </h3>
            <div className="space-y-3">
              <a href="/tools/flight-times" className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isLight ? 'bg-slate-50 hover:bg-slate-100' : 'bg-slate-800/50 hover:bg-slate-700/50'}`}>
                <svg className={`w-5 h-5 ${theme.textMuted}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
                <span className={theme.text}>Flight Time Calculator</span>
              </a>
              <a href="/tools/jet-lag" className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isLight ? 'bg-slate-50 hover:bg-slate-100' : 'bg-slate-800/50 hover:bg-slate-700/50'}`}>
                <svg className={`w-5 h-5 ${theme.textMuted}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6"/>
                  <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
                </svg>
                <span className={theme.text}>Jet Lag Advisor</span>
              </a>
              <a href={`/tools/meeting-planner?city=${selectedCity.slug}`} className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isLight ? 'bg-slate-50 hover:bg-slate-100' : 'bg-slate-800/50 hover:bg-slate-700/50'}`}>
                <svg className={`w-5 h-5 ${theme.textMuted}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                <span className={theme.text}>Schedule Meeting</span>
              </a>
            </div>
          </div>
          
          {/* Time Comparisons */}
          <div className={`rounded-2xl p-5 backdrop-blur-xl border ${theme.card}`}>
            <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${theme.text}`}>
              <svg className={`w-5 h-5 ${isLight ? 'text-purple-500' : 'text-purple-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="8" cy="12" r="6"/>
                <circle cx="16" cy="12" r="6"/>
              </svg>
              Compare Times
            </h3>
            <div className="space-y-2">
              {['london', 'new-york', 'tokyo', 'sydney'].filter(s => s !== selectedCity.slug).slice(0, 3).map(slug => {
                const city = cities.find(c => c.slug === slug)
                if (!city) return null
                return (
                  <a key={slug} href={`/time/${selectedCity.slug}/${slug}`}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all ${isLight ? 'bg-slate-50 hover:bg-slate-100' : 'bg-slate-800/50 hover:bg-slate-700/50'}`}>
                    <span className={theme.text}>{selectedCity.city} vs {city.city}</span>
                    <svg className={`w-4 h-4 ${theme.textMuted}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        
        {/* === 7. LONG_CONTENT_AND_FAQ === */}
        {/* SEO Content Section */}
        {selectedCity.info?.seoContent && (
          <div className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card} mt-4`}>
            <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>
              Time in {selectedCity.city}, {selectedCity.country}
            </h2>
            
            <div className={`space-y-4 text-sm leading-relaxed ${theme.textMuted}`}>
              <p>{selectedCity.info.seoContent.intro}</p>
              
              <div>
                <h3 className={`font-semibold mb-2 ${theme.text}`}>Timezone Facts</h3>
                <p>{selectedCity.info.seoContent.timezoneFacts}</p>
              </div>
              
              <div>
                <h3 className={`font-semibold mb-2 ${theme.text}`}>Best Time to Visit</h3>
                <p>{selectedCity.info.seoContent.bestTimeToVisit}</p>
              </div>
              
              <div>
                <h3 className={`font-semibold mb-2 ${theme.text}`}>Business Hours</h3>
                <p>{selectedCity.info.seoContent.businessHours}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* About Section */}
        <div className="mt-4">
          <AboutSection
            theme={theme}
            isLight={isLight}
            t={t}
          />
        </div>
        
        <footer className={`mt-10 pt-8 border-t text-center ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
          {/* Navigation Links */}
          <nav className={`flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-sm`}>
            <a href="/map" className={`hover:underline ${theme.textMuted}`}>World Map</a>
            <a href="/country" className={`hover:underline ${theme.textMuted}`}>Countries</a>
            <a href="/tools" className={`hover:underline ${theme.textMuted}`}>Tools</a>
            <a href="/widget" className={`hover:underline ${theme.textMuted}`}>Free Widget</a>
          </nav>
          
          <p className={`text-sm ${theme.textMuted}`}>
            © {new Date().getFullYear()} whattime.city
          </p>
        </footer>
      </div>
      
      {/* Floating Alert Button */}
      <button 
        onClick={() => setShowAlarmModal(true)} 
        title="Set time alert for any city"
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 ${theme.accentBg} text-white`}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        {alarms.filter(a => a.active).length > 0 && (
          <span className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full bg-red-500 text-white border-2 border-white">
            {alarms.filter(a => a.active).length}
          </span>
        )}
      </button>
      
      {/* Alarm Modal */}
      <AlarmModal
        isOpen={showAlarmModal}
        onClose={() => setShowAlarmModal(false)}
        isLight={isLight}
        theme={theme}
        alarms={alarms}
        setAlarms={setAlarms}
      />
      
      {/* Active Alarm Popup */}
      <ActiveAlarmPopup
        alarm={activeAlarm}
        onDismiss={() => setActiveAlarm(null)}
        isLight={isLight}
        theme={theme}
      />
    </div>
  )
}
