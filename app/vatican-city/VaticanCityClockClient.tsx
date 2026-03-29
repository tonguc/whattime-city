'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function VaticanCityClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Vatican', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Vatican', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Vatican City</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CET &middot; UTC+1 / UTC+2</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Observes DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~800</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Time Zone', 'CET / CEST'],
            ['Population', '~800'],
            ['DST', 'Observed (Mar\u2013Oct)'],
            ['Area', '0.44 km\u00B2'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* World's Smallest Country */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>The World&apos;s Smallest Country</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          At just 0.44&nbsp;km&sup2;, Vatican City is the smallest independent state in the world and the spiritual seat of the Catholic Church. St. Peter&apos;s Basilica is the largest church ever built, while the Sistine Chapel houses Michelangelo&apos;s iconic ceiling frescoes. The Vatican Museums welcome over 6&nbsp;million visitors each year. The Swiss Guard has protected the papacy since 1506, and the city-state operates its own postal service, radio station, and railway.
        </p>
      </div>

      {/* Key Landmarks */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Key Landmarks</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            ['St. Peter\u2019s Square', 'Iconic piazza'],
            ['Apostolic Palace', 'Papal residence'],
            ['Vatican Gardens', '23-hectare grounds'],
            ['Sistine Chapel', 'Michelangelo frescoes'],
            ['Vatican Library', '1.1M+ books'],
            ['Vatican Radio', 'Since 1931'],
          ].map(([place, desc]) => (
            <div key={place} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{place}</p>
              <p className={`text-xs ${mutedText}`}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
