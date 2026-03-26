'use client'
import { getFlagUrl } from '@/shared/utils'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const ET_TZ = 'Africa/Addis_Ababa'
function getETTime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: ET_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: ET_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: ET_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'EAT',
  }
}
const ZONES = [
  { city: 'Nairobi', tz: 'Africa/Nairobi', label: 'EAT' },
  { city: 'Cairo', tz: 'Africa/Cairo', label: 'EET' },
  { city: 'Johannesburg', tz: 'Africa/Johannesburg', label: 'SAST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Berlin', tz: 'Europe/Berlin', label: 'CET/CEST' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
]
export default function EthiopiaClockClient() {
  const [et, setEt] = useState({ time: '--:--:--', date: '', tzAbbr: 'EAT' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setEt(getETTime())
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
          <img src={getFlagUrl('ET', 'sm')} alt="ET flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Ethiopia · EAT · UTC+3</div>
            <div className={`text-xs ${ts}`}>EAT · UTC+3 · East Africa Time · No DST</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? et.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? et.date : ''}</div>
      </div>
    </div>
  )
}
