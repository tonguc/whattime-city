'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const WA_TZ = 'America/Los_Angeles'

function getPSTTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: WA_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: WA_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: WA_TZ, timeZoneName: 'short' }).split(' ').pop() || 'PST'
  return { time, date, tzAbbr }
}

function getCityTime(tz: string) {
  return new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
}

const WORLD_CITIES = [
  { name: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { name: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { name: 'Denver', tz: 'America/Denver', label: 'MST/MDT' },
  { name: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

// PST = UTC-8. Business 9AM-6PM PST = UTC 17:00-02:00
// EST (UTC-5): 12PM-9PM EST
// GMT (UTC+0): 5PM-2AM GMT
// JST (UTC+9): 2AM-11AM JST
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '12:00 PM – 9:00 PM EST', pst: '9:00 AM – 6:00 PM PST', note: '3h ahead of WA' },
  { from: 'CST (Chicago/Texas)', window: '11:00 AM – 8:00 PM CST', pst: '9:00 AM – 6:00 PM PST', note: '2h ahead of WA' },
  { from: 'GMT (London)', window: '5:00 PM – 2:00 AM GMT', pst: '9:00 AM – 6:00 PM PST', note: '8h ahead of WA' },
  { from: 'CET (Berlin/Paris)', window: '6:00 PM – 3:00 AM CET', pst: '9:00 AM – 6:00 PM PST', note: '9h ahead of WA' },
  { from: 'JST (Tokyo)', window: '2:00 AM – 11:00 AM JST', pst: '9:00 AM – 6:00 PM PST', note: '17h ahead of WA' },
  { from: 'SGT (Singapore)', window: '1:00 AM – 10:00 AM SGT', pst: '9:00 AM – 6:00 PM PST', note: '16h ahead of WA' },
]

const WA_CITIES = [
  { label: 'Seattle time', href: '/seattle/', note: 'PST/PDT' },
  { label: 'Spokane time', href: '/spokane/', note: 'PST/PDT' },
  { label: 'Tacoma time', href: '/tacoma/', note: 'PST/PDT' },
  { label: 'Bellevue time', href: '/bellevue/', note: 'PST/PDT' },
  { label: 'Seattle → New York', href: '/time/seattle/new-york/', note: '' },
  { label: 'Seattle → London', href: '/time/seattle/london/', note: '' },
]

export default function WashingtonStateClockClient() {
  const [pst, setPst] = useState({ time: '--:--:--', date: '', tzAbbr: 'PST' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setPst(getPSTTime())
      const t: Record<string, string> = {}
      WORLD_CITIES.forEach(c => { t[c.name] = getCityTime(c.tz) })
      setCityTimes(t)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'
  const text = isLight ? 'text-slate-700' : 'text-slate-200'
  const head = isLight ? 'text-slate-800' : 'text-white'
  const muted = isLight ? 'text-slate-500' : 'text-slate-400'
  const div = isLight ? 'border-slate-100' : 'border-slate-700'
  const link = isLight
    ? 'border border-slate-200 text-slate-700 hover:bg-slate-50'
    : 'border border-slate-600 text-slate-300 hover:bg-slate-700'

  const utcLabel = mounted && pst.tzAbbr === 'PDT' ? 'UTC−7' : 'UTC−8'

  return (
    <div className="space-y-4">
      <div className={`rounded-2xl p-6 text-center ${card}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-teal-700 mb-2">
          Live Washington Time ({mounted ? pst.tzAbbr : 'PST/PDT'} · {utcLabel})
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? pst.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? pst.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-teal-600 inline-block" />
          Seattle · Spokane · Tacoma · Bellevue · Pacific Time
        </div>
      </div>

            <ClockComparisonSection primaryTz={WA_TZ} countryName="Washington" />

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Washington State</h2>
        <p className={`text-sm mb-3 ${muted}`}>Washington business hours: 9:00 AM – 6:00 PM PST/PDT. Same zone as California and Oregon.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>WA Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.pst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Washington State City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {WA_CITIES.map(c => (
            <Link key={c.href} href={c.href}
              className={`px-3 py-2 rounded-xl transition-colors text-center ${link}`}>
              <div className="font-medium">{c.label}</div>
              {c.note && <div className={`text-xs ${muted}`}>{c.note}</div>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
