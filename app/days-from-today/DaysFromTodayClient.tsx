'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

/* ───── helpers ───── */

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function formatShortDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function getWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
}

function getBusinessDays(start: Date, end: Date): number {
  let count = 0
  const current = new Date(start)
  const direction = end >= start ? 1 : -1
  const target = new Date(end)

  if (direction === 1) {
    current.setDate(current.getDate() + 1) // exclude start
    while (current <= target) {
      const day = current.getDay()
      if (day !== 0 && day !== 6) count++
      current.setDate(current.getDate() + 1)
    }
  } else {
    current.setDate(current.getDate() - 1) // exclude start
    while (current >= target) {
      const day = current.getDay()
      if (day !== 0 && day !== 6) count++
      current.setDate(current.getDate() - 1)
    }
  }
  return count
}

function getWeeksAndDays(totalDays: number): string {
  const abs = Math.abs(totalDays)
  const weeks = Math.floor(abs / 7)
  const days = abs % 7
  if (weeks === 0) return `${days} day${days !== 1 ? 's' : ''}`
  if (days === 0) return `${weeks} week${weeks !== 1 ? 's' : ''}`
  return `${weeks} week${weeks !== 1 ? 's' : ''} and ${days} day${days !== 1 ? 's' : ''}`
}

function getApproxMonths(totalDays: number): string {
  const abs = Math.abs(totalDays)
  const months = abs / 30.44
  if (months < 1) return ''
  if (months % 1 < 0.15 || months % 1 > 0.85) {
    return `~${Math.round(months)} month${Math.round(months) !== 1 ? 's' : ''}`
  }
  return `~${months.toFixed(1)} months`
}

/* ───── popular presets (SEO keyword targets) ───── */

const POPULAR_DAYS = [
  { days: 14, label: '14 days' },
  { days: 30, label: '30 days' },
  { days: 45, label: '45 days' },
  { days: 60, label: '60 days' },
  { days: 90, label: '90 days' },
  { days: 120, label: '120 days' },
  { days: 150, label: '150 days' },
  { days: 180, label: '180 days' },
  { days: 200, label: '200 days' },
  { days: 365, label: '365 days' },
]

/* ───── FAQ items ───── */

const faqItems = [
  {
    q: 'What date is 30 days from today?',
    a: 'To find 30 days from today, add 30 days to the current date. Use the calculator above for the exact date, including the day of the week. 30 days is approximately 4 weeks and 2 days.',
  },
  {
    q: 'What date is 90 days from today?',
    a: '90 days from today is approximately 3 months or about 12 weeks and 6 days. Enter 90 in the calculator to see the exact date with the day of the week.',
  },
  {
    q: 'What date is 180 days from today?',
    a: '180 days from today is approximately 6 months or about 25 weeks and 5 days. This is commonly used for passport validity checks, lease agreements, and project planning.',
  },
  {
    q: 'How do I calculate days from a specific date?',
    a: 'Enter the number of days in the calculator and choose "from today" for future dates or "ago" for past dates. The tool automatically accounts for varying month lengths and leap years.',
  },
  {
    q: 'What is 45 days from today?',
    a: '45 days from today is approximately 6 weeks and 3 days, or about 1.5 months. Enter 45 in the calculator above to see the exact date.',
  },
  {
    q: 'How many business days are in 30 days?',
    a: 'There are typically 21-22 business days (weekdays) in a 30-day period, depending on where in the week you start and whether any holidays fall within the range.',
  },
]

/* ───── component ───── */

