'use client'

import { WeatherData, getWeatherEmoji } from '@/lib/weather'

interface WeatherBadgeProps {
  weather: WeatherData
  useCelsius?: boolean
  isLight: boolean
}

export default function WeatherBadge({ weather, useCelsius = true, isLight }: WeatherBadgeProps) {
  const temp = useCelsius ? `${Math.round(weather.temp_c)}°C` : `${Math.round(weather.temp_f)}°F`
  const emoji = getWeatherEmoji(weather.condition.code)
  
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
      isLight ? 'bg-white/60' : 'bg-slate-800/60'
    } backdrop-blur-xl`}>
      <span className="text-lg">{emoji}</span>
      <span className={`text-sm font-medium ${isLight ? 'text-slate-700' : 'text-white'}`}>
        {temp}
      </span>
      <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
        {weather.condition.text}
      </span>
    </div>
  )
}
