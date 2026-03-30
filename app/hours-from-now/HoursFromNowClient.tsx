'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const PRESETS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 20, 24, 36, 48, 72]

function addHours(h: number): Date {
  const d = new Date()
  d.setTime(d.getTime() + h * 60 * 60 * 1000)
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

export default function HoursFromNowClient() {
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
  const btnStyle = 'rounded-lg bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition-colors'
  const chipBase = isLight
    ? 'rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-green-400 hover:text-green-600 transition-colors'
    : 'rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 hover:border-green-500 hover:text-green-400 transition-colors'
  const linkStyle = isLight ? 'text-blue-600 hover:text-blue-800' : 'text-blue-400 hover:text-blue-300'

  const handleCalculate = () => {
    const h = parseInt(input, 10)
    if (!isNaN(h) && h > 0) {
      setResult({ hours: h, date: addHours(h) })
    }
  }

  const handlePreset = (h: number) => {
    setInput(String(h))
    setResult({ hours: h, date: addHours(h) })
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
          <h1 className={`text-3xl font-bold mb-2 ${heading}`}>Hours From Now Calculator</h1>
          <p className={`text-base ${muted}`}>Find what time it will be any number of hours from right now.</p>
        </div>

        {/* Calculator */}
        <div className={card}>
          <label className={`block text-sm font-medium mb-2 ${muted}`}>Number of hours from now</label>
          <div className="flex gap-3">
            <input
              type="number"
              className={inputStyle}
              placeholder="e.g. 12"
              value={input}
              min={1}
              max={8760}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCalculate()}
            />
            <button className={btnStyle} onClick={handleCalculate}>Calculate</button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {PRESETS.map(h => (
              <button key={h} className={chipBase} onClick={() => handlePreset(h)}>
                In {h}h
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className={`rounded-2xl p-6 text-center ${isLight ? 'bg-green-50 border border-green-100' : 'bg-green-900/20 border border-green-700/30'}`}>
            <p className={`text-sm font-medium uppercase tracking-widest mb-2 ${muted}`}>
              In {result.hours} hour{result.hours !== 1 ? 's' : ''} it will be
            </p>
            <p className={`text-4xl font-bold tabular-nums mb-1 ${heading}`}>{formatTime(result.date)}</p>
            <p className={`text-lg ${muted}`}>{formatDate(result.date)}</p>
            {crossedMidnight && (
              <p className={`text-sm mt-2 ${muted}`}>
                Note: This time is on the next calendar day ({resultDateStr}).
              </p>
            )}
            <div className="mt-4">
              <Link href={`/hours-from-now/${result.hours}/`} className={`text-sm ${linkStyle}`}>
                View page for {result.hours} hours from now →
              </Link>
            </div>
          </div>
        )}

        {/* Quick links */}
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>Common Time Lookups</h2>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {PRESETS.map(h => (
              <Link key={h} href={`/hours-from-now/${h}/`} className={chipBase}>
                {h} hours from now
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
                q: 'What time will it be in 6 hours?',
                a: `In 6 hours it will be ${formatTime(addHours(6))} on ${formatShortDate(addHours(6))}.`,
              },
              {
                q: 'What time will it be in 12 hours?',
                a: `In 12 hours it will be ${formatTime(addHours(12))} on ${formatShortDate(addHours(12))}. 12 hours from now swaps AM/PM.`,
              },
              {
                q: 'What time will it be in 24 hours?',
                a: `In 24 hours it will be ${formatTime(addHours(24))} on ${formatShortDate(addHours(24))} — same time tomorrow.`,
              },
              {
                q: 'What time will it be in 48 hours?',
                a: `In 48 hours it will be ${formatTime(addHours(48))} on ${formatShortDate(addHours(48))} — same time, two days from now.`,
              },
            ].map(item => (
              <div key={item.q}>
                <p className={`font-medium mb-1 ${heading}`}>{item.q}</p>
                <p className={`text-sm leading-relaxed ${muted}`}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className={cardAlt}>
          <p className={`text-sm ${muted}`}>
            Related:{' '}
            <Link href="/hours-ago/" className={linkStyle}>Hours Ago</Link>
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
