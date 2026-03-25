import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import DubaiClockClient from './DubaiClockClient'

export const metadata: Metadata = {
  title: 'Time in Dubai Now — GST (UTC+4) · UAE · Abu Dhabi, Sharjah',
  description:
    'What time is it in Dubai right now? Dubai uses GST (Gulf Standard Time, UTC+4) year-round — no Daylight Saving Time. Live Dubai clock, UAE vs US/UK/Europe, and best time to call.',
  keywords: [
    'time in dubai',
    'dubai time now',
    'what time is it in dubai',
    'dubai time',
    'current time in dubai',
    'dubai time zone',
    'GST time zone',
    'gulf standard time',
    'UAE time',
    'abu dhabi time now',
    'dubai time vs uk',
    'dubai time vs est',
    'time difference dubai usa',
    'time difference dubai uk',
    'dubai utc offset',
    'dubai utc+4',
    'dubai time right now',
    'uae time zone',
  ],
  alternates: {
    canonical: 'https://whattime.city/dubai/',
  },
  openGraph: {
    title: 'Current Time in Dubai — GST (UTC+4)',
    description:
      'Live Dubai / UAE time clock. GST is UTC+4 — Dubai has no Daylight Saving Time. Check Dubai time vs US, UK, Europe, and Asia.',
    type: 'website',
    url: 'https://whattime.city/dubai/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Dubai Now — GST UTC+4',
    description: 'Live Dubai time. GST is UTC+4, fixed year-round. Dubai, Abu Dhabi, Sharjah all on the same time zone with no DST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Dubai right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dubai uses Gulf Standard Time (GST), which is UTC+4. The live clock at the top of this page shows the exact current time in Dubai. All cities in the UAE — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Dubai in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dubai is in the Gulf Standard Time (GST) zone, which is UTC+4. The IANA time zone identifier is Asia/Dubai. The UAE uses a single time zone nationwide, and it is shared with Oman. GST is not an abbreviation used by any other country — it is specific to the Gulf states.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dubai observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Dubai and the entire UAE do not observe Daylight Saving Time. GST is fixed at UTC+4 year-round. Because DST-observing countries like the US and UK change their clocks twice a year, the time difference between Dubai and those countries changes seasonally.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Dubai and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dubai (GST, UTC+4) is 4 hours ahead of London (GMT, UTC+0) in winter. During British Summer Time (BST, UTC+1), Dubai is 3 hours ahead of London. When it is 9:00 AM in London (GMT), it is 1:00 PM in Dubai. During BST, when it is 9:00 AM in London, it is 12:00 PM (noon) in Dubai.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Dubai and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dubai (GST, UTC+4) is 9 hours ahead of New York (EST, UTC−5) and 12 hours ahead of Los Angeles (PST, UTC−8). During US Daylight Saving Time, the gap narrows by 1 hour: 8 hours ahead of New York (EDT) and 11 hours ahead of Los Angeles (PDT).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Dubai and India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India (IST, UTC+5:30) is 1 hour and 30 minutes ahead of Dubai (GST, UTC+4). This gap is fixed year-round because neither country observes DST. When it is 9:00 AM in Dubai, it is 10:30 AM in Mumbai and New Delhi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dubai time the same as Abu Dhabi time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dubai and Abu Dhabi (and all other UAE emirates) are on the same time zone: Gulf Standard Time (GST, UTC+4). There is no time difference within the UAE.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Dubai from Europe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From London (GMT), the best window to reach Dubai during business hours (9 AM–6 PM GST) is 5:00 AM to 2:00 PM GMT. From Berlin or Paris (CET), the window is 6:00 AM to 3:00 PM CET. Dubai starts work significantly earlier than European cities, so European mornings align best.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Dubai', item: 'https://whattime.city/dubai/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function DubaiTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in Dubai
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Gulf Standard Time (GST) · UTC+4 · No Daylight Saving Time
      </p>

      <DubaiClockClient />

      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Dubai Time Zone — GST Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              Dubai and the UAE use <strong>Gulf Standard Time (GST)</strong>, which is UTC+4. The offset
              is fixed year-round — the UAE has never observed Daylight Saving Time. Dubai shares the GST
              offset with Oman; neighbouring Qatar and Bahrain use UTC+3, while Saudi Arabia uses UTC+3 as well.
            </p>
            <p>
              Dubai's position at UTC+4 makes it a natural bridge time zone for business between Europe
              and Asia. European mornings overlap with UAE business hours, and UAE afternoons overlap with
              South and East Asian mornings. This geographic advantage has contributed to Dubai's role as
              a global business and logistics hub.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { label: 'Time Zone', value: 'GST' },
                { label: 'UTC Offset', value: 'UTC+4' },
                { label: 'Daylight Saving', value: 'No DST' },
                { label: 'Number of TZs', value: '1 (UAE-wide)' },
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">GST Quick Reference — When it is noon in Dubai</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when GST = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'Mumbai / New Delhi', tz: 'IST (UTC+5:30)', local: '1:30 PM', dst: 'No DST' },
                  { city: 'Riyadh / Doha', tz: 'AST (UTC+3)', local: '11:00 AM', dst: 'No DST' },
                  { city: 'Nairobi', tz: 'EAT (UTC+3)', local: '11:00 AM', dst: 'No DST' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '8:00 AM', dst: '9:00 AM BST in summer' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '9:00 AM', dst: '10:00 AM CEST in summer' },
                  { city: 'New York', tz: 'EST (UTC−5)', local: '3:00 AM', dst: '4:00 AM EDT in summer' },
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '12:00 AM (midnight)', dst: '1:00 AM PDT' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '4:00 PM', dst: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '5:00 PM', dst: 'No DST' },
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Dubai & UAE City Times</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Dubai time', href: '/dubai-city/' },
              { label: 'Abu Dhabi time', href: '/abu-dhabi/' },
              { label: 'Sharjah time', href: '/sharjah/' },
              { label: 'Dubai → London', href: '/time/dubai/london/' },
              { label: 'Dubai → New York', href: '/time/dubai/new-york/' },
              { label: 'Dubai → Mumbai', href: '/time/dubai/mumbai/' },
              { label: 'Dubai → Singapore', href: '/time/dubai/singapore/' },
              { label: 'UAE country info', href: '/country/united-arab-emirates/' },
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
        Dubai / UAE: Asia/Dubai (GST, UTC+4). No DST observed.
      </footer>
    </ContentPageWrapper>
  )
}
