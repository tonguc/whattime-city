'use client'

import { useState, useEffect } from 'react'
import { City } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, Theme } from '@/lib/themes'
import TimeIcons from './TimeIcons'

interface CityCardProps {
  city: City
  isSelected: boolean
  onClick: () => void
  currentTheme: string
  themeData: Theme
  use12Hour: boolean
}

export default function CityCard({ city, isSelected, onClick, currentTheme, themeData, use12Hour }: CityCardProps) {
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  const localTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  
  let timeStr: string
  if (use12Hour) {
    const hours = localTime.getHours()
    const minutes = localTime.getMinutes()
    const period = hours >= 12 ? 'PM' : 'AM'
    const displayHours = hours % 12 || 12
    timeStr = `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`
  } else {
    timeStr = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  }
  
  const cityTimeOfDay = getTimeOfDay(localTime, city.lat, city.lng)
  const cityTheme = themes[cityTimeOfDay]
  
  const isLight = ['day', 'light'].includes(currentTheme)
  const Icon = TimeIcons[cityTimeOfDay]
  
  return (
    <button
      onClick={onClick}
      className={`group p-4 rounded-2xl transition-all duration-300 text-left backdrop-blur-xl border ${
        isSelected
          ? `${themeData.accentBgLight} ${themeData.accentBorder} scale-[1.02] shadow-lg`
          : isLight
            ? 'bg-white/40 border-white/50 hover:bg-white/60'
            : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-700/50'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className={`text-xs truncate ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
            {city.country}
          </div>
          <div className={`text-lg font-semibold truncate ${isLight ? 'text-slate-800' : 'text-white'}`}>
            {city.city}
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className={`text-xl font-medium ${isLight ? 'text-slate-800' : 'text-white'}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
            {timeStr}
          </div>
          <div className={`flex justify-end cursor-help ${cityTheme.accentClass}`} title={cityTheme.label}>
            <Icon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </button>
  )
}
