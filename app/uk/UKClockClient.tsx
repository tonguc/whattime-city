'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const UK_TZ = 'Europe/London'

function getUKTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: UK_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: UK_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: UK_TZ, timeZoneName: 'short' }).split(' ').pop() || 'GMT'
  return { time, date, tzAbbr }
}

function getCityTime(tz: string) {
  return new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
}

const WORLD_CITIES = [
  { name: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { name: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { name: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { name: 'Toronto', tz: 'America/Toronto', label: 'EST/EDT' },
  { name: 'Paris / Berlin', tz: 'Europe/Paris', label: 'CET/CEST' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

// GMT (UTC+0) → UK business hours 9AM-6PM GMT
// EST (UTC-5): 4AM-1PM EST
// PST (UTC-8): 1AM-10AM PST
// CET (UTC+1): 10AM-7PM CET
// IST (UTC+5:30): 2:30PM-11:30PM IST
// SGT (UTC+8): 5PM-2AM SGT
// JST (UTC+9): 6PM-3AM JST
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '4:00 AM – 1:00 PM EST', gmt: '9:00 AM – 6:00 PM GMT', note: '5h behind UK' },
  { from: 'PST (Los Angeles)', window: '1:00 AM – 10:00 AM PST', gmt: '9:00 AM – 6:00 PM GMT', note: '8h behind UK' },
  { from: 'CET (Berlin/Paris)', window: '10:00 AM – 7:00 PM CET', gmt: '9:00 AM – 6:00 PM GMT', note: '1h ahead of UK' },
  { from: 'IST (India)', window: '2:30 PM – 11:30 PM IST', gmt: '9:00 AM – 6:00 PM GMT', note: '5.5h ahead of UK' },
  { from: 'SGT (Singapore)', window: '5:00 PM – 2:00 AM SGT', gmt: '9:00 AM – 6:00 PM GMT', note: '8h ahead of UK' },
  { from: 'JST (Tokyo)', window: '6:00 PM – 3:00 AM JST', gmt: '9:00 AM – 6:00 PM GMT', note: '9h ahead of UK' },
]

const UK_CITIES = [
  { label: 'London time', href: '/london/', note: 'GMT/BST' },
  { label: 'Manchester time', href: '/manchester/', note: 'GMT/BST' },
  { label: 'Birmingham time', href: '/birmingham/', note: 'GMT/BST' },
  { label: 'Edinburgh time', href: '/edinburgh/', note: 'GMT/BST' },
  { label: 'Cardiff time', href: '/cardiff/', note: 'GMT/BST' },
  { label: 'Belfast time', href: '/belfast/', note: 'GMT/BST' },
]

export default function UKClockClient() {
  const [uk, setUK] = useState({ time: '--:--:--', date: '', tzAbbr: 'GMT' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setUK(getUKTime())
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

  const utcLabel = mounted && uk.tzAbbr === 'BST' ? 'UTC+1' : 'UTC+0'

  return (
    <div className="space-y-4">
      {/* Live clock */}
      <div className={`rounded-2xl p-6 text-center ${card}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-red-600 mb-2">
          Live UK Time ({mounted ? uk.tzAbbr : 'GMT/BST'} · {utcLabel})
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? uk.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? uk.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
          London · Manchester · Birmingham · Edinburgh
        </div>
      </div>

      {/* World comparison */}
            <ClockComparisonSection primaryTz={UK_TZ} countryName="UK" />

      {/* Best time to call UK */}
      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call the UK</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          UK business hours: 9:00 AM – 6:00 PM GMT (winter) / BST (summer). The table below uses GMT (UTC+0) as the reference.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>UK Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.gmt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* UK cities */}
      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>UK City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {UK_CITIES.map(c => (
            <Link key={c.href} href={c.href}
              className={`px-3 py-2 rounded-xl transition-colors text-center ${link}`}>
              <div className="font-medium">{c.label}</div>
              <div className={`text-xs ${muted}`}>{c.note}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
