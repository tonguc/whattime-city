'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Nouakchott'

export default function MauritaniaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="flex items-center gap-3 mb-3">
          <div className="h-3 w-3 rounded-full bg-yellow-700 shadow-lg shadow-yellow-700/50" />
          <span className={`text-sm font-medium ${subText}`}>GMT &middot; UTC+0 &middot; No DST</span>
        </div>
        <div className={`text-4xl font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <p className={`mt-1 text-sm ${mutedText}`}>{mounted ? date : '\u00A0'}</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Quick Facts</h3>
        <ul className={`space-y-2 text-sm ${subText}`}>
          <li>&bull; Population: ~4.8 million &mdash; bridging Arab North and Sub-Saharan Africa</li>
          <li>&bull; Timezone: GMT (UTC+0) year-round, no daylight saving time</li>
          <li>&bull; The Sahara Desert covers roughly 90% of the country&apos;s landmass</li>
          <li>&bull; Home to the world&apos;s longest train &mdash; the iron ore train stretches up to 2.5&nbsp;km</li>
        </ul>
      </div>

      {/* Wonders & Heritage */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Wonders &amp; Heritage</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Richat Structure</p>
            <p className={`text-sm mt-1 ${mutedText}`}>The &ldquo;Eye of the Sahara&rdquo; &mdash; a 40&nbsp;km geological dome visible from space, once thought to be a meteorite impact.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Chinguetti</p>
            <p className={`text-sm mt-1 ${mutedText}`}>A UNESCO-listed ancient library city and the seventh holiest city of Islam, with manuscripts dating to the 13th century.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Banc d&apos;Arguin</p>
            <p className={`text-sm mt-1 ${mutedText}`}>UNESCO-protected national park where Saharan dunes meet the Atlantic, hosting millions of migratory birds.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Iron Ore Train</p>
            <p className={`text-sm mt-1 ${mutedText}`}>The longest train in the world hauls iron ore from Zouérat to Nouadhibou &mdash; passengers ride atop the wagons.</p>
          </div>
        </div>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Nouakchott', pop: '1.2M' },
            { name: 'Nouadhibou', pop: '118K' },
            { name: 'Rosso', pop: '70K' },
            { name: 'Kiffa', pop: '60K' },
            { name: 'Ka\u00e9di', pop: '55K' },
            { name: 'Zou\u00e9rat', pop: '44K' },
          ].map((c) => (
            <div key={c.name} className={innerCard}>
              <p className={`font-medium text-sm ${heading}`}>{c.name}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
