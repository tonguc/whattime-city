'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'
import DigitalClock from '@/components/DigitalClock'
import AnalogClock from '@/components/AnalogClock'
import SunInfoCard from '@/components/SunInfoCard'
import TimeIcons from '@/components/TimeIcons'
import WeatherBadge from '@/components/WeatherBadge'
import { translations, Language } from '@/lib/translations'

interface HeroSectionProps {
  city: City
  time: Date
  localTime: Date
  clockMode: 'digital' | 'analog'
  use12Hour: boolean
  autoTheme: string
  offset: string
  weather: any
  detectedCity: City | null
  isFavorite: boolean
  onToggleFavorite: () => void
  onClockModeToggle: () => void
  lang?: Language
}

export default function HeroSection({
  city,
  time,
  localTime,
  clockMode,
  use12Hour,
  autoTheme,
  offset,
  weather,
  detectedCity,
  isFavorite,
  onToggleFavorite,
  onClockModeToggle,
  lang = 'en'
}: HeroSectionProps) {
  const { card, text, textMuted, accentText, accentBg, isLight } = useThemeClasses()
  const t = translations[lang]
  
  const dateStr = localTime.toLocaleDateString(lang, { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
  
  // Timezone description
  const timezoneDesc = getTimezoneDescription(city)

  return (
    <section className={`rounded-3xl p-4 md:p-6 backdrop-blur-xl border ${card} relative overflow-hidden`}>
      <div className="flex flex-col items-center justify-center relative z-10 w-full gap-4 md:gap-5">
        
        {/* H1 - SEO Optimized */}
        <header className="text-center w-full">
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${text} flex items-center justify-center gap-2 flex-wrap`}>
            Current Local Time in {city.city}
            <button
              onClick={onToggleFavorite}
              className={`text-2xl transition-all hover:scale-110 ${
                isFavorite 
                  ? 'text-amber-400' 
                  : isLight ? 'text-slate-300 hover:text-amber-400' : 'text-slate-600 hover:text-amber-400'
              }`}
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite ? '★' : '☆'}
            </button>
          </h1>
          
          {/* Single line description */}
          <p className={`text-sm md:text-base mt-2 ${textMuted}`}>
            {timezoneDesc}
          </p>
        </header>
        
        {/* Clock Container - Fixed height for CLS */}
        <div 
          className="flex justify-center items-center w-full min-h-[120px] md:min-h-[140px]"
          onClick={onClockModeToggle}
          role="button"
          tabIndex={0}
          aria-label="Toggle clock mode"
        >
          {clockMode === 'analog' ? (
            <AnalogClock time={localTime} />
          ) : (
            <DigitalClock time={localTime} />
          )}
        </div>
        
        {/* Date */}
        <p className={`text-sm md:text-base ${textMuted}`}>{dateStr}</p>
        
        {/* Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            isLight ? 'bg-slate-200/80 text-slate-700' : 'bg-slate-700/80 text-slate-300'
          }`}>
            {offset}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5 ${
            isLight ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/50 text-blue-300'
          }`}>
            {(() => {
              const Icon = TimeIcons[autoTheme as keyof typeof TimeIcons]
              return Icon ? <Icon className="w-4 h-4" /> : null
            })()}
            {t[autoTheme as keyof typeof t] || autoTheme}
          </span>
          {weather && <WeatherBadge weather={weather} />}
        </div>
        
        {/* User Location Info */}
        {detectedCity && (
          <div className={`text-center text-xs ${textMuted} space-y-1`}>
            {detectedCity.slug !== city.slug && (
              <p className="opacity-60">
                Time difference from your location: {calculateTimeDiff(city, detectedCity)}
              </p>
            )}
            <p className="opacity-70 flex items-center justify-center gap-1">
              <span>📍</span>
              <span>Your location: {detectedCity.city}</span>
            </p>
          </div>
        )}
        
        {/* Sun Info */}
        <div className="mt-2 w-full max-w-xs">
          <SunInfoCard city={city} t={t} />
        </div>
        
        {/* Compare Link */}
        <a 
          href={`/time/${city.slug}/london`}
          className={`text-sm ${accentText} hover:underline flex items-center gap-1`}
        >
          Compare {city.city} with another city →
        </a>
      </div>
    </section>
  )
}

// Helper: Get timezone description
function getTimezoneDescription(city: City): string {
  const tzParts = city.timezone.split('/')
  const region = tzParts[0]
  
  // Common timezone abbreviations
  const tzAbbreviations: Record<string, string> = {
    'America/New_York': 'Eastern Time – ET',
    'America/Los_Angeles': 'Pacific Time – PT',
    'America/Chicago': 'Central Time – CT',
    'America/Denver': 'Mountain Time – MT',
    'Europe/London': 'Greenwich Mean Time – GMT/BST',
    'Europe/Paris': 'Central European Time – CET/CEST',
    'Europe/Berlin': 'Central European Time – CET/CEST',
    'Asia/Tokyo': 'Japan Standard Time – JST',
    'Asia/Shanghai': 'China Standard Time – CST',
    'Asia/Singapore': 'Singapore Time – SGT',
    'Asia/Dubai': 'Gulf Standard Time – GST',
    'Asia/Kolkata': 'India Standard Time – IST',
    'Asia/Bangkok': 'Indochina Time – ICT',
    'Asia/Hong_Kong': 'Hong Kong Time – HKT',
    'Asia/Seoul': 'Korea Standard Time – KST',
    'Australia/Sydney': 'Australian Eastern Time – AET',
    'Pacific/Auckland': 'New Zealand Time – NZT',
    'America/Sao_Paulo': 'Brasília Time – BRT',
    'America/Toronto': 'Eastern Time – ET',
    'Europe/Istanbul': 'Turkey Time – TRT',
    'Europe/Amsterdam': 'Central European Time – CET/CEST',
  }
  
  const tzAbbr = tzAbbreviations[city.timezone] || city.timezone.replace('_', ' ')
  
  return `Current local time in ${city.city}, ${city.country} (${tzAbbr})`
}

// Helper: Calculate time difference
function calculateTimeDiff(city: City, detectedCity: City): string {
  const now = new Date()
  const cityTime = new Date(now.toLocaleString('en-US', { timeZone: city.timezone }))
  const detectedTime = new Date(now.toLocaleString('en-US', { timeZone: detectedCity.timezone }))
  
  const diffMs = cityTime.getTime() - detectedTime.getTime()
  const diffHours = Math.round(diffMs / (1000 * 60 * 60))
  
  if (diffHours === 0) return 'same time'
  return `${diffHours > 0 ? '+' : ''}${diffHours}h`
}
