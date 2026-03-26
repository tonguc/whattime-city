'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const EG_TZ = 'Africa/Cairo'

function getEETTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: EG_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: EG_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
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
  { name: 'Istanbul', tz: 'Europe/Istanbul', label: 'TRT' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Riyadh', tz: 'Asia/Riyadh', label: 'AST' },
  { name: 'Berlin / Paris', tz: 'Europe/Paris', label: 'CET/CEST' },
]

// EET = UTC+2, no DST (since 2011). Business 9AM-6PM EET = UTC 07:00-16:00
// EST (UTC-5): 2AM-11AM EST
// GMT (UTC+0): 7AM-4PM GMT
// CET (UTC+1): 8AM-5PM CET
// GST (UTC+4): 11AM-8PM GST
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '2:00 AM – 11:00 AM EST', eet: '9:00 AM – 6:00 PM EET', note: '7h behind Egypt' },
  { from: 'PST (Los Angeles)', window: '11:00 PM – 8:00 AM PST', eet: '9:00 AM – 6:00 PM EET', note: '10h behind Egypt' },
  { from: 'GMT (London)', window: '7:00 AM – 4:00 PM GMT', eet: '9:00 AM – 6:00 PM EET', note: '2h behind Egypt' },
  { from: 'CET (Berlin/Paris)', window: '8:00 AM – 5:00 PM CET', eet: '9:00 AM – 6:00 PM EET', note: '1h behind Egypt' },
  { from: 'TRT (Istanbul)', window: '10:00 AM – 7:00 PM TRT', eet: '9:00 AM – 6:00 PM EET', note: '1h ahead of Egypt' },
  { from: 'GST (Dubai)', window: '11:00 AM – 8:00 PM GST', eet: '9:00 AM – 6:00 PM EET', note: '2h ahead of Egypt' },
]

const EG_CITIES = [
  { label: 'Cairo time', href: '/cairo/', note: 'EET (UTC+2)' },
  { label: 'Alexandria time', href: '/alexandria/', note: 'EET (UTC+2)' },
  { label: 'Cairo → London', href: '/time/cairo/london/', note: '' },
  { label: 'Cairo → New York', href: '/time/cairo/new-york/', note: '' },
  { label: 'Cairo → Dubai', href: '/time/cairo/dubai/', note: '' },
  { label: 'Cairo → Riyadh', href: '/time/cairo/riyadh/', note: '' },
]

export default function EgyptClockClient() {
  const [eet, setEet] = useState({ time: '--:--:--', date: '' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setEet(getEETTime())
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
        <div className="text-xs uppercase tracking-widest font-medium text-amber-700 mb-2">
          Live Egypt Time (EET · UTC+2 · No DST)
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? eet.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? eet.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-amber-600 inline-block" />
          Cairo · Alexandria · Giza · No DST since 2011
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Egypt</h2>
        <p className={`text-sm mb-3 ${muted}`}>Egypt business hours: 9:00 AM – 6:00 PM EET (UTC+2). No DST since 2011.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Egypt Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.eet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Egypt City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {EG_CITIES.map(c => (
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
