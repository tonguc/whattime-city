'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BurkinaFasoClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Ouagadougou', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Ouagadougou', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Burkina Faso</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">GMT &middot; UTC+0</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~22M</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <ul className={`mt-2 list-disc list-inside space-y-1 text-sm ${subText}`}>
          <li>Population: ~22 million</li>
          <li>Time zone: GMT (UTC+0) &mdash; same as London in winter</li>
          <li>No daylight saving time observed</li>
          <li>Known as the &ldquo;Land of Honest People&rdquo; (Burkina = honest, Faso = land)</li>
          <li>One of West Africa&apos;s largest cotton producers</li>
        </ul>
      </div>

      {/* Culture & Heritage */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Culture &amp; Heritage</h3>
        <p className={`mt-2 text-sm ${subText}`}>
          Ouagadougou hosts FESPACO, Africa&apos;s largest and most prestigious film festival, held biennially since 1969.
          The Ruins of Lorop&eacute;ni, a UNESCO World Heritage Site, date back to the 11th century and are tied to the historic gold trade.
          Near Banfora in the southwest, the Karfiguéla Waterfalls and Sindou Peaks draw visitors with dramatic sandstone formations.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Ouagadougou', pop: '2.8M', note: 'Capital' },
            { name: 'Bobo-Dioulasso', pop: '810K', note: '2nd city' },
            { name: 'Koudougou', pop: '130K', note: '' },
            { name: 'Banfora', pop: '93K', note: 'Waterfalls' },
            { name: 'Ouahigouya', pop: '91K', note: '' },
            { name: 'Kaya', pop: '70K', note: '' },
          ].map(c => (
            <div key={c.name} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{c.name}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop}{c.note ? ` · ${c.note}` : ''}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
