'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ConnecticutClockClient() {
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Connecticut</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-orange-400/40">{isDST ? 'EDT · UTC-4' : 'EST · UTC-5'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Eastern Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Constitution State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Connecticut Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~3.6 million' },
              { label: 'Hedge Fund Capital', value: 'Greenwich — world\'s hedge fund HQ cluster' },
              { label: 'Famous For', value: 'Yale, insurance capital, hedge funds, pizza' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Greenwich, CT — Where Hedge Funds Run the Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Greenwich, Connecticut</strong> is the <strong className={heading}>hedge fund capital of the world</strong>. <strong className={heading}>Bridgewater Associates ($150B+ AUM), AQR, Point72, and Viking Global</strong> all operate from Greenwich and nearby Stamford. These funds manage <strong className={heading}>trillions of dollars</strong> from Connecticut&apos;s ET timezone — just <strong className={heading}>45 minutes by Metro-North from Manhattan</strong>.
            </p>
            <p>
              Connecticut is also the <strong className={heading}>insurance capital of the US</strong>. <strong className={heading}>Hartford</strong> has been called the <strong className={heading}>&ldquo;Insurance Capital of the World&rdquo;</strong> since the 1800s — <strong className={heading}>Aetna, The Hartford, Cigna (now in Bloomfield)</strong> and dozens of reinsurers cluster here. Insurance industry schedules follow <strong className={heading}>ET</strong>.
            </p>
            <p>
              <strong className={heading}>Yale University</strong> (New Haven, founded 1701) is one of the world&apos;s most prestigious universities. Connecticut also hosts <strong className={heading}>Sikorsky Aircraft</strong> (Stratford) — inventor of the helicopter — and the <strong className={heading}>US Navy&apos;s submarine base</strong> at Groton, where nuclear submarines are built.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Connecticut Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Bridgeport', pop: '150K', note: 'Largest city, coastal, P.T. Barnum' },
              { city: 'New Haven', pop: '135K', note: 'Yale University, pizza capital' },
              { city: 'Stamford', pop: '135K', note: 'Finance hub, WWE HQ, NYC commuters' },
              { city: 'Hartford', pop: '120K', note: 'State capital, insurance capital' },
              { city: 'Greenwich', pop: '63K', note: 'Hedge fund capital, Gold Coast' },
              { city: 'New London', pop: '27K', note: 'Coast Guard Academy, submarine base' },
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
