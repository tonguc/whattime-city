'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const MONTHS = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28, leapDays: 29 },
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 },
]

const TIME_UNITS = [
  { unit: 'Minute', perDay: 1_440, perWeek: 10_080, perMonth: '~43,800', perYear: '525,600', perLeap: '527,040' },
  { unit: 'Hour', perDay: 24, perWeek: 168, perMonth: '~730', perYear: '8,760', perLeap: '8,784' },
  { unit: 'Second', perDay: 86_400, perWeek: 604_800, perMonth: '~2,628,000', perYear: '31,536,000', perLeap: '31,622,400' },
]

const faqItems = [
  {
    q: 'How many minutes are in a year?',
    a: 'A regular year has 525,600 minutes (365 × 24 × 60). A leap year has 527,040 minutes (366 × 24 × 60). The precise tropical year has approximately 525,948.77 minutes.',
  },
  {
    q: 'How many minutes in a day?',
    a: 'There are 1,440 minutes in a day (24 hours × 60 minutes per hour).',
  },
  {
    q: 'How many minutes in a week?',
    a: 'There are 10,080 minutes in a week (7 days × 1,440 minutes per day).',
  },
  {
    q: 'How many minutes in a month?',
    a: 'It depends on the month: February has 40,320 (or 41,760 in leap years), 30-day months have 43,200, and 31-day months have 44,640. The average month is approximately 43,800 minutes.',
  },
  {
    q: 'Where does "525,600 minutes" come from?',
    a: 'The number 525,600 is 365 × 24 × 60. It was popularized by the song "Seasons of Love" from the musical Rent, which opens with "Five hundred twenty-five thousand six hundred minutes — how do you measure a year?"',
  },
]

