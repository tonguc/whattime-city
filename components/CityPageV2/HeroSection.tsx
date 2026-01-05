'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'
import DigitalClock from '@/components/DigitalClock'
import AnalogClock from '@/components/AnalogClock'
import { translations, Language } from '@/lib/translations'

interface HeroSectionProps {
  city: City
  localTime: Date
  clockMode: 'digital' | 'analog'
  offset: string
  isFavorite: boolean
  onToggleFavorite: () => void
  onClockModeToggle: () => void
  lang?: Language
}

export default function HeroSection({
  city,
  localTime,
  clockMode,
  offset,
  isFavorite,
  onToggleFavorite,
  onClockModeToggle,
  lang = 'en'
}: HeroSectionProps) {
  const { card, text, textMuted, isLight } = useThemeClasses()
  
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
      <div className="flex flex-col items-center justify-center relative z-10 w-full gap-3 md:gap-4">
        
        {/* H1 - SEO Optimized - CLEAN */}
        <header className="text-center w-full">
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${text} flex items-center justify-center gap-2 flex-wrap`}>
            Current Local Time in {city.city}
            <button
              onClick={onToggleFavorite}
              className={`text-xl transition-all hover:scale-110 ${
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
          
          {/* Single line description with timezone */}
          <p className={`text-sm mt-1 ${textMuted}`}>
            {timezoneDesc}
          </p>
        </header>
        
        {/* Clock Container - Fixed height for CLS prevention */}
        <div 
          className="flex justify-center items-center w-full min-h-[100px] md:min-h-[120px] cursor-pointer"
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
        
        {/* Date + Timezone Badge - Minimal */}
        <div className="flex flex-col items-center gap-2">
          <p className={`text-sm ${textMuted}`}>{dateStr}</p>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
          }`}>
            {offset}
          </span>
        </div>
      </div>
    </section>
  )
}

// Helper: Get timezone description
function getTimezoneDescription(city: City): string {
  const tzAbbreviations: Record<string, string> = {
    'America/New_York': 'Eastern Time – ET',
    'America/Los_Angeles': 'Pacific Time – PT',
    'America/Chicago': 'Central Time – CT',
    'America/Denver': 'Mountain Time – MT',
    'America/Toronto': 'Eastern Time – ET',
    'Europe/London': 'Greenwich Mean Time – GMT/BST',
    'Europe/Paris': 'Central European Time – CET/CEST',
    'Europe/Berlin': 'Central European Time – CET/CEST',
    'Europe/Amsterdam': 'Central European Time – CET/CEST',
    'Europe/Istanbul': 'Turkey Time – TRT',
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
  }
  
  const tzAbbr = tzAbbreviations[city.timezone] || city.timezone.split('/').pop()?.replace('_', ' ')
  return `${city.city}, ${city.country} (${tzAbbr})`
}
