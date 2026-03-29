'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MarylandClockClient() {
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Maryland</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">{isDST ? 'EDT · UTC-4' : 'EST · UTC-5'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Eastern Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Old Line State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Maryland Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~6.2 million' },
              { label: 'Federal Hub', value: 'NSA, NIH, FDA, NASA Goddard — all in MD' },
              { label: 'Famous For', value: 'Crabs, Baltimore, Fort McHenry, NIH' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>DC&apos;s Other Half — Maryland&apos;s Federal Clockwork</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Maryland hosts more <strong className={heading}>federal agencies per square mile</strong> than any state. The <strong className={heading}>NSA (Fort Meade), NIH (Bethesda), FDA (Silver Spring), NASA Goddard (Greenbelt)</strong>, and <strong className={heading}>NIST</strong> — the agency that literally <strong className={heading}>defines official US time</strong> — are all in Maryland. The state runs on <strong className={heading}>federal government time</strong>.
            </p>
            <p>
              <strong className={heading}>NIST (National Institute of Standards and Technology)</strong> in Gaithersburg, Maryland maintains the <strong className={heading}>official US time standard</strong> using cesium atomic clocks accurate to <strong className={heading}>1 second per 300 million years</strong>. When your phone auto-syncs time, it ultimately traces back to <strong className={heading}>Maryland</strong>.
            </p>
            <p>
              The <strong className={heading}>Baltimore-Washington corridor</strong> is one of the <strong className={heading}>wealthiest regions in America</strong>. Maryland has the <strong className={heading}>highest median household income</strong> of any US state — driven by the <strong className={heading}>concentration of federal workers, defense contractors, and biotech researchers</strong> who commute on ET.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Maryland Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Baltimore', pop: '575K', note: 'Largest city, port, Johns Hopkins' },
              { city: 'Bethesda', pop: '65K', note: 'NIH campus, Walter Reed, biotech' },
              { city: 'Silver Spring', pop: '80K', note: 'FDA, NOAA, Discovery HQ' },
              { city: 'Annapolis', pop: '40K', note: 'State capital, Naval Academy' },
              { city: 'Fort Meade', pop: 'N/A', note: 'NSA headquarters, US Cyber Command' },
              { city: 'Frederick', pop: '80K', note: 'Fort Detrick, biodefense center' },
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
