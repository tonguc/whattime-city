'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MauritiusClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Indian/Mauritius', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Indian/Mauritius', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-amber-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Mauritius</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">MUT &middot; UTC+4</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~1.3M</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~1.3 million'],
            ['Capital', 'Port Louis'],
            ['Time Zone', 'MUT (UTC+4)'],
            ['Languages', 'English, French, Creole'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Island Wonders */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Island Wonders</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Mauritius was the only known home of the dodo bird, which went extinct in the late 17th century.</li>
          <li>The Chamarel Colored Earth features seven distinct layers of sand dunes in red, brown, violet, green, blue, purple, and yellow.</li>
          <li>An &ldquo;underwater waterfall&rdquo; illusion off the southwestern coast is created by sand and silt deposits flowing along the ocean floor.</li>
          <li>Sugar cane heritage shaped the island&apos;s history&mdash;plantations once covered 90% of cultivated land.</li>
        </ul>
      </div>

      {/* Multicultural Hub */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Multicultural Financial Hub</h3>
        <p className={`text-sm ${subText}`}>
          Mauritius is one of Africa&apos;s leading financial centers, with a multicultural society blending Hindu, Muslim, Chinese,
          and French Creole communities. The country consistently ranks among the top African nations for ease of doing business
          and economic freedom. Its strategic position in the Indian Ocean makes it a bridge between Africa and Asia.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Port Louis', '150K', 'Capital'],
            ['Vacoas-Phoenix', '106K', 'Central'],
            ['Beau Bassin', '104K', 'Rose Hill'],
            ['Curepipe', '84K', 'Highland'],
            ['Quatre Bornes', '80K', 'Commercial'],
            ['Mah\u00E9bourg', '17K', 'Historic'],
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
