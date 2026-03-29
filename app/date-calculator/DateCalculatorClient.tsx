'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

/* ───── helpers ───── */

function toDateStr(d: Date): string {
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
}

function parseDate(s: string): Date {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function daysBetween(a: Date, b: Date): number {
  const ms = b.getTime() - a.getTime()
  return Math.round(ms / 86400000)
}

function businessDaysBetween(a: Date, b: Date): number {
  let count = 0
  const start = new Date(Math.min(a.getTime(), b.getTime()))
  const end = new Date(Math.max(a.getTime(), b.getTime()))
  const cur = new Date(start)
  cur.setDate(cur.getDate() + 1)
  while (cur <= end) {
    const dow = cur.getDay()
    if (dow !== 0 && dow !== 6) count++
    cur.setDate(cur.getDate() + 1)
  }
  return count
}

function weekendDaysBetween(totalDays: number, bizDays: number): number {
  return Math.abs(totalDays) - bizDays
}

function getYMD(a: Date, b: Date): { years: number; months: number; days: number } {
  const start = a < b ? a : b
  const end = a < b ? b : a

  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()
  let days = end.getDate() - start.getDate()

  if (days < 0) {
    months--
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0)
    days += prevMonth.getDate()
  }
  if (months < 0) {
    years--
    months += 12
  }
  return { years, months, days }
}

function formatYMD(ymd: { years: number; months: number; days: number }): string {
  const parts: string[] = []
  if (ymd.years > 0) parts.push(`${ymd.years} year${ymd.years !== 1 ? 's' : ''}`)
  if (ymd.months > 0) parts.push(`${ymd.months} month${ymd.months !== 1 ? 's' : ''}`)
  if (ymd.days > 0) parts.push(`${ymd.days} day${ymd.days !== 1 ? 's' : ''}`)
  return parts.join(', ') || '0 days'
}

function getWeeksAndDays(totalDays: number): string {
  const abs = Math.abs(totalDays)
  const weeks = Math.floor(abs / 7)
  const days = abs % 7
  if (weeks === 0) return `${days} day${days !== 1 ? 's' : ''}`
  if (days === 0) return `${weeks} week${weeks !== 1 ? 's' : ''}`
  return `${weeks} week${weeks !== 1 ? 's' : ''}, ${days} day${days !== 1 ? 's' : ''}`
}

/* ───── quick presets ───── */

const PRESETS = [
  { label: 'This year', getRange: () => ({ from: `${new Date().getFullYear()}-01-01`, to: `${new Date().getFullYear()}-12-31` }) },
  { label: 'Last 30 days', getRange: () => { const t = new Date(); const f = new Date(t); f.setDate(f.getDate() - 30); return { from: toDateStr(f), to: toDateStr(t) } } },
  { label: 'Last 90 days', getRange: () => { const t = new Date(); const f = new Date(t); f.setDate(f.getDate() - 90); return { from: toDateStr(f), to: toDateStr(t) } } },
  { label: 'Next 90 days', getRange: () => { const f = new Date(); const t = new Date(f); t.setDate(t.getDate() + 90); return { from: toDateStr(f), to: toDateStr(t) } } },
  { label: 'Next 180 days', getRange: () => { const f = new Date(); const t = new Date(f); t.setDate(t.getDate() + 180); return { from: toDateStr(f), to: toDateStr(t) } } },
  { label: 'Next 365 days', getRange: () => { const f = new Date(); const t = new Date(f); t.setDate(t.getDate() + 365); return { from: toDateStr(f), to: toDateStr(t) } } },
]

const faqItems = [
  { q: 'How do I calculate days between two dates?', a: 'Enter a start date and end date above. The calculator instantly shows calendar days, business days, weeks, and months between the dates, accounting for varying month lengths and leap years.' },
  { q: 'How many business days are between two dates?', a: 'Business days count only weekdays (Monday-Friday), excluding Saturday and Sunday. Our calculator shows both counts. Public holidays are not excluded as they vary by country.' },
  { q: 'How do I calculate months between two dates?', a: 'The calculator shows years, months, and remaining days. For example, January 15 to April 20 = 3 months and 5 days. It accounts for actual month lengths (28-31 days).' },
  { q: 'Does this calculator account for leap years?', a: 'Yes. It uses the Gregorian calendar and automatically handles leap years (Feb 29). Leap years occur every 4 years, except centuries not divisible by 400.' },
  { q: 'What is the difference between this and "days from today"?', a: 'This calculator finds the duration between any two dates you choose. The "days from today" calculator adds/subtracts days from today. Try it at whattime.city/days-from-today/.' },
]

/* ───── component ───── */

