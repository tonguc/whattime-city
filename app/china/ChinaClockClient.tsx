'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const CST_TZ = 'Asia/Shanghai'

function getCSTTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: CST_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: CST_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
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
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

// CST (China) = UTC+8, no DST. Business 9AM-6PM = UTC 01:00-10:00
// EST (UTC-5): 8PM-5AM EST
// PST (UTC-8): 5PM-2AM PST
// GMT (UTC+0): 1AM-10AM GMT
// IST (UTC+5:30): 6:30AM-3:30PM IST
// JST (UTC+9): 10AM-7PM JST
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '8:00 PM – 5:00 AM EST', cst: '9:00 AM – 6:00 PM CST', note: '13h behind China' },
  { from: 'PST (Los Angeles)', window: '5:00 PM – 2:00 AM PST', cst: '9:00 AM – 6:00 PM CST', note: '16h behind China' },
  { from: 'GMT (London)', window: '1:00 AM – 10:00 AM GMT', cst: '9:00 AM – 6:00 PM CST', note: '8h behind China' },
  { from: 'IST (India)', window: '6:30 AM – 3:30 PM IST', cst: '9:00 AM – 6:00 PM CST', note: '2.5h behind China' },
  { from: 'JST (Tokyo)', window: '10:00 AM – 7:00 PM JST', cst: '9:00 AM – 6:00 PM CST', note: '1h ahead of China' },
  { from: 'SGT (Singapore)', window: '9:00 AM – 6:00 PM SGT', cst: '9:00 AM – 6:00 PM CST', note: 'Same as China' },
]

const CN_LINKS = [
  { label: 'Beijing time', href: '/beijing/', note: 'CST (UTC+8)' },
  { label: 'Shanghai time', href: '/shanghai/', note: 'CST (UTC+8)' },
  { label: 'Shenzhen time', href: '/shenzhen/', note: 'CST (UTC+8)' },
  { label: 'Beijing → New York', href: '/time/beijing/new-york/', note: '' },
  { label: 'Beijing → London', href: '/time/beijing/london/', note: '' },
  { label: 'Shanghai → Tokyo', href: '/time/shanghai/tokyo/', note: '' },
]

export default function ChinaClockClient() {
  const [cst, setCst] = useState({ time: '--:--:--', date: '' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setCst(getCSTTime())
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
      <div className={`rounded-2xl p-6 text-center ${card}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-red-600 mb-2">
          Live China Time (CST · UTC+8 · No DST)
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? cst.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? cst.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
          Beijing · Shanghai · Shenzhen · 1 nationwide time zone
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>China Time vs World Cities</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-4 font-medium ${muted}`}>City</th>
                <th className={`text-left py-2 pr-4 font-medium ${muted}`}>Zone</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Current Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              <tr>
                <td className={`py-2 pr-4 font-semibold ${head}`}>China (CST)</td>
                <td className={`py-2 pr-4 ${muted}`}>UTC+8</td>
                <td className="py-2 font-mono font-bold text-red-600">
                  {mounted ? cst.time.slice(0, 5) : '--:--'}
                </td>
              </tr>
              {WORLD_CITIES.map(c => (
                <tr key={c.name}>
                  <td className={`py-2 pr-4 ${text}`}>{c.name}</td>
                  <td className={`py-2 pr-4 ${muted}`}>{c.label}</td>
                  <td className={`py-2 font-mono ${text}`}>{mounted ? cityTimes[c.name] ?? '--:--' : '--:--'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call China</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          China business hours: 9:00 AM – 6:00 PM CST (UTC+8). No DST — offset fixed year-round.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>China Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.cst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>China City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {CN_LINKS.map(c => (
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
