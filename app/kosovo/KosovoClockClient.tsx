'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function KosovoClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Belgrade', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Belgrade', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Belgrade' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Belgrade' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Kosovo</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-yellow-400/40">{isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">EU-style DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pristina</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Kosovo Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Belgrade (no separate entry)' },
              { label: 'Population', value: '~1.8 million' },
              { label: 'Youngest Country', value: 'Independence 2008 — Europe\'s newest' },
              { label: 'Famous For', value: 'Youngest population in Europe, diaspora' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Europe&apos;s Youngest Country &amp; Population</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Kosovo declared independence in <strong className={heading}>2008</strong> — making it <strong className={heading}>Europe&apos;s newest country</strong>. It has the <strong className={heading}>youngest population in Europe</strong> (median age ~30), creating a dynamic, youthful energy. The country uses <strong className={heading}>CET (same as Serbia, Albania&apos;s neighbor)</strong> and has no separate IANA timezone identifier.
            </p>
            <p>
              Kosovo&apos;s <strong className={heading}>large diaspora</strong> (estimated <strong className={heading}>800,000+</strong> in Germany, Switzerland, Scandinavia, and the US) maintains strong connections — <strong className={heading}>remittances account for ~15% of GDP</strong>. The <strong className={heading}>CET timezone</strong> means diaspora in Western/Central Europe are on the <strong className={heading}>exact same clock</strong>, making family calls seamless.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Kosovo Key Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Pristina', pop: '210K', note: 'Capital, Newborn monument, cafés' },
              { city: 'Prizren', pop: '85K', note: 'Cultural capital, Ottoman heritage' },
              { city: 'Peja/Pe\u0107', pop: '100K', note: 'Western hub, Rugova Canyon' },
              { city: 'Gjakova', pop: '90K', note: 'Old Bazaar, Hadum Mosque' },
              { city: 'Mitrovica', pop: '70K', note: 'Divided city (north/south bridge)' },
              { city: 'Ferizaj', pop: '110K', note: 'Southern hub, Camp Bondsteel nearby' },
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
