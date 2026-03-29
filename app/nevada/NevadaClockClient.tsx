'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function NevadaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Nevada</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">{isDST ? 'PDT · UTC-7' : 'PST · UTC-8'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pacific Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Silver State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Nevada Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'PT — Pacific Time (UTC-8/UTC-7)' },
              { label: 'Exception', value: 'West Wendover uses MT (near Utah border)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Los_Angeles' },
              { label: 'Population', value: '~3.2 million' },
              { label: 'Famous For', value: 'Las Vegas, casinos, Area 51, no state tax' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Vegas Never Sleeps — But It Runs on Pacific Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Las Vegas</strong> casinos famously have <strong className={heading}>no clocks and no windows</strong> — designed to make you lose track of time. Yet the city itself runs strictly on <strong className={heading}>Pacific Time</strong>. Las Vegas hosts <strong className={heading}>42 million visitors annually</strong> and generates <strong className={heading}>$15B+ in gaming revenue</strong>. Major events (CES, boxing, F1 Las Vegas GP) are timed to <strong className={heading}>PT</strong>.
            </p>
            <p>
              Nevada has <strong className={heading}>no state income tax</strong> — funded entirely by gaming and tourism revenue. This has attracted a massive <strong className={heading}>tech migration</strong>: <strong className={heading}>Tesla&apos;s Gigafactory</strong> is in Sparks (near Reno), and <strong className={heading}>Switch, the world&apos;s largest data center campus</strong>, operates in Las Vegas. Companies relocating from California save on taxes while staying on the <strong className={heading}>same timezone</strong>.
            </p>
            <p>
              <strong className={heading}>West Wendover</strong> — a tiny casino town on the Utah border — is the one exception: it uses <strong className={heading}>Mountain Time</strong> to stay aligned with nearby <strong className={heading}>Salt Lake City</strong> customers who drive across the border to gamble.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Nevada Cities — PT (except noted)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Las Vegas', pop: '650K', note: 'PT · Entertainment capital, F1, casinos' },
              { city: 'Henderson', pop: '320K', note: 'PT · Las Vegas suburb, fastest growing' },
              { city: 'Reno', pop: '265K', note: 'PT · "Biggest Little City," tech hub' },
              { city: 'North Las Vegas', pop: '265K', note: 'PT · Nellis AFB, logistics hub' },
              { city: 'Sparks', pop: '110K', note: 'PT · Tesla Gigafactory, Reno metro' },
              { city: 'West Wendover', pop: '4K', note: 'MT · Utah border, casino town' },
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
