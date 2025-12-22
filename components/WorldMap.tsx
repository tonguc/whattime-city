'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cities, City } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes } from '@/lib/themes'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'

// 50+ Major cities with coordinates (x: 0-100, y: 0-60)
const mapCities = [
  // North America
  { slug: 'new-york', x: 24, y: 36 },
  { slug: 'los-angeles', x: 10, y: 39 },
  { slug: 'chicago', x: 20, y: 35 },
  { slug: 'miami', x: 22, y: 44 },
  { slug: 'toronto', x: 22, y: 33 },
  { slug: 'vancouver', x: 9, y: 30 },
  { slug: 'mexico-city', x: 16, y: 48 },
  { slug: 'houston', x: 17, y: 42 },
  
  // South America
  { slug: 'sao-paulo', x: 31, y: 64 },
  { slug: 'buenos-aires', x: 28, y: 72 },
  { slug: 'rio-de-janeiro', x: 33, y: 62 },
  { slug: 'bogota', x: 21, y: 53 },
  { slug: 'lima', x: 20, y: 60 },
  { slug: 'santiago', x: 24, y: 70 },
  
  // Europe
  { slug: 'london', x: 47, y: 30 },
  { slug: 'paris', x: 49, y: 32 },
  { slug: 'berlin', x: 52, y: 29 },
  { slug: 'madrid', x: 46, y: 36 },
  { slug: 'rome', x: 52, y: 35 },
  { slug: 'amsterdam', x: 49, y: 29 },
  { slug: 'vienna', x: 53, y: 32 },
  { slug: 'stockholm', x: 54, y: 24 },
  { slug: 'warsaw', x: 55, y: 29 },
  { slug: 'athens', x: 56, y: 38 },
  { slug: 'lisbon', x: 44, y: 37 },
  { slug: 'zurich', x: 50, y: 32 },
  
  // Russia & Eastern Europe
  { slug: 'moscow', x: 58, y: 26 },
  { slug: 'istanbul', x: 55, y: 36 },
  
  // Middle East
  { slug: 'dubai', x: 63, y: 44 },
  { slug: 'tel-aviv', x: 57, y: 40 },
  { slug: 'riyadh', x: 61, y: 44 },
  { slug: 'doha', x: 62, y: 44 },
  
  // Africa
  { slug: 'cairo', x: 56, y: 42 },
  { slug: 'johannesburg', x: 55, y: 68 },
  { slug: 'lagos', x: 48, y: 52 },
  { slug: 'nairobi', x: 58, y: 56 },
  { slug: 'casablanca', x: 45, y: 40 },
  { slug: 'cape-town', x: 53, y: 72 },
  
  // South Asia
  { slug: 'mumbai', x: 68, y: 48 },
  { slug: 'delhi', x: 69, y: 42 },
  { slug: 'bangalore', x: 69, y: 52 },
  { slug: 'kolkata', x: 72, y: 46 },
  
  // Southeast Asia
  { slug: 'singapore', x: 76, y: 56 },
  { slug: 'bangkok', x: 74, y: 50 },
  { slug: 'kuala-lumpur', x: 75, y: 54 },
  { slug: 'jakarta', x: 77, y: 58 },
  { slug: 'manila', x: 80, y: 50 },
  { slug: 'ho-chi-minh-city', x: 76, y: 52 },
  
  // East Asia
  { slug: 'tokyo', x: 86, y: 38 },
  { slug: 'hong-kong', x: 79, y: 46 },
  { slug: 'shanghai', x: 81, y: 40 },
  { slug: 'beijing', x: 80, y: 36 },
  { slug: 'seoul', x: 83, y: 38 },
  { slug: 'taipei', x: 81, y: 44 },
  
  // Oceania
  { slug: 'sydney', x: 89, y: 70 },
  { slug: 'melbourne', x: 88, y: 74 },
  { slug: 'auckland', x: 96, y: 74 },
  { slug: 'perth', x: 80, y: 70 },
  { slug: 'brisbane', x: 90, y: 66 },
]

