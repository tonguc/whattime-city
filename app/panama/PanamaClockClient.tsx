'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function PanamaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Panama', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Panama', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Panama
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">EST · UTC-5 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Panama City</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Panama Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EST — Eastern Standard Time (UTC-5)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'America/Panama' },
              { label: 'Population', value: '~4.5 million' },
              { label: 'Currency', value: 'US Dollar (Balboa = pegged 1:1)' },
              { label: 'Famous For', value: 'Canal, banking hub, biodiversity bridge' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panama vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Panama Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'Same time!', summer: 'PA −1 hr' },
                  { zone: 'Los Angeles (PT)', winter: 'PA +3 hrs', summer: 'PA +2 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'PA −5 hrs', summer: 'PA −6 hrs' },
                  { zone: 'Colombia (COT)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Costa Rica (CST)', winter: 'PA +1 hr', summer: 'PA +1 hr' },
                  { zone: 'Japan (JST)', winter: 'PA −14 hrs', summer: 'PA −14 hrs' },
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

      {/* Panama Canal */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Panama Canal — Where Atlantic & Pacific Meet on One Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Panama Canal</strong> is one of humanity&apos;s greatest engineering feats — a <strong className={heading}>82 km waterway</strong> connecting the Atlantic and Pacific oceans. Over <strong className={heading}>14,000 ships</strong> transit annually, carrying <strong className={heading}>~6% of world trade</strong>. A single ship saves <strong className={heading}>~15,000 km</strong> vs. sailing around South America.
            </p>
            <p>
              Here&apos;s a geographic twist: due to Panama&apos;s S-shape, the <strong className={heading}>Pacific entrance is actually EAST</strong> of the Atlantic entrance. Ships enter the canal from the Atlantic on the <strong className={heading}>west side</strong> and exit into the Pacific on the <strong className={heading}>east side</strong> — counter to intuition. The entire canal operates on <strong className={heading}>EST (UTC-5)</strong> — no timezone change during transit.
            </p>
            <p>
              The <strong className={heading}>expanded canal</strong> (2016) added a third set of locks allowing <strong className={heading}>Neo-Panamax ships</strong> — nearly tripling the cargo capacity. Transit takes <strong className={heading}>8-10 hours</strong> and costs an average of <strong className={heading}>$150,000-$450,000 per ship</strong>. The record toll: <strong className={heading}>$2.3 million</strong> for a single container ship.
            </p>
          </div>
        </div>
      </section>

      {/* Banking Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Panama City: Latin America&apos;s Financial Capital</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Panama City&apos;s skyline rivals Miami&apos;s — it&apos;s the <strong className={heading}>financial hub of Latin America</strong> with over <strong className={heading}>90 banks</strong>. The use of the <strong className={heading}>US Dollar</strong> since 1904, combined with <strong className={heading}>territorial taxation</strong> (foreign income not taxed), and the <strong className={heading}>EST timezone</strong> aligning with New York make Panama the <strong className={heading}>go-to jurisdiction</strong> for Latin American and international finance.
            </p>
            <p>
              The <strong className={heading}>Copa Hub</strong> at Tocumen International Airport is the Americas&apos; <strong className={heading}>most connected airport by destinations</strong> — Copa Airlines flies to 80+ cities across the Americas. Panama&apos;s position at the <strong className={heading}>narrowest point of the Americas</strong> makes it a natural logistics hub.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Panamanian Cities — All on EST (UTC-5)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Panama City', pop: '1.9M metro', note: 'Capital, canal, banking skyline' },
              { city: 'Col\u00f3n', pop: '250K', note: 'Atlantic canal entrance, Free Zone' },
              { city: 'David', pop: '150K', note: 'Western hub, Chiriqu\u00ed highlands' },
              { city: 'Santiago', pop: '100K', note: 'Central hub, Veraguas province' },
              { city: 'Bocas del Toro', pop: '15K', note: 'Caribbean islands, expat/surfing hub' },
              { city: 'Boquete', pop: '7K', note: 'Coffee highlands, retiree paradise' },
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
