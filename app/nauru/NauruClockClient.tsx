'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Pacific/Nauru'

export default function NauruClockClient() {
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
      <div className="rounded-2xl bg-blue-500 p-6 text-center text-white">
        <p className="text-sm font-medium uppercase tracking-widest opacity-80">Nauru &mdash; NRT (UTC+12)</p>
        <p className="mt-2 text-5xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        <p className="mt-1 text-sm opacity-70">{mounted ? date : '\u00A0'}</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Time Zone', 'NRT (UTC+12)'],
            ['DST', 'Not observed'],
            ['Population', '~12,500'],
            ['Capital', 'No official capital'],
            ['Currency', 'Australian Dollar (AUD)'],
            ['Area', '21 km\u00B2'],
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
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>The Smallest Island Nation</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Nauru is the world&apos;s smallest island nation and third-smallest country by area,
          covering just 21&nbsp;km&sup2;. In the 1970s and 1980s, phosphate mining made Nauru
          the richest country per capita on Earth, but reserves have since been largely depleted.
          The island has no official capital &mdash; government offices are concentrated in the
          Yaren district. With no natural harbour and limited tourism infrastructure, Nauru
          remains one of the least visited countries in the world.
        </p>
      </div>

      {/* Districts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Districts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Yaren', '1.1K'],
            ['Denigomodu', '1.8K'],
            ['Meneng', '1.8K'],
            ['Boe', '850'],
            ['Aiwo', '1.1K'],
            ['Buada', '739'],
          ].map(([district, pop]) => (
            <div key={district} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{district}</p>
              <p className={`text-xs ${mutedText}`}>Pop. {pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
