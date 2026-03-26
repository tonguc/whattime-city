'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const JP_TZ = 'Asia/Tokyo'

function getJSTTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: JP_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: JP_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
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
  { name: 'Berlin / Paris', tz: 'Europe/Paris', label: 'CET/CEST' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

// JST = UTC+9, no DST. Business hours 9AM-6PM JST = UTC 00:00-09:00
// EST (UTC-5): 7PM-4AM EST (prev day)
// PST (UTC-8): 4PM-1AM PST (prev day)
// GMT (UTC+0): 12AM-9AM GMT
// CET (UTC+1): 1AM-10AM CET
// IST (UTC+5:30): 5:30AM-2:30PM IST
// SGT (UTC+8): 8AM-5PM SGT
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '7:00 PM – 4:00 AM EST', jst: '9:00 AM – 6:00 PM JST', note: '14h behind Japan' },
  { from: 'PST (Los Angeles)', window: '4:00 PM – 1:00 AM PST', jst: '9:00 AM – 6:00 PM JST', note: '17h behind Japan' },
  { from: 'GMT (London)', window: '12:00 AM – 9:00 AM GMT', jst: '9:00 AM – 6:00 PM JST', note: '9h behind Japan' },
  { from: 'CET (Berlin/Paris)', window: '1:00 AM – 10:00 AM CET', jst: '9:00 AM – 6:00 PM JST', note: '8h behind Japan' },
  { from: 'IST (India)', window: '5:30 AM – 2:30 PM IST', jst: '9:00 AM – 6:00 PM JST', note: '3.5h behind Japan' },
  { from: 'SGT (Singapore)', window: '8:00 AM – 5:00 PM SGT', jst: '9:00 AM – 6:00 PM JST', note: '1h behind Japan' },
]

const JP_CITIES = [
  { label: 'Tokyo time', href: '/tokyo/', note: 'JST (UTC+9)' },
  { label: 'Osaka time', href: '/osaka/', note: 'JST (UTC+9)' },
  { label: 'Kyoto time', href: '/kyoto/', note: 'JST (UTC+9)' },
  { label: 'Sapporo time', href: '/sapporo/', note: 'JST (UTC+9)' },
  { label: 'Tokyo → New York', href: '/time/tokyo/new-york/', note: '' },
  { label: 'Tokyo → London', href: '/time/tokyo/london/', note: '' },
]

export default function JapanClockClient() {
  const [jst, setJst] = useState({ time: '--:--:--', date: '' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setJst(getJSTTime())
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
        <div className="text-xs uppercase tracking-widest font-medium text-rose-600 mb-2">
          Live Japan Time (JST · UTC+9)
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? jst.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? jst.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
          Tokyo · Osaka · Kyoto · Sapporo · No DST
        </div>
      </div>

            <ClockComparisonSection primaryTz={JP_TZ} countryName="Japan" />

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Japan</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          Japan business hours: 9:00 AM – 6:00 PM JST (UTC+9). No DST — the offset is fixed year-round.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Japan Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.jst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Japan City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {JP_CITIES.map(c => (
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
