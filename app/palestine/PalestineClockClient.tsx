'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function PalestineClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Gaza', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Gaza', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Asia/Gaza' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Asia/Gaza' })
      setIsDST(new Date(nowStr).getTimezoneOffset() !== new Date(janStr).getTimezoneOffset())
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
        <div className="rounded-2xl text-white p-6 text-center bg-green-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Palestine</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">{isDST ? 'EEST · UTC+3' : 'EET · UTC+2'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">DST Observed</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Gaza / Ramallah</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Palestine Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'DST Rule', value: 'Last Saturday Mar → Last Saturday Oct' },
              { label: 'IANA Identifiers', value: 'Asia/Gaza & Asia/Hebron' },
              { label: 'Population', value: '~5.4 million' },
              { label: 'Two IANA Zones', value: 'Gaza & West Bank have separate entries' },
              { label: 'Famous For', value: 'Ancient history, olive oil, resilience' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Two IANA Zones for One Territory</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Palestine has <strong className={heading}>two separate IANA timezone identifiers</strong>: <strong className={heading}>Asia/Gaza</strong> (Gaza Strip) and <strong className={heading}>Asia/Hebron</strong> (West Bank). Both use <strong className={heading}>EET/EEST</strong>, but historically their DST transition dates have occasionally differed — making Palestine one of the few territories with <strong className={heading}>potentially different clocks for the same nominal timezone</strong>.
            </p>
            <p>
              Palestine&apos;s DST schedule is set by the <strong className={heading}>Palestinian Authority</strong> and doesn&apos;t always match Israel&apos;s DST dates. This has occasionally created situations where <strong className={heading}>neighboring areas within a few kilometers</strong> were on <strong className={heading}>different times</strong> for brief periods during transition weekends.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Palestine Key Cities — EET/EEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Gaza City', pop: '600K', note: 'Gaza Strip, Mediterranean coast' },
              { city: 'Ramallah', pop: '80K', note: 'De facto capital, PA headquarters' },
              { city: 'Hebron (Al-Khalil)', pop: '220K', note: 'Largest WB city, Ibrahimi Mosque' },
              { city: 'Nablus', pop: '160K', note: 'Old City, soap & sweets industry' },
              { city: 'Bethlehem', pop: '30K', note: 'Nativity Church, tourism' },
              { city: 'Jericho', pop: '25K', note: 'Oldest city on Earth, Dead Sea' },
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
