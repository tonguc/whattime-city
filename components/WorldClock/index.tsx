'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { City, getTier1Cities, uses12HourFormat, cities, getCitiesByContinent, continentLabels, getCitiesByCountryCode, getCountryBySlug } from '@/lib/cities'
import type { ContinentFilter } from '@/lib/cities'
import { getTimeOfDay, getSunTimes } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { translations, detectLanguage, Language } from '@/lib/translations'
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
import { useAlarm, useWeather } from '@/shared/hooks'
import TimeConverter from '@/components/TimeConverter'
import FavoriteCard from './FavoriteCard'
import CityGuideCard from './CityGuideCard'
import TimeIntelligence from './TimeIntelligence'
import WorldCitiesGrid from './WorldCitiesGrid'
import UltimateGuide from './UltimateGuide'
import QuickInfoCards from './QuickInfoCards'
import TravelBridge from './TravelBridge'
import MoreCitiesSection from './MoreCitiesSection'

interface WorldClockProps {
  initialCity?: City
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
  const [selectedContinent, setSelectedContinent] = useState<ContinentFilter>('all')
  const [guideTab, setGuideTab] = useState<'overview' | 'attractions' | 'transport' | 'tips' | 'emergency' | 'holidays'>('overview')
  const [continentFilter, setContinentFilter] = useState('')
  
  // Weather state - logic from useWeather hook
  const { weather, weatherAnimation } = useWeather(selectedCity.city)
  
  // Alarm states - logic from useAlarm hook
  const [showAlarmModal, setShowAlarmModal] = useState(false)
  const { alarms, activeAlarm, dismissAlarm, setAlarms } = useAlarm()
  
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
  
  // Update 12h format when city changes
  useEffect(() => {
    setUse12Hour(uses12HourFormat(selectedCity.countryCode))
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
  
  // Calculate isDay from CITY TIME (not weather API)
  // This ensures consistent behavior - Sydney at 7:47 PM = night = stars
  const cityHour = new Date(time.toLocaleString('en-US', { timeZone: selectedCity.timezone })).getHours()
  const isDay = cityHour >= 6 && cityHour < 18
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-all duration-1000 relative`}>
      {/* Weather Animation Background */}
      <WeatherBackground animation={weatherAnimation} isDay={isDay} />
      
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
          <div className="flex flex-col items-center justify-center relative z-10 w-full gap-4 md:gap-6">
            <div className="flex justify-center items-center w-full">
              <div className="inline-flex">
                {clockMode === 'analog' ? (
                  <AnalogClock time={localTime} theme={currentTheme} themeData={theme} />
                ) : (
                  <DigitalClock time={localTime} theme={currentTheme} themeData={theme} use12Hour={use12Hour} />
                )}
              </div>
            </div>
            
            <div className="text-center">
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
          currentCitySlug={selectedCity.slug}
        />
        
        {/* === 3. QUICK INFO CARDS === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          <QuickInfoCards 
            city={selectedCity} 
            localTime={localTime} 
            theme={theme} 
            isLight={isLight} 
          />
          
          {/* City Guide Card - shows for supported cities */}
          <CityGuideCard citySlug={selectedCity.slug} isLight={isLight} />
        </div>
        
        {/* === MORE CITIES IN COUNTRY === */}
        <MoreCitiesSection 
          selectedCity={selectedCity}
          theme={theme}
          isLight={isLight}
          use12Hour={use12Hour}
        />
        
        {/* === 4. TIME INTELLIGENCE (SEO 1) === */}
        <TimeIntelligence city={selectedCity} theme={theme} isLight={isLight} />
        
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
        <WorldCitiesGrid
          selectedCity={selectedCity}
          onCitySelect={(city) => {
            setSelectedCity(city)
            router.push(`/${city.slug}`, { scroll: false })
          }}
          selectedContinent={selectedContinent}
          onContinentChange={setSelectedContinent}
          continentFilter={continentFilter}
          onFilterChange={setContinentFilter}
          theme={theme}
          currentTheme={currentTheme}
          isLight={isLight}
          use12Hour={use12Hour}
          t={t}
        />
        
        {/* === 6. TRAVEL BRIDGE (Banner) === */}
        <TravelBridge city={selectedCity} isLight={isLight} />
        
        {/* === 7. ULTIMATE CITY GUIDE (Tabbed) === */}
        <UltimateGuide
          city={selectedCity}
          offset={offset}
          guideTab={guideTab}
          onTabChange={setGuideTab}
          theme={theme}
          isLight={isLight}
        />
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
        onDismiss={dismissAlarm}
        isLight={isLight}
        theme={theme}
      />
    </div>
  )
}
