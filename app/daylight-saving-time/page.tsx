import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Daylight Saving Time 2026 — Dates, Countries & Clock Changes',
  description: 'When does daylight saving time start and end in 2026? Get exact DST dates for the US, UK, EU, Australia, and every country. Spring forward, fall back explained.',
  alternates: {
    canonical: 'https://whattime.city/daylight-saving-time',
  },
  openGraph: {
    title: 'Daylight Saving Time 2026 — Dates & Countries',
    description: 'Exact DST start and end dates for 2026. US, UK, EU, Australia and more. Never be caught off guard by a clock change again.',
    type: 'website',
    url: 'https://whattime.city/daylight-saving-time',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daylight Saving Time 2026 — Dates & Countries',
    description: 'When do clocks change in 2026? DST dates for every country.',
  },
}

// DST data for 2026
const dstData = {
  northAmerica: {
    region: 'United States & Canada',
    springForward: 'March 8, 2026',
    fallBack: 'November 1, 2026',
    rule: 'Second Sunday in March → First Sunday in November',
    change: '+1 hour (clocks spring forward at 2:00 AM)',
    exceptions: 'Arizona (except Navajo Nation), Hawaii, Puerto Rico, US territories do not observe DST.',
  },
  europe: {
    region: 'European Union & UK',
    springForward: 'March 29, 2026',
    fallBack: 'October 25, 2026',
    rule: 'Last Sunday in March → Last Sunday in October',
    change: '+1 hour (clocks spring forward at 1:00 AM UTC)',
    notes: 'UK follows the same dates as EU post-Brexit. EU has been considering abolishing DST since 2019 but no final decision has been made.',
  },
  australia: {
    region: 'Australia (DST states)',
    springForward: 'October 4, 2026',
    fallBack: 'April 5, 2026',
    rule: 'First Sunday in October → First Sunday in April (Southern Hemisphere — reversed)',
    change: '+1 hour',
    exceptions: 'Queensland, Western Australia, Northern Territory, and most of South Australia do not observe DST.',
  },
  newZealand: {
    region: 'New Zealand',
    springForward: 'September 27, 2026',
    fallBack: 'April 5, 2026',
    rule: 'Last Sunday in September → First Sunday in April',
    change: '+1 hour',
  },
  mexico: {
    region: 'Mexico',
    springForward: 'April 5, 2026',
    fallBack: 'October 25, 2026',
    rule: 'First Sunday in April → Last Sunday in October',
    change: '+1 hour',
    exceptions: 'Sonora, most of Quintana Roo, and some border regions do not observe DST.',
  },
  chile: {
    region: 'Chile',
    springForward: 'September 6, 2026',
    fallBack: 'April 5, 2026',
    rule: 'First Saturday in September (midnight) → First Saturday in April (midnight)',
    change: '+1 hour',
  },
}

const noObserveDST = [
  { name: 'Japan', timezone: 'JST (UTC+9)' },
  { name: 'China', timezone: 'CST (UTC+8)' },
  { name: 'India', timezone: 'IST (UTC+5:30)' },
  { name: 'Singapore', timezone: 'SGT (UTC+8)' },
  { name: 'United Arab Emirates', timezone: 'GST (UTC+4)' },
  { name: 'Saudi Arabia', timezone: 'AST (UTC+3)' },
  { name: 'Russia', timezone: 'MSK (UTC+3) and others' },
  { name: 'Brazil', timezone: 'BRT (UTC-3)' },
  { name: 'South Africa', timezone: 'SAST (UTC+2)' },
  { name: 'Egypt', timezone: 'EET (UTC+2)' },
  { name: 'Nigeria', timezone: 'WAT (UTC+1)' },
  { name: 'Thailand', timezone: 'ICT (UTC+7)' },
  { name: 'Indonesia', timezone: 'WIB/WITA/WIT' },
  { name: 'Philippines', timezone: 'PST (UTC+8)' },
  { name: 'Pakistan', timezone: 'PKT (UTC+5)' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When does daylight saving time start in 2026 in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daylight Saving Time begins in the United States on Sunday, March 8, 2026. Clocks spring forward 1 hour at 2:00 AM local time.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does daylight saving time end in 2026 in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daylight Saving Time ends in the United States on Sunday, November 1, 2026. Clocks fall back 1 hour at 2:00 AM local time, returning to standard time.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do clocks change in the UK in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the UK, clocks go forward on March 29, 2026 (British Summer Time begins) and go back on October 25, 2026 (GMT resumes). Changes happen at 1:00 AM GMT.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do clocks change in Europe in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the European Union, clocks spring forward on March 29, 2026 at 1:00 AM UTC (Central European Summer Time begins). Clocks fall back on October 25, 2026 at 1:00 AM UTC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the US still observe daylight saving time in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the United States continues to observe Daylight Saving Time in 2026. The Sunshine Protection Act, which would have made DST permanent, has not been enacted into law. DST runs from March 8 to November 1, 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries do not observe daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of Asia, Africa, and parts of South America do not observe DST. This includes Japan, China, India, Singapore, UAE, Russia (abolished DST in 2014), Brazil (abolished in 2019), and most countries near the equator where daylight hours vary little throughout the year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do we observe daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daylight Saving Time was introduced to make better use of daylight during longer summer days, originally to conserve energy (less artificial lighting needed in the evening). Today, energy savings are disputed by research, but DST remains in place in many countries due to economic and social inertia.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does Australia change its clocks in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Australia, DST-observing states (NSW, Victoria, Tasmania, South Australia, ACT) set clocks forward on October 4, 2026 and back on April 5, 2026. Queensland, Western Australia, and Northern Territory do not observe DST.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Daylight Saving Time 2026 — Dates, Countries & Clock Changes',
  description: 'Complete guide to DST dates in 2026 for every country, including US, UK, EU, Australia, and New Zealand.',
  url: 'https://whattime.city/daylight-saving-time',
  datePublished: '2026-01-01',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'whattime.city' },
  publisher: {
    '@type': 'Organization',
    name: 'whattime.city',
    url: 'https://whattime.city',
  },
}

