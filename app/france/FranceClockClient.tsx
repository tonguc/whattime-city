'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function FranceClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Paris', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janOffset = new Date(jan.toLocaleString('en-US', { timeZone: 'Europe/Paris' })).getTimezoneOffset()
      const nowOffset = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' })).getTimezoneOffset()
      setIsDST(nowOffset !== janOffset)
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in France
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">
              {isDST ? 'Summer Time Active' : 'Winter Time (Standard)'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">12 Time Zones Total</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>France Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Metropolitan France', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'Total Time Zones', value: '12 — most in the world!' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Paris' },
              { label: 'Population', value: '~68 million (metro France)' },
              { label: 'Same Zone As', value: 'Germany, Italy, Spain, Netherlands' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* France vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>France Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">France Winter (CET)</th>
                  <th className="pb-2">France Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'France +6 hrs', summer: 'France +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'France +9 hrs', summer: 'France +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'France +1 hr', summer: 'France +1 hr' },
                  { zone: 'India (IST)', winter: 'France −4:30', summer: 'France −3:30' },
                  { zone: 'China (CST)', winter: 'France −7 hrs', summer: 'France −6 hrs' },
                  { zone: 'Japan (JST)', winter: 'France −8 hrs', summer: 'France −7 hrs' },
                  { zone: 'Sydney (AET)', winter: 'France −10 hrs', summer: 'France −8 hrs' },
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

      {/* 12 Time Zones */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Does France Have 12 Time Zones?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              France holds the world record for <strong className={heading}>most time zones of any country: 12</strong> (or 13 including Adélie Land in Antarctica). This is entirely due to France&apos;s <strong className={heading}>overseas territories</strong> scattered across every ocean.
            </p>
            <p>
              Metropolitan France uses just one zone (CET/CEST), but territories like <strong className={heading}>French Polynesia (UTC−10)</strong>, <strong className={heading}>New Caledonia (UTC+11)</strong>, <strong className={heading}>Réunion (UTC+4)</strong>, <strong className={heading}>Guadeloupe/Martinique (UTC−4)</strong>, and <strong className={heading}>French Guiana (UTC−3)</strong> span the entire globe.
            </p>
            <p>
              This means when it&apos;s noon in Paris, it&apos;s <strong className={heading}>1:00 AM in Tahiti</strong> and <strong className={heading}>11:00 PM in Nouméa</strong>. The sun literally never sets on French territory.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              {[
                { territory: 'French Polynesia', offset: 'UTC−10' },
                { territory: 'Martinique', offset: 'UTC−4' },
                { territory: 'French Guiana', offset: 'UTC−3' },
                { territory: 'Metro France', offset: 'UTC+1/+2' },
                { territory: 'Réunion', offset: 'UTC+4' },
                { territory: 'New Caledonia', offset: 'UTC+11' },
              ].map(z => (
                <div key={z.territory}>
                  <div className={mutedText}>{z.territory}</div>
                  <div className={`font-bold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{z.offset}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CET/CEST DST Dates */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>DST Switch Dates — France (CET ↔ CEST)</h2>
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
            The EU voted in 2019 to abolish seasonal clock changes, but implementation has been delayed indefinitely due to lack of member state consensus.
          </p>
        </div>
      </section>

      {/* Why CET not GMT? */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Is France on CET Instead of GMT?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Geographically, France lies at roughly the <strong className={heading}>same longitude as Britain</strong> (0° to 5°E). It should logically use <strong className={heading}>GMT/WET (UTC+0)</strong>, as it did before World War II.
            </p>
            <p>
              During the <strong className={heading}>German occupation in 1940</strong>, France was forced to adopt Central European Time (UTC+1) to align with Berlin. After liberation, France simply <strong className={heading}>never switched back</strong>. Spain, which is even further west, made the same decision for political solidarity.
            </p>
            <p>
              The result: solar noon in <strong className={heading}>Brest (western France)</strong> occurs around <strong className={heading}>1:30 PM</strong> clock time. This contributes to France&apos;s famously late dinner culture — an 8:00 PM dinner is closer to 6:30 PM in solar time.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major French Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Paris', pop: '12.2M metro', note: 'Capital, City of Light' },
              { city: 'Marseille', pop: '1.9M metro', note: 'Mediterranean port, 2nd largest' },
              { city: 'Lyon', pop: '2.3M metro', note: 'Gastronomy capital, tech hub' },
              { city: 'Toulouse', pop: '1.4M metro', note: 'Aerospace capital (Airbus)' },
              { city: 'Nice', pop: '1M metro', note: 'Riviera, tourism hub' },
              { city: 'Strasbourg', pop: '800K metro', note: 'EU Parliament seat, Alsace' },
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
