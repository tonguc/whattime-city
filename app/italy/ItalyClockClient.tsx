'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ItalyClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Rome', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Rome', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Rome' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Rome' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-green-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Italy
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">
              {isDST ? 'Summer Time (Ora Legale)' : 'Winter Time (Ora Solare)'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Rome</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Italy Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'Italian Name', value: 'Ora Solare / Ora Legale' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Rome' },
              { label: 'Population', value: '~59 million' },
              { label: 'Same Zone As', value: 'France, Germany, Spain, Benelux' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Italy vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Italy Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Italy Winter (CET)</th>
                  <th className="pb-2">Italy Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Italy +6 hrs', summer: 'Italy +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Italy +9 hrs', summer: 'Italy +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Italy +1 hr', summer: 'Italy +1 hr' },
                  { zone: 'India (IST)', winter: 'Italy −4:30', summer: 'Italy −3:30' },
                  { zone: 'China (CST)', winter: 'Italy −7 hrs', summer: 'Italy −6 hrs' },
                  { zone: 'Japan (JST)', winter: 'Italy −8 hrs', summer: 'Italy −7 hrs' },
                  { zone: 'Sydney (AET)', winter: 'Italy −10 hrs', summer: 'Italy −8 hrs' },
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

      {/* Italian Time Culture */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Italian Time Culture: La Passeggiata & Riposo</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Italian daily life follows a distinctive rhythm. The <strong className={heading}>riposo</strong> (afternoon break) runs roughly from <strong className={heading}>1:00 PM to 3:30 PM</strong> — shops close, streets quiet, and lunch is a proper sit-down affair. This isn&apos;t just southern tradition; even in Milan and Turin, many smaller businesses observe it.
            </p>
            <p>
              The evening <strong className={heading}>passeggiata</strong> (promenade) begins around <strong className={heading}>6:00–7:00 PM</strong> in summer — Italians stroll through town centers, stop for an <strong className={heading}>aperitivo</strong>, and socialize before dinner at <strong className={heading}>8:30–9:30 PM</strong> (much later in the south).
            </p>
            <p>
              Italian business hours typically run <strong className={heading}>9:00 AM – 1:00 PM</strong> and <strong className={heading}>3:30 PM – 7:30 PM</strong> — the split schedule confuses visitors but is deeply integrated into Italian culture.
            </p>
          </div>
        </div>
      </section>

      {/* DST Dates */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>DST Switch Dates — Italy (CET ↔ CEST)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Year</th>
                  <th className="pb-2 pr-4">Spring Forward (→ CEST)</th>
                  <th className="pb-2">Fall Back (→ CET)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { year: '2025', spring: 'March 30 at 2:00 AM', fall: 'October 26 at 3:00 AM' },
                  { year: '2026', spring: 'March 29 at 2:00 AM', fall: 'October 25 at 3:00 AM' },
                  { year: '2027', spring: 'March 28 at 2:00 AM', fall: 'October 31 at 3:00 AM' },
                ].map(({ year, spring, fall }) => (
                  <tr key={year}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{year}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{spring}</td>
                    <td className={`py-2 ${subText}`}>{fall}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`text-xs mt-3 ${mutedText}`}>
            Italy follows EU DST rules. The 2019 EU vote to abolish clock changes remains unimplemented.
          </p>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Italian Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Rome', pop: '4.3M metro', note: 'Capital, Eternal City' },
              { city: 'Milan', pop: '5.3M metro', note: 'Financial capital, fashion hub' },
              { city: 'Naples', pop: '3M metro', note: 'Southern hub, pizza origin' },
              { city: 'Turin', pop: '2.3M metro', note: 'Industrial hub, Fiat/Ferrari' },
              { city: 'Florence', pop: '1M metro', note: 'Tuscany, Renaissance art' },
              { city: 'Venice', pop: '260K', note: 'Lagoon city, tourism icon' },
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
