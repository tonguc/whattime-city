'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const SGT_TZ = 'Asia/Singapore'

function getSGTTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: SGT_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: SGT_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
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
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
  { name: 'Beijing', tz: 'Asia/Shanghai', label: 'CST' },
]

// SGT = UTC+8, no DST. Business 9AM-6PM = UTC 01:00-10:00
// EST (UTC-5): 8PM-5AM EST
// PST (UTC-8): 5PM-2AM PST
// GMT (UTC+0): 1AM-10AM GMT
// CET (UTC+1): 2AM-11AM CET
// IST (UTC+5:30): 6:30AM-3:30PM IST
// JST (UTC+9): 10AM-7PM JST
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '8:00 PM – 5:00 AM EST', sgt: '9:00 AM – 6:00 PM SGT', note: '13h behind SG' },
  { from: 'PST (Los Angeles)', window: '5:00 PM – 2:00 AM PST', sgt: '9:00 AM – 6:00 PM SGT', note: '16h behind SG' },
  { from: 'GMT (London)', window: '1:00 AM – 10:00 AM GMT', sgt: '9:00 AM – 6:00 PM SGT', note: '8h behind SG' },
  { from: 'CET (Berlin/Paris)', window: '2:00 AM – 11:00 AM CET', sgt: '9:00 AM – 6:00 PM SGT', note: '7h behind SG' },
  { from: 'IST (India)', window: '6:30 AM – 3:30 PM IST', sgt: '9:00 AM – 6:00 PM SGT', note: '2.5h behind SG' },
  { from: 'JST (Tokyo)', window: '10:00 AM – 7:00 PM JST', sgt: '9:00 AM – 6:00 PM SGT', note: '1h ahead of SG' },
]

const SG_LINKS = [
  { label: 'Singapore city time', href: '/singapore-city/', note: 'SGT (UTC+8)' },
  { label: 'Singapore → London', href: '/time/singapore/london/', note: '' },
  { label: 'Singapore → New York', href: '/time/singapore/new-york/', note: '' },
  { label: 'Singapore → Tokyo', href: '/time/singapore/tokyo/', note: '' },
  { label: 'Singapore → Mumbai', href: '/time/singapore/mumbai/', note: '' },
  { label: 'Singapore → Sydney', href: '/time/singapore/sydney/', note: '' },
]

export default function SingaporeClockClient() {
  const [sgt, setSgt] = useState({ time: '--:--:--', date: '' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setSgt(getSGTTime())
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
          Live Singapore Time (SGT · UTC+8 · No DST)
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? sgt.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? sgt.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
          Singapore · Single City-State · No DST
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Singapore Time vs World Cities</h2>
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
                <td className={`py-2 pr-4 font-semibold ${head}`}>Singapore (SGT)</td>
                <td className={`py-2 pr-4 ${muted}`}>UTC+8</td>
                <td className="py-2 font-mono font-bold text-red-600">
                  {mounted ? sgt.time.slice(0, 5) : '--:--'}
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
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Singapore</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          Singapore business hours: 9:00 AM – 6:00 PM SGT (UTC+8). No DST — offset fixed year-round.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Singapore Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.sgt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Singapore Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {SG_LINKS.map(c => (
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
