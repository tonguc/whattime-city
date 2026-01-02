'use client'

import { useThemeClasses } from '@/lib/useThemeClasses'

interface AnalogClockProps {
  time: Date
}

const accentColors: Record<string, string> = {
  cyan: '#06b6d4',
  amber: '#f59e0b',
  rose: '#f43f5e',
  purple: '#a855f7'
}

export default function AnalogClock({ time }: AnalogClockProps) {
  const { isLight, theme } = useThemeClasses()
  
  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours() % 12
  
  const secondDeg = (seconds / 60) * 360
  const minuteDeg = ((minutes + seconds / 60) / 60) * 360
  const hourDeg = ((hours + minutes / 60) / 12) * 360
  
  const clockFace = isLight ? '#ffffff' : '#1e293b'
  const handColor = isLight ? '#1e293b' : '#f8fafc'
  const accent = accentColors[theme.accent] || '#f59e0b'

  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72">
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
        <defs>
          <filter id="clockShadow">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.2"/>
          </filter>
        </defs>
        
        <circle cx="100" cy="100" r="96" fill={clockFace} filter="url(#clockShadow)"/>
        
        {/* Saat işaretleri */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180)
          const r1 = i % 3 === 0 ? 70 : 76
          const r2 = 84
          return (
            <line 
              key={i}
              x1={100 + r1 * Math.cos(angle)}
              y1={100 + r1 * Math.sin(angle)}
              x2={100 + r2 * Math.cos(angle)}
              y2={100 + r2 * Math.sin(angle)}
              stroke={handColor}
              strokeWidth={i % 3 === 0 ? 3 : 1}
              strokeLinecap="round"
              opacity={i % 3 === 0 ? 1 : 0.4}
            />
          )
        })}
        
        {/* Saat ibresi */}
        <line
          x1="100" y1="100"
          x2="100" y2="50"
          stroke={handColor}
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${hourDeg}, 100, 100)`}
        />
        
        {/* Dakika ibresi */}
        <line
          x1="100" y1="100"
          x2="100" y2="30"
          stroke={handColor}
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${minuteDeg}, 100, 100)`}
        />
        
        {/* Saniye ibresi */}
        <line
          x1="100" y1="110"
          x2="100" y2="25"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${secondDeg}, 100, 100)`}
        />
        
        {/* Merkez nokta */}
        <circle cx="100" cy="100" r="6" fill={accent} />
        <circle cx="100" cy="100" r="3" fill={clockFace} />
      </svg>
    </div>
  )
}
