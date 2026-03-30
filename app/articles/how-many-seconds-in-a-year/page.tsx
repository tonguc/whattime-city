import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'

export const metadata: Metadata = {
  title: 'How Many Seconds in a Year? 31,536,000',
  description:
    'A regular year has 31,536,000 seconds (365 × 24 × 3,600). A leap year has 31,622,400 seconds. Full breakdown by minute, hour, day, month, and a year-by-year table.',
  alternates: {
    canonical: 'https://whattime.city/articles/how-many-seconds-in-a-year/',
  },
  openGraph: {
    title: 'How Many Seconds in a Year? 31,536,000',
    description:
      'Regular year = 31,536,000 seconds. Leap year = 31,622,400 seconds. Full breakdown with monthly table.',
    type: 'article',
    url: 'https://whattime.city/articles/how-many-seconds-in-a-year/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Seconds in a Year?',
    description:
      'A regular year has 31,536,000 seconds. Leap year has 31,622,400. Full breakdown included.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many seconds are in a year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A regular year has 31,536,000 seconds (365 days × 24 hours × 60 minutes × 60 seconds). A leap year has 31,622,400 seconds (366 days × 86,400). The precise tropical year is approximately 31,556,925 seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many seconds are in a day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 86,400 seconds in a day (24 hours × 60 minutes × 60 seconds).',
      },
    },
    {
      '@type': 'Question',
      name: 'How many seconds are in an hour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 3,600 seconds in one hour (60 minutes × 60 seconds).',
      },
    },
    {
      '@type': 'Question',
      name: 'How many seconds are in a month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seconds per month depend on the month length: 28-day months have 2,419,200 seconds, 30-day months have 2,592,000 seconds, and 31-day months have 2,678,400 seconds. The average month has approximately 2,628,000 seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many seconds are in a leap year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A leap year has 31,622,400 seconds (366 × 24 × 3,600). That is 86,400 more seconds than a regular year — exactly one extra day\'s worth. The next leap year is 2028.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Many Seconds in a Year? 31,536,000 Explained',
  description:
    'A regular year has 31,536,000 seconds (365 × 24 × 3,600). A leap year has 31,622,400 seconds. Full breakdown with monthly table and time unit comparisons.',
  url: 'https://whattime.city/articles/how-many-seconds-in-a-year/',
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
      name: 'How Many Seconds in a Year?',
      item: 'https://whattime.city/articles/how-many-seconds-in-a-year/',
    },
  ],
}

