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
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Honduras</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CST &middot; UTC-6</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~10.4M</span>
          </div>
        </div>
      </section>

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
