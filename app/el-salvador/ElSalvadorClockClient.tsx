'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ElSalvadorClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/El_Salvador', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/El_Salvador', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="inline-block rounded-xl bg-blue-600 px-6 py-4">
          <p className="text-3xl font-bold text-white" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        </div>
        <p className={`mt-3 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</p>
        <p className={`mt-1 text-xs ${mutedText}`}>CST UTC&minus;6 &middot; No DST</p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Population', '~6.3 Million'],
            ['Timezone', 'CST (Central)'],
            ['UTC Offset', 'UTC\u22126'],
            ['Capital', 'San Salvador'],
            ['Currency', 'USD + Bitcoin'],
            ['Language', 'Spanish'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Bitcoin &amp; Surf Paradise</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          In 2021, El Salvador became the first country in the world to adopt Bitcoin as legal tender alongside the US dollar. The smallest nation in Central America packs enormous appeal&mdash;from the legendary surf breaks at El Tunco to Joya de Cer&eacute;n, a UNESCO World Heritage Site often called the &ldquo;Pompeii of the Americas&rdquo; for its remarkably preserved pre-Columbian village.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Culture &amp; Cuisine</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The pupusa&mdash;a thick stuffed corn tortilla&mdash;is El Salvador&apos;s beloved national dish, with &ldquo;Pupusa Day&rdquo; celebrated every second Sunday of November. Despite its compact size, the country offers volcanic landscapes, coffee highlands, and Pacific coastline all within a few hours&apos; drive.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['San Salvador', '570K \u00b7 Capital'],
            ['Soyapango', '242K'],
            ['Santa Ana', '374K'],
            ['San Miguel', '218K'],
            ['Mejicanos', '141K'],
            ['Apopa', '132K'],
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
