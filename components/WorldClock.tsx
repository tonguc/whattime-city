'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { City, getTier1Cities, uses12HourFormat, cities, getCitiesByContinent, Continent, continentLabels } from '@/lib/cities'
import { getTimeOfDay, getSunTimes } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { translations, detectLanguage, Language } from '@/lib/translations'
import { getWeather, WeatherData, getWeatherAnimation, WeatherAnimation } from '@/lib/weather'
import { saveCityContext } from '@/lib/city-context'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DigitalClock from '@/components/DigitalClock'
import AnalogClock from '@/components/AnalogClock'
import SunInfoCard from '@/components/SunInfoCard'
import ThemeToggle from '@/components/ThemeToggle'
import CityCard from '@/components/CityCard'
import TimeIcons from '@/components/TimeIcons'
import Search from '@/components/Search'
import WeatherBackground from '@/components/WeatherBackground'
import WeatherBadge from '@/components/WeatherBadge'
import AlarmModal, { ActiveAlarmPopup } from '@/components/AlarmModal'
import TimeConverter from '@/components/TimeConverter'
import MeetingPlanner from '@/components/MeetingPlanner'

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
  const [guideTab, setGuideTab] = useState<'overview' | 'attractions' | 'transport' | 'tips' | 'emergency' | 'holidays'>('overview')
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
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
        <div className={`absolute -top-1/4 -left-1/4 w-[800px] h-[800px] ${theme.glow} rounded-full blur-3xl opacity-70`}/>
        <div className={`absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] ${theme.glow} rounded-full blur-3xl opacity-50`}/>
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
              <div className="flex items-center justify-center gap-3">
                <h1 className={`text-3xl md:text-4xl font-bold ${theme.text}`}>
                  {selectedCity.city}
                </h1>
                <button
                  onClick={() => toggleFavorite(selectedCity.slug)}
                  className={`text-2xl transition-all hover:scale-110 ${
                    isFavorite(selectedCity.slug) 
                      ? 'text-amber-400' 
                      : isLight ? 'text-slate-300 hover:text-amber-400' : 'text-slate-600 hover:text-amber-400'
                  }`}
                  title={isFavorite(selectedCity.slug) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  {isFavorite(selectedCity.slug) ? '★' : '☆'}
                </button>
              </div>
              <p className={`text-sm md:text-base mt-1 ${theme.textMuted}`}>
                {selectedCity.country} • Local Time
              </p>
              
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
        
        {/* === 3. QUICK INFO CARDS === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {/* Currency */}
          <div className={`rounded-2xl p-4 backdrop-blur-xl border ${theme.card} flex items-center gap-3`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? 'bg-emerald-100' : 'bg-emerald-900/30'}`}>
              <svg className={`w-6 h-6 ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.5 8.5h5M9.5 15.5h5M12 8.5v7"/>
              </svg>
            </div>
            <div>
              <div className={`text-xs uppercase tracking-wide ${theme.textMuted}`}>Currency</div>
              <div className={`font-bold ${theme.text}`}>{selectedCity.info?.currencySymbol || '$'} {selectedCity.info?.currency || 'USD'}</div>
            </div>
          </div>
          
          {/* Phone Code */}
          <div className={`rounded-2xl p-4 backdrop-blur-xl border ${theme.card} flex items-center gap-3`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? 'bg-blue-100' : 'bg-blue-900/30'}`}>
              <svg className={`w-6 h-6 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <div className={`text-xs uppercase tracking-wide ${theme.textMuted}`}>Phone Code</div>
              <div className={`font-bold ${theme.text}`}>{selectedCity.info?.phoneCode || '+1'}</div>
            </div>
          </div>
          
          {/* Sunrise */}
          <div className={`rounded-2xl p-4 backdrop-blur-xl border ${theme.card} flex items-center gap-3`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? 'bg-amber-100' : 'bg-amber-900/30'}`}>
              <svg className={`w-6 h-6 ${isLight ? 'text-amber-600' : 'text-amber-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 18a5 5 0 00-10 0"/>
                <line x1="12" y1="2" x2="12" y2="9"/>
                <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/>
                <line x1="1" y1="18" x2="3" y2="18"/>
                <line x1="21" y1="18" x2="23" y2="18"/>
                <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/>
                <line x1="23" y1="22" x2="1" y2="22"/>
                <polyline points="8,6 12,2 16,6"/>
              </svg>
            </div>
            <div>
              <div className={`text-xs uppercase tracking-wide ${theme.textMuted}`}>Sunrise</div>
              <div className={`font-bold ${theme.text}`}>{(() => {
                const sunTimes = getSunTimes(localTime, selectedCity.lat, selectedCity.lng)
                const h = Math.floor(sunTimes.sunrise)
                const m = Math.round((sunTimes.sunrise - h) * 60)
                return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
              })()}</div>
            </div>
          </div>
          
          {/* Sunset */}
          <div className={`rounded-2xl p-4 backdrop-blur-xl border ${theme.card} flex items-center gap-3`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? 'bg-orange-100' : 'bg-orange-900/30'}`}>
              <svg className={`w-6 h-6 ${isLight ? 'text-orange-600' : 'text-orange-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 18a5 5 0 00-10 0"/>
                <line x1="12" y1="9" x2="12" y2="2"/>
                <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/>
                <line x1="1" y1="18" x2="3" y2="18"/>
                <line x1="21" y1="18" x2="23" y2="18"/>
                <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/>
                <line x1="23" y1="22" x2="1" y2="22"/>
                <polyline points="16,5 12,9 8,5"/>
              </svg>
            </div>
            <div>
              <div className={`text-xs uppercase tracking-wide ${theme.textMuted}`}>Sunset</div>
              <div className={`font-bold ${theme.text}`}>{(() => {
                const sunTimes = getSunTimes(localTime, selectedCity.lat, selectedCity.lng)
                const h = Math.floor(sunTimes.sunset)
                const m = Math.round((sunTimes.sunset - h) * 60)
                return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
              })()}</div>
            </div>
          </div>
        </div>
        
        {/* === 4. TIME INTELLIGENCE (SEO 1) === */}
        {selectedCity.info?.seoContent && (
          <div className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card} mt-4`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isLight ? 'bg-indigo-100' : 'bg-indigo-900/30'}`}>
                <svg className={`w-5 h-5 ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                  <path d="M2 12h2M20 12h2M12 2v2M12 20v2"/>
                </svg>
              </div>
              <h2 className={`text-xl font-bold ${theme.text}`}>
                Time in {selectedCity.city}
              </h2>
            </div>
            
            <div className="space-y-5">
              {/* Intro */}
              <p className={`leading-relaxed ${theme.textMuted}`}>{selectedCity.info.seoContent.intro}</p>
              
              {/* DST Info */}
              {selectedCity.info.seoContent.daylightSaving && (
                <div className={`p-4 rounded-xl ${isLight ? 'bg-amber-50 border border-amber-100' : 'bg-amber-900/20 border border-amber-800/30'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className={`w-5 h-5 ${isLight ? 'text-amber-600' : 'text-amber-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="5"/>
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    </svg>
                    <h3 className={`font-semibold ${theme.text}`}>Daylight Saving Time</h3>
                  </div>
                  <p className={`leading-relaxed ${theme.textMuted}`}>{selectedCity.info.seoContent.daylightSaving}</p>
                </div>
              )}
              
              {/* Time Difference */}
              {selectedCity.info.seoContent.timeDifference && (
                <div>
                  <h3 className={`font-semibold mb-2 flex items-center gap-2 ${theme.text}`}>
                    <svg className={`w-4 h-4 ${theme.textMuted}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="6" cy="12" r="4"/>
                      <circle cx="18" cy="12" r="4"/>
                      <path d="M10 12h4"/>
                    </svg>
                    Time Difference
                  </h3>
                  <p className={`leading-relaxed ${theme.textMuted}`}>{selectedCity.info.seoContent.timeDifference}</p>
                </div>
              )}
              
              {/* Business Hours */}
              <div className={`p-4 rounded-xl ${isLight ? 'bg-green-50 border border-green-100' : 'bg-green-900/20 border border-green-800/30'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <svg className={`w-5 h-5 ${isLight ? 'text-green-600' : 'text-green-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <path d="M8 21h8M12 17v4"/>
                  </svg>
                  <h3 className={`font-semibold ${theme.text}`}>Business Hours</h3>
                </div>
                <p className={`leading-relaxed ${theme.textMuted}`}>{selectedCity.info.seoContent.businessHours}</p>
              </div>
              
              {/* Timezone Facts */}
              <div>
                <h3 className={`font-semibold mb-2 ${theme.text}`}>Timezone Facts</h3>
                <p className={`leading-relaxed ${theme.textMuted}`}>{selectedCity.info.seoContent.timezoneFacts}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Favorite Cities Section */}
        {favoriteCities.length > 0 && (
          <div className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card} mt-4`}>
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
        
        {/* === 5. WORLD CITIES GRID === */}
        <div className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card} mt-4`}>
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
          
          {/* Continent Filter */}
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
        
        {/* === 6. TRAVEL BRIDGE (Banner) === */}
        {selectedCity.info && (
          <div className={`rounded-3xl p-6 mt-4 ${isLight ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-gradient-to-r from-blue-600 to-indigo-700'}`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Visiting {selectedCity.city}?</h3>
                  <p className="text-white/80 text-sm">{selectedCity.info.seoContent?.bestTimeToVisit?.split('.')[0] || 'Plan your perfect trip'}.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a href="/tools/flight-times" className="px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-medium transition-all flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                  </svg>
                  Flight Time
                </a>
                <a href="/tools/jet-lag" className="px-5 py-2.5 rounded-xl bg-white text-blue-600 font-medium hover:bg-blue-50 transition-all flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6"/>
                    <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
                  </svg>
                  Jet Lag Tips
                </a>
              </div>
            </div>
          </div>
        )}
        
        {/* === 7. ULTIMATE CITY GUIDE (Tabbed) === */}
        {selectedCity.info && (
          <div className={`rounded-3xl backdrop-blur-xl border ${theme.card} mt-4 overflow-hidden`}>
            {/* Header */}
            <div className="p-6 pb-0">
              <h2 className={`text-2xl font-bold mb-2 ${theme.text}`}>
                Ultimate Guide to {selectedCity.city}
              </h2>
              <div className="flex items-center gap-4 text-sm mb-4">
                <span className={theme.textMuted}>
                  <span className="font-medium">{selectedCity.info.population}</span> population
                </span>
                <span className={theme.textMuted}>•</span>
                <span className={theme.textMuted}>{selectedCity.info.language}</span>
                <span className={theme.textMuted}>•</span>
                <span className={theme.textMuted}>{offset}</span>
              </div>
            </div>
            
            {/* Horizontal Tabs */}
            <div className={`px-6 border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
              <div className="flex overflow-x-auto gap-1 -mb-px scrollbar-hide">
                <button
                  onClick={() => setGuideTab('overview')}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                    guideTab === 'overview'
                      ? `${theme.accentText} border-current`
                      : `${theme.textMuted} border-transparent hover:border-slate-300`
                  }`}
                >
                  <span>🌍</span> Overview
                </button>
                
                {selectedCity.info.attractions && (
                  <button
                    onClick={() => setGuideTab('attractions')}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                      guideTab === 'attractions'
                        ? `${theme.accentText} border-current`
                        : `${theme.textMuted} border-transparent hover:border-slate-300`
                    }`}
                  >
                    <span>🏛️</span> Attractions
                  </button>
                )}
                
                {selectedCity.info.seoContent?.transportation && (
                  <button
                    onClick={() => setGuideTab('transport')}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                      guideTab === 'transport'
                        ? `${theme.accentText} border-current`
                        : `${theme.textMuted} border-transparent hover:border-slate-300`
                    }`}
                  >
                    <span>🚇</span> Transport
                  </button>
                )}
                
                {selectedCity.info.seoContent?.localTips && (
                  <button
                    onClick={() => setGuideTab('tips')}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                      guideTab === 'tips'
                        ? `${theme.accentText} border-current`
                        : `${theme.textMuted} border-transparent hover:border-slate-300`
                    }`}
                  >
                    <span>💡</span> Tips
                  </button>
                )}
                
                {selectedCity.info.seoContent?.emergencyNumbers && (
                  <button
                    onClick={() => setGuideTab('emergency')}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                      guideTab === 'emergency'
                        ? `${theme.accentText} border-current`
                        : `${theme.textMuted} border-transparent hover:border-slate-300`
                    }`}
                  >
                    <span>🚨</span> Emergency
                  </button>
                )}
                
                {selectedCity.info.seoContent?.publicHolidays && (
                  <button
                    onClick={() => setGuideTab('holidays')}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                      guideTab === 'holidays'
                        ? `${theme.accentText} border-current`
                        : `${theme.textMuted} border-transparent hover:border-slate-300`
                    }`}
                  >
                    <span>📅</span> Holidays
                  </button>
                )}
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {/* Overview Tab */}
              {guideTab === 'overview' && (
                <div className="space-y-4">
                  <p className={`leading-relaxed ${theme.textMuted}`}>{selectedCity.info.demographics}</p>
                  {selectedCity.info.climate && (
                    <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span>🌡️</span>
                        <span className={`font-medium ${theme.text}`}>Climate</span>
                      </div>
                      <p className={`text-sm ${theme.textMuted}`}>{selectedCity.info.climate}</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Attractions Tab */}
              {guideTab === 'attractions' && selectedCity.info.attractions && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCity.info.attractions.map((attraction, i) => (
                    <div key={i} className={`p-4 rounded-xl ${isLight ? 'bg-slate-50 hover:bg-slate-100' : 'bg-slate-800/50 hover:bg-slate-700/50'} transition-all`}>
                      <div className={`font-medium ${theme.text}`}>{attraction}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Transport Tab */}
              {guideTab === 'transport' && selectedCity.info.seoContent?.transportation && (
                <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
                  <p className={`leading-relaxed ${theme.textMuted}`}>{selectedCity.info.seoContent.transportation}</p>
                </div>
              )}
              
              {/* Tips Tab */}
              {guideTab === 'tips' && selectedCity.info.seoContent?.localTips && (
                <div className={`p-4 rounded-xl ${isLight ? 'bg-blue-50 border border-blue-100' : 'bg-blue-900/20 border border-blue-800/30'}`}>
                  <p className={`leading-relaxed ${theme.textMuted}`}>{selectedCity.info.seoContent.localTips}</p>
                </div>
              )}
              
              {/* Emergency Tab */}
              {guideTab === 'emergency' && selectedCity.info.seoContent?.emergencyNumbers && (
                <div className={`p-4 rounded-xl ${isLight ? 'bg-red-50 border border-red-100' : 'bg-red-900/20 border border-red-800/30'}`}>
                  <p className={`leading-relaxed ${theme.textMuted}`}>{selectedCity.info.seoContent.emergencyNumbers}</p>
                </div>
              )}
              
              {/* Holidays Tab */}
              {guideTab === 'holidays' && selectedCity.info.seoContent?.publicHolidays && (
                <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
                  <p className={`leading-relaxed ${theme.textMuted}`}>{selectedCity.info.seoContent.publicHolidays}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="relative z-10 mt-10">
        <Footer isLight={isLight} />
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
