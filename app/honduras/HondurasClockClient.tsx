'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function HondurasClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Tegucigalpa', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Tegucigalpa', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            ['Population', '~10.4 Million'],
            ['Timezone', 'CST (Central)'],
            ['UTC Offset', 'UTC\u22126'],
            ['Capital', 'Tegucigalpa'],
            ['Currency', 'Lempira (L)'],
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
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Maya Ruins &amp; Reef Diving</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Honduras is home to Cop&aacute;n Ruinas, a UNESCO World Heritage Site renowned for its elaborate Maya stelae and hieroglyphic stairway&mdash;the longest ancient Maya text ever discovered. Off the Caribbean coast, the Bay Islands (Roat&aacute;n, Utila, Guanaja) sit along the Mesoamerican Barrier Reef, the second largest in the world, offering world-class scuba diving and snorkeling.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Cloud Forests &amp; Coffee</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          La Mosquitia, often called the &ldquo;Central American Amazon,&rdquo; is one of the largest remaining tracts of tropical rainforest in the Americas. Honduras is also a major coffee exporter, with high-altitude beans from regions like Marcala gaining international recognition. The country&apos;s cloud forests shelter rare wildlife including the resplendent quetzal.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Tegucigalpa', '1.2M \u00b7 Capital'],
            ['San Pedro Sula', '700K'],
            ['Choloma', '253K'],
            ['La Ceiba', '200K'],
            ['El Progreso', '188K'],
            ['Comayagua', '82K'],
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
