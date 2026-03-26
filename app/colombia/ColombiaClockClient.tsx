'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'
import { getFlagUrl } from '@/shared/utils'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const CO_TZ = 'America/Bogota'
function getCOTime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: CO_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: CO_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
  }
}
const ZONES = [
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'Buenos Aires', tz: 'America/Argentina/Buenos_Aires', label: 'ART' },
  { city: 'São Paulo', tz: 'America/Sao_Paulo', label: 'BRT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Madrid', tz: 'Europe/Madrid', label: 'CET/CEST' },
  { city: 'Miami', tz: 'America/New_York', label: 'EST/EDT' },
]
const ZONES_DEDUPED = [
  { city: 'New York / Miami', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Chicago', tz: 'America/Chicago', label: 'CST/CDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'Buenos Aires', tz: 'America/Argentina/Buenos_Aires', label: 'ART' },
  { city: 'São Paulo', tz: 'America/Sao_Paulo', label: 'BRT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Madrid', tz: 'Europe/Madrid', label: 'CET/CEST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
]
export default function ColombiaClockClient() {
  const [col, setCol] = useState({ time: '--:--:--', date: '' })
  const [others, setOthers] = useState(ZONES_DEDUPED.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setCol(getCOTime())
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
  return (
    <div className="space-y-4">
      <div className={card}>
        <div className="flex items-center gap-3 mb-1">
          <img src={getFlagUrl('CO', 'sm')} alt="CO flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Colombia · COT</div>
            <div className={`text-xs ${ts}`}>COT · UTC−5 · Colombia Time · No Daylight Saving Time</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? col.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? col.date : ''}</div>
      </div>
      <ClockComparisonSection primaryTz={CO_TZ} countryName="Colombia" />
    </div>
  )
}
