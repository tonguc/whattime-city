'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MicronesiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Pacific/Chuuk', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Pacific/Chuuk', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white p-6' : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50 p-4' : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-500">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Micronesia</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CHUT &middot; UTC+10</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~115K</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Micronesia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'Chuuk Time (CHUT) UTC+10' },
              { label: 'Eastern Islands', value: 'Pohnpei & Kosrae UTC+11' },
              { label: 'Daylight Saving', value: 'Not observed' },
              { label: 'IANA Identifier', value: 'Pacific/Chuuk' },
              { label: 'Time Zones', value: '2 zones across 4 states' },
              { label: 'Population', value: '~115,000 (2024 est.)' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>607 Islands Across the Pacific</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The Federated States of Micronesia spans <strong className={heading}>607 islands</strong> scattered across the western Pacific, organized into four states: Yap, Chuuk, Pohnpei, and Kosrae. Yap and Chuuk follow <strong className={heading}>UTC+10</strong>, while Pohnpei and Kosrae are on <strong className={heading}>UTC+11</strong> &mdash; making it one of the smallest nations with two time zones.
            </p>
            <p>
              <strong className={heading}>Chuuk Lagoon</strong> is the world&apos;s premier wreck-diving destination, with over 60 Japanese WWII warships resting on the seafloor. On Pohnpei, the ancient city of <strong className={heading}>Nan Madol</strong> &mdash; a UNESCO World Heritage Site dubbed the &ldquo;Venice of the Pacific&rdquo; &mdash; features 92 artificial islets built on coral reefs between 1200 and 1500 AD.
            </p>
            <p>
              Micronesia operates under a <strong className={heading}>Compact of Free Association</strong> with the United States, granting citizens visa-free US entry and access to federal programs. Despite its remote location, the nation&apos;s waters encompass one of the <strong className={heading}>richest marine ecosystems</strong> on Earth.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Towns &amp; Islands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Palikir', pop: '7K', note: 'National capital, Pohnpei (UTC+11)' },
              { city: 'Weno', pop: '14K', note: 'Largest town, Chuuk (UTC+10)' },
              { city: 'Kolonia', pop: '6K', note: 'Pohnpei hub, near Nan Madol' },
              { city: 'Tofol', pop: '3K', note: 'Kosrae state capital (UTC+11)' },
              { city: 'Colonia', pop: '3K', note: 'Yap state capital (UTC+10)' },
              { city: 'Lelu', pop: '2K', note: 'Kosrae, ancient ruins site' },
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
