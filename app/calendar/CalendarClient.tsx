'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

/* ───── constants ───── */
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

/* ───── US Federal Holidays (fixed + computed) ───── */
function getUSHolidays(year: number): { month: number; day: number; name: string }[] {
  // nth weekday helper: month 0-indexed, weekday 0=Sun, n=1-based
  const nthWeekday = (y: number, m: number, weekday: number, n: number) => {
    const first = new Date(y, m, 1).getDay()
    let day = 1 + ((weekday - first + 7) % 7) + (n - 1) * 7
    return day
  }
  // Last Monday of May
  const lastMonday = (y: number, m: number) => {
    const last = new Date(y, m + 1, 0)
    const diff = (last.getDay() - 1 + 7) % 7
    return last.getDate() - diff
  }

  return [
    { month: 0, day: 1, name: "New Year's Day" },
    { month: 0, day: nthWeekday(year, 0, 1, 3), name: 'MLK Jr. Day' },
    { month: 1, day: nthWeekday(year, 1, 1, 3), name: "Presidents' Day" },
    { month: 4, day: lastMonday(year, 4), name: 'Memorial Day' },
    { month: 5, day: 19, name: 'Juneteenth' },
    { month: 6, day: 4, name: 'Independence Day' },
    { month: 8, day: nthWeekday(year, 8, 1, 1), name: 'Labor Day' },
    { month: 9, day: nthWeekday(year, 9, 1, 2), name: 'Columbus Day' },
    { month: 10, day: 11, name: 'Veterans Day' },
    { month: 10, day: nthWeekday(year, 10, 4, 4), name: 'Thanksgiving' },
    { month: 11, day: 25, name: 'Christmas Day' },
  ]
}

/* ───── helpers ───── */
function isLeapYear(y: number) { return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 }
function daysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate() }

function getMonthGrid(year: number, month: number): (number | null)[][] {
  const firstDay = new Date(year, month, 1).getDay()
  const total = daysInMonth(year, month)
  const cells: (number | null)[] = Array(firstDay).fill(null)
  for (let d = 1; d <= total; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)
  const rows: (number | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7))
  return rows
}

/* ───── FAQ ───── */
const faqItems = [
  { q: 'How many weeks are in a year?', a: 'A standard year has 52 weeks and 1 day (52 × 7 = 364, plus 1). A leap year has 52 weeks and 2 days. Some years have 53 ISO weeks when January 1 falls on a Thursday (or Wednesday in a leap year).' },
  { q: 'When is the next leap year?', a: 'Leap years occur every 4 years (2024, 2028, 2032...), except century years not divisible by 400. The next leap year after 2024 is 2028. Leap years add February 29, making the year 366 days.' },
  { q: 'What day does each month start on?', a: 'The starting day shifts each month. Use the calendar above to see what day any month begins. Navigate between years to plan ahead.' },
  { q: 'How many days are in February?', a: 'February has 28 days in regular years and 29 days in leap years. The next February with 29 days is in 2028.' },
  { q: 'When is Thanksgiving in the US?', a: 'Thanksgiving falls on the fourth Thursday of November. In 2026 it is November 26. In 2027 it is November 25.' },
  { q: 'What are the US federal holidays?', a: 'There are 11 US federal holidays: New Year\'s Day, MLK Jr. Day, Presidents\' Day, Memorial Day, Juneteenth, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, and Christmas Day. This calendar marks all of them.' },
]

