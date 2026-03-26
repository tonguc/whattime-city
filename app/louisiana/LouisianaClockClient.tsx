'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const LA_TZ = 'America/Chicago'
function getLATime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: LA_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: LA_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: LA_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'CST',
  }
}
const ZONES = [
  { city: 'Houston', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Atlanta', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Paris', tz: 'Europe/Paris', label: 'CET/CEST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
]
export default function LouisianaClockClient() {
  const [la, setLa] = useState({ time: '--:--:--', date: '', tzAbbr: 'CST' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setLa(getLATime())
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
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Louisiana · {mounted ? la.tzAbbr : 'CST'}</div>
            <div className={`text-xs ${ts}`}>{mounted && la.tzAbbr === 'CDT' ? 'CDT · UTC−5 · Central Daylight Time' : 'CST · UTC−6 · Central Standard Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? la.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? la.date : ''}</div>
      </div>
      <ClockComparisonSection primaryTz={LA_TZ} countryName="Louisiana" />
    </div>
  )
}
