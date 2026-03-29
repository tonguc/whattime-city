'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BahrainClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Bahrain', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Bahrain', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-amber-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Bahrain</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/30">AST &middot; UTC+3 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Manama</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Bahrain Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AST — Arabia Standard Time (UTC+3)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Bahrain' },
              { label: 'Population', value: '~1.5 million (55% expats)' },
              { label: 'Area', value: '780 km² — 3.5x Manhattan' },
              { label: 'Famous For', value: 'F1 Grand Prix, banking hub, pearls' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bahrain Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Their Winter</th>
                  <th className="pb-2">Their Summer</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'BH +8 hrs', summer: 'BH +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'BH +3 hrs', summer: 'BH +2 hrs' },
                  { zone: 'Saudi Arabia (AST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Dubai (GST)', winter: 'BH −1 hr', summer: 'BH −1 hr' },
                  { zone: 'India (IST)', winter: 'BH −2:30', summer: 'BH −2:30' },
                  { zone: 'Singapore (SGT)', winter: 'BH −5 hrs', summer: 'BH −5 hrs' },
                ].map(({ zone, winter, summer }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{winter}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{summer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>F1 Under Lights — Bahrain Grand Prix</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Bahrain Grand Prix</strong> at the Sakhir circuit is the <strong className={heading}>first F1 race held under floodlights</strong> (since 2014). Races start at <strong className={heading}>6 PM AST</strong> — deliberately timed so Europeans can watch at <strong className={heading}>3-4 PM CET (prime time)</strong>. Bahrain often hosts the <strong className={heading}>season opener</strong>.
            </p>
            <p>
              Bahrain is the <strong className={heading}>Gulf&apos;s banking capital</strong> — with <strong className={heading}>400+ financial institutions</strong> in a country smaller than some cities. The <strong className={heading}>Central Bank of Bahrain</strong> was the first Gulf regulator to license <strong className={heading}>crypto exchanges and Islamic fintech</strong>. The country&apos;s <strong className={heading}>25-km King Fahd Causeway</strong> connects it to Saudi Arabia — creating a unique <strong className={heading}>cross-border commuter culture</strong> (same timezone, different country).
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bahrain Key Areas — All on AST (UTC+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Manama', pop: '410K', note: 'Capital, financial district, souks' },
              { city: 'Muharraq', pop: '180K', note: 'Old capital, pearling UNESCO, airport' },
              { city: 'Riffa', pop: '120K', note: 'Residential, royal palaces' },
              { city: 'Bahrain Bay', pop: '—', note: 'New waterfront district, Four Seasons' },
              { city: 'Sakhir', pop: '—', note: 'F1 circuit, university town' },
              { city: 'Amwaj Islands', pop: '—', note: 'Reclaimed islands, expat lifestyle' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>{c.pop !== '—' ? `Pop. ${c.pop}` : 'District'}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
