'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'
import { getFlagUrl } from '@/shared/utils'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const NZ_TZ = 'Pacific/Auckland'
const CHATHAMS_TZ = 'Pacific/Chatham'

function getNZTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { timeZone: NZ_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  const date = now.toLocaleDateString('en-US', { timeZone: NZ_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: NZ_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'NZST'
  const chathamTime = now.toLocaleTimeString('en-US', { timeZone: CHATHAMS_TZ, hour: '2-digit', minute: '2-digit', hour12: false })
  const chathamAbbr = now.toLocaleTimeString('en-US', { timeZone: CHATHAMS_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'CHAST'
  return { time, date, tzAbbr, chathamTime, chathamAbbr }
}

const COMPARE_ZONES = [
  { city: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
]

export default function NewZealandClockClient() {
  const [nz, setNz] = useState({ time: '--:--:--', date: '', tzAbbr: 'NZST', chathamTime: '--:--', chathamAbbr: 'CHAST' })
  const [others, setOthers] = useState<{ time: string; abbr: string }[]>(COMPARE_ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setNz(getNZTime())
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

  const isDST = mounted && (nz.tzAbbr === 'NZDT')

  return (
    <div className="space-y-4">
      <div className={cardBase}>
        <div className="flex items-center gap-3 mb-1">
          <img src={getFlagUrl('NZ', 'sm')} alt="NZ flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${textSecondary}`}>New Zealand · {mounted ? nz.tzAbbr : 'NZST'}</div>
            <div className={`text-xs ${textSecondary}`}>{isDST ? 'NZDT · UTC+13 · NZ Daylight Time (Southern Hemisphere summer)' : 'NZST · UTC+12 · NZ Standard Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${textPrimary}`}>
          {mounted ? nz.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-1 ${textSecondary}`}>{mounted ? nz.date : ''}</div>
        {mounted && (
          <div className={`mt-3 text-sm flex items-center gap-2 ${textSecondary}`}>
            <span>🏝️ Chatham Islands:</span>
            <span className={`font-mono font-semibold ${textPrimary}`}>{nz.chathamTime}</span>
            <span>({nz.chathamAbbr} · 45 min ahead of mainland)</span>
          </div>
        )}
      </div>

      <ClockComparisonSection primaryTz={NZ_TZ} countryName="New Zealand" />
    </div>
  )
}
