'use client'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const CU_TZ = 'America/Havana'
function getCUTime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: CU_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: CU_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: CU_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'CST',
  }
}
const ZONES = [
  { city: 'Miami / New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Mexico City', tz: 'America/Mexico_City', label: 'CST/CDT' },
  { city: 'Bogotá', tz: 'America/Bogota', label: 'COT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Madrid', tz: 'Europe/Madrid', label: 'CET/CEST' },
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'Toronto', tz: 'America/Toronto', label: 'EST/EDT' },
]
export default function CubaClockClient() {
  const [cu, setCu] = useState({ time: '--:--:--', date: '', tzAbbr: 'CST' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setCu(getCUTime())
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
          <span className="text-2xl">🇨🇺</span>
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Cuba · {mounted ? cu.tzAbbr : 'CST'}</div>
            <div className={`text-xs ${ts}`}>{mounted && cu.tzAbbr === 'CDT' ? 'CDT · UTC−4 · Cuba Daylight Time' : 'CST · UTC−5 · Cuba Standard Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? cu.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? cu.date : ''}</div>
      </div>
      <div className={card}>
        <h2 className={`text-base font-semibold mb-3 ${tp}`}>Cuba vs Other Cities</h2>
        <table className="w-full text-sm">
          <thead><tr className={`border-b ${tr}`}><th className={`text-left py-2 pr-4 font-medium ${ts}`}>City</th><th className={`text-left py-2 pr-4 font-medium ${ts}`}>Zone</th><th className={`text-left py-2 font-medium ${ts}`}>Local Time</th></tr></thead>
          <tbody className={`divide-y ${tr}`}>{ZONES.map((z, i) => (<tr key={z.city}><td className={`py-2 pr-4 font-medium ${tp}`}>{z.city}</td><td className={`py-2 pr-4 ${ts}`}>{mounted ? others[i].abbr : z.label}</td><td className={`py-2 font-mono ${tp}`}>{mounted ? others[i].time : '--:--'}</td></tr>))}</tbody>
        </table>
      </div>
    </div>
  )
}
