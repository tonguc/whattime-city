'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function LiechtensteinClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Vaduz', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Vaduz', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      <div className={card}>
        <div className="mb-1 text-sm font-medium uppercase tracking-wider text-blue-800">Liechtenstein Time &mdash; CET / CEST</div>
        <div className={`text-4xl font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <div className={`mt-1 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</div>
        <div className={`mt-2 text-xs ${mutedText}`}>CET UTC+1 &middot; CEST UTC+2 in summer &middot; Observes DST</div>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'CET / CEST'],
            ['DST', 'Observed (Mar\u2013Oct)'],
            ['Population', '~39,000'],
            ['Dial Code', '+423'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Did You Know?</h3>
        <ul className={`list-disc space-y-2 pl-5 text-sm ${subText}`}>
          <li>Liechtenstein is the 6th smallest country in the world and one of only two doubly landlocked nations (the other is Uzbekistan).</li>
          <li>Vaduz Castle, perched above the capital, is the official residence of the Prince of Liechtenstein.</li>
          <li>The country is sometimes called the &ldquo;false teeth capital of the world&rdquo; &mdash; dental products are a major export.</li>
          <li>Liechtenstein has one of the highest GDP per capita figures globally, driven by finance and manufacturing.</li>
          <li>The principality abolished its army in 1868 and has had no military force since.</li>
        </ul>
      </div>

      {/* Municipalities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Municipalities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Vaduz', '5.7K', 'Capital'],
            ['Schaan', '6K', 'Largest'],
            ['Triesen', '5.2K', ''],
            ['Balzers', '4.7K', ''],
            ['Eschen', '4.4K', ''],
            ['Mauren', '4.2K', ''],
          ].map(([place, pop, note]) => (
            <div key={place} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{place}</div>
              <div className={`text-xs ${mutedText}`}>{pop}{note ? ` \u00B7 ${note}` : ''}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