export default function DaysFromTodayClient() {
  const { isLight } = useCityContext()
  const [inputDays, setInputDays] = useState(30)
  const [direction, setDirection] = useState<'from' | 'ago'>('from')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const resultDate = useMemo(() => {
    const days = direction === 'from' ? inputDays : -inputDays
    return addDays(today, days)
  }, [today, inputDays, direction])

  const businessDays = useMemo(
    () => getBusinessDays(today, resultDate),
    [today, resultDate],
  )

  /* ───── style tokens ───── */
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
  const accentBg = isLight ? 'bg-blue-50 border-blue-200' : 'bg-blue-900/30 border-blue-700/50'
  const tableHead = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const tableHeadText = isLight ? 'text-slate-600' : 'text-slate-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-700'
  const btnActive = isLight
    ? 'bg-blue-600 text-white'
    : 'bg-blue-500 text-white'
  const btnInactive = isLight
    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
  const presetBtn = isLight
    ? 'border border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
    : 'border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-200'
  const presetBtnActive = isLight
    ? 'border border-blue-300 bg-blue-50 text-blue-700'
    : 'border border-blue-600 bg-blue-900/40 text-blue-300'

  return (
    <div className="w-full space-y-8">
      {/* Breadcrumb */}
      <nav className={`flex items-center gap-1.5 text-sm ${mutedText}`}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className={heading}>Days From Today Calculator</span>
      </nav>

      {/* Hero */}
      <header className="text-center space-y-3">
        <h1 className={`text-3xl sm:text-4xl font-bold ${heading}`}>
          Days From Today Calculator
        </h1>
        <p className={`text-lg ${subText}`}>
          Find what date is <strong>X days from today</strong> or <strong>X days ago</strong>.
          Includes day name, week number, and business days.
        </p>
      </header>

      {/* ───── Calculator Card ───── */}
      <section className={`${card} p-6 sm:p-8 space-y-6`}>
        {/* Direction toggle */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setDirection('from')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              direction === 'from' ? btnActive : btnInactive
            }`}
          >
            Days from today
          </button>
          <button
            onClick={() => setDirection('ago')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              direction === 'ago' ? btnActive : btnInactive
            }`}
          >
            Days ago
          </button>
        </div>

        {/* Input */}
        <div className="flex items-center justify-center gap-3">
          <input
            type="number"
            min={0}
            max={9999}
            value={inputDays}
            onChange={e => {
              const v = parseInt(e.target.value, 10)
              if (!isNaN(v) && v >= 0 && v <= 9999) setInputDays(v)
              else if (e.target.value === '') setInputDays(0)
            }}
            className={`w-28 text-center text-2xl font-semibold py-3 rounded-xl transition-colors
              ${isLight ? 'bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500' : 'bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-blue-400'}
              outline-none`}
            style={{ fontVariantNumeric: 'tabular-nums' }}
          />
          <span className={`text-lg ${subText}`}>
            {direction === 'from' ? 'days from today' : 'days ago'}
          </span>
        </div>

        {/* Result */}
        <div className={`text-center p-6 rounded-xl border ${accentBg}`}>
          <p className={`text-sm font-medium ${mutedText} mb-1`}>
            {inputDays} {inputDays === 1 ? 'day' : 'days'} {direction === 'from' ? 'from today' : 'ago'} is
          </p>
          <p className={`text-3xl sm:text-4xl font-bold ${accent}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
            {formatDate(resultDate)}
          </p>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Calendar Days', value: String(inputDays) },
            { label: 'Business Days', value: String(businessDays) },
            { label: 'Weeks + Days', value: getWeeksAndDays(inputDays) },
            { label: 'Week Number', value: `W${getWeekNumber(resultDate)}` },
          ].map(item => (
            <div key={item.label} className={`${nestedCard} p-3 text-center`}>
              <p className={`text-xs ${mutedText}`}>{item.label}</p>
              <p className={`text-lg font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Approx months */}
        {inputDays >= 28 && (
          <p className={`text-center text-sm ${mutedText}`}>
            {getApproxMonths(inputDays)} &middot; {formatShortDate(today)} → {formatShortDate(resultDate)}
          </p>
        )}
      </section>

      {/* ───── Quick Links (SEO keyword grid) ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Popular Calculations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {POPULAR_DAYS.map(p => (
            <button
              key={p.days}
              onClick={() => { setInputDays(p.days); setDirection('from') }}
              className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                inputDays === p.days && direction === 'from' ? presetBtnActive : presetBtn
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </section>

      {/* ───── Reference Table ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>
          Days From Today — Quick Reference
        </h2>
        <p className={`text-sm ${subText}`}>
          Common day calculations from {formatShortDate(today)}. Click any row to load it in the calculator.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={tableHead}>
                <th className={`py-2.5 px-3 text-left font-medium ${tableHeadText}`}>Days</th>
                <th className={`py-2.5 px-3 text-left font-medium ${tableHeadText}`}>Date</th>
                <th className={`py-2.5 px-3 text-left font-medium ${tableHeadText} hidden sm:table-cell`}>Day</th>
                <th className={`py-2.5 px-3 text-right font-medium ${tableHeadText}`}>Business Days</th>
              </tr>
            </thead>
            <tbody>
              {[7, 14, 21, 30, 45, 60, 90, 100, 120, 150, 180, 200, 250, 300, 365].map((d, i) => {
                const date = addDays(today, d)
                const bd = getBusinessDays(today, date)
                return (
                  <tr
                    key={d}
                    onClick={() => { setInputDays(d); setDirection('from'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className={`cursor-pointer transition-colors ${
                      i % 2 === 0 ? '' : isLight ? 'bg-slate-50/50' : 'bg-slate-800/30'
                    } ${isLight ? 'hover:bg-blue-50' : 'hover:bg-slate-700/50'} border-t ${tableBorder}`}
                  >
                    <td className={`py-2.5 px-3 font-medium ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {d} days
                    </td>
                    <td className={`py-2.5 px-3 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {formatShortDate(date)}
                    </td>
                    <td className={`py-2.5 px-3 ${mutedText} hidden sm:table-cell`}>
                      {date.toLocaleDateString('en-US', { weekday: 'long' })}
                    </td>
                    <td className={`py-2.5 px-3 text-right ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {bd}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ───── "Days Ago" Table ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>
          Days Ago — Past Date Reference
        </h2>
        <p className={`text-sm ${subText}`}>
          Find what date was X days ago from {formatShortDate(today)}.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={tableHead}>
                <th className={`py-2.5 px-3 text-left font-medium ${tableHeadText}`}>Days Ago</th>
                <th className={`py-2.5 px-3 text-left font-medium ${tableHeadText}`}>Date</th>
                <th className={`py-2.5 px-3 text-left font-medium ${tableHeadText} hidden sm:table-cell`}>Day</th>
                <th className={`py-2.5 px-3 text-right font-medium ${tableHeadText}`}>Business Days</th>
              </tr>
            </thead>
            <tbody>
              {[7, 14, 30, 45, 60, 90, 120, 180, 365].map((d, i) => {
                const date = addDays(today, -d)
                const bd = getBusinessDays(today, date)
                return (
                  <tr
                    key={d}
                    onClick={() => { setInputDays(d); setDirection('ago'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className={`cursor-pointer transition-colors ${
                      i % 2 === 0 ? '' : isLight ? 'bg-slate-50/50' : 'bg-slate-800/30'
                    } ${isLight ? 'hover:bg-blue-50' : 'hover:bg-slate-700/50'} border-t ${tableBorder}`}
                  >
                    <td className={`py-2.5 px-3 font-medium ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {d} days ago
                    </td>
                    <td className={`py-2.5 px-3 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {formatShortDate(date)}
                    </td>
                    <td className={`py-2.5 px-3 ${mutedText} hidden sm:table-cell`}>
                      {date.toLocaleDateString('en-US', { weekday: 'long' })}
                    </td>
                    <td className={`py-2.5 px-3 text-right ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {bd}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ───── Use Cases / Info Section ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>
          When Do You Need a Days Calculator?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: 'Legal & Contracts',
              desc: '30-day notice periods, 60-day return policies, 90-day probation periods, and statute of limitations deadlines.',
            },
            {
              title: 'Travel & Passports',
              desc: 'Many countries require passports valid for 180 days beyond your entry date. Calculate your passport expiry deadline.',
            },
            {
              title: 'Health & Fitness',
              desc: '30-day challenges, 90-day fitness programs, medication schedules, and follow-up appointment planning.',
            },
            {
              title: 'Finance & Business',
              desc: '30/60/90-day payment terms, quarterly deadlines (90 days), fiscal year planning, and project milestones.',
            },
            {
              title: 'Education',
              desc: 'Assignment due dates, semester planning, 120-day academic calendars, and exam preparation timelines.',
            },
            {
              title: 'Government & Compliance',
              desc: 'Tax filing deadlines, visa validity (90/180 days), regulatory compliance windows, and licensing renewals.',
            },
          ].map(item => (
            <div key={item.title} className={`${nestedCard} p-4`}>
              <h3 className={`font-semibold mb-1 ${heading}`}>{item.title}</h3>
              <p className={`text-sm ${subText}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── How It Works ───── */}
      <section className={`${card} p-6 space-y-3`}>
        <h2 className={`text-xl font-bold ${heading}`}>
          How to Calculate Days From Today
        </h2>
        <div className={`text-sm space-y-2 ${subText}`}>
          <p>
            Counting days from today means adding (or subtracting) a number of calendar days
            to today&apos;s date. The calculator accounts for months with different lengths
            (28, 29, 30, or 31 days) and leap years automatically.
          </p>
          <p>
            <strong className={heading}>Calendar days vs. business days:</strong> Calendar days
            include all days (weekends and holidays). Business days count only Monday through
            Friday, excluding weekends. Our calculator shows both counts for your convenience.
          </p>
          <p>
            <strong className={heading}>Common durations:</strong> 30 days ≈ 1 month,
            90 days ≈ 3 months (1 quarter), 180 days ≈ 6 months, 365 days = 1 year.
            These are approximations — actual month lengths vary.
          </p>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className={`${card} p-6 space-y-4`}>
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
                <div className={`px-4 pb-4 text-sm ${subText} animate-fadeIn`}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ───── Related Tools ───── */}
      <section className="space-y-3">
        <h2 className={`text-lg font-bold ${heading}`}>Related Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/time-converter/', label: 'Time Converter' },
            { href: '/meeting/', label: 'Meeting Planner' },
            { href: '/sunrise-sunset/', label: 'Sunrise & Sunset' },
            { href: '/military-time/', label: 'Military Time' },
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

      {/* ───── Footer note ───── */}
      <p className={`text-center text-xs ${mutedText}`}>
        All calculations are based on the Gregorian calendar and your device&apos;s local date.
        Business days count excludes weekends (Saturday & Sunday) but does not account for public holidays.
      </p>
    </div>
  )
}
