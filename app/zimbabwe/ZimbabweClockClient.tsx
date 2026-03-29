'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ZimbabweClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Harare', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Harare', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Zimbabwe</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CAT &middot; UTC+2</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~16.3M</span>
          </div>
        </div>
      </section>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'CAT (UTC+2)'],
            ['Population', '~16.3 million'],
            ['Capital', 'Harare'],
            ['DST', 'Not observed'],
            ['Currency', 'ZiG / USD'],
            ['Calling Code', '+263'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Victoria Falls &amp; Natural Wonders</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Zimbabwe shares Victoria Falls&mdash;one of the Seven Natural Wonders of the World&mdash;with Zambia.
          Known locally as &ldquo;Mosi-oa-Tunya&rdquo; (The Smoke That Thunders), the falls span 1,708 m wide
          and drop 108 m. Hwange National Park hosts over 100 mammal species including Africa&apos;s largest
          elephant population, while Great Zimbabwe ruins showcase a medieval stone city that gave the nation its name.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Wildlife &amp; Heritage</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Zimbabwe is a top safari destination with Mana Pools, Matobo Hills (UNESCO), and the Eastern Highlands.
          The country experienced record hyperinflation in 2008 before dollarizing its economy. Today it attracts
          adventurers for bungee jumping, white-water rafting on the Zambezi, and world-class game viewing.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Harare', '1.5M', 'Capital'],
            ['Bulawayo', '653K', 'Industrial hub'],
            ['Chitungwiza', '356K', 'Satellite city'],
            ['Mutare', '188K', 'Eastern gateway'],
            ['Gweru', '157K', 'Midlands capital'],
            ['Masvingo', '87K', 'Near Great Zimbabwe'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-semibold ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
