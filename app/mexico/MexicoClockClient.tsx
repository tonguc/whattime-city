'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const MX_TZ = 'America/Mexico_City'

function getMXTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: MX_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: MX_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: MX_TZ, timeZoneName: 'short' }).split(' ').pop() || 'CST'
  return { time, date, tzAbbr }
}

function getCityTime(tz: string) {
  return new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
}

// Mexico City zones — note Mexico abolished DST for most of country in 2023
// Only Quintana Roo (EST no DST) and border zones differ
const MX_ZONES = [
  { name: 'Mexico City / CDMX', tz: 'America/Mexico_City', label: 'CST (UTC−6, no DST since 2023)' },
  { name: 'Cancún / Quintana Roo', tz: 'America/Cancun', label: 'EST (UTC−5, no DST)' },
  { name: 'Tijuana / Baja California', tz: 'America/Tijuana', label: 'PST/PDT (UTC−8/−7, DST)' },
  { name: 'Ciudad Juárez / Chihuahua', tz: 'America/Ojinaga', label: 'MST/MDT (UTC−7/−6, DST)' },
]

const WORLD_CITIES = [
  { name: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { name: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { name: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { name: 'Berlin / Paris', tz: 'Europe/Paris', label: 'CET/CEST' },
  { name: 'São Paulo', tz: 'America/Sao_Paulo', label: 'BRT' },
]

// CST = UTC−6, no DST (Mexico City since 2023). Business 9AM-6PM CST = UTC 15:00-00:00
// EST (UTC-5): 10AM-7PM EST
// PST (UTC-8): 7AM-4PM PST
// GMT (UTC+0): 3PM-Midnight GMT
// CET (UTC+1): 4PM-1AM CET
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '10:00 AM – 7:00 PM EST', cst: '9:00 AM – 6:00 PM CST', note: '1h ahead of MX City' },
  { from: 'PST (Los Angeles)', window: '7:00 AM – 4:00 PM PST', cst: '9:00 AM – 6:00 PM CST', note: '2h ahead of MX City' },
  { from: 'GMT (London)', window: '3:00 PM – Midnight GMT', cst: '9:00 AM – 6:00 PM CST', note: '6h ahead of MX City' },
  { from: 'CET (Berlin/Paris)', window: '4:00 PM – 1:00 AM CET', cst: '9:00 AM – 6:00 PM CST', note: '7h ahead of MX City' },
  { from: 'BRT (São Paulo)', window: '12:00 PM – 9:00 PM BRT', cst: '9:00 AM – 6:00 PM CST', note: '3h ahead of MX City' },
]

const MX_CITIES = [
  { label: 'Mexico City time', href: '/mexico-city/', note: 'CST (UTC−6)' },
  { label: 'Cancún time', href: '/cancun/', note: 'EST (UTC−5)' },
  { label: 'Tijuana time', href: '/tijuana/', note: 'PST/PDT' },
  { label: 'Guadalajara time', href: '/guadalajara/', note: 'CST (UTC−6)' },
  { label: 'Monterrey time', href: '/monterrey/', note: 'CST (UTC−6)' },
  { label: 'MX City → New York', href: '/time/mexico-city/new-york/', note: '' },
]

export default function MexicoClockClient() {
  const [mx, setMx] = useState({ time: '--:--:--', date: '', tzAbbr: 'CST' })
  const [zoneTimes, setZoneTimes] = useState<Record<string, string>>({})
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setMx(getMXTime())
      const zt: Record<string, string> = {}
      MX_ZONES.forEach(z => { zt[z.name] = getCityTime(z.tz) })
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
        <div className="text-xs uppercase tracking-widest font-medium text-green-700 mb-2">
          Live Mexico City Time (CST · UTC−6 · No DST)
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? mx.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? mx.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-green-600 inline-block" />
          CDMX · Guadalajara · Monterrey · No DST since 2023
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Current Time Across Mexico</h2>
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
              {MX_ZONES.map(z => (
                <tr key={z.name}>
                  <td className={`py-2 pr-4 font-medium ${head}`}>{z.name}</td>
                  <td className={`py-2 pr-4 ${muted}`}>{z.label}</td>
                  <td className="py-2 font-mono font-bold text-green-700">
                    {mounted ? zoneTimes[z.name] ?? '--:--' : '--:--'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Mexico City Time vs World Cities</h2>
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
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Mexico City</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          Mexico City business hours: 9:00 AM – 6:00 PM CST (UTC−6). No DST since October 2023.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>MX City Time</th>
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
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Mexico City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {MX_CITIES.map(c => (
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
