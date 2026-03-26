'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const IL_TZ = 'America/Chicago'

function getCSTTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: IL_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: IL_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: IL_TZ, timeZoneName: 'short' }).split(' ').pop() || 'CST'
  return { time, date, tzAbbr }
}

function getCityTime(tz: string) {
  return new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
}

const WORLD_CITIES = [
  { name: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { name: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { name: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { name: 'Berlin / Paris', tz: 'Europe/Paris', label: 'CET/CEST' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]

// CST = UTC-6. Business 9AM-6PM CST = UTC 15:00-00:00
// EST (UTC-5): 10AM-7PM EST
// PST (UTC-8): 7AM-4PM PST
// GMT (UTC+0): 3PM-Midnight GMT
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '10:00 AM – 7:00 PM EST', cst: '9:00 AM – 6:00 PM CST', note: '1h ahead of IL' },
  { from: 'PST (Los Angeles)', window: '7:00 AM – 4:00 PM PST', cst: '9:00 AM – 6:00 PM CST', note: '2h behind IL' },
  { from: 'GMT (London)', window: '3:00 PM – Midnight GMT', cst: '9:00 AM – 6:00 PM CST', note: '6h ahead of IL' },
  { from: 'CET (Berlin/Paris)', window: '4:00 PM – 1:00 AM CET', cst: '9:00 AM – 6:00 PM CST', note: '7h ahead of IL' },
  { from: 'IST (India)', window: '8:30 PM – 5:30 AM IST', cst: '9:00 AM – 6:00 PM CST', note: '11.5h ahead of IL' },
]

const IL_CITIES = [
  { label: 'Chicago time', href: '/chicago/', note: 'CST/CDT' },
  { label: 'Springfield time', href: '/springfield/', note: 'CST/CDT' },
  { label: 'Rockford time', href: '/rockford/', note: 'CST/CDT' },
  { label: 'Chicago → New York', href: '/time/chicago/new-york/', note: '' },
  { label: 'Chicago → Los Angeles', href: '/time/chicago/los-angeles/', note: '' },
  { label: 'Chicago → London', href: '/time/chicago/london/', note: '' },
]

export default function IllinoisClockClient() {
  const [cst, setCst] = useState({ time: '--:--:--', date: '', tzAbbr: 'CST' })
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

  const utcLabel = mounted && cst.tzAbbr === 'CDT' ? 'UTC−5' : 'UTC−6'

  return (
    <div className="space-y-4">
      <div className={`rounded-2xl p-6 text-center ${card}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-blue-700 mb-2">
          Live Illinois / Chicago Time ({mounted ? cst.tzAbbr : 'CST/CDT'} · {utcLabel})
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? cst.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? cst.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
          Chicago · Springfield · Rockford · Peoria · Central Time
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Illinois / Chicago</h2>
        <p className={`text-sm mb-3 ${muted}`}>Illinois business hours: 9:00 AM – 6:00 PM CST/CDT. Same time zone as Texas and Minnesota.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Illinois Time</th>
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
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Illinois City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {IL_CITIES.map(c => (
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
