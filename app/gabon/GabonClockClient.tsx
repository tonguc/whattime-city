'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Libreville'

export default function GabonClockClient() {
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
    { name: 'Libreville', pop: '703K', note: 'Capital' },
    { name: 'Port-Gentil', pop: '136K', note: 'Oil hub' },
    { name: 'Franceville', pop: '110K', note: 'Southeast' },
    { name: 'Oyem', pop: '60K', note: 'Northern capital' },
    { name: 'Moanda', pop: '47K', note: 'Manganese mining' },
    { name: 'Lambaréné', pop: '26K', note: 'Schweitzer hospital' },
  ]

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Gabon</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">WAT &middot; UTC+1</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~2.4M</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~2.4 million'],
            ['Time Zone', 'WAT (UTC+1)'],
            ['DST', 'Not observed'],
            ['Currency', 'Central African CFA franc'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rainforest */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Africa&apos;s Rainforest Kingdom</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Roughly 88% of Gabon is covered by dense tropical rainforest&mdash;the highest percentage of any
          African nation. The country has set aside 13 national parks protecting over 11% of its territory.
          Lop&eacute; National Park, a UNESCO World Heritage Site, shelters western lowland gorillas, forest
          elephants, and chimpanzees in one of Africa&apos;s most pristine wilderness areas.
        </p>
      </div>

      {/* Oil & Surf */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Oil Wealth &amp; Point Denis</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Gabon is one of sub-Saharan Africa&apos;s wealthiest nations per capita, driven largely by offshore
          oil production centered around Port-Gentil. Beyond industry, the country offers unexpected
          attractions&mdash;Point Denis, a sandy peninsula near Libreville, is known for surfable Atlantic
          waves and nesting leatherback sea turtles. Lambar&eacute;n&eacute; is home to the historic Albert
          Schweitzer Hospital, a landmark of humanitarian medicine.
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
