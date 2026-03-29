'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

/* ─── ISO week helpers ─── */

function getISOWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
}

function getISOWeekYear(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  return d.getUTCFullYear()
}

// Start of ISO week N in year Y (Monday)
function isoWeekStart(year: number, week: number): Date {
  const jan4 = new Date(Date.UTC(year, 0, 4))
  const dayOfWeek = jan4.getUTCDay() || 7 // 1=Mon … 7=Sun
  const week1Monday = new Date(jan4)
  week1Monday.setUTCDate(jan4.getUTCDate() - dayOfWeek + 1)
  const result = new Date(week1Monday)
  result.setUTCDate(week1Monday.getUTCDate() + (week - 1) * 7)
  return result
}

function isoWeeksInYear(year: number): number {
  // A year has 53 ISO weeks if Dec 28 is in week 53
  const dec28 = new Date(Date.UTC(year, 11, 28))
  return getISOWeekNumber(dec28)
}

function formatDate(date: Date, opts?: Intl.DateTimeFormatOptions): string {
  return date.toLocaleDateString('en-US', opts ?? { month: 'short', day: 'numeric' })
}

function formatFull(date: Date): string {
  return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

function getQuarter(date: Date): number {
  return Math.floor(date.getUTCMonth() / 3) + 1
}

/* ─── Component ─── */

export default function WeekNumberClient() {
  const { isLight } = useCityContext()
  const today = useMemo(() => new Date(), [])
  const currentYear = today.getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const currentWeek = useMemo(() => getISOWeekNumber(today), [today])
  const currentWeekYear = useMemo(() => getISOWeekYear(today), [today])
  const weeksInCurrentYear = useMemo(() => isoWeeksInYear(currentWeekYear), [currentWeekYear])
  const weeksRemaining = weeksInCurrentYear - currentWeek
  const currentQ = getQuarter(today)

  // Week start/end for current week
  const weekStart = useMemo(() => isoWeekStart(currentWeekYear, currentWeek), [currentWeekYear, currentWeek])
  const weekEnd = useMemo(() => {
    const d = new Date(weekStart)
    d.setUTCDate(d.getUTCDate() + 6)
    return d
  }, [weekStart])

  // Full year weeks for the calendar
  const yearWeeks = useMemo(() => {
    const weeks = isoWeeksInYear(selectedYear)
    return Array.from({ length: weeks }, (_, i) => {
      const n = i + 1
      const start = isoWeekStart(selectedYear, n)
      const end = new Date(start)
      end.setUTCDate(start.getUTCDate() + 6)
      return { n, start, end }
    })
  }, [selectedYear])

  /* ─── theme tokens ─── */
  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white'
    : 'rounded-2xl border border-slate-700 bg-slate-800'
  const nestedCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-500' : 'text-slate-400'
  const accent = isLight ? 'text-blue-600' : 'text-blue-400'
  const accentBg = isLight
    ? 'bg-blue-50 border border-blue-200'
    : 'bg-blue-900/30 border border-blue-700/50'
  const tableHead = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const tableHeadText = isLight ? 'text-slate-600 font-semibold' : 'text-slate-300 font-semibold'
  const tableBorder = isLight ? 'border-slate-100' : 'border-slate-700/50'
  const tableHover = isLight ? 'hover:bg-blue-50/50' : 'hover:bg-slate-700/30'
  const currentRowBg = isLight ? 'bg-amber-50 border-l-2 border-l-amber-400' : 'bg-amber-900/20 border-l-2 border-l-amber-500'
  const infoBox = isLight
    ? 'rounded-xl border border-slate-200 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const btnActive = isLight ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
  const btnInactive = isLight
    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'

  const faqItems = [
    {
      q: 'What week of the year is it today?',
      a: `Today, ${formatFull(today)}, is Week ${currentWeek} of ${currentWeekYear} (ISO 8601). The week runs from ${formatDate(weekStart, { weekday: 'long', month: 'long', day: 'numeric' })} to ${formatDate(weekEnd, { weekday: 'long', month: 'long', day: 'numeric' })}.`,
    },
    {
      q: 'What is ISO week numbering?',
      a: 'ISO 8601 defines Week 1 as the week containing the first Thursday of the year — equivalently, the week with January 4. Weeks always run Monday through Sunday. This is the international standard used across Europe, logistics, manufacturing, and software.',
    },
    {
      q: 'Does Week 1 always start on January 1?',
      a: 'No. ISO Week 1 starts on the Monday closest to January 1 that still contains a Thursday. If January 1 falls on a Friday, Saturday, or Sunday, Week 1 actually begins in late December of the prior year.',
    },
    {
      q: `How many weeks are in ${currentWeekYear}?`,
      a: `${currentWeekYear} has ${weeksInCurrentYear} ISO weeks. ${weeksInCurrentYear === 53 ? `It is a long year with 53 weeks — this happens when January 1 or December 31 falls on a Thursday.` : `Most years have 52 weeks. A year gets 53 ISO weeks only when January 1 or December 31 is a Thursday.`}`,
    },
    {
      q: 'What is the difference between ISO and US week numbers?',
      a: 'ISO weeks start on Monday; the US standard starts on Sunday. ISO Week 1 contains the first Thursday; the US Week 1 contains January 1. The two systems can differ by 1–2 weeks, especially at the start and end of the year. Most European countries, international business, and software use ISO numbering.',
    },
    {
      q: 'Which countries use ISO week numbers?',
      a: 'ISO week numbers are standard throughout Europe (Germany, Scandinavia, Netherlands, France, and others), and are widely used in international business, logistics, manufacturing, finance, and software development. The US, Canada, and some other countries typically use Sunday-start, January-1-anchored week numbering.',
    },
    {
      q: 'Can a year have 53 weeks?',
      a: 'Yes. A year has 53 ISO weeks when January 1 or December 31 falls on a Thursday (or in a leap year, on a Wednesday or Thursday). Recent examples: 2020 and 2015 had 53 weeks. The next year with 53 weeks after 2026 is 2032.',
    },
    {
      q: 'How do I write an ISO week date?',
      a: `ISO 8601 week date format: YYYY-Www-D. Example: ${currentWeekYear}-W${String(currentWeek).padStart(2, '0')}-1 = Monday of Week ${currentWeek}, ${currentWeekYear}. The "W" prefix identifies the week. Day numbers: 1 = Monday, 7 = Sunday.`,
    },
  ]

  return (
    <div className="w-full space-y-8">

      {/* Breadcrumb */}
      <nav className={`flex items-center gap-1.5 text-sm ${mutedText}`}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className={heading}>Week Number</span>
      </nav>

      {/* Hero */}
      <header className="text-center space-y-2">
        <h1 className={`text-3xl sm:text-4xl font-bold ${heading}`}>
          What Week of the Year Is It?
        </h1>
        <p className={`text-lg ${subText}`}>
          Current ISO week number for {today.getFullYear()} — with full week calendar and FAQ
        </p>
      </header>

      {/* ── Current Week Answer Box (featured snippet target) ── */}
      <section className={`${accentBg} rounded-2xl p-6 sm:p-8 text-center space-y-3`}>
        {/* AI-visible direct answer */}
        <p className={`text-sm font-medium ${mutedText}`}>
          Today · {formatFull(today)}
        </p>
        <div>
          <p className={`text-sm ${subText} mb-1`}>It is currently</p>
          <p className={`text-6xl sm:text-8xl font-bold tabular-nums ${accent}`}>
            Week {currentWeek}
          </p>
          <p className={`text-xl font-semibold ${heading} mt-1`}>
            of {currentWeekYear}
          </p>
        </div>
        <p className={`text-base ${subText}`}>
          {formatDate(weekStart, { weekday: 'long', month: 'long', day: 'numeric' })}
          {' '}–{' '}
          {formatDate(weekEnd, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <p className={`text-xs ${mutedText}`}>
          ISO 8601 · {currentWeekYear}-W{String(currentWeek).padStart(2, '0')}
        </p>
      </section>

      {/* ── Quick Stats ── */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Current Week', value: `W${currentWeek}` },
          { label: 'Weeks Remaining', value: String(weeksRemaining) },
          { label: 'Total Weeks', value: String(weeksInCurrentYear) },
          { label: 'Current Quarter', value: `Q${currentQ}` },
        ].map(item => (
          <div key={item.label} className={`${nestedCard} p-4 text-center`}>
            <p className={`text-xs ${mutedText} mb-1`}>{item.label}</p>
            <p className={`text-2xl font-bold tabular-nums ${heading}`}>{item.value}</p>
          </div>
        ))}
      </section>

      {/* ── ISO Week Date ── */}
      <section className={`${infoBox} flex flex-wrap items-center justify-between gap-3`}>
        <div>
          <p className={`text-xs ${mutedText} mb-0.5`}>ISO 8601 Week Date (today)</p>
          <p className={`text-xl font-mono font-semibold ${heading}`}>
            {currentWeekYear}-W{String(currentWeek).padStart(2, '0')}-{((today.getDay() + 6) % 7) + 1}
          </p>
        </div>
        <div className="text-right">
          <p className={`text-xs ${mutedText} mb-0.5`}>Week starts</p>
          <p className={`text-sm font-medium ${subText}`}>Monday (ISO standard)</p>
        </div>
      </section>

      {/* ── Full Year Week Calendar ── */}
      <section className={`${card} p-6 space-y-4`}>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className={`text-xl font-bold ${heading}`}>
            Week Number Calendar
          </h2>
          {/* Year selector */}
          <div className="flex gap-1.5">
            {[currentYear - 1, currentYear, currentYear + 1].map(y => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  selectedYear === y ? btnActive : btnInactive
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <p className={`text-sm ${subText}`}>
          {selectedYear} has <strong>{isoWeeksInYear(selectedYear)}</strong> ISO weeks.
          {selectedYear === currentYear && (
            <span className={` ml-2 ${mutedText}`}>Current week highlighted.</span>
          )}
        </p>

        <div className="overflow-x-auto rounded-xl border border-inherit">
          <table className="w-full text-sm">
            <thead>
              <tr className={tableHead}>
                <th className={`py-2.5 px-3 text-left ${tableHeadText}`}>Week</th>
                <th className={`py-2.5 px-3 text-left ${tableHeadText}`}>Starts (Mon)</th>
                <th className={`py-2.5 px-3 text-left ${tableHeadText}`}>Ends (Sun)</th>
                <th className={`py-2.5 px-3 text-left ${tableHeadText} hidden sm:table-cell`}>Month</th>
                <th className={`py-2.5 px-3 text-right ${tableHeadText} hidden sm:table-cell`}>Q</th>
              </tr>
            </thead>
            <tbody>
              {yearWeeks.map(({ n, start, end }, i) => {
                const isCurrent = selectedYear === currentYear && n === currentWeek
                return (
                  <tr
                    key={n}
                    className={`border-t ${tableBorder} transition-colors ${
                      isCurrent ? currentRowBg : `${i % 2 === 1 ? (isLight ? 'bg-slate-50/40' : 'bg-slate-800/20') : ''} ${tableHover}`
                    }`}
                  >
                    <td className={`py-2 px-3 font-semibold tabular-nums ${isCurrent ? (isLight ? 'text-amber-700' : 'text-amber-400') : heading}`}>
                      W{String(n).padStart(2, '0')}
                      {isCurrent && <span className={`ml-2 text-xs font-normal ${isLight ? 'text-amber-600' : 'text-amber-400'}`}>← now</span>}
                    </td>
                    <td className={`py-2 px-3 tabular-nums ${subText}`}>
                      {formatDate(start, { month: 'short', day: 'numeric' })}
                    </td>
                    <td className={`py-2 px-3 tabular-nums ${subText}`}>
                      {formatDate(end, { month: 'short', day: 'numeric' })}
                    </td>
                    <td className={`py-2 px-3 ${mutedText} hidden sm:table-cell`}>
                      {formatDate(start, { month: 'long' })}
                      {start.getUTCMonth() !== end.getUTCMonth() && (
                        <span className={`text-xs`}> / {formatDate(end, { month: 'short' })}</span>
                      )}
                    </td>
                    <td className={`py-2 px-3 text-right ${mutedText} hidden sm:table-cell`}>
                      Q{getQuarter(start)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── ISO vs US Explanation ── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>ISO vs US Week Numbering</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className={`${infoBox}`}>
            <h3 className={`font-semibold mb-2 ${heading}`}>ISO 8601 (International)</h3>
            <ul className={`text-sm space-y-1.5 ${subText}`}>
              <li>• Week starts on <strong>Monday</strong></li>
              <li>• Week 1 = week containing the <strong>first Thursday</strong></li>
              <li>• Week 1 may start in <strong>late December</strong></li>
              <li>• 52 or 53 weeks per year</li>
              <li>• Standard in Europe, international business, software</li>
            </ul>
          </div>
          <div className={`${infoBox}`}>
            <h3 className={`font-semibold mb-2 ${heading}`}>US / North American</h3>
            <ul className={`text-sm space-y-1.5 ${subText}`}>
              <li>• Week starts on <strong>Sunday</strong></li>
              <li>• Week 1 = week containing <strong>January 1</strong></li>
              <li>• Week 1 always starts in <strong>early January</strong></li>
              <li>• Always 52 or 53 weeks per year</li>
              <li>• Common in US, Canada, some Latin American countries</li>
            </ul>
          </div>
        </div>
        <p className={`text-sm ${subText}`}>
          <strong className={heading}>Key difference:</strong> The two systems can differ by 1–2 weeks,
          especially at the start and end of the year. For example, December 28–31 might be{' '}
          <em>Week 1 of the next year</em> in ISO but <em>Week 52 of the current year</em> in the US system.
          This page uses <strong>ISO 8601</strong> — the international standard.
        </p>
      </section>

      {/* ── When is Week 1? ── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>When Does Week 1 Start?</h2>
        <div className="overflow-x-auto rounded-xl border border-inherit">
          <table className="w-full text-sm">
            <thead>
              <tr className={tableHead}>
                <th className={`py-2.5 px-3 text-left ${tableHeadText}`}>Year</th>
                <th className={`py-2.5 px-3 text-left ${tableHeadText}`}>Jan 1 (weekday)</th>
                <th className={`py-2.5 px-3 text-left ${tableHeadText}`}>Week 1 starts</th>
                <th className={`py-2.5 px-3 text-right ${tableHeadText}`}>Total weeks</th>
              </tr>
            </thead>
            <tbody>
              {[2024, 2025, 2026, 2027, 2028].map((y, i) => {
                const jan1 = new Date(Date.UTC(y, 0, 1))
                const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                const w1start = isoWeekStart(y, 1)
                const totalWeeks = isoWeeksInYear(y)
                const isCurrent = y === currentYear
                return (
                  <tr
                    key={y}
                    className={`border-t ${tableBorder} ${
                      isCurrent ? currentRowBg : i % 2 === 1 ? (isLight ? 'bg-slate-50/40' : 'bg-slate-800/20') : ''
                    }`}
                  >
                    <td className={`py-2.5 px-3 font-semibold ${isCurrent ? (isLight ? 'text-amber-700' : 'text-amber-400') : heading}`}>
                      {y}{isCurrent && <span className={`ml-1 text-xs font-normal ${mutedText}`}>(now)</span>}
                    </td>
                    <td className={`py-2.5 px-3 ${subText}`}>{dayNames[jan1.getUTCDay()]}</td>
                    <td className={`py-2.5 px-3 tabular-nums ${subText}`}>
                      {formatDate(w1start, { month: 'long', day: 'numeric' })}
                    </td>
                    <td className={`py-2.5 px-3 text-right tabular-nums ${totalWeeks === 53 ? 'text-amber-500 font-semibold' : mutedText}`}>
                      {totalWeeks}{totalWeeks === 53 && ' ★'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className={`text-xs ${mutedText}`}>★ Long year with 53 ISO weeks</p>
      </section>

      {/* ── FAQ ── */}
      <section className={`${card} p-6 space-y-3`}>
        <h2 className={`text-xl font-bold ${heading}`}>Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqItems.map((item, i) => (
            <div key={i} className={`${nestedCard} overflow-hidden`}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className={`w-full flex items-center justify-between p-4 text-left font-medium ${heading}`}
              >
                <span>{item.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''} ${mutedText}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <p className={`px-4 pb-4 text-sm ${subText}`}>{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Related Tools ── */}
      <section className="space-y-3">
        <h2 className={`text-lg font-bold ${heading}`}>Related Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/days-from-today/', label: 'Days From Today' },
            { href: '/date-calculator/', label: 'Date Calculator' },
            { href: '/calendar/', label: '2026 Calendar' },
            { href: '/todays-date/', label: "Today's Date" },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${nestedCard} p-3 text-center text-sm font-medium ${heading} hover:scale-[1.02] transition-transform`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <p className={`text-center text-xs ${mutedText}`}>
        Week numbers follow the ISO 8601 international standard. Weeks run Monday–Sunday.
        Week 1 is the week containing the first Thursday of the year.
      </p>
    </div>
  )
}
