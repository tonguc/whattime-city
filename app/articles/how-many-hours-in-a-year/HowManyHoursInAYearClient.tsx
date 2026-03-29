'use client'

import { useArticleTheme } from '@/lib/useArticleTheme'

const faqItems = [
  {
    name: 'How many hours are in a year?',
    answer: "A regular year has 8,760 hours (365 days × 24 hours). A leap year has 8,784 hours (366 days × 24 hours). The precise tropical year — Earth's actual orbital period — is approximately 8,765.82 hours.",
  },
  {
    name: 'How many hours are in a leap year?',
    answer: 'A leap year has 8,784 hours (366 days × 24 hours). Leap years occur in years divisible by 4, except century years must also be divisible by 400. The next leap year is 2028.',
  },
  {
    name: 'How many working hours in a year?',
    answer: 'A typical US full-time employee works about 2,080 hours per year (52 weeks × 40 hours). After subtracting 11 federal holidays (88 hours) and standard paid vacation (80 hours for 2 weeks), the actual worked hours are roughly 1,912–2,000 hours per year.',
  },
  {
    name: 'How many hours in 2026?',
    answer: '2026 is not a leap year, so it has 8,760 hours (365 days × 24 hours). It starts on Thursday, January 1 and ends on Thursday, December 31, 2026.',
  },
  {
    name: 'How many hours in a month?',
    answer: 'Hours per month vary by the number of days: 28-day months (February in common years) have 672 hours, 29-day months (February in leap years) have 696 hours, 30-day months have 720 hours, and 31-day months have 744 hours. The average month has about 730 hours.',
  },
]

