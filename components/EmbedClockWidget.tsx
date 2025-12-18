'use client'

import { useState, useEffect } from 'react'
import { City } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'

interface EmbedClockWidgetProps {
  city: City
  theme?: string // 'auto' | 'light' | 'dark'
  size?: string // 'small' | 'medium' | 'large'
  showDate?: boolean
  showTimezone?: boolean
  transparent?: boolean
}

const sizeStyles = {
  small: {
    container: 'p-3',
    time: 'text-2xl',
    city: 'text-sm',
    details: 'text-xs',
    logo: 'text-[10px]'
  },
  medium: {
    container: 'p-4',
    time: 'text-4xl',
    city: 'text-base',
    details: 'text-sm',
    logo: 'text-xs'
  },
  large: {
    container: 'p-6',
    time: 'text-6xl',
    city: 'text-xl',
    details: 'text-base',
    logo: 'text-sm'
  }
}

export default function EmbedClockWidget({ 
  city, 
  theme = 'auto',
  size = 'medium',
  showDate = true,
  showTimezone = true,
  transparent = false
}: EmbedClockWidgetProps) {
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  // Get local time for this city
  const localTime = time.toLocaleTimeString('en-US', { 
    timeZone: city.timezone, 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit',
    hour12: true 
  })
  
  const localDate = time.toLocaleDateString('en-US', { 
    timeZone: city.timezone, 
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
  
  // Get timezone abbreviation
  const tzAbbr = time.toLocaleTimeString('en-US', { 
    timeZone: city.timezone, 
    timeZoneName: 'short'
  }).split(' ').pop()
  
  // Determine theme
  const timeOfDay = getTimeOfDay(time, city.lat, city.lng, city.timezone)
  const isLight = theme === 'light' || (theme === 'auto' && (timeOfDay === 'day' || timeOfDay === 'dawn'))
  const isDark = theme === 'dark' || (theme === 'auto' && (timeOfDay === 'night' || timeOfDay === 'dusk'))
  
  // Get size styles
  const styles = sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.medium
  
  // Time icon
  const timeIcons: Record<string, string> = {
    dawn: '🌅',
    day: '☀️',
    dusk: '🌆',
    night: '🌙'
  }
  
  // Background colors based on time of day (for auto theme)
  const autoBgColors: Record<string, string> = {
    dawn: 'from-orange-400 to-pink-500',
    day: 'from-sky-400 to-blue-500',
    dusk: 'from-purple-500 to-indigo-600',
    night: 'from-slate-800 to-slate-900'
  }
  
  // Determine background
  let bgClass = ''
  if (!transparent) {
    if (theme === 'light') {
      bgClass = 'bg-white'
    } else if (theme === 'dark') {
      bgClass = 'bg-slate-900'
    } else {
      bgClass = `bg-gradient-to-br ${autoBgColors[timeOfDay]}`
    }
  }
  
  // Text colors
  const textColor = isLight && theme === 'light' ? 'text-slate-800' : 'text-white'
  const subTextColor = isLight && theme === 'light' ? 'text-slate-500' : 'text-white/70'
  
  return (
    <div className={`min-h-screen flex items-center justify-center ${transparent ? '' : bgClass}`}>
      <div className={`${styles.container} rounded-2xl ${transparent ? '' : 'shadow-lg'} ${
        transparent 
          ? '' 
          : isLight && theme === 'light'
            ? 'bg-white border border-slate-200'
            : theme === 'dark'
              ? 'bg-slate-800 border border-slate-700'
              : 'bg-white/10 backdrop-blur-sm border border-white/20'
      }`}>
        {/* City Name */}
        <div className="flex items-center gap-2 mb-2">
          <span>{timeIcons[timeOfDay]}</span>
          <span className={`font-semibold ${styles.city} ${textColor}`}>
            {city.city}
          </span>
        </div>
        
        {/* Time */}
        <div className={`font-bold ${styles.time} ${textColor} tracking-tight`}>
          {localTime.replace(/:\d{2}\s/, ' ').split(' ')[0]}
          <span className="opacity-70">:{localTime.split(':')[2]?.split(' ')[0]}</span>
          <span className={`${styles.details} ml-2 font-normal`}>
            {localTime.split(' ')[1]}
          </span>
        </div>
        
        {/* Date & Timezone */}
        <div className={`flex items-center gap-3 mt-2 ${subTextColor} ${styles.details}`}>
          {showDate && <span>{localDate}</span>}
          {showDate && showTimezone && <span>•</span>}
          {showTimezone && <span>{tzAbbr}</span>}
        </div>
        
        {/* Powered by */}
        <a 
          href={`https://whattime.city/${city.slug}?ref=widget`}
          target="_blank"
          rel="noopener"
          className={`block mt-3 pt-2 border-t ${
            isLight && theme === 'light' ? 'border-slate-200' : 'border-white/20'
          } ${styles.logo} ${subTextColor} hover:opacity-80 transition-opacity`}
        >
          ⏰ whattime.city
        </a>
      </div>
    </div>
  )
}
