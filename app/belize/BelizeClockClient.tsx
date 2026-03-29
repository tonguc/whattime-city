'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BelizeClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Belize', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Belize', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Belize</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CST &middot; UTC-6</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~410K</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'CST (UTC\u22126)'],
            ['Population', '~410,000'],
            ['Capital', 'Belmopan'],
            ['DST', 'Not observed'],
            ['Currency', 'Belize Dollar (BZD)'],
            ['Dialing Code', '+501'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Natural Wonders */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Caribbean Jewel of Central America</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Belize is the <strong>only English-speaking country</strong> in Central America. The
          <strong> Great Blue Hole</strong>&mdash;a UNESCO World Heritage Site&mdash;is a giant marine
          sinkhole visible from space. Belize&apos;s barrier reef is the <strong>second largest in the
          world</strong>, stretching 300 km along the coast. Ancient <strong>Mayan ruins</strong> like
          Xunantunich and Caracol dot the jungle interior, while the vibrant <strong>Garifuna
          culture</strong> thrives along the southern coast.
        </p>
      </div>

      {/* Highlights */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Highlights</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Great Blue Hole is 300 m across and 125 m deep&mdash;a world-class dive site</li>
          <li>Caracol, the largest Maya site in Belize, once rivaled Tikal in Guatemala</li>
          <li>Garifuna Settlement Day (November 19) celebrates Afro-Caribbean heritage</li>
          <li>Belize moved its capital from Belize City to inland Belmopan after Hurricane Hattie (1961)</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities &amp; Towns</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Belize City', '61K', 'Largest city'],
            ['San Ignacio', '20K', 'Cayo District'],
            ['Belmopan', '17K', 'Capital'],
            ['San Pedro', '16K', 'Ambergris Caye'],
            ['Orange Walk', '14K', 'Sugar region'],
            ['Dangriga', '12K', 'Garifuna capital'],
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
