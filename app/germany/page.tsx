import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import GermanyClockClient from './GermanyClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Germany Now — CET/CEST (UTC+1/+2) · Berlin, Munich, Hamburg',
  description:
    'What time is it in Germany right now? Germany uses CET (UTC+1) in winter and CEST (UTC+2) during Central European Summer Time. Live Berlin clock, Germany vs US/UK/Asia, and best time to call.',
  keywords: [
    'time in germany',
    'germany time now',
    'what time is it in germany',
    'germany time',
    'current time in germany',
    'germany time zone',
    'CET time zone',
    'CEST time zone',
    'central european time',
    'berlin time now',
    'munich time now',
    'germany time vs est',
    'germany time vs uk',
    'time difference germany usa',
    'germany utc offset',
    'germany time right now',
    'europe time zone germany',
  ],
  alternates: {
    canonical: 'https://whattime.city/germany/',
  },
  openGraph: {
    title: 'Current Time in Germany — CET/CEST (UTC+1/+2)',
    description:
      'Live Germany / Berlin time clock. CET is UTC+1 in winter; CEST is UTC+2 during Central European Summer Time. Check Germany time vs US, UK, and Asia.',
    type: 'website',
    url: 'https://whattime.city/germany/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Germany Now — CET/CEST',
    description:
      'Live Germany time. CET (UTC+1) in winter, CEST (UTC+2) in summer. Berlin, Munich, Hamburg, Frankfurt all share one time zone.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Germany right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Germany uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) from late March to late October. The live clock at the top of this page shows the current time in Germany. All cities — Berlin, Munich, Hamburg, Frankfurt, Cologne, Düsseldorf — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Germany in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Germany uses Central European Time (CET, UTC+1) in standard time and Central European Summer Time (CEST, UTC+2) during daylight saving. The IANA time zone identifier is Europe/Berlin. Germany shares this time zone with France, Italy, Spain, Poland, Austria, Switzerland, the Netherlands, Belgium, and most of continental Europe.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between CET and CEST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CET (Central European Time) is Germany\'s standard time at UTC+1, observed from late October to late March. CEST (Central European Summer Time) is UTC+2, observed from late March to late October. The switch follows the EU\'s harmonized Daylight Saving Time schedule: clocks spring forward on the last Sunday in March and fall back on the last Sunday in October.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Germany and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Germany (CET, UTC+1) is 6 hours ahead of New York (EST, UTC−5) and 9 hours ahead of Los Angeles (PST, UTC−8) in winter. During US Daylight Saving Time, the gap narrows to 5 hours vs New York (EDT) and 8 hours vs Los Angeles (PDT). When Germany is on CEST (UTC+2), the gap grows by 1 more hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Germany and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Germany is always 1 hour ahead of the UK. In winter, Germany is on CET (UTC+1) and the UK is on GMT (UTC+0). In summer, Germany is on CEST (UTC+2) and the UK is on BST (UTC+1). Because both countries switch clocks on the same schedule, the 1-hour gap is constant year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Germany observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Germany observes Daylight Saving Time as part of the EU\'s harmonized DST schedule. Clocks advance 1 hour on the last Sunday in March (CET to CEST) and fall back on the last Sunday in October (CEST to CET). The EU voted to abolish mandatory DST in 2019, but implementation has been stalled, and Germany continues to observe it as of 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Germany and India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India (IST, UTC+5:30) is 4 hours and 30 minutes ahead of Germany in winter (CET, UTC+1). During German summer time (CEST, UTC+2), India is 3 hours and 30 minutes ahead. India has no DST, so the Germany–India gap oscillates between 3.5h and 4.5h depending on whether Germany is on CET or CEST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What countries share Germany\'s time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Germany shares the CET/CEST time zone with France, Italy, Spain, Poland, Austria, Switzerland, the Netherlands, Belgium, Luxembourg, Czech Republic, Slovakia, Hungary, Croatia, Serbia, and most of continental Europe. This large common time zone makes European business coordination straightforward.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Germany', item: 'https://whattime.city/germany/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function GermanyTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in Germany
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Central European Time (CET) · UTC+1 in winter · CEST (UTC+2) during Central European Summer Time
      </p>

      <GermanyClockClient />
      <CountryFactsSection hubSlug="germany" />

      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Germany Time Zone — CET & CEST Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              Germany uses <strong>Central European Time (CET, UTC+1)</strong> from late October to late March,
              and <strong>Central European Summer Time (CEST, UTC+2)</strong> for the remainder of the year.
              Germany shares this schedule with most of continental Europe — France, Italy, Spain, the Netherlands,
              Poland, and Austria all observe the same CET/CEST transition simultaneously.
            </p>
            <p>
              The EU attempted to abolish mandatory clock changes in 2019 following a public consultation in which
              84% of respondents favoured ending the practice. However, the directive has been stalled in the
              European Parliament due to disagreements over whether countries should permanently adopt standard
              time (CET) or summer time (CEST). Germany continues to observe twice-yearly clock changes.
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
                    { period: 'Standard Time', abbr: 'CET', utc: 'UTC+1', dates: 'Last Sun Oct → Last Sun Mar' },
                    { period: 'Summer Time', abbr: 'CEST', utc: 'UTC+2', dates: 'Last Sun Mar → Last Sun Oct' },
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

      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">CET Quick Reference — When it is noon in Berlin</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when CET = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'London', tz: 'GMT (UTC+0)', local: '11:00 AM', dst: '12:00 PM BST (same as CET)' },
                  { city: 'New York', tz: 'EST (UTC−5)', local: '6:00 AM', dst: '7:00 AM EDT in summer' },
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '3:00 AM', dst: '4:00 AM PDT in summer' },
                  { city: 'Lagos (Nigeria)', tz: 'WAT (UTC+1)', local: '12:00 PM (same)', dst: 'No DST' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '3:00 PM', dst: 'No DST' },
                  { city: 'Mumbai (IST)', tz: 'IST (UTC+5:30)', local: '4:30 PM', dst: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '7:00 PM', dst: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '8:00 PM', dst: 'No DST' },
                  { city: 'Sydney', tz: 'AEST (UTC+10)', local: '9:00 PM', dst: '10:00 PM AEDT' },
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

      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Germany City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Berlin time', href: '/berlin/' },
              { label: 'Munich time', href: '/munich/' },
              { label: 'Hamburg time', href: '/hamburg/' },
              { label: 'Frankfurt time', href: '/frankfurt/' },
              { label: 'Berlin → New York', href: '/time/berlin/new-york/' },
              { label: 'Berlin → London', href: '/time/berlin/london/' },
              { label: 'Berlin → Mumbai', href: '/time/berlin/mumbai/' },
              { label: 'Germany country info', href: '/country/germany/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database.
        Germany: Europe/Berlin (CET UTC+1 / CEST UTC+2). DST observed.
      </footer>
    </ContentPageWrapper>
  )
}
