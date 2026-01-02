'use client'

import { useThemeClasses } from '@/lib/useThemeClasses'
import { WeatherData } from '@/core/types/weather'

interface WeatherBadgeProps {
  weather: WeatherData
}

export default function WeatherBadge({ weather }: WeatherBadgeProps) {
  const { isLight } = useThemeClasses()
  
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
      isLight ? 'bg-white/60 text-slate-700' : 'bg-slate-800/60 text-slate-200'
    }`}>
      {weather.condition?.icon && (
        <img 
          src={weather.condition.icon} 
          alt={weather.condition.text} 
          className="w-5 h-5"
        />
      )}
      <span className="font-medium">{Math.round(weather.temp_c)}°C</span>
      <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>
        {weather.condition?.text || 'N/A'}
      </span>
    </div>
  )
}
