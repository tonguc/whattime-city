'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MaldivesClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Indian/Maldives', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Indian/Maldives', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Maldives</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">MVT &middot; UTC+5 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Mal&eacute;</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Maldives Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'MVT — Maldives Time (UTC+5)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Indian/Maldives' },
              { label: 'Population', value: '~520,000' },
              { label: 'Elevation', value: 'Average 1.5m — world\'s flattest country' },
              { label: 'Famous For', value: 'Overwater villas, coral reefs, climate crisis' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Maldives Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'MV +10 hrs', summer: 'MV +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'MV +5 hrs', summer: 'MV +4 hrs' },
                  { zone: 'India (IST)', winter: 'MV −0:30', summer: 'MV −0:30' },
                  { zone: 'Sri Lanka (SLST)', winter: 'MV −0:30', summer: 'MV −0:30' },
                  { zone: 'Dubai (GST)', winter: 'MV −1 hr', summer: 'MV −1 hr' },
                  { zone: 'China (CST)', winter: 'MV −3 hrs', summer: 'MV −3 hrs' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Resort Island Time — Every Hotel Has Its Own Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Many Maldivian <strong className={heading}>luxury resorts operate on their own &ldquo;island time&rdquo;</strong> — often <strong className={heading}>1 hour ahead of Mal&eacute; (UTC+6)</strong> — to give guests <strong className={heading}>more daylight for activities</strong> and earlier sunsets for dinner ambiance. When you arrive at a resort, always check: <strong className={heading}>&ldquo;What time does this island use?&rdquo;</strong>
            </p>
            <p>
              The Maldives is the <strong className={heading}>world&apos;s flattest country</strong> — average elevation just <strong className={heading}>1.5 meters above sea level</strong>. With <strong className={heading}>~1,190 coral islands</strong> (187 inhabited) spread across <strong className={heading}>26 atolls spanning 870 km</strong>, the Maldives is one of the most <strong className={heading}>geographically dispersed nations on Earth</strong>. Climate change and sea level rise are an <strong className={heading}>existential threat</strong>.
            </p>
            <p>
              Tourism accounts for <strong className={heading}>~30% of GDP</strong> and <strong className={heading}>~60% of foreign exchange</strong>. Over <strong className={heading}>1.9 million tourists</strong> visited in 2023 — nearly <strong className={heading}>4x the population</strong>. Top source markets: <strong className={heading}>China, India, Russia, UK</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Maldives Key Locations — MVT (UTC+5)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Mal\u00e9', pop: '250K', note: 'Capital, world\'s densest island city' },
              { city: 'Hulhumal\u00e9', pop: '80K', note: 'Reclaimed island, new city, airport' },
              { city: 'Addu City', pop: '35K', note: 'Southern atoll, RAF base history' },
              { city: 'North Mal\u00e9 Atoll', pop: '—', note: 'Resort hub, 40+ luxury resorts' },
              { city: 'Baa Atoll', pop: '—', note: 'UNESCO Biosphere, manta rays' },
              { city: 'Ari Atoll', pop: '—', note: 'Whale shark diving, resort cluster' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>{c.pop !== '—' ? `Pop. ${c.pop}` : 'Atoll'}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
