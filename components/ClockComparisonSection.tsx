'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  primaryTz: string
  countryName: string
}

const GLOBAL_HUBS = [
  { city: 'New York',    tz: 'America/New_York' },
  { city: 'London',      tz: 'Europe/London' },
  { city: 'Toronto',     tz: 'America/Toronto' },
  { city: 'Miami',       tz: 'America/New_York' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles' },
  { city: 'Mexico City', tz: 'America/Mexico_City' },
  { city: 'Madrid',      tz: 'Europe/Madrid' },
  { city: 'Paris',       tz: 'Europe/Paris' },
  { city: 'Berlin',      tz: 'Europe/Berlin' },
  { city: 'Dubai',       tz: 'Asia/Dubai' },
  { city: 'Tokyo',       tz: 'Asia/Tokyo' },
  { city: 'Sydney',      tz: 'Australia/Sydney' },
  { city: 'São Paulo',   tz: 'America/Sao_Paulo' },
  { city: 'Singapore',   tz: 'Asia/Singapore' },
]

export default function ClockComparisonSection({ primaryTz, countryName }: Props) {
  const { isLight } = useCityContext()
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const getHourDiff = (cityTz: string): number => {
    if (!now) return 0
    const p = new Date(now.toLocaleString('en-US', { timeZone: primaryTz }))
    const c = new Date(now.toLocaleString('en-US', { timeZone: cityTz }))
    return Math.round((c.getTime() - p.getTime()) / 3600000)
  }

  const getLocalTime = (tz: string) =>
    now ? now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false }) : '--:--'

  const getTzAbbr = (tz: string) =>
    now ? (now.toLocaleTimeString('en-US', { timeZone: tz, timeZoneName: 'short' }).split(' ').pop() ?? '') : ''

  const diffLabel = (diff: number) => {
    if (diff === 0) return 'Same time'
    const abs = Math.abs(diff)
    return diff > 0 ? `+${abs}h` : `-${abs}h`
  }

  const diffSentence = (city: string, diff: number) => {
    if (diff === 0) return `${countryName} is on the same time as ${city}`
    const abs = Math.abs(diff)
    const h = abs === 1 ? 'hour' : 'hours'
    return diff > 0
      ? `${countryName} is ${abs} ${h} behind ${city}`
      : `${countryName} is ${abs} ${h} ahead of ${city}`
  }

  const getBestCallTime = (cityTz: string) => {
    if (!now) return '...'
    const diff = getHourDiff(cityTz)
    // Best call FROM city TO hub: when hub is open 9-17, what time is it in the city?
    const start = Math.max(9 + diff, 8)
    const end   = Math.min(17 + diff, 20)
    if (start >= end) return 'Limited overlap'
    const fmt = (h: number) => {
      const hr = ((h % 24) + 24) % 24
      const suffix = hr >= 12 ? 'PM' : 'AM'
      const h12 = hr % 12 === 0 ? 12 : hr % 12
      return `${h12}:00 ${suffix}`
    }
    return `${fmt(start)} – ${fmt(end)}`
  }

  // Card & theme classes
  const card     = isLight ? 'rounded-2xl border border-slate-200 bg-white p-5 mb-4' : 'rounded-2xl border border-slate-700 bg-slate-800 p-5 mb-4'
  const heading  = isLight ? 'text-slate-800' : 'text-white'
  const muted    = isLight ? 'text-slate-500' : 'text-slate-400'
  const thBorder = isLight ? 'border-slate-100' : 'border-slate-700'
  const rowDiv   = isLight ? 'divide-slate-50'  : 'divide-slate-700/50'
  const rowText  = isLight ? 'text-slate-800'   : 'text-white'
  const pill     = isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'
  const sentenceBg = isLight ? 'bg-slate-100' : 'bg-slate-700/60'

  const nyDiff  = getHourDiff('America/New_York')
  const lonDiff = getHourDiff('Europe/London')

  // Dedupe by city name (Miami and New York both use America/New_York)
  const seen = new Set<string>()
  const hubs = GLOBAL_HUBS.filter(h => {
    if (seen.has(h.city)) return false
    seen.add(h.city)
    return true
  })

  return (
    <section className={card}>
      <h2 className={`text-lg font-semibold mb-3 ${heading}`}>
        {countryName} Time Difference
      </h2>

      {/* Key comparison sentences */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className={`text-sm px-3 py-1.5 rounded-xl ${sentenceBg} ${muted}`}>
          {now ? diffSentence('New York', nyDiff) : `${countryName} vs New York`}
        </span>
        <span className={`text-sm px-3 py-1.5 rounded-xl ${sentenceBg} ${muted}`}>
          {now ? diffSentence('London', lonDiff) : `${countryName} vs London`}
        </span>
      </div>

      {/* Comparison table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className={`border-b ${thBorder} ${muted}`}>
              <th className="text-left py-2 pr-4 font-medium">City</th>
              <th className="text-left py-2 pr-4 font-medium hidden sm:table-cell">Zone</th>
              <th className="text-left py-2 pr-4 font-medium">Local Time</th>
              <th className="text-left py-2 pr-4 font-medium">Difference</th>
              <th className="text-left py-2 font-medium hidden md:table-cell">Best Call From</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${rowDiv}`}>
            {hubs.map(hub => {
              const diff = getHourDiff(hub.tz)
              const diffColor = diff === 0
                ? (isLight ? 'text-blue-600'   : 'text-blue-400')
                : diff > 0
                  ? (isLight ? 'text-orange-600' : 'text-orange-400')
                  : (isLight ? 'text-green-600'  : 'text-green-400')
              return (
                <tr key={hub.city}>
                  <td className={`py-2 pr-4 font-medium ${rowText}`}>{hub.city}</td>
                  <td className={`py-2 pr-4 hidden sm:table-cell ${muted}`}>{getTzAbbr(hub.tz)}</td>
                  <td className={`py-2 pr-4 font-mono ${rowText}`}>{getLocalTime(hub.tz)}</td>
                  <td className={`py-2 pr-4 font-semibold ${diffColor}`}>{diffLabel(diff)}</td>
                  <td className="py-2 hidden md:table-cell">
                    <span className={`text-xs px-2 py-0.5 rounded-lg ${pill}`}>{getBestCallTime(hub.tz)}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
