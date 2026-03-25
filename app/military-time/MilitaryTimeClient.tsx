'use client'

import { useState, useEffect } from 'react'

function toMilitary(h: number, m: number): string {
  return `${h.toString().padStart(2, '0')}${m.toString().padStart(2, '0')}`
}

function toStandard(h: number, m: number): string {
  const ampm = h >= 12 ? 'PM' : 'AM'
  const displayH = h > 12 ? h - 12 : h === 0 ? 12 : h
  return `${displayH}:${m.toString().padStart(2, '0')} ${ampm}`
}

function militaryToStandard(input: string): string {
  const clean = input.replace(/\D/g, '').padStart(4, '0').slice(0, 4)
  const h = parseInt(clean.slice(0, 2))
  const m = parseInt(clean.slice(2, 4))
  if (h > 23 || m > 59) return 'Invalid time'
  return toStandard(h, m)
}

function standardToMilitary(h: number, m: number, isPM: boolean): string {
  let hour = h
  if (isPM && h !== 12) hour += 12
  if (!isPM && h === 12) hour = 0
  return toMilitary(hour, m)
}

export default function MilitaryTimeClient() {
  const [currentMilitary, setCurrentMilitary] = useState('')
  const [currentStandard, setCurrentStandard] = useState('')

  // Manual converter states
  const [milInput, setMilInput] = useState('')
  const [milResult, setMilResult] = useState('')

  const [stdHour, setStdHour] = useState(12)
  const [stdMin, setStdMin] = useState(0)
  const [stdAmPm, setStdAmPm] = useState<'AM' | 'PM'>('PM')
  const [stdResult, setStdResult] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const h = now.getHours()
      const m = now.getMinutes()
      const s = now.getSeconds()
      setCurrentMilitary(`${toMilitary(h, m)}:${s.toString().padStart(2, '0')}`)
      setCurrentStandard(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleMilConvert = () => {
    setMilResult(militaryToStandard(milInput))
  }

  const handleStdConvert = () => {
    setStdResult(standardToMilitary(stdHour, stdMin, stdAmPm === 'PM'))
  }

  return (
    <div className="space-y-4 mb-8">
      {/* Live Clock */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 text-center">
          Current Time
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-3xl font-mono font-bold text-sky-600 dark:text-sky-400 tabular-nums">
              {currentMilitary || '——:——'}
            </div>
            <div className="text-xs text-slate-400 mt-1">24-hour (military)</div>
          </div>
          <div>
            <div className="text-3xl font-mono font-bold text-slate-800 dark:text-white tabular-nums">
              {currentStandard || '——:——'}
            </div>
            <div className="text-xs text-slate-400 mt-1">12-hour (standard)</div>
          </div>
        </div>
      </div>

      {/* Converters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Military → Standard */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
          <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm">Military → Standard</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={milInput}
              onChange={e => setMilInput(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="e.g. 1430"
              maxLength={4}
              className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-mono text-sm"
              onKeyDown={e => e.key === 'Enter' && handleMilConvert()}
            />
            <button
              onClick={handleMilConvert}
              className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium transition-colors"
            >
              Convert
            </button>
          </div>
          {milResult && (
            <div className="mt-3 p-3 rounded-lg bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800">
              <span className="font-mono font-bold text-sky-700 dark:text-sky-300">{milInput} = {milResult}</span>
            </div>
          )}
        </div>

        {/* Standard → Military */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
          <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm">Standard → Military</h3>
          <div className="flex gap-2">
            <select
              value={stdHour}
              onChange={e => setStdHour(parseInt(e.target.value))}
              className="flex-1 px-2 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
            <select
              value={stdMin}
              onChange={e => setStdMin(parseInt(e.target.value))}
              className="flex-1 px-2 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm"
            >
              {Array.from({ length: 60 }, (_, i) => i).map(m => (
                <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
              ))}
            </select>
            <select
              value={stdAmPm}
              onChange={e => setStdAmPm(e.target.value as 'AM' | 'PM')}
              className="px-2 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
            <button
              onClick={handleStdConvert}
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors"
            >
              →
            </button>
          </div>
          {stdResult && (
            <div className="mt-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300">
                {stdHour}:{stdMin.toString().padStart(2, '0')} {stdAmPm} = {stdResult}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
