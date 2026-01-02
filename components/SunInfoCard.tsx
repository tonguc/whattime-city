'use client'

import { City } from '@/lib/cities'
import { getSunTimes, formatSunTime } from '@/lib/sun-calculator'
import { Translations } from '@/lib/translations'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface SunInfoCardProps {
  city: City
  t: Translations
}

export default function SunInfoCard({ city, t }: SunInfoCardProps) {
  const { text, isLight } = useThemeClasses()
  
  const now = new Date()
  // Pass timezone for accurate local time calculation
  const { sunrise, sunset } = getSunTimes(now, city.lat, city.lng, city.timezone)
  
  return (
    <div className={`flex justify-around p-4 rounded-2xl ${
      isLight ? 'bg-white/40' : 'bg-slate-800/40'
    } backdrop-blur-xl`}>
      <div className="text-center">
        <div className={`flex items-center justify-center gap-2 ${isLight ? 'text-amber-600' : 'text-amber-400'}`}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4" />
            <path d="M5 12H2" />
            <path d="M22 12h-3" />
            <path d="M6.34 6.34L4.93 4.93" />
            <path d="M17.66 6.34l1.41-1.41" />
            <path d="M18 12a6 6 0 0 0-12 0" />
            <path d="M2 18h20" />
          </svg>
          <span className="text-sm font-medium">{t.sunriseLabel}</span>
        </div>
        <div className={`text-2xl font-light mt-1 ${text}`}>
          {formatSunTime(sunrise)}
        </div>
      </div>
      
      <div className={`w-px ${isLight ? 'bg-slate-300' : 'bg-slate-600'}`} />
      
      <div className="text-center">
        <div className={`flex items-center justify-center gap-2 ${isLight ? 'text-purple-600' : 'text-purple-400'}`}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 10v4" />
            <path d="M5 12H2" />
            <path d="M22 12h-3" />
            <path d="M6.34 17.66L4.93 19.07" />
            <path d="M17.66 17.66l1.41 1.41" />
            <path d="M18 12a6 6 0 0 1-12 0" />
            <path d="M2 6h20" />
          </svg>
          <span className="text-sm font-medium">{t.sunsetLabel}</span>
        </div>
        <div className={`text-2xl font-light mt-1 ${text}`}>
          {formatSunTime(sunset)}
        </div>
      </div>
    </div>
  )
}
