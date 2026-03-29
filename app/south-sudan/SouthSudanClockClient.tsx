'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SouthSudanClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Juba', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Juba', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      <div className="rounded-2xl bg-blue-800 p-6 text-center text-white">
        <p className="mb-1 text-sm font-medium uppercase tracking-wider opacity-80">Current Time in South Sudan</p>
        <p className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        <p className="mt-2 text-sm opacity-80">{mounted ? date : '\u00A0'}</p>
        <p className="mt-1 text-xs opacity-60">CAT &middot; UTC+2 &middot; No DST</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Time Zone', value: 'CAT (UTC+2)' },
            { label: 'Population', value: '~11.4 Million' },
            { label: 'Capital', value: 'Juba' },
            { label: 'DST', value: 'Not Observed' },
          ].map((f) => (
            <div key={f.label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{f.label}</p>
              <p className={`text-sm font-semibold ${heading}`}>{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* World's Newest Nation */}
      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>World&apos;s Newest Nation</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          South Sudan gained independence on 9&nbsp;July&nbsp;2011, making it the world&apos;s youngest internationally recognised country.
          The Sudd &mdash; one of the largest wetlands on Earth &mdash; sprawls across the centre of the country, fed by the White Nile.
          Boma National Park hosts one of Africa&apos;s great wildlife migrations, with vast herds of white-eared kob and tiang antelope.
          The nation holds significant oil reserves, which account for the majority of government revenue and export earnings.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { city: 'Juba', pop: '525K', note: 'Capital' },
            { city: 'Malakal', pop: '160K', note: 'Upper Nile' },
            { city: 'Wau', pop: '151K', note: 'Western hub' },
            { city: 'Yei', pop: '118K', note: 'Green belt' },
            { city: 'Bor', pop: '45K', note: 'Jonglei state' },
            { city: 'Rumbek', pop: '25K', note: 'Lakes region' },
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
