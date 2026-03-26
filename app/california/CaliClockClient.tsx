'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const CA_TZ = 'America/Los_Angeles'

function getCaliTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: CA_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: CA_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: CA_TZ, timeZoneName: 'short' }).split(' ').pop() || 'PST'
  return { time, date, tzAbbr }
}

function getCityTime(tz: string) {
  return new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
}

// Rakip veri: "what time is it in california" cluster 550K vol, en çok karşılaştırılan şehirler
const WORLD_CITIES = [
  { name: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { name: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { name: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { name: 'Paris / Berlin', tz: 'Europe/Paris', label: 'CET/CEST' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

// Python ile doğrulanmış: PST (UTC-8) iş saatlerine göre çağrı pencereleri
// 9 AM-6 PM PST için: UTC = 17-02, diğer şehirlerde:
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '12:00 PM – 9:00 PM EST', pst: '9:00 AM – 6:00 PM PST', note: '3h ahead of CA' },
  { from: 'GMT (London)', window: '5:00 PM – midnight GMT', pst: '9:00 AM – 6:00 PM PST', note: '8h ahead in winter' },
  { from: 'CET (Berlin/Paris)', window: '6:00 PM – 3:00 AM CET', pst: '9:00 AM – 6:00 PM PST', note: '9h ahead in winter' },
  { from: 'IST (India)', window: '10:30 PM – 7:30 AM IST', pst: '9:00 AM – 6:00 PM PST', note: '13.5h ahead' },
  { from: 'SGT (Singapore)', window: '1:00 AM – 10:00 AM SGT', pst: '9:00 AM – 6:00 PM PST', note: '16h ahead' },
  { from: 'JST (Tokyo)', window: '2:00 AM – 11:00 AM JST', pst: '9:00 AM – 6:00 PM PST', note: '17h ahead' },
]

const CA_CITIES = [
  { label: 'Los Angeles time', href: '/los-angeles/', note: 'PST/PDT' },
  { label: 'San Francisco time', href: '/san-francisco/', note: 'PST/PDT' },
  { label: 'San Diego time', href: '/san-diego/', note: 'PST/PDT' },
  { label: 'San Jose time', href: '/san-jose/', note: 'PST/PDT' },
  { label: 'Sacramento time', href: '/sacramento/', note: 'PST/PDT' },
  { label: 'Las Vegas time', href: '/las-vegas/', note: 'MST/PDT' },
]

export default function CaliClockClient() {
  const [cali, setCali] = useState({ time: '--:--:--', date: '', tzAbbr: 'PST' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setCali(getCaliTime())
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
      {/* Live clock */}
      <div className={`rounded-2xl p-6 text-center ${card}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-yellow-600 mb-2">
          Live California Time ({mounted ? cali.tzAbbr : 'PST/PDT'} · {mounted && cali.tzAbbr === 'PDT' ? 'UTC−7' : 'UTC−8'})
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? cali.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? cali.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />
          Los Angeles · San Francisco · San Diego · Sacramento
        </div>
      </div>

      {/* World comparison */}

      {/* Best time to call California */}
      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call California</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          California business hours: 9:00 AM – 6:00 PM PST/PDT. California is the last major US time zone — calls from Asia/Europe must be early morning local time.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>CA Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.pst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CA cities */}
      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>California City Times</h2>
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
