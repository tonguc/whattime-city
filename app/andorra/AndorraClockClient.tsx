'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function AndorraClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Andorra', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Andorra', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Andorra</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CET &middot; UTC+1 / UTC+2</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Observes DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~80K</span>
          </div>
        </div>
      </section>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Pyrenees Microstate</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Andorra is a tiny co-principality nestled in the eastern Pyrenees between France and Spain. Governed by two co-princes&mdash;the French President and the Bishop of Urgell&mdash;it has no airport or railway, making it one of Europe&apos;s most unique destinations. The country is renowned for duty-free shopping, world-class ski resorts, and centuries-old Romanesque churches scattered across its mountain valleys.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Highest Capital in Europe</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Andorra la Vella sits at 1,023 metres above sea level, making it the highest capital city in Europe. Winter ski tourism and summer hiking drive the economy, welcoming over 8 million visitors annually&mdash;more than 100 times its own population.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Parishes</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Andorra la Vella', '23K &middot; Capital'],
            ['Escaldes-Engordany', '15K'],
            ['Encamp', '12K'],
            ['Sant Juli\u00e0 de L\u00f2ria', '10K'],
            ['La Massana', '10K'],
            ['Canillo', '5K'],
          ].map(([city, info]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`} dangerouslySetInnerHTML={{ __html: info }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
