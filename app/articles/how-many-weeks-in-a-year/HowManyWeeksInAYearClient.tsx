'use client'

import { useArticleTheme } from '@/lib/useArticleTheme'

const faqItems = [
  {
    name: 'How many weeks in a year exactly?',
    acceptedAnswer: {
      text: 'A regular year has exactly 52.143 weeks (365 ÷ 7 = 52.142857...). A leap year has 52.286 weeks (366 ÷ 7 = 52.285714...). In whole numbers, every year has 52 full weeks plus either 1 or 2 extra days.',
    },
  },
  {
    name: 'Is there ever a 53-week year?',
    acceptedAnswer: {
      text: 'Yes. Under the ISO 8601 standard, some years contain 53 numbered weeks instead of 52. A year has 53 ISO weeks when January 1 falls on a Thursday, or when it falls on a Wednesday in a leap year. 2026 has 53 ISO weeks because January 1, 2026 falls on a Thursday.',
    },
  },
  {
    name: 'How many weeks in a school year?',
    acceptedAnswer: {
      text: 'A typical US school year runs for 180 instructional days, which equals 36 weeks (180 ÷ 5 days per week). In practice, the full school calendar — including teacher preparation days, holidays, and breaks — spans roughly 40 weeks, usually from late August through early June.',
    },
  },
  {
    name: 'How many work weeks in a year?',
    acceptedAnswer: {
      text: 'A year contains 52 work weeks on paper, but most full-time US employees work approximately 48–50 weeks after accounting for vacation time and public holidays. The US has 11 federal holidays; if none fall on weekends, roughly 2.2 work weeks are removed from the total.',
    },
  },
  {
    name: 'How many weeks are left in 2026?',
    acceptedAnswer: {
      text: "The number of weeks remaining in 2026 depends on today's date. You can check the current week number and see exactly how many weeks remain by visiting whattime.city, which shows live date and time data.",
    },
  },
]

