'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function PuertoRicoClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Puerto_Rico', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Puerto_Rico', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-cyan-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Puerto Rico</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">AST &middot; UTC-4</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">San Juan</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Puerto Rico Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AST — Atlantic Standard Time (UTC-4)' },
              { label: 'DST Status', value: 'No DST — same as EDT in summer!' },
              { label: 'IANA Identifier', value: 'America/Puerto_Rico' },
              { label: 'Population', value: '~3.2 million (US territory)' },
              { label: 'NYC Alignment', value: 'Same time as NYC in summer (both UTC-4)' },
              { label: 'Famous For', value: 'Old San Juan, rum, beaches, Act 60 tax' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The No-DST Advantage — Puerto Rico&apos;s Time Trick</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Puerto Rico uses <strong className={heading}>AST (UTC-4) year-round with no DST</strong>. This creates an interesting dynamic: during <strong className={heading}>US summer (March-November)</strong>, Puerto Rico is on the <strong className={heading}>same time as New York and Miami (EDT = UTC-4)</strong>. During <strong className={heading}>US winter</strong>, Puerto Rico is <strong className={heading}>1 hour ahead of the East Coast (EST = UTC-5)</strong>.
            </p>
            <p>
              <strong className={heading}>Act 60</strong> (formerly Act 20/22) offers <strong className={heading}>0% capital gains tax and 4% corporate tax</strong> for qualifying residents. This has attracted a wave of <strong className={heading}>crypto entrepreneurs, hedge fund managers, and remote workers</strong> to the island. The <strong className={heading}>timezone alignment with NYC in summer</strong> makes it ideal for finance professionals.
            </p>
            <p>
              Puerto Rico produces <strong className={heading}>over 70% of the rum consumed in the US</strong> — Bacardí&apos;s largest distillery is in <strong className={heading}>Cataño, near San Juan</strong>. The island is also a <strong className={heading}>major pharmaceutical manufacturing hub</strong> — producing roughly <strong className={heading}>25% of all US pharmaceutical exports</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Puerto Rico Key Cities — All on AST (UTC-4)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'San Juan', pop: '320K', note: 'Capital, Old San Juan, cruise port' },
              { city: 'Bayamón', pop: '185K', note: '2nd largest, metro San Juan' },
              { city: 'Ponce', pop: '130K', note: '"Pearl of the South," museums' },
              { city: 'Carolina', pop: '150K', note: 'Airport location, beaches' },
              { city: 'Caguas', pop: '130K', note: 'Mountain city, tech park' },
              { city: 'Mayagüez', pop: '75K', note: 'Western city, tuna industry, UPR' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>Pop. {c.pop}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
