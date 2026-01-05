'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { City, getTier1Cities, uses12HourFormat, cities } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { detectLanguage, Language } from '@/lib/translations'
import { saveCityContext } from '@/lib/city-context'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WeatherBackground from '@/components/WeatherBackground'
import AlarmModal, { ActiveAlarmPopup } from '@/components/AlarmModal'
import { useAlarm, useWeather } from '@/shared/hooks'

// V2 Components - Modular
import HeroSection from './HeroSection'
import InfoRow from './InfoRow'
import ConverterSection from './ConverterSection'
import CompactInfoCards from './CompactInfoCards'
import TimeZoneFacts from './TimeZoneFacts'
import BusinessHoursBox from './BusinessHoursBox'
import TimeDifferenceTable from './TimeDifferenceTable'
import GuidePreview from './GuidePreview'

// Existing WorldClock components (reused)
import CityGuideCard from '@/components/WorldClock/CityGuideCard'
import TravelBridge from '@/components/WorldClock/TravelBridge'
import MoreCitiesSection from '@/components/WorldClock/MoreCitiesSection'
import WorldCitiesGrid from '@/components/WorldClock/WorldCitiesGrid'
import FavoriteCard from '@/components/WorldClock/FavoriteCard'
import type { ContinentFilter } from '@/lib/cities'

interface CityPageV2Props {
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

export default function CityPageV2({ initialCity }: CityPageV2Props) {
  const router = useRouter()
  const { 
    setActiveCity, 
    clockMode, 
    setClockMode, 
    use12Hour, 
    setUse12Hour, 
    themeMode, 
    favorites,
    toggleFavorite 
  } = useCityContext()
  
  const defaultCity = initialCity || getTier1Cities()[0]
  const [selectedCity, setSelectedCity] = useState<City>(defaultCity)
  const [time, setTime] = useState(new Date())
  const [lang, setLang] = useState<Language>('en')
  const [selectedContinent, setSelectedContinent] = useState<ContinentFilter>('all')
  const [continentFilter, setContinentFilter] = useState('')
  
  // Weather
  const { weather, weatherAnimation } = useWeather(selectedCity.city)
  
  // Alarm
  const [showAlarmModal, setShowAlarmModal] = useState(false)
  const { alarms, activeAlarm, dismissAlarm, setAlarms } = useAlarm()
  
  // Detected user location
  const [detectedCity, setDetectedCity] = useState<City | null>(null)
  
  // Sync activeCity with global context
  useEffect(() => {
    setActiveCity(selectedCity)
  }, [selectedCity, setActiveCity])
  
  const isFavorite = (slug: string) => favorites.includes(slug)
  const favoriteCities = cities.filter(c => favorites.includes(c.slug))
  
  // Save city context for tools navigation
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
  
  // Detect user location
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const nearest = findNearestCity(position.coords.latitude, position.coords.longitude)
          setDetectedCity(nearest)
          if (!initialCity) {
            setSelectedCity(nearest)
          }
        },
        () => {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
          const cityByTz = cities.find(c => c.timezone === tz) || cities[0]
          setDetectedCity(cityByTz)
          if (!initialCity) {
            setSelectedCity(cityByTz)
          }
        },
        { timeout: 5000, maximumAge: 300000 }
      )
    } else {
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
  }, [selectedCity, setUse12Hour])
  
  // Time calculations
  const localTime = new Date(time.toLocaleString('en-US', { timeZone: selectedCity.timezone }))
  const autoTheme = getTimeOfDay(time, selectedCity.lat, selectedCity.lng, selectedCity.timezone)
  const currentTheme = themeMode === 'auto' ? autoTheme : themeMode
  const theme = themes[currentTheme]
  const isLight = isLightTheme(currentTheme)
  
  const offset = new Date().toLocaleString('en-US', { 
    timeZone: selectedCity.timezone, 
    timeZoneName: 'short' 
  }).split(' ').pop() || ''
  
  // Calculate isDay for weather background
  const cityHour = localTime.getHours()
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
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-4">
        
        {/* 1. HERO SECTION - Clean & Minimal */}
        <HeroSection
          city={selectedCity}
          localTime={localTime}
          clockMode={clockMode}
          offset={offset}
          isFavorite={isFavorite(selectedCity.slug)}
          onToggleFavorite={() => toggleFavorite(selectedCity.slug)}
          onClockModeToggle={() => setClockMode(clockMode === 'digital' ? 'analog' : 'digital')}
          lang={lang}
        />
        
        {/* 1b. INFO ROW - Weather, Sunrise/Sunset, User Location */}
        <InfoRow 
          city={selectedCity}
          weather={weather}
          detectedCity={detectedCity}
          autoTheme={autoTheme}
        />
        
        {/* 2. QUICK INFO (Compact Pills) */}
        <CompactInfoCards city={selectedCity} />
        
        {/* 3. CONVERTER WIDGET - Primary Action Area */}
        <ConverterSection currentCitySlug={selectedCity.slug} />
        
        {/* 4. CITY GUIDE BANNER (Premium cities only) */}
        <div className="mt-4">
          <CityGuideCard citySlug={selectedCity.slug} />
        </div>
        
        {/* 5. TRAVEL BRIDGE BANNER */}
        <TravelBridge city={selectedCity} />
        
        {/* 6. GUIDE PREVIEW (6 Tab Preview) - Only if city has info */}
        {selectedCity.info && (
          <GuidePreview city={selectedCity} />
        )}
        
        {/* 7 & 8. TIME ZONE FACTS + BUSINESS HOURS (2 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <TimeZoneFacts city={selectedCity} />
          <BusinessHoursBox city={selectedCity} />
        </div>
        
        {/* 9. TIME DIFFERENCE TABLE */}
        <div className="mt-4">
          <TimeDifferenceTable city={selectedCity} />
        </div>
        
        {/* Favorite Cities Section */}
        {favoriteCities.length > 0 && (
          <div className={`rounded-2xl p-4 backdrop-blur-xl border ${theme.card} mt-4`}>
            <h3 className={`text-base font-semibold ${theme.text} mb-3`}>
              ⭐ Your Favorites
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {favoriteCities.slice(0, 6).map(city => (
                <FavoriteCard
                  key={city.slug}
                  city={city}
                  isSelected={city.slug === selectedCity.slug}
                  onClick={() => {
                    setSelectedCity(city)
                    router.push(`/${city.slug}`)
                  }}
                  onRemove={() => toggleFavorite(city.slug)}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* 10. MORE CITIES (Same Country/Region) */}
        <MoreCitiesSection selectedCity={selectedCity} />
        
        {/* 11. WORLD CITIES (Exit Control) - Limited by default */}
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
          t={{} as any}
        />
        
        {/* Note: EEAT is now integrated into TimeZoneFacts */}
      </main>
      
      {/* Footer */}
      <div className="relative z-10 mt-10">
        <Footer />
      </div>
      
      {/* Floating Alarm Button */}
      <button 
        onClick={() => setShowAlarmModal(true)} 
        title="Set time alert for any city"
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 ${theme.accentBg} text-white`}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        {alarms.filter(a => a.active).length > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full bg-red-500 text-white border-2 border-white">
            {alarms.filter(a => a.active).length}
          </span>
        )}
      </button>
      
      {/* Alarm Modal */}
      <AlarmModal
        isOpen={showAlarmModal}
        onClose={() => setShowAlarmModal(false)}
        alarms={alarms}
        setAlarms={setAlarms}
      />
      
      {/* Active Alarm Popup */}
      <ActiveAlarmPopup
        alarm={activeAlarm}
        onDismiss={dismissAlarm}
      />
    </div>
  )
}
