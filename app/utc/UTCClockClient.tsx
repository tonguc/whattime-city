'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

export default function UTCClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'UTC', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-600 bg-slate-700 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  const offsets = [
    { label: 'EST (New York)', offset: -5, dst: false },
    { label: 'EDT (New York, DST)', offset: -4, dst: true },
    { label: 'CST (Chicago)', offset: -6, dst: false },
    { label: 'PST (Los Angeles)', offset: -8, dst: false },
    { label: 'IST (India)', offset: 5.5, dst: false },
    { label: 'JST (Tokyo)', offset: 9, dst: false },
    { label: 'CET (Paris)', offset: 1, dst: false },
    { label: 'AEST (Sydney)', offset: 10, dst: false },
  ]

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            UTC — Coordinated Universal Time
          </div>
          <div className="text-6xl font-bold tabular-nums tracking-tight mb-1">
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              UTC+0
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">
              No DST — Always UTC+0
            </span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>UTC Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'UTC Offset', value: 'UTC+0' },
              { label: 'Abbreviation', value: 'UTC' },
              { label: 'Full Name', value: 'Coordinated Universal Time' },
              { label: 'Daylight Saving', value: 'None — never changes' },
              { label: 'IANA Identifier', value: 'UTC' },
              { label: 'Also known as', value: 'GMT, Zulu Time (Z)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UTC offset table */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>UTC vs Major Time Zones</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            UTC never changes. Other time zones move around it — especially those observing Daylight Saving Time.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Time Zone</th>
                  <th className="pb-2 pr-4">Offset from UTC</th>
                  <th className="pb-2">DST?</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700'}`}>
                {offsets.map(({ label, offset, dst }) => (
                  <tr key={label}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{label}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>
                      UTC{offset >= 0 ? '+' : ''}{offset % 1 === 0 ? offset : offset.toString().replace('.5', ':30')}
                    </td>
                    <td className={`py-2 text-xs ${dst ? 'text-amber-500' : mutedText}`}>
                      {dst ? 'DST active' : 'No DST'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DST explanation */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Is UTC 4 or 5 Hours Ahead of EST?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>UTC is 5 hours ahead of EST and 4 hours ahead of EDT.</strong>{' '}
              The answer depends on the time of year — not UTC (which never changes), but the US East Coast.
            </p>
            <p>
              During winter (November–March), the US East Coast observes <strong className={heading}>EST (UTC-5)</strong> — so UTC is 5 hours ahead.
            </p>
            <p>
              During summer (March–November), Daylight Saving Time activates and the East Coast switches to <strong className={heading}>EDT (UTC-4)</strong> — so UTC is only 4 hours ahead.
            </p>
            <p>
              UTC itself is always UTC+0. It is the clock that never moves. Every other time zone is defined as an offset from UTC.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
