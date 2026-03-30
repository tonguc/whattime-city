import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'

export const metadata: Metadata = {
  title: 'How Many Days in a Year? 365 or 366 (2026)',
  description:
    'A regular year has 365 days. A leap year has 366 days. See the breakdown by month, working days, and a year-by-year calendar through 2030.',
  alternates: {
    canonical: 'https://whattime.city/articles/how-many-days-in-a-year/',
  },
  openGraph: {
    title: 'How Many Days in a Year? (2026) — 365 or 366 Days Explained',
    description:
      'A regular year has 365 days. A leap year has 366 days. See the breakdown by month, working days, and a year-by-year calendar through 2030.',
    type: 'article',
    url: 'https://whattime.city/articles/how-many-days-in-a-year/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Days in a Year? 365 or 366 — Full Breakdown',
    description:
      'Regular year = 365 days. Leap year = 366 days. Month-by-month table, working days, and leap year rules explained.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many days in a year exactly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mean tropical year — the time Earth takes to complete one orbit around the Sun — is approximately 365.2422 days. The Gregorian calendar rounds this to 365 days in a common year and adds one extra day (366 days) every four years in a leap year to stay aligned with the astronomical year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is 2026 a leap year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. 2026 is not a leap year. It has 365 days. The next leap year is 2028, which will have 366 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days in a year without weekends?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In 2026, there are 261 weekdays (Monday through Friday) and 104 weekend days (Saturday and Sunday). After subtracting 11 US federal holidays that fall on weekdays, there are approximately 250 net working days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days are in each month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'January 31, February 28 (29 in a leap year), March 31, April 30, May 31, June 30, July 31, August 31, September 30, October 31, November 30, December 31.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do we have leap years?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We have leap years to keep the calendar aligned with Earth's orbit around the Sun. Because Earth takes approximately 365.2422 days to orbit the Sun, adding one extra day every four years compensates for the roughly 0.25-day discrepancy that would otherwise accumulate — causing the calendar to drift out of sync with the seasons over time.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://whattime.city/articles/' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How Many Days in a Year?',
      item: 'https://whattime.city/articles/how-many-days-in-a-year/',
    },
  ],
}

