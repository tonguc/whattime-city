'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function TexasClockClient() {
  const { isLight } = useCityContext()
  const [timeCT, setTimeCT] = useState('--:--:--')
  const [timeMT, setTimeMT] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimeCT(now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimeMT(now.toLocaleTimeString('en-US', { timeZone: 'America/Denver', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Chicago', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/Chicago' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/Chicago' })
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Texas</div>
          <div className="flex justify-center gap-8 mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeCT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Most of Texas (CT)</div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeMT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Far West TX (MT)</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">
              {isDST ? 'CDT · UTC-5 / MDT · UTC-6' : 'CST · UTC-6 / MST · UTC-7'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">2 Time Zones</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Texas Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'CT — Central Time (UTC-6/UTC-5)' },
              { label: 'Far West Texas', value: 'MT — Mountain Time (El Paso area)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'Population', value: '~30 million — 2nd largest US state' },
              { label: 'Area', value: '696,241 km² — bigger than France!' },
              { label: 'Famous For', value: 'Oil, NASA, BBQ, tech (Austin), cowboys' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Texas&apos;s Two Time Zones — The El Paso Split</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Most of Texas is on <strong className={heading}>Central Time</strong>, but <strong className={heading}>El Paso and Hudspeth County</strong> in far west Texas use <strong className={heading}>Mountain Time</strong>. El Paso is geographically closer to <strong className={heading}>Los Angeles</strong> than to Houston — and is <strong className={heading}>closer to three state capitals</strong> (Santa Fe, NM; Phoenix, AZ; Chihuahua, MX) than to Austin.
            </p>
            <p>
              Texas&apos;s <strong className={heading}>energy industry</strong> runs the state like a country: if Texas were independent, it would have the <strong className={heading}>9th largest economy in the world</strong>. The <strong className={heading}>Texas power grid (ERCOT)</strong> is unique — it&apos;s <strong className={heading}>not connected to the rest of the US grid</strong>, operating independently across both Central and Mountain time zones.
            </p>
            <p>
              <strong className={heading}>NASA&apos;s Johnson Space Center</strong> in Houston operates on CT — &ldquo;Houston, we have a problem&rdquo; was transmitted at <strong className={heading}>CST</strong>. <strong className={heading}>Austin&apos;s tech boom</strong> (Tesla, Oracle, Samsung, SpaceX) has made it &ldquo;Silicon Hills&rdquo; — attracting workers from California who gain <strong className={heading}>2 extra hours</strong> relative to Pacific Time colleagues.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Texas Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Houston', pop: '2.3M', note: 'CT · Energy capital, NASA, diverse' },
              { city: 'San Antonio', pop: '1.5M', note: 'CT · Alamo, River Walk, military' },
              { city: 'Dallas', pop: '1.3M', note: 'CT · Finance, Cowboys, DFW airport' },
              { city: 'Austin', pop: '1M', note: 'CT · State capital, tech, live music' },
              { city: 'Fort Worth', pop: '960K', note: 'CT · Stockyards, "where West begins"' },
              { city: 'El Paso', pop: '680K', note: 'MT · Border city, bilingual, desert' },
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