export default function WorldMap() {
  const { theme: mainTheme, isLight, time } = useCityContext()
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const [panX, setPanX] = useState(0)
  const [panY, setPanY] = useState(0)
  
  // Close popup when clicking outside
  const handleMapClick = (e: React.MouseEvent) => {
    // Only close if clicking on the map background, not on a city
    if ((e.target as HTMLElement).tagName === 'rect' || (e.target as HTMLElement).tagName === 'path') {
      setSelectedCity(null)
    }
  }
  
  const handleZoomIn = () => setZoom(z => Math.min(z + 0.5, 3))
  const handleZoomOut = () => {
    setZoom(z => Math.max(z - 0.5, 1))
    if (zoom <= 1.5) {
      setPanX(0)
      setPanY(0)
    }
  }
  const handleReset = () => {
    setZoom(1)
    setPanX(0)
    setPanY(0)
  }
  
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
    const timeOfDay = getTimeOfDay(time, city.lat, city.lng, city.timezone)
    const theme = themes[timeOfDay]
    
    return { city, timeStr, timeOfDay, theme }
  }

  return (
    <div className={`min-h-screen transition-colors duration-700 bg-gradient-to-br ${mainTheme.bg}`}>
      {/* Shared Header */}
      <Header />

      {/* Map Container */}
      <div className="relative max-w-6xl mx-auto px-4 py-8">
        <h1 className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${isLight ? 'text-slate-800' : 'text-white'}`}>
          🗺️ World Time Map
        </h1>
        
        <div className={`relative rounded-3xl overflow-hidden backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          {/* Zoom Controls */}
          <div className={`absolute top-4 right-4 z-20 flex flex-col gap-2`}>
            <button
              onClick={handleZoomIn}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold transition-all ${
                isLight 
                  ? 'bg-white/80 text-slate-700 hover:bg-white shadow-lg' 
                  : 'bg-slate-700/80 text-white hover:bg-slate-600 shadow-lg'
              }`}
            >
              +
            </button>
            <button
              onClick={handleZoomOut}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold transition-all ${
                isLight 
                  ? 'bg-white/80 text-slate-700 hover:bg-white shadow-lg' 
                  : 'bg-slate-700/80 text-white hover:bg-slate-600 shadow-lg'
              }`}
            >
              −
            </button>
            {zoom > 1 && (
              <button
                onClick={handleReset}
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all ${
                  isLight 
                    ? 'bg-white/80 text-slate-700 hover:bg-white shadow-lg' 
                    : 'bg-slate-700/80 text-white hover:bg-slate-600 shadow-lg'
                }`}
              >
                ↺
              </button>
            )}
          </div>
          
          {/* Zoom level indicator */}
          {zoom > 1 && (
            <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-sm font-medium ${
              isLight ? 'bg-white/80 text-slate-700' : 'bg-slate-700/80 text-white'
            }`}>
              {zoom.toFixed(1)}x
            </div>
          )}

          {/* SVG Map */}
          <div className="overflow-hidden" style={{ minHeight: '450px' }}>
            <svg 
              viewBox="0 0 100 60" 
              className="w-full h-auto cursor-pointer transition-transform duration-300"
              style={{ 
                minHeight: '450px',
                transform: `scale(${zoom}) translate(${panX}px, ${panY}px)`,
                transformOrigin: 'center center'
              }}
              onClick={handleMapClick}
            >
              {/* Premium Ocean gradient background */}
              <defs>
                <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={isLight ? '#bae6fd' : '#0c4a6e'} />
                  <stop offset="50%" stopColor={isLight ? '#e0f2fe' : '#082f49'} />
                  <stop offset="100%" stopColor={isLight ? '#bae6fd' : '#0c4a6e'} />
                </linearGradient>
                <linearGradient id="landGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={isLight ? '#64748b' : '#334155'} />
                  <stop offset="100%" stopColor={isLight ? '#94a3b8' : '#475569'} />
                </linearGradient>
                <filter id="landShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.5" floodOpacity="0.3"/>
                </filter>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Ocean background */}
              <rect x="0" y="0" width="100" height="60" fill="url(#oceanGradient)" />
              
              {/* Grid lines for premium look */}
              <g stroke={isLight ? '#94a3b8' : '#334155'} strokeWidth="0.1" opacity="0.3">
                {[10, 20, 30, 40, 50, 60, 70, 80, 90].map(x => (
                  <line key={`v${x}`} x1={x} y1="0" x2={x} y2="60" />
                ))}
                {[10, 20, 30, 40, 50].map(y => (
                  <line key={`h${y}`} x1="0" y1={y} x2="100" y2={y} />
                ))}
              </g>
              
              {/* Continents - more detailed paths */}
              <g fill="url(#landGradient)" filter="url(#landShadow)">
                {/* North America */}
                <path d="M5,15 Q8,12 15,14 L22,16 Q26,18 28,22 L30,28 Q28,32 25,35 L23,38 Q20,42 18,44 L15,43 Q12,40 10,36 L8,30 Q5,22 5,15 M17,44 L19,48 Q18,50 16,49 L15,46 Q16,45 17,44" />
                
                {/* South America */}
                <path d="M20,52 Q24,50 28,52 L32,56 Q34,62 32,68 L30,72 Q28,76 26,75 L24,70 Q22,64 21,58 L20,52" />
                
                {/* Europe */}
                <path d="M44,20 Q48,18 52,19 L56,22 Q58,26 56,30 L54,32 Q50,34 47,32 L45,28 Q43,24 44,20" />
                
                {/* Africa */}
                <path d="M44,36 Q48,34 54,36 L58,42 Q60,50 58,58 L56,64 Q52,70 48,68 L46,62 Q44,52 44,36" />
                
                {/* Asia */}
                <path d="M56,14 Q64,12 75,14 L85,18 Q90,24 88,32 L86,38 Q82,44 76,48 L70,50 Q64,50 60,46 L58,40 Q56,30 56,14" />
                
                {/* Australia */}
                <path d="M78,60 Q84,58 90,60 L94,66 Q94,72 90,76 L84,76 Q80,74 78,68 L78,60" />
                
                {/* Greenland */}
                <path d="M28,8 Q32,6 36,8 L38,12 Q36,16 32,14 L28,10 Q27,9 28,8" />
                
                {/* UK/Ireland */}
                <path d="M44,24 Q46,23 47,25 L46,27 Q44,27 44,24" />
                
                {/* Japan */}
                <path d="M86,34 Q88,32 89,34 L88,38 Q87,40 86,38 L86,34" />
                
                {/* New Zealand */}
                <path d="M94,72 Q96,70 97,72 L96,76 Q94,76 94,72" />
              </g>
            
              {/* Day/Night terminator line */}
              <line 
                x1={dayStart} y1="0" 
                x2={dayStart} y2="60" 
                stroke={isLight ? '#f59e0b' : '#fbbf24'} 
                strokeWidth="0.4" 
                strokeDasharray="1,1"
                opacity="0.7"
              />
              <line 
                x1={dayEnd > 100 ? dayEnd - 100 : dayEnd} y1="0" 
                x2={dayEnd > 100 ? dayEnd - 100 : dayEnd} y2="60" 
                stroke={isLight ? '#f59e0b' : '#fbbf24'} 
                strokeWidth="0.4" 
                strokeDasharray="1,1"
                opacity="0.7"
              />
            
            {/* City markers */}
            {mapCities.map(({ slug, x, y }) => {
              const data = getCityData(slug)
              if (!data) return null
              
              const { city, timeStr, timeOfDay, theme } = data
              const isSelected = selectedCity === slug
              const isNight = timeOfDay === 'night'
              const dotColor = isNight ? '#22d3ee' : '#fbbf24'
              const bgColor = isNight ? '#164e63' : '#92400e'
              const bgColorHover = isNight ? '#0e7490' : '#b45309'
              
              return (
                <g key={slug} className="cursor-pointer" onClick={(e) => { e.stopPropagation(); setSelectedCity(slug); }} filter={isSelected ? 'url(#glow)' : undefined}>
                  {/* Glow ring */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? 2.5 : 1.8}
                    fill="none"
                    stroke={dotColor}
                    strokeWidth="0.2"
                    opacity={isSelected ? 0.8 : 0.4}
                  />
                  
                  {/* City dot */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? 1.2 : 0.8}
                    fill={dotColor}
                    className="transition-all duration-200"
                  />
                  
                  {/* Time label */}
                  <g>
                    <rect
                      x={x - 5}
                      y={y - 6}
                      width="10"
                      height="4"
                      rx="0.8"
                      fill={isSelected ? bgColorHover : bgColor}
                      opacity={isSelected ? 1 : 0.9}
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
                </g>
              )
            })}
            </svg>
          </div>
          
          {/* Selected City Info */}
          {selectedCity && (() => {
            const data = getCityData(selectedCity)
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
                  href={`/${selectedCity}`}
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
        
        {/* SEO Content Section */}
        <div className={`mt-8 rounded-2xl p-6 ${isLight ? 'bg-white/60' : 'bg-slate-800/40'}`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Interactive World Time Zone Map
          </h2>
          <div className={`space-y-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <p>
              Our interactive world time map displays current local time across 50+ major cities worldwide. 
              The map features a real-time day/night terminator line showing which parts of the world are 
              experiencing daylight or darkness at any given moment.
            </p>
            <p>
              Each city marker shows the current local time with color coding: yellow dots indicate daytime 
              hours while cyan dots represent nighttime. Click on any city to see detailed information 
              including the exact time, time of day status, and a link to the full city page with weather, 
              sunrise/sunset times, and more.
            </p>
            <h3 className={`text-lg font-medium mt-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
              Understanding Time Zones
            </h3>
            <p>
              The world is divided into 24 primary time zones, each roughly 15 degrees of longitude wide. 
              As Earth rotates, different regions experience different times of day. The International Date 
              Line in the Pacific Ocean marks where one calendar day becomes the next.
            </p>
            <p>
              Major business hubs like New York, London, Tokyo, and Sydney often need to coordinate across 
              multiple time zones. Our map helps visualize these differences at a glance, making it easier 
              to schedule international meetings, calls, and events.
            </p>
            <h3 className={`text-lg font-medium mt-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
              Day and Night Visualization
            </h3>
            <p>
              The dashed yellow lines on the map represent the approximate boundaries between day and night. 
              These terminator lines move continuously as Earth rotates, completing a full cycle every 24 hours. 
              The position changes throughout the year due to Earth's axial tilt, affecting how much daylight 
              each region receives.
            </p>
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
        
        {/* Additional SEO Content */}
        <div className={`mt-8 rounded-2xl p-6 ${isLight ? 'bg-white/60' : 'bg-slate-800/40'}`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            How to Use the World Clock Map
          </h2>
          <div className={`space-y-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <p>
              <strong>Zoom Controls:</strong> Use the + and − buttons in the top right corner to zoom in 
              for a closer look at specific regions. The reset button (↺) returns to the default view.
            </p>
            <p>
              <strong>City Selection:</strong> Click on any city dot to see a popup with the city name, 
              country, current time, and time of day. From there, you can navigate to the detailed city 
              page for comprehensive information.
            </p>
            <p>
              <strong>Time Comparison:</strong> Use this map alongside our Time Converter tool to calculate 
              exact time differences between cities and find optimal meeting times across different time zones.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
