'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function EquatorialGuineaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Malabo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Malabo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Equatorial Guinea</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">WAT &middot; UTC+1</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~1.7M</span>
          </div>
        </div>
      </section>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Africa&apos;s Spanish-Speaking Nation</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Equatorial Guinea is the only country in Africa where Spanish is an official language. The nation spans a mainland region (R&iacute;o Muni) and several islands, with the capital Malabo located on volcanic Bioko Island in the Gulf of Guinea. Oil discoveries in the 1990s transformed it into one of Sub-Saharan Africa&apos;s wealthiest nations by GDP per capita.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>New Capital &amp; Biodiversity</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The government is building a new planned capital called Ciudad de la Paz (formerly Oyala) deep in the mainland rainforest. Monte Al&eacute;n National Park protects one of Central Africa&apos;s most biodiverse ecosystems, home to gorillas, forest elephants, and over 100 bird species.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Malabo', '297K \u00b7 Capital'],
            ['Bata', '250K \u00b7 Mainland'],
            ['Ebeb\u00edy\u00edn', '25K'],
            ['Aconibe', '11K'],
            ['A\u00f1isoc', '10K'],
            ['Mongomo', '6K'],
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
