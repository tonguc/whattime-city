'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function PapuaNewGuineaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Pacific/Port_Moresby', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Pacific/Port_Moresby', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Papua New Guinea</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">PGT &middot; UTC+10</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~10 Million</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Papua New Guinea Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Papua New Guinea Time (PGT)' },
              { label: 'UTC Offset', value: 'UTC+10 year-round' },
              { label: 'Daylight Saving', value: 'Not observed' },
              { label: 'IANA Identifier', value: 'Pacific/Port_Moresby' },
              { label: 'Single Time Zone', value: 'Entire country on PGT' },
              { label: 'Population', value: '~10 million (2024 est.)' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s Most Linguistically Diverse Nation</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Papua New Guinea is home to over <strong className={heading}>840 living languages</strong> &mdash; roughly 12% of all languages on Earth &mdash; making it the most linguistically diverse country in the world. Most of its <strong className={heading}>10 million people</strong> live in remote highland villages connected by few roads, preserving cultures largely unchanged for thousands of years.
            </p>
            <p>
              The legendary <strong className={heading}>Kokoda Track</strong> is a grueling 96-kilometer trail through dense jungle and mountain passes, retracing a pivotal WWII battleground. Highland <strong className={heading}>sing-sing festivals</strong> bring together dozens of tribes in spectacular displays of body paint, feathered headdresses, and traditional dance &mdash; the most famous being the Goroka and Mount Hagen shows.
            </p>
            <p>
              PNG is one of the <strong className={heading}>least explored countries</strong> on Earth, with vast tracts of uncharted rainforest sheltering <strong className={heading}>birds of paradise</strong> &mdash; 38 of the world&apos;s 42 species are found here. The nation&apos;s waters host some of the richest coral reef systems in the <strong className={heading}>Coral Triangle</strong>, rivaling the Great Barrier Reef in biodiversity.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Papua New Guinea Cities &mdash; All on PGT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Port Moresby', pop: '365K', note: 'National capital, coastal hub' },
              { city: 'Lae', pop: '149K', note: 'Industrial center, Morobe Province' },
              { city: 'Mount Hagen', pop: '46K', note: 'Highlands hub, sing-sing festival' },
              { city: 'Arawa', pop: '40K', note: 'Bougainville, autonomous region' },
              { city: 'Madang', pop: '32K', note: 'Scenic coast, diving destination' },
              { city: 'Wewak', pop: '28K', note: 'East Sepik, WWII history' },
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
