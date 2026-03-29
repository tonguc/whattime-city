'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SouthCarolinaClockClient() {
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
        <div className="rounded-2xl text-white p-6 text-center bg-indigo-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in South Carolina</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">{isDST ? 'EDT · UTC-4' : 'EST · UTC-5'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Eastern Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Palmetto State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>South Carolina Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~5.2 million — 23rd largest state' },
              { label: 'Capital', value: 'Columbia — center of the Midlands' },
              { label: 'Famous For', value: 'Boeing, beaches, BMW, history' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Dreamliners, Beaches &amp; BMW — South Carolina on Eastern Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Charleston</strong> is home to <strong className={heading}>Boeing&apos;s 787 Dreamliner factory</strong>, one of the largest buildings in the world by volume. The North Charleston assembly line operates on <strong className={heading}>Eastern Time</strong>, coordinating deliveries with suppliers across time zones. Charleston also draws millions of tourists annually to its historic district, plantations, and waterfront — consistently ranked among America&apos;s top cities.
            </p>
            <p>
              In <strong className={heading}>Spartanburg</strong>, <strong className={heading}>BMW operates its largest factory worldwide</strong>, producing over <span style={{ fontVariantNumeric: 'tabular-nums' }}>1,500</span> vehicles per day. The plant employs more than <span style={{ fontVariantNumeric: 'tabular-nums' }}>11,000</span> workers and is South Carolina&apos;s single largest exporter. Shifts and logistics run strictly on ET, syncing with BMW&apos;s Munich headquarters <span style={{ fontVariantNumeric: 'tabular-nums' }}>6</span> hours ahead in CET.
            </p>
            <p>
              <strong className={heading}>Myrtle Beach</strong> welcomes over <span style={{ fontVariantNumeric: 'tabular-nums' }}>20</span> million visitors annually along the <strong className={heading}>Grand Strand</strong>, a <span style={{ fontVariantNumeric: 'tabular-nums' }}>60</span>-mile stretch of coastline. And at <strong className={heading}>Fort Sumter</strong> in Charleston Harbor, the first shots of the <strong className={heading}>Civil War</strong> were fired on April <span style={{ fontVariantNumeric: 'tabular-nums' }}>12</span>, <span style={{ fontVariantNumeric: 'tabular-nums' }}>1861</span> at <span style={{ fontVariantNumeric: 'tabular-nums' }}>4:30 AM</span> — a moment that changed the course of American history.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major South Carolina Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Charleston', pop: '150K', note: 'Boeing factory, historic port city' },
              { city: 'Columbia', pop: '137K', note: 'State capital, Univ. of South Carolina' },
              { city: 'Greenville', pop: '74K', note: 'Upstate hub, revitalized downtown' },
              { city: 'Myrtle Beach', pop: '35K', note: 'Grand Strand, 20M+ visitors/year' },
              { city: 'Spartanburg', pop: '38K', note: 'BMW world\'s largest plant' },
              { city: 'Rock Hill', pop: '75K', note: 'Charlotte metro, fast-growing' },
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
