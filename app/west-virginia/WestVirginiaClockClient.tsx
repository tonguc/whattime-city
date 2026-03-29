'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function WestVirginiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/New_York', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in West Virginia</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">ET &middot; UTC-5 / UTC-4</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Observes DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~1.8 Million</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>West Virginia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Eastern Time (ET)' },
              { label: 'UTC Offset', value: 'UTC-5 (standard) / UTC-4 (DST)' },
              { label: 'Daylight Saving', value: 'Yes — clocks spring forward in March' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Single Time Zone', value: 'Entire state on Eastern Time' },
              { label: 'Population', value: '~1.8 million (2024 est.)' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Mountain State &mdash; Coal to Adventure Tourism</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              West Virginia is the only state <strong className={heading}>entirely within the Appalachian Mountains</strong>, earning its nickname &ldquo;The Mountain State.&rdquo; For over a century, <strong className={heading}>coal mining</strong> defined its economy and culture. Today the state is transitioning toward <strong className={heading}>tourism, tech, and renewable energy</strong>.
            </p>
            <p>
              In 2020, <strong className={heading}>New River Gorge</strong> became America&apos;s newest national park &mdash; the 63rd in the system. The park&apos;s iconic <strong className={heading}>876-foot steel arch bridge</strong> hosts the annual Bridge Day festival, the largest extreme sports event in the US. The <strong className={heading}>Greenbrier</strong> resort in White Sulphur Springs has hosted presidents since 1778 and once concealed a secret Cold War bunker for Congress.
            </p>
            <p>
              West Virginia&apos;s <strong className={heading}>pepperoni roll</strong> &mdash; a bread roll stuffed with pepperoni &mdash; is the unofficial state food, invented by Italian immigrant coal miners as a portable lunch. The state is also home to the <strong className={heading}>Green Bank Observatory</strong>, where cell phones and WiFi are banned in the surrounding National Radio Quiet Zone.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major West Virginia Cities &mdash; All on Eastern Time</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Charleston', pop: '47K', note: 'State capital, Kanawha Valley' },
              { city: 'Huntington', pop: '46K', note: 'Marshall University, Ohio River' },
              { city: 'Morgantown', pop: '31K', note: 'WVU, growing tech sector' },
              { city: 'Parkersburg', pop: '29K', note: 'Ohio River, Blennerhassett Island' },
              { city: 'Wheeling', pop: '26K', note: 'Historic gateway to the West' },
              { city: 'Beckley', pop: '16K', note: 'Near New River Gorge NP' },
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
