'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function TrinidadAndTobagoClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Port_of_Spain', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Port_of_Spain', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <span className="inline-block h-3 w-3 rounded-full bg-red-700" />
          <span className={`text-sm font-medium ${subText}`}>Trinidad &amp; Tobago Time (AST)</span>
        </div>
        <div className={`text-4xl font-semibold tracking-tight ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <p className={`mt-1 text-sm ${mutedText}`}>{mounted ? date : '\u00A0'}</p>
        <p className={`mt-2 text-xs ${mutedText}`}>UTC&minus;4 &mdash; No Daylight Saving Time</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Time Zone', 'AST (UTC\u22124)'],
            ['Population', '~1.4 million'],
            ['DST', 'Not observed'],
            ['Known For', 'Carnival & steelpan'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carnival & Culture */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Carnival Capital of the Caribbean</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Trinidad and Tobago is the birthplace of the steelpan&mdash;the only acoustic instrument invented in the 20th century&mdash;and the genres of calypso and soca music. The annual Trinidad Carnival is one of the world&apos;s largest street festivals. The Pitch Lake in La Brea is the largest natural deposit of asphalt on Earth. Tobago&apos;s Main Ridge Forest Reserve, established in 1776, is the oldest legally protected rainforest in the Western Hemisphere. The twin-island nation also has a significant oil and gas economy.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            ['San Juan-Laventille', '157K', 'Largest borough'],
            ['Chaguanas', '84K', 'Commercial center'],
            ['San Fernando', '48K', 'Industrial city'],
            ['Port of Spain', '37K', 'Capital'],
            ['Arima', '34K', 'Royal borough'],
            ['Scarborough', '17K', 'Tobago capital'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
