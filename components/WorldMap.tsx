'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cities, City } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { getCityContext } from '@/lib/city-context'

// Major cities to show on map (capitals and key cities)
const mapCities = [
  { slug: 'new-york', x: 23, y: 38 },
  { slug: 'los-angeles', x: 12, y: 40 },
  { slug: 'mexico-city', x: 17, y: 50 },
  { slug: 'sao-paulo', x: 32, y: 68 },
  { slug: 'buenos-aires', x: 29, y: 75 },
  { slug: 'london', x: 47, y: 32 },
  { slug: 'paris', x: 49, y: 34 },
  { slug: 'berlin', x: 52, y: 31 },
  { slug: 'moscow', x: 58, y: 28 },
  { slug: 'istanbul', x: 55, y: 38 },
  { slug: 'dubai', x: 62, y: 46 },
  { slug: 'mumbai', x: 68, y: 50 },
  { slug: 'singapore', x: 76, y: 57 },
  { slug: 'hong-kong', x: 79, y: 46 },
  { slug: 'tokyo', x: 86, y: 40 },
  { slug: 'sydney', x: 88, y: 74 },
  { slug: 'cairo', x: 55, y: 44 },
  { slug: 'johannesburg', x: 54, y: 70 },
  { slug: 'lagos', x: 48, y: 54 },
  { slug: 'nairobi', x: 58, y: 58 },
]

