'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const CT_TZ = 'America/Chicago'   // Nashville, Memphis — Central (most of state)
const ET_TZ = 'America/New_York'  // Knoxville, Johnson City — Eastern (eastern tip)
function getTNTime() {
  const now = new Date()
  return {
    cTime: now.toLocaleTimeString('en-US', { timeZone: CT_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    cDate: now.toLocaleDateString('en-US', { timeZone: CT_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    cAbbr: now.toLocaleTimeString('en-US', { timeZone: CT_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'CST',
    eTime: now.toLocaleTimeString('en-US', { timeZone: ET_TZ, hour: '2-digit', minute: '2-digit', hour12: false }),
    eAbbr: now.toLocaleTimeString('en-US', { timeZone: ET_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'EST',
  }
}
const ZONES = [
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Berlin', tz: 'Europe/Berlin', label: 'CET/CEST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Mumbai', tz: 'Asia/Kolkata', label: 'IST' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]
export default function TennesseeClockClient() {
  const [tn, setTn] = useState({ cTime: '--:--:--', cDate: '', cAbbr: 'CST', eTime: '--:--', eAbbr: 'EST' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setTn(getTNTime())
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
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Tennessee (Nashville / Memphis) · {mounted ? tn.cAbbr : 'CST'}</div>
            <div className={`text-xs ${ts}`}>{mounted && tn.cAbbr === 'CDT' ? 'CDT · UTC−5 · Central Daylight Time' : 'CST · UTC−6 · Central Standard Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? tn.cTime : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? tn.cDate : ''}</div>
        {mounted && (
          <div className={`mt-3 text-sm flex items-center gap-2 ${ts}`}>
            <span>📍 East Tennessee (Knoxville, Johnson City):</span>
            <span className={`font-mono font-semibold ${tp}`}>{tn.eTime}</span>
            <span>({tn.eAbbr} · 1h ahead)</span>
          </div>
        )}
      </div>
      <ClockComparisonSection primaryTz={CT_TZ} countryName="Tennessee" />
    </div>
  )
}
