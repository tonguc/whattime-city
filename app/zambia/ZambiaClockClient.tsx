'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ZambiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Lusaka', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Lusaka', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Zambia</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CAT &middot; UTC+2</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~20M</span>
          </div>
        </div>
      </section>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'CAT (UTC+2)'],
            ['Population', '~20 million'],
            ['Capital', 'Lusaka'],
            ['DST', 'Not observed'],
            ['Currency', 'Zambian Kwacha (ZMW)'],
            ['Calling Code', '+260'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Victoria Falls &amp; the Zambezi</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Zambia shares Victoria Falls with Zimbabwe&mdash;visitors can walk right to the edge at the Knife-Edge Bridge
          on the Zambian side. The Zambezi River, Africa&apos;s fourth longest, powers Kariba Dam and offers some of the
          continent&apos;s best white-water rafting. Livingstone, the tourist capital near the falls, is named after
          explorer David Livingstone who first documented them in 1855.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Copper Belt &amp; Wildlife</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Zambia is Africa&apos;s second-largest copper producer, with the Copperbelt Province driving the economy.
          South Luangwa National Park pioneered walking safaris and is famous for leopard sightings. Lower Zambezi,
          Kafue, and Kasanka (home to the world&apos;s largest mammal migration of straw-coloured fruit bats) make
          Zambia one of southern Africa&apos;s most rewarding safari destinations.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Lusaka', '3.3M', 'Capital'],
            ['Kitwe', '522K', 'Copperbelt hub'],
            ['Ndola', '475K', 'Industrial city'],
            ['Kabwe', '250K', 'Central province'],
            ['Livingstone', '182K', 'Tourist capital'],
            ['Chipata', '122K', 'Eastern gateway'],
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
