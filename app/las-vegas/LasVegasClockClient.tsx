'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

export default function LasVegasClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-violet-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Las Vegas
          </div>
          <div className="text-6xl font-bold tabular-nums tracking-tight mb-1">
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-2 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">PST · UTC-8</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">PDT · UTC-7 (DST)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Nevada</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Las Vegas Time Zone Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Pacific Time (PT)' },
              { label: 'Standard Time', value: 'PST · UTC-8' },
              { label: 'Daylight Time', value: 'PDT · UTC-7' },
              { label: 'DST Observed', value: 'Yes — Mar 8 to Nov 1, 2026' },
              { label: 'IANA Zone', value: 'America/Los_Angeles' },
              { label: 'Stock Market Opens', value: '6:30 AM PST / 9:30 AM EST' },
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
            <h2 className={`text-xl font-semibold ${heading}`}>Las Vegas Time vs Major Cities</h2>
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
                { city: 'New York', diff: '3 hours behind Las Vegas', slug: 'new-york' },
                { city: 'Chicago', diff: '2 hours ahead of Las Vegas', slug: 'chicago' },
                { city: 'Los Angeles', diff: 'Same time as Las Vegas', slug: 'los-angeles' },
                { city: 'London', diff: '8 hours ahead (PST) / 8 hrs (PDT)', slug: 'london' },
                { city: 'Tokyo', diff: '17 hours ahead (PST) / 16 hrs (PDT)', slug: 'tokyo' },
                { city: 'Dubai', diff: '12 hours ahead (PST) / 11 hrs (PDT)', slug: 'dubai' },
                { city: 'Singapore', diff: '16 hours ahead (PST) / 15 hrs (PDT)', slug: 'singapore' },
                { city: 'Sydney', diff: '18–19 hours ahead (varies by DST)', slug: 'sydney' },
              ].map(({ city, diff, slug }) => (
                <tr key={city}>
                  <td className={`px-6 py-3 font-medium ${heading}`}>
                    <Link href={`/${slug}/`} className={linkClass}>{city}</Link>
                  </td>
                  <td className={`px-6 py-3 ${subText}`}>{diff}</td>
                  <td className="px-6 py-3 hidden sm:table-cell">
                    <Link href={`/time/las-vegas/${slug}/`} className={`text-xs ${linkClass}`}>Time difference →</Link>
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
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Daylight Saving Time in Las Vegas</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-1">Spring Forward 2026</div>
              <div className={`text-lg font-bold ${heading}`}>March 8, 2026</div>
              <div className={`text-sm mt-1 ${subText}`}>2:00 AM PST → 3:00 AM PDT</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-1">Fall Back 2026</div>
              <div className={`text-lg font-bold ${heading}`}>November 1, 2026</div>
              <div className={`text-sm mt-1 ${subText}`}>2:00 AM PDT → 1:00 AM PST</div>
            </div>
          </div>
          <p className={`text-sm ${subText}`}>
            Las Vegas observes Pacific Time and follows US Daylight Saving Time rules.
            During DST (March–November), Las Vegas is on PDT (UTC-7).
            Casinos and entertainment venues operate 24/7 regardless of time changes.
            Las Vegas shares its time zone with Los Angeles, Seattle, and Portland.
          </p>
        </div>
      </section>

      {/* Best time to call */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Best Time to Call Las Vegas</h2>
          <div className="space-y-3">
            {[
              { from: 'From New York (EST)', best: '12:00 PM – 8:00 PM EST', note: '9:00 AM – 5:00 PM Las Vegas time' },
              { from: 'From Chicago (CST)', best: '11:00 AM – 7:00 PM CST', note: '9:00 AM – 5:00 PM Las Vegas time' },
              { from: 'From London (GMT/BST)', best: '5:00 PM – 9:00 PM GMT', note: '9:00 AM – 1:00 PM Las Vegas time' },
              { from: 'From Tokyo (JST)', best: '11:00 PM – 3:00 AM JST (next day)', note: '9:00 AM – 1:00 PM Las Vegas time' },
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
              { q: 'What time is it in Las Vegas right now?', a: 'Las Vegas operates on Pacific Time — PST (UTC-8) during winter and PDT (UTC-7) during Daylight Saving Time. The live clock above shows the exact current time.' },
              { q: 'What time zone is Las Vegas in?', a: 'Las Vegas is in the Pacific Time Zone (PT), sharing this timezone with Los Angeles, Seattle, Portland, and Vancouver. PST (UTC-8) in winter, PDT (UTC-7) in summer.' },
              { q: 'Does Las Vegas observe daylight saving time?', a: 'Yes. Las Vegas observes US daylight saving time, advancing clocks one hour forward on the second Sunday in March and falling back on the first Sunday in November.' },
              { q: 'What is the time difference between Las Vegas and New York?', a: 'Las Vegas is 3 hours behind New York year-round. When it\'s 12:00 PM (noon) in New York, it\'s 9:00 AM in Las Vegas.' },
              { q: 'What is the time difference between Las Vegas and London?', a: 'Las Vegas is 8 hours behind London during most of the year. There are brief windows in spring and fall when the difference is 7 or 9 hours due to differing DST switch dates.' },
              { q: 'What time do casinos open in Las Vegas?', a: 'Most Las Vegas Strip casinos are open 24 hours a day, 7 days a week, 365 days a year. There is no closing time.' },
              { q: 'What are typical business hours in Las Vegas?', a: 'Standard office and business hours in Las Vegas run 9:00 AM–5:00 PM PST/PDT. However, the hospitality and entertainment industry operates around the clock.' },
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
        Las Vegas (America/Los_Angeles) observes US federal daylight saving rules.
      </div>
    </div>
  )
}
