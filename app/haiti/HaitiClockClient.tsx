'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function HaitiClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Port-au-Prince', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Port-au-Prince', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/Port-au-Prince' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/Port-au-Prince' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Haiti
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">
              {isDST ? 'EDT · UTC-4' : 'EST · UTC-5'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">US-style DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Port-au-Prince</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Haiti Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EST (UTC-5) / EDT (UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov (US pattern)' },
              { label: 'IANA Identifier', value: 'America/Port-au-Prince' },
              { label: 'Population', value: '~11.5 million' },
              { label: 'Languages', value: 'Haitian Creole & French (both official)' },
              { label: 'Famous For', value: 'First Black republic, art, resilience' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Haiti vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Haiti Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">HT Winter (EST)</th>
                  <th className="pb-2">HT Summer (EDT)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'London (GMT/BST)', winter: 'HT −5 hrs', summer: 'HT −5 hrs' },
                  { zone: 'Dominican Rep (AST)', winter: 'HT +1 hr behind', summer: 'Same time!' },
                  { zone: 'Miami (ET)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Montreal (ET)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Paris (CET/CEST)', winter: 'HT −6 hrs', summer: 'HT −6 hrs' },
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

      {/* First Republic */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>First Black Republic — A Revolutionary Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Haiti declared <strong className={heading}>independence on January 1, 1804</strong> — becoming the <strong className={heading}>world&apos;s first Black republic</strong> and the <strong className={heading}>second independent nation in the Americas</strong> (after the US). The <strong className={heading}>Haitian Revolution</strong> (1791-1804) was the only successful large-scale slave revolt in history.
            </p>
            <p>
              Haiti follows <strong className={heading}>US-style DST</strong> (2nd Sunday in March → 1st Sunday in November) — the same schedule as <strong className={heading}>New York and Miami</strong>. This alignment is intentional: the <strong className={heading}>1.5+ million Haitian diaspora in the US</strong> (concentrated in Miami, New York, and Boston) benefits from <strong className={heading}>always being on the same clock</strong> as their family back home.
            </p>
            <p>
              However, next-door neighbor <strong className={heading}>Dominican Republic uses permanent UTC-4</strong>. So during winter, crossing the Hispaniola border means <strong className={heading}>gaining 1 hour</strong> into the DR — but in summer, both sides align on UTC-4.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Haiti Key Cities — All on EST/EDT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Port-au-Prince', pop: '2.8M metro', note: 'Capital, economic hub, resilient city' },
              { city: 'Cap-Ha\u00eftien', pop: '280K', note: '2nd city, Citadelle Laferrière' },
              { city: 'Gonaïves', pop: '230K', note: '"City of Independence", declared 1804' },
              { city: 'Les Cayes', pop: '130K', note: 'Southern port, agricultural hub' },
              { city: 'Jacmel', pop: '40K', note: 'Arts capital, Carnival, UNESCO candidate' },
              { city: 'Jérémie', pop: '35K', note: '"City of Poets", cacao, beaches' },
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
