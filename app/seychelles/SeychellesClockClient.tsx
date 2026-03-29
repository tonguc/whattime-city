'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SeychellesClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Indian/Mahe', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Indian/Mahe', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <div className="rounded-2xl bg-teal-700 p-6 text-center text-white">
        <p className="mb-1 text-sm font-medium uppercase tracking-wider opacity-80">Current Time in Seychelles</p>
        <p className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        <p className="mt-2 text-sm opacity-80">{mounted ? date : '\u00A0'}</p>
        <p className="mt-1 text-xs opacity-60">SCT &middot; UTC+4 &middot; No DST</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Time Zone', value: 'SCT (UTC+4)' },
            { label: 'Population', value: '~100,000' },
            { label: 'Capital', value: 'Victoria' },
            { label: 'DST', value: 'Not Observed' },
          ].map((f) => (
            <div key={f.label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{f.label}</p>
              <p className={`text-sm font-semibold ${heading}`}>{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Island Paradise */}
      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Island Paradise</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Seychelles comprises 115 granite and coral islands scattered across the western Indian Ocean, with the highest HDI in Africa.
          The Vall&eacute;e de Mai (UNESCO) on Praslin shelters the legendary coco de mer palm, producing the world&apos;s largest seed.
          Aldabra Atoll, also a UNESCO site, is home to over 100,000 giant tortoises &mdash; the largest population of any atoll on Earth.
          With roughly 100,000 residents, Seychelles is Africa&apos;s smallest country by population, yet a global leader in luxury eco-tourism.
        </p>
      </div>

      {/* Major Settlements */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Settlements</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { city: 'Victoria', pop: '26K', note: 'Capital, Mah\u00e9' },
            { city: 'Anse Boileau', pop: '4.5K', note: 'West Mah\u00e9' },
            { city: 'Beau Vallon', pop: '4K', note: 'Beach resort' },
            { city: 'Anse Royale', pop: '4K', note: 'South Mah\u00e9' },
            { city: 'Baie Lazare', pop: '3.8K', note: 'Scenic coast' },
            { city: 'Takamaka', pop: '2.5K', note: 'South district' },
          ].map((c) => (
            <div key={c.city} className={innerCard}>
              <p className={`text-sm font-semibold ${heading}`}>{c.city}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop} &middot; {c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
