'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const MI_TZ = 'America/Detroit'
const UP_TZ = 'America/Menominee'  // western Upper Peninsula (CST/CDT)

function getMITime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { timeZone: MI_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  const date = now.toLocaleDateString('en-US', { timeZone: MI_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: MI_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'EST'
  const upTime = now.toLocaleTimeString('en-US', { timeZone: UP_TZ, hour: '2-digit', minute: '2-digit', hour12: false })
  const upAbbr = now.toLocaleTimeString('en-US', { timeZone: UP_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'CST'
  return { time, date, tzAbbr, upTime, upAbbr }
}

const COMPARE_ZONES = [
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Berlin', tz: 'Europe/Berlin', label: 'CET/CEST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Mumbai', tz: 'Asia/Kolkata', label: 'IST' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]

export default function MichiganClockClient() {
  const [mi, setMi] = useState({ time: '--:--:--', date: '', tzAbbr: 'EST', upTime: '--:--', upAbbr: 'CST' })
  const [others, setOthers] = useState<{ time: string; abbr: string }[]>(COMPARE_ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setMi(getMITime())
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
            <div className={`text-xs font-medium uppercase tracking-wider ${textSecondary}`}>Michigan (Lower Peninsula + most of UP) · {mounted ? mi.tzAbbr : 'EST'}</div>
            <div className={`text-xs ${textSecondary}`}>{mounted && mi.tzAbbr === 'EDT' ? 'EDT · UTC−4 · Eastern Daylight Time' : 'EST · UTC−5 · Eastern Standard Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${textPrimary}`}>
          {mounted ? mi.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-1 ${textSecondary}`}>{mounted ? mi.date : ''}</div>
        {mounted && (
          <div className={`mt-3 text-sm flex items-center gap-2 ${textSecondary}`}>
            <span>📍 W. Upper Peninsula (Iron, Gogebic, Dickinson, Menominee counties):</span>
            <span className={`font-mono font-semibold ${textPrimary}`}>{mi.upTime}</span>
            <span>({mi.upAbbr} · 1h behind)</span>
          </div>
        )}
      </div>

      <ClockComparisonSection primaryTz={MI_TZ} countryName="Michigan" />
    </div>
  )
}
