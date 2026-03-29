'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function IndianaClockClient() {
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
      setTimeET(now.toLocaleTimeString('en-US', { timeZone: 'America/Indiana/Indianapolis', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimeCT(now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Indiana/Indianapolis', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/Indiana/Indianapolis' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/Indiana/Indianapolis' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Indiana</div>
          <div className="flex justify-center gap-8 mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeET : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Most of Indiana (ET)</div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeCT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">NW &amp; SW Counties (CT)</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-orange-400/40">
              {isDST ? 'EDT · UTC-4 / CDT · UTC-5' : 'EST · UTC-5 / CST · UTC-6'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">2 Time Zones</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Indiana Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'ET — Eastern Time (most of state)' },
              { label: 'Western Counties', value: 'CT — near Chicago & Evansville' },
              { label: 'DST History', value: 'Adopted statewide DST only in 2006!' },
              { label: 'IANA Identifiers', value: '5 zones! Indianapolis, Knox, Marengo, etc.' },
              { label: 'Population', value: '~6.8 million' },
              { label: 'Famous For', value: 'Indy 500, basketball, corn, Eli Lilly' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>America&apos;s Most Confusing Timezone State</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Indiana has the <strong className={heading}>most complicated timezone history in the US</strong>. Until <strong className={heading}>2006</strong>, most of Indiana did <strong className={heading}>NOT observe DST</strong> — making it one of only two US states (with Arizona) to skip it. This meant Indiana&apos;s time relationship with neighboring states <strong className={heading}>changed twice a year</strong>, causing massive confusion.
            </p>
            <p>
              Indiana has <strong className={heading}>5 separate IANA timezone entries</strong>: <strong className={heading}>America/Indiana/Indianapolis, America/Indiana/Knox, America/Indiana/Marengo, America/Indiana/Petersburg, and America/Indiana/Vevay</strong>. This is because different counties switched between ET and CT — and adopted or rejected DST — at <strong className={heading}>different times throughout history</strong>.
            </p>
            <p>
              The <strong className={heading}>Indy 500</strong> (the world&apos;s largest single-day sporting event, 300,000+ attendees) starts at <strong className={heading}>12:45 PM ET</strong> on Memorial Day weekend. The race has been held annually since <strong className={heading}>1911</strong> — making it older than most timezone standardizations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Indiana Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Indianapolis', pop: '890K', note: 'ET · State capital, Indy 500, Eli Lilly' },
              { city: 'Fort Wayne', pop: '270K', note: 'ET · 2nd largest, manufacturing' },
              { city: 'Evansville', pop: '120K', note: 'CT · SW Indiana, Ohio River' },
              { city: 'South Bend', pop: '103K', note: 'ET · Notre Dame University' },
              { city: 'Gary', pop: '70K', note: 'CT · Near Chicago, steel industry' },
              { city: 'Bloomington', pop: '80K', note: 'ET · Indiana University, tech' },
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
