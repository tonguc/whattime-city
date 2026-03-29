'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BeninClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Porto-Novo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Porto-Novo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <p className={`text-xs font-medium uppercase tracking-wider ${mutedText}`}>WAT &middot; UTC+1 &middot; No DST</p>
        <p className={`mt-2 text-4xl font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        <p className={`mt-1 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <ul className={`mt-2 list-disc list-inside space-y-1 text-sm ${subText}`}>
          <li>Population: ~13 million</li>
          <li>Time zone: West Africa Time (WAT, UTC+1)</li>
          <li>No daylight saving time observed</li>
          <li>Birthplace of Vodun (voodoo) &mdash; January 10 is National Vodun Day</li>
          <li>Cotonou is the economic hub; Porto-Novo is the official capital</li>
        </ul>
      </div>

      {/* Heritage & Nature */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Heritage &amp; Nature</h3>
        <p className={`mt-2 text-sm ${subText}`}>
          The Royal Palaces of Abomey, a UNESCO World Heritage Site, preserve the legacy of the Dahomey Kingdom spanning the 17th&ndash;19th centuries.
          Ganvi&eacute;, a stilt village on Lake Nokou&eacute;, is often called the &ldquo;Venice of Africa&rdquo; and home to roughly 30,000 people.
          Pendjari National Park in the northwest shelters West Africa&apos;s largest population of elephants and lions.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Cotonou', pop: '680K', note: 'Economic hub' },
            { name: 'Porto-Novo', pop: '264K', note: 'Capital' },
            { name: 'Parakou', pop: '255K', note: '' },
            { name: 'Djougou', pop: '237K', note: '' },
            { name: 'Bohicon', pop: '213K', note: '' },
            { name: 'Abomey', pop: '82K', note: 'UNESCO' },
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
