'use client'
import { getFlagUrl } from '@/shared/utils'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const BD_TZ = 'Asia/Dhaka'
function getBDTime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: BD_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: BD_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: BD_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'BST',
  }
}
const ZONES = [
  { city: 'Kolkata / Mumbai', tz: 'Asia/Kolkata', label: 'IST' },
  { city: 'Yangon', tz: 'Asia/Rangoon', label: 'MMT' },
  { city: 'Bangkok', tz: 'Asia/Bangkok', label: 'ICT' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
]
export default function BangladeshClockClient() {
  const [bd, setBd] = useState({ time: '--:--:--', date: '', tzAbbr: 'BST' })
  const [others, setOthers] = useState(ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setBd(getBDTime())
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
          <img src={getFlagUrl('BD', 'sm')} alt="BD flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Bangladesh · BST · UTC+6</div>
            <div className={`text-xs ${ts}`}>BST · UTC+6 · Bangladesh Standard Time · No DST</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? bd.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? bd.date : ''}</div>
      </div>
    </div>
  )
}
