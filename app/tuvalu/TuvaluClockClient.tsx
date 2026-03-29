'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function TuvaluClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Pacific/Funafuti', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Pacific/Funafuti', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-purple-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Tuvalu</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">TVT &middot; UTC+12</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~11K</span>
          </div>
        </div>
      </section>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'TVT (UTC+12)'],
            ['Population', '~11,000'],
            ['Capital', 'Funafuti'],
            ['DST', 'Not observed'],
            ['Currency', 'Australian Dollar'],
            ['Calling Code', '+688'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>The .tv Domain Goldmine</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Tuvalu&apos;s country code &ldquo;.tv&rdquo; became a major revenue source when the domain was leased to
          media companies in the early 2000s. Revenue from .tv domain sales has funded infrastructure, UN membership,
          and government services. With just 26 km&sup2; of land across nine coral atolls, Tuvalu is the world&apos;s
          fourth-smallest country and among the first nations to face existential threat from rising sea levels.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Climate &amp; Pacific Culture</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          No point in Tuvalu rises more than 4.6 m above sea level, making it a global symbol of climate change
          vulnerability. Despite this, Tuvaluan culture thrives with traditional fatele dance performances, communal
          fishing practices, and strong Polynesian heritage. Funafuti&apos;s lagoon is one of the largest in the
          Pacific, and the nation&apos;s isolation preserves one of the world&apos;s most pristine marine environments.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Islands &amp; Settlements</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Funafuti', '6.3K', 'Capital atoll'],
            ['Vaitupu', '1.6K', 'Largest atoll'],
            ['Nukufetau', '600', 'Central atoll'],
            ['Nanumea', '500', 'Northernmost'],
            ['Nui', '500', 'Western atoll'],
            ['Nukulaelae', '350', 'Southern atoll'],
          ].map(([island, pop, note]) => (
            <div key={island} className={innerCard}>
              <p className={`text-sm font-semibold ${heading}`}>{island}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
