'use client'

import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  hours: number
  time12: string
  time24: string
  shortDate: string
  longDate: string
  dayName: string
  crossedMidnight: boolean
}

const RELATED = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 20, 24, 36, 48, 72]

function getDaysHoursBreakdown(h: number): string {
  const days = Math.floor(h / 24)
  const hours = h % 24
  if (days === 0) return `${hours} hour${hours !== 1 ? 's' : ''}`
  if (hours === 0) return `${days} day${days !== 1 ? 's' : ''}`
  return `${days} day${days !== 1 ? 's' : ''} and ${hours} hour${hours !== 1 ? 's' : ''}`
}

export default function HoursAgoIndividualClient({
  hours, time12, time24, shortDate, longDate, dayName, crossedMidnight,
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
    ? 'rounded-2xl bg-orange-50 border border-orange-100 p-6 text-center'
    : 'rounded-2xl bg-orange-900/20 border border-orange-700/30 p-6 text-center'
  const chipBase = isLight
    ? 'rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-orange-400 hover:text-orange-600 transition-colors'
    : 'rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 hover:border-orange-500 hover:text-orange-400 transition-colors'
  const warnBox = isLight
    ? 'rounded-lg bg-amber-50 border border-amber-200 p-3 text-sm text-amber-800'
    : 'rounded-lg bg-amber-900/20 border border-amber-700/30 p-3 text-sm text-amber-300'

  const relatedHours = RELATED.filter(h => h !== hours).slice(0, 12)
  const breakdown = getDaysHoursBreakdown(hours)

  const qaItems = [
    {
      q: `What time was it ${hours} hours ago?`,
      a: `${hours} hours ago was ${time12} (${time24}) on ${longDate}.${crossedMidnight ? ` This time is on a previous calendar day (${shortDate}).` : ''}`,
    },
    {
      q: `What day was ${hours} hours ago?`,
      a: `${hours} hours ago was ${dayName}, ${shortDate}.`,
    },
    {
      q: `How many days is ${hours} hours?`,
      a: `${hours} hours is ${breakdown} (${(hours / 24).toFixed(2)} days).`,
    },
  ]

  return (
    <div className={`min-h-screen ${bg}`}>
      <div className="mx-auto max-w-3xl px-4 py-10 space-y-8">

        {/* Breadcrumb */}
        <nav className={`text-sm ${muted}`} aria-label="Breadcrumb">
          <Link href="/" className={linkStyle}>Home</Link>
          {' / '}
          <Link href="/hours-ago/" className={linkStyle}>Hours Ago</Link>
          {' / '}
          <span className={heading}>{hours} Hours Ago</span>
        </nav>

        {/* Hero answer */}
        <div className={answerBox}>
          <p className={`text-sm font-medium uppercase tracking-widest mb-2 ${muted}`}>
            {hours} hour{hours !== 1 ? 's' : ''} ago was
          </p>
          <p className={`text-4xl font-bold tabular-nums mb-1 ${heading}`}>{time12}</p>
          <p className={`text-lg ${muted}`}>{longDate}</p>
          {crossedMidnight && (
            <p className={`text-sm mt-2 ${muted}`}>This time was on the previous calendar day.</p>
          )}
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: '12-hour', value: time12 },
            { label: '24-hour', value: time24 },
            { label: 'Day', value: dayName.slice(0, 3) },
            { label: 'Date', value: shortDate },
          ].map(item => (
            <div key={item.label} className={cardAlt}>
              <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${muted}`}>{item.label}</p>
              <p className={`text-base font-semibold tabular-nums ${heading}`}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Breakdown */}
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>{hours} Hours Breakdown</h2>
          <div className="space-y-3">
            {[
              { label: 'Hours ago', value: `${hours} hours` },
              { label: 'Days and hours', value: breakdown },
              { label: 'Decimal days', value: `${(hours / 24).toFixed(2)} days` },
              { label: 'Minutes ago', value: `${(hours * 60).toLocaleString()} minutes` },
            ].map(item => (
              <div key={item.label} className="flex justify-between items-center">
                <span className={`text-sm ${muted}`}>{item.label}</span>
                <span className={`text-sm font-medium tabular-nums ${heading}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Midnight note */}
        {crossedMidnight && (
          <div className={warnBox}>
            This time is on a previous calendar day. {hours} hours ago from now puts us back to <strong>{shortDate}</strong>.
          </div>
        )}

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

        {/* Related hours */}
        <div className={card}>
          <h2 className={`text-base font-semibold mb-4 ${heading}`}>Other Hour Counts</h2>
          <div className="flex flex-wrap gap-2">
            {relatedHours.map(h => (
              <Link key={h} href={`/hours-ago/${h}/`} className={chipBase}>
                {h}h ago
              </Link>
            ))}
            <Link href="/hours-ago/" className={chipBase}>Calculator</Link>
          </div>
        </div>

        {/* Related tools */}
        <div className={cardAlt}>
          <p className={`text-sm ${muted}`}>
            Looking forward?{' '}
            <Link href={`/hours-from-now/${hours}/`} className={linkStyle}>
              {hours} hours from now
            </Link>
            {' · '}
            <Link href="/days-ago/" className={linkStyle}>Days Ago</Link>
            {' · '}
            <Link href="/date-calculator/" className={linkStyle}>Date Calculator</Link>
          </p>
        </div>

      </div>
    </div>
  )
}
