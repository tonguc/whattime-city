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
  
  const h = displayHours.toString().padStart(2, '0')
  const m = minutes.toString().padStart(2, '0')
  const s = seconds.toString().padStart(2, '0')
  
  const isLight = ['day', 'light'].includes(theme)
  
  const mainColor = isLight ? 'text-slate-800' : 'text-white'
  const secColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const accentColor = themeData.accentClass
  
  const Segment = ({ value, className }: { value: string, className: string }) => (
    <span 
      className={`inline-block text-center ${className}`}
      style={{ width: '1.3em' }}
    >
      {value}
    </span>
  )
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center font-semibold" style={{ fontSize: 'clamp(60px, 12vw, 96px)' }}>
        <Segment value={h} className={mainColor} />
        <span className={`${accentColor} animate-pulse`}>:</span>
        <Segment value={m} className={mainColor} />
        <span className={`${accentColor} animate-pulse`}>:</span>
        <Segment value={s} className={secColor} />
        {use12Hour && (
          <span className={`ml-2 text-2xl font-medium ${secColor}`} style={{ fontSize: 'clamp(18px, 3vw, 28px)' }}>
            {period}
          </span>
        )}
      </div>
    </div>
  )
}
