'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Banjul'

export default function GambiaClockClient() {
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

  const cities = [
    { name: 'Serekunda', pop: '340K', note: 'Largest city' },
    { name: 'Brikama', pop: '77K', note: 'Western division' },
    { name: 'Bakau', pop: '47K', note: 'Coastal resort' },
    { name: 'Banjul', pop: '31K', note: 'Capital' },
    { name: 'Farafenni', pop: '30K', note: 'North bank' },
    { name: 'Lamin', pop: '25K', note: 'Suburban hub' },
  ]

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in The Gambia</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">GMT &middot; UTC+0</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~2.7M</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~2.7 million'],
            ['Time Zone', 'GMT (UTC+0)'],
            ['DST', 'Not observed'],
            ['Currency', 'Gambian dalasi (GMD)'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* River Gambia */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>The River Gambia Nation</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The Gambia is the smallest country on mainland Africa, stretching as a narrow strip on both
          banks of the River Gambia. The river runs the entire 480&nbsp;km length of the country before
          emptying into the Atlantic. Kunta Kinteh Island (formerly James Island), a UNESCO World Heritage
          Site, stands in the river as a poignant reminder of the transatlantic slave trade and inspired
          Alex Haley&apos;s famous novel &ldquo;Roots.&rdquo;
        </p>
      </div>

      {/* Birdwatching */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Birdwatcher&apos;s Paradise</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Despite its small size, The Gambia is home to over 560 recorded bird species&mdash;making it one
          of the top birdwatching destinations in West Africa. Abuko Nature Reserve, just 20 minutes from
          the coast, offers sightings of kingfishers, hornbills, and rare species. The combination of
          river wetlands, mangroves, and savanna habitats creates exceptional biodiversity within a
          compact and accessible area.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid gap-2">
          {cities.map((c) => (
            <div key={c.name} className={`flex items-center justify-between ${innerCard}`}>
              <div>
                <p className={`text-sm font-medium ${heading}`}>{c.name}</p>
                <p className={`text-xs ${mutedText}`}>{c.note}</p>
              </div>
              <span className={`text-xs font-medium ${subText}`}>{c.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
