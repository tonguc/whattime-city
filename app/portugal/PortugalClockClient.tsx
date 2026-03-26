'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'
import { getFlagUrl } from '@/shared/utils'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const PT_TZ = 'Europe/Lisbon'
const AZ_TZ = 'Atlantic/Azores'  // UTC−1 / UTC+0
function getPTTime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: PT_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: PT_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: PT_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'WET',
    azoresTime: now.toLocaleTimeString('en-US', { timeZone: AZ_TZ, hour: '2-digit', minute: '2-digit', hour12: false }),
    azoresAbbr: now.toLocaleTimeString('en-US', { timeZone: AZ_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'AZOT',
  }
}
const ZONES = [
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Madrid', tz: 'Europe/Madrid', label: 'CET/CEST' },
  { city: 'Paris', tz: 'Europe/Paris', label: 'CET/CEST' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]
export default function PortugalClockClient() {
  const [pt, setPt] = useState({ time: '--:--:--', date: '', tzAbbr: 'WET', azoresTime: '--:--', azoresAbbr: 'AZOT' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setPt(getPTTime())
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
          <img src={getFlagUrl('PT', 'sm')} alt="PT flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Portugal (Lisbon) · {mounted ? pt.tzAbbr : 'WET'}</div>
            <div className={`text-xs ${ts}`}>{mounted && pt.tzAbbr === 'WEST' ? 'WEST · UTC+1 · Western European Summer Time' : 'WET · UTC+0 · Western European Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? pt.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? pt.date : ''}</div>
        {mounted && (
          <div className={`mt-3 text-sm flex items-center gap-2 ${ts}`}>
            <span>🌊 Azores Islands:</span>
            <span className={`font-mono font-semibold ${tp}`}>{pt.azoresTime}</span>
            <span>({pt.azoresAbbr} · 1h behind Lisbon)</span>
          </div>
        )}
      </div>
      <ClockComparisonSection primaryTz={PT_TZ} countryName="Portugal" />
    </div>
  )
}
