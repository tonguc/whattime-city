'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MassachusettsClockClient() {
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-900">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Massachusetts</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-orange-400/40">{isDST ? 'EDT · UTC-4' : 'EST · UTC-5'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Eastern Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Bay State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Massachusetts Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~7 million' },
              { label: 'Atlantic TZ Debate', value: '2017 commission recommended switching to AST' },
              { label: 'Famous For', value: 'MIT, Harvard, Boston Marathon, biotech' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The State That Almost Changed Timezone</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>2017</strong>, a Massachusetts state commission <strong className={heading}>seriously recommended switching to Atlantic Standard Time (AST, UTC-4)</strong> — which would mean <strong className={heading}>permanent EDT year-round</strong> and no more clock changes. The reasoning: Massachusetts gets <strong className={heading}>too-dark winters</strong> and would benefit from later sunsets. The proposal stalled but <strong className={heading}>remains the most studied US timezone-change proposal</strong>.
            </p>
            <p>
              Boston is the <strong className={heading}>biotech and pharma capital of the world</strong>. The <strong className={heading}>Kendall Square</strong> area near MIT hosts more biotech companies per square mile than anywhere on Earth — Moderna, Pfizer, Novartis, and 1,000+ startups all run on <strong className={heading}>ET</strong>. When clinical trial results drop, they move markets at <strong className={heading}>Boston time</strong>.
            </p>
            <p>
              The <strong className={heading}>Boston Marathon</strong> — the world&apos;s oldest annual marathon (since 1897) — starts at <strong className={heading}>10:00 AM ET</strong> on Patriots&apos; Day (3rd Monday in April). It&apos;s watched globally and remains the <strong className={heading}>most prestigious marathon qualifier</strong> in running.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Massachusetts Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Boston', pop: '675K', note: 'Capital, MIT/Harvard, biotech hub' },
              { city: 'Worcester', pop: '205K', note: '2nd largest, healthcare center' },
              { city: 'Springfield', pop: '155K', note: 'Basketball birthplace (1891)' },
              { city: 'Cambridge', pop: '120K', note: 'MIT + Harvard, Kendall Square' },
              { city: 'Lowell', pop: '115K', note: 'Industrial Revolution birthplace' },
              { city: 'New Bedford', pop: '100K', note: 'Whaling capital, fishing port' },
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