export default function MinutesInAYearClient() {
  const { isLight } = useCityContext()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

  let cumMinutes = 0

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className={`flex items-center gap-1.5 text-sm ${mutedText}`}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/articles/" className="hover:underline">Articles</Link>
        <span>/</span>
        <span className={heading}>How Many Minutes in a Year?</span>
      </nav>

      {/* Hero */}
      <header className="text-center space-y-3">
        <h1 className={`text-3xl sm:text-4xl font-bold ${heading}`}>
          How Many Minutes in a Year?
        </h1>
        <p className={`text-lg ${subText}`}>
          The complete breakdown — from seconds to hours, month by month.
        </p>
      </header>

      {/* Featured Answer */}
      <section className={`text-center p-6 sm:p-8 rounded-2xl border ${accentBg}`}>
        <p className={`text-sm font-medium ${mutedText} mb-2`}>Quick Answer</p>
        <p className={`text-4xl sm:text-5xl font-bold ${accent}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          525,600
        </p>
        <p className={`text-lg ${subText} mt-2`}>minutes in a regular year (365 days)</p>
        <p className={`text-2xl font-bold ${accent} mt-4`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          527,040
        </p>
        <p className={`text-sm ${mutedText} mt-1`}>minutes in a leap year (366 days)</p>
      </section>

      {/* The Math */}
      <section className={`${card} p-6 space-y-3`}>
        <h2 className={`text-xl font-bold ${heading}`}>The Math Behind 525,600</h2>
        <div className={`text-sm space-y-2 ${subText}`}>
          <p>The calculation is straightforward:</p>
          <div className={`${nestedCard} p-4 text-center`}>
            <p className={`text-lg font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
              365 days &times; 24 hours &times; 60 minutes = <span className={accent}>525,600</span>
            </p>
            <p className={`text-sm ${mutedText} mt-2`}>
              Leap year: 366 &times; 24 &times; 60 = <strong>527,040</strong> (1,440 more minutes)
            </p>
          </div>
          <p>
            That extra 1,440 minutes in a leap year is exactly <strong>one full day</strong> (24 hours &times; 60 minutes).
            Leap years occur every 4 years (with exceptions for centuries) to keep our calendar aligned
            with Earth&apos;s orbital period of approximately 365.2422 days.
          </p>
          <p>
            The precise <strong>tropical year</strong> is 365.2422 days, which works out to
            <strong> 525,948.77 minutes</strong> — about 349 minutes (5 hours 49 minutes) more than the
            calendar year of 525,600.
          </p>
        </div>
      </section>

      {/* Monthly Breakdown */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Minutes by Month</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={tableHead}>
                <th className={`py-2.5 px-3 text-left font-medium ${tableHeadText}`}>Month</th>
                <th className={`py-2.5 px-3 text-center font-medium ${tableHeadText}`}>Days</th>
                <th className={`py-2.5 px-3 text-right font-medium ${tableHeadText}`}>Hours</th>
                <th className={`py-2.5 px-3 text-right font-medium ${tableHeadText}`}>Minutes</th>
                <th className={`py-2.5 px-3 text-right font-medium ${tableHeadText} hidden sm:table-cell`}>Cumulative</th>
              </tr>
            </thead>
            <tbody>
              {MONTHS.map((m, i) => {
                const mins = m.days * 24 * 60
                const hours = m.days * 24
                cumMinutes += mins
                return (
                  <tr key={m.name} className={`border-t ${tableBorder} ${i % 2 !== 0 ? (isLight ? 'bg-slate-50/50' : 'bg-slate-800/30') : ''}`}>
                    <td className={`py-2.5 px-3 font-medium ${heading}`}>{m.name}</td>
                    <td className={`py-2.5 px-3 text-center ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {m.days}{m.leapDays ? `/${m.leapDays}` : ''}
                    </td>
                    <td className={`py-2.5 px-3 text-right ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {hours.toLocaleString()}
                    </td>
                    <td className={`py-2.5 px-3 text-right font-medium ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {mins.toLocaleString()}
                    </td>
                    <td className={`py-2.5 px-3 text-right ${mutedText} hidden sm:table-cell`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {cumMinutes.toLocaleString()}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className={`text-xs ${mutedText}`}>
          February has 40,320 minutes in a regular year and 41,760 in a leap year.
        </p>
      </section>

      {/* Time Unit Comparison */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Time Units at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={tableHead}>
                <th className={`py-2.5 px-3 text-left font-medium ${tableHeadText}`}>Unit</th>
                <th className={`py-2.5 px-3 text-right font-medium ${tableHeadText}`}>Per Day</th>
                <th className={`py-2.5 px-3 text-right font-medium ${tableHeadText}`}>Per Week</th>
                <th className={`py-2.5 px-3 text-right font-medium ${tableHeadText} hidden sm:table-cell`}>Per Month (avg)</th>
                <th className={`py-2.5 px-3 text-right font-medium ${tableHeadText}`}>Per Year</th>
              </tr>
            </thead>
            <tbody>
              {TIME_UNITS.map((row, i) => (
                <tr key={row.unit} className={`border-t ${tableBorder} ${i % 2 !== 0 ? (isLight ? 'bg-slate-50/50' : 'bg-slate-800/30') : ''}`}>
                  <td className={`py-2.5 px-3 font-medium ${heading}`}>{row.unit}s</td>
                  <td className={`py-2.5 px-3 text-right ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {row.perDay.toLocaleString()}
                  </td>
                  <td className={`py-2.5 px-3 text-right ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {row.perWeek.toLocaleString()}
                  </td>
                  <td className={`py-2.5 px-3 text-right ${subText} hidden sm:table-cell`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {row.perMonth}
                  </td>
                  <td className={`py-2.5 px-3 text-right font-medium ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {row.perYear}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Fun Facts / Context */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Putting 525,600 Minutes in Perspective</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: '"Seasons of Love"', desc: 'The song from the musical Rent opens with "Five hundred twenty-five thousand six hundred minutes — how do you measure, measure a year?" It became one of the most recognizable numbers in pop culture.' },
            { title: 'Working Minutes', desc: 'A typical full-time worker logs about 124,800 minutes per year (2,080 hours). That\'s only 23.7% of all minutes in a year — meaning 76.3% is non-work time.' },
            { title: 'Sleep Minutes', desc: 'At the recommended 8 hours per night, you spend about 175,200 minutes sleeping each year — roughly one-third of all minutes.' },
            { title: 'Screen Time', desc: 'The average adult spends about 126,000 minutes per year on screens (about 7 hours/day). That\'s 24% of the year staring at a display.' },
          ].map(item => (
            <div key={item.title} className={`${nestedCard} p-4`}>
              <h3 className={`font-semibold ${heading} mb-1`}>{item.title}</h3>
              <p className={`text-sm ${subText}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Converter */}
      <section className={`${card} p-6 space-y-3`}>
        <h2 className={`text-xl font-bold ${heading}`}>Quick Conversions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: '1 hour', value: '60 min' },
            { label: '1 day', value: '1,440 min' },
            { label: '1 week', value: '10,080 min' },
            { label: '1 month (30d)', value: '43,200 min' },
            { label: '1 year (365d)', value: '525,600 min' },
            { label: '1 decade', value: '5,256,000 min' },
          ].map(item => (
            <div key={item.label} className={`${nestedCard} p-3 text-center`}>
              <p className={`text-xs ${mutedText}`}>{item.label}</p>
              <p className={`text-lg font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
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

      {/* Related */}
      <section className="space-y-3">
        <h2 className={`text-lg font-bold ${heading}`}>Related Articles</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/articles/how-many-weeks-in-a-year/', label: 'Weeks in a Year' },
            { href: '/articles/how-many-days-in-a-year/', label: 'Days in a Year' },
            { href: '/articles/am-pm/', label: 'AM vs PM' },
            { href: '/days-from-today/', label: 'Days Calculator' },
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
        Last updated March 2026. All calculations based on the Gregorian calendar.
      </p>
    </div>
  )
}
