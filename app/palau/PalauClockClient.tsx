'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Pacific/Palau'

export default function PalauClockClient() {
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
      <div className="rounded-2xl bg-cyan-700 p-6 text-center text-white">
        <p className="text-sm font-medium uppercase tracking-widest opacity-80">Palau &mdash; PWT (UTC+9)</p>
        <p className="mt-2 text-5xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        <p className="mt-1 text-sm opacity-70">{mounted ? date : '\u00A0'}</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Time Zone', 'PWT (UTC+9)'],
            ['DST', 'Not observed'],
            ['Population', '~18,000'],
            ['Capital', 'Ngerulmud'],
            ['Currency', 'US Dollar (USD)'],
            ['Language', 'Palauan, English'],
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
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Pristine Pacific Paradise</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Palau&apos;s Rock Islands Southern Lagoon is a UNESCO World Heritage Site featuring
          over 400 limestone islands draped in jungle. The famous Jellyfish Lake allows snorkelers
          to swim among millions of golden jellyfish that have lost their sting. In 2009 Palau
          established the world&apos;s first national shark sanctuary. The &ldquo;Palau Pledge&rdquo;
          &mdash; stamped into every visitor&apos;s passport &mdash; is a signed promise to protect
          the islands&apos; environment, making it a global pioneer in eco-tourism.
        </p>
      </div>

      {/* Major Settlements */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Settlements</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Ngerulmud', '300 (capital)'],
            ['Koror', '11K'],
            ['Airai', '2.5K'],
            ['Melekeok', '280'],
            ['Ngarchelong', '280'],
            ['Aimeliik', '270'],
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
