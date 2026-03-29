'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function DrCongoClockClient() {
  const { isLight } = useCityContext()
  const [westTime, setWestTime] = useState('--:--:--')
  const [eastTime, setEastTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const opts: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }
      setWestTime(now.toLocaleTimeString('en-US', { ...opts, timeZone: 'Africa/Kinshasa' }))
      setEastTime(now.toLocaleTimeString('en-US', { ...opts, timeZone: 'Africa/Lubumbashi' }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Kinshasa', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white p-6' : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50 p-4' : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      {/* Dual Live Clocks */}
      <div className={card}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={`${innerCard} text-center`}>
            <p className={`text-xs font-medium uppercase tracking-wider ${mutedText}`}>West &mdash; WAT &middot; UTC+1</p>
            <p className={`mt-2 text-3xl font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? westTime : '--:--:--'}</p>
            <p className={`text-sm ${subText}`}>Kinshasa</p>
          </div>
          <div className={`${innerCard} text-center`}>
            <p className={`text-xs font-medium uppercase tracking-wider ${mutedText}`}>East &mdash; CAT &middot; UTC+2</p>
            <p className={`mt-2 text-3xl font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? eastTime : '--:--:--'}</p>
            <p className={`text-sm ${subText}`}>Lubumbashi</p>
          </div>
        </div>
        <p className={`mt-3 text-center text-sm ${subText}`}>{mounted ? date : '\u00A0'}</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <ul className={`mt-2 list-disc list-inside space-y-1 text-sm ${subText}`}>
          <li>Population: ~102 million &mdash; 4th most populous in Africa</li>
          <li>Two time zones: WAT (UTC+1) in the west, CAT (UTC+2) in the east</li>
          <li>No daylight saving time observed</li>
          <li>2nd largest country in Africa by area (2.34&nbsp;million&nbsp;km&sup2;)</li>
          <li>Largest French-speaking country by population worldwide</li>
        </ul>
      </div>

      {/* Congo River & Natural Heritage */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Natural Heritage</h3>
        <p className={`mt-2 text-sm ${subText}`}>
          The Congo River, Africa&apos;s deepest and second-longest river, defines much of the country&apos;s geography.
          Virunga National Park &mdash; a UNESCO World Heritage Site &mdash; is home to critically endangered mountain gorillas.
          The DR Congo also supplies roughly 70% of the world&apos;s cobalt, a critical mineral for lithium-ion batteries.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Kinshasa', pop: '17M', tz: 'WAT' },
            { name: 'Lubumbashi', pop: '2.8M', tz: 'CAT' },
            { name: 'Mbuji-Mayi', pop: '2.5M', tz: 'CAT' },
            { name: 'Kisangani', pop: '1.6M', tz: 'CAT' },
            { name: 'Bukavu', pop: '870K', tz: 'CAT' },
            { name: 'Goma', pop: '670K', tz: 'CAT' },
          ].map(c => (
            <div key={c.name} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{c.name}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop} &middot; {c.tz}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
