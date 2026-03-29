'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SenegalClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Dakar', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Dakar', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      <div className="rounded-2xl bg-green-800 p-6 text-center text-white">
        <p className="mb-1 text-sm font-medium uppercase tracking-wider opacity-80">Current Time in Senegal</p>
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
            { label: 'Population', value: '~18 Million' },
            { label: 'Capital', value: 'Dakar' },
            { label: 'DST', value: 'Not Observed' },
          ].map((f) => (
            <div key={f.label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{f.label}</p>
              <p className={`text-sm font-semibold ${heading}`}>{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* West Africa's Gateway */}
      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>West Africa&apos;s Gateway</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Dakar, perched on Africa&apos;s westernmost point, serves as a major regional hub for commerce and culture.
          Gor&eacute;e Island (UNESCO World Heritage) stands as a powerful memorial to the transatlantic slave trade.
          Senegal&apos;s &ldquo;Teranga&rdquo; hospitality culture is legendary, and the Lions of Teranga football team has captured global fans.
          The country boasts a vibrant music scene &mdash; Youssou N&apos;Dour&apos;s mbalax genre and the original Dakar Rally put Senegal on the world stage.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { city: 'Dakar', pop: '1.1M', note: 'Capital' },
            { city: 'Pikine', pop: '875K', note: 'Dakar suburb' },
            { city: 'Gu\u00e9diawaye', pop: '350K', note: 'Urban centre' },
            { city: 'Thi\u00e8s', pop: '317K', note: 'Rail junction' },
            { city: 'Saint-Louis', pop: '237K', note: 'Colonial heritage' },
            { city: 'Kaolack', pop: '186K', note: 'Peanut basin' },
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
