'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'America/Managua'

export default function NicaraguaClockClient() {
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
      <div className="rounded-2xl bg-blue-700 p-6 text-center text-white">
        <p className="text-sm font-medium uppercase tracking-widest opacity-80">Nicaragua &mdash; CST (UTC&minus;6)</p>
        <p className="mt-2 text-5xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        <p className="mt-1 text-sm opacity-70">{mounted ? date : '\u00A0'}</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Time Zone', 'CST (UTC\u22126)'],
            ['DST', 'Not observed'],
            ['Population', '~7 million'],
            ['Capital', 'Managua'],
            ['Currency', 'C\u00F3rdoba (NIO)'],
            ['Language', 'Spanish'],
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
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Land of Lakes and Volcanoes</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Nicaragua is the largest country in Central America. Lake Nicaragua is one of the few
          freshwater lakes in the world that is home to bull sharks. The colonial city of Granada,
          founded in 1524, is one of the oldest European settlements in the Americas. Ometepe
          Island &mdash; formed by two volcanoes rising from Lake Nicaragua &mdash; is a UNESCO
          Biosphere Reserve. The Pacific coast has become a world-class surf destination, drawing
          riders to beaches like San Juan del Sur and Popoyo.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Managua', '1.05M'],
            ['Le\u00F3n', '210K'],
            ['Masaya', '170K'],
            ['Chinandega', '134K'],
            ['Matagalpa', '110K'],
            ['Granada', '125K'],
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
