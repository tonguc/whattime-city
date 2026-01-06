'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { City, getTier1Cities, uses12HourFormat, cities } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { detectLanguage, Language } from '@/lib/translations'
import { saveCityContext } from '@/lib/city-context'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AlarmModal, { ActiveAlarmPopup } from '@/components/AlarmModal'
import { useAlarm, useWeather } from '@/shared/hooks'
import DigitalClock from '@/components/DigitalClock'

// Dynamic imports - reduces initial bundle size
const WeatherBackground = dynamic(() => import('@/components/WeatherBackground'), { ssr: false })
const TimeConverter = dynamic(() => import('@/components/TimeConverter'), { ssr: false })
const AnalogClock = dynamic(() => import('@/components/AnalogClock'), { 
  ssr: false,
  loading: () => <div className="w-24 h-24" />
})

// V2 Components - Modular
import InfoRow from './InfoRow'
import SnippetBlock from './SnippetBlock'
import CompactInfoCards from './CompactInfoCards'
import TimeZoneFacts from './TimeZoneFacts'
import BusinessHoursBox from './BusinessHoursBox'

// Dynamic imports for below-fold content
const TimeDifferenceTable = dynamic(() => import('./TimeDifferenceTable'), { ssr: false })
const GuidePreview = dynamic(() => import('./GuidePreview'), { ssr: false })
const CompactWorldCities = dynamic(() => import('./CompactWorldCities'), { ssr: false })
const TravelBridge = dynamic(() => import('./TravelBridge'), { ssr: false })
const MoreCitiesSection = dynamic(() => import('./MoreCitiesSection'), { ssr: false })
const FavoriteCard = dynamic(() => import('./FavoriteCard'), { ssr: false })

interface CityPageProps {
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

export default function CityPage({ initialCity }: CityPageProps) {
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
        
        {/* ═══════════════════════════════════════════════════════════════
            PRIMARY CONTAINER - Ana İçerik Bloğu
            Hero + InfoRow + Snippet + QuickInfo + Converter + Guide Banners
            ═══════════════════════════════════════════════════════════════ */}
        <div className={`rounded-3xl backdrop-blur-xl border ${theme.card} overflow-hidden`}>
          
          {/* SECTION 1: HERO - Clock & Core Info */}
          <div className="p-4 md:p-6">
            <div className="flex flex-col items-center justify-center w-full gap-3 md:gap-4">
              
              {/* H1 - SEO Optimized */}
              <header className="text-center w-full">
                <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${theme.text} flex items-center justify-center gap-2 flex-wrap`}>
                  Current Local Time in {selectedCity.city}
                  <button
                    onClick={() => toggleFavorite(selectedCity.slug)}
                    className={`text-xl transition-all hover:scale-110 ${
                      isFavorite(selectedCity.slug)
                        ? 'text-amber-400' 
                        : isLight ? 'text-slate-300 hover:text-amber-400' : 'text-slate-600 hover:text-amber-400'
                    }`}
                    title={isFavorite(selectedCity.slug) ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    {isFavorite(selectedCity.slug) ? '★' : '☆'}
                  </button>
                </h1>
                <p className={`text-sm mt-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {selectedCity.city}, {selectedCity.country} ({offset})
                </p>
              </header>
              
              {/* Clock */}
              <div 
                className="flex justify-center items-center w-full min-h-[100px] md:min-h-[120px] cursor-pointer"
                onClick={() => setClockMode(clockMode === 'digital' ? 'analog' : 'digital')}
              >
                {clockMode === 'analog' ? (
                  <AnalogClock time={localTime} />
                ) : (
                  <DigitalClock time={localTime} />
                )}
              </div>
              
              {/* Date */}
              <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {localTime.toLocaleDateString(lang, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            
            {/* Info Row - Weather, Sunrise/Sunset */}
            <InfoRow 
              city={selectedCity}
              weather={weather}
              detectedCity={detectedCity}
              autoTheme={autoTheme}
            />
            
            {/* Snippet Block */}
            <SnippetBlock city={selectedCity} />
            
            {/* Quick Info Pills */}
            <CompactInfoCards city={selectedCity} />
          </div>
          
          {/* DIVIDER */}
          <div className={`mx-4 md:mx-6 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`} />
          
          {/* SECTION 2: CONVERTER */}
          <div id="converter" className="p-4 md:p-6">
            <h2 className={`text-base font-semibold flex items-center gap-2 ${theme.text}`}>
              🔄 Two-City Time Converter
            </h2>
            <p className={`text-xs mt-0.5 mb-3 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Compare local time between {selectedCity.city} and any other city
            </p>
            <TimeConverter currentCitySlug={selectedCity.slug} />
          </div>
          
          {/* DIVIDER */}
          <div className={`mx-4 md:mx-6 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`} />
          
          {/* SECTION 3: TRAVEL BRIDGE - Tek CTA Banner */}
          <div className="p-4 md:p-6">
            <TravelBridge city={selectedCity} />
          </div>
        </div>
        
        {/* ═══════════════════════════════════════════════════════════════
            SECONDARY CONTENT - Detaylı Bilgiler
            Guide Preview + Time Zone Facts + Business Hours + Time Diff
            ═══════════════════════════════════════════════════════════════ */}
        
        {/* Guide Preview - Premium içerik kartı, SEO için güçlü */}
        {selectedCity.info && (
          <GuidePreview city={selectedCity} />
        )}
        
        {/* Time Zone Facts + Business Hours (2 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <TimeZoneFacts city={selectedCity} />
          <BusinessHoursBox city={selectedCity} />
        </div>
        
        {/* Time Difference Table */}
        <div className="mt-4">
          <TimeDifferenceTable city={selectedCity} />
        </div>
        
        {/* ═══════════════════════════════════════════════════════════════
            DISCOVERY SECTION - Keşif & Navigasyon
            Favorites + More Cities + World Cities
            ═══════════════════════════════════════════════════════════════ */}
        
        {/* Favorite Cities */}
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
        
        {/* More Cities (Same Country/Region) */}
        <MoreCitiesSection selectedCity={selectedCity} />
        
        {/* World Cities - Compact */}
        <CompactWorldCities
          selectedCity={selectedCity}
          onCitySelect={(city) => {
            setSelectedCity(city)
            router.push(`/${city.slug}`, { scroll: false })
          }}
        />
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
