import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import UKClockClient from './UKClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in the UK Now — GMT/BST (UTC+0/+1) · London, Manchester, Edinburgh',
  description:
    'What time is it in the UK right now? The UK uses GMT (UTC+0) in winter and BST (UTC+1) during British Summer Time. Live London clock, UK vs US/Europe/Asia, and best time to call.',
  keywords: [
    'time in the uk',
    'uk time now',
    'what time is it in the uk',
    'uk time',
    'current time in uk',
    'uk time zone',
    'GMT time zone',
    'BST time zone',
    'british summer time',
    'greenwich mean time',
    'london time now',
    'uk time vs est',
    'uk time vs pst',
    'time difference uk usa',
    'uk gmt utc offset',
    'uk time right now',
    'england time now',
    'britain time zone',
  ],
  alternates: {
    canonical: 'https://whattime.city/uk/',
  },
  openGraph: {
    title: 'Current Time in the UK — GMT/BST (UTC+0/+1)',
    description:
      'Live UK / London time clock. GMT is UTC+0 in winter; BST is UTC+1 during British Summer Time (late March–late October). Check UK time vs US, Europe, and Asia.',
    type: 'website',
    url: 'https://whattime.city/uk/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in the UK Now — GMT/BST',
    description:
      'Live UK time. GMT (UTC+0) in winter, BST (UTC+1) in summer. London, Manchester, Birmingham, Edinburgh all share the same time zone.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in the UK right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The UK uses Greenwich Mean Time (GMT, UTC+0) in winter and British Summer Time (BST, UTC+1) from late March to late October. The live clock at the top of this page shows the exact current time in the UK. All major UK cities — London, Manchester, Birmingham, Leeds, Glasgow, and Edinburgh — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is the UK in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The UK uses Greenwich Mean Time (GMT, UTC+0) in winter and British Summer Time (BST, UTC+1) during summer. The IANA time zone identifier is Europe/London. Note: GMT and UTC are different standards but have the same numeric offset (UTC+0). The UK switches to BST on the last Sunday in March and returns to GMT on the last Sunday in October.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between GMT and BST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GMT (Greenwich Mean Time) is the UK\'s standard time in winter, at UTC+0. BST (British Summer Time) is the UK\'s daylight saving time in summer, at UTC+1 — one hour ahead of GMT. The switch happens on the last Sunday in March (clocks go forward) and the last Sunday in October (clocks go back). The phrase "spring forward, fall back" describes this change.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the UK and New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The UK (GMT/BST) is typically 5 hours ahead of New York (EST/EDT). In winter (GMT vs EST), London is 5 hours ahead. In summer (BST vs EDT), London is still 5 hours ahead, because both regions switch clocks at different but roughly offsetting times. There are a few weeks each spring and autumn when the gap is temporarily 4 or 6 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the UK and Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The UK is typically 8 hours ahead of Los Angeles. In winter (GMT vs PST), London is 8 hours ahead. In summer (BST vs PDT), London is 8 hours ahead. As with New York, there are brief windows in spring and autumn where the gap is 7 or 9 hours while only one region has switched clocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the UK observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The UK observes Daylight Saving Time under the name British Summer Time (BST). Clocks advance by 1 hour on the last Sunday in March and fall back on the last Sunday in October. There have been parliamentary debates about abolishing this practice, but as of 2026, the UK continues to observe BST.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do all UK cities have the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. England, Scotland, Wales, and Northern Ireland all use the same time zone (Europe/London). London, Manchester, Birmingham, Glasgow, Edinburgh, Cardiff, and Belfast are all on GMT in winter and BST in summer. There are no time zone boundaries within the United Kingdom.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the UK and India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India (IST, UTC+5:30) is 5 hours and 30 minutes ahead of the UK in winter (GMT). During British Summer Time (BST, UTC+1), India is 4 hours and 30 minutes ahead. IST never changes, so the UK–India gap oscillates between 4.5h and 5.5h depending on whether the UK is on GMT or BST.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in the UK', item: 'https://whattime.city/uk/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function UKTimePage() {
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

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in the UK
      </h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Greenwich Mean Time (GMT) · UTC+0 in winter · BST (UTC+1) during British Summer Time
      </p>

      <UKClockClient />
      <CountryFactsSection hubSlug="uk" />

      {/* GMT/BST Explained */}
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">UK Time Zones — GMT & BST Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              The United Kingdom uses <strong>Greenwich Mean Time (GMT, UTC+0)</strong> from late October
              to late March, and <strong>British Summer Time (BST, UTC+1)</strong> for the rest of the year.
              The switch happens on the last Sunday in March (clocks go forward 1 hour) and the last Sunday
              in October (clocks go back).
            </p>
            <p>
              <strong>GMT vs UTC:</strong> Greenwich Mean Time and Coordinated Universal Time (UTC) share
              the same numeric offset (UTC+0) but are different standards. UTC is the international atomic
              clock standard; GMT is a time zone designation used by the UK and several other countries.
              In everyday usage, GMT and UTC+0 are interchangeable.
            </p>
            <p>
              All four nations of the UK — <strong>England, Scotland, Wales, and Northern Ireland</strong> —
              observe the same time zone. There are no internal time zone splits. The Republic of Ireland
              (a separate country) also uses the same Europe/Dublin zone, which follows GMT/IST (Irish
              Standard Time) on the same schedule as GMT/BST.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">Period</th>
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">Abbreviation</th>
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">UTC Offset</th>
                    <th className="text-left py-2 font-medium text-slate-600">Dates (approx.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { period: 'Standard Time', abbr: 'GMT', utc: 'UTC+0', dates: 'Last Sun Oct → Last Sun Mar' },
                    { period: 'British Summer Time', abbr: 'BST', utc: 'UTC+1', dates: 'Last Sun Mar → Last Sun Oct' },
                  ].map((row) => (
                    <tr key={row.abbr}>
                      <td className="py-2 pr-4 font-medium text-slate-700">{row.period}</td>
                      <td className="py-2 pr-4 text-slate-500">{row.abbr}</td>
                      <td className="py-2 pr-4 text-slate-500">{row.utc}</td>
                      <td className="py-2 text-slate-600">{row.dates}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">GMT Quick Reference — When it is noon in London</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when GMT = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'New York', tz: 'EST (UTC−5)', local: '7:00 AM', dst: '8:00 AM EDT in summer' },
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '4:00 AM', dst: '5:00 AM PDT in summer' },
                  { city: 'Toronto', tz: 'EST (UTC−5)', local: '7:00 AM', dst: '8:00 AM EDT in summer' },
                  { city: 'Lagos (Nigeria)', tz: 'WAT (UTC+1)', local: '1:00 PM', dst: 'No DST' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '1:00 PM', dst: '2:00 PM CEST in summer' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '4:00 PM', dst: 'No DST' },
                  { city: 'Mumbai (IST)', tz: 'IST (UTC+5:30)', local: '5:30 PM', dst: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '8:00 PM', dst: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '9:00 PM', dst: 'No DST' },
                  { city: 'Sydney', tz: 'AEST (UTC+10)', local: '10:00 PM', dst: '11:00 PM AEDT in summer' },
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
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4">
                <div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div>
                <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">UK City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'London time', href: '/london/' },
              { label: 'Manchester time', href: '/manchester/' },
              { label: 'Birmingham time', href: '/birmingham/' },
              { label: 'Edinburgh time', href: '/edinburgh/' },
              { label: 'London → New York', href: '/time/london/new-york/' },
              { label: 'London → Los Angeles', href: '/time/london/los-angeles/' },
              { label: 'London → Mumbai', href: '/time/london/mumbai/' },
              { label: 'UK country info', href: '/country/united-kingdom/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database.
        UK: Europe/London (GMT UTC+0 / BST UTC+1). DST observed.
      </footer>
    </ContentPageWrapper>
  )
}
