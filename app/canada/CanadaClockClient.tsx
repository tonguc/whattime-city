'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

function getCityTime(tz: string, opts?: Intl.DateTimeFormatOptions) {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: tz, hour: '2-digit', minute: '2-digit', ...opts, hour12: false,
  })
}

function getTorontoFull() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: 'America/Toronto', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: 'America/Toronto', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  return { time, date }
}

// Canada's 6 main time zones
const CA_ZONES = [
  { name: 'Toronto / Ottawa', tz: 'America/Toronto', label: 'EST/EDT (UTC−5/−4)' },
  { name: 'Winnipeg', tz: 'America/Winnipeg', label: 'CST/CDT (UTC−6/−5)' },
  { name: 'Calgary / Edmonton', tz: 'America/Edmonton', label: 'MST/MDT (UTC−7/−6)' },
  { name: 'Vancouver', tz: 'America/Vancouver', label: 'PST/PDT (UTC−8/−7)' },
  { name: 'Halifax', tz: 'America/Halifax', label: 'AST/ADT (UTC−4/−3)' },
  { name: "St. John's (NL)", tz: 'America/St_Johns', label: 'NST/NDT (UTC−3:30/−2:30)' },
]

const WORLD_CITIES = [
  { name: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { name: 'Paris / Berlin', tz: 'Europe/Paris', label: 'CET/CEST' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

const CA_CITIES = [
  { label: 'Toronto time', href: '/toronto/', note: 'EST/EDT' },
  { label: 'Vancouver time', href: '/vancouver/', note: 'PST/PDT' },
  { label: 'Montreal time', href: '/montreal/', note: 'EST/EDT' },
  { label: 'Calgary time', href: '/calgary/', note: 'MST/MDT' },
  { label: 'Ottawa time', href: '/ottawa/', note: 'EST/EDT' },
  { label: 'Halifax time', href: '/halifax/', note: 'AST/ADT' },
]

export default function CanadaClockClient() {
  const [toronto, setToronto] = useState({ time: '--:--:--', date: '' })
  const [zoneTimes, setZoneTimes] = useState<Record<string, string>>({})
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setToronto(getTorontoFull())
      const zt: Record<string, string> = {}
      CA_ZONES.forEach(z => { zt[z.name] = getCityTime(z.tz) })
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
          Live Toronto Time (EST/EDT · Reference)
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? toronto.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? toronto.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
          6 Time Zones · Toronto · Vancouver · Montreal · Calgary
        </div>
      </div>

      {/* All Canada zones live */}
      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Current Time Across Canada</h2>
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
              {CA_ZONES.map(z => (
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

      {/* World comparison */}
      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Toronto Time vs World Cities</h2>
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

      {/* Canada cities */}
      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Canadian City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {CA_CITIES.map(c => (
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
