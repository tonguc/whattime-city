'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Niamey'

export default function NigerClockClient() {
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
      <div className="rounded-2xl bg-orange-800 p-6 text-center text-white">
        <p className="text-sm font-medium uppercase tracking-widest opacity-80">Niger &mdash; WAT (UTC+1)</p>
        <p className="mt-2 text-5xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        <p className="mt-1 text-sm opacity-70">{mounted ? date : '\u00A0'}</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Time Zone', 'WAT (UTC+1)'],
            ['DST', 'Not observed'],
            ['Population', '~27 million'],
            ['Capital', 'Niamey'],
            ['Currency', 'West African CFA Franc'],
            ['Language', 'French (official)'],
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
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Gateway to the Sahara</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Niger is the largest country in West Africa, with the Sahara Desert covering roughly
          80% of its territory. The historic city of Agadez, a UNESCO World Heritage Site, has
          served as a gateway to trans-Saharan trade routes for centuries. Niger holds some of
          the world&apos;s largest uranium reserves. Each September, the <em>Cure Sal&eacute;e</em> festival
          draws Tuareg and Wodaabe nomads to In-Gall for celebrations marking the end of the
          rainy season &mdash; one of the most vibrant cultural gatherings in the Sahel.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Niamey', '1.3M'],
            ['Zinder', '323K'],
            ['Maradi', '318K'],
            ['Agadez', '124K'],
            ['Tahoua', '117K'],
            ['Dosso', '69K'],
          ].map(([city, pop]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>Pop. {pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
