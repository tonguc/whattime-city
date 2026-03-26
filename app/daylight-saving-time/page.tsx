import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'

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

const dstData = {
  northAmerica: {
    rule: 'Second Sunday in March → First Sunday in November',
    exceptions: 'Arizona (except Navajo Nation), Hawaii, Puerto Rico, US territories do not observe DST.',
  },
  europe: {
    rule: 'Last Sunday in March → Last Sunday in October',
    notes: 'UK follows the same dates as EU post-Brexit. EU has been considering abolishing DST since 2019 but no final decision has been made.',
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

const card = 'rounded-2xl border border-slate-200 bg-white'

export default function DaylightSavingTimePage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Page Hero */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-800">
          Daylight Saving Time 2026
        </h1>
        <p className="text-lg text-slate-600">
          Exact dates for when clocks change in 2026 — United States, UK, Europe, Australia, and every other region.
        </p>
      </div>

      {/* Quick Reference Table */}
      <section className="mb-4">
        <div className={`${card} overflow-hidden`}>
          <div className="px-6 pt-6 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800">2026 DST Dates at a Glance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-6 py-3 text-slate-700 font-semibold">Region</th>
                  <th className="text-left px-6 py-3 text-slate-700 font-semibold">Clocks Forward</th>
                  <th className="text-left px-6 py-3 text-slate-700 font-semibold">Clocks Back</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-3 text-slate-700 font-medium">United States & Canada</td>
                  <td className="px-6 py-3 text-emerald-600 font-medium">March 8, 2026</td>
                  <td className="px-6 py-3 text-amber-600 font-medium">November 1, 2026</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-6 py-3 text-slate-700 font-medium">European Union & UK</td>
                  <td className="px-6 py-3 text-emerald-600 font-medium">March 29, 2026</td>
                  <td className="px-6 py-3 text-amber-600 font-medium">October 25, 2026</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-700 font-medium">Australia (DST states)</td>
                  <td className="px-6 py-3 text-emerald-600 font-medium">October 4, 2026</td>
                  <td className="px-6 py-3 text-amber-600 font-medium">April 5, 2026</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-6 py-3 text-slate-700 font-medium">New Zealand</td>
                  <td className="px-6 py-3 text-emerald-600 font-medium">September 27, 2026</td>
                  <td className="px-6 py-3 text-amber-600 font-medium">April 5, 2026</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-700 font-medium">Mexico</td>
                  <td className="px-6 py-3 text-emerald-600 font-medium">April 5, 2026</td>
                  <td className="px-6 py-3 text-amber-600 font-medium">October 25, 2026</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-6 py-3 text-slate-700 font-medium">Chile</td>
                  <td className="px-6 py-3 text-emerald-600 font-medium">September 6, 2026</td>
                  <td className="px-6 py-3 text-amber-600 font-medium">April 5, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* US & Canada */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className="text-xl font-semibold mb-4 text-slate-800">United States & Canada — DST 2026</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-xs font-medium text-emerald-600 uppercase tracking-wide mb-1">Spring Forward</div>
              <div className="text-xl font-bold text-slate-800">March 8, 2026</div>
              <div className="text-sm text-slate-600 mt-1">2:00 AM → 3:00 AM</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
              <div className="text-xs font-medium text-amber-600 uppercase tracking-wide mb-1">Fall Back</div>
              <div className="text-xl font-bold text-slate-800">November 1, 2026</div>
              <div className="text-sm text-slate-600 mt-1">2:00 AM → 1:00 AM</div>
            </div>
          </div>
          <p className="text-sm text-slate-600">
            <strong className="text-slate-700">Rule:</strong> {dstData.northAmerica.rule}
          </p>
          <p className="text-sm text-slate-600 mt-2">
            <strong className="text-slate-700">Exceptions:</strong> {dstData.northAmerica.exceptions}
          </p>
        </div>
      </section>

      {/* UK & Europe */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className="text-xl font-semibold mb-4 text-slate-800">United Kingdom & Europe — DST 2026</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-xs font-medium text-emerald-600 uppercase tracking-wide mb-1">Spring Forward (BST / CEST begins)</div>
              <div className="text-xl font-bold text-slate-800">March 29, 2026</div>
              <div className="text-sm text-slate-600 mt-1">1:00 AM UTC → 2:00 AM UTC</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
              <div className="text-xs font-medium text-amber-600 uppercase tracking-wide mb-1">Fall Back (GMT / CET resumes)</div>
              <div className="text-xl font-bold text-slate-800">October 25, 2026</div>
              <div className="text-sm text-slate-600 mt-1">2:00 AM UTC → 1:00 AM UTC</div>
            </div>
          </div>
          <p className="text-sm text-slate-600">
            <strong className="text-slate-700">Rule:</strong> {dstData.europe.rule}
          </p>
          <p className="text-sm text-slate-600 mt-2">
            <strong className="text-slate-700">Note:</strong> {dstData.europe.notes}
          </p>
        </div>
      </section>

      {/* Australia & NZ */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className="text-xl font-semibold mb-4 text-slate-800">Australia & New Zealand — DST 2026</h2>
          <div className="mb-4 pb-4 border-b border-slate-100">
            <h3 className="font-semibold text-slate-700 mb-3">Australia (NSW, Victoria, Tasmania, South Australia, ACT)</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-3">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <div className="text-xs font-medium text-emerald-600 uppercase tracking-wide mb-1">Spring Forward</div>
                <div className="text-xl font-bold text-slate-800">October 4, 2026</div>
                <div className="text-sm text-slate-600 mt-1">2:00 AM → 3:00 AM</div>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <div className="text-xs font-medium text-amber-600 uppercase tracking-wide mb-1">Fall Back</div>
                <div className="text-xl font-bold text-slate-800">April 5, 2026</div>
                <div className="text-sm text-slate-600 mt-1">3:00 AM → 2:00 AM</div>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              <strong className="text-slate-700">Exceptions:</strong> Queensland, Western Australia, and Northern Territory do not observe DST.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-700 mb-3">New Zealand</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <div className="text-xs font-medium text-emerald-600 uppercase tracking-wide mb-1">Spring Forward</div>
                <div className="text-xl font-bold text-slate-800">September 27, 2026</div>
                <div className="text-sm text-slate-600 mt-1">2:00 AM → 3:00 AM NZST</div>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <div className="text-xs font-medium text-amber-600 uppercase tracking-wide mb-1">Fall Back</div>
                <div className="text-xl font-bold text-slate-800">April 5, 2026</div>
                <div className="text-sm text-slate-600 mt-1">3:00 AM → 2:00 AM NZST</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries without DST */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className="text-xl font-semibold mb-2 text-slate-800">Countries That Do Not Observe DST</h2>
          <p className="text-slate-600 mb-4 text-sm">
            About 70% of the world does not observe Daylight Saving Time. Most of Asia, Africa, and equatorial regions keep a fixed UTC offset year-round.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {noObserveDST.map((country) => (
              <div
                key={country.name}
                className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
              >
                <div className="text-sm font-medium text-slate-700">{country.name}</div>
                <div className="text-xs text-slate-500">{country.timezone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DST */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className="text-xl font-semibold mb-4 text-slate-800">Why Does Daylight Saving Time Exist?</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              DST was first introduced widely during World War I to conserve coal by reducing the need for artificial lighting in the evening. Germany adopted it first in April 1916, and most of Europe and North America followed within months.
            </p>
            <p>
              The modern US DST schedule — second Sunday in March to first Sunday in November — was established by the Energy Policy Act of 2005. The EU uses the last Sunday in March and last Sunday in October.
            </p>
            <p>
              The claimed energy savings are contested by modern research. However, DST persists because changing it requires international coordination and political consensus. The EU voted to end DST in 2019 but implementation has been delayed indefinitely.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className="text-xl font-semibold mb-4 text-slate-800">Frequently Asked Questions</h2>
          <div className="space-y-3">
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
                q: "What states don't observe daylight saving time?",
                a: 'Arizona (except the Navajo Nation), Hawaii, and all US territories (Puerto Rico, US Virgin Islands, Guam, American Samoa, Northern Mariana Islands) do not observe DST.',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-800 mb-1 text-sm">{item.q}</h3>
                <p className="text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region sub-pages */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className="text-xl font-semibold mb-4 text-slate-800">DST Guides by Region</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'United States', href: '/daylight-saving-time/usa/', sub: 'Mar 8 – Nov 1' },
              { label: 'Canada', href: '/daylight-saving-time/canada/', sub: 'Mar 8 – Nov 1' },
              { label: 'United Kingdom', href: '/daylight-saving-time/uk/', sub: 'Mar 29 – Oct 25' },
              { label: 'Europe', href: '/daylight-saving-time/europe/', sub: 'Mar 29 – Oct 25' },
              { label: 'Australia', href: '/daylight-saving-time/australia/', sub: 'Oct 4 – Apr 5' },
              { label: 'New Zealand', href: '/daylight-saving-time/new-zealand/', sub: 'Sep 27 – Apr 5' },
              { label: 'Mexico', href: '/daylight-saving-time/mexico/', sub: 'Mostly abolished 2022' },
              { label: 'All Countries', href: '/daylight-saving-time/countries/', sub: 'Full country list' },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-sky-300 hover:bg-sky-50 transition-colors"
              >
                <div className="font-medium text-slate-700 text-sm">{r.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{r.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className="text-xl font-semibold mb-4 text-slate-800">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/time-converter" className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-sky-300 transition-colors">
              <div className="font-medium text-slate-800 text-sm">Time Converter</div>
              <div className="text-xs text-slate-500 mt-1">Convert between any two cities</div>
            </Link>
            <Link href="/meeting" className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-sky-300 transition-colors">
              <div className="font-medium text-slate-800 text-sm">Meeting Planner</div>
              <div className="text-xs text-slate-500 mt-1">Find overlapping business hours</div>
            </Link>
            <Link href="/" className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-sky-300 transition-colors">
              <div className="font-medium text-slate-800 text-sm">World Clock</div>
              <div className="text-xs text-slate-500 mt-1">Current time in 400+ cities</div>
            </Link>
          </div>
        </div>
      </section>

      {/* E-E-A-T Footer */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-500">
          <span>
            DST rules sourced from{' '}
            <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
              IANA Time Zone Database
            </a>
          </span>
          <span>Last updated: March 2026 · Verified by WhatTime.city Editorial Team</span>
        </div>
      </div>
    </ContentPageWrapper>
  )
}
