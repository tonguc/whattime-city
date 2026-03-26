'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const IST_TIMEZONE = 'Asia/Kolkata'

function getISTTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: IST_TIMEZONE,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: IST_TIMEZONE,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return { time, date }
}

function getUTCOffset(tz: string): number {
  const now = new Date()
  const utc = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }))
  const local = new Date(now.toLocaleString('en-US', { timeZone: tz }))
  return (local.getTime() - utc.getTime()) / (1000 * 60 * 60)
}

const WORLD_CITIES = [
  { name: 'New York', timezone: 'America/New_York', label: 'EST/EDT' },
  { name: 'London', timezone: 'Europe/London', label: 'GMT/BST' },
  { name: 'Dubai', timezone: 'Asia/Dubai', label: 'GST' },
  { name: 'Singapore', timezone: 'Asia/Singapore', label: 'SGT' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo', label: 'JST' },
  { name: 'Sydney', timezone: 'Australia/Sydney', label: 'AEST' },
  { name: 'Los Angeles', timezone: 'America/Los_Angeles', label: 'PST/PDT' },
  { name: 'Berlin', timezone: 'Europe/Berlin', label: 'CET/CEST' },
]

function getCityTime(timezone: string) {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

function formatDiff(istOffset: number, cityOffset: number): string {
  const diff = istOffset - cityOffset
  const abs = Math.abs(diff)
  const h = Math.floor(abs)
  const m = Math.round((abs - h) * 60)
  const sign = diff > 0 ? '+' : '-'
  if (m === 0) return `${sign}${h}h`
  return `${sign}${h}h ${m}m`
}

export default function IndiaClockClient() {
  const { theme, isLight } = useCityContext()
  const [ist, setIst] = useState({ time: '--:--:--', date: '' })
  const [cityTimes, setCityTimes] = useState<string[]>(WORLD_CITIES.map(() => '--:--'))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setIst(getISTTime())
      setCityTimes(WORLD_CITIES.map(c => getCityTime(c.timezone)))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  const istOffset = 5.5
  const card = isLight
    ? 'bg-white border border-slate-200'
    : 'bg-slate-900/60 border border-slate-700/50'
  const text = isLight ? 'text-slate-800' : 'text-slate-100'
  const muted = isLight ? 'text-slate-500' : 'text-slate-400'

  return (
    <div className="space-y-4">
      {/* Live IST Clock */}
      <div className={`rounded-2xl ${card} p-6 text-center`}>
        <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${isLight ? 'text-orange-500' : 'text-orange-400'}`}>
          India Standard Time (IST) · UTC+5:30
        </div>
        <div className={`text-5xl sm:text-7xl font-bold tabular-nums tracking-tight my-3 ${isLight ? 'text-slate-900' : 'text-white'}`}>
          {ist.time}
        </div>
        <div className={`text-sm ${muted}`}>{ist.date}</div>
        <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs">
          <span className={`px-3 py-1 rounded-full ${isLight ? 'bg-green-100 text-green-700' : 'bg-green-900/40 text-green-300'}`}>
            No DST
          </span>
          <span className={`px-3 py-1 rounded-full ${isLight ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/40 text-blue-300'}`}>
            1 Time Zone
          </span>
          <span className={`px-3 py-1 rounded-full ${isLight ? 'bg-orange-100 text-orange-700' : 'bg-orange-900/40 text-orange-300'}`}>
            +30-min offset
          </span>
        </div>
      </div>



      {/* Best Time to Call India */}
      <div className={`rounded-2xl ${card} p-6`}>
        <h2 className={`text-lg font-semibold mb-4 ${text}`}>Best Time to Call India</h2>
        <div className="space-y-3">
          {[
            { from: 'United States (EST)', window: '8:00 AM – 11:30 AM EST', india: '6:30 PM – 10:00 PM IST', quality: 'good' },
            { from: 'United States (PST)', window: '5:00 AM – 8:30 AM PST', india: '6:30 PM – 10:00 PM IST', quality: 'hard' },
            { from: 'United Kingdom (GMT)', window: '3:30 AM – 12:00 PM GMT', india: '9:00 AM – 5:30 PM IST', quality: 'excellent' },
            { from: 'Germany / Europe (CET)', window: '4:30 AM – 1:00 PM CET', india: '9:00 AM – 5:30 PM IST', quality: 'excellent' },
            { from: 'Dubai (GST)', window: '9:30 AM – 6:00 PM GST', india: '9:00 AM – 5:30 PM IST', quality: 'excellent' },
            { from: 'Singapore (SGT)', window: '6:30 AM – 3:00 PM SGT', india: '9:00 AM – 5:30 PM IST', quality: 'excellent' },
          ].map((row) => (
            <div
              key={row.from}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-4 py-3 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}
            >
              <div className={`font-medium text-sm ${text}`}>{row.from}</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className={`px-2 py-0.5 rounded font-mono ${isLight ? 'bg-slate-200 text-slate-700' : 'bg-slate-700 text-slate-300'}`}>
                  {row.window}
                </span>
                <span className={`px-2 py-0.5 rounded ${
                  row.quality === 'excellent'
                    ? (isLight ? 'bg-green-100 text-green-700' : 'bg-green-900/40 text-green-300')
                    : row.quality === 'good'
                    ? (isLight ? 'bg-amber-100 text-amber-700' : 'bg-amber-900/40 text-amber-300')
                    : (isLight ? 'bg-red-100 text-red-700' : 'bg-red-900/40 text-red-300')
                }`}>
                  {row.india}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* India Cities */}
      <div className={`rounded-2xl ${card} p-6`}>
        <h2 className={`text-lg font-semibold mb-1 ${text}`}>All India Cities — Same Time Zone</h2>
        <p className={`text-sm mb-4 ${muted}`}>
          India uses a single time zone for the entire country. Every city below shows identical IST time.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { name: 'New Delhi', slug: 'delhi', note: 'Capital' },
            { name: 'Mumbai', slug: 'mumbai', note: 'Financial hub' },
            { name: 'Bangalore', slug: 'bangalore', note: 'Tech hub' },
            { name: 'Chennai', slug: 'chennai', note: 'South India' },
            { name: 'Kolkata', slug: 'kolkata', note: 'East India' },
            { name: 'Hyderabad', slug: 'hyderabad', note: 'IT hub' },
          ].map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}/`}
              className={`p-3 rounded-xl text-center transition-all hover:scale-[1.02] ${isLight ? 'bg-orange-50 border border-orange-100 hover:bg-orange-100' : 'bg-orange-900/20 border border-orange-900/30 hover:bg-orange-900/30'}`}
            >
              <div className={`font-medium text-sm ${text}`}>{city.name}</div>
              <div className={`text-xs ${muted}`}>{city.note}</div>
              <div className={`text-xs mt-1 font-mono tabular-nums ${isLight ? 'text-orange-600' : 'text-orange-400'}`}>
                IST
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
