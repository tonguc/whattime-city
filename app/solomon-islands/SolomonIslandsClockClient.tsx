'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Pacific/Guadalcanal'

export default function SolomonIslandsClockClient() {
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
        <div className="rounded-2xl text-white p-6 text-center bg-purple-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Solomon Islands</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">SBT &middot; UTC+11</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~720K</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Quick Facts</h3>
        <ul className={`space-y-2 text-sm ${subText}`}>
          <li>&bull; Population: ~720,000 across more than 900 islands in the South Pacific</li>
          <li>&bull; Timezone: SBT (UTC+11) year-round, no daylight saving time</li>
          <li>&bull; Site of the pivotal WWII Battle of Guadalcanal (1942&ndash;1943)</li>
          <li>&bull; Melanesian culture with over 70 living languages spoken across the islands</li>
        </ul>
      </div>

      {/* History & Nature */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>History &amp; Nature</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Battle of Guadalcanal</p>
            <p className={`text-sm mt-1 ${mutedText}`}>A turning point in the Pacific Theater of WWII. War relics, sunken ships, and memorials are scattered across the island.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Marovo Lagoon</p>
            <p className={`text-sm mt-1 ${mutedText}`}>The world&apos;s largest saltwater lagoon &mdash; a world-class diving destination with pristine coral reefs and crystal waters.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Rennell Island</p>
            <p className={`text-sm mt-1 ${mutedText}`}>A UNESCO World Heritage Site featuring Lake Tegano, the largest lake in the insular Pacific, inside a raised coral atoll.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Melanesian Culture</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Rich traditions of wood carving, shell-money currency, and kastom (customary) governance still shape daily island life.</p>
          </div>
        </div>
      </div>

      {/* Major Towns */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Major Towns</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Honiara', pop: '85K' },
            { name: 'Auki', pop: '8K' },
            { name: 'Gizo', pop: '7K' },
            { name: 'Noro', pop: '4K' },
            { name: 'Tulagi', pop: '2K' },
            { name: 'Kirakira', pop: '1.5K' },
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
