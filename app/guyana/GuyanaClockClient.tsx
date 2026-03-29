'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function GuyanaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Guyana', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Guyana', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-cyan-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Guyana</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">GYT &middot; UTC-4</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~800K</span>
          </div>
        </div>
      </section>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>South America&apos;s English Voice</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Guyana is the only English-speaking country on the South American mainland. Its capital Georgetown is known for distinctive wooden colonial architecture, including the iconic St. George&apos;s Cathedral&mdash;one of the tallest wooden buildings in the world. The 2019 Stabroek oil discovery offshore has sparked an economic boom, making Guyana one of the fastest-growing economies globally.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Kaieteur &amp; the Interior</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Kaieteur Falls plunges 226 metres in a single drop&mdash;roughly five times the height of Niagara&mdash;making it the world&apos;s largest single-drop waterfall by volume. The vast Rupununi savannas in the south offer wildlife encounters with giant otters, jaguars, and harpy eagles, while over 80% of the country remains covered in pristine rainforest.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Georgetown', '235K \u00b7 Capital'],
            ['Linden', '30K'],
            ['New Amsterdam', '18K'],
            ['Bartica', '15K'],
            ['Anna Regina', '12K'],
            ['Lethem', '3K'],
          ].map(([city, info]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
