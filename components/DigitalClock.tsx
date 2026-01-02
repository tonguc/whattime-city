'use client'

import { useThemeClasses } from '@/lib/useThemeClasses'
import { useCityContext } from '@/lib/CityContext'

interface DigitalClockProps {
  time: Date
}

export default function DigitalClock({ time }: DigitalClockProps) {
  const { text, textMuted, accent, isLight } = useThemeClasses()
  const { use12Hour } = useCityContext()
  
  const hours24 = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  
  let displayHours: number
  let period = ''
  
  if (use12Hour) {
    period = hours24 >= 12 ? 'PM' : 'AM'
    displayHours = hours24 % 12 || 12
  } else {
    displayHours = hours24
  }
  
  const h = use12Hour 
    ? displayHours.toString() // No padding for 12h
    : displayHours.toString().padStart(2, '0') // Pad for 24h
  const m = minutes.toString().padStart(2, '0')
  const s = seconds.toString().padStart(2, '0')
  
  return (
    <div className="flex flex-col items-center">
      {/* Fixed width container to prevent layout shift */}
      <div 
        className="flex items-center justify-center font-semibold"
        style={{ 
          fontSize: 'clamp(52px, 11vw, 104px)',
        }}
      >
        {/* Time digits with fixed width */}
        <div className="flex items-center justify-center" style={{ fontVariantNumeric: 'tabular-nums' }}>
          <span className={`inline-block text-right ${text}`} style={{ width: '1.15em' }}>{h}</span>
          <span className={`${accent} animate-pulse`}>:</span>
          <span className={`inline-block text-center ${text}`} style={{ width: '1.15em' }}>{m}</span>
          <span className={`${accent} animate-pulse`}>:</span>
          <span className={`inline-block text-center ${textMuted}`} style={{ width: '1.15em' }}>{s}</span>
          
          {/* AM/PM - only show in 12h mode */}
          {use12Hour && (
            <span 
              className={`font-medium ${textMuted}`}
              style={{ 
                fontSize: '0.3em',
                width: '2.2em',
                marginLeft: '0.2em',
                textAlign: 'left'
              }}
            >
              {period}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
