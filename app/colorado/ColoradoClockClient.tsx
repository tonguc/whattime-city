'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ColoradoClockClient() {
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
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/Denver' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/Denver' })
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Colorado</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-orange-400/40">{isDST ? 'MDT · UTC-6' : 'MST · UTC-7'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Mountain Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Centennial State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Colorado Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'MT — Mountain Time (UTC-7/UTC-6)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Denver' },
              { label: 'Population', value: '~5.8 million' },
              { label: 'Elevation', value: 'Denver at 5,280 ft — "Mile High City"' },
              { label: 'Famous For', value: 'Rocky Mountains, skiing, tech, craft beer' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Mountain Time Capital — Denver&apos;s Growing Tech Scene</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Colorado is the <strong className={heading}>de facto capital of Mountain Time</strong>. Denver&apos;s tech scene has exploded — <strong className={heading}>Oracle, Palantir, Arrow Electronics, and Charles Schwab</strong> have moved HQs here. The <strong className={heading}>MT timezone (2 hours behind NYC, 1 hour ahead of LA)</strong> provides a <strong className={heading}>goldilocks schedule</strong> for companies needing both coast access.
            </p>
            <p>
              <strong className={heading}>NORAD (North American Aerospace Defense Command)</strong> operates from <strong className={heading}>Cheyenne Mountain, Colorado Springs</strong> — the iconic bunker built inside a mountain during the Cold War. NORAD tracks <strong className={heading}>every object in Earth&apos;s orbit</strong> and famously <strong className={heading}>tracks Santa Claus on Christmas Eve</strong> starting at midnight MT.
            </p>
            <p>
              Colorado has <strong className={heading}>58 mountain peaks above 14,000 feet</strong> (the most &ldquo;fourteeners&rdquo; in the US). The state&apos;s <strong className={heading}>300+ days of sunshine</strong> and outdoor lifestyle have made Denver one of the <strong className={heading}>fastest-growing US metros</strong> — population has grown <strong className={heading}>20%+ since 2010</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Colorado Cities — All on MT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Denver', pop: '715K', note: 'Capital, Mile High City, tech boom' },
              { city: 'Colorado Springs', pop: '480K', note: 'NORAD, Air Force Academy, Garden of Gods' },
              { city: 'Aurora', pop: '390K', note: '3rd largest, Buckley Space Force Base' },
              { city: 'Fort Collins', pop: '170K', note: 'CSU, craft beer capital, New Belgium' },
              { city: 'Boulder', pop: '105K', note: 'CU Boulder, tech startups, outdoors' },
              { city: 'Aspen', pop: '7K', note: 'World-class skiing, luxury resort' },
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
