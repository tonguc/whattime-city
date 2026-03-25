'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const SAO_PAULO_TZ = 'America/Sao_Paulo'

function getBRTTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: SAO_PAULO_TZ,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: SAO_PAULO_TZ,
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
  { name: 'Singapore', timezone: 'Asia/Singapore', label: 'SGT' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo', label: 'JST' },
  { name: 'Lagos', timezone: 'Africa/Lagos', label: 'WAT' },
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
  { from: 'EST (New York)', window: '7:00 AM – 12:00 PM EST', brt: '9:00 AM – 2:00 PM BRT', note: 'Overlap with São Paulo morning' },
  { from: 'PST (Los Angeles)', window: '4:00 AM – 9:00 AM PST', brt: '9:00 AM – 2:00 PM BRT', note: 'Early morning US West Coast' },
  { from: 'GMT (London)', window: '12:00 PM – 5:00 PM GMT', brt: '9:00 AM – 2:00 PM BRT', note: 'Good afternoon overlap' },
  { from: 'CET (Berlin/Paris)', window: '1:00 PM – 6:00 PM CET', brt: '9:00 AM – 2:00 PM BRT', note: 'Afternoon Europe = morning Brazil' },
  { from: 'IST (India)', window: '5:30 PM – 10:30 PM IST', brt: '9:00 AM – 2:00 PM BRT', note: 'Evening India = morning Brazil' },
]

const BRAZIL_CITIES = [
  { label: 'São Paulo time', href: '/sao-paulo/', tz: 'BRT (UTC−3)' },
  { label: 'Rio de Janeiro time', href: '/rio-de-janeiro/', tz: 'BRT (UTC−3)' },
  { label: 'Brasília time', href: '/brasilia/', tz: 'BRT (UTC−3)' },
  { label: 'Manaus time', href: '/manaus/', tz: 'AMT (UTC−4)' },
  { label: 'Fortaleza time', href: '/fortaleza/', tz: 'BRT (UTC−3)' },
  { label: 'Salvador time', href: '/salvador/', tz: 'BRT (UTC−3)' },
]

export default function BrazilClockClient() {
  const [brt, setBrt] = useState({ time: '--:--:--', date: '' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { theme, isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setBrt(getBRTTime())
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
      {/* Live BRT clock */}
      <div className={`rounded-2xl p-6 text-center ${cardBg}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-green-600 mb-2">
          Live Brazil Time (BRT · UTC−3)
        </div>
        <div className={`text-5xl font-mono font-bold ${headingColor} tabular-nums`}>
          {mounted ? brt.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${mutedColor}`}>{mounted ? brt.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
          São Paulo · Rio de Janeiro · Brasília · No DST
        </div>
      </div>

      {/* World comparison */}
      <div className={`rounded-2xl p-5 ${cardBg}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-3`}>Brazil Time vs World Cities</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${rowBorder}`}>
                <th className={`text-left py-2 pr-4 font-medium ${mutedColor}`}>City</th>
                <th className={`text-left py-2 pr-4 font-medium ${mutedColor}`}>Time Zone</th>
                <th className={`text-left py-2 font-medium ${mutedColor}`}>Current Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${rowBorder}`}>
              <tr>
                <td className={`py-2 pr-4 font-semibold ${headingColor}`}>São Paulo (BRT)</td>
                <td className={`py-2 pr-4 ${mutedColor}`}>UTC−3</td>
                <td className={`py-2 font-mono font-bold text-green-600`}>
                  {mounted ? brt.time.slice(0, 5) : '--:--'}
                </td>
              </tr>
              {WORLD_CITIES.map((c) => (
                <tr key={c.name}>
                  <td className={`py-2 pr-4 ${textColor}`}>{c.name}</td>
                  <td className={`py-2 pr-4 ${mutedColor}`}>{c.label}</td>
                  <td className={`py-2 font-mono ${textColor}`}>
                    {mounted ? (cityTimes[c.name] ?? '--:--') : '--:--'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Best time to call */}
      <div className={`rounded-2xl p-5 ${cardBg}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-3`}>Best Time to Call Brazil</h2>
        <p className={`text-sm ${mutedColor} mb-3`}>
          Brazil (BRT, UTC−3) has no DST since 2019. Target 9:00 AM–6:00 PM BRT for business calls.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${rowBorder}`}>
                <th className={`text-left py-2 pr-3 font-medium ${mutedColor}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${mutedColor}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${mutedColor}`}>Brazil Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${rowBorder}`}>
              {CALL_WINDOWS.map((r) => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${textColor}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${textColor}`}>{r.window}</td>
                  <td className={`py-2 ${textColor}`}>{r.brt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Brazil cities grid */}
      <div className={`rounded-2xl p-5 ${cardBg}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-3`}>Brazil City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {BRAZIL_CITIES.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`px-3 py-2 rounded-xl transition-colors text-center ${linkStyle}`}
            >
              <div className="font-medium">{c.label}</div>
              <div className={`text-xs ${mutedColor}`}>{c.tz}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
