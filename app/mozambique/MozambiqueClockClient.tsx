'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MozambiqueClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Maputo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Maputo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <span className="inline-block rounded-md bg-red-700 px-2 py-0.5 text-xs font-semibold text-white">CAT</span>
          <span className={`text-sm font-medium ${subText}`}>UTC+2 &middot; No DST</span>
        </div>
        <div className={`mt-3 text-5xl font-bold tracking-tight ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <p className={`mt-1 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</p>
        <p className={`mt-2 text-xs ${mutedText}`}>Mozambique observes Central Africa Time (CAT) at UTC+2 throughout the year.</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~33 million'],
            ['Capital', 'Maputo'],
            ['Time Zone', 'CAT (UTC+2)'],
            ['Coastline', '2,500 km'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Coastal Treasures */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Coastal Treasures</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>The Bazaruto Archipelago is a protected marine national park with dugongs, dolphins, and whale sharks.</li>
          <li>The Mozambique Channel between the mainland and Madagascar is one of the world&apos;s richest marine biodiversity zones.</li>
          <li>With 2,500 km of Indian Ocean coastline, Mozambique offers some of East Africa&apos;s finest coral reefs.</li>
          <li>Peri-peri (piri-piri) chili sauce originated in Mozambique and is central to its cuisine.</li>
        </ul>
      </div>

      {/* Growing Economy */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Growing Economy</h3>
        <p className={`text-sm ${subText}`}>
          Maputo is emerging as a regional tech hub with a growing startup ecosystem. The country&apos;s natural gas reserves
          in the Rovuma Basin are among the largest discoveries in Africa&mdash;positioning Mozambique as a future major
          energy exporter. Agriculture, fishing, and tourism remain vital pillars of the economy.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Maputo', '1.1M', 'Capital'],
            ['Matola', '1.6M', 'Industrial'],
            ['Nampula', '620K', 'Northern hub'],
            ['Beira', '530K', 'Port city'],
            ['Chimoio', '370K', 'Central'],
            ['Quelimane', '350K', 'Zamb\u00E9zia'],
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
