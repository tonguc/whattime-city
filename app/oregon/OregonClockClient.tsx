'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const OR_TZ = 'America/Los_Angeles'   // Portland, Salem, Eugene — Pacific
const MALHEUR_TZ = 'America/Boise'    // Malheur County — Mountain
function getORTime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: OR_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: OR_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: OR_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'PST',
    malheurTime: now.toLocaleTimeString('en-US', { timeZone: MALHEUR_TZ, hour: '2-digit', minute: '2-digit', hour12: false }),
    malheurAbbr: now.toLocaleTimeString('en-US', { timeZone: MALHEUR_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'MST',
  }
}
const ZONES = [
  { city: 'Los Angeles / Seattle', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'Denver', tz: 'America/Denver', label: 'MST/MDT' },
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]
export default function OregonClockClient() {
  const [or, setOr] = useState({ time: '--:--:--', date: '', tzAbbr: 'PST', malheurTime: '--:--', malheurAbbr: 'MST' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setOr(getORTime())
      const now = new Date()
      setOthers(ZONES.map(z => ({
        time: now.toLocaleTimeString('en-US', { timeZone: z.tz, hour: '2-digit', minute: '2-digit', hour12: false }),
        abbr: now.toLocaleTimeString('en-US', { timeZone: z.tz, timeZoneName: 'short' }).split(' ').pop() ?? z.label,
      })))
    }
    update(); const id = setInterval(update, 1000); return () => clearInterval(id)
  }, [])
  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white p-6' : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const tp = isLight ? 'text-slate-800' : 'text-white'
  const ts = isLight ? 'text-slate-500' : 'text-slate-400'
  const tr = isLight ? 'border-slate-100' : 'border-slate-700'
  return (
    <div className="space-y-4">
      <div className={card}>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-2xl">🇺🇸</span>
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Oregon (Portland / Salem) · {mounted ? or.tzAbbr : 'PST'}</div>
            <div className={`text-xs ${ts}`}>{mounted && or.tzAbbr === 'PDT' ? 'PDT · UTC−7 · Pacific Daylight Time' : 'PST · UTC−8 · Pacific Standard Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? or.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? or.date : ''}</div>
        {mounted && (
          <div className={`mt-3 text-sm flex items-center gap-2 ${ts}`}>
            <span>📍 Malheur County (Ontario):</span>
            <span className={`font-mono font-semibold ${tp}`}>{or.malheurTime}</span>
            <span>({or.malheurAbbr} · Mountain Time · 1h ahead)</span>
          </div>
        )}
      </div>
      <ClockComparisonSection primaryTz={OR_TZ} countryName="Oregon" />
    </div>
  )
}
