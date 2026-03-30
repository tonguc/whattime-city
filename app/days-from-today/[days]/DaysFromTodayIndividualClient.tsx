'use client'

import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  days: number
  targetDateStr: string
  shortDate: string
  dayName: string
  monthName: string
  weekNum: number
  weeksAndDays: string
  approxMonths: string
}

// Related days for navigation
function getRelatedDays(n: number): number[] {
  const base = [7, 10, 14, 15, 20, 21, 25, 30, 45, 60, 90, 100, 120, 150, 180, 200, 270, 365]
  return base.filter(d => d !== n).slice(0, 12)
}

export default function DaysFromTodayIndividualClient({
  days, targetDateStr, shortDate, dayName, monthName, weekNum, weeksAndDays, approxMonths,
}: Props) {
  const { isLight } = useCityContext()

  const bg = isLight ? 'bg-white text-slate-800' : 'bg-slate-900 text-slate-100'
  const card = isLight
    ? 'rounded-xl border border-slate-200 bg-white p-6 shadow-sm'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/60 p-6'
  const cardAlt = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-slate-100'
  const muted = isLight ? 'text-slate-500' : 'text-slate-400'
  const linkStyle = isLight ? 'text-blue-600 hover:text-blue-800' : 'text-blue-400 hover:text-blue-300'
  const answerBox = isLight
    ? 'rounded-2xl bg-blue-50 border border-blue-100 p-6 text-center'
    : 'rounded-2xl bg-blue-900/20 border border-blue-700/30 p-6 text-center'
  const chipBase = isLight
    ? 'rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors'
    : 'rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors'

  const relatedDays = getRelatedDays(days)
  const businessDays = Math.round(days * 5 / 7)

  const qaItems = [
    {
      q: `What date is ${days} days from today?`,
      a: `${days} days from today is ${targetDateStr}. That is ${weeksAndDays}${approxMonths ? ` (${approxMonths})` : ''} from today.`,
    },
    {
      q: `What day of the week is ${days} days from today?`,
      a: `${days} days from today falls on a ${dayName}.`,
    },
    {
      q: `How many weeks is ${days} days?`,
      a: `${days} days is ${weeksAndDays}. In decimal, that is ${(days / 7).toFixed(2)} weeks.`,
    },
    {
      q: `What week number is ${days} days from today?`,
      a: `${days} days from today falls in ISO Week ${weekNum}.`,
    },
  ]

  return (
    <div className={`min-h-screen ${bg}`}>
      <div className="mx-auto max-w-3xl px-4 py-10 space-y-8">

        {/* Breadcrumb */}
        <nav className={`text-sm ${muted}`} aria-label="Breadcrumb">
          <Link href="/" className={linkStyle}>Home</Link>
          {' / '}
          <Link href="/days-from-today/" className={linkStyle}>Days From Today</Link>
          {' / '}
          <span className={heading}>{days} Days</span>
        </nav>

        {/* Hero answer box */}
        <div className={answerBox}>
          <p className={`text-sm font-medium uppercase tracking-widest mb-2 ${muted}`}>
            {days} days from today
          </p>
          <p className={`text-4xl font-bold tabular-nums mb-1 ${heading}`}>{shortDate}</p>
          <p className={`text-xl font-medium ${muted}`}>{dayName}</p>
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Date', value: shortDate },
            { label: 'Day', value: dayName.slice(0, 3) },
            { label: 'ISO Week', value: `Week ${weekNum}` },
            { label: 'Month', value: monthName },
          ].map(item => (
            <div key={item.label} className={cardAlt}>
              <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${muted}`}>{item.label}</p>
              <p className={`text-lg font-semibold tabular-nums ${heading}`}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Breakdown */}
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>{days} Days Breakdown</h2>
          <div className="space-y-3">
            {[
              { label: 'Calendar days', value: `${days} days` },
              { label: 'Weeks', value: weeksAndDays },
              approxMonths ? { label: 'Approximate months', value: approxMonths } : null,
              { label: 'Approximate business days', value: `~${businessDays} business days` },
              { label: 'In decimal weeks', value: `${(days / 7).toFixed(2)} weeks` },
            ].filter(Boolean).map(item => (
              <div key={item!.label} className="flex justify-between items-center">
                <span className={`text-sm ${muted}`}>{item!.label}</span>
                <span className={`text-sm font-medium tabular-nums ${heading}`}>{item!.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-5 ${heading}`}>Frequently Asked Questions</h2>
          <div className="space-y-5">
            {qaItems.map(item => (
              <div key={item.q}>
                <p className={`font-medium mb-1 ${heading}`}>{item.q}</p>
                <p className={`text-sm leading-relaxed ${muted}`}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related days */}
        <div className={card}>
          <h2 className={`text-base font-semibold mb-4 ${heading}`}>Other Day Counts</h2>
          <div className="flex flex-wrap gap-2">
            {relatedDays.map(d => (
              <Link key={d} href={`/days-from-today/${d}/`} className={chipBase}>
                {d} days
              </Link>
            ))}
            <Link href="/days-from-today/" className={chipBase}>
              Calculator
            </Link>
          </div>
        </div>

        {/* Link to date calculator */}
        <div className={cardAlt}>
          <p className={`text-sm ${muted}`}>
            Need to add days to a specific date?{' '}
            <Link href="/date-calculator/" className={linkStyle}>
              Use the Date Calculator
            </Link>
            {' '}to add or subtract any number of days from any date.
          </p>
        </div>

      </div>
    </div>
  )
}
