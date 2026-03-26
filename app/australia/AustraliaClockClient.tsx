'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const SYDNEY_TZ = 'Australia/Sydney'

function getSydneyTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: SYDNEY_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: SYDNEY_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: SYDNEY_TZ, timeZoneName: 'short' }).split(' ').pop() || 'AEST'
  return { time, date, tzAbbr }
}

function getCityTime(tz: string) {
  return new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
}

// Australia's 5 main time zones displayed
const AU_ZONES = [
  { name: 'Sydney / Melbourne', tz: 'Australia/Sydney', label: 'AEST/AEDT (UTC+10/+11)' },
  { name: 'Brisbane', tz: 'Australia/Brisbane', label: 'AEST (UTC+10, no DST)' },
  { name: 'Adelaide', tz: 'Australia/Adelaide', label: 'ACST/ACDT (UTC+9:30/+10:30)' },
  { name: 'Darwin', tz: 'Australia/Darwin', label: 'ACST (UTC+9:30, no DST)' },
  { name: 'Perth', tz: 'Australia/Perth', label: 'AWST (UTC+8)' },
]

const WORLD_CITIES = [
  { name: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { name: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { name: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]

// AEST = UTC+10, business hours 9AM-6PM AEST = UTC 23:00-08:00
// EST (UTC-5): 6PM-3AM EST (prev day)
// PST (UTC-8): 3PM-midnight PST (prev day)
// GMT (UTC+0): 11PM-8AM GMT (prev day / same day)
// SGT (UTC+8): 7AM-4PM SGT
// JST (UTC+9): 8AM-5PM JST
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '6:00 PM – 3:00 AM EST', aest: '9:00 AM – 6:00 PM AEST', note: '15h behind Sydney' },
  { from: 'PST (Los Angeles)', window: '3:00 PM – midnight PST', aest: '9:00 AM – 6:00 PM AEST', note: '18h behind Sydney' },
  { from: 'GMT (London)', window: '11:00 PM – 8:00 AM GMT', aest: '9:00 AM – 6:00 PM AEST', note: '10h behind Sydney' },
  { from: 'CET (Berlin/Paris)', window: 'Midnight – 9:00 AM CET', aest: '9:00 AM – 6:00 PM AEST', note: '9h behind Sydney' },
  { from: 'SGT (Singapore)', window: '7:00 AM – 4:00 PM SGT', aest: '9:00 AM – 6:00 PM AEST', note: '2h behind Sydney' },
  { from: 'JST (Tokyo)', window: '8:00 AM – 5:00 PM JST', aest: '9:00 AM – 6:00 PM AEST', note: '1h behind Sydney' },
]

const AU_CITIES = [
  { label: 'Sydney time', href: '/sydney/', note: 'AEST/AEDT' },
  { label: 'Melbourne time', href: '/melbourne/', note: 'AEST/AEDT' },
  { label: 'Brisbane time', href: '/brisbane/', note: 'AEST (no DST)' },
  { label: 'Perth time', href: '/perth/', note: 'AWST (UTC+8)' },
  { label: 'Adelaide time', href: '/adelaide/', note: 'ACST/ACDT' },
  { label: 'Darwin time', href: '/darwin/', note: 'ACST (no DST)' },
]

export default function AustraliaClockClient() {
  const [sydney, setSydney] = useState({ time: '--:--:--', date: '', tzAbbr: 'AEST' })
  const [zoneTimes, setZoneTimes] = useState<Record<string, string>>({})
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setSydney(getSydneyTime())
      const zt: Record<string, string> = {}
      AU_ZONES.forEach(z => { zt[z.name] = getCityTime(z.tz) })
      setZoneTimes(zt)
      const ct: Record<string, string> = {}
      WORLD_CITIES.forEach(c => { ct[c.name] = getCityTime(c.tz) })
      setCityTimes(ct)
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

  const utcLabel = mounted && sydney.tzAbbr === 'AEDT' ? 'UTC+11' : 'UTC+10'

  return (
    <div className="space-y-4">
      {/* Live clock — Sydney as reference */}
      <div className={`rounded-2xl p-6 text-center ${card}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-emerald-600 mb-2">
          Live Sydney Time ({mounted ? sydney.tzAbbr : 'AEST/AEDT'} · {utcLabel})
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? sydney.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? sydney.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          Sydney · Melbourne · Brisbane · Perth · Adelaide
        </div>
      </div>

      {/* Australia zones */}
      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Current Time Across Australia</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-4 font-medium ${muted}`}>City / Region</th>
                <th className={`text-left py-2 pr-4 font-medium ${muted}`}>Time Zone</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Current Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {AU_ZONES.map(z => (
                <tr key={z.name}>
                  <td className={`py-2 pr-4 font-medium ${head}`}>{z.name}</td>
                  <td className={`py-2 pr-4 ${muted}`}>{z.label}</td>
                  <td className={`py-2 font-mono font-bold text-emerald-600`}>
                    {mounted ? zoneTimes[z.name] ?? '--:--' : '--:--'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* World comparison */}
            <ClockComparisonSection primaryTz={SYDNEY_TZ} countryName="Australia" />

      {/* Best time to call Australia */}
      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Australia (Sydney)</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          Sydney business hours: 9:00 AM – 6:00 PM AEST/AEDT. Australia is far ahead of the US and Europe — callers must reach out late evening their time.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>AU Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.aest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AU cities */}
      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Australian City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {AU_CITIES.map(c => (
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
