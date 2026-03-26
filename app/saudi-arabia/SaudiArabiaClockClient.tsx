'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'
import { getFlagUrl } from '@/shared/utils'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const SA_TZ = 'Asia/Riyadh'
function getSATime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: SA_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: SA_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
  }
}
const ZONES = [
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Cairo', tz: 'Africa/Cairo', label: 'EET' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Mumbai', tz: 'Asia/Kolkata', label: 'IST' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { city: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]
export default function SaudiArabiaClockClient() {
  const [sa, setSa] = useState({ time: '--:--:--', date: '' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setSa(getSATime())
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
          <img src={getFlagUrl('SA', 'sm')} alt="SA flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Saudi Arabia · AST</div>
            <div className={`text-xs ${ts}`}>AST · UTC+3 · Arabia Standard Time · No Daylight Saving Time</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? sa.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? sa.date : ''}</div>
      </div>
      <ClockComparisonSection primaryTz={SA_TZ} countryName="Saudi Arabia" />
    </div>
  )
}
