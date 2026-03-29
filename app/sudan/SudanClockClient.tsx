'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SudanClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Khartoum', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Khartoum', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      <div className="rounded-2xl bg-red-700 p-6 text-center text-white">
        <p className="mb-1 text-sm font-medium uppercase tracking-wider opacity-80">Current Time in Sudan</p>
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
            { label: 'Population', value: '~48 Million' },
            { label: 'Capital', value: 'Khartoum' },
            { label: 'DST', value: 'Not Observed' },
          ].map((f) => (
            <div key={f.label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{f.label}</p>
              <p className={`text-sm font-semibold ${heading}`}>{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nile & Ancient Heritage */}
      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Nile &amp; Ancient Heritage</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Khartoum sits at the dramatic confluence of the Blue Nile and White Nile, forming the main Nile that flows north to Egypt.
          Sudan is home to the Mero&euml; pyramids &mdash; over 200 ancient structures, more than Egypt &mdash; remnants of the powerful Kingdom of Kush.
          The Nubian civilisation thrived here for millennia, leaving behind temples, royal tombs, and some of the earliest written African scripts.
          Vast desert archaeology sites continue to reveal Sudan&apos;s central role in ancient African and Mediterranean trade networks.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { city: 'Khartoum', pop: '6M', note: 'Capital' },
            { city: 'Omdurman', pop: '2.8M', note: 'Cultural heart' },
            { city: 'Nyala', pop: '565K', note: 'Darfur region' },
            { city: 'Port Sudan', pop: '490K', note: 'Red Sea coast' },
            { city: 'Kassala', pop: '430K', note: 'Eastern border' },
            { city: 'El-Obeid', pop: '420K', note: 'Kordofan region' },
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
