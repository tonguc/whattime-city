'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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

function getCurrentTime(timezone: string): string {
  return new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: timezone,
  })
}

function getCurrentDate(timezone: string): string {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: timezone,
  })
}

function getUTCOffset(timezone: string): string {
  const now = new Date()
  const utc = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }))
  const local = new Date(now.toLocaleString('en-US', { timeZone: timezone }))
  const diff = (local.getTime() - utc.getTime()) / (1000 * 60 * 60)
  const sign = diff >= 0 ? '+' : ''
  const hours = Math.floor(Math.abs(diff))
  const mins = Math.round((Math.abs(diff) - hours) * 60)
  return mins > 0
    ? `UTC${sign}${diff >= 0 ? hours : -hours}:${mins.toString().padStart(2, '0')}`
    : `UTC${sign}${Math.round(diff)}`
}

function getTimeDiffHours(fromTz: string, toTz: string): number {
  const now = new Date()
  const from = new Date(now.toLocaleString('en-US', { timeZone: fromTz }))
  const to = new Date(now.toLocaleString('en-US', { timeZone: toTz }))
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

interface Props {
  config: TZPairConfig
}

export default function TZPairClient({ config }: Props) {
  const [fromTime, setFromTime] = useState('')
  const [toTime, setToTime] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [fromOffset, setFromOffset] = useState('')
  const [toOffset, setToOffset] = useState('')
  const [diffHours, setDiffHours] = useState(0)

  useEffect(() => {
    const update = () => {
      setFromTime(getCurrentTime(config.fromTimezone))
      setToTime(getCurrentTime(config.toTimezone))
      setFromDate(getCurrentDate(config.fromTimezone))
      setToDate(getCurrentDate(config.toTimezone))
      setFromOffset(getUTCOffset(config.fromTimezone))
      setToOffset(getUTCOffset(config.toTimezone))
      setDiffHours(getTimeDiffHours(config.fromTimezone, config.toTimezone))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [config])

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

  // Business hours overlap: from 9-17 in both zones
  const overlap: number[] = []
  for (let h = 0; h < 24; h++) {
    const { hour: hTo } = convertHour(h, diffHours)
    if (isBusinessHour(h) && isBusinessHour(hTo)) overlap.push(h)
  }

  return (
    <div>
      {/* Live Clocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
            {config.fromAbbr}
          </div>
          <div className="text-4xl font-mono font-bold text-slate-800 dark:text-white mb-1 tabular-nums">
            {fromTime || '—'}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">{fromDate}</div>
          <div className="mt-2 text-xs text-slate-400 dark:text-slate-500">{fromOffset}</div>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
            {config.toAbbr}
          </div>
          <div className="text-4xl font-mono font-bold text-slate-800 dark:text-white mb-1 tabular-nums">
            {toTime || '—'}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">{toDate}</div>
          <div className="mt-2 text-xs text-slate-400 dark:text-slate-500">{toOffset}</div>
        </div>
      </div>

      {/* Time Difference Banner */}
      <div className="rounded-xl border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/20 p-4 mb-6 text-center">
        <p className="text-sky-700 dark:text-sky-300 font-medium">{aheadBehind}</p>
      </div>

      {/* Conversion Table */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
          {config.fromAbbr} to {config.toAbbr} Conversion Table
        </h2>
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800">
              <tr>
                <th className="text-left px-4 py-2 text-slate-600 dark:text-slate-300 font-semibold">{config.fromAbbr}</th>
                <th className="text-left px-4 py-2 text-slate-600 dark:text-slate-300 font-semibold">{config.toAbbr}</th>
                <th className="text-left px-4 py-2 text-slate-600 dark:text-slate-300 font-semibold hidden sm:table-cell">Overlap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {Array.from({ length: 24 }, (_, h) => {
                const { hour: hTo, dayShift } = convertHour(h, diffHours)
                const fromBiz = isBusinessHour(h)
                const toBiz = isBusinessHour(hTo)
                const bothBiz = fromBiz && toBiz
                return (
                  <tr
                    key={h}
                    className={bothBiz
                      ? 'bg-emerald-50 dark:bg-emerald-900/10'
                      : 'bg-white dark:bg-slate-900'}
                  >
                    <td className="px-4 py-2 text-slate-700 dark:text-slate-300 font-mono">
                      {formatHour12(h)}
                    </td>
                    <td className="px-4 py-2 text-slate-700 dark:text-slate-300 font-mono">
                      {formatHour12(hTo)}
                      {dayShift && (
                        <span className="ml-1 text-xs text-slate-400">
                          ({dayShift === '+1' ? 'next day' : 'prev day'})
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2 hidden sm:table-cell">
                      {bothBiz && (
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
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
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-block w-3 h-3 rounded-sm bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-300 mr-1" />
            Green rows = business hours overlap ({formatHour12(overlap[0])} – {formatHour12(overlap[overlap.length - 1] + 1)} {config.fromAbbr})
          </p>
        )}
      </div>

      {/* Cities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
            Major {config.fromAbbr} Cities
          </div>
          <ul className="space-y-1">
            {config.fromCities.map(c => (
              <li key={c} className="text-sm text-slate-600 dark:text-slate-300">{c}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
            Major {config.toAbbr} Cities
          </div>
          <ul className="space-y-1">
            {config.toCities.map(c => (
              <li key={c} className="text-sm text-slate-600 dark:text-slate-300">{c}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Link
          href="/time-converter"
          className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-sky-300 dark:hover:border-sky-600 transition-colors"
        >
          <div className="font-medium text-slate-800 dark:text-white text-sm">Time Converter</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Convert any two cities</div>
        </Link>
        <Link
          href="/meeting"
          className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-sky-300 dark:hover:border-sky-600 transition-colors"
        >
          <div className="font-medium text-slate-800 dark:text-white text-sm">Meeting Planner</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Find the best overlap time</div>
        </Link>
        <Link
          href="/"
          className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-sky-300 dark:hover:border-sky-600 transition-colors"
        >
          <div className="font-medium text-slate-800 dark:text-white text-sm">World Clock</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Current time in 400+ cities</div>
        </Link>
      </div>
    </div>
  )
}
