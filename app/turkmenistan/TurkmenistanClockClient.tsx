'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function TurkmenistanClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Ashgabat', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Ashgabat', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-amber-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Turkmenistan</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">TMT &middot; UTC+5</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~6.5M</span>
          </div>
        </div>
      </section>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'TMT (UTC+5)'],
            ['Population', '~6.5 million'],
            ['Capital', 'Ashgabat'],
            ['DST', 'Not observed'],
            ['Currency', 'Turkmen Manat (TMT)'],
            ['Calling Code', '+993'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>The Door to Hell &amp; White Marble City</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The Darvaza Gas Crater&mdash;known as the &ldquo;Door to Hell&rdquo;&mdash;has been burning continuously
          since 1971 when a Soviet drilling rig collapsed into an underground cavern. Ashgabat holds a Guinness World
          Record for the highest density of white marble buildings, with over 540 structures clad in the stone.
          The Karakum Desert covers roughly 70% of the country&apos;s territory.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Silk Road &amp; Gas Reserves</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Ancient Merv (UNESCO World Heritage) was once one of the largest cities in the world and a key Silk Road hub.
          Turkmenistan holds the world&apos;s fourth-largest natural gas reserves, with the Galkynysh gas field ranking
          among the planet&apos;s biggest. Akhal-Teke horses, bred here for over 3,000 years, are considered among the
          most beautiful breeds and appear on the national emblem.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Ashgabat', '1M', 'Capital'],
            ['T\u00FCrkmenabat', '254K', 'Eastern hub'],
            ['Da\u015Foguz', '227K', 'Northern city'],
            ['Mary', '126K', 'Near ancient Merv'],
            ['Balkanabat', '119K', 'Oil region'],
            ['T\u00FCrkmenba\u015Fy', '73K', 'Caspian port'],
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
