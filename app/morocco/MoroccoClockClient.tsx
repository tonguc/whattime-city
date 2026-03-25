'use client'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const MA_TZ = 'Africa/Casablanca'
function getMATime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: MA_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: MA_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: MA_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'WET',
  }
}
const ZONES = [
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Madrid', tz: 'Europe/Madrid', label: 'CET/CEST' },
  { city: 'Cairo', tz: 'Africa/Cairo', label: 'EET' },
  { city: 'Riyadh', tz: 'Asia/Riyadh', label: 'AST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Mumbai', tz: 'Asia/Kolkata', label: 'IST' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
]
const ZONES_DEDUPED = [
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Madrid', tz: 'Europe/Madrid', label: 'CET/CEST' },
  { city: 'Cairo', tz: 'Africa/Cairo', label: 'EET' },
  { city: 'Nairobi', tz: 'Africa/Nairobi', label: 'EAT' },
  { city: 'Riyadh', tz: 'Asia/Riyadh', label: 'AST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Mumbai', tz: 'Asia/Kolkata', label: 'IST' },
]
export default function MoroccoClockClient() {
  const [ma, setMa] = useState({ time: '--:--:--', date: '', tzAbbr: 'WET' })
  const [others, setOthers] = useState(ZONES_DEDUPED.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setMa(getMATime())
      const now = new Date()
      setOthers(ZONES_DEDUPED.map(z => ({
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
  const isSummer = mounted && ma.tzAbbr === 'WEST'
  return (
    <div className="space-y-4">
      <div className={card}>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-2xl">🇲🇦</span>
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Morocco · {mounted ? ma.tzAbbr : 'WET'}</div>
            <div className={`text-xs ${ts}`}>{isSummer ? 'WEST · UTC+1 · Western European Summer Time' : 'WET · UTC+0 · Western European Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? ma.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? ma.date : ''}</div>
        <p className={`text-xs mt-3 ${ts}`}>⚠️ Morocco suspends DST during Ramadan, reverting to WET (UTC+0) for approximately one month each year regardless of season.</p>
      </div>
      <div className={card}>
        <h2 className={`text-base font-semibold mb-3 ${tp}`}>Morocco vs World Cities</h2>
        <table className="w-full text-sm">
          <thead><tr className={`border-b ${tr}`}><th className={`text-left py-2 pr-4 font-medium ${ts}`}>City</th><th className={`text-left py-2 pr-4 font-medium ${ts}`}>Zone</th><th className={`text-left py-2 font-medium ${ts}`}>Local Time</th></tr></thead>
          <tbody className={`divide-y ${tr}`}>{ZONES_DEDUPED.map((z, i) => (<tr key={z.city}><td className={`py-2 pr-4 font-medium ${tp}`}>{z.city}</td><td className={`py-2 pr-4 ${ts}`}>{mounted ? others[i].abbr : z.label}</td><td className={`py-2 font-mono ${tp}`}>{mounted ? others[i].time : '--:--'}</td></tr>))}</tbody>
        </table>
      </div>
    </div>
  )
}