export default function WorldMap() {
  const [time, setTime] = useState(new Date())
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [contextCoords, setContextCoords] = useState<{ lat: number; lng: number }>({ lat: 40.71, lng: -74.01 })
  
  useEffect(() => {
    // Get saved city context for theme
    const context = getCityContext()
    if (context) {
      setContextCoords({ lat: context.lat, lng: context.lng })
    }
    
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  // Calculate day/night terminator position (simplified)
  // The terminator line moves based on UTC hour
  const utcHour = time.getUTCHours() + time.getUTCMinutes() / 60
  // At UTC 12:00, sun is over longitude 0. At UTC 0:00, sun is over longitude 180
  const sunLongitude = ((12 - utcHour) * 15 + 360) % 360
  // Convert to x position (0-100%)
  const dayStart = ((sunLongitude - 90 + 360) % 360) / 360 * 100
  const dayEnd = ((sunLongitude + 90 + 360) % 360) / 360 * 100
  
  // Get city data with current time
  const getCityData = (slug: string) => {
    const city = cities.find(c => c.slug === slug)
    if (!city) return null
    
    const localTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
    const timeStr = localTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
    const timeOfDay = getTimeOfDay(time, city.lat, city.lng)
    const theme = themes[timeOfDay]
    
    return { city, timeStr, timeOfDay, theme }
  }

  // Determine background theme based on saved city context
  const mainTimeOfDay = getTimeOfDay(time, contextCoords.lat, contextCoords.lng)
  const mainTheme = themes[mainTimeOfDay]
  const isLight = isLightTheme(mainTimeOfDay)

  return (
    <div className={`min-h-screen transition-colors duration-700 bg-gradient-to-br ${mainTheme.bg}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full backdrop-blur-xl ${isLight ? 'bg-white/70' : 'bg-slate-900/70'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src={isLight ? "/logo.svg" : "/logo-dark.svg"} 
              alt="whattime.city" 
              className="h-10 sm:h-12"
            />
          </Link>
          
          <div className="flex items-center gap-2">
            <Link 
              href="/"
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                isLight 
                  ? 'bg-white/60 text-slate-600 hover:bg-white/80' 
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
              } backdrop-blur-xl`}
            >
              🌍 Cities
            </Link>
            <Link 
              href="/tools"
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                isLight 
                  ? 'bg-white/60 text-slate-600 hover:bg-white/80' 
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
              } backdrop-blur-xl`}
            >
              🛠️ Tools
            </Link>
          </div>
        </div>
      </header>

      {/* Map Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <h1 className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${isLight ? 'text-slate-800' : 'text-white'}`}>
          🗺️ World Time Map
        </h1>
        
        <div className={`relative rounded-3xl overflow-hidden backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          {/* SVG Map */}
          <svg 
            viewBox="0 0 100 60" 
            className="w-full h-auto"
            style={{ minHeight: '400px' }}
          >
            {/* Ocean background */}
            <rect x="0" y="0" width="100" height="60" fill={isLight ? '#e0f2fe' : '#0c4a6e'} />
            
            {/* Night overlay - simplified day/night visualization */}
            <defs>
              <linearGradient id="nightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(15, 23, 42, 0.7)" />
                <stop offset="10%" stopColor="rgba(15, 23, 42, 0.3)" />
                <stop offset="20%" stopColor="rgba(15, 23, 42, 0)" />
                <stop offset="80%" stopColor="rgba(15, 23, 42, 0)" />
                <stop offset="90%" stopColor="rgba(15, 23, 42, 0.3)" />
                <stop offset="100%" stopColor="rgba(15, 23, 42, 0.7)" />
              </linearGradient>
            </defs>
            
            {/* Continents - simplified paths */}
            <g fill={isLight ? '#94a3b8' : '#475569'} opacity="0.6">
              {/* North America */}
              <path d="M5,20 Q10,15 20,18 L25,22 Q28,28 25,35 L22,40 Q18,45 15,42 L10,38 Q5,30 5,20" />
              
              {/* South America */}
              <path d="M22,50 Q28,48 32,52 L34,60 Q32,72 28,78 L24,75 Q20,65 22,50" />
              
              {/* Europe */}
              <path d="M44,22 Q50,20 55,22 L58,28 Q56,32 52,34 L46,32 Q43,28 44,22" />
              
              {/* Africa */}
              <path d="M44,38 Q50,36 56,40 L58,50 Q56,60 52,65 L48,68 Q42,60 44,38" />
              
              {/* Asia */}
              <path d="M55,18 Q65,15 80,20 L88,28 Q90,35 85,42 L75,48 Q65,50 60,45 L56,35 Q54,25 55,18" />
              
              {/* Australia */}
              <path d="M80,60 Q88,58 92,62 L94,70 Q90,76 84,74 L80,68 Q78,64 80,60" />
            </g>
            
            {/* Day/Night terminator line */}
            <line 
              x1={dayStart} y1="0" 
              x2={dayStart} y2="60" 
              stroke={isLight ? '#f59e0b' : '#fbbf24'} 
              strokeWidth="0.3" 
              strokeDasharray="1,1"
              opacity="0.6"
            />
            <line 
              x1={dayEnd > 100 ? dayEnd - 100 : dayEnd} y1="0" 
              x2={dayEnd > 100 ? dayEnd - 100 : dayEnd} y2="60" 
              stroke={isLight ? '#f59e0b' : '#fbbf24'} 
              strokeWidth="0.3" 
              strokeDasharray="1,1"
              opacity="0.6"
            />
            
            {/* City markers */}
            {mapCities.map(({ slug, x, y }) => {
              const data = getCityData(slug)
              if (!data) return null
              
              const { city, timeStr, timeOfDay, theme } = data
              const isHovered = hoveredCity === slug
              const isNight = timeOfDay === 'night'
              
              return (
                <g key={slug}>
                  {/* City dot */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isHovered ? 1.5 : 1}
                    fill={isNight ? '#22d3ee' : '#fbbf24'}
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredCity(slug)}
                    onMouseLeave={() => setHoveredCity(null)}
                  />
                  
                  {/* Pulse effect */}
                  <circle
                    cx={x}
                    cy={y}
                    r={2}
                    fill="none"
                    stroke={isNight ? '#22d3ee' : '#fbbf24'}
                    strokeWidth="0.3"
                    opacity="0.5"
                    className="animate-ping"
                    style={{ transformOrigin: `${x}px ${y}px` }}
                  />
                  
                  {/* Time label */}
                  <a href={`/${slug}`}>
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredCity(slug)}
                      onMouseLeave={() => setHoveredCity(null)}
                    >
                      <rect
                        x={x - 5}
                        y={y - 6}
                        width="10"
                        height="4"
                        rx="0.5"
                        fill={isHovered ? (isNight ? '#0e7490' : '#d97706') : (isNight ? '#164e63' : '#92400e')}
                        opacity={isHovered ? 1 : 0.9}
                      />
                      <text
                        x={x}
                        y={y - 3.2}
                        textAnchor="middle"
                        fontSize="2"
                        fill="white"
                        fontWeight="bold"
                        fontFamily="system-ui, sans-serif"
                      >
                        {timeStr}
                      </text>
                    </g>
                  </a>
                </g>
              )
            })}
          </svg>
          
          {/* Hovered City Info */}
          {hoveredCity && (() => {
            const data = getCityData(hoveredCity)
            if (!data) return null
            const { city, timeStr, timeOfDay } = data
            const timeIcons: Record<string, string> = { dawn: '🌅', day: '☀️', dusk: '🌆', night: '🌙' }
            
            return (
              <div className={`absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-64 p-4 rounded-2xl backdrop-blur-xl border ${
                isLight ? 'bg-white/80 border-white/50' : 'bg-slate-800/80 border-slate-700/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-xs uppercase tracking-wide ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {city.country}
                    </div>
                    <div className={`text-lg font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                      {city.city}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                      {timeStr}
                    </div>
                    <div className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                      {timeIcons[timeOfDay]} {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}
                    </div>
                  </div>
                </div>
                <Link 
                  href={`/${hoveredCity}`}
                  className={`mt-3 block w-full text-center py-2 rounded-full text-sm font-medium transition-all ${
                    isLight 
                      ? 'bg-slate-800 text-white hover:bg-slate-700' 
                      : 'bg-white text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  View Details →
                </Link>
              </div>
            )
          })()}
        </div>
        
        {/* Legend */}
        <div className={`mt-6 flex flex-wrap justify-center gap-6 text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span>Daytime</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <span>Nighttime</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 border-t-2 border-dashed border-yellow-500"></span>
            <span>Day/Night Line</span>
          </div>
        </div>
        
        {/* City Grid */}
        <div className="mt-8">
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
            All Cities on Map
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {mapCities.map(({ slug }) => {
              const data = getCityData(slug)
              if (!data) return null
              const { city, timeStr, timeOfDay } = data
              const isNight = timeOfDay === 'night'
              
              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className={`p-3 rounded-xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${
                    isLight 
                      ? 'bg-white/60 border-white/50 hover:bg-white/80' 
                      : 'bg-slate-800/60 border-slate-700/50 hover:bg-slate-700/60'
                  }`}
                >
                  <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    {city.country}
                  </div>
                  <div className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>
                    {city.city}
                  </div>
                  <div className={`text-lg font-bold ${isNight ? 'text-cyan-400' : 'text-amber-500'}`}>
                    {timeStr}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
