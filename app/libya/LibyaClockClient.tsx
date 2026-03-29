'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function LibyaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Tripoli', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Tripoli', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Libya</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">EET &middot; UTC+2</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Tripoli</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Libya Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET — Eastern European Time (UTC+2)' },
              { label: 'DST Status', value: 'Abolished — last observed 2013' },
              { label: 'IANA Identifier', value: 'Africa/Tripoli' },
              { label: 'TZ Changes', value: '4 timezone switches since 1951!' },
              { label: 'Population', value: '~7 million' },
              { label: 'Famous For', value: 'Sahara Desert, Leptis Magna, oil reserves' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Libya&apos;s Turbulent Timezone History</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Libya has one of the <strong className={heading}>most chaotic timezone histories</strong> in the world. The country has switched between <strong className={heading}>UTC+1 (CET) and UTC+2 (EET)</strong> multiple times: CET until 1959, then EET, back to CET in 1982 under Gaddafi, then EET again in 1990, CET again in 2012, and <strong className={heading}>finally EET (UTC+2) since 2013</strong>.
            </p>
            <p>
              Libya is Africa&apos;s <strong className={heading}>4th largest country by area</strong> (1.76 million km²) — mostly <strong className={heading}>Sahara Desert</strong>. Despite its size, it uses a single timezone. The country holds Africa&apos;s <strong className={heading}>largest proven oil reserves</strong> (~48 billion barrels). Oil pricing and contracts follow <strong className={heading}>EET</strong>, aligned with Eastern European markets.
            </p>
            <p>
              <strong className={heading}>Leptis Magna</strong> — one of the best-preserved Roman cities in the world — sits on Libya&apos;s Mediterranean coast. The ruins are a <strong className={heading}>UNESCO World Heritage Site</strong> rivaling Pompeii in scale and preservation.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Libya Key Cities — All on EET (UTC+2)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Tripoli', pop: '1.2M', note: 'Capital, Mediterranean coast, medina' },
              { city: 'Benghazi', pop: '630K', note: '2nd city, eastern Libya, port' },
              { city: 'Misrata', pop: '400K', note: '3rd city, industrial, steel' },
              { city: 'Sabha', pop: '130K', note: 'Southern hub, Fezzan gateway, Sahara' },
              { city: 'Zawiya', pop: '200K', note: 'Oil refinery city, near Tripoli' },
              { city: 'Tobruk', pop: '120K', note: 'WWII battle site, eastern port' },
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
