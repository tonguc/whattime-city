import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import JapanClockClient from './JapanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Japan Now — JST (UTC+9) · Tokyo, Osaka, Kyoto',
  description:
    'What time is it in Japan right now? Japan uses JST (Japan Standard Time, UTC+9) year-round — no Daylight Saving Time. Live Tokyo clock, Japan vs US/UK/Europe, and best time to call.',
  keywords: [
    'time in japan',
    'japan time now',
    'what time is it in japan',
    'japan time',
    'current time in japan',
    'japan time zone',
    'JST time zone',
    'japan standard time',
    'tokyo time now',
    'osaka time now',
    'japan time vs est',
    'japan time vs uk',
    'time difference japan usa',
    'japan utc offset',
    'japan utc+9',
    'japan time right now',
    'japan no daylight saving',
  ],
  alternates: {
    canonical: 'https://whattime.city/japan/',
  },
  openGraph: {
    title: 'Current Time in Japan — JST (UTC+9)',
    description:
      'Live Japan / Tokyo time clock. JST is UTC+9 — Japan has no Daylight Saving Time. Check Japan time vs US, UK, Europe, and Asia.',
    type: 'website',
    url: 'https://whattime.city/japan/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Japan Now — JST UTC+9',
    description:
      'Live Japan time. JST is UTC+9, fixed year-round. Tokyo, Osaka, Kyoto, Sapporo all share one time zone with no DST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Japan right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Japan uses Japan Standard Time (JST), which is UTC+9. The live clock at the top of this page shows the exact current time in Japan. All cities — Tokyo, Osaka, Kyoto, Sapporo, Hiroshima, and Fukuoka — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Japan in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Japan is in the Japan Standard Time (JST) zone, which is UTC+9. The IANA time zone identifier is Asia/Tokyo. Japan uses a single time zone nationwide despite its considerable north-south span. JST is shared with South Korea (KST) and a few other countries at the same offset.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Japan observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Japan abolished Daylight Saving Time in 1952 following its brief post-World War II occupation-era usage. JST has been fixed at UTC+9 ever since. Japan is one of the few major industrialized nations that does not change its clocks. This means the time difference between Japan and DST-observing countries changes seasonally.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Japan and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Japan (JST, UTC+9) is 14 hours ahead of New York (EST, UTC−5) and 17 hours ahead of Los Angeles (PST, UTC−8). During US Daylight Saving Time, the gap narrows by 1 hour: 13 hours ahead of New York (EDT) and 16 hours ahead of Los Angeles (PDT). Japan is effectively "the next day" compared to US time zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Japan and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Japan (JST, UTC+9) is 9 hours ahead of London (GMT, UTC+0) in winter. During British Summer Time (BST, UTC+1), Japan is 8 hours ahead. When it is 9:00 AM in London (GMT), it is 6:00 PM in Tokyo. Because Japan has no DST, the gap changes only when the UK switches clocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Japan from the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To reach Japan during business hours (9 AM–6 PM JST), callers from US Eastern time (EST) should call between 7:00 PM and 4:00 AM EST. From US Pacific time (PST), the window is 4:00 PM to 1:00 AM PST. For practical overlap, 7:00–9:00 PM EST is the most workable window — Japan will be in its 9:00–11:00 AM morning.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Japan and South Korea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Japan (JST, UTC+9) and South Korea (KST, UTC+9) are on the same UTC offset and show the same time. There is no time difference between Tokyo and Seoul.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Japan and China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Japan (JST, UTC+9) is 1 hour ahead of China (CST, UTC+8). When it is 10:00 AM in Tokyo, it is 9:00 AM in Beijing, Shanghai, and all other Chinese cities. China uses a single time zone (UTC+8) despite its wide geographic span.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Japan', item: 'https://whattime.city/japan/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function JapanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in Japan
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Japan Standard Time (JST) · UTC+9 · No Daylight Saving Time
      </p>

      <JapanClockClient />
      <CountryFactsSection hubSlug="japan" />

      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Japan Time Zone — JST Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              Japan uses <strong>Japan Standard Time (JST)</strong>, which is UTC+9. The entire country —
              from Hokkaido in the north to Okinawa in the south — operates on a single time zone.
              Japan is one of the world's major economies to have <strong>no Daylight Saving Time</strong>,
              making it simpler to schedule calls and track Japan's offset from other countries.
            </p>
            <p>
              Japan last used DST during 1948–1951 under the US occupation administration. It was
              abolished in 1952 due to public opposition, particularly from farmers and workers who
              found early sunrises disrupting. Proposals to reinstate DST have resurfaced periodically
              but have never succeeded.
            </p>
            <p>
              Because Japan does not change clocks, the time gap between Japan and DST-observing
              countries fluctuates seasonally. Japan is <strong>14–15 hours ahead of New York</strong>{' '}
              and <strong>8–9 hours ahead of London</strong>, depending on whether those countries
              are currently on standard or daylight time.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { label: 'Time Zone', value: 'JST' },
                { label: 'UTC Offset', value: 'UTC+9' },
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

      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">JST Quick Reference — When it is noon in Tokyo</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when JST = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'Seoul (South Korea)', tz: 'KST (UTC+9)', local: '12:00 PM (same)', dst: 'No DST' },
                  { city: 'Beijing / Shanghai', tz: 'CST (UTC+8)', local: '11:00 AM', dst: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '11:00 AM', dst: 'No DST' },
                  { city: 'Manila', tz: 'PHT (UTC+8)', local: '11:00 AM', dst: 'No DST' },
                  { city: 'Mumbai (IST)', tz: 'IST (UTC+5:30)', local: '8:30 AM', dst: 'No DST' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '7:00 AM', dst: 'No DST' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '3:00 AM', dst: '4:00 AM BST in summer' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '4:00 AM', dst: '5:00 AM CEST in summer' },
                  { city: 'New York', tz: 'EST (UTC−5)', local: '10:00 PM (prev)', dst: '11:00 PM EDT' },
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '7:00 PM (prev)', dst: '8:00 PM PDT' },
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Japan City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Tokyo time', href: '/tokyo/' },
              { label: 'Osaka time', href: '/osaka/' },
              { label: 'Kyoto time', href: '/kyoto/' },
              { label: 'Tokyo → New York', href: '/time/tokyo/new-york/' },
              { label: 'Tokyo → London', href: '/time/tokyo/london/' },
              { label: 'Tokyo → Los Angeles', href: '/time/tokyo/los-angeles/' },
              { label: 'Tokyo → Singapore', href: '/time/tokyo/singapore/' },
              { label: 'Japan country info', href: '/country/japan/' },
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
        Japan: Asia/Tokyo (JST, UTC+9). No DST observed.
      </footer>
    </ContentPageWrapper>
  )
}
