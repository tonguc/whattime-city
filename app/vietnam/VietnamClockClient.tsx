'use client'
import { getFlagUrl } from '@/shared/utils'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const VN_TZ = 'Asia/Ho_Chi_Minh'

function getVNTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { timeZone: VN_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  const date = now.toLocaleDateString('en-US', { timeZone: VN_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  return { time, date }
}

const COMPARE_ZONES = [
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { city: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

export default function VietnamClockClient() {
  const [vn, setVn] = useState({ time: '--:--:--', date: '' })
  const [others, setOthers] = useState<{ time: string; abbr: string }[]>(COMPARE_ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setVn(getVNTime())
      const now = new Date()
      setOthers(COMPARE_ZONES.map(z => ({
        time: now.toLocaleTimeString('en-US', { timeZone: z.tz, hour: '2-digit', minute: '2-digit', hour12: false }),
        abbr: now.toLocaleTimeString('en-US', { timeZone: z.tz, timeZoneName: 'short' }).split(' ').pop() ?? z.label,
      })))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const cardBase = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const textPrimary = isLight ? 'text-slate-800' : 'text-white'
  const textSecondary = isLight ? 'text-slate-500' : 'text-slate-400'
  const tableRowClass = isLight ? 'border-slate-100' : 'border-slate-700'

  return (
    <div className="space-y-4">
      <div className={cardBase}>
        <div className="flex items-center gap-3 mb-1">
          <img src={getFlagUrl('VN', 'sm')} alt="VN flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${textSecondary}`}>Vietnam · Indochina Time</div>
            <div className={`text-xs ${textSecondary}`}>ICT · UTC+7 · No Daylight Saving Time</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${textPrimary}`}>
          {mounted ? vn.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-1 ${textSecondary}`}>{mounted ? vn.date : ''}</div>
      </div>
    </div>
  )
}
