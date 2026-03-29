'use client'

import { useArticleTheme } from '@/lib/useArticleTheme'

const faqItems = [
  {
    name: 'How many days in a year exactly?',
    acceptedAnswer: {
      text: 'A mean tropical year — the time Earth takes to complete one orbit around the Sun — is approximately 365.2422 days. The Gregorian calendar rounds this to 365 days in a common year and adds one extra day (366 days) every four years in a leap year to stay aligned with the astronomical year.',
    },
  },
  {
    name: 'Is 2026 a leap year?',
    acceptedAnswer: {
      text: 'No. 2026 is not a leap year. It has 365 days. The next leap year is 2028, which will have 366 days.',
    },
  },
  {
    name: 'How many days in a year without weekends?',
    acceptedAnswer: {
      text: 'In 2026, there are 261 weekdays (Monday through Friday) and 104 weekend days (Saturday and Sunday). After subtracting 11 US federal holidays that fall on weekdays, there are approximately 250 net working days.',
    },
  },
  {
    name: 'How many days are in each month?',
    acceptedAnswer: {
      text: 'January 31, February 28 (29 in a leap year), March 31, April 30, May 31, June 30, July 31, August 31, September 30, October 31, November 30, December 31.',
    },
  },
  {
    name: 'Why do we have leap years?',
    acceptedAnswer: {
      text: "We have leap years to keep the calendar aligned with Earth's orbit around the Sun. Because Earth takes approximately 365.2422 days to orbit the Sun, adding one extra day every four years compensates for the roughly 0.25-day discrepancy that would otherwise accumulate — causing the calendar to drift out of sync with the seasons over time.",
    },
  },
]

