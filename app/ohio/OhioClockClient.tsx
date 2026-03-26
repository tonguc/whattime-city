'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const OH_TZ = 'America/New_York'

function getOHTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { timeZone: OH_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  const date = now.toLocaleDateString('en-US', { timeZone: OH_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: OH_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'EST'
  return { time, date, tzAbbr }
}

const COMPARE_ZONES = [
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Denver', tz: 'America/Denver', label: 'MST/MDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Berlin', tz: 'Europe/Berlin', label: 'CET/CEST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Mumbai', tz: 'Asia/Kolkata', label: 'IST' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]

export default function OhioClockClient() {
  const [oh, setOh] = useState({ time: '--:--:--', date: '', tzAbbr: 'EST' })
  const [others, setOthers] = useState<{ time: string; abbr: string }[]>(COMPARE_ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setOh(getOHTime())
      const now = new Date()
      setOthers(COMPARE_ZONES.map(z => ({
        time: now.toLocaleTimeString('en-US', { timeZone: z.tz, hour: '2-digit', minute: '2-digit', hour12: false }),
        abbr: now.toLocaleTimeString('en-US', { timeZone: z.tz, timeZoneName: 'short' }).split(' ').pop() ?? z.label,
      })))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const cardBase = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const textPrimary = isLight ? 'text-slate-800' : 'text-white'
  const textSecondary = isLight ? 'text-slate-500' : 'text-slate-400'
  const tableRowClass = isLight ? 'border-slate-100' : 'border-slate-700'

  return (
    <div className="space-y-4">
      <div className={cardBase}>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-2xl">🇺🇸</span>
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${textSecondary}`}>Ohio · {mounted ? oh.tzAbbr : 'EST'}</div>
            <div className={`text-xs ${textSecondary}`}>{mounted && oh.tzAbbr === 'EDT' ? 'EDT · UTC−4 · Eastern Daylight Time' : 'EST · UTC−5 · Eastern Standard Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${textPrimary}`}>
          {mounted ? oh.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-1 ${textSecondary}`}>{mounted ? oh.date : ''}</div>
      </div>
    </div>
  )
}
