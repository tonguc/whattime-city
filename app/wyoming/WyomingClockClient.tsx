'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function WyomingClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Denver', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Denver', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janOffset = -new Date(jan.toLocaleString('en-US', { timeZone: 'America/Denver' })).getTimezoneOffset()
      const nowOffset = -new Date(now.toLocaleString('en-US', { timeZone: 'America/Denver' })).getTimezoneOffset()
      setIsDST(nowOffset !== janOffset)
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Wyoming</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'MDT UTC−6' : 'MST UTC−7'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Mountain Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Equality State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Wyoming Time Zone Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Mountain Time (entire state)' },
              { label: 'IANA Identifier', value: 'America/Denver' },
              { label: 'UTC Offset', value: 'UTC−7 standard / UTC−6 DST' },
              { label: 'Daylight Saving', value: 'Yes — observes DST' },
              { label: 'State Capital', value: 'Cheyenne (Mountain Time)' },
              { label: 'Population', value: '~580K — least populous state' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Yellowstone, Cowboys &amp; Energy</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Wyoming is the <strong className={heading}>least populated US state</strong> — but among the most geographically dramatic. <strong className={heading}>Yellowstone National Park</strong>, the world&apos;s first national park (1872), sits in the northwest corner. <strong className={heading}>Grand Teton National Park</strong> and the resort town of <strong className={heading}>Jackson Hole</strong> draw millions of visitors annually.
            </p>
            <p>
              Wyoming is a major <strong className={heading}>energy producer</strong> — the nation&apos;s largest coal producer and a significant source of natural gas and oil. The <strong className={heading}>Powder River Basin</strong> contains massive low-sulfur coal reserves. Wyoming also leads the US in <strong className={heading}>uranium production</strong>.
            </p>
            <p>
              All of Wyoming operates on <strong className={heading}>Mountain Time (America/Denver)</strong>. There are no time zone splits within the state, making scheduling across Wyoming straightforward — unlike neighboring Idaho or South Dakota, which span two time zones.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Wyoming Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Cheyenne', pop: '65K', note: 'MT · State capital, I-25/I-80' },
              { city: 'Casper', pop: '59K', note: 'MT · Oil country hub' },
              { city: 'Laramie', pop: '33K', note: 'MT · UW, high plains city' },
              { city: 'Gillette', pop: '32K', note: 'MT · Coal capital, Powder River' },
              { city: 'Jackson', pop: '11K', note: 'MT · Jackson Hole ski resort' },
              { city: 'Rock Springs', pop: '23K', note: 'MT · Trona mining, US-191' },
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
