'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function AlbaniaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Tirane', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Tirane', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const short = now.toLocaleTimeString('en-US', { timeZone: 'Europe/Tirane', timeZoneName: 'short' })
      setIsDST(short.includes('CEST') || short.includes('GMT+2'))
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
  const tzLabel = isDST ? 'CEST · UTC+2 · DST Active' : 'CET · UTC+1'

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Albania</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CET &middot; UTC+1 / UTC+2</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Observes DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~2.8M</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <ul className={`mt-2 list-disc list-inside space-y-1 text-sm ${subText}`}>
          <li>Population: ~2.8 million</li>
          <li>Standard time: CET (UTC+1) &mdash; Summer: CEST (UTC+2)</li>
          <li>Observes EU-style daylight saving time (last Sunday of March to October)</li>
          <li>Albanian Riviera &mdash; emerging Mediterranean tourism destination</li>
          <li>Over 750,000 bunkers were built during the communist era</li>
        </ul>
      </div>

      {/* Heritage & Tourism */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Heritage &amp; Tourism</h3>
        <p className={`mt-2 text-sm ${subText}`}>
          Butrint, a UNESCO World Heritage Site, features ruins spanning Greek, Roman, Byzantine, and Ottoman periods.
          Berat, the &ldquo;City of a Thousand Windows,&rdquo; is another UNESCO site famed for its Ottoman-era architecture.
          The Blue Eye (Syri i Kalt&euml;r) is a mesmerizing karst spring where water rises from over 50&nbsp;meters deep, maintaining a constant 10&nbsp;&deg;C year-round.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Tirana', pop: '420K', note: 'Capital' },
            { name: 'Durr\u00ebs', pop: '175K', note: 'Port city' },
            { name: 'Vlor\u00eb', pop: '130K', note: 'Riviera' },
            { name: 'Elbasan', pop: '100K', note: '' },
            { name: 'Shkod\u00ebr', pop: '88K', note: '' },
            { name: 'Kor\u00e7\u00eb', pop: '76K', note: '' },
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
