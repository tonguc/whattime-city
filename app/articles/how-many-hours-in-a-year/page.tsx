import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'

export const metadata: Metadata = {
  title: 'How Many Hours in a Year? 8,760 Hours',
  description:
    'A regular year has 8,760 hours (365 × 24). A leap year has 8,784 hours. Full breakdown by month, working hours, and a year-by-year table from 2024 to 2030.',
  alternates: {
    canonical: 'https://whattime.city/articles/how-many-hours-in-a-year/',
  },
  openGraph: {
    title: 'How Many Hours in a Year? 8,760 Hours',
    description:
      'Regular year = 8,760 hours. Leap year = 8,784 hours. Full breakdown with monthly table and working hours.',
    type: 'article',
    url: 'https://whattime.city/articles/how-many-hours-in-a-year/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Hours in a Year? 8,760 or 8,784',
    description:
      'Regular year = 8,760 hours. Leap year = 8,784 hours. Monthly breakdown and working hours included.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours are in a year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A regular year has 8,760 hours (365 days × 24 hours). A leap year has 8,784 hours (366 days × 24 hours). The precise tropical year — Earth\'s actual orbital period — is approximately 8,765.82 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours are in a leap year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A leap year has 8,784 hours (366 days × 24 hours). Leap years occur in years divisible by 4, except century years must also be divisible by 400. The next leap year is 2028.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many working hours in a year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical US full-time employee works about 2,080 hours per year (52 weeks × 40 hours). After subtracting 11 federal holidays (88 hours) and standard paid vacation (80 hours for 2 weeks), the actual worked hours are roughly 1,912–2,000 hours per year.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '2026 is not a leap year, so it has 8,760 hours (365 days × 24 hours). It starts on Thursday, January 1 and ends on Thursday, December 31, 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours in a month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hours per month vary by the number of days: 28-day months (February in common years) have 672 hours, 29-day months (February in leap years) have 696 hours, 30-day months have 720 hours, and 31-day months have 744 hours. The average month has about 730 hours.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Many Hours in a Year? 8,760 Hours Explained',
  description:
    'A regular year has 8,760 hours (365 days × 24 hours). A leap year has 8,784 hours. Full breakdown with monthly table and working hours.',
  url: 'https://whattime.city/articles/how-many-hours-in-a-year/',
  publisher: {
    '@type': 'Organization',
    name: 'whattime.city',
    url: 'https://whattime.city',
  },
  dateModified: '2026-03-29',
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
      name: 'How Many Hours in a Year?',
      item: 'https://whattime.city/articles/how-many-hours-in-a-year/',
    },
  ],
}