export default function HowManyDaysInAYearPage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article>
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-slate-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><a href="/" className="hover:text-slate-700 underline">Home</a></li>
            <li className="text-slate-400">/</li>
            <li><a href="/articles/" className="hover:text-slate-700 underline">Articles</a></li>
            <li className="text-slate-400">/</li>
            <li className="text-slate-700">How Many Days in a Year?</li>
          </ol>
        </nav>

        {/* H1 */}
        <h1 className="mb-4 text-3xl font-bold text-slate-800 sm:text-4xl">
          How Many Days in a Year?
        </h1>

        {/* Featured snippet paragraph */}
        <p className="mb-8 text-lg text-slate-700 leading-relaxed">
          A standard year in the Gregorian calendar has{' '}
          <strong className="text-slate-800">365 days</strong>. A leap year, which occurs every
          4 years, has <strong className="text-slate-800">366 days</strong> — the extra day is
          February 29. The year 2026 has{' '}
          <strong className="text-slate-800">365 days</strong> and is not a leap year.
        </p>

        {/* Section 1: Quick Answer */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Quick Answer</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                Common Year
              </p>
              <p className="text-4xl font-bold text-slate-800 tabular-nums">365</p>
              <p className="mt-1 text-sm text-slate-600">days — e.g. 2025, 2026, 2027</p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1">
                Leap Year
              </p>
              <p className="text-4xl font-bold text-blue-700 tabular-nums">366</p>
              <p className="mt-1 text-sm text-blue-600">days — e.g. 2024, 2028, 2032</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <strong>Key fact:</strong> A mean tropical year is exactly{' '}
            <strong>365.2422 days</strong>. The Gregorian calendar compensates for the ~0.25
            fractional day by inserting a leap day every 4 years (with century exceptions).
          </div>
        </section>

        {/* Section 2: Days in 2026 */}
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-slate-800">Days in 2026</h2>
          <p className="text-slate-700 leading-relaxed">
            2026 has <strong>365 days</strong>. It is a common (non-leap) year. It starts on{' '}
            <strong>Thursday, January 1, 2026</strong> and ends on{' '}
            <strong>Thursday, December 31, 2026</strong>.
          </p>
        </section>

        {/* Section 3: Days by Month */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Days by Month (2026)</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Month</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Days</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Cumulative</th>
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
                    className={`border-b border-slate-100 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className="px-4 py-3 text-slate-800">{month}</td>
                    <td className="px-4 py-3 text-right tabular-nums text-slate-700">{days}</td>
                    <td className="px-4 py-3 text-right tabular-nums text-slate-500">{cumulative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            February has 28 days in 2026 (non-leap year). In a leap year it has 29.
          </p>
        </section>

        {/* Section 4: Year-by-Year Table */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Year-by-Year Days (2024–2030)</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Year</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Days</th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-700">Leap Year?</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Starts On</th>
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
                    className={`border-b border-slate-100 last:border-0 ${year === 2026 ? 'bg-amber-50' : idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className="px-4 py-3 font-medium tabular-nums text-slate-800">
                      {year}
                      {year === 2026 && (
                        <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
                          Current
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums text-slate-700">{days}</td>
                    <td className="px-4 py-3 text-center">
                      {isLeap ? (
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                          Yes
                        </span>
                      ) : (
                        <span className="text-slate-400">No</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{startsOn as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Working Days */}
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-slate-800">
            How Many Working Days in a Year?
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            In 2026, there are <strong>261 working days</strong> (weekdays) and 104 weekend days.
            After subtracting 11 US federal holidays that fall on weekdays, there are approximately{' '}
            <strong>250 net working days</strong>.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-3xl font-bold tabular-nums text-slate-800">365</p>
              <p className="mt-1 text-sm text-slate-500">Total days</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-3xl font-bold tabular-nums text-slate-800">261</p>
              <p className="mt-1 text-sm text-slate-500">Weekdays (Mon–Fri)</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-3xl font-bold tabular-nums text-slate-800">250</p>
              <p className="mt-1 text-sm text-slate-500">Net working days (–11 US holidays)</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Working day counts vary by country. The 250-day figure applies to the United States.
            Countries with more public holidays (e.g. India, Germany) will have fewer net working
            days.
          </p>
        </section>

        {/* Section 6: What Is a Leap Year? */}
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-slate-800">What Is a Leap Year?</h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            A leap year has 366 days instead of 365. The extra day — February 29 — is added to
            keep the calendar synchronized with Earth&apos;s orbit around the Sun.
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="mb-3 font-semibold text-slate-800">Gregorian Leap Year Rules</h3>
            <ol className="space-y-2 text-sm text-slate-700 list-decimal list-inside">
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
          <h2 className="mb-4 text-2xl font-bold text-slate-800">
            Days in Different Calendar Systems
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Calendar</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Days per Year</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Notes</th>
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
                    className={`border-b border-slate-100 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className="px-4 py-3 font-medium text-slate-800">{calendar}</td>
                    <td className="px-4 py-3 text-right tabular-nums text-slate-700">{days}</td>
                    <td className="px-4 py-3 text-slate-600">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h3 className="mb-2 font-semibold text-slate-800">{item.name}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-10">
          <h2 className="mb-3 text-lg font-semibold text-slate-800">Related Articles</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/articles/how-many-weeks-in-a-year/"
                className="text-blue-600 underline hover:text-blue-800"
              >
                How Many Weeks in a Year?
              </a>
            </li>
            <li>
              <a
                href="/articles/am-pm/"
                className="text-blue-600 underline hover:text-blue-800"
              >
                AM and PM — What Do They Mean?
              </a>
            </li>
            <li>
              <a
                href="/military-time/"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Military Time — 24-Hour Clock Converter
              </a>
            </li>
            <li>
              <a
                href="/articles/"
                className="text-blue-600 underline hover:text-blue-800"
              >
                All Articles
              </a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
          Last updated March 2026. Day counts based on the Gregorian calendar. Working day
          calculations use the US federal holiday calendar. Leap year rules per the Gregorian
          calendar reform (1582).
        </footer>
      </article>
    </ContentPageWrapper>
  )
}
