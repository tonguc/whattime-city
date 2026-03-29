'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function NamibiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Windhoek', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Windhoek', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      <div className={card}>
        <div className="mb-1 flex items-center gap-2">
          <span className="inline-block rounded-md bg-orange-800 px-2 py-0.5 text-xs font-semibold text-white">CAT</span>
          <span className={`text-sm font-medium ${subText}`}>UTC+2 &middot; No DST</span>
        </div>
        <div className={`mt-3 text-5xl font-bold tracking-tight ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <p className={`mt-1 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</p>
        <p className={`mt-2 text-xs ${mutedText}`}>Namibia dropped DST in 2017 and now observes CAT (UTC+2) year-round.</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~2.6 million'],
            ['Capital', 'Windhoek'],
            ['Time Zone', 'CAT (UTC+2)'],
            ['DST', 'Not observed'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Natural Wonders */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Natural Wonders</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>The Namib Desert is considered the world&apos;s oldest desert, estimated at 55&ndash;80 million years old.</li>
          <li>Fish River Canyon is the second largest canyon on Earth after the Grand Canyon.</li>
          <li>The Skeleton Coast is known for its shipwrecks and seal colonies along the Atlantic shore.</li>
          <li>Etosha National Park hosts one of Africa&apos;s greatest wildlife concentrations around its vast salt pan.</li>
          <li>Namibia&apos;s NamibRand Nature Reserve is one of Africa&apos;s few International Dark Sky Reserves.</li>
        </ul>
      </div>

      {/* German Colonial Heritage */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>German Colonial Heritage</h3>
        <p className={`text-sm ${subText}`}>
          Swakopmund features well-preserved German colonial architecture&mdash;from the Hohenzollern Building to the Woermannhaus&mdash;reflecting
          Namibia&apos;s history as German South West Africa (1884&ndash;1915). Today, German is still spoken by a small minority alongside
          English and indigenous languages.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Windhoek', '431K', 'Capital'],
            ['Rundu', '63K', 'Kavango East'],
            ['Walvis Bay', '62K', 'Port city'],
            ['Swakopmund', '45K', 'Coastal'],
            ['Oshakati', '36K', 'Northern'],
            ['Katima Mulilo', '28K', 'Zambezi'],
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