export default function HowManyHoursInAYearClient() {
  const t = useArticleTheme()

  return (
    <article>
      {/* Breadcrumb */}
      <nav className={`mb-4 text-sm ${t.breadcrumb}`} aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1">
          <li><a href="/" className={t.breadcrumbLink}>Home</a></li>
          <li className={t.breadcrumbSep}>/</li>
          <li><a href="/articles/" className={t.breadcrumbLink}>Articles</a></li>
          <li className={t.breadcrumbSep}>/</li>
          <li className={t.breadcrumbCurrent}>How Many Hours in a Year?</li>
        </ol>
      </nav>

      {/* H1 */}
      <h1 className={`mb-4 text-3xl font-bold ${t.heading} sm:text-4xl`}>
        How Many Hours in a Year?
      </h1>

      {/* Featured snippet paragraph */}
      <p className={`mb-8 text-lg ${t.body} leading-relaxed`}>
        There are <strong className={t.heading}>8,760 hours</strong> in a regular year
        (365 days &times; 24 hours). In a leap year, there are{' '}
        <strong className={t.heading}>8,784 hours</strong> (366 days &times; 24 hours).
        The difference of 24 hours — exactly one day — is why leap years exist: to keep our
        calendar aligned with Earth&apos;s orbit around the Sun.
      </p>

      {/* Section 1: Quick Answer */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Quick Answer</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className={`${t.card} p-5`}>
            <p className={`text-xs font-semibold uppercase tracking-wide ${t.muted} mb-1`}>
              Regular Year (e.g. 2026)
            </p>
            <p className={`text-4xl font-bold ${t.heading} tabular-nums`}>8,760</p>
            <p className={`mt-1 text-sm ${t.body}`}>hours (365 days &times; 24)</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1">
              Leap Year (e.g. 2028)
            </p>
            <p className="text-4xl font-bold text-blue-700 tabular-nums">8,784</p>
            <p className="mt-1 text-sm text-blue-600">hours (366 days &times; 24)</p>
          </div>
        </div>
        <div className={`mt-4 ${t.infoBox}`}>
          <strong>Key fact:</strong> The precise tropical year (Earth&apos;s actual orbital period
          around the Sun) is 365.2422 days, or about{' '}
          <strong>8,765.82 hours</strong>. The Gregorian calendar compensates for this fraction
          with the leap year system.
        </div>
      </section>

      {/* Section 2: Full Breakdown */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Hours in a Year — Calculation</h2>
        <p className={`mb-4 ${t.body} leading-relaxed`}>
          The calculation is simple: multiply the number of days in the year by 24 (hours in a day).
        </p>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Year Type</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Days</th>
                <th className={`px-4 py-3 text-center ${t.tableHeadCell}`}>Calculation</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Total Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`${t.tableRowBorder} ${t.tableRowEven}`}>
                <td className={`px-4 py-3 font-medium ${t.heading}`}>Regular year</td>
                <td className={`px-4 py-3 text-right tabular-nums ${t.tableCell}`}>365</td>
                <td className={`px-4 py-3 text-center tabular-nums ${t.tableCell}`}>365 &times; 24</td>
                <td className={`px-4 py-3 text-right font-semibold tabular-nums ${t.heading}`}>8,760</td>
              </tr>
              <tr className={`${t.tableRowBorder} ${t.tableRowOdd}`}>
                <td className={`px-4 py-3 font-medium ${t.heading}`}>Leap year</td>
                <td className={`px-4 py-3 text-right tabular-nums ${t.tableCell}`}>366</td>
                <td className={`px-4 py-3 text-center tabular-nums ${t.tableCell}`}>366 &times; 24</td>
                <td className={`px-4 py-3 text-right font-semibold tabular-nums ${t.heading}`}>8,784</td>
              </tr>
              <tr className={t.tableRowEven}>
                <td className={`px-4 py-3 font-medium italic ${t.muted}`}>Tropical year (exact)</td>
                <td className={`px-4 py-3 text-right tabular-nums ${t.muted}`}>365.2422</td>
                <td className={`px-4 py-3 text-center tabular-nums ${t.muted}`}>365.2422 &times; 24</td>
                <td className={`px-4 py-3 text-right tabular-nums ${t.muted}`}>8,765.82</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Hours in 2026 */}
      <section className="mb-10">
        <h2 className={`mb-3 text-2xl font-bold ${t.heading}`}>How Many Hours in 2026?</h2>
        <div className={`${t.highlight} mb-4`}>
          <p className={`text-sm font-semibold ${t.highlightText} mb-1 uppercase tracking-wide`}>
            2026 — Current Year
          </p>
          <p className={`${t.highlightBody} leading-relaxed`}>
            2026 is <strong>not a leap year</strong>, so it has exactly{' '}
            <strong>8,760 hours</strong>. It starts on Thursday, January 1 and ends on
            Thursday, December 31, 2026. The next leap year is 2028.
          </p>
        </div>
      </section>

      {/* Section 4: Year-by-Year Table */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>
          Year-by-Year Table (2024–2030)
        </h2>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Year</th>
                <th className={`px-4 py-3 text-center ${t.tableHeadCell}`}>Leap Year?</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Days</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Total Hours</th>
              </tr>
            </thead>
            <tbody>
              {[
                [2024, true, 366, 8784],
                [2025, false, 365, 8760],
                [2026, false, 365, 8760],
                [2027, false, 365, 8760],
                [2028, true, 366, 8784],
                [2029, false, 365, 8760],
                [2030, false, 365, 8760],
              ].map(([year, isLeap, days, hours], idx) => (
                <tr
                  key={year as number}
                  className={`${t.tableRowBorder} last:border-0 ${year === 2026 ? t.tableRowCurrent : idx % 2 === 0 ? t.tableRowEven : t.tableRowOdd}`}
                >
                  <td className={`px-4 py-3 font-medium tabular-nums ${t.heading}`}>
                    {year}
                    {year === 2026 && (
                      <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
                        Current
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {isLeap ? (
                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                        Yes
                      </span>
                    ) : (
                      <span className={t.muted}>No</span>
                    )}
                  </td>
                  <td className={`px-4 py-3 text-right tabular-nums ${t.tableCell}`}>{(days as number).toLocaleString()}</td>
                  <td className={`px-4 py-3 text-right font-semibold tabular-nums ${t.heading}`}>{(hours as number).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Hours Per Month */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Hours Per Month</h2>
        <p className={`mb-4 ${t.body} leading-relaxed`}>
          The number of hours in each month depends on how many days that month has.
          On average, a month contains approximately <strong>730 hours</strong> (8,760 &divide; 12).
        </p>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Month(s)</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Days</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Hours</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['February (common year)', 28, 672],
                ['February (leap year)', 29, 696],
                ['April, June, September, November', 30, 720],
                ['January, March, May, July, August, October, December', 31, 744],
              ].map(([month, days, hours], idx) => (
                <tr
                  key={month as string}
                  className={`${t.tableRowBorder} last:border-0 ${idx % 2 === 0 ? t.tableRowEven : t.tableRowOdd}`}
                >
                  <td className={`px-4 py-3 ${t.heading}`}>{month}</td>
                  <td className={`px-4 py-3 text-right tabular-nums ${t.tableCell}`}>{days}</td>
                  <td className={`px-4 py-3 text-right font-semibold tabular-nums ${t.heading}`}>{(hours as number).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`mt-2 text-xs ${t.muted}`}>
          Average month: 730 hours (regular year) or 732 hours (leap year).
        </p>
      </section>

      {/* Section 6: Working Hours */}
      <section className="mb-10">
        <h2 className={`mb-3 text-2xl font-bold ${t.heading}`}>
          How Many Working Hours in a Year?
        </h2>
        <p className={`mb-4 ${t.body} leading-relaxed`}>
          A standard full-time US employee works <strong>2,080 hours per year</strong> on paper
          (52 weeks &times; 40 hours). In practice, after accounting for federal holidays and
          paid vacation, the actual worked hours are lower.
        </p>
        <div className="grid gap-3 sm:grid-cols-3 mb-4">
          <div className={`${t.card} p-4 text-center`}>
            <p className={`text-3xl font-bold tabular-nums ${t.heading}`}>2,080</p>
            <p className={`mt-1 text-sm ${t.muted}`}>Gross working hours</p>
          </div>
          <div className={`${t.card} p-4 text-center`}>
            <p className={`text-3xl font-bold tabular-nums ${t.heading}`}>88</p>
            <p className={`mt-1 text-sm ${t.muted}`}>Federal holiday hours (11 × 8h)</p>
          </div>
          <div className={`${t.card} p-4 text-center`}>
            <p className={`text-3xl font-bold tabular-nums ${t.heading}`}>~1,912</p>
            <p className={`mt-1 text-sm ${t.muted}`}>Net hours (no vacation)</p>
          </div>
        </div>
        <div className={t.infoBox}>
          <strong>With 2 weeks paid vacation:</strong> Subtract another 80 hours →{' '}
          approximately <strong>1,832 actual worked hours</strong> per year for a typical US
          full-time employee with standard benefits.
        </div>
      </section>

      {/* Section 7: Time unit comparisons */}
      <section className="mb-10">
        <h2 className={`mb-3 text-2xl font-bold ${t.heading}`}>Hours in Other Time Units</h2>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Unit</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Hours</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Calculation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1 hour', '1', '—'],
                ['1 day', '24', '1 × 24'],
                ['1 week', '168', '7 × 24'],
                ['1 month (30 days)', '720', '30 × 24'],
                ['1 quarter (91.25 days)', '2,190', '91.25 × 24'],
                ['1 year (regular)', '8,760', '365 × 24'],
                ['1 year (leap)', '8,784', '366 × 24'],
                ['10 years (avg)', '87,660', '365.25 × 24 × 10'],
              ].map(([unit, hours, calc], idx) => (
                <tr
                  key={unit as string}
                  className={`${t.tableRowBorder} last:border-0 ${idx % 2 === 0 ? t.tableRowEven : t.tableRowOdd}`}
                >
                  <td className={`px-4 py-3 ${t.heading}`}>{unit}</td>
                  <td className={`px-4 py-3 text-right font-semibold tabular-nums ${t.heading}`}>{hours}</td>
                  <td className={`px-4 py-3 text-right tabular-nums ${t.muted}`}>{calc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.name} className={`${t.card} p-5`}>
              <h3 className={`mb-2 font-semibold ${t.heading}`}>{item.name}</h3>
              <p className={`text-sm ${t.body} leading-relaxed`}>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="mb-10">
        <h2 className={`mb-3 text-lg font-semibold ${t.heading}`}>Related Articles &amp; Tools</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/articles/how-many-seconds-in-a-year/" className={t.link}>
              How Many Seconds in a Year? — 31,536,000 Seconds
            </a>
          </li>
          <li>
            <a href="/articles/how-many-minutes-in-a-year/" className={t.link}>
              How Many Minutes in a Year? — 525,600 Minutes
            </a>
          </li>
          <li>
            <a href="/articles/how-many-weeks-in-a-year/" className={t.link}>
              How Many Weeks in a Year? — 52 Weeks Explained
            </a>
          </li>
          <li>
            <a href="/articles/how-many-days-in-a-year/" className={t.link}>
              How Many Days in a Year? — 365 or 366 Days
            </a>
          </li>
          <li>
            <a href="/todays-date/" className={t.link}>
              Today&apos;s Date — Current Date &amp; Day of Week
            </a>
          </li>
          <li>
            <a href="/articles/" className={t.link}>
              All Articles
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className={t.footer}>
        Last updated March 2026. Calculations based on the Gregorian calendar. Tropical year value
        per the International Astronomical Union. Working hour estimates based on the US federal
        holiday calendar and typical employment standards.
      </footer>
    </article>
  )
}
