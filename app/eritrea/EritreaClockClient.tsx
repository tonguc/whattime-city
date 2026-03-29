'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Asmara'

export default function EritreaClockClient() {
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

  const cities = [
    { name: 'Asmara', pop: '963K', note: 'Capital' },
    { name: 'Keren', pop: '146K', note: 'Second city' },
    { name: 'Massawa', pop: '52K', note: 'Red Sea port' },
    { name: 'Assab', pop: '28K', note: 'Southern port' },
    { name: 'Mendefera', pop: '25K', note: 'Southern region' },
    { name: 'Adi Quala', pop: '14K', note: 'Border town' },
  ]

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-amber-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Eritrea</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">EAT &middot; UTC+3</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~3.6M</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~3.6 million'],
            ['Time Zone', 'EAT (UTC+3)'],
            ['DST', 'Not observed'],
            ['Currency', 'Eritrean nakfa (ERN)'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Asmara Architecture */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Asmara&apos;s Art Deco Heritage</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Asmara, often called the &ldquo;New Rome,&rdquo; earned UNESCO World Heritage status in 2017 for its
          extraordinary collection of Modernist architecture. Italian colonial-era buildings from the 1930s
          include Art Deco cinemas, Futurist government offices, and Rationalist apartment blocks. The
          Fiat Tagliero service station, shaped like an aircraft, is one of the world&apos;s most iconic
          examples of Futurist architecture.
        </p>
      </div>

      {/* Red Sea & Cycling */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Red Sea Coast &amp; Cycling Culture</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Eritrea&apos;s 1,151&nbsp;km Red Sea coastline includes the Dahlak Archipelago&mdash;over 200
          islands with pristine coral reefs and marine life. The port city of Massawa blends Ottoman,
          Egyptian, and Italian influences. Cycling is deeply embedded in Eritrean culture, a legacy
          of the Italian colonial period. The country has produced world-class cyclists and hosts
          the annual Tour of Eritrea, one of Africa&apos;s oldest stage races.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid gap-2">
          {cities.map((c) => (
            <div key={c.name} className={`flex items-center justify-between ${innerCard}`}>
              <div>
                <p className={`text-sm font-medium ${heading}`}>{c.name}</p>
                <p className={`text-xs ${mutedText}`}>{c.note}</p>
              </div>
              <span className={`text-xs font-medium ${subText}`}>{c.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