export default function HowManyWeeksInAYearClient() {
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
          <li className={t.breadcrumbCurrent}>How Many Weeks in a Year?</li>
        </ol>
      </nav>

      {/* H1 */}
      <h1 className={`mb-4 text-3xl font-bold ${t.heading} sm:text-4xl`}>
        How Many Weeks in a Year?
      </h1>

      {/* Featured snippet paragraph */}
      <p className={`mb-8 text-lg ${t.body} leading-relaxed`}>
        There are <strong className={t.heading}>52 weeks and 1 day</strong> in a standard
        year (365 days). In a leap year (366 days), there are{' '}
        <strong className={t.heading}>52 weeks and 2 days</strong>. While we commonly say
        &ldquo;52 weeks,&rdquo; no year has exactly 52 weeks — there is always 1 or 2 extra days.
      </p>

      {/* Section 1: Quick Answer */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Quick Answer</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className={`${t.card} p-5`}>
            <p className={`text-xs font-semibold uppercase tracking-wide ${t.muted} mb-1`}>
              Common Year (e.g. 2026)
            </p>
            <p className={`text-4xl font-bold ${t.heading} tabular-nums`}>52</p>
            <p className={`mt-1 text-sm ${t.body}`}>weeks + 1 day (365 days total)</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1">
              Leap Year (e.g. 2028)
            </p>
            <p className="text-4xl font-bold text-blue-700 tabular-nums">52</p>
            <p className="mt-1 text-sm text-blue-600">weeks + 2 days (366 days total)</p>
          </div>
        </div>
        <div className={`mt-4 ${t.infoBox}`}>
          <strong>Key fact:</strong> 52 weeks &times; 7 days = <strong>364 days</strong> — one
          day short of a regular year. This leftover day (or two in a leap year) is why the
          calendar shifts forward each year.
        </div>
      </section>

      {/* Section 2: Full Breakdown */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>
          Weeks in a Year — Full Breakdown
        </h2>
        <p className={`mb-4 ${t.body} leading-relaxed`}>
          The math is straightforward: divide the number of days in a year by 7 (days per week).
          The quotient is 52, and there is a remainder of 1 or 2 days depending on whether it is
          a leap year.
        </p>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Year Type</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Total Days</th>
                <th className={`px-4 py-3 text-center ${t.tableHeadCell}`}>Calculation</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`${t.tableRowBorder} ${t.tableRowEven}`}>
                <td className={`px-4 py-3 font-medium ${t.heading}`}>Regular year</td>
                <td className={`px-4 py-3 text-right tabular-nums ${t.tableCell}`}>365</td>
                <td className={`px-4 py-3 text-center tabular-nums ${t.body}`}>365 &divide; 7</td>
                <td className={`px-4 py-3 text-right font-semibold tabular-nums ${t.heading}`}>
                  52 weeks + 1 day
                </td>
              </tr>
              <tr className={`${t.tableRowBorder} ${t.tableRowOdd}`}>
                <td className={`px-4 py-3 font-medium ${t.heading}`}>Leap year</td>
                <td className={`px-4 py-3 text-right tabular-nums ${t.tableCell}`}>366</td>
                <td className={`px-4 py-3 text-center tabular-nums ${t.body}`}>366 &divide; 7</td>
                <td className={`px-4 py-3 text-right font-semibold tabular-nums ${t.heading}`}>
                  52 weeks + 2 days
                </td>
              </tr>
              <tr className={t.tableRowEven}>
                <td className={`px-4 py-3 font-medium italic ${t.muted}`}>Exactly 52 weeks</td>
                <td className={`px-4 py-3 text-right tabular-nums ${t.muted}`}>364</td>
                <td className={`px-4 py-3 text-center tabular-nums ${t.muted}`}>52 &times; 7</td>
                <td className={`px-4 py-3 text-right tabular-nums ${t.muted}`}>
                  Never occurs
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-2 text-xs ${t.muted}`}>
          No calendar year in the Gregorian system has exactly 52 weeks — there is always a
          remainder of 1 or 2 days.
        </p>
      </section>

      {/* Section 3: Weeks in 2026 */}
      <section className="mb-10">
        <h2 className={`mb-3 text-2xl font-bold ${t.heading}`}>How Many Weeks in 2026?</h2>
        <div className={`${t.highlight} mb-4`}>
          <p className="text-sm font-semibold text-amber-700 mb-1 uppercase tracking-wide">
            2026 — Current Year
          </p>
          <p className={`${t.highlightBody} leading-relaxed`}>
            2026 is <strong>not a leap year</strong>, so it has{' '}
            <strong>52 weeks and 1 day</strong> (365 days total). It starts on{' '}
            <strong>Thursday, January 1</strong> and ends on{' '}
            <strong>Thursday, December 31, 2026</strong>.
          </p>
        </div>
        <p className={`${t.body} leading-relaxed mb-3`}>
          Under the ISO 8601 standard, 2026 has <strong>53 ISO weeks</strong>. This happens
          because January 1, 2026 falls on a Thursday — ISO week 1 of 2026 runs from Monday,
          December 29, 2025 through Sunday, January 4, 2026, and the final ISO week (week 53)
          runs from Monday, December 28, 2026 through Sunday, January 3, 2027.
        </p>
        <div className={t.infoBox}>
          <strong>ISO 8601 rule:</strong> A year has 53 ISO weeks if January 1 falls on a
          Thursday, or if January 1 falls on a Wednesday in a leap year. 2026 meets the first
          condition.
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
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Days</th>
                <th className={`px-4 py-3 text-center ${t.tableHeadCell}`}>Leap Year?</th>
                <th className={`px-4 py-3 text-center ${t.tableHeadCell}`}>Weeks + Extra Days</th>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Starts On</th>
              </tr>
            </thead>
            <tbody>
              {[
                [2024, 366, true, '52w + 2d', 'Monday'],
                [2025, 365, false, '52w + 1d', 'Wednesday'],
                [2026, 365, false, '52w + 1d', 'Thursday'],
                [2027, 365, false, '52w + 1d', 'Friday'],
                [2028, 366, true, '52w + 2d', 'Saturday'],
                [2029, 365, false, '52w + 1d', 'Monday'],
                [2030, 365, false, '52w + 1d', 'Tuesday'],
              ].map(([year, days, isLeap, weeksExtra, startsOn], idx) => (
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
                  <td className={`px-4 py-3 text-center font-semibold tabular-nums ${t.heading}`}>
                    {weeksExtra as string}
                  </td>
                  <td className={`px-4 py-3 ${t.body}`}>{startsOn as string}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`mt-2 text-xs ${t.muted}`}>
          &ldquo;Starts On&rdquo; refers to the day of the week for January 1 of each year.
        </p>
      </section>

      {/* Section 5: Work Weeks */}
      <section className="mb-10">
        <h2 className={`mb-3 text-2xl font-bold ${t.heading}`}>
          How Many Work Weeks in a Year?
        </h2>
        <p className={`mb-4 ${t.body} leading-relaxed`}>
          On paper, a year has <strong>52 work weeks</strong> (one per calendar week). In
          practice, most full-time workers in the US work approximately{' '}
          <strong>48–50 weeks per year</strong> after accounting for vacation time and public
          holidays.
        </p>
        <div className="grid gap-3 sm:grid-cols-3 mb-4">
          <div className={`${t.card} p-4 text-center`}>
            <p className={`text-3xl font-bold tabular-nums ${t.heading}`}>52</p>
            <p className={`mt-1 text-sm ${t.muted}`}>Calendar weeks</p>
          </div>
          <div className={`${t.card} p-4 text-center`}>
            <p className={`text-3xl font-bold tabular-nums ${t.heading}`}>11</p>
            <p className={`mt-1 text-sm ${t.muted}`}>US federal holidays</p>
          </div>
          <div className={`${t.card} p-4 text-center`}>
            <p className={`text-3xl font-bold tabular-nums ${t.heading}`}>48–50</p>
            <p className={`mt-1 text-sm ${t.muted}`}>Typical worked weeks</p>
          </div>
        </div>
        <p className={`${t.body} leading-relaxed mb-3`}>
          The US has 11 federal holidays. If none of those fall on weekends, that removes roughly{' '}
          <strong>2.2 work weeks</strong> from the total. Add 2–4 weeks of paid vacation (standard
          in most US full-time roles), and the typical employee works 48–50 weeks per year.
        </p>
        <div className={t.infoBox}>
          <strong>By country:</strong> Countries with more generous leave policies work fewer
          weeks. For example, the EU mandates at least 4 weeks of paid vacation, meaning European
          workers typically work 46–48 weeks. Japan&apos;s statutory minimum is 10 days, but many
          employees take less, often working 50+ weeks.
        </div>
      </section>

      {/* Section 6: Weeks Per Month */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Weeks Per Month</h2>
        <p className={`mb-4 ${t.body} leading-relaxed`}>
          No month has exactly 4 weeks. Every month except February runs slightly longer than four
          weeks. Here is the average number of weeks in each month:
        </p>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Month(s)</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Days</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Weeks (exact)</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Full Weeks</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['February (common year)', 28, '4.000', 4],
                ['February (leap year)', 29, '4.143', 4],
                ['April, June, Sep, Nov', 30, '4.286', 4],
                ['Jan, Mar, May, Jul, Aug, Oct, Dec', 31, '4.429', 4],
              ].map(([month, days, exact, full], idx) => (
                <tr
                  key={month as string}
                  className={`${t.tableRowBorder} last:border-0 ${idx % 2 === 0 ? t.tableRowEven : t.tableRowOdd}`}
                >
                  <td className={`px-4 py-3 ${t.heading}`}>{month}</td>
                  <td className={`px-4 py-3 text-right tabular-nums ${t.tableCell}`}>{days}</td>
                  <td className={`px-4 py-3 text-right tabular-nums ${t.tableCell}`}>{exact}</td>
                  <td className={`px-4 py-3 text-right tabular-nums ${t.body}`}>{full}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`mt-3 ${t.body} leading-relaxed`}>
          On average, a month has <strong>4.33 weeks</strong> (365 &divide; 12 months &divide; 7
          days = 4.345). This is why billing cycles, subscription months, and payroll periods
          do not align perfectly with calendar weeks.
        </p>
      </section>

      {/* Section 7: Why isn't a year exactly 52 weeks? */}
      <section className="mb-10">
        <h2 className={`mb-3 text-2xl font-bold ${t.heading}`}>
          Why Isn&apos;t a Year Exactly 52 Weeks?
        </h2>
        <p className={`mb-4 ${t.body} leading-relaxed`}>
          52 &times; 7 = <strong>364 days</strong> — one day short of a regular year. The reason
          goes back to astronomy: Earth takes approximately{' '}
          <strong>365.2422 days</strong> to complete one full orbit around the Sun (a tropical
          year). The Gregorian calendar rounds this to 365 days for most years, then adds an extra
          day (February 29) every four years to account for the accumulating ~0.25-day fraction.
        </p>
        <div className={`${t.cardAlt} p-5 mb-4`}>
          <h3 className={`mb-3 font-semibold ${t.heading}`}>The Math at a Glance</h3>
          <ul className={`space-y-2 text-sm ${t.body}`}>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-slate-200 px-1.5 text-xs font-semibold text-slate-600">1</span>
              <span>Earth&apos;s orbit: <strong>365.2422 days</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-slate-200 px-1.5 text-xs font-semibold text-slate-600">2</span>
              <span>
                52 full weeks: <strong>364 days</strong> — leaves 1 day (or 2 in a leap year)
                unaccounted
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-slate-200 px-1.5 text-xs font-semibold text-slate-600">3</span>
              <span>
                Those extra days cause the calendar to &ldquo;shift&rdquo; — that is why your
                birthday falls on a different day of the week each year
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-slate-200 px-1.5 text-xs font-semibold text-slate-600">4</span>
              <span>
                Leap years add a second extra day, which is why leap years shift the calendar by
                two days instead of one
              </span>
            </li>
          </ul>
        </div>
        <p className={`${t.body} leading-relaxed`}>
          If you need to track time precisely — for example, calculating time zones for
          international calls or scheduling across time zones — tools like the{' '}
          <a href="/military-time/" className={t.link}>
            military time converter
          </a>{' '}
          can help standardize time references across regions.
        </p>
      </section>

      {/* Section 8: ISO Weeks Explained */}
      <section className="mb-10">
        <h2 className={`mb-3 text-2xl font-bold ${t.heading}`}>
          ISO Week Numbers Explained
        </h2>
        <p className={`mb-4 ${t.body} leading-relaxed`}>
          ISO 8601 defines a standard for week numbering used widely in Europe and in business
          contexts. Under this system:
        </p>
        <ul className={`mb-4 space-y-2 text-sm ${t.body} list-disc list-inside`}>
          <li>Weeks always start on <strong>Monday</strong> and end on Sunday.</li>
          <li>
            Week 1 of the year is the week that contains the <strong>first Thursday</strong> of
            the year (equivalently, the week containing January 4).
          </li>
          <li>
            Most years have <strong>52 ISO weeks</strong>. Years where January 1 falls on
            Thursday — or Wednesday in a leap year — have <strong>53 ISO weeks</strong>.
          </li>
        </ul>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Year</th>
                <th className={`px-4 py-3 text-center ${t.tableHeadCell}`}>Jan 1 Falls On</th>
                <th className={`px-4 py-3 text-center ${t.tableHeadCell}`}>ISO Weeks</th>
              </tr>
            </thead>
            <tbody>
              {[
                [2024, 'Monday', 52],
                [2025, 'Wednesday', 52],
                [2026, 'Thursday', 53],
                [2027, 'Friday', 52],
                [2028, 'Saturday', 52],
                [2029, 'Monday', 52],
                [2030, 'Tuesday', 52],
              ].map(([year, day, isoWeeks], idx) => (
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
                  <td className={`px-4 py-3 text-center ${t.tableCell}`}>{day as string}</td>
                  <td className="px-4 py-3 text-center">
                    {isoWeeks === 53 ? (
                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                        53
                      </span>
                    ) : (
                      <span className={`tabular-nums ${t.body}`}>52</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 9: FAQ */}
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
        <h2 className={`mb-3 text-lg font-semibold ${t.heading}`}>Related Articles &amp; Tools</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/articles/how-many-days-in-a-year/" className={t.link}>
              How Many Days in a Year? — 365 or 366 Days Explained
            </a>
          </li>
          <li>
            <a href="/military-time/" className={t.link}>
              Military Time — 24-Hour Clock Converter
            </a>
          </li>
          <li>
            <a href="/" className={t.link}>
              whattime.city — Current Time Worldwide
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
        Last updated March 2026. Data calculated from the Gregorian calendar. ISO week numbers
        per ISO 8601. Work week estimates based on the US federal holiday calendar.
      </footer>
    </article>
  )
}
