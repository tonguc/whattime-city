import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import NigeriaClockClient from './NigeriaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Nigeria Now — WAT (UTC+1) · Lagos, Abuja',
  description:
    'What time is it in Nigeria right now? Nigeria uses WAT (West Africa Time, UTC+1) year-round — no Daylight Saving Time. Live Lagos clock, Nigeria vs US/UK/Europe, and best time to call.',
  keywords: [
    'time in nigeria',
    'nigeria time now',
    'nigeria time',
    'lagos time',
    'lagos time now',
    'abuja time',
    'WAT time zone',
    'west africa time',
    'current time in nigeria',
    'what time is it in nigeria',
    'nigeria time vs uk',
    'nigeria time vs est',
    'time difference nigeria usa',
    'time difference nigeria uk',
    'nigeria utc offset',
    'nigeria wat utc+1',
  ],
  alternates: {
    canonical: 'https://whattime.city/nigeria/',
  },
  openGraph: {
    title: 'Current Time in Nigeria — WAT (UTC+1)',
    description:
      'Live Nigeria / Lagos time clock. WAT is UTC+1 — Nigeria has no Daylight Saving Time. Check Nigeria time vs US, UK, Europe, and more.',
    type: 'website',
    url: 'https://whattime.city/nigeria/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Nigeria Now — WAT UTC+1',
    description:
      'Live Nigeria time. WAT is UTC+1. Lagos and all Nigeria use a single time zone with no DST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Nigeria (Lagos) right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nigeria uses West Africa Time (WAT), which is UTC+1. The live clock at the top of this page shows the current time in Nigeria. Lagos, Abuja, Kano, Port Harcourt, and all other Nigerian cities are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Nigeria\'s time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nigeria uses West Africa Time (WAT), which is UTC+1. The IANA time zone identifier is Africa/Lagos. Nigeria uses a single time zone across the entire country — from Lagos in the south to Kano in the north.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Nigeria observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Nigeria does not observe Daylight Saving Time. WAT is fixed at UTC+1 year-round. This means the time difference between Nigeria and DST-observing countries like the US and UK changes seasonally when those countries adjust their clocks, but Nigeria itself never changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Nigeria and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nigeria (WAT, UTC+1) is 1 hour ahead of London (GMT, UTC+0) during winter. During British Summer Time (BST, UTC+1), Nigeria and the UK are on the same time. When it is 12:00 PM in London (GMT), it is 1:00 PM in Lagos. During BST, both cities show the same time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Nigeria and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nigeria (WAT, UTC+1) is 6 hours ahead of New York (EST, UTC−5) and 9 hours ahead of Los Angeles (PST, UTC−8). During US daylight saving time, the difference shrinks by 1 hour: 5 hours ahead of New York (EDT) and 8 hours ahead of Los Angeles (PDT).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Nigeria from the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From US Eastern time (EST), the best window to reach Nigeria during business hours (8 AM–5 PM WAT) is 2:00 AM to 11:00 AM EST. From US Pacific time (PST), try 11:00 PM to 8:00 AM PST. For practical calls, 7:00–11:00 AM EST (1:00–5:00 PM WAT) catches Nigeria\'s afternoon while remaining a reasonable US morning hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Lagos time the same as Abuja time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Lagos, Abuja, Kano, Port Harcourt, and every other city in Nigeria all use the same time zone: West Africa Time (WAT, UTC+1). Nigeria has just one time zone nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Nigeria and the Netherlands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nigeria (WAT, UTC+1) and the Netherlands (CET, UTC+1 in winter) are on the same time during European winter. During Central European Summer Time (CEST, UTC+2), the Netherlands is 1 hour ahead of Nigeria. This is why "lagos netherlands time difference" is a common search — the gap oscillates between 0 and 1 hour depending on European DST.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Nigeria', item: 'https://whattime.city/nigeria/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function NigeriaTimePage() {
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
        Current Time in Nigeria
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        West Africa Time (WAT) · UTC+1 · No Daylight Saving Time
      </p>

      <NigeriaClockClient />
      <CountryFactsSection hubSlug="nigeria" />

      {/* WAT Explained */}
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Nigeria Time Zone — WAT Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              Nigeria uses <strong>West Africa Time (WAT)</strong>, which is UTC+1. All of Nigeria — from
              Lagos on the Atlantic coast to Maiduguri near Lake Chad — operates on a single time zone.
              This makes scheduling calls and meetings straightforward compared to countries with multiple zones.
            </p>
            <p>
              <strong>Nigeria does not observe Daylight Saving Time.</strong> WAT is fixed at UTC+1
              year-round. The practical consequence: Nigeria's offset from European countries changes by
              one hour twice a year when Europe adjusts its clocks. For example, Nigeria and the Netherlands
              are on the same time in winter (both UTC+1), but the Netherlands moves to UTC+2 in summer —
              making it 1 hour ahead of Nigeria.
            </p>
            <p>
              Nigeria is Africa's largest economy and most populous country. Its large diaspora in the UK,
              US, and Canada creates significant demand for international calling and scheduling — which is
              why Nigeria-related time queries are among the fastest-growing on time sites globally.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { label: 'Time Zone', value: 'WAT' },
                { label: 'UTC Offset', value: 'UTC+1' },
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">WAT Quick Reference — When it is noon in Lagos</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when WAT = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'New York', tz: 'EST (UTC−5)', local: '6:00 AM', dst: '7:00 AM EDT in summer' },
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '3:00 AM', dst: '4:00 AM PDT in summer' },
                  { city: 'Toronto', tz: 'EST (UTC−5)', local: '6:00 AM', dst: '7:00 AM EDT in summer' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '11:00 AM', dst: '12:00 PM BST (same)' },
                  { city: 'Amsterdam / Netherlands', tz: 'CET (UTC+1)', local: '12:00 PM (same)', dst: '1:00 PM CEST in summer' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '12:00 PM (same)', dst: '1:00 PM CEST in summer' },
                  { city: 'Nairobi', tz: 'EAT (UTC+3)', local: '2:00 PM', dst: 'No DST' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '3:00 PM', dst: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '7:00 PM', dst: 'No DST' },
                  { city: 'São Paulo', tz: 'BRT (UTC−3)', local: '8:00 AM', dst: 'No DST since 2019' },
                ].map((row) => (
                  <tr key={row.city}>
                    <td className="py-2 pr-4 font-medium text-slate-700">{row.city}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.tz}</td>
                    <td className="py-2 text-slate-700">
                      {row.local}
                      {row.dst !== 'No DST' && row.dst !== 'No DST since 2019' && (
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Nigeria Time Differences & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Lagos time', href: '/lagos/' },
              { label: 'Abuja time', href: '/abuja/' },
              { label: 'Lagos → London', href: '/time/lagos/london/' },
              { label: 'Lagos → New York', href: '/time/lagos/new-york/' },
              { label: 'Lagos → Netherlands', href: '/time/lagos/amsterdam/' },
              { label: 'Lagos → Singapore', href: '/time/lagos/singapore/' },
              { label: 'Lagos → Toronto', href: '/time/lagos/toronto/' },
              { label: 'Nigeria country info', href: '/country/nigeria/' },
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
        Nigeria: Africa/Lagos (WAT, UTC+1). No DST observed.
      </footer>
    </ContentPageWrapper>
  )
}
