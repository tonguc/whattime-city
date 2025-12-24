'use client'

import { City } from '@/lib/cities'
import { mapCities } from './data'

// Type for city data returned by getCityData
interface CityData {
  city: City
  timeStr: string
  timeOfDay: string
  theme: {
    bg: string
    text: string
    textMuted: string
    card: string
    accent: string
    accentText: string
  }
}

interface MapSVGProps {
  isLight: boolean
  zoom: number
  panX: number
  panY: number
  dayStart: number
  dayEnd: number
  selectedCity: string | null
  onMapClick: (e: React.MouseEvent) => void
  onCitySelect: (slug: string) => void
  getCityData: (slug: string) => CityData | null
}

export default function MapSVG({
  isLight,
  zoom,
  panX,
  panY,
  dayStart,
  dayEnd,
  selectedCity,
  onMapClick,
  onCitySelect,
  getCityData,
}: MapSVGProps) {
  return (
    <div className="overflow-hidden" style={{ minHeight: '450px' }}>
      <svg 
        viewBox="0 0 100 60" 
        className="w-full h-auto cursor-pointer transition-transform duration-300"
        style={{ 
          minHeight: '450px',
          transform: `scale(${zoom}) translate(${panX}px, ${panY}px)`,
          transformOrigin: 'center center'
        }}
        onClick={onMapClick}
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
          
          const { timeStr, timeOfDay } = data
          const isSelected = selectedCity === slug
          const isNight = timeOfDay === 'night'
          const dotColor = isNight ? '#22d3ee' : '#fbbf24'
          const bgColor = isNight ? '#164e63' : '#92400e'
          const bgColorHover = isNight ? '#0e7490' : '#b45309'
          
          return (
            <g 
              key={slug} 
              className="cursor-pointer" 
              onClick={(e) => { e.stopPropagation(); onCitySelect(slug); }} 
              filter={isSelected ? 'url(#glow)' : undefined}
            >
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
  )
}
