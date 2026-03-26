'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const NY_TZ = 'America/New_York'

function getNYTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: NY_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: NY_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: NY_TZ, timeZoneName: 'short' }).split(' ').pop() || 'EST'
  return { time, date, tzAbbr }
}

function getCityTime(tz: string) {
  return new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
}

const WORLD_CITIES = [
  { name: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { name: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { name: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { name: 'Berlin / Paris', tz: 'Europe/Paris', label: 'CET/CEST' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

// EST = UTC-5. Business 9AM-6PM EST = UTC 14:00-23:00
// PST (UTC-8): 6AM-3PM PST
// GMT (UTC+0): 2PM-11PM GMT
// CET (UTC+1): 3PM-Midnight CET
const CALL_WINDOWS = [
  { from: 'PST (Los Angeles)', window: '6:00 AM – 3:00 PM PST', est: '9:00 AM – 6:00 PM EST', note: '3h behind NY' },
  { from: 'CST (Chicago/Texas)', window: '8:00 AM – 5:00 PM CST', est: '9:00 AM – 6:00 PM EST', note: '1h behind NY' },
  { from: 'GMT (London)', window: '2:00 PM – 11:00 PM GMT', est: '9:00 AM – 6:00 PM EST', note: '5h ahead of NY' },
  { from: 'CET (Berlin/Paris)', window: '3:00 PM – Midnight CET', est: '9:00 AM – 6:00 PM EST', note: '6h ahead of NY' },
  { from: 'IST (India)', window: '7:30 PM – 4:30 AM IST', est: '9:00 AM – 6:00 PM EST', note: '10.5h ahead of NY' },
  { from: 'JST (Tokyo)', window: '11:00 PM – 8:00 AM JST', est: '9:00 AM – 6:00 PM EST', note: '14h ahead of NY' },
]

const NY_CITIES = [
  { label: 'New York City time', href: '/new-york/', note: 'EST/EDT' },
  { label: 'Buffalo time', href: '/buffalo/', note: 'EST/EDT' },
  { label: 'Albany time', href: '/albany/', note: 'EST/EDT' },
  { label: 'NYC → London', href: '/time/new-york/london/', note: '' },
  { label: 'NYC → Los Angeles', href: '/time/new-york/los-angeles/', note: '' },
  { label: 'NYC → Tokyo', href: '/time/new-york/tokyo/', note: '' },
]

export default function NewYorkStateClockClient() {
  const [ny, setNy] = useState({ time: '--:--:--', date: '', tzAbbr: 'EST' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setNy(getNYTime())
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

  const utcLabel = mounted && ny.tzAbbr === 'EDT' ? 'UTC−4' : 'UTC−5'

  return (
    <div className="space-y-4">
      <div className={`rounded-2xl p-6 text-center ${card}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-slate-600 mb-2">
          Live New York Time ({mounted ? ny.tzAbbr : 'EST/EDT'} · {utcLabel})
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? ny.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? ny.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-slate-500 inline-block" />
          New York City · Buffalo · Albany · Rochester · Eastern Time
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call New York</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          New York business hours: 9:00 AM – 6:00 PM EST/EDT. EST (UTC−5) in winter; EDT (UTC−4) during DST.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>NY Time</th>
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
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>New York City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {NY_CITIES.map(c => (
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
