'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function OhioClockClient() {
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Ohio</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-orange-400/40">{isDST ? 'EDT · UTC-4' : 'EST · UTC-5'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Eastern Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Buckeye State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Ohio Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~11.8 million — 7th largest US state' },
              { label: 'Aviation Birthplace', value: 'Wright Brothers from Dayton, Ohio' },
              { label: 'Famous For', value: '7 US Presidents, Rock Hall of Fame, football' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ohio — Where Eastern Time Meets the Midwest</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Ohio sits on the <strong className={heading}>western edge of the Eastern Time zone</strong> — geographically, it&apos;s very close to the <strong className={heading}>ET/CT boundary</strong>. This means Ohio gets <strong className={heading}>later sunsets than eastern ET states</strong> like Massachusetts. In summer, Cincinnati doesn&apos;t see sunset until <strong className={heading}>nearly 9:10 PM EDT</strong>, while Boston&apos;s last light is at <strong className={heading}>8:25 PM</strong>.
            </p>
            <p>
              <strong className={heading}>7 US Presidents</strong> were born in Ohio — more than any state except Virginia. The state is also the <strong className={heading}>ultimate swing state</strong> in elections: <strong className={heading}>no Republican has ever won the presidency without winning Ohio</strong>. Election night coverage focuses heavily on Ohio results, typically announced on <strong className={heading}>ET</strong>.
            </p>
            <p>
              The <strong className={heading}>Wright Brothers</strong> built and tested their aircraft in <strong className={heading}>Dayton, Ohio</strong> before their famous first flight at Kitty Hawk. Ohio is also home to <strong className={heading}>NASA&apos;s Glenn Research Center</strong> in Cleveland and produced <strong className={heading}>more astronauts than any other state</strong> — including John Glenn and Neil Armstrong.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Ohio Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Columbus', pop: '905K', note: 'State capital, Ohio State, fastest growing' },
              { city: 'Cleveland', pop: '370K', note: 'Rock Hall of Fame, Clinic, Lake Erie' },
              { city: 'Cincinnati', pop: '310K', note: 'P&G HQ, chili, Ohio River' },
              { city: 'Toledo', pop: '270K', note: 'Glass City, auto industry' },
              { city: 'Dayton', pop: '137K', note: 'Wright Brothers, aviation birthplace' },
              { city: 'Akron', pop: '190K', note: 'Rubber capital, Goodyear, LeBron' },
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