export default function HowManySecondsInAYearPage() {
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
            <li className="text-slate-700">How Many Seconds in a Year?</li>
          </ol>
        </nav>

        {/* H1 */}
        <h1 className="mb-4 text-3xl font-bold text-slate-800 sm:text-4xl">
          How Many Seconds in a Year?
        </h1>

        {/* Featured snippet paragraph */}
        <p className="mb-8 text-lg text-slate-700 leading-relaxed">
          There are <strong className="text-slate-800">31,536,000 seconds</strong> in a regular
          year (365 &times; 24 &times; 3,600). In a leap year, there are{' '}
          <strong className="text-slate-800">31,622,400 seconds</strong> (366 &times; 86,400).
          The leap year adds exactly <strong>86,400 more seconds</strong> — one full day.
        </p>

        {/* Section 1: Quick Answer */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Quick Answer</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                Regular Year (e.g. 2026)
              </p>
              <p className="text-3xl font-bold text-slate-800 tabular-nums">31,536,000</p>
              <p className="mt-1 text-sm text-slate-600">seconds (365 &times; 86,400)</p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1">
                Leap Year (e.g. 2028)
              </p>
              <p className="text-3xl font-bold text-blue-700 tabular-nums">31,622,400</p>
              <p className="mt-1 text-sm text-blue-600">seconds (366 &times; 86,400)</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <strong>Tropical year:</strong> Earth&apos;s actual orbital period is 365.2422 days,
            or approximately <strong>31,556,925 seconds</strong>. The Gregorian calendar rounds to
            365 days and compensates with leap years every 4 years (with century exceptions).
          </div>
        </section>

        {/* Section 2: Calculation */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">How to Calculate Seconds in a Year</h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Start from the smallest unit and multiply up:
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-4">
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-600">1</span>
                <span><strong>60 seconds</strong> = 1 minute</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-600">2</span>
                <span><strong>60 &times; 60 = 3,600 seconds</strong> = 1 hour</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-600">3</span>
                <span><strong>3,600 &times; 24 = 86,400 seconds</strong> = 1 day</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-600">4</span>
                <span><strong>86,400 &times; 365 = 31,536,000 seconds</strong> = 1 regular year</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-600">5</span>
                <span><strong>86,400 &times; 366 = 31,622,400 seconds</strong> = 1 leap year</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Year-by-Year Table */}
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
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Seconds</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [2024, true, 366, 31622400],
                  [2025, false, 365, 31536000],
                  [2026, false, 365, 31536000],
                  [2027, false, 365, 31536000],
                  [2028, true, 366, 31622400],
                  [2029, false, 365, 31536000],
                  [2030, false, 365, 31536000],
                ].map(([year, isLeap, days, seconds], idx) => (
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
                    <td className="px-4 py-3 text-right font-semibold tabular-nums text-slate-800">{(seconds as number).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Seconds Per Month */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Seconds Per Month</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Month(s)</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Days</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Hours</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Seconds</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['February (common year)', 28, 672, 2419200],
                  ['February (leap year)', 29, 696, 2505600],
                  ['April, June, Sep, Nov', 30, 720, 2592000],
                  ['Jan, Mar, May, Jul, Aug, Oct, Dec', 31, 744, 2678400],
                ].map(([month, days, hours, seconds], idx) => (
                  <tr
                    key={month as string}
                    className={`border-b border-slate-100 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className="px-4 py-3 text-slate-800">{month}</td>
                    <td className="px-4 py-3 text-right tabular-nums text-slate-700">{days}</td>
                    <td className="px-4 py-3 text-right tabular-nums text-slate-700">{(hours as number).toLocaleString()}</td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums text-slate-800">{(seconds as number).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Average month: ~2,628,000 seconds (31,536,000 &divide; 12).
          </p>
        </section>

        {/* Section 5: Time unit comparisons */}
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-slate-800">Seconds in Other Time Units</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Unit</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Seconds</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">Calculation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1 minute', '60', '60'],
                  ['1 hour', '3,600', '60 × 60'],
                  ['1 day', '86,400', '24 × 3,600'],
                  ['1 week', '604,800', '7 × 86,400'],
                  ['1 month (30 days)', '2,592,000', '30 × 86,400'],
                  ['1 year (regular)', '31,536,000', '365 × 86,400'],
                  ['1 year (leap)', '31,622,400', '366 × 86,400'],
                  ['10 years (avg)', '315,576,000', '365.25 × 86,400 × 10'],
                ].map(([unit, seconds, calc], idx) => (
                  <tr
                    key={unit as string}
                    className={`border-b border-slate-100 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className="px-4 py-3 text-slate-800">{unit}</td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums text-slate-800">{seconds}</td>
                    <td className="px-4 py-3 text-right tabular-nums text-slate-500">{calc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Interesting context */}
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-slate-800">
            What Can You Do in 31,536,000 Seconds?
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            To put 31.5 million seconds in perspective:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: 'Heart beats', value: '~42 million', note: 'at 80 bpm resting rate' },
              { label: 'Earth rotations', value: '365', note: 'one per day' },
              { label: 'Moon cycles', value: '~12.4', note: 'lunar month ≈ 29.5 days' },
              { label: 'Light-travel distance', value: '9.46 trillion km', note: 'one light-year' },
            ].map(item => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">{item.label}</p>
                <p className="text-xl font-bold text-slate-800">{item.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: FAQ */}
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
              <a href="/articles/how-many-hours-in-a-year/" className="text-blue-600 underline hover:text-blue-800">
                How Many Hours in a Year? — 8,760 Hours
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
              <a href="/timer/" className="text-blue-600 underline hover:text-blue-800">
                Online Timer — Countdown &amp; Stopwatch
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
          Last updated March 2026. Calculations based on the Gregorian calendar (365 days for
          regular years, 366 for leap years). Tropical year value per the International Astronomical
          Union (365.2422 days = 31,556,925 seconds).
        </footer>
      </article>
    </ContentPageWrapper>
  )
}
