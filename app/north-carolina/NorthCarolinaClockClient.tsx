'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function NorthCarolinaClockClient() {
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in North Carolina</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-orange-400/40">{isDST ? 'EDT · UTC-4' : 'EST · UTC-5'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Eastern Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Tar Heel State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>North Carolina Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~10.7 million — 9th largest US state' },
              { label: 'Research Triangle', value: 'Raleigh-Durham-Chapel Hill tech corridor' },
              { label: 'Famous For', value: 'First flight, banking, BBQ, Research Triangle' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Research Triangle — The South&apos;s Tech Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Research Triangle</strong> (Raleigh, Durham, Chapel Hill) is one of the <strong className={heading}>fastest-growing tech hubs in the US</strong>. <strong className={heading}>Apple, Google, Meta, and Epic Games</strong> all have major offices here. The area&apos;s <strong className={heading}>ET timezone</strong> gives it a competitive edge — aligned with <strong className={heading}>Wall Street and DC</strong> while being <strong className={heading}>30-40% cheaper than NYC or SF</strong>.
            </p>
            <p>
              <strong className={heading}>Charlotte</strong> is the <strong className={heading}>2nd largest banking center in the US</strong> after New York. <strong className={heading}>Bank of America and Truist</strong> are headquartered here, and <strong className={heading}>Wells Fargo&apos;s East Coast operations</strong> are major. Charlotte&apos;s banks manage <strong className={heading}>trillions in assets</strong> on ET.
            </p>
            <p>
              The <strong className={heading}>Wright Brothers&apos; first powered flight</strong> took place at <strong className={heading}>Kitty Hawk, North Carolina</strong> on December 17, 1903. The flight lasted <strong className={heading}>12 seconds at 10:35 AM</strong> — a moment timed on what would become <strong className={heading}>Eastern Standard Time</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major North Carolina Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Charlotte', pop: '880K', note: 'Banking capital, NASCAR, 2nd largest' },
              { city: 'Raleigh', pop: '470K', note: 'State capital, Research Triangle' },
              { city: 'Durham', pop: '300K', note: 'Duke University, biotech, Bull City' },
              { city: 'Greensboro', pop: '300K', note: 'Textiles, civil rights history' },
              { city: 'Asheville', pop: '95K', note: 'Blue Ridge Mountains, Biltmore, craft beer' },
              { city: 'Wilmington', pop: '120K', note: 'Film industry, beaches, port' },
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
