'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BurundiClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Bujumbura', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Bujumbura', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      <div className={`${card} text-center`}>
        <p className={`text-xs font-medium uppercase tracking-wider ${mutedText}`}>CAT &middot; UTC+2 &middot; No DST</p>
        <p className={`mt-2 text-4xl font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        <p className={`mt-1 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <ul className={`mt-2 list-disc list-inside space-y-1 text-sm ${subText}`}>
          <li>Population: ~13 million &mdash; one of Africa&apos;s most densely populated nations</li>
          <li>Time zone: Central Africa Time (CAT, UTC+2)</li>
          <li>No daylight saving time observed</li>
          <li>Capital moved from Bujumbura to Gitega in 2019</li>
          <li>Economy driven by coffee and tea agriculture</li>
        </ul>
      </div>

      {/* Geography & Culture */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Geography &amp; Culture</h3>
        <p className={`mt-2 text-sm ${subText}`}>
          Burundi claims the southernmost source of the Nile River, near the town of Rutovu.
          The country&apos;s western border runs along Lake Tanganyika &mdash; the world&apos;s second-deepest lake at over 1,470&nbsp;meters.
          Burundian ritual drumming, known as &ldquo;Karyenda,&rdquo; was inscribed on UNESCO&apos;s Intangible Cultural Heritage list and remains a powerful symbol of national identity.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Gitega', pop: '135K', note: 'Capital' },
            { name: 'Bujumbura', pop: '1.2M', note: 'Largest' },
            { name: 'Muyinga', pop: '80K', note: '' },
            { name: 'Ngozi', pop: '75K', note: '' },
            { name: 'Rumonge', pop: '65K', note: '' },
            { name: 'Ruyigi', pop: '60K', note: '' },
          ].map(c => (
            <div key={c.name} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{c.name}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop}{c.note ? ` · ${c.note}` : ''}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
