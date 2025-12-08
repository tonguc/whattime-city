'use client'

import { Theme } from '@/lib/themes'

interface DigitalClockProps {
  time: Date
  theme: string
  themeData: Theme
}

export default function DigitalClock({ time, theme, themeData }: DigitalClockProps) {
  const h = time.getHours().toString().padStart(2, '0')
  const m = time.getMinutes().toString().padStart(2, '0')
  const s = time.getSeconds().toString().padStart(2, '0')
  
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
    <div className="flex items-center justify-center font-semibold" style={{ fontSize: 'clamp(78px, 15vw, 102px)' }}>
      <Segment value={h} className={mainColor} />
      <span className={`${accentColor} animate-pulse`}>:</span>
      <Segment value={m} className={mainColor} />
      <span className={`${accentColor} animate-pulse`}>:</span>
      <Segment value={s} className={secColor} />
    </div>
  )
}
