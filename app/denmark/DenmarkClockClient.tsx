'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function DenmarkClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Copenhagen', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Copenhagen', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Copenhagen' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Copenhagen' })
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
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Denmark
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Hygge & Work-Life Balance</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Copenhagen</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Denmark Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Copenhagen' },
              { label: 'Population', value: '~5.9 million' },
              { label: 'Territories', value: 'Greenland (UTC-1 to UTC-4), Faroe Islands (UTC+0)' },
              { label: 'Famous For', value: 'Hygge, LEGO, Carlsberg, Maersk' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Denmark vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Denmark Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">DK Winter (CET)</th>
                  <th className="pb-2">DK Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'DK +6 hrs', summer: 'DK +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'DK +9 hrs', summer: 'DK +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'DK +1 hr', summer: 'DK +1 hr' },
                  { zone: 'India (IST)', winter: 'DK −4:30', summer: 'DK −3:30' },
                  { zone: 'Greenland (WGT)', winter: 'DK +4 hrs', summer: 'DK +4 hrs' },
                  { zone: 'Germany (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
                ].map(({ zone, winter, summer }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{winter}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{summer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Denmark's Timezone Empire */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Denmark&apos;s Secret Timezone Empire — 5 Time Zones</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Most people think of Denmark as a small Scandinavian country. But the <strong className={heading}>Kingdom of Denmark</strong> actually spans <strong className={heading}>5 time zones</strong> — thanks to <strong className={heading}>Greenland</strong> and the <strong className={heading}>Faroe Islands</strong>.
            </p>
            <p>
              <strong className={heading}>Greenland</strong> alone covers 4 time zones (UTC-4 to UTC-1), making it the <strong className={heading}>world&apos;s largest island</strong> with extreme timezone variation. In 2023, Greenland moved its main timezone from UTC-3 to <strong className={heading}>UTC-2</strong> to be closer to Denmark and EU business hours.
            </p>
          </div>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Territory</th>
                  <th className="pb-2 pr-4">Time Zone</th>
                  <th className="pb-2">Offset vs Copenhagen</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { territory: 'Denmark (mainland)', tz: 'CET/CEST', diff: '—' },
                  { territory: 'Faroe Islands', tz: 'WET/WEST (UTC+0/+1)', diff: '1 hr behind' },
                  { territory: 'Greenland (Nuuk)', tz: 'UTC-2/-1', diff: '3 hrs behind' },
                  { territory: 'Greenland (Ittoqqortoormiit)', tz: 'UTC-1/+0', diff: '2 hrs behind' },
                  { territory: 'Greenland (Danmarkshavn)', tz: 'UTC+0 (no DST)', diff: '1-2 hrs behind' },
                  { territory: 'Greenland (Thule/Pituffik)', tz: 'UTC-4/-3', diff: '5 hrs behind' },
                ].map(({ territory, tz, diff }) => (
                  <tr key={territory}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{territory}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{tz}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hygge */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Hygge & the Danish Work-Life Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Hygge</strong> (pronounced &ldquo;hoo-gah&rdquo;) — the Danish concept of coziness and contentment — shapes how Danes structure their time. The average Dane works <strong className={heading}>33 hours per week</strong> (one of the lowest in Europe). Offices typically empty by <strong className={heading}>4:00 PM</strong>.
            </p>
            <p>
              This isn&apos;t laziness — Denmark has one of the <strong className={heading}>highest productivity rates per hour worked</strong> in the world. The Danish model: <strong className={heading}>arrive early (8 AM), skip long lunches, leave by 4 PM</strong> for family time. Staying late is seen as a sign of inefficiency, not dedication.
            </p>
            <p>
              For international teams, this means Danish colleagues are typically available <strong className={heading}>8:00 AM – 4:00 PM CET</strong> — a narrower window than most European countries.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Danish Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Copenhagen', pop: '1.4M metro', note: 'Capital, Maersk HQ, design hub' },
              { city: 'Aarhus', pop: '350K', note: '2nd city, LEGO nearby, university' },
              { city: 'Odense', pop: '205K', note: 'Hans Christian Andersen birthplace' },
              { city: 'Aalborg', pop: '120K', note: 'Northern hub, cement & tech' },
              { city: 'T\u00f3rshavn', pop: '22K', note: 'Faroe Islands capital (UTC+0)' },
              { city: 'Nuuk', pop: '19K', note: 'Greenland capital (UTC-2)' },
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
