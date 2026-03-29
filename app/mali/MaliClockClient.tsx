'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Bamako'

export default function MaliClockClient() {
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
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Mali</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">GMT &middot; UTC+0</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~22M</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Quick Facts</h3>
        <ul className={`space-y-2 text-sm ${subText}`}>
          <li>&bull; Population: ~22 million &mdash; one of West Africa&apos;s largest nations</li>
          <li>&bull; Timezone: GMT (UTC+0) year-round, no daylight saving time</li>
          <li>&bull; The ancient Mali Empire under Mansa Musa was the richest in recorded history</li>
          <li>&bull; Timbuktu was a legendary center of Islamic scholarship and trade</li>
        </ul>
      </div>

      {/* Heritage & Landmarks */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Heritage &amp; Landmarks</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Great Mosque of Djenn&eacute;</p>
            <p className={`text-sm mt-1 ${mutedText}`}>The world&apos;s largest mud-brick building and a UNESCO World Heritage Site, rebuilt annually by the community.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Dogon Country</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Dramatic Bandiagara escarpment with cliff dwellings and rich spiritual traditions dating back centuries.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Music Heritage</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Home to Ali Farka Tour&eacute;, Salif Keita, and griot traditions that influenced the blues genre worldwide.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Timbuktu Libraries</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Hundreds of thousands of ancient manuscripts preserved in private libraries, spanning science, law, and astronomy.</p>
          </div>
        </div>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Bamako', pop: '2.5M' },
            { name: 'Sikasso', pop: '226K' },
            { name: 'Koutiala', pop: '141K' },
            { name: 'S\u00e9gou', pop: '130K' },
            { name: 'Mopti', pop: '114K' },
            { name: 'Timbuktu', pop: '55K' },
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