export default function HowManyHoursInAYearPage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
            <li className="text-slate-700">How Many Hours in a Year?</li>
          </ol>
        </nav>

        {/* H1 */}
        <h1 className="mb-4 text-3xl font-bold text-slate-800 sm:text-4xl">
          How Many Hours in a Year?
        </h1>

        {/* Featured snippet paragraph */}
        <p className="mb-8 text-lg text-slate-700 leading-relaxed">
          There are <strong className="text-slate-800">8,760 hours</strong> in a regular year
          (365 days &times; 24 hours). In a leap year, there are{' '}
          <strong className="text-slate-800">8,784 hours</strong> (366 days &times; 24 hours).
          The difference of 24 hours — exactly one day — is why leap years exist: to keep our
          calendar aligned with Earth&apos;s orbit around the Sun.
        </p>

        {/* Section 1: Quick Answer */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Quick Answer</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                Regular Year (e.g. 2026)
              </p>
              <p className="text-4xl font-bold text-slate-800 tabular-nums">8,760</p>
              <p className="mt-1 text-sm text-slate-600">hours (365 days &times; 24)</p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1">
                Leap Year (e.g. 2028)
              </p>
              <p className="text-4xl font-bold text-blue-700 tabular-nums">8,784</p>
              <p className="mt-1 text-sm text-blue-600">hours (366 days &times; 24)</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <strong>Key fact:</strong> The precise tropical year (Earth&apos;s actual orbital period
            around the Sun) is 365.2422 days, or about{' '}
            <strong>8,765.82 hours</strong>. The Gregorian calendar compensates for this fraction
            with the leap year system.
          </div>
        </section>

        {/* Section 2: Full Breakdown */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Hours in a Year — Calculation</h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The calculation is simple: multiply the number of days in the year by 24 (hours in a day).
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Year Type</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Days</th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-700">Calculation</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Total Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Regular year</td>
                  <td className="px-4 py-3 text-right tabular-nums text-slate-700">365</td>
                  <td className="px-4 py-3 text-center tabular-nums text-slate-600">365 &times; 24</td>
                  <td className="px-4 py-3 text-right font-semibold tabular-nums text-slate-800">8,760</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Leap year</td>
                  <td className="px-4 py-3 text-right tabular-nums text-slate-700">366</td>
                  <td className="px-4 py-3 text-center tabular-nums text-slate-600">366 &times; 24</td>
                  <td className="px-4 py-3 text-right font-semibold tabular-nums text-slate-800">8,784</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-slate-500 italic">Tropical year (exact)</td>
                  <td className="px-4 py-3 text-right tabular-nums text-slate-500">365.2422</td>
                  <td className="px-4 py-3 text-center tabular-nums text-slate-500">365.2422 &times; 24</td>
                  <td className="px-4 py-3 text-right tabular-nums text-slate-500">8,765.82</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Hours in 2026 */}
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-slate-800">How Many Hours in 2026?</h2>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mb-4">
            <p className="text-sm font-semibold text-amber-700 mb-1 uppercase tracking-wide">
              2026 — Current Year
            </p>
            <p className="text-slate-800 leading-relaxed">
              2026 is <strong>not a leap year</strong>, so it has exactly{' '}
              <strong>8,760 hours</strong>. It starts on Thursday, January 1 and ends on
              Thursday, December 31, 2026. The next leap year is 2028.
            </p>
          </div>
        </section>

        {/* Section 4: Year-by-Year Table */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">
            Year-by-Year Table (2024–2030)
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Year</th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-700">Leap Year?</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Days</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Total Hours</th>
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
                    <td className="px-4 py-3 text-center">
                      {isLeap ? (
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                          Yes
                        </span>
                      ) : (
                        <span className="text-slate-400">No</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums text-slate-700">{(days as number).toLocaleString()}</td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums text-slate-800">{(hours as number).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Hours Per Month */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Hours Per Month</h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The number of hours in each month depends on how many days that month has.
            On average, a month contains approximately <strong>730 hours</strong> (8,760 &divide; 12).
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Month(s)</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Days</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Hours</th>
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
                    className={`border-b border-slate-100 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className="px-4 py-3 text-slate-800">{month}</td>
                    <td className="px-4 py-3 text-right tabular-nums text-slate-700">{days}</td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums text-slate-800">{(hours as number).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Average month: 730 hours (regular year) or 732 hours (leap year).
          </p>
        </section>

        {/* Section 6: Working Hours */}
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-slate-800">
            How Many Working Hours in a Year?
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            A standard full-time US employee works <strong>2,080 hours per year</strong> on paper
            (52 weeks &times; 40 hours). In practice, after accounting for federal holidays and
            paid vacation, the actual worked hours are lower.
          </p>
          <div className="grid gap-3 sm:grid-cols-3 mb-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-3xl font-bold tabular-nums text-slate-800">2,080</p>
              <p className="mt-1 text-sm text-slate-500">Gross working hours</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-3xl font-bold tabular-nums text-slate-800">88</p>
              <p className="mt-1 text-sm text-slate-500">Federal holiday hours (11 × 8h)</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-3xl font-bold tabular-nums text-slate-800">~1,912</p>
              <p className="mt-1 text-sm text-slate-500">Net hours (no vacation)</p>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <strong>With 2 weeks paid vacation:</strong> Subtract another 80 hours →{' '}
            approximately <strong>1,832 actual worked hours</strong> per year for a typical US
            full-time employee with standard benefits.
          </div>
        </section>

        {/* Section 7: Time unit comparisons */}
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-slate-800">Hours in Other Time Units</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Unit</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Hours</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Calculation</th>
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
                    className={`border-b border-slate-100 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className="px-4 py-3 text-slate-800">{unit}</td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums text-slate-800">{hours}</td>
                    <td className="px-4 py-3 text-right tabular-nums text-slate-500">{calc}</td>
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
          <h2 className="mb-3 text-lg font-semibold text-slate-800">Related Articles &amp; Tools</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/articles/how-many-seconds-in-a-year/" className="text-blue-600 underline hover:text-blue-800">
                How Many Seconds in a Year? — 31,536,000 Seconds
              </a>
            </li>
            <li>
              <a href="/articles/how-many-minutes-in-a-year/" className="text-blue-600 underline hover:text-blue-800">
                How Many Minutes in a Year? — 525,600 Minutes
              </a>
            </li>
            <li>
              <a href="/articles/how-many-weeks-in-a-year/" className="text-blue-600 underline hover:text-blue-800">
                How Many Weeks in a Year? — 52 Weeks Explained
              </a>
            </li>
            <li>
              <a href="/articles/how-many-days-in-a-year/" className="text-blue-600 underline hover:text-blue-800">
                How Many Days in a Year? — 365 or 366 Days
              </a>
            </li>
            <li>
              <a href="/todays-date/" className="text-blue-600 underline hover:text-blue-800">
                Today&apos;s Date — Current Date &amp; Day of Week
              </a>
            </li>
            <li>
              <a href="/articles/" className="text-blue-600 underline hover:text-blue-800">
                All Articles
              </a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
          Last updated March 2026. Calculations based on the Gregorian calendar. Tropical year value
          per the International Astronomical Union. Working hour estimates based on the US federal
          holiday calendar and typical employment standards.
        </footer>
      </article>
    </ContentPageWrapper>
  )
}
