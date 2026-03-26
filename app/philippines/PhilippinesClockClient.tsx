'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const PH_TZ = 'Asia/Manila'

function getPHTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: PH_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: PH_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  return { time, date }
}

function getCityTime(tz: string) {
  return new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
}

const WORLD_CITIES = [
  { name: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { name: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { name: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
]

// PST verified: PHT = UTC+8, 9AM-6PM PHT = UTC 01:00-10:00
// EST (UTC-5): 8PM-5AM → 8:00 PM – 5:00 AM EST (next day)
// PST (UTC-8): 5PM-2AM → 5:00 PM – 2:00 AM PST (next day)
// GMT (UTC+0): 1AM-10AM → 1:00 AM – 10:00 AM GMT
// CET (UTC+1): 2AM-11AM → 2:00 AM – 11:00 AM CET
// SGT (UTC+8): same TZ → 9:00 AM – 6:00 PM SGT
// JST (UTC+9): 1h ahead → 10:00 AM – 7:00 PM JST
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '8:00 PM – 5:00 AM EST', pht: '9:00 AM – 6:00 PM PHT', note: '13h behind PH' },
  { from: 'PST (Los Angeles)', window: '5:00 PM – 2:00 AM PST', pht: '9:00 AM – 6:00 PM PHT', note: '16h behind PH' },
  { from: 'GMT (London)', window: '1:00 AM – 10:00 AM GMT', pht: '9:00 AM – 6:00 PM PHT', note: '8h behind PH' },
  { from: 'CET (Berlin/Paris)', window: '2:00 AM – 11:00 AM CET', pht: '9:00 AM – 6:00 PM PHT', note: '7h behind PH' },
  { from: 'SGT (Singapore)', window: '9:00 AM – 6:00 PM SGT', pht: '9:00 AM – 6:00 PM PHT', note: 'Same time zone' },
  { from: 'JST (Tokyo)', window: '10:00 AM – 7:00 PM JST', pht: '9:00 AM – 6:00 PM PHT', note: '1h ahead of PH' },
]

const PH_CITIES = [
  { label: 'Manila time', href: '/manila/', note: 'PHT (UTC+8)' },
  { label: 'Cebu time', href: '/cebu/', note: 'PHT (UTC+8)' },
  { label: 'Davao time', href: '/davao/', note: 'PHT (UTC+8)' },
  { label: 'Quezon City time', href: '/quezon-city/', note: 'PHT (UTC+8)' },
  { label: 'Makati time', href: '/makati/', note: 'PHT (UTC+8)' },
  { label: 'Manila → New York', href: '/time/manila/new-york/', note: '' },
]

export default function PhilippinesClockClient() {
  const [ph, setPh] = useState({ time: '--:--:--', date: '' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setPh(getPHTime())
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

  return (
    <div className="space-y-4">
      {/* Live clock */}
      <div className={`rounded-2xl p-6 text-center ${card}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-blue-600 mb-2">
          Live Philippines Time (PHT · UTC+8)
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? ph.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? ph.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
          Manila · Cebu · Davao · No DST
        </div>
      </div>

      {/* World comparison */}
            <ClockComparisonSection primaryTz={PH_TZ} countryName="Philippines" />

      {/* Best time to call Philippines */}
      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call the Philippines</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          Philippines business hours: 9:00 AM – 6:00 PM PHT (UTC+8). No DST — the offset is fixed year-round.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>PH Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.pht}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PH cities */}
      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Philippine City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {PH_CITIES.map(c => (
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
