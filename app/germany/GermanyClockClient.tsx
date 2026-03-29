'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function GermanyClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Berlin', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  // Determine if CEST is active
  const isCEST = (() => {
    const now = new Date()
    const jan = new Date(now.getFullYear(), 0, 1)
    const jul = new Date(now.getFullYear(), 6, 1)
    const janOff = new Date(jan.toLocaleString('en-US', { timeZone: 'Europe/Berlin' })).getTime() - jan.getTime()
    const julOff = new Date(jul.toLocaleString('en-US', { timeZone: 'Europe/Berlin' })).getTime() - jul.getTime()
    const nowOff = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' })).getTime() - now.getTime()
    return nowOff === julOff && janOff !== julOff
  })()

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
            Current Time in Germany
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isCEST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">
              {isCEST ? 'Summer Time Active' : 'Central European Time'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Berlin</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Germany Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Winter Time', value: 'CET — Central European Time (UTC+1)' },
              { label: 'Summer Time', value: 'CEST — Central European Summer Time (UTC+2)' },
              { label: 'Clocks Forward', value: 'Last Sunday in March (2:00 AM → 3:00 AM)' },
              { label: 'Clocks Back', value: 'Last Sunday in October (3:00 AM → 2:00 AM)' },
              { label: 'IANA Identifier', value: 'Europe/Berlin' },
              { label: 'EU DST Rule', value: 'Same dates as all EU countries' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Germany vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Germany Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Germany switches between CET (winter) and CEST (summer). Both US and EU have DST, but switch dates differ — creating brief periods of unusual offsets in March and November.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Winter</th>
                  <th className="pb-2">Summer</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Germany +6 hrs', summer: 'Germany +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Germany +9 hrs', summer: 'Germany +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Germany +1 hr', summer: 'Germany +1 hr' },
                  { zone: 'India (IST)', winter: 'Germany −4:30', summer: 'Germany −3:30' },
                  { zone: 'Japan (JST)', winter: 'Germany −8 hrs', summer: 'Germany −7 hrs' },
                  { zone: 'China (CST)', winter: 'Germany −7 hrs', summer: 'Germany −6 hrs' },
                  { zone: 'Sydney (AET)', winter: 'Germany −10 hrs', summer: 'Germany −8 hrs' },
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

      {/* EU DST Debate */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Will Germany Abolish DST?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In 2019, the <strong className={heading}>European Parliament voted to abolish DST</strong> across the EU. Each member state was supposed to choose permanent summer or winter time by 2021. However, the COVID-19 pandemic stalled the process.
            </p>
            <p>
              As of 2026, <strong className={heading}>no final decision has been made</strong>. Germany and the EU continue to switch clocks twice a year. Surveys show most Germans prefer permanent <strong className={heading}>summer time (CEST, UTC+2)</strong>, though scientists argue permanent winter time (CET) better aligns with circadian rhythms.
            </p>
            <p>
              The challenge: all EU countries must coordinate. If Germany picks summer time but France picks winter time, neighboring countries would be in different zones despite being in the same longitude.
            </p>
          </div>
        </div>
      </section>

      {/* CET/CEST Dates */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>CET/CEST Switch Dates</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Year</th>
                  <th className="pb-2 pr-4">CEST Starts (Clocks Forward)</th>
                  <th className="pb-2">CET Resumes (Clocks Back)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { year: '2025', forward: 'Sunday, March 30', back: 'Sunday, October 26' },
                  { year: '2026', forward: 'Sunday, March 29', back: 'Sunday, October 25' },
                  { year: '2027', forward: 'Sunday, March 28', back: 'Sunday, October 31' },
                ].map(({ year, forward, back }) => (
                  <tr key={year}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{year}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{forward} at 2:00 AM → 3:00 AM</td>
                    <td className={`py-2 ${subText}`}>{back} at 3:00 AM → 2:00 AM</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major German Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Berlin', pop: '3.7M', note: 'Capital, government, startups' },
              { city: 'Munich', pop: '1.5M', note: 'Bavaria, Oktoberfest, BMW' },
              { city: 'Hamburg', pop: '1.9M', note: 'Port city, media capital' },
              { city: 'Frankfurt', pop: '750K', note: 'Financial capital, ECB seat' },
              { city: 'Cologne', pop: '1.1M', note: 'Cathedral, media, trade fairs' },
              { city: 'Stuttgart', pop: '640K', note: 'Mercedes-Benz, Porsche HQ' },
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
