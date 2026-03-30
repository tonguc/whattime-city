'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const PRESETS = [7, 14, 21, 30, 45, 60, 90, 100, 120, 180, 365]

function subtractDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() - days)
  return result
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
}

function formatShort(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function getWeeksAndDays(n: number): string {
  const weeks = Math.floor(n / 7)
  const days = n % 7
  if (weeks === 0) return `${days} day${days !== 1 ? 's' : ''}`
  if (days === 0) return `${weeks} week${weeks !== 1 ? 's' : ''}`
  return `${weeks} week${weeks !== 1 ? 's' : ''} and ${days} day${days !== 1 ? 's' : ''}`
}

export default function DaysAgoClient() {
  const { isLight } = useCityContext()
  const [input, setInput] = useState('')
  const [result, setResult] = useState<{ days: number; date: Date } | null>(null)

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
    const n = parseInt(input, 10)
    if (!isNaN(n) && n > 0) {
      setResult({ days: n, date: subtractDays(new Date(), n) })
    }
  }

  const handlePreset = (n: number) => {
    setInput(String(n))
    setResult({ days: n, date: subtractDays(new Date(), n) })
  }

  return (
    <div className={`min-h-screen ${bg}`}>
      <div className="mx-auto max-w-3xl px-4 py-10 space-y-8">

        {/* Header */}
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${heading}`}>Days Ago Calculator</h1>
          <p className={`text-base ${muted}`}>Find what date it was any number of days ago from today.</p>
        </div>

        {/* Calculator */}
        <div className={card}>
          <label className={`block text-sm font-medium mb-2 ${muted}`}>Number of days ago</label>
          <div className="flex gap-3">
            <input
              type="number"
              className={inputStyle}
              placeholder="e.g. 90"
              value={input}
              min={1}
              max={3650}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCalculate()}
            />
            <button className={btnStyle} onClick={handleCalculate}>Calculate</button>
          </div>

          {/* Quick presets */}
          <div className="mt-4 flex flex-wrap gap-2">
            {PRESETS.map(n => (
              <button key={n} className={chipBase} onClick={() => handlePreset(n)}>
                {n} days ago
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="rounded-2xl bg-blue-50 border border-blue-100 dark:bg-blue-900/20 dark:border-blue-700/30 p-6 text-center">
            <p className={`text-sm font-medium uppercase tracking-widest mb-2 ${muted}`}>
              {result.days} days ago was
            </p>
            <p className={`text-4xl font-bold tabular-nums mb-1 ${heading}`}>{formatShort(result.date)}</p>
            <p className={`text-lg ${muted}`}>{formatDate(result.date)}</p>
            <p className={`text-sm mt-3 ${muted}`}>
              That is {getWeeksAndDays(result.days)} in the past.
            </p>
            <div className="mt-4">
              <Link href={`/days-ago/${result.days}/`} className={`text-sm ${linkStyle}`}>
                View full details for {result.days} days ago →
              </Link>
            </div>
          </div>
        )}

        {/* Individual page links grid */}
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>Common Lookups</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {PRESETS.map(n => (
              <Link key={n} href={`/days-ago/${n}/`} className={chipBase}>
                {n} days ago →
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
                q: 'What date was 30 days ago?',
                a: `30 days ago was ${formatShort(subtractDays(new Date(), 30))} (${subtractDays(new Date(), 30).toLocaleDateString('en-US', { weekday: 'long' })}). That is approximately 4 weeks and 2 days in the past.`,
              },
              {
                q: 'What date was 90 days ago?',
                a: `90 days ago was ${formatShort(subtractDays(new Date(), 90))} (${subtractDays(new Date(), 90).toLocaleDateString('en-US', { weekday: 'long' })}). That is approximately 12 weeks and 6 days, or about 3 months in the past.`,
              },
              {
                q: 'What date was 180 days ago?',
                a: `180 days ago was ${formatShort(subtractDays(new Date(), 180))} (${subtractDays(new Date(), 180).toLocaleDateString('en-US', { weekday: 'long' })}). That is approximately 25 weeks and 5 days, or about 6 months in the past.`,
              },
              {
                q: 'How is this different from the days-from-today calculator?',
                a: 'The days-ago calculator looks backward in time — it tells you what date it was X days before today. The days-from-today calculator looks forward — it tells you what date X days in the future will be.',
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
            Related tools:{' '}
            <Link href="/days-from-today/" className={linkStyle}>Days From Today</Link>
            {' · '}
            <Link href="/date-calculator/" className={linkStyle}>Date Calculator</Link>
            {' · '}
            <Link href="/todays-date/" className={linkStyle}>Today&apos;s Date</Link>
          </p>
        </div>

      </div>
    </div>
  )
}
