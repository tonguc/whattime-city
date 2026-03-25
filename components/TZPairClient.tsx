'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

export interface TZPairConfig {
  fromAbbr: string        // e.g. "PST"
  toAbbr: string          // e.g. "EST"
  fromTimezone: string    // IANA e.g. "America/Los_Angeles"
  toTimezone: string      // IANA e.g. "America/New_York"
  fromFullName: string    // e.g. "Pacific Standard Time"
  toFullName: string      // e.g. "Eastern Standard Time"
  fromCities: string[]    // major cities
  toCities: string[]
}

function formatTime(date: Date, timezone: string): string {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: timezone,
  })
}

function formatDate(date: Date, timezone: string): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: timezone,
  })
}

function computeUTCOffset(date: Date, timezone: string): string {
  const utc = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }))
  const local = new Date(date.toLocaleString('en-US', { timeZone: timezone }))
  const diff = (local.getTime() - utc.getTime()) / (1000 * 60 * 60)
  const sign = diff >= 0 ? '+' : ''
  const hours = Math.floor(Math.abs(diff))
  const mins = Math.round((Math.abs(diff) - hours) * 60)
  return mins > 0
    ? `UTC${sign}${diff >= 0 ? hours : -hours}:${mins.toString().padStart(2, '0')}`
    : `UTC${sign}${Math.round(diff)}`
}

function computeTimeDiff(date: Date, fromTz: string, toTz: string): number {
  const from = new Date(date.toLocaleString('en-US', { timeZone: fromTz }))
  const to = new Date(date.toLocaleString('en-US', { timeZone: toTz }))
  return (to.getTime() - from.getTime()) / (1000 * 60 * 60)
}

function convertHour(hour: number, diffHours: number): { hour: number; dayShift: string } {
  let newHour = hour + diffHours
  let dayShift = ''
  if (newHour >= 24) { newHour -= 24; dayShift = '+1' }
  else if (newHour < 0) { newHour += 24; dayShift = '-1' }
  return { hour: Math.round(newHour), dayShift }
}

function formatHour12(hour: number): string {
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const h = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
  return `${h}:00 ${ampm}`
}

function isBusinessHour(hour: number): boolean {
  return hour >= 9 && hour < 18
}

interface ClockState {
  fromTime: string
  toTime: string
  fromDate: string
  toDate: string
  fromOffset: string
  toOffset: string
  diffHours: number
}

interface Props {
  config: TZPairConfig
}

