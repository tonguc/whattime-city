'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function FloridaClockClient() {
  const { isLight } = useCityContext()
  const [timeET, setTimeET] = useState('--:--:--')
  const [timeCT, setTimeCT] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimeET(now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimeCT(now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Florida</div>
          <div className="flex justify-center gap-8 mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeET : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Most of Florida (ET)</div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeCT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Panhandle (CT)</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">
              {isDST ? 'EDT · UTC-4 / CDT · UTC-5' : 'EST · UTC-5 / CST · UTC-6'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">2 Time Zones</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Florida Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'Panhandle', value: 'CT — Central Time (west of Apalachicola)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'Population', value: '~22 million — 3rd largest US state' },
              { label: 'Sunshine Act', value: 'Voted permanent DST in 2018 (awaiting Congress)' },
              { label: 'Famous For', value: 'Disney, beaches, NASA, retirees, LatAm hub' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Sunshine Protection Act — Florida Wants Permanent DST</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In 2018, Florida passed the <strong className={heading}>Sunshine Protection Act</strong> — voting to stay on <strong className={heading}>permanent Daylight Saving Time (EDT/CDT year-round)</strong>. However, this requires <strong className={heading}>Congressional approval</strong> which hasn&apos;t happened yet. Floridians want <strong className={heading}>more evening sunlight</strong> and dislike &ldquo;falling back&rdquo; to standard time.
            </p>
            <p>
              Florida&apos;s <strong className={heading}>ET timezone</strong> makes it the <strong className={heading}>gateway to Latin America</strong>. Miami is the <strong className={heading}>business capital of Latin America</strong> in practice — aligned with <strong className={heading}>Bogot&aacute; (UTC-5), Lima (UTC-5), and S&atilde;o Paulo (UTC-3)</strong> during business hours. <strong className={heading}>70% of US-Latin American trade</strong> flows through Florida.
            </p>
            <p>
              <strong className={heading}>Cape Canaveral (Kennedy Space Center)</strong> launches on <strong className={heading}>ET</strong>. SpaceX, NASA, and ULA all operate from Florida&apos;s Space Coast — the <strong className={heading}>easternmost point in the continental US</strong>, ideal for launches because Earth&apos;s rotation gives an <strong className={heading}>extra speed boost</strong> eastward.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Florida Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Miami', pop: '6.2M metro', note: 'ET · LatAm gateway, Art Deco, crypto' },
              { city: 'Orlando', pop: '2.7M metro', note: 'ET · Disney, Universal, tourism' },
              { city: 'Tampa', pop: '3.3M metro', note: 'ET · Bay area, finance, Bucs' },
              { city: 'Jacksonville', pop: '1M', note: 'ET · Largest city by area in US' },
              { city: 'Fort Lauderdale', pop: '180K', note: 'ET · Cruise capital, beaches' },
              { city: 'Pensacola', pop: '55K', note: 'CT · Panhandle, Navy base, beaches' },
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
