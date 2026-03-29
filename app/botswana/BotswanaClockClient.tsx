'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BotswanaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Gaborone', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Gaborone', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Botswana</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CAT &middot; UTC+2</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~2.6M</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'CAT (UTC+2)'],
            ['Population', '~2.6 million'],
            ['Capital', 'Gaborone'],
            ['DST', 'Not observed'],
            ['Currency', 'Botswana Pula (BWP)'],
            ['Dialing Code', '+267'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Okavango & Economy */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>The Gem of Southern Africa</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Botswana is home to the <strong>Okavango Delta</strong>&mdash;a UNESCO World Heritage Site and
          the world&apos;s largest inland delta. The country&apos;s economy is driven by diamonds through
          <strong> Debswana</strong>, making it one of the world&apos;s top producers. Widely regarded as
          one of Africa&apos;s most stable democracies, Botswana also boasts the elephant-rich
          <strong> Chobe National Park</strong> and vast stretches of the Kalahari Desert.
        </p>
      </div>

      {/* Wildlife & Nature */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Wildlife &amp; Nature</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Chobe NP has the highest concentration of elephants in Africa</li>
          <li>Okavango Delta floods annually from Angolan rains&mdash;visible from space</li>
          <li>The Kalahari Desert covers about 70% of the country&apos;s land area</li>
          <li>Makgadikgadi Pans host one of Africa&apos;s largest zebra migrations</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Gaborone', '232K', 'Capital city'],
            ['Francistown', '100K', 'Second city'],
            ['Molepolole', '71K', 'Cultural hub'],
            ['Maun', '60K', 'Okavango gateway'],
            ['Serowe', '51K', 'Historic capital'],
            ['Selibe Phikwe', '50K', 'Mining town'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{city}</div>
              <div className={`text-xs ${mutedText}`}>{pop} &middot; {note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