export default function TZPairClient({ config }: Props) {
  const { theme, isLight } = useCityContext()

  // UTC offset and diff only change at DST boundaries — compute once, refresh hourly
  const staticRef = useRef({ fromOffset: '', toOffset: '', diffHours: 0 })

  const [clocks, setClocks] = useState<ClockState>({
    fromTime: '', toTime: '', fromDate: '', toDate: '',
    fromOffset: '', toOffset: '', diffHours: 0,
  })

  useEffect(() => {
    const computeStatic = (date: Date) => {
      staticRef.current = {
        fromOffset: computeUTCOffset(date, config.fromTimezone),
        toOffset: computeUTCOffset(date, config.toTimezone),
        diffHours: computeTimeDiff(date, config.fromTimezone, config.toTimezone),
      }
    }

    const update = () => {
      const now = new Date()
      setClocks({
        fromTime: formatTime(now, config.fromTimezone),
        toTime: formatTime(now, config.toTimezone),
        fromDate: formatDate(now, config.fromTimezone),
        toDate: formatDate(now, config.toTimezone),
        ...staticRef.current,
      })
    }

    computeStatic(new Date())
    update()

    const ticker = setInterval(update, 1000)
    // Recompute UTC offsets/diff every hour in case DST boundary is crossed
    const hourly = setInterval(() => computeStatic(new Date()), 60 * 60 * 1000)

    return () => {
      clearInterval(ticker)
      clearInterval(hourly)
    }
  }, [config])

  const { fromTime, toTime, fromDate, toDate, fromOffset, toOffset, diffHours } = clocks

  const diffAbs = Math.abs(diffHours)
  const diffHrs = Math.floor(diffAbs)
  const diffMins = Math.round((diffAbs - diffHrs) * 60)
  const diffLabel = diffMins > 0
    ? `${diffHrs}h ${diffMins}m`
    : `${diffHrs} hour${diffHrs !== 1 ? 's' : ''}`
  const aheadBehind = diffHours > 0
    ? `${config.toAbbr} is ${diffLabel} ahead of ${config.fromAbbr}`
    : diffHours < 0
    ? `${config.toAbbr} is ${diffLabel} behind ${config.fromAbbr}`
    : `${config.fromAbbr} and ${config.toAbbr} are the same time`

  const overlap: number[] = []
  for (let h = 0; h < 24; h++) {
    const { hour: hTo } = convertHour(h, diffHours)
    if (isBusinessHour(h) && isBusinessHour(hTo)) overlap.push(h)
  }

  const cardClass = `rounded-2xl border ${theme.card}`
  const textMain = theme.text
  const textMuted = theme.textMuted

  return (
    <div>
      {/* Live Clocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className={`${cardClass} p-6 text-center`}>
          <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${textMuted}`}>
            {config.fromAbbr}
          </div>
          <div className={`text-4xl font-mono font-bold mb-1 tabular-nums ${textMain}`}>
            {fromTime || '—'}
          </div>
          <div className={`text-sm ${textMuted}`}>{fromDate}</div>
          <div className={`mt-2 text-xs ${textMuted}`}>{fromOffset}</div>
        </div>
        <div className={`${cardClass} p-6 text-center`}>
          <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${textMuted}`}>
            {config.toAbbr}
          </div>
          <div className={`text-4xl font-mono font-bold mb-1 tabular-nums ${textMain}`}>
            {toTime || '—'}
          </div>
          <div className={`text-sm ${textMuted}`}>{toDate}</div>
          <div className={`mt-2 text-xs ${textMuted}`}>{toOffset}</div>
        </div>
      </div>

      {/* Time Difference Banner */}
      <div className={`rounded-xl border p-4 mb-6 text-center ${isLight ? 'border-sky-200 bg-sky-50' : 'border-sky-800 bg-sky-900/30'}`}>
        <p className={`font-medium ${isLight ? 'text-sky-700' : 'text-sky-300'}`}>{aheadBehind}</p>
      </div>

      {/* Conversion Table */}
      <div className="mb-6">
        <h2 className={`text-xl font-semibold mb-3 ${textMain}`}>
          {config.fromAbbr} to {config.toAbbr} Conversion Table
        </h2>
        <div className={`rounded-xl border overflow-hidden ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-50' : 'bg-slate-800'}>
              <tr>
                <th className={`text-left px-4 py-2 font-semibold ${textMain}`}>{config.fromAbbr}</th>
                <th className={`text-left px-4 py-2 font-semibold ${textMain}`}>{config.toAbbr}</th>
                <th className={`text-left px-4 py-2 font-semibold hidden sm:table-cell ${textMain}`}>Overlap</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700'}`}>
              {Array.from({ length: 24 }, (_, h) => {
                const { hour: hTo, dayShift } = convertHour(h, diffHours)
                const bothBiz = isBusinessHour(h) && isBusinessHour(hTo)
                return (
                  <tr key={h} className={bothBiz
                    ? (isLight ? 'bg-emerald-50' : 'bg-emerald-900/20')
                    : (isLight ? 'bg-white' : 'bg-slate-900/20')}>
                    <td className={`px-4 py-2 font-mono ${textMain}`}>{formatHour12(h)}</td>
                    <td className={`px-4 py-2 font-mono ${textMain}`}>
                      {formatHour12(hTo)}
                      {dayShift && (
                        <span className={`ml-1 text-xs ${textMuted}`}>
                          ({dayShift === '+1' ? 'next day' : 'prev day'})
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2 hidden sm:table-cell">
                      {bothBiz && (
                        <span className={`text-xs font-medium ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`}>
                          Business hours
                        </span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {overlap.length > 0 && (
          <p className={`mt-2 text-sm ${textMuted}`}>
            <span className={`inline-block w-3 h-3 rounded-sm mr-1 ${isLight ? 'bg-emerald-100 border border-emerald-300' : 'bg-emerald-900/40 border border-emerald-700'}`} />
            Green rows = business hours overlap ({formatHour12(overlap[0])} – {formatHour12(overlap[overlap.length - 1] + 1)} {config.fromAbbr})
          </p>
        )}
      </div>

      {/* Cities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className={`${cardClass} p-4`}>
          <div className={`text-xs font-semibold uppercase tracking-wide mb-2 ${textMuted}`}>
            Major {config.fromAbbr} Cities
          </div>
          <ul className="space-y-1">
            {config.fromCities.map(c => (
              <li key={c} className={`text-sm ${textMuted}`}>{c}</li>
            ))}
          </ul>
        </div>
        <div className={`${cardClass} p-4`}>
          <div className={`text-xs font-semibold uppercase tracking-wide mb-2 ${textMuted}`}>
            Major {config.toAbbr} Cities
          </div>
          <ul className="space-y-1">
            {config.toCities.map(c => (
              <li key={c} className={`text-sm ${textMuted}`}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Link href="/time-converter" className={`p-4 rounded-xl border transition-colors ${isLight ? 'border-slate-200 bg-white hover:border-sky-300' : 'border-slate-700 bg-slate-800/40 hover:border-sky-600'}`}>
          <div className={`font-medium text-sm ${textMain}`}>Time Converter</div>
          <div className={`text-xs mt-1 ${textMuted}`}>Convert any two cities</div>
        </Link>
        <Link href="/meeting" className={`p-4 rounded-xl border transition-colors ${isLight ? 'border-slate-200 bg-white hover:border-sky-300' : 'border-slate-700 bg-slate-800/40 hover:border-sky-600'}`}>
          <div className={`font-medium text-sm ${textMain}`}>Meeting Planner</div>
          <div className={`text-xs mt-1 ${textMuted}`}>Find the best overlap time</div>
        </Link>
        <Link href="/" className={`p-4 rounded-xl border transition-colors ${isLight ? 'border-slate-200 bg-white hover:border-sky-300' : 'border-slate-700 bg-slate-800/40 hover:border-sky-600'}`}>
          <div className={`font-medium text-sm ${textMain}`}>World Clock</div>
          <div className={`text-xs mt-1 ${textMuted}`}>Current time in 400+ cities</div>
        </Link>
      </div>
    </div>
  )
}
