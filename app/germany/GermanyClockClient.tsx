'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const DE_TZ = 'Europe/Berlin'

function getCETTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: DE_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: DE_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: DE_TZ, timeZoneName: 'short' }).split(' ').pop() || 'CET'
  return { time, date, tzAbbr }
}

function getCityTime(tz: string) {
  return new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
}

const WORLD_CITIES = [
  { name: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { name: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { name: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

// CET = UTC+1, CEST = UTC+2. Business hours 9AM-6PM CET = UTC 08:00-17:00
// EST (UTC-5): 3AM-12PM EST
// PST (UTC-8): 12AM-9AM PST
// GMT (UTC+0): 8AM-5PM GMT
// IST (UTC+5:30): 1:30PM-10:30PM IST
// SGT (UTC+8): 4PM-1AM SGT
// JST (UTC+9): 5PM-2AM JST
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '3:00 AM – 12:00 PM EST', cet: '9:00 AM – 6:00 PM CET', note: '6h behind Germany' },
  { from: 'PST (Los Angeles)', window: '12:00 AM – 9:00 AM PST', cet: '9:00 AM – 6:00 PM CET', note: '9h behind Germany' },
  { from: 'GMT (London)', window: '8:00 AM – 5:00 PM GMT', cet: '9:00 AM – 6:00 PM CET', note: '1h behind Germany' },
  { from: 'IST (India)', window: '1:30 PM – 10:30 PM IST', cet: '9:00 AM – 6:00 PM CET', note: '4.5h ahead of Germany' },
  { from: 'SGT (Singapore)', window: '4:00 PM – 1:00 AM SGT', cet: '9:00 AM – 6:00 PM CET', note: '7h ahead of Germany' },
  { from: 'JST (Tokyo)', window: '5:00 PM – 2:00 AM JST', cet: '9:00 AM – 6:00 PM CET', note: '8h ahead of Germany' },
]

const DE_CITIES = [
  { label: 'Berlin time', href: '/berlin/', note: 'CET/CEST' },
  { label: 'Munich time', href: '/munich/', note: 'CET/CEST' },
  { label: 'Hamburg time', href: '/hamburg/', note: 'CET/CEST' },
  { label: 'Frankfurt time', href: '/frankfurt/', note: 'CET/CEST' },
  { label: 'Berlin → New York', href: '/time/berlin/new-york/', note: '' },
  { label: 'Berlin → London', href: '/time/berlin/london/', note: '' },
]

export default function GermanyClockClient() {
  const [cet, setCet] = useState({ time: '--:--:--', date: '', tzAbbr: 'CET' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setCet(getCETTime())
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

  const utcLabel = mounted && cet.tzAbbr === 'CEST' ? 'UTC+2' : 'UTC+1'

  return (
    <div className="space-y-4">
      <div className={`rounded-2xl p-6 text-center ${card}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-amber-600 mb-2">
          Live Germany Time ({mounted ? cet.tzAbbr : 'CET/CEST'} · {utcLabel})
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? cet.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? cet.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
          Berlin · Munich · Hamburg · Frankfurt · Cologne
        </div>
      </div>

            <ClockComparisonSection primaryTz={DE_TZ} countryName="Germany" />

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Germany</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          Germany business hours: 9:00 AM – 6:00 PM CET/CEST. Germany switches to CEST (UTC+2) in late March and back to CET (UTC+1) in late October.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Germany Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.cet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Germany City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {DE_CITIES.map(c => (
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
