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
      <div className={`${card} text-center`}>
        <div className="inline-block rounded-xl bg-green-700 px-6 py-4">
          <p className="text-3xl font-bold text-white" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        </div>
        <p className={`mt-3 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</p>
        <p className={`mt-1 text-xs ${mutedText}`}>GYT UTC&minus;4 &middot; No DST</p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Population', '~800,000'],
            ['Timezone', 'GYT'],
            ['UTC Offset', 'UTC\u22124'],
            ['Capital', 'Georgetown'],
            ['Currency', 'Guyanese Dollar'],
            ['Language', 'English'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

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
