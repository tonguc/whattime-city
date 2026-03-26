'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

function getCityTime(tz: string) {
  return new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
}

function getMiamiTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: 'America/New_York', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', timeZoneName: 'short' }).split(' ').pop() || 'EST'
  return { time, date, tzAbbr }
}

// Florida has a tiny CST pocket — Pensacola area (America/Chicago)
const FL_ZONES = [
  { name: 'Miami / Orlando / Tampa', tz: 'America/New_York', label: 'EST/EDT (UTC−5/−4) — most of Florida' },
  { name: 'Pensacola (Panhandle)', tz: 'America/Chicago', label: 'CST/CDT (UTC−6/−5) — NW Panhandle only' },
]

const WORLD_CITIES = [
  { name: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { name: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { name: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { name: 'Berlin / Paris', tz: 'Europe/Paris', label: 'CET/CEST' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]

// EST = UTC-5. Business 9AM-6PM EST = UTC 14:00-23:00
// PST (UTC-8): 6AM-3PM PST
// GMT (UTC+0): 2PM-11PM GMT
// CET (UTC+1): 3PM-Midnight CET
// IST (UTC+5:30): 7:30PM-4:30AM IST
const CALL_WINDOWS = [
  { from: 'PST (Los Angeles)', window: '6:00 AM – 3:00 PM PST', est: '9:00 AM – 6:00 PM EST', note: '3h behind FL' },
  { from: 'CST (Chicago)', window: '8:00 AM – 5:00 PM CST', est: '9:00 AM – 6:00 PM EST', note: '1h behind FL' },
  { from: 'GMT (London)', window: '2:00 PM – 11:00 PM GMT', est: '9:00 AM – 6:00 PM EST', note: '5h ahead of FL' },
  { from: 'CET (Berlin/Paris)', window: '3:00 PM – Midnight CET', est: '9:00 AM – 6:00 PM EST', note: '6h ahead of FL' },
  { from: 'IST (India)', window: '7:30 PM – 4:30 AM IST', est: '9:00 AM – 6:00 PM EST', note: '10.5h ahead of FL' },
  { from: 'JST (Tokyo)', window: '11:00 PM – 8:00 AM JST', est: '9:00 AM – 6:00 PM EST', note: '14h ahead of FL' },
]

const FL_CITIES = [
  { label: 'Miami time', href: '/miami/', note: 'EST/EDT' },
  { label: 'Orlando time', href: '/orlando/', note: 'EST/EDT' },
  { label: 'Tampa time', href: '/tampa/', note: 'EST/EDT' },
  { label: 'Jacksonville time', href: '/jacksonville/', note: 'EST/EDT' },
  { label: 'Pensacola time', href: '/pensacola/', note: 'CST/CDT' },
  { label: 'Miami → London', href: '/time/miami/london/', note: '' },
]

export default function FloridaClockClient() {
  const [miami, setMiami] = useState({ time: '--:--:--', date: '', tzAbbr: 'EST' })
  const [zoneTimes, setZoneTimes] = useState<Record<string, string>>({})
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setMiami(getMiamiTime())
      const zt: Record<string, string> = {}
      FL_ZONES.forEach(z => { zt[z.name] = getCityTime(z.tz) })
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

  const utcLabel = mounted && miami.tzAbbr === 'EDT' ? 'UTC−4' : 'UTC−5'

  return (
    <div className="space-y-4">
      <div className={`rounded-2xl p-6 text-center ${card}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-cyan-700 mb-2">
          Live Florida Time ({mounted ? miami.tzAbbr : 'EST/EDT'} · {utcLabel})
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? miami.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? miami.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
          Miami · Orlando · Tampa · Jacksonville · Eastern Time
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Florida Time Zones</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-4 font-medium ${muted}`}>Region</th>
                <th className={`text-left py-2 pr-4 font-medium ${muted}`}>Zone</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Current Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {FL_ZONES.map(z => (
                <tr key={z.name}>
                  <td className={`py-2 pr-4 font-medium ${head}`}>{z.name}</td>
                  <td className={`py-2 pr-4 ${muted}`}>{z.label}</td>
                  <td className="py-2 font-mono font-bold text-cyan-700">
                    {mounted ? zoneTimes[z.name] ?? '--:--' : '--:--'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ClockComparisonSection primaryTz="America/New_York" countryName="Florida" />

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Florida</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          Florida (most) business hours: 9:00 AM – 6:00 PM EST/EDT. Pensacola Panhandle uses CST/CDT (1h behind).
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Florida Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.est}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Florida City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {FL_CITIES.map(c => (
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
