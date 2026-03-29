'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'America/Paramaribo'

export default function SurinameClockClient() {
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
        <div className="rounded-2xl text-white p-6 text-center bg-cyan-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Suriname</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">SRT &middot; UTC-3</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~620K</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Quick Facts</h3>
        <ul className={`space-y-2 text-sm ${subText}`}>
          <li>&bull; Population: ~620,000 &mdash; the only Dutch-speaking country in South America</li>
          <li>&bull; Timezone: SRT (UTC&minus;3) year-round, no daylight saving time</li>
          <li>&bull; About 93% of the land is covered by tropical rainforest &mdash; the highest percentage of any nation</li>
          <li>&bull; Remarkable ethnic diversity: Hindustani, Javanese, Creole, Maroon, Indigenous, and Chinese communities</li>
        </ul>
      </div>

      {/* Culture & Nature */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Culture &amp; Nature</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Paramaribo Historic Center</p>
            <p className={`text-sm mt-1 ${mutedText}`}>A UNESCO World Heritage Site where Dutch colonial wooden architecture sits alongside a synagogue and mosque on the same street.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Rainforest Canopy</p>
            <p className={`text-sm mt-1 ${mutedText}`}>With 93% forest cover, Suriname is one of the most carbon-negative countries on Earth &mdash; Brownsberg Nature Park offers stunning views.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Ethnic Mosaic</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Javanese, Hindustani, Creole, and Maroon cultures blend into a unique society where roti, nasi, and pom share the same table.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Maroon Heritage</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Descendants of escaped enslaved Africans maintain vibrant communities along the interior rivers with distinct languages and traditions.</p>
          </div>
        </div>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Paramaribo', pop: '240K' },
            { name: 'Lelydorp', pop: '20K' },
            { name: 'Nieuw Nickerie', pop: '13K' },
            { name: 'Moengo', pop: '8K' },
            { name: 'Albina', pop: '4K' },
            { name: 'Groningen', pop: '3K' },
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
