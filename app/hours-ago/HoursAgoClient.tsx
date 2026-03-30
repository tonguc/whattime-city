'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const PRESETS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 20, 24, 36, 48, 72]

function subtractHours(h: number): Date {
  const d = new Date()
  d.setTime(d.getTime() - h * 60 * 60 * 1000)
  return d
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true,
  })
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
}

function formatShortDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function HoursAgoClient() {
  const { isLight } = useCityContext()
  const [input, setInput] = useState('')
  const [result, setResult] = useState<{ hours: number; date: Date } | null>(null)

  const bg = isLight ? 'bg-white text-slate-800' : 'bg-slate-900 text-slate-100'
  const card = isLight
    ? 'rounded-xl border border-slate-200 bg-white p-6 shadow-sm'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/60 p-6'
  const cardAlt = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-slate-100'
  const muted = isLight ? 'text-slate-500' : 'text-slate-400'
  const inputStyle = isLight
    ? 'w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 text-lg focus:border-blue-500 focus:outline-none'
    : 'w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-slate-100 text-lg focus:border-blue-400 focus:outline-none'
  const btnStyle = 'rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors'
  const chipBase = isLight
    ? 'rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors'
    : 'rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors'
  const linkStyle = isLight ? 'text-blue-600 hover:text-blue-800' : 'text-blue-400 hover:text-blue-300'

  const handleCalculate = () => {
    const h = parseInt(input, 10)
    if (!isNaN(h) && h > 0) {
      setResult({ hours: h, date: subtractHours(h) })
    }
  }

  const handlePreset = (h: number) => {
    setInput(String(h))
    setResult({ hours: h, date: subtractHours(h) })
  }

  const today = new Date()
  const todayStr = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  const resultDateStr = result ? formatShortDate(result.date) : ''
  const crossedMidnight = result ? resultDateStr !== todayStr : false

  return (
    <div className={`min-h-screen ${bg}`}>
      <div className="mx-auto max-w-3xl px-4 py-10 space-y-8">

        {/* Header */}
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${heading}`}>Hours Ago Calculator</h1>
          <p className={`text-base ${muted}`}>Find what time it was any number of hours ago from right now.</p>
        </div>

        {/* Calculator */}
        <div className={card}>
          <label className={`block text-sm font-medium mb-2 ${muted}`}>Number of hours ago</label>
          <div className="flex gap-3">
            <input
              type="number"
              className={inputStyle}
              placeholder="e.g. 6"
              value={input}
              min={1}
              max={8760}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCalculate()}
            />
            <button className={btnStyle} onClick={handleCalculate}>Calculate</button>
          </div>

          {/* Quick presets */}
          <div className="mt-4 flex flex-wrap gap-2">
            {PRESETS.map(h => (
              <button key={h} className={chipBase} onClick={() => handlePreset(h)}>
                {h}h ago
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className={`rounded-2xl p-6 text-center ${isLight ? 'bg-orange-50 border border-orange-100' : 'bg-orange-900/20 border border-orange-700/30'}`}>
            <p className={`text-sm font-medium uppercase tracking-widest mb-2 ${muted}`}>
              {result.hours} hour{result.hours !== 1 ? 's' : ''} ago was
            </p>
            <p className={`text-4xl font-bold tabular-nums mb-1 ${heading}`}>{formatTime(result.date)}</p>
            <p className={`text-lg ${muted}`}>{formatDate(result.date)}</p>
            {crossedMidnight && (
              <p className={`text-sm mt-2 ${muted}`}>
                Note: This time is on a previous calendar day ({resultDateStr}).
              </p>
            )}
            <div className="mt-4">
              <Link href={`/hours-ago/${result.hours}/`} className={`text-sm ${linkStyle}`}>
                View page for {result.hours} hours ago →
              </Link>
            </div>
          </div>
        )}

        {/* Link grid */}
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>Common Time Lookups</h2>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {PRESETS.map(h => (
              <Link key={h} href={`/hours-ago/${h}/`} className={chipBase}>
                {h} hours ago
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-5 ${heading}`}>Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: 'What time was it 6 hours ago?',
                a: `6 hours ago was ${formatTime(subtractHours(6))} on ${formatShortDate(subtractHours(6))}.`,
              },
              {
                q: 'What time was it 9 hours ago?',
                a: `9 hours ago was ${formatTime(subtractHours(9))} on ${formatShortDate(subtractHours(9))}.`,
              },
              {
                q: 'What time was it 12 hours ago?',
                a: `12 hours ago was ${formatTime(subtractHours(12))} on ${formatShortDate(subtractHours(12))}. Exactly 12 hours ago is the same clock time, AM/PM swapped.`,
              },
              {
                q: 'What time was it 24 hours ago?',
                a: `24 hours ago was ${formatTime(subtractHours(24))} on ${formatShortDate(subtractHours(24))} — exactly one day ago, same time.`,
              },
            ].map(item => (
              <div key={item.q}>
                <p className={`font-medium mb-1 ${heading}`}>{item.q}</p>
                <p className={`text-sm leading-relaxed ${muted}`}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related tools */}
        <div className={cardAlt}>
          <p className={`text-sm ${muted}`}>
            Related:{' '}
            <Link href="/hours-from-now/" className={linkStyle}>Hours From Now</Link>
            {' · '}
            <Link href="/days-ago/" className={linkStyle}>Days Ago</Link>
            {' · '}
            <Link href="/days-from-today/" className={linkStyle}>Days From Today</Link>
            {' · '}
            <Link href="/date-calculator/" className={linkStyle}>Date Calculator</Link>
          </p>
        </div>

      </div>
    </div>
  )
}
