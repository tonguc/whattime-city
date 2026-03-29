'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function IowaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Iowa</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">{isDST ? 'CDT · UTC-5' : 'CST · UTC-6'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Central Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Hawkeye State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Iowa Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CT — Central Time (UTC-6/UTC-5)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~3.2 million — 31st largest state' },
              { label: 'Capital', value: 'Des Moines — insurance & finance hub' },
              { label: 'Famous For', value: 'Caucuses, corn, Field of Dreams' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Caucuses, Corn &amp; Field of Dreams — Iowa on Central Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Every presidential election cycle, the <strong className={heading}>Iowa Caucuses</strong> kick off the nominating process as the <strong className={heading}>first-in-the-nation</strong> contest. Caucus sites open at <span style={{ fontVariantNumeric: 'tabular-nums' }}>7:00 PM CT</span> across all <span style={{ fontVariantNumeric: 'tabular-nums' }}>99</span> counties, and results from Iowa set the tone for the entire primary season. National media descend on <strong className={heading}>Des Moines</strong> weeks in advance, broadcasting live on Central Time.
            </p>
            <p>
              Iowa is an <strong className={heading}>agricultural powerhouse</strong> — the state produces more corn than any other, with over <span style={{ fontVariantNumeric: 'tabular-nums' }}>12.9</span> billion bushels harvested annually. Iowa also leads in ethanol production, hog farming, and egg output. Harvest season runs from September through November, with combines rolling from dawn (around <span style={{ fontVariantNumeric: 'tabular-nums' }}>6:30 AM CT</span>) to well after dark. <strong className={heading}>Des Moines</strong> has quietly become a major <strong className={heading}>insurance and financial services</strong> center — Principal Financial, EMC Insurance, and Athene are all headquartered here.
            </p>
            <p>
              In <strong className={heading}>Dyersville</strong>, the <strong className={heading}>Field of Dreams</strong> movie site draws baseball fans from around the world. MLB hosted a regular-season game there in <span style={{ fontVariantNumeric: 'tabular-nums' }}>2021</span>, with first pitch at <span style={{ fontVariantNumeric: 'tabular-nums' }}>7:15 PM CT</span> — emerging from the cornfield into floodlights. <strong className={heading}>Iowa City</strong>, home to the University of Iowa, is a <strong className={heading}>UNESCO City of Literature</strong> and hosts the legendary Iowa Writers&apos; Workshop, the oldest creative writing MFA program in the country.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Iowa Cities — All on CT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Des Moines', pop: '214K', note: 'State capital, insurance hub' },
              { city: 'Cedar Rapids', pop: '137K', note: '2nd largest, Quaker Oats HQ' },
              { city: 'Davenport', pop: '101K', note: 'Quad Cities, Mississippi River' },
              { city: 'Sioux City', pop: '85K', note: 'Western Iowa, tri-state hub' },
              { city: 'Iowa City', pop: '74K', note: 'UNESCO City of Literature, UI' },
              { city: 'Waterloo', pop: '67K', note: 'John Deere roots, NE Iowa hub' },
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
