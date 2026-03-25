import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TexasClockClient from './TexasClockClient'

export const metadata: Metadata = {
  title: 'Time in Texas Now — CST/CDT (UTC−6/−5) · Houston, Dallas, Austin',
  description:
    'What time is it in Texas right now? Most of Texas uses CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. El Paso uses Mountain Time. Live Texas clock and best time to call.',
  keywords: [
    'time in texas', 'texas time now', 'what time is it in texas',
    'texas time', 'current time in texas', 'texas time zone',
    'CST texas', 'CDT texas', 'houston time now', 'dallas time now',
    'austin time now', 'texas central time', 'texas time vs uk',
    'texas time vs est', 'el paso time zone', 'texas time right now',
  ],
  alternates: { canonical: 'https://whattime.city/texas/' },
  openGraph: {
    title: 'Current Time in Texas — CST/CDT (UTC−6/−5)',
    description: 'Live Texas time. Most of Texas uses Central Time (CST/CDT). El Paso uses Mountain Time. Houston, Dallas, Austin, San Antonio all on CST/CDT.',
    type: 'website', url: 'https://whattime.city/texas/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Texas right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most of Texas uses Central Time — CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. This includes Houston, Dallas, Austin, San Antonio, and Fort Worth. El Paso and Hudspeth County use Mountain Time (MST/MDT, UTC−7/−6). The live clock at the top shows the current Central Time in Texas.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Texas in?',
      acceptedAnswer: { '@type': 'Answer', text: 'The vast majority of Texas uses the Central Time Zone (CT): CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The IANA identifier is America/Chicago. Exception: El Paso and Hudspeth County in far west Texas use Mountain Time (America/Denver), aligning with New Mexico rather than the rest of Texas.' },
    },
    {
      '@type': 'Question',
      name: 'Does Texas observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Texas observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March and fall back on the first Sunday in November. The Texas legislature has considered proposals to stop observing DST, but as of 2026, Texas continues to change clocks twice a year.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Texas and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 1 hour ahead of Texas (Central Time). When it is 9:00 AM in Houston, it is 10:00 AM in New York. This 1-hour gap is constant year-round because both states switch to Daylight Saving Time simultaneously.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Texas and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Texas (Central Time) is always 2 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 11:00 AM in Houston or Dallas. This gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is El Paso, Texas in?',
      acceptedAnswer: { '@type': 'Answer', text: 'El Paso and the surrounding Hudspeth County use Mountain Time (MST/MDT, UTC−7/−6), not Central Time like the rest of Texas. This is because El Paso is geographically in the western tip of Texas, closer to Albuquerque and Phoenix than to Dallas. The IANA identifier for El Paso is America/Denver.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Texas and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Texas (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in UK winter. During British Summer Time (BST, UTC+1), London is 7 hours ahead of Texas. During US Daylight Saving Time (CDT, UTC−5), Texas is 5 hours behind GMT.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Texas', item: 'https://whattime.city/texas/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function TexasTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in Texas
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Central Time (CT) · CST (UTC−6) in winter · CDT (UTC−5) during Daylight Saving Time · El Paso uses Mountain Time
      </p>

      <TexasClockClient />

      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Texas Time Zones Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              Texas is the second-largest US state by area, but it uses primarily <strong>Central Time
              (CST/CDT)</strong>. The exception is <strong>El Paso</strong> and Hudspeth County in the
              far west, which use Mountain Time — the same as New Mexico — because El Paso sits
              geographically closer to Albuquerque than to Dallas.
            </p>
            <p>
              Texas follows the federal Daylight Saving Time schedule: clocks spring forward on the
              second Sunday in March and fall back on the first Sunday in November. State legislators
              have introduced bills to end this practice, citing disruptions to agriculture and
              public health, but federal law requires Congressional approval for any permanent change.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">Zone</th>
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">Standard</th>
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">DST</th>
                    <th className="text-left py-2 font-medium text-slate-600">Cities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { zone: 'Central', std: 'CST (UTC−6)', dst: 'CDT (UTC−5)', cities: 'Houston, Dallas, Austin, San Antonio, Fort Worth' },
                    { zone: 'Mountain', std: 'MST (UTC−7)', dst: 'MDT (UTC−6)', cities: 'El Paso, Hudspeth County only' },
                  ].map(row => (
                    <tr key={row.zone}>
                      <td className="py-2 pr-4 font-bold text-slate-700">{row.zone}</td>
                      <td className="py-2 pr-4 text-slate-500">{row.std}</td>
                      <td className="py-2 pr-4 text-slate-500">{row.dst}</td>
                      <td className="py-2 text-slate-600">{row.cities}</td>
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Texas City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Houston time', href: '/houston/' },
              { label: 'Dallas time', href: '/dallas/' },
              { label: 'Austin time', href: '/austin/' },
              { label: 'San Antonio time', href: '/san-antonio/' },
              { label: 'El Paso time', href: '/el-paso/' },
              { label: 'Houston → New York', href: '/time/houston/new-york/' },
              { label: 'Dallas → Los Angeles', href: '/time/dallas/los-angeles/' },
              { label: 'Houston → London', href: '/time/houston/london/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map(lnk => (
              <Link key={lnk.href} href={lnk.href}
                className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">
                {lnk.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database.
        Texas (most): America/Chicago (CST UTC−6 / CDT UTC−5). El Paso: America/Denver.
      </footer>
    </ContentPageWrapper>
  )
}
