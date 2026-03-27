'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

export default function DenverClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Denver', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Denver', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white p-6' : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const innerCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50 p-4' : 'rounded-xl border border-slate-600 bg-slate-700 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'
  const tableDivider = isLight ? 'divide-y divide-slate-100' : 'divide-y divide-slate-700'
  const tableHead = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const tableHeadText = isLight ? 'text-slate-600' : 'text-slate-300'
  const borderLight = isLight ? 'border-slate-100' : 'border-slate-700'
  const linkClass = isLight ? 'text-sky-600 hover:underline' : 'text-sky-400 hover:underline'
  const dstCard = isLight ? 'rounded-xl border border-slate-200 bg-slate-50 p-4' : 'rounded-xl border border-slate-700 bg-slate-700/40 p-4'

  return (
    <div className="space-y-4">
      {/* Live Clock Hero */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-orange-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Denver
          </div>
          <div className="text-6xl font-bold tabular-nums tracking-tight mb-1">
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-2 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">MST · UTC-7</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">MDT · UTC-6 (DST)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Colorado</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Denver Time Zone Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Mountain Time (MT)' },
              { label: 'Standard Time', value: 'MST · UTC-7' },
              { label: 'Daylight Time', value: 'MDT · UTC-6' },
              { label: 'DST Observed', value: 'Yes — Mar 8 to Nov 1, 2026' },
              { label: 'IANA Zone', value: 'America/Denver' },
              { label: 'Stock Market Opens', value: '7:30 AM MST / 9:30 AM EST' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs mb-1 ${mutedText}`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Differences */}
      <section>
        <div className={`rounded-2xl border overflow-hidden ${isLight ? 'border-slate-200 bg-white' : 'border-slate-700 bg-slate-800'}`}>
          <div className={`px-6 pt-5 pb-4 border-b ${borderLight}`}>
            <h2 className={`text-xl font-semibold ${heading}`}>Denver Time vs Major Cities</h2>
          </div>
          <table className="w-full text-sm">
            <thead className={tableHead}>
              <tr>
                <th className={`text-left px-6 py-3 font-semibold ${tableHeadText}`}>City</th>
                <th className={`text-left px-6 py-3 font-semibold ${tableHeadText}`}>Difference</th>
                <th className={`text-left px-6 py-3 font-semibold hidden sm:table-cell ${tableHeadText}`}>Compare</th>
              </tr>
            </thead>
            <tbody className={tableDivider}>
              {[
                { city: 'New York', diff: '2 hours ahead of Denver', slug: 'new-york' },
                { city: 'Chicago', diff: '1 hour ahead of Denver', slug: 'chicago' },
                { city: 'Los Angeles', diff: '1 hour behind Denver', slug: 'los-angeles' },
                { city: 'London', diff: '7 hours ahead (most of year)', slug: 'london' },
                { city: 'Tokyo', diff: '16 hours ahead (MST) / 15 hrs (MDT)', slug: 'tokyo' },
                { city: 'Dubai', diff: '11 hours ahead (MST) / 10 hrs (MDT)', slug: 'dubai' },
                { city: 'Singapore', diff: '15 hours ahead (MST) / 14 hrs (MDT)', slug: 'singapore' },
                { city: 'Sydney', diff: '17–18 hours ahead (varies by DST)', slug: 'sydney' },
              ].map(({ city, diff, slug }) => (
                <tr key={city}>
                  <td className={`px-6 py-3 font-medium ${heading}`}>
                    <Link href={`/${slug}/`} className={linkClass}>{city}</Link>
                  </td>
                  <td className={`px-6 py-3 ${subText}`}>{diff}</td>
                  <td className="px-6 py-3 hidden sm:table-cell">
                    <Link href={`/time/denver/${slug}/`} className={`text-xs ${linkClass}`}>Time difference →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* DST Section */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Daylight Saving Time in Denver</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-1">Spring Forward 2026</div>
              <div className={`text-lg font-bold ${heading}`}>March 8, 2026</div>
              <div className={`text-sm mt-1 ${subText}`}>2:00 AM MST → 3:00 AM MDT</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-1">Fall Back 2026</div>
              <div className={`text-lg font-bold ${heading}`}>November 1, 2026</div>
              <div className={`text-sm mt-1 ${subText}`}>2:00 AM MDT → 1:00 AM MST</div>
            </div>
          </div>
          <p className={`text-sm ${subText}`}>
            Denver observes US Daylight Saving Time. During DST (March–November), Denver is on MDT (UTC-6).
            Note: Nearby Phoenix and Arizona do <strong>not</strong> observe DST and stay on MST (UTC-7) year-round,
            meaning Denver and Phoenix are on the same time during winter but Denver is 1 hour ahead during summer.
          </p>
        </div>
      </section>

      {/* Best time to call */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Best Time to Call Denver</h2>
          <div className="space-y-3">
            {[
              { from: 'From New York (EST)', best: '11:00 AM – 7:00 PM EST', note: '9:00 AM – 5:00 PM Denver time' },
              { from: 'From Los Angeles (PST)', best: '10:00 AM – 6:00 PM PST', note: '11:00 AM – 7:00 PM Denver time' },
              { from: 'From London (GMT/BST)', best: '4:00 PM – 8:00 PM GMT', note: '9:00 AM – 1:00 PM Denver time' },
              { from: 'From Tokyo (JST)', best: '11:00 PM – 3:00 AM JST', note: '9:00 AM – 1:00 PM Denver time' },
            ].map(({ from, best, note }) => (
              <div key={from} className={dstCard}>
                <div className={`text-sm font-semibold ${heading}`}>{from}</div>
                <div className={`text-sm ${isLight ? 'text-sky-600' : 'text-sky-400'} font-medium mt-0.5`}>{best}</div>
                <div className={`text-xs mt-1 ${mutedText}`}>{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: 'What time is it in Denver right now?', a: 'Denver operates on Mountain Time — MST (UTC-7) from early November to mid-March, and MDT (UTC-6) during Daylight Saving Time. The live clock above shows the exact current time.' },
              { q: 'What time zone is Denver in?', a: 'Denver is in the Mountain Time Zone (MT). During Daylight Saving Time (March to November), Denver observes MDT (UTC-6). During standard time (November to March), Denver is on MST (UTC-7).' },
              { q: 'Does Denver observe daylight saving time?', a: 'Yes. Denver observes US Daylight Saving Time. Clocks spring forward on the second Sunday in March and fall back on the first Sunday in November. Note that nearby Phoenix, Arizona does not observe DST.' },
              { q: 'What is the time difference between Denver and New York?', a: 'Denver is 2 hours behind New York year-round. When it\'s noon in New York, it\'s 10:00 AM in Denver.' },
              { q: 'What is the time difference between Denver and London?', a: 'Denver is 7 hours behind London during most of the year. The difference can shift briefly to 6 or 8 hours during the week when one region has switched clocks but the other hasn\'t yet.' },
              { q: 'What time does the stock market open in Denver?', a: 'The NYSE opens at 7:30 AM MST/MDT (9:30 AM EST) in Denver and closes at 2:00 PM MST/MDT (4:00 PM EST).' },
              { q: 'What is Denver\'s time difference with Phoenix?', a: 'During winter (standard time), Denver and Phoenix are both on MST (UTC-7) — same time. During summer (DST), Denver moves to MDT (UTC-6) while Phoenix stays on MST, making Denver 1 hour ahead of Phoenix.' },
            ].map((item, i) => (
              <div key={i} className={innerCard}>
                <h3 className={`font-semibold text-sm mb-1 ${heading}`}>{item.q}</h3>
                <p className={`text-sm ${subText}`}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className={`rounded-xl border p-4 text-xs ${isLight ? 'border-slate-200 bg-slate-50 text-slate-500' : 'border-slate-700 bg-slate-800/50 text-slate-400'}`}>
        Time zone data from the{' '}
        <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">IANA Time Zone Database</a>.
        Denver (America/Denver) observes US federal daylight saving rules. Arizona (America/Phoenix) does not.
      </div>
    </div>
  )
}
