'use client'

import { WeatherData } from '@/lib/weather'

interface WeatherBadgeProps {
  weather: WeatherData
  useCelsius?: boolean
  isLight: boolean
}

export default function WeatherBadge({ weather, useCelsius = true, isLight }: WeatherBadgeProps) {
  const temp = useCelsius ? `${Math.round(weather.temp_c)}°C` : `${Math.round(weather.temp_f)}°F`
  const iconUrl = weather.condition.icon.startsWith('//') 
    ? `https:${weather.condition.icon}` 
    : weather.condition.icon
  
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
      isLight ? 'bg-white/60' : 'bg-slate-800/60'
    } backdrop-blur-xl`}>
      <img 
        src={iconUrl} 
        alt={weather.condition.text}
        className="w-6 h-6"
      />
      <span className={`text-sm font-medium ${isLight ? 'text-slate-700' : 'text-white'}`}>
        {temp}
      </span>
      <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
        {weather.condition.text}
      </span>
    </div>
  )
}
