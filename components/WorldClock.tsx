'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { City, getTier1Cities, uses12HourFormat, cities } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { translations, detectLanguage, Language } from '@/lib/translations'
import { getWeather, WeatherData, getWeatherAnimation, WeatherAnimation } from '@/lib/weather'
import DigitalClock from '@/components/DigitalClock'
import AnalogClock from '@/components/AnalogClock'
import SunInfoCard from '@/components/SunInfoCard'
import ThemeToggle from '@/components/ThemeToggle'
import CityCard from '@/components/CityCard'
import TimeIcons from '@/components/TimeIcons'
import Search from '@/components/Search'
import WeatherBackground from '@/components/WeatherBackground'
import WeatherBadge from '@/components/WeatherBadge'

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
  const defaultCity = initialCity || getTier1Cities()[0]
  const [selectedCity, setSelectedCity] = useState<City>(defaultCity)
  const [time, setTime] = useState(new Date())
  const [themeMode, setThemeMode] = useState<'auto' | 'light' | 'dark'>('auto')
  const [clockMode, setClockMode] = useState<'digital' | 'analog'>('digital')
  const [lang, setLang] = useState<Language>('en')
  const [use12Hour, setUse12Hour] = useState(uses12HourFormat(defaultCity.countryCode))
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [weatherAnimation, setWeatherAnimation] = useState<WeatherAnimation>('clear')
  
  useEffect(() => {
    setLang(detectLanguage())
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
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
  
  const localTime = new Date(time.toLocaleString('en-US', { timeZone: selectedCity.timezone }))
  
  const autoTheme = getTimeOfDay(localTime, selectedCity.lat, selectedCity.lng)
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
  
  const handleLogoClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const nearest = findNearestCity(position.coords.latitude, position.coords.longitude)
          router.push(`/${nearest.slug}`)
        },
        (error) => {
          console.log('Geolocation error:', error)
          router.push('/')
        }
      )
    } else {
      router.push('/')
    }
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
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8">
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <button onClick={handleLogoClick} className="text-left hover:opacity-80 transition-opacity" title="Click to detect your location">
            <h1 className={`text-2xl font-bold ${theme.text}`}>
              whattime<span className={theme.accentClass}>.city</span>
            </h1>
            <p className={`text-sm ${theme.textMuted}`}>{t.worldClock}</p>
          </button>
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Search theme={theme} currentTheme={currentTheme} />
            
            <div className={`flex rounded-full p-1 ${isLight ? 'bg-white/60' : 'bg-slate-800/60'} backdrop-blur-xl`}>
              {(['digital', 'analog'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setClockMode(mode)}
                  title={mode === 'digital' ? 'Digital: Show time as numbers' : 'Analog: Show time as clock face'}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all capitalize ${
                    clockMode === mode
                      ? `${theme.accentBg} text-white shadow-lg`
                      : isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {t[mode]}
                </button>
              ))}
            </div>
            
            <div className={`flex rounded-full p-1 ${isLight ? 'bg-white/60' : 'bg-slate-800/60'} backdrop-blur-xl`}>
              <button
                onClick={() => setUse12Hour(false)}
                title="24-hour format (00:00 - 23:59)"
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  !use12Hour
                    ? `${theme.accentBg} text-white shadow-lg`
                    : isLight ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                24h
              </button>
              <button
                onClick={() => setUse12Hour(true)}
                title="12-hour format with AM/PM"
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  use12Hour
                    ? `${theme.accentBg} text-white shadow-lg`
                    : isLight ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                12h
              </button>
            </div>
            
            <ThemeToggle mode={themeMode} setMode={setThemeMode} currentTheme={currentTheme} t={t} themeData={theme} />
          </div>
        </header>
        
        <div className={`rounded-3xl p-8 md:p-10 mb-6 backdrop-blur-xl border ${theme.card} relative overflow-hidden`}>
          <div className="flex flex-col items-center relative z-10">
            {clockMode === 'analog' ? (
              <AnalogClock time={localTime} theme={currentTheme} themeData={theme} />
            ) : (
              <DigitalClock time={localTime} theme={currentTheme} themeData={theme} use12Hour={use12Hour} />
            )}
            
            <div className="mt-8 text-center">
              <h2 className={`text-4xl md:text-5xl font-medium ${theme.text}`}>
                {selectedCity.city}
              </h2>
              <p className={`text-lg mt-1 ${theme.textMuted}`}>{selectedCity.country}</p>
              <p className={`mt-2 ${theme.textMuted}`}>{dateStr}</p>
              
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
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
                  <>
                    <WeatherBadge weather={weather} isLight={isLight} />
                    <span className={`px-2 py-1 rounded-full text-xs ${isLight ? 'bg-slate-200/80 text-slate-600' : 'bg-slate-700/80 text-slate-400'}`}>
                      {weatherAnimation}
                    </span>
                  </>
                )}
              </div>
            </div>
            
            <div className="mt-6 w-full max-w-xs">
              <SunInfoCard city={selectedCity} localTime={localTime} theme={currentTheme} t={t} />
            </div>
          </div>
        </div>
        
        <div className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card}`}>
          <h3 className={`text-lg font-semibold mb-4 ${theme.text}`}>
            {t.worldCities}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {featuredCities.map((city) => (
              <CityCard
                key={city.slug}
                city={city}
                isSelected={selectedCity.slug === city.slug}
                onClick={() => setSelectedCity(city)}
                currentTheme={currentTheme}
                themeData={theme}
                use12Hour={use12Hour}
              />
            ))}
          </div>
        </div>
        
        <footer className="mt-8 text-center">
          <div className={`flex flex-wrap justify-center gap-4 mb-4 text-sm ${theme.textMuted}`}>
            <div className="flex items-center gap-1.5 cursor-help" title="Night: After sunset until dawn">
              <TimeIcons.night className="w-4 h-4" />
              <span>{t.night}</span>
            </div>
            <div className="flex items-center gap-1.5 cursor-help" title="Dawn: 30 minutes before and after sunrise">
              <TimeIcons.dawn className="w-4 h-4" />
              <span>{t.dawn}</span>
            </div>
            <div className="flex items-center gap-1.5 cursor-help" title="Day: After dawn until dusk">
              <TimeIcons.day className="w-4 h-4" />
              <span>{t.day}</span>
            </div>
            <div className="flex items-center gap-1.5 cursor-help" title="Dusk: 30 minutes before and after sunset">
              <TimeIcons.dusk className="w-4 h-4" />
              <span>{t.dusk}</span>
            </div>
          </div>
          <p className={`text-sm ${theme.textMuted}`}>
            {t.footer} • whattime.city
          </p>
        </footer>
      </div>
    </div>
  )
}
