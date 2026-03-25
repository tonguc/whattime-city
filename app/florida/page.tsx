import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import FloridaClockClient from './FloridaClockClient'

export const metadata: Metadata = {
  title: 'Time in Florida Now — EST/EDT (UTC−5/−4) · Miami, Orlando, Tampa',
  description:
    'What time is it in Florida right now? Most of Florida uses EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. Pensacola uses Central Time. Live Miami clock and best time to call.',
  keywords: [
    'time in florida', 'florida time now', 'what time is it in florida',
    'florida time', 'current time in florida', 'florida time zone',
    'EST florida', 'miami time now', 'orlando time now', 'tampa time now',
    'florida time vs uk', 'florida est timezone', 'pensacola time zone',
    'florida eastern time', 'florida time right now',
  ],
  alternates: { canonical: 'https://whattime.city/florida/' },
  openGraph: {
    title: 'Current Time in Florida — EST/EDT',
    description: 'Live Florida time. Most of Florida uses Eastern Time (EST/EDT). Pensacola and the NW Panhandle use Central Time. Miami, Orlando, Tampa all on EST/EDT.',
    type: 'website', url: 'https://whattime.city/florida/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Florida right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most of Florida uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. This includes Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, and most of the state. Exception: Pensacola and the northwest Panhandle use Central Time (CST/CDT), which is 1 hour behind the rest of Florida.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Florida in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most of Florida uses the Eastern Time Zone (America/New_York): EST (UTC−5) in winter and EDT (UTC−4) during DST. The northwest Panhandle — including Pensacola, Fort Walton Beach, and Destin — uses the Central Time Zone (America/Chicago): CST (UTC−6) in winter and CDT (UTC−5) during DST.' },
    },
    {
      '@type': 'Question',
      name: 'Does Florida observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, but Florida has tried to end it. Florida passed the Sunshine Protection Act in 2018, voting to stay on permanent EDT (UTC−4). However, federal law requires Congressional approval, and the US Congress has not acted on the request. Florida continues to change clocks twice a year.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Pensacola, Florida in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pensacola and the northwest Florida Panhandle use Central Time (CST/CDT), not Eastern Time like the rest of Florida. This means Pensacola is 1 hour behind Miami, Orlando, and Tampa. The boundary runs roughly through the Apalachicola River area.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Florida and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Florida (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During British Summer Time (BST), Florida is still typically 5 hours behind London (because Florida also moves to EDT). There are brief transition windows in spring and autumn when the gap is 4 or 6 hours.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Florida and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Florida (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM (noon) in Miami. Both states switch to Daylight Saving Time simultaneously, so the 3-hour gap is constant year-round.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Florida', item: 'https://whattime.city/florida/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function FloridaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Florida</h1>
      <p className="text-sm text-slate-500 mb-6">Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during DST · Pensacola uses Central Time</p>
      <FloridaClockClient />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Florida Time Zones — The Pensacola Exception</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>Most of Florida uses <strong>Eastern Time (EST/EDT)</strong>, but the northwest Panhandle — including Pensacola, Fort Walton Beach, and Destin — uses <strong>Central Time (CST/CDT)</strong>. The boundary runs roughly along the Apalachicola River in the Panhandle, making Pensacola 1 hour behind Miami despite both being in Florida.</p>
            <p>Florida's legislature passed the <strong>Sunshine Protection Act in 2018</strong>, voting to stay on permanent EDT (UTC−4, i.e., permanent "summer time"). Governor Scott signed it into law. However, it requires federal approval under the Uniform Time Act, and as of 2026, Congress has not enacted the enabling legislation. Florida continues to observe standard DST transitions.</p>
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Florida City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Miami time', href: '/miami/' },
              { label: 'Orlando time', href: '/orlando/' },
              { label: 'Tampa time', href: '/tampa/' },
              { label: 'Jacksonville time', href: '/jacksonville/' },
              { label: 'Pensacola time', href: '/pensacola/' },
              { label: 'Miami → London', href: '/time/miami/london/' },
              { label: 'Miami → Los Angeles', href: '/time/miami/los-angeles/' },
              { label: 'Miami → São Paulo', href: '/time/miami/sao-paulo/' },
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
        Time zone data powered by the IANA Time Zone Database. Florida (most): America/New_York (EST/EDT). Panhandle: America/Chicago.
      </footer>
    </ContentPageWrapper>
  )
}
