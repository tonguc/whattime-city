'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SierraLeoneClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Freetown', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Freetown', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      <div className="rounded-2xl bg-green-700 p-6 text-center text-white">
        <p className="mb-1 text-sm font-medium uppercase tracking-wider opacity-80">Current Time in Sierra Leone</p>
        <p className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        <p className="mt-2 text-sm opacity-80">{mounted ? date : '\u00A0'}</p>
        <p className="mt-1 text-xs opacity-60">GMT &middot; UTC+0 &middot; No DST</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Time Zone', value: 'GMT (UTC+0)' },
            { label: 'Population', value: '~8.6 Million' },
            { label: 'Capital', value: 'Freetown' },
            { label: 'DST', value: 'Not Observed' },
          ].map((f) => (
            <div key={f.label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{f.label}</p>
              <p className={`text-sm font-semibold ${heading}`}>{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Freedom & Natural Beauty */}
      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Freedom &amp; Natural Beauty</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Freetown was founded in 1792 by freed slaves from Britain and North America, giving the city &mdash; and the nation &mdash; its name.
          The stunning Lumley Beach stretches along Freetown&apos;s coast, while the Banana Islands offer secluded tropical escapes.
          Sierra Leone&apos;s diamond industry has shaped its modern history, and responsible mining initiatives now drive economic growth.
          The Tacugama Chimpanzee Sanctuary protects western chimpanzees in the rainforest hills above the capital.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { city: 'Freetown', pop: '1.2M', note: 'Capital' },
            { city: 'Bo', pop: '234K', note: 'Southern hub' },
            { city: 'Kenema', pop: '200K', note: 'Eastern province' },
            { city: 'Makeni', pop: '126K', note: 'Northern centre' },
            { city: 'Koidu', pop: '124K', note: 'Diamond district' },
            { city: 'Lunsar', pop: '30K', note: 'Mining town' },
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