/* ═══════════════════════════════════════════════════════════ */
export default function CalendarClient() {
  const { isLight } = useCityContext()
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth()
  const currentDate = now.getDate()

  const [year, setYear] = useState(currentYear)
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null) // null = show all
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const holidays = useMemo(() => getUSHolidays(year), [year])
  const holidaySet = useMemo(() => {
    const set = new Map<string, string>()
    holidays.forEach(h => set.set(`${h.month}-${h.day}`, h.name))
    return set
  }, [holidays])

  const isToday = (m: number, d: number) => year === currentYear && m === currentMonth && d === currentDate
  const isHoliday = (m: number, d: number) => holidaySet.has(`${m}-${d}`)
  const getHolidayName = (m: number, d: number) => holidaySet.get(`${m}-${d}`)

  /* ───── styles ───── */
  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white' : 'rounded-2xl border border-slate-700/50 bg-slate-800/60'
  const nestedCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50' : 'rounded-xl border border-slate-700/50 bg-slate-800/50'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-500' : 'text-slate-400'
  const accentText = isLight ? 'text-sky-600' : 'text-sky-400'
  const todayBg = isLight ? 'bg-sky-100 text-sky-700 font-bold' : 'bg-sky-900/50 text-sky-300 font-bold'
  const holidayBg = isLight ? 'bg-red-50 text-red-600 font-medium' : 'bg-red-900/30 text-red-400 font-medium'
  const weekendText = isLight ? 'text-slate-400' : 'text-slate-500'
  const dayHeader = isLight ? 'text-slate-400' : 'text-slate-500'
  const btnActive = isLight ? 'bg-sky-600 text-white' : 'bg-sky-500 text-white'
  const btnInactive = isLight ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
  const navBtn = isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-700 hover:bg-slate-600 text-slate-200'

  const monthsToShow = selectedMonth !== null ? [selectedMonth] : Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className={`flex items-center gap-1.5 text-sm ${mutedText}`}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className={heading}>Calendar</span>
      </nav>

      {/* Hero */}
      <header className="text-center space-y-2">
        <h1 className={`text-3xl sm:text-4xl font-bold ${heading}`}>
          {year} Calendar
        </h1>
        <p className={`text-lg ${subText}`}>
          Full {year} calendar with US federal holidays. {isLeapYear(year) ? `${year} is a leap year (366 days).` : `${year} has 365 days.`}
        </p>
      </header>

      {/* ───── Year Navigation ───── */}
      <div className="flex items-center justify-center gap-3">
        <button onClick={() => setYear(y => y - 1)} className={`px-4 py-2 rounded-xl text-sm font-medium ${navBtn}`}>
          ← {year - 1}
        </button>
        {year !== currentYear && (
          <button onClick={() => setYear(currentYear)} className={`px-4 py-2 rounded-xl text-sm font-medium ${btnActive}`}>
            Today
          </button>
        )}
        <button onClick={() => setYear(y => y + 1)} className={`px-4 py-2 rounded-xl text-sm font-medium ${navBtn}`}>
          {year + 1} →
        </button>
      </div>

      {/* ───── Month Filter ───── */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setSelectedMonth(null)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${selectedMonth === null ? btnActive : btnInactive}`}
        >
          All Months
        </button>
        {MONTHS.map((m, i) => (
          <button
            key={m}
            onClick={() => setSelectedMonth(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${selectedMonth === i ? btnActive : btnInactive}`}
          >
            {m.slice(0, 3)}
          </button>
        ))}
      </div>

      {/* ───── Calendar Grid ───── */}
      <div className={selectedMonth !== null ? '' : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4'}>
        {monthsToShow.map(m => {
          const rows = getMonthGrid(year, m)
          const monthHolidays = holidays.filter(h => h.month === m)
          const expanded = selectedMonth !== null

          return (
            <section key={m} className={`${card} p-4 ${expanded ? 'p-6' : ''}`}>
              <h2
                className={`font-bold mb-3 ${heading} ${expanded ? 'text-xl text-center' : 'text-base'}`}
                onClick={() => setSelectedMonth(selectedMonth === m ? null : m)}
                style={{ cursor: 'pointer' }}
              >
                {MONTHS[m]} {year}
              </h2>

              <table className="w-full text-center text-sm">
                <thead>
                  <tr>
                    {DAYS_SHORT.map((d, i) => (
                      <th key={d} className={`py-1 font-medium text-xs ${i === 0 || i === 6 ? weekendText : dayHeader}`}>
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((d, ci) => {
                        const today = d && isToday(m, d)
                        const holiday = d && isHoliday(m, d)
                        const weekend = ci === 0 || ci === 6
                        const title = d && holiday ? getHolidayName(m, d) : undefined

                        return (
                          <td key={ci} className={`py-0.5 ${expanded ? 'py-1' : ''}`}>
                            {d ? (
                              <span
                                className={`inline-flex items-center justify-center rounded-full ${
                                  expanded ? 'w-9 h-9 text-sm' : 'w-7 h-7 text-xs'
                                } ${
                                  today ? todayBg : holiday ? holidayBg : weekend ? weekendText : heading
                                }`}
                                style={{ fontVariantNumeric: 'tabular-nums' }}
                                title={title}
                              >
                                {d}
                              </span>
                            ) : null}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Holidays in this month */}
              {monthHolidays.length > 0 && (
                <div className={`mt-3 pt-3 border-t ${isLight ? 'border-slate-100' : 'border-slate-700/50'}`}>
                  {monthHolidays.map(h => (
                    <div key={h.name} className="flex items-center gap-2 text-xs mb-1">
                      <span className={`w-2 h-2 rounded-full ${isLight ? 'bg-red-400' : 'bg-red-500'}`} />
                      <span className={mutedText}>
                        {MONTHS[h.month].slice(0, 3)} {h.day} — {h.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </div>

      {/* ───── Year Facts ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>{year} Year Facts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total Days', value: isLeapYear(year) ? '366' : '365' },
            { label: 'Leap Year', value: isLeapYear(year) ? 'Yes' : 'No' },
            { label: 'Starts On', value: DAYS_SHORT[new Date(year, 0, 1).getDay()] },
            { label: 'Ends On', value: DAYS_SHORT[new Date(year, 11, 31).getDay()] },
          ].map(item => (
            <div key={item.label} className={`${nestedCard} p-3 text-center`}>
              <div className={`text-xs ${mutedText} uppercase tracking-wide`}>{item.label}</div>
              <div className={`font-bold mt-1 ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Federal Holidays Table ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>{year} US Federal Holidays</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                <th className={`text-left py-2 pr-4 font-semibold ${heading}`}>Holiday</th>
                <th className={`text-left py-2 pr-4 font-semibold ${heading}`}>Date</th>
                <th className={`text-left py-2 font-semibold ${heading}`}>Day</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map(h => {
                const d = new Date(year, h.month, h.day)
                return (
                  <tr key={h.name} className={`border-b ${isLight ? 'border-slate-100' : 'border-slate-700/50'}`}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{h.name}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {MONTHS[h.month]} {h.day}
                    </td>
                    <td className={`py-2 ${mutedText}`}>
                      {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()]}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
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
            { href: '/todays-date/', label: "Today's Date" },
            { href: '/days-from-today/', label: 'Days Calculator' },
            { href: '/date-calculator/', label: 'Date Calculator' },
            { href: '/countdown/', label: 'Countdown Timer' },
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
