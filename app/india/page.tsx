import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import IndiaClockClient from './IndiaClockClient'

export const metadata: Metadata = {
  title: 'Time in India Now — India Standard Time (IST, UTC+5:30)',
  description:
    'What is the current time in India? India uses IST (UTC+5:30) year-round — no Daylight Saving Time. Live clock, India time vs US/UK/Dubai/Singapore, and best time to call India.',
  keywords: [
    'time in india',
    'india time now',
    'india time',
    'india standard time',
    'IST time zone',
    'current time in india',
    'india time zone utc',
    'india clock',
    'what time is it in india',
    'india time vs est',
    'india time vs uk',
    'time difference india usa',
  ],
  alternates: {
    canonical: 'https://whattime.city/india/',
  },
  openGraph: {
    title: 'Current Time in India — IST (UTC+5:30)',
    description:
      'Live India Standard Time clock. IST is UTC+5:30 — India does not observe Daylight Saving Time. Check India time vs US, UK, Dubai, Singapore and more.',
    type: 'website',
    url: 'https://whattime.city/india/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in India Now — IST UTC+5:30',
    description:
      'Live India Standard Time. IST is UTC+5:30. India has one time zone and no DST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in India right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India uses India Standard Time (IST), which is UTC+5:30. The live clock at the top of this page shows the exact current time in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is India\'s time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India uses a single time zone called India Standard Time (IST), which is UTC+5:30. It is one of the few time zones in the world with a 30-minute offset from UTC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does India observe Daylight Saving Time (DST)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. India does not observe Daylight Saving Time. IST is fixed at UTC+5:30 year-round, making it one of the most consistent time zones for international scheduling.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many time zones does India have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India has exactly one time zone — IST (UTC+5:30) — used across the entire country, from Kashmir in the north to Kanyakumari in the south. This is notable for a country of India\'s geographic size.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between India and the US (EST)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IST is 10 hours 30 minutes ahead of US Eastern Standard Time (EST). During US Eastern Daylight Time (EDT), the difference is 9 hours 30 minutes. When it is 9:00 AM EST, it is 7:30 PM IST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between India and the UK (GMT)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IST is 5 hours 30 minutes ahead of UK GMT. During British Summer Time (BST, UTC+1), IST is 4 hours 30 minutes ahead. When it is 9:00 AM GMT, it is 2:30 PM IST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call India from the United States?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From US Eastern time (EST), the best window to reach India during business hours is 8:00 AM to 11:30 AM EST — which corresponds to 6:30 PM to 10:00 PM IST. From US Pacific time (PST), try 5:00 AM to 8:30 AM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does India use a 30-minute offset (UTC+5:30)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India\'s UTC+5:30 offset was established during British colonial rule to approximate the midpoint of the country\'s longitude, which spans roughly 68°E to 97°E. A whole-hour offset of UTC+5 or UTC+6 would put either the east or west significantly off solar noon.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in India', item: 'https://whattime.city/india/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function IndiaTimePage() {
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

      {/* Page header */}
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in India
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        India Standard Time (IST) · UTC+5:30 · No Daylight Saving Time
      </p>

      {/* Live clock + comparisons (client) */}
      <IndiaClockClient />

      {/* IST Explained */}
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">India Standard Time (IST) Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              India uses a single national time zone: <strong>India Standard Time (IST)</strong>, which is
              UTC+5:30. This makes IST one of only a handful of time zones worldwide with a 30-minute
              offset from UTC — most countries use whole-hour offsets.
            </p>
            <p>
              <strong>India does not observe Daylight Saving Time.</strong> IST remains fixed at UTC+5:30
              throughout the year. This means the time difference between India and DST-observing countries
              like the US, UK, and EU fluctuates by one hour between summer and winter — but India itself
              never changes its clocks.
            </p>
            <p>
              Despite spanning over 29 degrees of longitude (roughly the same as the continental United
              States), India uses just one time zone for the entire country. This is a deliberate policy
              choice to maintain national unity — though it means sunrise and sunset times vary
              significantly across regions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { label: 'Time Zone', value: 'IST' },
                { label: 'UTC Offset', value: 'UTC+5:30' },
                { label: 'Daylight Saving', value: 'No DST' },
                { label: 'Number of TZs', value: '1 (nationwide)' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-slate-50 p-3 text-center">
                  <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                  <div className="font-bold text-slate-800 text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IST Quick Reference Table */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">IST Quick Reference — When it is noon in India</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when IST = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'New York', tz: 'EST (UTC-5)', local: '1:30 AM (prev. day)', dst: '2:30 AM EDT in summer' },
                  { city: 'Los Angeles', tz: 'PST (UTC-8)', local: '10:30 PM (prev. day)', dst: '11:30 PM PDT in summer' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '6:30 AM', dst: '7:30 AM BST in summer' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '7:30 AM', dst: '8:30 AM CEST in summer' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '10:30 AM', dst: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '2:30 PM', dst: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '3:30 PM', dst: 'No DST' },
                  { city: 'Sydney', tz: 'AEST (UTC+10)', local: '4:30 PM', dst: '5:30 PM AEDT in summer' },
                ].map((row) => (
                  <tr key={row.city}>
                    <td className="py-2 pr-4 font-medium text-slate-700">{row.city}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.tz}</td>
                    <td className="py-2 text-slate-700">
                      {row.local}
                      {row.dst !== 'No DST' && (
                        <span className="ml-2 text-xs text-slate-400">({row.dst})</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">India City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'New Delhi time', href: '/delhi/' },
              { label: 'Mumbai time', href: '/mumbai/' },
              { label: 'Bangalore time', href: '/bangalore/' },
              { label: 'Chennai time', href: '/chennai/' },
              { label: 'Kolkata time', href: '/kolkata/' },
              { label: 'IST to EST converter', href: '/ist-to-est/' },
              { label: 'IST to GMT converter', href: '/est-to-gmt/' },
              { label: 'India time zone info', href: '/country/india/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database.
        India Standard Time (IST) = Asia/Kolkata.
      </footer>
    </ContentPageWrapper>
  )
}
