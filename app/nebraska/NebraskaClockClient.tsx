'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const NE_EAST_TZ = 'America/Chicago'
const NE_WEST_TZ = 'America/Denver'
function getNETime(tz: string, abbr: string) {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: tz, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: tz, timeZoneName: 'short' }).split(' ').pop() ?? abbr,
  }
}
const ZONES = [
  { city: 'Omaha', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Denver', tz: 'America/Denver', label: 'MST/MDT' },
  { city: 'Kansas City', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Phoenix', tz: 'America/Phoenix', label: 'MST' },
]
export default function NebraskaClockClient() {
  const [east, setEast] = useState({ time: '--:--:--', date: '', tzAbbr: 'CST' })
  const [west, setWest] = useState({ time: '--:--:--', date: '', tzAbbr: 'MST' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setEast(getNETime(NE_EAST_TZ, 'CST'))
      setWest(getNETime(NE_WEST_TZ, 'MST'))
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
  const divider = isLight ? 'border-slate-200' : 'border-slate-600'
  return (
    <div className="space-y-4">
      <div className={card}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider mb-1 ${ts}`}>🇺🇸 Most of NE — Omaha · Lincoln</div>
            <div className={`text-xs mb-2 ${ts}`}>Central Time (CST/CDT) · UTC−6/−5</div>
            <div className={`font-mono text-3xl sm:text-4xl font-bold tracking-tight ${tp}`}>{mounted ? east.time : '--:--:--'}</div>
            <div className={`text-xs mt-1 ${ts}`}>{mounted ? east.tzAbbr : 'CST'}</div>
          </div>
          <div className={`border-l pl-4 ${divider}`}>
            <div className={`text-xs font-medium uppercase tracking-wider mb-1 ${ts}`}>Panhandle — Scottsbluff · Alliance</div>
            <div className={`text-xs mb-2 ${ts}`}>Mountain Time (MST/MDT) · UTC−7/−6</div>
            <div className={`font-mono text-3xl sm:text-4xl font-bold tracking-tight ${tp}`}>{mounted ? west.time : '--:--:--'}</div>
            <div className={`text-xs mt-1 ${ts}`}>{mounted ? west.tzAbbr : 'MST'}</div>
          </div>
        </div>
        <div className={`text-sm mt-3 ${ts}`}>{mounted ? east.date : ''}</div>
      </div>
      <ClockComparisonSection primaryTz={NE_EAST_TZ} countryName="Nebraska" />
    </div>
  )
}