export default function DaylightSavingTimePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-800 dark:text-white">
          Daylight Saving Time 2026
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Exact dates for when clocks change in 2026 — United States, UK, Europe, Australia, and every other region.
        </p>

        {/* Quick Reference Table */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">
            2026 DST Dates at a Glance
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th className="text-left px-4 py-3 text-slate-700 dark:text-slate-300 font-semibold">Region</th>
                  <th className="text-left px-4 py-3 text-slate-700 dark:text-slate-300 font-semibold">Clocks Forward</th>
                  <th className="text-left px-4 py-3 text-slate-700 dark:text-slate-300 font-semibold">Clocks Back</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">United States & Canada</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-medium">March 8, 2026</td>
                  <td className="px-4 py-3 text-amber-600 dark:text-amber-400 font-medium">November 1, 2026</td>
                </tr>
                <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">European Union & UK</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-medium">March 29, 2026</td>
                  <td className="px-4 py-3 text-amber-600 dark:text-amber-400 font-medium">October 25, 2026</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Australia (DST states)</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-medium">October 4, 2026</td>
                  <td className="px-4 py-3 text-amber-600 dark:text-amber-400 font-medium">April 5, 2026</td>
                </tr>
                <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">New Zealand</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-medium">September 27, 2026</td>
                  <td className="px-4 py-3 text-amber-600 dark:text-amber-400 font-medium">April 5, 2026</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Mexico</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-medium">April 5, 2026</td>
                  <td className="px-4 py-3 text-amber-600 dark:text-amber-400 font-medium">October 25, 2026</td>
                </tr>
                <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Chile</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-medium">September 6, 2026</td>
                  <td className="px-4 py-3 text-amber-600 dark:text-amber-400 font-medium">April 5, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* US & Canada */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-white">
            United States & Canada — DST 2026
          </h2>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-1">Spring Forward</div>
                <div className="text-xl font-bold text-slate-800 dark:text-white">March 8, 2026</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">2:00 AM → 3:00 AM</div>
              </div>
              <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <div className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-1">Fall Back</div>
                <div className="text-xl font-bold text-slate-800 dark:text-white">November 1, 2026</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">2:00 AM → 1:00 AM</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong className="text-slate-700 dark:text-slate-300">Rule:</strong> {dstData.northAmerica.rule}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              <strong className="text-slate-700 dark:text-slate-300">Exceptions:</strong> {dstData.northAmerica.exceptions}
            </p>
          </div>
        </section>

        {/* UK & Europe */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-white">
            United Kingdom & Europe — DST 2026
          </h2>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-1">Spring Forward (BST / CEST begins)</div>
                <div className="text-xl font-bold text-slate-800 dark:text-white">March 29, 2026</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">1:00 AM UTC → 2:00 AM UTC</div>
              </div>
              <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <div className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-1">Fall Back (GMT / CET resumes)</div>
                <div className="text-xl font-bold text-slate-800 dark:text-white">October 25, 2026</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">2:00 AM UTC → 1:00 AM UTC</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong className="text-slate-700 dark:text-slate-300">Rule:</strong> {dstData.europe.rule}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              <strong className="text-slate-700 dark:text-slate-300">Note:</strong> {dstData.europe.notes}
            </p>
          </div>
        </section>

        {/* Australia & NZ */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-white">
            Australia & New Zealand — DST 2026
          </h2>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900 mb-3">
            <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Australia (NSW, Victoria, Tasmania, South Australia, ACT)</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-1">Spring Forward</div>
                <div className="text-xl font-bold text-slate-800 dark:text-white">October 4, 2026</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">2:00 AM → 3:00 AM</div>
              </div>
              <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <div className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-1">Fall Back</div>
                <div className="text-xl font-bold text-slate-800 dark:text-white">April 5, 2026</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">3:00 AM → 2:00 AM</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong className="text-slate-700 dark:text-slate-300">Exceptions:</strong> Queensland, Western Australia, and Northern Territory do not observe DST.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900">
            <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">New Zealand</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-1">Spring Forward</div>
                <div className="text-xl font-bold text-slate-800 dark:text-white">September 27, 2026</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">2:00 AM → 3:00 AM NZST</div>
              </div>
              <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <div className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-1">Fall Back</div>
                <div className="text-xl font-bold text-slate-800 dark:text-white">April 5, 2026</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">3:00 AM → 2:00 AM NZST</div>
              </div>
            </div>
          </div>
        </section>

        {/* Countries without DST */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-white">
            Countries That Do Not Observe DST
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            About 70% of the world does not observe Daylight Saving Time. Most of Asia, Africa, and equatorial regions keep a fixed UTC offset year-round.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {noObserveDST.map((country) => (
              <div
                key={country.name}
                className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{country.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{country.timezone}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why DST */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-white">
            Why Does Daylight Saving Time Exist?
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 mb-3">
              DST was first introduced widely during World War I to conserve coal by reducing the need for artificial lighting in the evening. Germany adopted it first in April 1916, and most of Europe and North America followed within months.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-3">
              The modern US DST schedule — second Sunday in March to first Sunday in November — was established by the Energy Policy Act of 2005. The EU uses the last Sunday in March and last Sunday in October.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              The claimed energy savings are contested by modern research. However, DST persists because changing it requires international coordination and political consensus. The EU voted to end DST in 2019 but implementation has been delayed indefinitely.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'When do clocks spring forward in the US in 2026?',
                a: 'Clocks spring forward on Sunday, March 8, 2026 at 2:00 AM local time. You lose 1 hour of sleep but gain an hour of evening daylight.',
              },
              {
                q: 'When do clocks fall back in the US in 2026?',
                a: 'Clocks fall back on Sunday, November 1, 2026 at 2:00 AM local time. You gain 1 hour of sleep as standard time resumes.',
              },
              {
                q: 'Is daylight saving time still happening in 2026?',
                a: 'Yes. Despite ongoing debate, the US, EU, UK, Australia, and other regions continue to observe DST in 2026. No legislation to permanently end it has been enacted.',
              },
              {
                q: 'Why are US and EU DST dates different?',
                a: 'The US and EU use different rules. The US switches on the second Sunday in March and first Sunday in November. The EU uses the last Sunday in March and October. This creates a 3-week window (March 8–29) and a 4-week window (October 25 – November 1) where the US–Europe time difference shifts by 1 hour.',
              },
              {
                q: 'What states don\'t observe daylight saving time?',
                a: 'Arizona (except the Navajo Nation), Hawaii, and all US territories (Puerto Rico, US Virgin Islands, Guam, American Samoa, Northern Mariana Islands) do not observe DST.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900"
              >
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Tools CTA */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/time-converter"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-sky-300 dark:hover:border-sky-600 transition-colors"
            >
              <div className="font-medium text-slate-800 dark:text-white">Time Converter</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Convert between any two cities</div>
            </Link>
            <Link
              href="/meeting"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-sky-300 dark:hover:border-sky-600 transition-colors"
            >
              <div className="font-medium text-slate-800 dark:text-white">Meeting Planner</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Find overlapping business hours</div>
            </Link>
            <Link
              href="/"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-sky-300 dark:hover:border-sky-600 transition-colors"
            >
              <div className="font-medium text-slate-800 dark:text-white">World Clock</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Current time in 400+ cities</div>
            </Link>
          </div>
        </section>

        {/* E-E-A-T Footer */}
        <footer className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800/30">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>
              DST rules sourced from{' '}
              <a
                href="https://www.iana.org/time-zones"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                IANA Time Zone Database
              </a>
            </span>
            <span>Last updated: March 2026 · Verified by WhatTime.city Editorial Team</span>
          </div>
        </footer>
      </main>
    </>
  )
}
