'use client'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const ET_TZ = 'America/Kentucky/Louisville'  // Most of KY — Eastern
const CT_TZ = 'America/Chicago'              // Western counties — Central
function getKYTime() {
  const now = new Date()
  return {
    eTime: now.toLocaleTimeString('en-US', { timeZone: ET_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    eDate: now.toLocaleDateString('en-US', { timeZone: ET_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    eAbbr: now.toLocaleTimeString('en-US', { timeZone: ET_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'EST',
    cTime: now.toLocaleTimeString('en-US', { timeZone: CT_TZ, hour: '2-digit', minute: '2-digit', hour12: false }),
    cAbbr: now.toLocaleTimeString('en-US', { timeZone: CT_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'CST',
  }
}
const ZONES = [
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Atlanta', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Berlin', tz: 'Europe/Berlin', label: 'CET/CEST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]
export default function KentuckyClockClient() {
  const [ky, setKy] = useState({ eTime: '--:--:--', eDate: '', eAbbr: 'EST', cTime: '--:--', cAbbr: 'CST' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setKy(getKYTime())
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
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Kentucky (Louisville) · {mounted ? ky.eAbbr : 'EST'}</div>
            <div className={`text-xs ${ts}`}>{mounted && ky.eAbbr === 'EDT' ? 'EDT · UTC−4 · Eastern Daylight Time' : 'EST · UTC−5 · Eastern Standard Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? ky.eTime : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? ky.eDate : ''}</div>
        {mounted && (
          <div className={`mt-3 text-sm flex items-center gap-2 ${ts}`}>
            <span>📍 Western Kentucky (Bowling Green area):</span>
            <span className={`font-mono font-semibold ${tp}`}>{ky.cTime}</span>
            <span>({ky.cAbbr} · Central Time · 1h behind Louisville)</span>
          </div>
        )}
      </div>
      <div className={card}>
        <h2 className={`text-base font-semibold mb-3 ${tp}`}>Kentucky vs Other Cities</h2>
        <table className="w-full text-sm">
          <thead><tr className={`border-b ${tr}`}><th className={`text-left py-2 pr-4 font-medium ${ts}`}>City</th><th className={`text-left py-2 pr-4 font-medium ${ts}`}>Zone</th><th className={`text-left py-2 font-medium ${ts}`}>Local Time</th></tr></thead>
          <tbody className={`divide-y ${tr}`}>{ZONES.map((z, i) => (<tr key={z.city}><td className={`py-2 pr-4 font-medium ${tp}`}>{z.city}</td><td className={`py-2 pr-4 ${ts}`}>{mounted ? others[i].abbr : z.label}</td><td className={`py-2 font-mono ${tp}`}>{mounted ? others[i].time : '--:--'}</td></tr>))}</tbody>
        </table>
      </div>
    </div>
  )
}
