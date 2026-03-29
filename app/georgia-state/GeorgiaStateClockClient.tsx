'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function GeorgiaStateClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/New_York', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/New_York' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/New_York' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Georgia (US State)</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-orange-400/40">{isDST ? 'EDT · UTC-4' : 'EST · UTC-5'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Eastern Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Peach State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Georgia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~10.9 million — 8th largest US state' },
              { label: 'ATL Airport', value: 'World\'s busiest (93M+ passengers/year)' },
              { label: 'Famous For', value: 'Atlanta, Coca-Cola, peaches, CNN, MLK' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Atlanta — The South&apos;s Capital on Eastern Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Hartsfield-Jackson Atlanta International Airport (ATL)</strong> has been the <strong className={heading}>world&apos;s busiest airport</strong> for over two decades — <strong className={heading}>93+ million passengers annually</strong>. Its ET location makes it the <strong className={heading}>ideal domestic connection hub</strong>: flights to both coasts are manageable same-day roundtrips. Delta Air Lines, headquartered here, schedules its global network around <strong className={heading}>Atlanta time</strong>.
            </p>
            <p>
              Atlanta is the <strong className={heading}>corporate capital of the Southeast</strong>: <strong className={heading}>Coca-Cola, Home Depot, UPS, Delta, Southern Company, and NCR</strong> all headquarter here. The city is also the <strong className={heading}>center of Black culture and business in America</strong> — home to <strong className={heading}>Morehouse, Spelman, Clark Atlanta</strong> (the largest HBCU cluster), and the birthplace of <strong className={heading}>Martin Luther King Jr.</strong>
            </p>
            <p>
              <strong className={heading}>CNN</strong> was founded in Atlanta in 1980 — the world&apos;s first <strong className={heading}>24-hour news network</strong>. Its headquarters at CNN Center operates on <strong className={heading}>ET</strong>, and the 24-hour news cycle concept was born from the idea that <strong className={heading}>news doesn&apos;t follow timezones</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Georgia Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Atlanta', pop: '500K', note: '6M metro, Delta hub, Coca-Cola HQ' },
              { city: 'Augusta', pop: '200K', note: 'The Masters golf, Army cyber command' },
              { city: 'Savannah', pop: '150K', note: 'Historic district, port city, SCAD' },
              { city: 'Columbus', pop: '200K', note: 'Fort Moore (Benning), Chattahoochee' },
              { city: 'Macon', pop: '155K', note: 'Cherry blossoms, music heritage' },
              { city: 'Athens', pop: '130K', note: 'UGA, music scene (R.E.M., B-52s)' },
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
