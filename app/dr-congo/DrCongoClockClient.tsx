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
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in DR Congo</div>
          <div className="flex justify-center gap-8 mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? westTime : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">West (WAT &middot; UTC+1)</div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? eastTime : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">East (CAT &middot; UTC+2)</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">WAT/CAT &middot; UTC+1 / UTC+2</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">2 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~102M</span>
          </div>
        </div>
      </section>

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
