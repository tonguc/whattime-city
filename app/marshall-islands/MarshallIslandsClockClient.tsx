'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Pacific/Majuro'

export default function MarshallIslandsClockClient() {
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

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <div className="rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="text-sm font-medium uppercase tracking-widest opacity-80">Marshall Islands &mdash; MHT (UTC+12)</p>
        <p className="mt-2 text-5xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        <p className="mt-1 text-sm opacity-70">{mounted ? date : '\u00A0'}</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Time Zone', 'MHT (UTC+12)'],
            ['DST', 'Not observed'],
            ['Population', '~42,000'],
            ['Capital', 'Majuro'],
            ['Currency', 'US Dollar (USD)'],
            ['Language', 'Marshallese, English'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Country Highlights */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Coral Atolls of the Pacific</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The Marshall Islands consist of 29 coral atolls and 5 isolated islands spread across
          the central Pacific. Bikini Atoll, a UNESCO World Heritage Site, was the location of
          67 nuclear tests conducted by the United States between 1946 and 1958. The nation
          operates one of the world&apos;s largest shark sanctuaries, covering nearly 2&nbsp;million
          km&sup2; of ocean. Under the Compact of Free Association with the US, Marshallese
          citizens can live and work in America. Rising sea levels pose an existential threat,
          as most land sits barely 2&nbsp;metres above the ocean.
        </p>
      </div>

      {/* Major Atolls & Islands */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Atolls &amp; Islands</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Majuro', '28K'],
            ['Ebeye', '11K'],
            ['Jaluit', '1.7K'],
            ['Wotje', '860'],
            ['Mili', '740'],
            ['Arno', '1.8K'],
          ].map(([place, pop]) => (
            <div key={place} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{place}</p>
              <p className={`text-xs ${mutedText}`}>Pop. {pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
