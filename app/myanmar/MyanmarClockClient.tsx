'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'
import { getFlagUrl } from '@/shared/utils'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const MM_TZ = 'Asia/Rangoon'
function getMMTime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: MM_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: MM_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: MM_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'MMT',
  }
}
const ZONES = [
  { city: 'Dhaka', tz: 'Asia/Dhaka', label: 'BST UTC+6' },
  { city: 'Bangkok / Hanoi', tz: 'Asia/Bangkok', label: 'ICT UTC+7' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT UTC+8' },
  { city: 'Kolkata', tz: 'Asia/Kolkata', label: 'IST UTC+5:30' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST UTC+4' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
]
export default function MyanmarClockClient() {
  const [mm, setMm] = useState({ time: '--:--:--', date: '', tzAbbr: 'MMT' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setMm(getMMTime())
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
          <img src={getFlagUrl('MM', 'sm')} alt="MM flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Myanmar · MMT · UTC+6:30</div>
            <div className={`text-xs ${ts}`}>MMT · UTC+6:30 · Myanmar Time · No DST · Half-hour offset</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? mm.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? mm.date : ''}</div>
      </div>
      <ClockComparisonSection primaryTz={MM_TZ} countryName="Myanmar" />
    </div>
  )
}
