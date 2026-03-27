'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

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
  const { theme, isLight } = useCityContext()
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

  const cardClass = `rounded-2xl border ${theme.card}`
  const inputClass = isLight
    ? 'bg-white border-slate-200 text-slate-800'
    : 'bg-slate-700 border-slate-600 text-white'

  return (
    <div className="space-y-4 mb-8">
      {/* Live Clock */}
      <div className={`${cardClass} p-6`}>
        <div className={`text-xs font-semibold uppercase tracking-widest mb-3 text-center ${theme.textMuted}`}>
          Current Time
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className={`text-3xl font-bold tabular-nums ${isLight ? 'text-sky-600' : 'text-sky-400'}`}>
              {currentMilitary || '——:——'}
            </div>
            <div className={`text-xs mt-1 ${theme.textMuted}`}>24-hour (military)</div>
          </div>
          <div>
            <div className={`text-3xl font-bold tabular-nums ${theme.text}`}>
              {currentStandard || '——:——'}
            </div>
            <div className={`text-xs mt-1 ${theme.textMuted}`}>12-hour (standard)</div>
          </div>
        </div>
      </div>

      {/* Converters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Military → Standard */}
        <div className={`rounded-xl border p-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-700 bg-slate-800/40'}`}>
          <h3 className={`font-semibold mb-3 text-sm ${theme.text}`}>Military → Standard</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={milInput}
              onChange={e => setMilInput(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="e.g. 1430"
              maxLength={4}
              className={`flex-1 px-3 py-2 rounded-lg border text-sm ${inputClass}`}
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
            <div className={`mt-3 p-3 rounded-lg ${isLight ? 'bg-sky-50 border border-sky-200' : 'bg-sky-900/30 border border-sky-700'}`}>
              <span className={`font-bold tabular-nums ${isLight ? 'text-sky-700' : 'text-sky-300'}`}>{milInput} = {milResult}</span>
            </div>
          )}
        </div>

        {/* Standard → Military */}
        <div className={`rounded-xl border p-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-700 bg-slate-800/40'}`}>
          <h3 className={`font-semibold mb-3 text-sm ${theme.text}`}>Standard → Military</h3>
          <div className="flex gap-2">
            <select
              value={stdHour}
              onChange={e => setStdHour(parseInt(e.target.value))}
              className={`flex-1 px-2 py-2 rounded-lg border text-sm ${inputClass}`}
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
            <select
              value={stdMin}
              onChange={e => setStdMin(parseInt(e.target.value))}
              className={`flex-1 px-2 py-2 rounded-lg border text-sm ${inputClass}`}
            >
              {Array.from({ length: 60 }, (_, i) => i).map(m => (
                <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
              ))}
            </select>
            <select
              value={stdAmPm}
              onChange={e => setStdAmPm(e.target.value as 'AM' | 'PM')}
              className={`px-2 py-2 rounded-lg border text-sm ${inputClass}`}
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
            <div className={`mt-3 p-3 rounded-lg ${isLight ? 'bg-emerald-50 border border-emerald-200' : 'bg-emerald-900/30 border border-emerald-700'}`}>
              <span className={`font-bold tabular-nums ${isLight ? 'text-emerald-700' : 'text-emerald-300'}`}>
                {stdHour}:{stdMin.toString().padStart(2, '0')} {stdAmPm} = {stdResult}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
