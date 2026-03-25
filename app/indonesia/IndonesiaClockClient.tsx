'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

function getCityTime(tz: string) {
  return new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
}

function getJakartaTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: 'Asia/Jakarta', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  return { time, date }
}

// Indonesia's 3 time zones
const ID_ZONES = [
  { name: 'Jakarta / Bali (WIB)', tz: 'Asia/Jakarta', label: 'WIB (UTC+7) — West Indonesia' },
  { name: 'Bali / Sulawesi (WITA)', tz: 'Asia/Makassar', label: 'WITA (UTC+8) — Central Indonesia' },
  { name: 'Papua / Maluku (WIT)', tz: 'Asia/Jayapura', label: 'WIT (UTC+9) — East Indonesia' },
]

const WORLD_CITIES = [
  { name: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { name: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { name: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

// WIB = UTC+7, no DST. Business 9AM-6PM WIB = UTC 02:00-11:00
// EST (UTC-5): 9PM-6AM EST
// PST (UTC-8): 6PM-3AM PST
// GMT (UTC+0): 2AM-11AM GMT
// SGT (UTC+8): 10AM-7PM SGT
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '9:00 PM – 6:00 AM EST', wib: '9:00 AM – 6:00 PM WIB', note: '12h behind Jakarta' },
  { from: 'PST (Los Angeles)', window: '6:00 PM – 3:00 AM PST', wib: '9:00 AM – 6:00 PM WIB', note: '15h behind Jakarta' },
  { from: 'GMT (London)', window: '2:00 AM – 11:00 AM GMT', wib: '9:00 AM – 6:00 PM WIB', note: '7h behind Jakarta' },
  { from: 'GST (Dubai)', window: '6:00 AM – 3:00 PM GST', wib: '9:00 AM – 6:00 PM WIB', note: '3h behind Jakarta' },
  { from: 'SGT (Singapore)', window: '10:00 AM – 7:00 PM SGT', wib: '9:00 AM – 6:00 PM WIB', note: '1h ahead of Jakarta' },
  { from: 'JST (Tokyo)', window: '11:00 AM – 8:00 PM JST', wib: '9:00 AM – 6:00 PM WIB', note: '2h ahead of Jakarta' },
]

const ID_CITIES = [
  { label: 'Jakarta time', href: '/jakarta/', note: 'WIB (UTC+7)' },
  { label: 'Bali time', href: '/bali/', note: 'WITA (UTC+8)' },
  { label: 'Surabaya time', href: '/surabaya/', note: 'WIB (UTC+7)' },
  { label: 'Makassar time', href: '/makassar/', note: 'WITA (UTC+8)' },
  { label: 'Jakarta → London', href: '/time/jakarta/london/', note: '' },
  { label: 'Jakarta → Singapore', href: '/time/jakarta/singapore/', note: '' },
]

export default function IndonesiaClockClient() {
  const [jakarta, setJakarta] = useState({ time: '--:--:--', date: '' })
  const [zoneTimes, setZoneTimes] = useState<Record<string, string>>({})
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setJakarta(getJakartaTime())
      const zt: Record<string, string> = {}
      ID_ZONES.forEach(z => { zt[z.name] = getCityTime(z.tz) })
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

  return (
    <div className="space-y-4">
      <div className={`rounded-2xl p-6 text-center ${card}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-red-700 mb-2">
          Live Jakarta Time (WIB · UTC+7 · No DST)
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? jakarta.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? jakarta.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
          Jakarta · Surabaya · Bandung · 3 Time Zones
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Current Time Across Indonesia</h2>
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
              {ID_ZONES.map(z => (
                <tr key={z.name}>
                  <td className={`py-2 pr-4 font-medium ${head}`}>{z.name}</td>
                  <td className={`py-2 pr-4 ${muted}`}>{z.label}</td>
                  <td className="py-2 font-mono font-bold text-red-700">
                    {mounted ? zoneTimes[z.name] ?? '--:--' : '--:--'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Indonesia Time vs World Cities</h2>
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
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Jakarta</h2>
        <p className={`text-sm mb-3 ${muted}`}>Jakarta business hours: 9:00 AM – 6:00 PM WIB (UTC+7). No DST.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Jakarta Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.wib}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Indonesia City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {ID_CITIES.map(c => (
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