export default function HowManyDaysInAYearClient() {
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
          <li className={t.breadcrumbCurrent}>How Many Days in a Year?</li>
        </ol>
      </nav>

      {/* H1 */}
      <h1 className={`mb-4 text-3xl font-bold ${t.heading} sm:text-4xl`}>
        How Many Days in a Year?
      </h1>

      {/* Featured snippet paragraph */}
      <p className={`mb-8 text-lg ${t.body} leading-relaxed`}>
        A standard year in the Gregorian calendar has{' '}
        <strong className={t.heading}>365 days</strong>. A leap year, which occurs every
        4 years, has <strong className={t.heading}>366 days</strong> — the extra day is
        February 29. The year 2026 has{' '}
        <strong className={t.heading}>365 days</strong> and is not a leap year.
      </p>

      {/* Section 1: Quick Answer */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Quick Answer</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className={`${t.card} p-5`}>
            <p className={`text-xs font-semibold uppercase tracking-wide ${t.muted} mb-1`}>
              Common Year
            </p>
            <p className={`text-4xl font-bold ${t.heading} tabular-nums`}>365</p>
            <p className={`mt-1 text-sm ${t.body}`}>days — e.g. 2025, 2026, 2027</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1">
              Leap Year
            </p>
            <p className="text-4xl font-bold text-blue-700 tabular-nums">366</p>
            <p className="mt-1 text-sm text-blue-600">days — e.g. 2024, 2028, 2032</p>
          </div>
        </div>
        <div className={`mt-4 ${t.infoBox}`}>
          <strong>Key fact:</strong> A mean tropical year is exactly{' '}
          <strong>365.2422 days</strong>. The Gregorian calendar compensates for the ~0.25
          fractional day by inserting a leap day every 4 years (with century exceptions).
        </div>
      </section>

      {/* Section 2: Days in 2026 */}
      <section className="mb-10">
        <h2 className={`mb-3 text-2xl font-bold ${t.heading}`}>Days in 2026</h2>
        <p className={`${t.body} leading-relaxed`}>
          2026 has <strong>365 days</strong>. It is a common (non-leap) year. It starts on{' '}
          <strong>Thursday, January 1, 2026</strong> and ends on{' '}
          <strong>Thursday, December 31, 2026</strong>.
        </p>
      </section>

      {/* Section 3: Days by Month */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Days by Month (2026)</h2>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Month</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Days</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Cumulative</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['January', 31, 31],
                ['February', 28, 59],
                ['March', 31, 90],
                ['April', 30, 120],
                ['May', 31, 151],
                ['June', 30, 181],
                ['July', 31, 212],
                ['August', 31, 243],
                ['September', 30, 273],
                ['October', 31, 304],
                ['November', 30, 334],
                ['December', 31, 365],
              ].map(([month, days, cumulative], idx) => (
                <tr
                  key={month as string}
                  className={`${t.tableRowBorder} last:border-0 ${idx % 2 === 0 ? t.tableRowEven : t.tableRowOdd}`}
                >
                  <td className={`px-4 py-3 ${t.heading}`}>{month}</td>
                  <td className={`px-4 py-3 text-right tabular-nums ${t.tableCell}`}>{days}</td>
                  <td className={`px-4 py-3 text-right tabular-nums ${t.muted}`}>{cumulative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`mt-2 text-xs ${t.muted}`}>
          February has 28 days in 2026 (non-leap year). In a leap year it has 29.
        </p>
      </section>

      {/* Section 4: Year-by-Year Table */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Year-by-Year Days (2024–2030)</h2>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Year</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Days</th>
                <th className={`px-4 py-3 text-center ${t.tableHeadCell}`}>Leap Year?</th>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Starts On</th>
              </tr>
            </thead>
            <tbody>
              {[
                [2024, 366, true, 'Monday'],
                [2025, 365, false, 'Wednesday'],
                [2026, 365, false, 'Thursday'],
                [2027, 365, false, 'Friday'],
                [2028, 366, true, 'Saturday'],
                [2029, 365, false, 'Monday'],
                [2030, 365, false, 'Tuesday'],
              ].map(([year, days, isLeap, startsOn], idx) => (
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
                  <td className={`px-4 py-3 text-right tabular-nums ${t.tableCell}`}>{days}</td>
                  <td className="px-4 py-3 text-center">
                    {isLeap ? (
                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                        Yes
                      </span>
                    ) : (
                      <span className={t.muted}>No</span>
                    )}
                  </td>
                  <td className={`px-4 py-3 ${t.body}`}>{startsOn as string}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Working Days */}
      <section className="mb-10">
        <h2 className={`mb-3 text-2xl font-bold ${t.heading}`}>
          How Many Working Days in a Year?
        </h2>
        <p className={`mb-4 ${t.body} leading-relaxed`}>
          In 2026, there are <strong>261 working days</strong> (weekdays) and 104 weekend days.
          After subtracting 11 US federal holidays that fall on weekdays, there are approximately{' '}
          <strong>250 net working days</strong>.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className={`${t.card} p-4 text-center`}>
            <p className={`text-3xl font-bold tabular-nums ${t.heading}`}>365</p>
            <p className={`mt-1 text-sm ${t.muted}`}>Total days</p>
          </div>
          <div className={`${t.card} p-4 text-center`}>
            <p className={`text-3xl font-bold tabular-nums ${t.heading}`}>261</p>
            <p className={`mt-1 text-sm ${t.muted}`}>Weekdays (Mon–Fri)</p>
          </div>
          <div className={`${t.card} p-4 text-center`}>
            <p className={`text-3xl font-bold tabular-nums ${t.heading}`}>250</p>
            <p className={`mt-1 text-sm ${t.muted}`}>Net working days (–11 US holidays)</p>
          </div>
        </div>
        <p className={`mt-3 text-xs ${t.muted}`}>
          Working day counts vary by country. The 250-day figure applies to the United States.
          Countries with more public holidays (e.g. India, Germany) will have fewer net working
          days.
        </p>
      </section>

      {/* Section 6: What Is a Leap Year? */}
      <section className="mb-10">
        <h2 className={`mb-3 text-2xl font-bold ${t.heading}`}>What Is a Leap Year?</h2>
        <p className={`mb-4 ${t.body} leading-relaxed`}>
          A leap year has 366 days instead of 365. The extra day — February 29 — is added to
          keep the calendar synchronized with Earth&apos;s orbit around the Sun.
        </p>
        <div className={`${t.cardAlt} p-5`}>
          <h3 className={`mb-3 font-semibold ${t.heading}`}>Gregorian Leap Year Rules</h3>
          <ol className={`space-y-2 text-sm ${t.body} list-decimal list-inside`}>
            <li>
              A year is a leap year if it is <strong>divisible by 4</strong> — e.g. 2024, 2028.
            </li>
            <li>
              <strong>Exception:</strong> Years divisible by 100 are <em>not</em> leap years —
              e.g. 1900, 2100 are not leap years.
            </li>
            <li>
              <strong>Exception to the exception:</strong> Years divisible by 400{' '}
              <em>are</em> leap years — e.g. 2000 was a leap year.
            </li>
          </ol>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm">
          <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-center">
            <p className="font-semibold text-green-700">2024</p>
            <p className="text-green-600">Divisible by 4 → Leap year</p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-center">
            <p className="font-semibold text-red-700">2100</p>
            <p className="text-red-600">Divisible by 100 → Not a leap year</p>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-center">
            <p className="font-semibold text-green-700">2000</p>
            <p className="text-green-600">Divisible by 400 → Leap year</p>
          </div>
        </div>
      </section>

      {/* Section 7: Calendar Systems */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>
          Days in Different Calendar Systems
        </h2>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Calendar</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Days per Year</th>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Gregorian (civil)', '365 / 366', 'Most widely used worldwide; leap year every ~4 years'],
                ['Islamic (Hijri)', '354 / 355', 'Lunar calendar; 12 lunar months; no intercalation'],
                ['Hebrew (Jewish)', '353–385', 'Lunisolar; 7-month leap year adds an extra month'],
                ['Persian (Solar Hijri)', '365 / 366', 'Solar calendar used in Iran and Afghanistan'],
              ].map(([calendar, days, notes], idx) => (
                <tr
                  key={calendar as string}
                  className={`${t.tableRowBorder} last:border-0 ${idx % 2 === 0 ? t.tableRowEven : t.tableRowOdd}`}
                >
                  <td className={`px-4 py-3 font-medium ${t.heading}`}>{calendar}</td>
                  <td className={`px-4 py-3 text-right tabular-nums ${t.tableCell}`}>{days}</td>
                  <td className={`px-4 py-3 ${t.body}`}>{notes}</td>
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
            <div
              key={item.name}
              className={`${t.card} p-5`}
            >
              <h3 className={`mb-2 font-semibold ${t.heading}`}>{item.name}</h3>
              <p className={`text-sm ${t.body} leading-relaxed`}>
                {item.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="mb-10">
        <h2 className={`mb-3 text-lg font-semibold ${t.heading}`}>Related Articles</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/articles/how-many-weeks-in-a-year/" className={t.link}>
              How Many Weeks in a Year?
            </a>
          </li>
          <li>
            <a href="/articles/am-pm/" className={t.link}>
              AM and PM — What Do They Mean?
            </a>
          </li>
          <li>
            <a href="/military-time/" className={t.link}>
              Military Time — 24-Hour Clock Converter
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
        Last updated March 2026. Day counts based on the Gregorian calendar. Working day
        calculations use the US federal holiday calendar. Leap year rules per the Gregorian
        calendar reform (1582).
      </footer>
    </article>
  )
}
