'use client'

import { Theme } from '@/lib/themes'

interface DigitalClockProps {
  time: Date
  theme: string
  themeData: Theme
  use12Hour: boolean
}

export default function DigitalClock({ time, theme, themeData, use12Hour }: DigitalClockProps) {
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
  
  const isLight = ['day', 'light'].includes(theme)
  
  const mainColor = isLight ? 'text-slate-800' : 'text-white'
  const secColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const accentColor = themeData.accentClass
  
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
        <div className="flex items-center" style={{ fontVariantNumeric: 'tabular-nums' }}>
          <span className={`inline-block text-right ${mainColor}`} style={{ width: '1.15em' }}>{h}</span>
          <span className={`${accentColor} animate-pulse`}>:</span>
          <span className={`inline-block text-center ${mainColor}`} style={{ width: '1.15em' }}>{m}</span>
          <span className={`${accentColor} animate-pulse`}>:</span>
          <span className={`inline-block text-center ${secColor}`} style={{ width: '1.15em' }}>{s}</span>
          
          {/* AM/PM with fixed width - always takes space */}
          <span 
            className={`font-medium ${use12Hour ? secColor : 'text-transparent'}`}
            style={{ 
              fontSize: '0.3em',
              width: '2.2em',
              marginLeft: '0.2em',
              textAlign: 'left'
            }}
          >
            {use12Hour ? period : 'AM'}
          </span>
        </div>
      </div>
    </div>
  )
}
