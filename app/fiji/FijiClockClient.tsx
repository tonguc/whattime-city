'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function FijiClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Pacific/Fiji', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Pacific/Fiji', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Pacific/Fiji' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Pacific/Fiji' })
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
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-purple-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Fiji
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">
              {isDST ? 'FJDT · UTC+13' : 'FJT · UTC+12'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Southern Hemisphere DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Suva</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Fiji Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Standard Time', value: 'FJT — Fiji Time (UTC+12)' },
              { label: 'Summer Time', value: 'FJDT (UTC+13) — Southern Hemisphere!' },
              { label: 'DST Rule', value: '~2nd Sunday Nov → ~2nd Sunday Jan' },
              { label: 'IANA Identifier', value: 'Pacific/Fiji' },
              { label: 'Population', value: '~900,000' },
              { label: 'Famous For', value: 'First to see new day, rugby, coral reefs' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiji vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Fiji Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Fiji is among the first places to see each new day. During DST (Nov-Jan), Fiji reaches UTC+13 — among the world&apos;s most extreme offsets.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">FJ Standard</th>
                  <th className="pb-2">FJ Summer (DST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'FJ +17 hrs', summer: 'FJ +18 hrs' },
                  { zone: 'London (GMT)', winter: 'FJ +12 hrs', summer: 'FJ +13 hrs' },
                  { zone: 'Sydney (AEST/AEDT)', winter: 'FJ +2 hrs', summer: 'FJ +2 hrs' },
                  { zone: 'New Zealand (NZST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Tokyo (JST)', winter: 'FJ +3 hrs', summer: 'FJ +4 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'FJ +20 hrs', summer: 'FJ +21 hrs' },
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

      {/* First to See New Year */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>First to See the New Year — UTC+13 During New Year&apos;s Eve</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              During DST (November-January), Fiji is on <strong className={heading}>UTC+13</strong> — making it one of the <strong className={heading}>first places on Earth to ring in the New Year</strong>. When Fiji celebrates midnight on December 31, it&apos;s still <strong className={heading}>December 30 at 6 AM in New York</strong> and <strong className={heading}>December 30 at 11 AM in London</strong>.
            </p>
            <p>
              This makes Fiji a <strong className={heading}>premium New Year&apos;s Eve destination</strong> — global media broadcasts Fiji&apos;s midnight celebrations as the <strong className={heading}>&ldquo;first of the world&rdquo;</strong>. The 180th meridian (International Date Line) actually passes through Fiji — the country sits at the <strong className={heading}>edge of where each new day begins</strong>.
            </p>
            <p>
              <strong className={heading}>&ldquo;Fiji Time&rdquo;</strong> is also a cultural concept — Fijians are famously relaxed about schedules, with the phrase meaning &ldquo;things happen when they happen.&rdquo; The concept of <strong className={heading}>bula</strong> (hello/life/health) captures the island&apos;s <strong className={heading}>unhurried approach to time</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Rugby & Culture */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Rugby Sevens Champions — Fiji&apos;s Global Sport</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Fiji won <strong className={heading}>Olympic Gold in rugby sevens</strong> at both the <strong className={heading}>2016 (Rio) and 2020 (Tokyo)</strong> Olympics — the country&apos;s first-ever Olympic medals. Rugby is Fiji&apos;s <strong className={heading}>national religion</strong>, and the timezone challenge is real: major international tournaments in Europe (UTC+0/+1) mean Fijians watch at <strong className={heading}>1-4 AM local time</strong>.
            </p>
            <p>
              Fiji is a <strong className={heading}>333-island archipelago</strong> (110 inhabited) spread across <strong className={heading}>1.3 million km² of ocean</strong>. Despite its small population, Fiji is the <strong className={heading}>hub of the South Pacific</strong> — Nadi airport connects to Australia, New Zealand, the US, and Asia. Tourism is the <strong className={heading}>#1 industry</strong> (40% of GDP), with <strong className={heading}>900,000+ visitors/year</strong> — more tourists than citizens.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Fiji Key Locations — All on FJT/FJDT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Suva', pop: '95K', note: 'Capital, government, South Pacific hub' },
              { city: 'Nadi', pop: '70K', note: 'International airport, tourism gateway' },
              { city: 'Lautoka', pop: '55K', note: '2nd largest, "Sugar City", port' },
              { city: 'Labasa', pop: '28K', note: 'Vanua Levu hub, sugar industry' },
              { city: 'Denarau Island', pop: '—', note: 'Resort island, 5-star hotels, marina' },
              { city: 'Savusavu', pop: '5K', note: '"Hidden paradise", hot springs, diving' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>{c.pop !== '—' ? `Pop. ${c.pop}` : 'Resort area'}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
