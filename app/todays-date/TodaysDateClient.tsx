'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

/* ───── helpers ───── */

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

function isLeapYear(y: number): boolean {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
}

function daysInYear(y: number): number {
  return isLeapYear(y) ? 366 : 365
}

function dayOfYear(d: Date): number {
  const start = new Date(d.getFullYear(), 0, 0)
  return Math.floor((d.getTime() - start.getTime()) / 86400000)
}

function getISOWeek(d: Date): number {
  const tmp = new Date(d.getTime())
  tmp.setHours(0, 0, 0, 0)
  tmp.setDate(tmp.getDate() + 3 - ((tmp.getDay() + 6) % 7))
  const week1 = new Date(tmp.getFullYear(), 0, 4)
  return 1 + Math.round(((tmp.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7)
}

function getQuarter(m: number): number {
  return Math.floor(m / 3) + 1
}

function daysUntilEndOfYear(d: Date): number {
  const endOfYear = new Date(d.getFullYear(), 11, 31)
  return Math.floor((endOfYear.getTime() - d.getTime()) / 86400000)
}

function daysUntilEndOfMonth(d: Date): number {
  const endOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0)
  return endOfMonth.getDate() - d.getDate()
}

/* ───── upcoming events ───── */

function getUpcomingEvents(now: Date) {
  const y = now.getFullYear()
  const candidates = [
    { name: "New Year's Day", date: new Date(y, 0, 1) },
    { name: "Valentine's Day", date: new Date(y, 1, 14) },
    { name: "St. Patrick's Day", date: new Date(y, 2, 17) },
    { name: 'Easter 2026', date: new Date(2026, 3, 5) },
    { name: 'Mother\'s Day (US)', date: new Date(y, 4, 10) },
    { name: 'Father\'s Day (US)', date: new Date(y, 5, 21) },
    { name: 'Independence Day (US)', date: new Date(y, 6, 4) },
    { name: 'Halloween', date: new Date(y, 9, 31) },
    { name: 'Thanksgiving (US)', date: new Date(y, 10, 26) },
    { name: 'Christmas', date: new Date(y, 11, 25) },
    { name: "New Year's Eve", date: new Date(y, 11, 31) },
    { name: "New Year's Day " + (y + 1), date: new Date(y + 1, 0, 1) },
  ]

  return candidates
    .filter(e => e.date.getTime() >= now.getTime() - 86400000)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 6)
    .map(e => {
      const diff = Math.ceil((e.date.getTime() - now.getTime()) / 86400000)
      return { ...e, daysAway: diff < 0 ? 0 : diff }
    })
}

/* ───── FAQ ───── */
const faqItems = [
  { q: "What is today's date?", a: "Today's date is shown at the top of this page with the full day name, month, date, and year. The page updates automatically at midnight." },
  { q: 'What day of the week is it?', a: "The current day of the week is displayed prominently at the top. You can also see the ISO week number, day of the year, and quarter." },
  { q: 'What week number is it?', a: 'The ISO week number is shown in the date details section. ISO weeks start on Monday, and Week 1 is the week containing the first Thursday of the year.' },
  { q: 'Is this year a leap year?', a: 'Check the Year Facts section to see if the current year is a leap year. Leap years occur every 4 years (except century years not divisible by 400), adding February 29.' },
  { q: 'How many days are left in this year?', a: 'The Days Remaining section shows exactly how many days are left until December 31, including the percentage of the year that has passed.' },
  { q: 'What quarter are we in?', a: 'Q1 = Jan–Mar, Q2 = Apr–Jun, Q3 = Jul–Sep, Q4 = Oct–Dec. The current quarter is shown in the date details section.' },
]

