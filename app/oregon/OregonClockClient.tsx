'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function OregonClockClient() {
  const { isLight } = useCityContext()
  const [timePT, setTimePT] = useState('--:--:--')
  const [timeMT, setTimeMT] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimePT(now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimeMT(now.toLocaleTimeString('en-US', { timeZone: 'America/Boise', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Oregon</div>
          <div className="flex justify-center gap-8 mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timePT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Most of Oregon (PT)</div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeMT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">East Oregon (MT)</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">
              {isDST ? 'PDT · UTC-7 / MDT · UTC-6' : 'PST · UTC-8 / MST · UTC-7'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">2 Time Zones</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Oregon Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'PT — Pacific Time (most of state)' },
              { label: 'Eastern Oregon', value: 'MT — Mountain Time (Malheur County)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'Permanent DST', value: 'Voted 2019 (with WA) — awaiting Congress' },
              { label: 'Population', value: '~4.2 million' },
              { label: 'Famous For', value: 'Nike, Portland, Crater Lake, no sales tax' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Portland Time — Where Nike and Intel Set the Pacific Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Nike</strong> — the world&apos;s largest sportswear company — is headquartered in <strong className={heading}>Beaverton, Oregon</strong>. Global product launches, athlete endorsement announcements, and earnings calls all happen on <strong className={heading}>Pacific Time</strong>. Oregon is also home to <strong className={heading}>Intel&apos;s largest manufacturing site</strong> (Hillsboro), where <strong className={heading}>cutting-edge chip fabrication</strong> runs 24/7.
            </p>
            <p>
              Oregon is one of the few US states split between <strong className={heading}>two time zones</strong>. The vast majority follows <strong className={heading}>PT</strong>, but <strong className={heading}>Malheur County</strong> in the far southeast corner uses <strong className={heading}>Mountain Time</strong> — it&apos;s geographically and economically tied to <strong className={heading}>Boise, Idaho</strong> rather than Portland.
            </p>
            <p>
              Oregon has <strong className={heading}>no sales tax</strong> — making it a <strong className={heading}>shopping destination</strong> for neighboring Washington and California residents. Portland is also famous for its <strong className={heading}>food cart culture</strong> (600+ carts), <strong className={heading}>craft beer scene</strong> (70+ breweries in the city), and the motto <strong className={heading}>&ldquo;Keep Portland Weird.&rdquo;</strong>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Oregon Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Portland', pop: '650K', note: 'PT · Largest city, Nike, craft beer' },
              { city: 'Salem', pop: '180K', note: 'PT · State capital, Willamette Valley' },
              { city: 'Eugene', pop: '175K', note: 'PT · U of Oregon, Track Town USA' },
              { city: 'Hillsboro', pop: '110K', note: 'PT · Intel campus, Silicon Forest' },
              { city: 'Bend', pop: '105K', note: 'PT · Outdoor recreation, ski resort' },
              { city: 'Ontario', pop: '12K', note: 'MT · Malheur County, Idaho border' },
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
