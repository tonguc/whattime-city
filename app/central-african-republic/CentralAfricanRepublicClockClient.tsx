'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Bangui'

const CITIES = [
  { name: 'Bangui', pop: '900K', note: 'Capital on the Ubangi River' },
  { name: 'Bimbo', pop: '267K', note: 'Bangui suburb' },
  { name: 'Berb\u00e9rati', pop: '108K', note: 'Western diamond hub' },
  { name: 'Carnot', pop: '63K', note: 'Diamond mining center' },
  { name: 'Bambari', pop: '55K', note: 'Central crossroads' },
  { name: 'Kaga-Bandoro', pop: '48K', note: 'Northern trade town' },
]

export default function CentralAfricanRepublicClockClient() {
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
        <div className="text-center">
          <div className={`text-4xl font-bold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className={`mt-1 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</div>
          <div className={`mt-1 text-xs ${mutedText}`}>WAT &middot; UTC+1 &middot; No DST</div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~5.5 million'],
            ['Time Zone', 'WAT (UTC+1)'],
            ['DST', 'Not observed'],
            ['Language', 'French &amp; Sango'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`} dangerouslySetInnerHTML={{ __html: value }} />
            </div>
          ))}
        </div>
      </div>

      {/* Heart of Africa */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Geographic Heart of Africa</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          The Central African Republic sits at the geographic center of the continent, covered by
          dense tropical forests in the south and savanna in the north. The Dzanga-Sangha Reserve
          in the southwest is home to large populations of forest elephants and western lowland
          gorillas. The Bayaka people, one of Africa&apos;s indigenous pygmy groups, maintain
          their traditional forest-dwelling culture in this region.
        </p>
      </div>

      {/* Boali & Diamonds */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Boali Falls &amp; Diamond Country</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          The Boali waterfalls, about 100&nbsp;km northwest of Bangui, cascade 50&nbsp;m down
          and power one of the country&apos;s main hydroelectric stations. CAR is also one of
          Africa&apos;s notable diamond-producing nations, with alluvial deposits scattered across
          the western prefectures. The Ubangi River, which forms the southern border, connects
          Bangui to the Congo River trade network.
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
