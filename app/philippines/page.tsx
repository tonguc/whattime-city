import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import PhilippinesClockClient from './PhilippinesClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in the Philippines Now — PHT (UTC+8) · Manila, Cebu, Davao',
  description:
    'What time is it in the Philippines right now? The Philippines uses PHT (Philippine Time, UTC+8) year-round — no Daylight Saving Time. Live Manila clock, Philippines vs US/UK/Europe, and best time to call.',
  keywords: [
    'time in the philippines',
    'philippines time now',
    'philippine time',
    'manila time now',
    'philippines time',
    'PHT time zone',
    'philippine standard time',
    'current time in philippines',
    'what time is it in the philippines',
    'philippines time vs est',
    'philippines time vs uk',
    'time difference philippines usa',
    'time difference philippines uk',
    'philippines utc offset',
    'philippines utc+8',
    'manila time zone',
    'philippines time right now',
  ],
  alternates: {
    canonical: 'https://whattime.city/philippines/',
  },
  openGraph: {
    title: 'Current Time in the Philippines — PHT (UTC+8)',
    description:
      'Live Philippines / Manila time clock. PHT is UTC+8 — the Philippines has no Daylight Saving Time. Check Philippines time vs US, UK, Europe, and Asia.',
    type: 'website',
    url: 'https://whattime.city/philippines/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in the Philippines Now — PHT UTC+8',
    description:
      'Live Philippines time. PHT is UTC+8. Manila, Cebu, Davao all share one time zone with no DST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in the Philippines right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Philippines uses Philippine Time (PHT), which is UTC+8. The live clock at the top of this page shows the exact current time in the Philippines. All major cities — Manila, Cebu, Davao, Quezon City, and Makati — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is the Philippines in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Philippines uses Philippine Standard Time (PST), also known as Philippine Time (PHT), which is UTC+8. The IANA time zone identifier is Asia/Manila. The Philippines shares this UTC+8 offset with Singapore, Malaysia, China, Hong Kong, and Taiwan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Philippines observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Philippines does not observe Daylight Saving Time. PHT is fixed at UTC+8 year-round. The Philippines last experimented with DST in 1990 for the SEA Games and briefly in 1992, but abandoned it due to minimal benefit at tropical latitudes. The time offset from US and European countries changes seasonally when those countries adjust their clocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Philippines and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Philippines (PHT, UTC+8) is 13 hours ahead of New York (EST, UTC−5) and 16 hours ahead of Los Angeles (PST, UTC−8). During US daylight saving time, the difference shrinks by 1 hour: 12 hours ahead of New York (EDT) and 15 hours ahead of Los Angeles (PDT). Because the gap exceeds 12 hours, the Philippines is effectively "the next day" compared to US time zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Philippines and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Philippines (PHT, UTC+8) is 8 hours ahead of London (GMT, UTC+0) in winter. During British Summer Time (BST, UTC+1), the Philippines is 7 hours ahead of London. When it is 8:00 AM in Manila, it is midnight (12:00 AM) in London (winter) or 1:00 AM (summer).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call the Philippines from the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To reach the Philippines during business hours (9 AM–6 PM PHT), callers from US Eastern time (EST) should call between 8:00 PM and 5:00 AM EST. From US Pacific time (PST), the window is 5:00 PM to 2:00 AM PST. For practical daytime calls, 8:00–11:00 PM EST reaches the Philippines around 9 AM–noon the next day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Manila time the same as Cebu and Davao time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Manila, Cebu, Davao, Quezon City, Makati, Zamboanga, and every other city in the Philippines all use the same time zone: Philippine Time (PHT, UTC+8). The Philippines has a single time zone nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Philippines and Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Philippines (PHT, UTC+8) is 2 hours behind Sydney during Australian Eastern Standard Time (AEST, UTC+10), and 3 hours behind during Australian Eastern Daylight Time (AEDT, UTC+11). When it is 10:00 AM in Manila, it is 12:00 PM (noon) in Sydney (AEST) or 1:00 PM (AEDT).',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in the Philippines', item: 'https://whattime.city/philippines/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function PhilippinesTimePage() {
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
        Current Time in the Philippines
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Philippine Time (PHT) · UTC+8 · No Daylight Saving Time
      </p>

      <PhilippinesClockClient />
      <CountryFactsSection hubSlug="philippines" />

      {/* PHT Explained */}
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Philippines Time Zone — PHT Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              The Philippines uses <strong>Philippine Time (PHT)</strong>, which is UTC+8. The entire
              country — all 7,641 islands from Luzon in the north to Mindanao in the south — operates
              on a single time zone. This makes scheduling calls nationwide straightforward.
            </p>
            <p>
              <strong>The Philippines does not observe Daylight Saving Time.</strong> PHT is fixed at
              UTC+8 year-round. The practical effect: the Philippines sits in the same time zone as
              Singapore, Malaysia, China, Hong Kong, and Taiwan. When counting hours to the US, the
              Philippines is often "the next day" — Manila is 13 hours ahead of New York in winter,
              which means Monday morning in Manila is still Sunday evening in New York.
            </p>
            <p>
              The Philippines has a large diaspora in the US and Middle East, driving high demand for
              international calling windows. The BPO (Business Process Outsourcing) industry — one
              of the Philippines' largest employers — specifically operates in night shifts to overlap
              with US business hours.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { label: 'Time Zone', value: 'PHT' },
                { label: 'UTC Offset', value: 'UTC+8' },
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

      {/* Quick Reference Table */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">PHT Quick Reference — When it is noon in Manila</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when PHT = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'New York', tz: 'EST (UTC−5)', local: '11:00 PM (prev day)', dst: '12:00 AM midnight EDT' },
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '8:00 PM (prev day)', dst: '9:00 PM PDT' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '4:00 AM', dst: '5:00 AM BST in summer' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '5:00 AM', dst: '6:00 AM CEST in summer' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '8:00 AM', dst: 'No DST' },
                  { city: 'Mumbai (IST)', tz: 'IST (UTC+5:30)', local: '9:30 AM', dst: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '12:00 PM (same)', dst: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '1:00 PM', dst: 'No DST' },
                  { city: 'Sydney', tz: 'AEST (UTC+10)', local: '2:00 PM', dst: '3:00 PM AEDT in summer' },
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Philippines City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Manila time', href: '/manila/' },
              { label: 'Cebu time', href: '/cebu/' },
              { label: 'Davao time', href: '/davao/' },
              { label: 'Manila → New York', href: '/time/manila/new-york/' },
              { label: 'Manila → London', href: '/time/manila/london/' },
              { label: 'Manila → Los Angeles', href: '/time/manila/los-angeles/' },
              { label: 'Manila → Singapore', href: '/time/manila/singapore/' },
              { label: 'Philippines country info', href: '/country/philippines/' },
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
        Philippines: Asia/Manila (PHT, UTC+8). No DST observed.
      </footer>
    </ContentPageWrapper>
  )
}
