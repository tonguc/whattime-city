'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function NorwayClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Oslo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Oslo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Oslo' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Oslo' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Norway
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Midnight Sun · 58°N–71°N</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Oslo</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Norway Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Oslo' },
              { label: 'Population', value: '~5.5 million' },
              { label: 'Latitude Range', value: '58°N – 71°N (includes Arctic)' },
              { label: 'Territories', value: 'Svalbard (78°N) — same CET timezone' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Norway vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Norway Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">NO Winter (CET)</th>
                  <th className="pb-2">NO Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'NO +6 hrs', summer: 'NO +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'NO +9 hrs', summer: 'NO +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'NO +1 hr', summer: 'NO +1 hr' },
                  { zone: 'India (IST)', winter: 'NO −4:30', summer: 'NO −3:30' },
                  { zone: 'Japan (JST)', winter: 'NO −8 hrs', summer: 'NO −7 hrs' },
                  { zone: 'Sweden (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* Midnight Sun */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Midnight Sun & M&oslash;rketid — Norway&apos;s Light Extremes</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Norway stretches from <strong className={heading}>58°N to 71°N</strong> — making it one of the most latitudinally extreme countries on Earth. In <strong className={heading}>Hammerfest</strong> and <strong className={heading}>Troms&oslash;</strong> (above the Arctic Circle), the sun doesn&apos;t set for <strong className={heading}>~2 months</strong> in summer.
            </p>
            <p>
              The flip side is <strong className={heading}>m&oslash;rketid</strong> (dark time): Troms&oslash; gets <strong className={heading}>zero direct sunlight</strong> from late November to mid-January. Norway&apos;s northernmost territory, <strong className={heading}>Svalbard (78°N)</strong>, experiences <strong className={heading}>4 months of midnight sun</strong> and <strong className={heading}>4 months of polar night</strong>.
            </p>
          </div>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Midsummer (Jun 21)</th>
                  <th className="pb-2">Midwinter (Dec 21)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { city: 'Oslo (60°N)', summer: '~18.5 hrs daylight', winter: '~6 hrs daylight' },
                  { city: 'Troms\u00f8 (69°N)', summer: '24 hrs (midnight sun)', winter: '0 hrs (polar night)' },
                  { city: 'Svalbard (78°N)', summer: '24 hrs for 4 months', winter: '0 hrs for 4 months' },
                ].map(({ city, summer, winter }) => (
                  <tr key={city}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{city}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{summer}</td>
                    <td className={`py-2 ${subText}`}>{winter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Oil Fund */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The $1.7 Trillion Oil Fund — World&apos;s Largest Sovereign Wealth Fund</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Norway&apos;s <strong className={heading}>Government Pension Fund Global</strong> (the &ldquo;Oil Fund&rdquo;) is worth over <strong className={heading}>$1.7 trillion</strong> — roughly <strong className={heading}>$300,000 per Norwegian citizen</strong>. It owns ~1.5% of all publicly listed stocks worldwide.
            </p>
            <p>
              The fund&apos;s managers at <strong className={heading}>Norges Bank Investment Management</strong> in Oslo operate on CET, but manage assets across every timezone. Their trading desk is active from <strong className={heading}>Asian market open (1 AM CET)</strong> through <strong className={heading}>US market close (10 PM CET)</strong> — nearly 24 hours of market coverage from a single timezone.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Norwegian Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Oslo', pop: '1.1M metro', note: 'Capital, Oil Fund HQ, tech hub' },
              { city: 'Bergen', pop: '285K', note: 'Fjord gateway, 248 rainy days/year' },
              { city: 'Trondheim', pop: '210K', note: 'Tech university (NTNU), historic' },
              { city: 'Stavanger', pop: '145K', note: 'Oil capital, Equinor HQ' },
              { city: 'Troms\u00f8', pop: '77K', note: 'Arctic Circle, Northern Lights hub' },
              { city: 'Longyearbyen', pop: '2.5K', note: 'Svalbard, 78°N, northernmost town' },
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
