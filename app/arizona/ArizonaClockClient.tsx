'use client'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const AZ_TZ = 'America/Phoenix'
const NAVAJO_TZ = 'America/Denver'  // Navajo Nation observes MDT in summer
function getAZTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { timeZone: AZ_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  const date = now.toLocaleDateString('en-US', { timeZone: AZ_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const navajoTime = now.toLocaleTimeString('en-US', { timeZone: NAVAJO_TZ, hour: '2-digit', minute: '2-digit', hour12: false })
  const navajoAbbr = now.toLocaleTimeString('en-US', { timeZone: NAVAJO_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'MST'
  const mstAbbr = now.toLocaleTimeString('en-US', { timeZone: AZ_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'MST'
  return { time, date, navajoTime, navajoAbbr, mstAbbr }
}
const ZONES = [
  { city: 'Los Angeles (Pacific)', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'Denver (Mountain)', tz: 'America/Denver', label: 'MST/MDT' },
  { city: 'Chicago (Central)', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'New York (Eastern)', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]
export default function ArizonaClockClient() {
  const [az, setAz] = useState({ time: '--:--:--', date: '', navajoTime: '--:--', navajoAbbr: 'MST', mstAbbr: 'MST' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setAz(getAZTime())
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
  // Arizona stays on MST year-round; in summer it equals PDT (UTC-7)
  const isUSsummer = mounted && az.mstAbbr !== 'MST' ? false : true
  return (
    <div className="space-y-4">
      <div className={card}>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-2xl">🇺🇸</span>
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Arizona · MST year-round</div>
            <div className={`text-xs ${ts}`}>MST · UTC−7 · No Daylight Saving Time (except Navajo Nation)</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? az.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? az.date : ''}</div>
        {mounted && (
          <div className={`mt-3 text-sm flex items-center gap-2 ${ts}`}>
            <span>🏜️ Navajo Nation (observes DST):</span>
            <span className={`font-mono font-semibold ${tp}`}>{az.navajoTime}</span>
            <span>({az.navajoAbbr})</span>
          </div>
        )}
      </div>
      <div className={card}>
        <h2 className={`text-base font-semibold mb-3 ${tp}`}>Arizona vs Other Cities</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className={`border-b ${tr}`}><th className={`text-left py-2 pr-4 font-medium ${ts}`}>City</th><th className={`text-left py-2 pr-4 font-medium ${ts}`}>Zone</th><th className={`text-left py-2 font-medium ${ts}`}>Local Time</th></tr></thead>
            <tbody className={`divide-y ${tr}`}>{ZONES.map((z, i) => (<tr key={z.city}><td className={`py-2 pr-4 font-medium ${tp}`}>{z.city}</td><td className={`py-2 pr-4 ${ts}`}>{mounted ? others[i].abbr : z.label}</td><td className={`py-2 font-mono ${tp}`}>{mounted ? others[i].time : '--:--'}</td></tr>))}</tbody>
          </table>
        </div>
        <p className={`text-xs mt-3 ${ts}`}>In winter, Arizona (MST, UTC−7) matches Mountain Time (Colorado, Utah). In summer, Arizona matches Pacific Daylight Time (California, PDT, UTC−7) because Arizona does not spring forward.</p>
      </div>
    </div>
  )
}
