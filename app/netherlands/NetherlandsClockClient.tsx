'use client'
import { getFlagUrl } from '@/shared/utils'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const NL_TZ = 'Europe/Amsterdam'

function getNLTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { timeZone: NL_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  const date = now.toLocaleDateString('en-US', { timeZone: NL_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: NL_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'CET'
  return { time, date, tzAbbr }
}

const COMPARE_ZONES = [
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Moscow', tz: 'Europe/Moscow', label: 'MSK' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Mumbai', tz: 'Asia/Kolkata', label: 'IST' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
]

const ZONES_DEDUPED = [
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Moscow', tz: 'Europe/Moscow', label: 'MSK' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Mumbai', tz: 'Asia/Kolkata', label: 'IST' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]

export default function NetherlandsClockClient() {
  const [nl, setNl] = useState({ time: '--:--:--', date: '', tzAbbr: 'CET' })
  const [others, setOthers] = useState<{ time: string; abbr: string }[]>(ZONES_DEDUPED.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setNl(getNLTime())
      const now = new Date()
      setOthers(ZONES_DEDUPED.map(z => ({
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
          <img src={getFlagUrl('NL', 'sm')} alt="NL flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${textSecondary}`}>Netherlands · {mounted ? nl.tzAbbr : 'CET'}</div>
            <div className={`text-xs ${textSecondary}`}>{mounted && nl.tzAbbr === 'CEST' ? 'CEST · UTC+2 · Central European Summer Time' : 'CET · UTC+1 · Central European Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${textPrimary}`}>
          {mounted ? nl.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-1 ${textSecondary}`}>{mounted ? nl.date : ''}</div>
      </div>
    </div>
  )
}
