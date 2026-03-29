'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function AngolaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Luanda', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Luanda', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <li>Population: ~36 million</li>
          <li>Time zone: West Africa Time (WAT, UTC+1)</li>
          <li>No daylight saving time observed</li>
          <li>2nd largest Portuguese-speaking country after Brazil</li>
          <li>Major oil and diamond exporter &mdash; Africa&apos;s 2nd largest oil producer</li>
        </ul>
      </div>

      {/* Nature & Culture */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Nature &amp; Culture</h3>
        <p className={`mt-2 text-sm ${subText}`}>
          Kalandula Falls, one of Africa&apos;s largest waterfalls by volume, drops over 100&nbsp;meters along the Lucala River.
          The Tundavala Gap near Lubango offers a dramatic 1,000-meter cliff edge overlooking the lowlands.
          Angola is the birthplace of kizomba, a music and dance genre that has spread worldwide since the 1980s.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Luanda', pop: '8.3M', note: 'Capital' },
            { name: 'Huambo', pop: '595K', note: '' },
            { name: 'Benguela', pop: '513K', note: '' },
            { name: 'Lobito', pop: '324K', note: 'Port city' },
            { name: 'Lubango', pop: '294K', note: '' },
            { name: 'Cabinda', pop: '185K', note: 'Exclave' },
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
