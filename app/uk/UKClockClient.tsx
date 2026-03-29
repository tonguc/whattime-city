'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function UkClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/London', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  // Determine if BST is active
  const isBST = (() => {
    const now = new Date()
    const jan = new Date(now.getFullYear(), 0, 1)
    const jul = new Date(now.getFullYear(), 6, 1)
    const janOffset = new Date(jan.toLocaleString('en-US', { timeZone: 'Europe/London' })).getTime() - jan.getTime()
    const julOffset = new Date(jul.toLocaleString('en-US', { timeZone: 'Europe/London' })).getTime() - jul.getTime()
    const nowOffset = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/London' })).getTime() - now.getTime()
    return nowOffset === julOffset && janOffset !== julOffset
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
            Current Time in the United Kingdom
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isBST ? 'BST · UTC+1' : 'GMT · UTC+0'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">
              {isBST ? 'Summer Time Active' : 'Greenwich Mean Time'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">London</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>UK Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Winter Time', value: 'GMT (UTC+0)' },
              { label: 'Summer Time', value: 'BST (UTC+1)' },
              { label: 'Clocks Forward', value: 'Last Sunday in March' },
              { label: 'Clocks Back', value: 'Last Sunday in October' },
              { label: 'IANA Identifier', value: 'Europe/London' },
              { label: 'Major Cities', value: 'London, Manchester, Edinburgh' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>UK Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            The UK switches between GMT (winter) and BST (summer). Time differences with other countries change when either side switches clocks.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">UK Winter (GMT)</th>
                  <th className="pb-2">UK Summer (BST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'UK is +5 hrs', summer: 'UK is +5 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'UK is +8 hrs', summer: 'UK is +8 hrs' },
                  { zone: 'Central Europe (CET)', winter: 'UK is −1 hr', summer: 'UK is −1 hr' },
                  { zone: 'India (IST)', winter: 'UK is −5:30', summer: 'UK is −4:30' },
                  { zone: 'Japan (JST)', winter: 'UK is −9 hrs', summer: 'UK is −8 hrs' },
                  { zone: 'Dubai (GST)', winter: 'UK is −4 hrs', summer: 'UK is −3 hrs' },
                  { zone: 'Sydney (AET)', winter: 'UK is −11 hrs', summer: 'UK is −9 hrs' },
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
          <p className={`text-xs mt-3 ${mutedText}`}>
            Note: UK and US DST dates differ. There are a few weeks in March and November when the offset shifts by 1 hour.
          </p>
        </div>
      </section>

      {/* GMT Explainer */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>GMT vs BST vs UTC — What&apos;s the Difference?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>GMT (Greenwich Mean Time)</strong> is the UK&apos;s winter time zone, based on the <strong className={heading}>Prime Meridian (0° longitude)</strong> at the Royal Observatory in Greenwich, London. It is equivalent to UTC+0.
            </p>
            <p>
              <strong className={heading}>BST (British Summer Time)</strong> is the UK&apos;s summer time zone — clocks move forward 1 hour to UTC+1. BST runs from the last Sunday in March to the last Sunday in October.
            </p>
            <p>
              <strong className={heading}>UTC (Coordinated Universal Time)</strong> is the global time standard that replaced GMT as the reference. While GMT and UTC are often used interchangeably, UTC is technically defined by atomic clocks and is the basis for all time zones worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* BST Dates */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>British Summer Time (BST) Dates</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Year</th>
                  <th className="pb-2 pr-4">Clocks Forward (BST starts)</th>
                  <th className="pb-2">Clocks Back (GMT resumes)</th>
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
                    <td className={`py-2 pr-4 ${subText}`}>{forward} at 1:00 AM → 2:00 AM</td>
                    <td className={`py-2 ${subText}`}>{back} at 2:00 AM → 1:00 AM</td>
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major UK Cities — All on GMT/BST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'London', pop: '9.5M metro', note: 'Capital, financial center' },
              { city: 'Manchester', pop: '2.8M metro', note: 'Northern hub, media city' },
              { city: 'Birmingham', pop: '2.6M metro', note: 'Second city, Midlands' },
              { city: 'Edinburgh', pop: '540K', note: 'Scottish capital, festivals' },
              { city: 'Glasgow', pop: '1.8M metro', note: 'Scotland\'s largest city' },
              { city: 'Liverpool', pop: '910K metro', note: 'The Beatles, maritime heritage' },
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
