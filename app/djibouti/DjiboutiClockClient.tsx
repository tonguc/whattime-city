'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Djibouti'

const CITIES = [
  { name: 'Djibouti City', pop: '600K', note: 'Capital &amp; port hub' },
  { name: 'Ali Sabieh', pop: '40K', note: 'Southern gateway' },
  { name: 'Dikhil', pop: '30K', note: 'Interior crossroads' },
  { name: 'Tadjoura', pop: '22K', note: 'Gulf of Tadjoura coast' },
  { name: 'Obock', pop: '18K', note: 'Northern port town' },
  { name: 'Arta', pop: '16K', note: 'Highland retreat' },
]

export default function DjiboutiClockClient() {
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
        <div className="rounded-2xl text-white p-6 text-center bg-amber-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Djibouti</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">EAT &middot; UTC+3</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~1.1M</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~1.1 million'],
            ['Time Zone', 'EAT (UTC+3)'],
            ['DST', 'Not observed'],
            ['Languages', 'French &amp; Arabic'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`} dangerouslySetInnerHTML={{ __html: value }} />
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Gateway */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Strategic Gateway</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Djibouti sits at the Bab-el-Mandeb strait&mdash;the narrow passage connecting the Red Sea
          to the Indian Ocean. This position makes it one of the world&apos;s most important maritime
          chokepoints, hosting military bases from France, the United States, China, and Japan. The
          country&apos;s modern port facilities handle cargo for landlocked Ethiopia and the broader
          East African region.
        </p>
      </div>

      {/* Natural Extremes */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Natural Extremes</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Lake Assal, at 155&nbsp;m below sea level, is the lowest point in Africa and the
          third-lowest on Earth. It is also the world&apos;s saltiest lake outside Antarctica,
          with salinity exceeding 34%. The surrounding Afar Triangle is one of the hottest
          inhabited places on the planet, with summer temperatures regularly above 42&nbsp;&deg;C
          (108&nbsp;&deg;F).
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Major Cities</h3>
        <div className="grid gap-2">
          {CITIES.map((c) => (
            <div key={c.name} className={`flex items-center justify-between ${innerCard}`}>
              <div>
                <span className={`text-sm font-medium ${heading}`}>{c.name}</span>
                <span className={`ml-2 text-xs ${mutedText}`}>{c.note}</span>
              </div>
              <span className={`text-xs font-medium ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{c.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