/* ═══════════════════════════════════════════════════════════ */
export default function TodaysDateClient() {
  const { isLight } = useCityContext()
  const [now, setNow] = useState(new Date())
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Update every minute
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(id)
  }, [])

  const dayNum = dayOfYear(now)
  const totalDays = daysInYear(now.getFullYear())
  const weekNum = getISOWeek(now)
  const quarter = getQuarter(now.getMonth())
  const daysLeft = daysUntilEndOfYear(now)
  const daysLeftMonth = daysUntilEndOfMonth(now)
  const yearProgress = Math.round((dayNum / totalDays) * 100)
  const leap = isLeapYear(now.getFullYear())
  const events = useMemo(() => getUpcomingEvents(now), [now])

  /* ───── date formats ───── */
  const formats = useMemo(() => {
    const y = now.getFullYear()
    const m = now.getMonth() + 1
    const d = now.getDate()
    const mp = String(m).padStart(2, '0')
    const dp = String(d).padStart(2, '0')
    return [
      { label: 'ISO 8601', value: `${y}-${mp}-${dp}` },
      { label: 'US Format', value: `${mp}/${dp}/${y}` },
      { label: 'European', value: `${dp}/${mp}/${y}` },
      { label: 'Long Date', value: `${MONTHS[now.getMonth()]} ${d}, ${y}` },
      { label: 'With Day', value: `${DAYS[now.getDay()]}, ${MONTHS[now.getMonth()]} ${d}, ${y}` },
      { label: 'Unix Timestamp', value: String(Math.floor(now.getTime() / 1000)) },
    ]
  }, [now])

  /* ───── styles ───── */
  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white' : 'rounded-2xl border border-slate-700/50 bg-slate-800/60'
  const nestedCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50' : 'rounded-xl border border-slate-700/50 bg-slate-800/50'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-500' : 'text-slate-400'
  const accentText = isLight ? 'text-sky-600' : 'text-sky-400'
  const labelClass = isLight ? 'text-xs text-slate-400 uppercase tracking-wide' : 'text-xs text-slate-500 uppercase tracking-wide'
  const progressBg = isLight ? 'bg-slate-100' : 'bg-slate-700'

  return (
    <div className="w-full space-y-8">
      {/* Breadcrumb */}
      <nav className={`flex items-center gap-1.5 text-sm ${mutedText}`}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className={heading}>Today&apos;s Date</span>
      </nav>

      {/* ───── Hero ───── */}
      <section className={`${card} p-8 text-center space-y-3`}>
        <p className={`text-sm font-medium ${mutedText}`}>Today is</p>
        <h1 className={`text-4xl sm:text-5xl font-bold ${heading}`}>
          {DAYS[now.getDay()]}
        </h1>
        <p className={`text-2xl sm:text-3xl font-semibold ${accentText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {MONTHS[now.getMonth()]} {ordinal(now.getDate())}, {now.getFullYear()}
        </p>
        <p className={`text-sm ${mutedText}`}>
          Week {weekNum} · Day {dayNum} of {totalDays} · Q{quarter}
        </p>
      </section>

      {/* ───── Date Details Grid ───── */}
      <section className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: 'Day of Year', value: `${dayNum} / ${totalDays}` },
          { label: 'Week Number', value: `Week ${weekNum}` },
          { label: 'Quarter', value: `Q${quarter} (${['Jan–Mar', 'Apr–Jun', 'Jul–Sep', 'Oct–Dec'][quarter - 1]})` },
          { label: 'Days Left in Year', value: String(daysLeft) },
          { label: 'Days Left in Month', value: String(daysLeftMonth) },
          { label: 'Leap Year?', value: leap ? `Yes (${totalDays} days)` : `No (${totalDays} days)` },
        ].map(item => (
          <div key={item.label} className={`${nestedCard} p-3`}>
            <div className={labelClass}>{item.label}</div>
            <div className={`font-semibold text-sm mt-1 ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{item.value}</div>
          </div>
        ))}
      </section>

      {/* ───── Year Progress ───── */}
      <section className={`${card} p-6 space-y-3`}>
        <div className="flex items-center justify-between">
          <h2 className={`text-lg font-bold ${heading}`}>Year Progress</h2>
          <span className={`text-sm font-semibold ${accentText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{yearProgress}%</span>
        </div>
        <div className={`w-full h-4 rounded-full overflow-hidden ${progressBg}`}>
          <div className="h-full rounded-full bg-sky-500 transition-all" style={{ width: `${yearProgress}%` }} />
        </div>
        <p className={`text-sm ${mutedText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {dayNum} days passed · {daysLeft} days remaining in {now.getFullYear()}
        </p>
      </section>

      {/* ───── Date Formats ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-lg font-bold ${heading}`}>Today&apos;s Date in Different Formats</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {formats.map(f => (
            <div key={f.label} className={`${nestedCard} p-3 flex items-center justify-between`}>
              <span className={`text-xs ${mutedText}`}>{f.label}</span>
              <span className={`text-sm font-medium ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{f.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Upcoming Events ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-lg font-bold ${heading}`}>Upcoming Holidays &amp; Events</h2>
        <div className="space-y-2">
          {events.map(e => (
            <div key={e.name} className={`${nestedCard} p-3 flex items-center justify-between`}>
              <div>
                <span className={`text-sm font-medium ${heading}`}>{e.name}</span>
                <span className={`text-xs ml-2 ${mutedText}`}>
                  {e.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
              <span className={`text-sm font-semibold ${accentText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                {e.daysAway === 0 ? 'Today!' : e.daysAway === 1 ? 'Tomorrow' : `${e.daysAway} days`}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Month Calendar ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-lg font-bold ${heading}`}>{MONTHS[now.getMonth()]} {now.getFullYear()}</h2>
        <div className="overflow-x-auto">
          <MiniCalendar now={now} isLight={isLight} heading={heading} mutedText={mutedText} accentText={accentText} />
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
                <span className="text-sm">{item.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''} ${mutedText}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className={`px-4 pb-4 text-sm ${subText}`}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="space-y-3">
        <h2 className={`text-lg font-bold ${heading}`}>Related Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/days-from-today/', label: 'Days Calculator' },
            { href: '/date-calculator/', label: 'Date Calculator' },
            { href: '/countdown/', label: 'Countdown' },
            { href: '/sunrise-sunset/', label: 'Sunrise & Sunset' },
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
    </div>
  )
}

/* ───── Mini Calendar Component ───── */
function MiniCalendar({ now, isLight, heading, mutedText, accentText }: {
  now: Date; isLight: boolean; heading: string; mutedText: string; accentText: string
}) {
  const year = now.getFullYear()
  const month = now.getMonth()
  const today = now.getDate()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: (number | null)[] = Array(firstDay).fill(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const cellBg = isLight ? 'bg-sky-100 text-sky-700 font-bold' : 'bg-sky-900/50 text-sky-300 font-bold'
  const dayHeader = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <table className="w-full text-center text-sm">
      <thead>
        <tr>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
            <th key={d} className={`py-1.5 font-medium ${dayHeader}`}>{d}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: Math.ceil(cells.length / 7) }, (_, row) => (
          <tr key={row}>
            {cells.slice(row * 7, row * 7 + 7).map((d, i) => (
              <td key={i} className="py-1">
                {d ? (
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      d === today ? cellBg : heading
                    }`}
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {d}
                  </span>
                ) : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
