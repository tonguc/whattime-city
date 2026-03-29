'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function UgandaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Kampala', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Kampala', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      <div className="rounded-2xl bg-yellow-700 p-6 text-center text-white">
        <p className="text-sm font-medium uppercase tracking-wide opacity-80">Current Time in Uganda</p>
        <p className="mt-2 text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </p>
        <p className="mt-1 text-base opacity-90">{mounted ? date : '\u00A0'}</p>
        <p className="mt-1 text-xs font-medium opacity-70">EAT &middot; UTC+3 &middot; No DST</p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'EAT (UTC+3)'],
            ['Population', '~47 million'],
            ['Capital', 'Kampala'],
            ['DST', 'Not observed'],
            ['Currency', 'Ugandan Shilling (UGX)'],
            ['Calling Code', '+256'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>The Pearl of Africa</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Winston Churchill famously called Uganda &ldquo;the Pearl of Africa&rdquo; for its stunning natural beauty.
          Bwindi Impenetrable National Park is home to roughly half the world&apos;s mountain gorillas, making Uganda
          the top destination for gorilla trekking. The source of the Nile at Jinja draws adventurers for white-water
          rafting, while Queen Elizabeth National Park offers tree-climbing lions.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Innovation &amp; Growth</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Kampala has emerged as East Africa&apos;s fastest-growing tech hub, with startups in fintech, agritech, and
          healthtech attracting international investment. Uganda borders Lake Victoria&mdash;Africa&apos;s largest
          lake&mdash;and the Rwenzori Mountains (&ldquo;Mountains of the Moon&rdquo;) rise to 5,109 m with equatorial
          glaciers, offering some of Africa&apos;s most unique trekking experiences.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Kampala', '1.7M', 'Capital'],
            ['Gulu', '155K', 'Northern hub'],
            ['Lira', '120K', 'Lango region'],
            ['Mbarara', '100K', 'Western Uganda'],
            ['Jinja', '77K', 'Source of the Nile'],
            ['Entebbe', '70K', 'Int\u2019l airport'],
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
