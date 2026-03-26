'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const LAGOS_TZ = 'Africa/Lagos'

function getWATTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: LAGOS_TZ,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: LAGOS_TZ,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return { time, date }
}

const WORLD_CITIES = [
  { name: 'New York', timezone: 'America/New_York', label: 'EST/EDT' },
  { name: 'Los Angeles', timezone: 'America/Los_Angeles', label: 'PST/PDT' },
  { name: 'London', timezone: 'Europe/London', label: 'GMT/BST' },
  { name: 'Berlin', timezone: 'Europe/Berlin', label: 'CET/CEST' },
  { name: 'Dubai', timezone: 'Asia/Dubai', label: 'GST' },
  { name: 'Nairobi', timezone: 'Africa/Nairobi', label: 'EAT' },
  { name: 'Singapore', timezone: 'Asia/Singapore', label: 'SGT' },
  { name: 'São Paulo', timezone: 'America/Sao_Paulo', label: 'BRT' },
]

function getCityTime(timezone: string) {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '2:00 AM – 11:00 AM EST', wat: '8:00 AM – 5:00 PM WAT', note: 'Full Nigeria business day' },
  { from: 'PST (Los Angeles)', window: '11:00 PM – 8:00 AM PST', wat: '8:00 AM – 5:00 PM WAT', note: 'Late night US West Coast' },
  { from: 'GMT (London)', window: '7:00 AM – 4:00 PM GMT', wat: '8:00 AM – 5:00 PM WAT', note: 'Best overlap — only 1h diff' },
  { from: 'CET (Berlin/Paris)', window: '8:00 AM – 5:00 PM CET', wat: '8:00 AM – 5:00 PM WAT', note: 'Perfect overlap — same hours' },
  { from: 'Toronto (EST)', window: '2:00 AM – 11:00 AM EST', wat: '8:00 AM – 5:00 PM WAT', note: 'Large Nigerian diaspora in Canada' },
  { from: 'IST (India)', window: '12:30 PM – 9:30 PM IST', wat: '8:00 AM – 5:00 PM WAT', note: 'Afternoon India = morning Nigeria' },
]

const NIGERIA_CITIES = [
  { label: 'Lagos time', href: '/lagos/', note: 'Economic capital' },
  { label: 'Abuja time', href: '/abuja/', note: 'Political capital' },
  { label: 'Kano time', href: '/kano/', note: 'Northern hub' },
  { label: 'Port Harcourt time', href: '/port-harcourt/', note: 'Oil capital' },
]

export default function NigeriaClockClient() {
  const [wat, setWat] = useState({ time: '--:--:--', date: '' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { theme, isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setWat(getWATTime())
      const times: Record<string, string> = {}
      WORLD_CITIES.forEach((c) => { times[c.name] = getCityTime(c.timezone) })
      setCityTimes(times)
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  const cardBg = isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const rowBorder = isLight ? 'border-slate-100' : 'border-slate-700'
  const linkStyle = isLight
    ? 'border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
    : 'border border-slate-600 text-slate-300 hover:bg-slate-700'

  return (
    <div className="space-y-4">
      {/* Live WAT clock */}
      <div className={`rounded-2xl p-6 text-center ${cardBg}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-emerald-600 mb-2">
          Live Nigeria Time (WAT · UTC+1)
        </div>
        <div className={`text-5xl font-mono font-bold ${headingColor} tabular-nums`}>
          {mounted ? wat.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${mutedColor}`}>{mounted ? wat.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
          Lagos · Abuja · Kano · Port Harcourt · No DST
        </div>
      </div>

      {/* World comparison */}

      {/* Best time to call */}
      <div className={`rounded-2xl p-5 ${cardBg}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-3`}>Best Time to Call Nigeria</h2>
        <p className={`text-sm ${mutedColor} mb-3`}>
          Nigeria (WAT, UTC+1) has no DST. Business hours: 8:00 AM–5:00 PM WAT, Monday–Friday.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${rowBorder}`}>
                <th className={`text-left py-2 pr-3 font-medium ${mutedColor}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${mutedColor}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${mutedColor}`}>Nigeria Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${rowBorder}`}>
              {CALL_WINDOWS.map((r) => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${textColor}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${textColor}`}>{r.window}</td>
                  <td className={`py-2 ${textColor}`}>{r.wat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Nigeria cities */}
      <div className={`rounded-2xl p-5 ${cardBg}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-3`}>Nigeria City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
          {NIGERIA_CITIES.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`px-3 py-2 rounded-xl transition-colors text-center ${linkStyle}`}
            >
              <div className="font-medium">{c.label}</div>
              <div className={`text-xs ${mutedColor}`}>{c.note}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
