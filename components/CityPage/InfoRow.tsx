'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'
import { getSunTimes } from '@/lib/sun-calculator'
import WeatherBadge from '@/components/WeatherBadge'

interface InfoRowProps {
  city: City
  weather: any
  detectedCity: City | null
  autoTheme: string
}

export default function InfoRow({ city, weather, detectedCity, autoTheme }: InfoRowProps) {
  const { card, textMuted, isLight, accentText } = useThemeClasses()
  
  // Calculate sun times (returns decimal hours)
  const now = new Date()
  const sunTimes = getSunTimes(now, city.lat, city.lng, city.timezone)
  
  // Format decimal hours to time string
  const formatDecimalHours = (decimalHours: number): string => {
    const hours = Math.floor(decimalHours)
    const minutes = Math.round((decimalHours - hours) * 60)
    const h = hours % 12 || 12
    const ampm = hours >= 12 ? 'PM' : 'AM'
    return `${h}:${minutes.toString().padStart(2, '0')} ${ampm}`
  }
  
  // Time difference calculation
  const getTimeDiff = (): string | null => {
    if (!detectedCity || detectedCity.slug === city.slug) return null
    
    const cityTime = new Date(now.toLocaleString('en-US', { timeZone: city.timezone }))
    const detectedTime = new Date(now.toLocaleString('en-US', { timeZone: detectedCity.timezone }))
    
    const diffMs = cityTime.getTime() - detectedTime.getTime()
    const diffHours = Math.round(diffMs / (1000 * 60 * 60))
    
    if (diffHours === 0) return 'same time'
    return `${diffHours > 0 ? '+' : ''}${diffHours}h`
  }
  
  const timeDiff = getTimeDiff()
  
  // Theme icon
  const themeIcons: Record<string, string> = {
    dawn: '🌅',
    day: '☀️',
    dusk: '🌆',
    night: '🌙'
  }

  return (
    <div className={`rounded-2xl p-3 border ${card} mt-3`}>
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        
        {/* Time of Day */}
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
          isLight ? 'bg-slate-100' : 'bg-slate-800'
        }`}>
          <span>{themeIcons[autoTheme] || '☀️'}</span>
          <span className={textMuted}>{autoTheme.charAt(0).toUpperCase() + autoTheme.slice(1)}</span>
        </div>
        
        {/* Weather */}
        {weather && (
          <WeatherBadge weather={weather} />
        )}
        
        {/* Sunrise */}
        <div className={`flex items-center gap-1.5 ${textMuted}`}>
          <span>🌅</span>
          <span>{formatDecimalHours(sunTimes.sunrise)}</span>
        </div>
        
        {/* Sunset */}
        <div className={`flex items-center gap-1.5 ${textMuted}`}>
          <span>🌇</span>
          <span>{formatDecimalHours(sunTimes.sunset)}</span>
        </div>
        
        {/* User Location & Time Diff */}
        {detectedCity && (
          <div className={`flex items-center gap-1.5 ${textMuted}`}>
            <span>📍</span>
            <span>{detectedCity.city}</span>
            {timeDiff && timeDiff !== 'same time' && (
              <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                isLight ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/50 text-blue-300'
              }`}>
                {timeDiff}
              </span>
            )}
          </div>
        )}
        
        {/* Convert CTA - Scroll to Converter */}
        <button 
          onClick={() => {
            const converter = document.getElementById('converter')
            if (converter) {
              converter.scrollIntoView({ behavior: 'smooth', block: 'center' })
              // Focus on first input after scroll
              setTimeout(() => {
                const input = converter.querySelector('input')
                if (input) input.focus()
              }, 500)
            }
          }}
          className={`flex items-center gap-1 ${accentText} hover:underline`}
        >
          <span>Convert with another city →</span>
        </button>
      </div>
    </div>
  )
}
