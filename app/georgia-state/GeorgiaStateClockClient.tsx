'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const GA_TZ = 'America/New_York'

function getGATime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { timeZone: GA_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  const date = now.toLocaleDateString('en-US', { timeZone: GA_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: GA_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'EST'
  return { time, date, tzAbbr }
}

const COMPARE_ZONES = [
  { city: 'New York / Miami', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Berlin', tz: 'Europe/Berlin', label: 'CET/CEST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Mumbai', tz: 'Asia/Kolkata', label: 'IST' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
]

export default function GeorgiaStateClockClient() {
  const [ga, setGa] = useState({ time: '--:--:--', date: '', tzAbbr: 'EST' })
  const [others, setOthers] = useState<{ time: string; abbr: string }[]>(COMPARE_ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setGa(getGATime())
      const now = new Date()
      setOthers(COMPARE_ZONES.map(z => ({
        time: now.toLocaleTimeString('en-US', { timeZone: z.tz, hour: '2-digit', minute: '2-digit', hour12: false }),
        abbr: now.toLocaleTimeString('en-US', { timeZone: z.tz, timeZoneName: 'short' }).split(' ').pop() ?? z.label,
      })))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const cardBase = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const textPrimary = isLight ? 'text-slate-800' : 'text-white'
  const textSecondary = isLight ? 'text-slate-500' : 'text-slate-400'
  const tableRowClass = isLight ? 'border-slate-100' : 'border-slate-700'

  return (
    <div className="space-y-4">
      <div className={cardBase}>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-2xl">🇺🇸</span>
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${textSecondary}`}>Georgia (US State) · {mounted ? ga.tzAbbr : 'EST'}</div>
            <div className={`text-xs ${textSecondary}`}>{mounted && ga.tzAbbr === 'EDT' ? 'EDT · UTC−4 · Eastern Daylight Time' : 'EST · UTC−5 · Eastern Standard Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${textPrimary}`}>
          {mounted ? ga.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-1 ${textSecondary}`}>{mounted ? ga.date : ''}</div>
      </div>

      <div className={cardBase}>
        <h2 className={`text-base font-semibold mb-3 ${textPrimary}`}>Georgia vs Other Cities</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${tableRowClass}`}>
                <th className={`text-left py-2 pr-4 font-medium ${textSecondary}`}>City</th>
                <th className={`text-left py-2 pr-4 font-medium ${textSecondary}`}>Zone</th>
                <th className={`text-left py-2 font-medium ${textSecondary}`}>Local Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableRowClass}`}>
              {COMPARE_ZONES.map((z, i) => (
                <tr key={z.city}>
                  <td className={`py-2 pr-4 font-medium ${textPrimary}`}>{z.city}</td>
                  <td className={`py-2 pr-4 ${textSecondary}`}>{mounted ? others[i].abbr : z.label}</td>
                  <td className={`py-2 font-mono ${textPrimary}`}>{mounted ? others[i].time : '--:--'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={cardBase}>
        <h2 className={`text-base font-semibold mb-3 ${textPrimary}`}>Best Time to Call Georgia (EST/EDT)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${tableRowClass}`}>
                <th className={`text-left py-2 pr-4 font-medium ${textSecondary}`}>Calling From</th>
                <th className={`text-left py-2 font-medium ${textSecondary}`}>Call during (local time) → Georgia receives 9 AM–6 PM</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableRowClass}`}>
              {[
                { from: 'Chicago (CST, UTC−6)', window: '8 AM – 5 PM (1h behind Atlanta)' },
                { from: 'Los Angeles (PST, UTC−8)', window: '6 AM – 3 PM (3h behind Atlanta)' },
                { from: 'London (GMT, UTC+0)', window: '2 PM – 11 PM (5h ahead in winter)' },
                { from: 'London (BST, UTC+1)', window: '3 PM – Midnight (6h ahead in summer)' },
                { from: 'Berlin (CET, UTC+1)', window: '3 PM – Midnight (6h ahead in winter)' },
                { from: 'Dubai (GST, UTC+4)', window: '6 PM – 3 AM next day' },
                { from: 'Mumbai (IST, UTC+5:30)', window: '7:30 PM – 4:30 AM next day' },
                { from: 'Singapore (SGT, UTC+8)', window: '10 PM – 7 AM next day' },
              ].map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-4 font-medium ${textPrimary} whitespace-nowrap`}>{r.from}</td>
                  <td className={`py-2 ${textSecondary}`}>{r.window}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
