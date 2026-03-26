'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'
import { getFlagUrl } from '@/shared/utils'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const GR_TZ = 'Europe/Athens'
function getGRTime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: GR_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: GR_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: GR_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'EET',
  }
}
const ZONES = [
  { city: 'Berlin', tz: 'Europe/Berlin', label: 'CET/CEST' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Istanbul', tz: 'Europe/Istanbul', label: 'TRT' },
  { city: 'Moscow', tz: 'Europe/Moscow', label: 'MSK' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
]
export default function GreeceClockClient() {
  const [gr, setGr] = useState({ time: '--:--:--', date: '', tzAbbr: 'EET' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setGr(getGRTime())
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
          <img src={getFlagUrl('GR', 'sm')} alt="GR flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Greece · {mounted ? gr.tzAbbr : 'EET'}</div>
            <div className={`text-xs ${ts}`}>{mounted && gr.tzAbbr === 'EEST' ? 'EEST · UTC+3 · Eastern European Summer Time' : 'EET · UTC+2 · Eastern European Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? gr.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? gr.date : ''}</div>
      </div>
      <ClockComparisonSection primaryTz={GR_TZ} countryName="Greece" />
    </div>
  )
}