export default function DateCalculatorClient() {
  const { isLight } = useCityContext()
  const today = toDateStr(new Date())

  const [fromDate, setFromDate] = useState(today)
  const [toDate, setToDate] = useState(() => {
    const d = new Date()
    d.setDate(d.getDate() + 30)
    return toDateStr(d)
  })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const result = useMemo(() => {
    const a = parseDate(fromDate)
    const b = parseDate(toDate)
    const total = daysBetween(a, b)
    const biz = businessDaysBetween(a, b)
    const weekends = weekendDaysBetween(total, biz)
    const ymd = getYMD(a, b)
    return { total, biz, weekends, ymd, weeksAndDays: getWeeksAndDays(total) }
  }, [fromDate, toDate])

  /* ───── styles ───── */
  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white' : 'rounded-2xl border border-slate-700 bg-slate-800'
  const nestedCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50' : 'rounded-xl border border-slate-700/50 bg-slate-800/50'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-500' : 'text-slate-400'
  const accent = isLight ? 'text-blue-600' : 'text-blue-400'
  const accentBg = isLight ? 'bg-blue-50 border-blue-200' : 'bg-blue-900/30 border-blue-700/50'
  const inputClass = isLight
    ? 'bg-white border border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500'
    : 'bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-blue-400'
  const presetBtn = isLight
    ? 'border border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
    : 'border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-200'

  const fromFormatted = parseDate(fromDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const toFormatted = parseDate(toDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="w-full space-y-8">
      {/* Breadcrumb */}
      <nav className={`flex items-center gap-1.5 text-sm ${mutedText}`}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className={heading}>Date Calculator</span>
      </nav>

      {/* Hero */}
      <header className="text-center space-y-3">
        <h1 className={`text-3xl sm:text-4xl font-bold ${heading}`}>
          Date Calculator
        </h1>
        <p className={`text-lg ${subText}`}>
          Calculate the exact number of <strong>days, weeks, and months</strong> between any two dates.
        </p>
      </header>

      {/* ───── Calculator ───── */}
      <section className={`${card} p-6 sm:p-8 space-y-6`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${subText}`}>Start Date</label>
            <input
              type="date"
              value={fromDate}
              onChange={e => setFromDate(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl outline-none ${inputClass}`}
            />
            <p className={`text-xs mt-1.5 ${mutedText}`}>{fromFormatted}</p>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${subText}`}>End Date</label>
            <input
              type="date"
              value={toDate}
              onChange={e => setToDate(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl outline-none ${inputClass}`}
            />
            <p className={`text-xs mt-1.5 ${mutedText}`}>{toFormatted}</p>
          </div>
        </div>

        {/* Result */}
        <div className={`text-center p-6 rounded-xl border ${accentBg}`}>
          <p className={`text-sm font-medium ${mutedText} mb-1`}>Duration</p>
          <p className={`text-4xl sm:text-5xl font-bold ${accent}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
            {Math.abs(result.total).toLocaleString()} days
          </p>
          <p className={`text-lg ${subText} mt-2`}>{formatYMD(result.ymd)}</p>
          {result.total < 0 && <p className={`text-sm ${mutedText} mt-1`}>(end date is before start date)</p>}
        </div>

        {/* Detail grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Calendar Days', value: Math.abs(result.total).toLocaleString() },
            { label: 'Business Days', value: result.biz.toLocaleString() },
            { label: 'Weekend Days', value: result.weekends.toLocaleString() },
            { label: 'Weeks + Days', value: result.weeksAndDays },
          ].map(item => (
            <div key={item.label} className={`${nestedCard} p-3 text-center`}>
              <p className={`text-xs ${mutedText}`}>{item.label}</p>
              <p className={`text-lg font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Presets */}
        <div className="flex flex-wrap gap-2 justify-center">
          {PRESETS.map(p => (
            <button
              key={p.label}
              onClick={() => { const r = p.getRange(); setFromDate(r.from); setToDate(r.to) }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${presetBtn}`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </section>

      {/* ───── Common Durations ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Common Date Calculations</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: 'Contract & Legal', desc: '30-day notice periods, 60-day warranties, 90-day probation, 180-day review cycles, 1-year lease terms.' },
            { title: 'Project Planning', desc: 'Sprint durations, quarterly milestones, fiscal year planning, deadline tracking for deliverables.' },
            { title: 'Travel & Visas', desc: 'Visa validity periods, passport expiry checks (180 days), trip duration calculations, itinerary planning.' },
            { title: 'Personal', desc: 'Days until birthday, wedding countdown, pregnancy due dates, age calculations, anniversary tracking.' },
          ].map(item => (
            <div key={item.title} className={`${nestedCard} p-4`}>
              <h3 className={`font-semibold ${heading} mb-1`}>{item.title}</h3>
              <p className={`text-sm ${subText}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── How It Works ───── */}
      <section className={`${card} p-6 space-y-3`}>
        <h2 className={`text-xl font-bold ${heading}`}>How the Date Calculator Works</h2>
        <div className={`text-sm space-y-2 ${subText}`}>
          <p>
            The calculator counts every calendar day between your start and end dates.
            It uses the Gregorian calendar and automatically handles months with different
            lengths (28, 29, 30, or 31 days) and leap years.
          </p>
          <p>
            <strong className={heading}>Business days</strong> exclude Saturdays and Sundays
            but do not account for public holidays, which vary by country and region.
            For exact business day calculations including holidays, consult your local calendar.
          </p>
          <p>
            <strong className={heading}>Months calculation:</strong> The year-month-day breakdown
            follows calendar logic — moving from March 15 to June 20 counts as 3 months and 5 days,
            regardless of whether those months have 30 or 31 days.
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
                <div className={`px-4 pb-4 text-sm ${subText}`}>{item.a}</div>
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
            { href: '/days-from-today/', label: 'Days From Today' },
            { href: '/time-converter/', label: 'Time Converter' },
            { href: '/meeting/', label: 'Meeting Planner' },
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

      <p className={`text-center text-xs ${mutedText}`}>
        All calculations are based on the Gregorian calendar. Business days exclude weekends but not public holidays.
      </p>
    </div>
  )
}
