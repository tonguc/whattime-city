import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import FranceClockClient from './FranceClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in France Now — CET/CEST (UTC+1/+2) · Paris, Lyon, Marseille',
  description:
    'What time is it in France right now? France uses CET (UTC+1) in winter and CEST (UTC+2) during Central European Summer Time. Live Paris clock, France vs US/UK/Asia, and best time to call.',
  keywords: [
    'time in france',
    'france time now',
    'what time is it in france',
    'france time',
    'current time in france',
    'paris time now',
    'france time zone',
    'CET france',
    'france time vs est',
    'france time vs uk',
    'time difference france usa',
    'france utc offset',
    'france time right now',
    'paris time zone',
    'france central european time',
  ],
  alternates: {
    canonical: 'https://whattime.city/france/',
  },
  openGraph: {
    title: 'Current Time in France — CET/CEST (UTC+1/+2)',
    description:
      'Live France / Paris time clock. CET is UTC+1 in winter; CEST is UTC+2 during Central European Summer Time. Check France time vs US, UK, and Asia.',
    type: 'website',
    url: 'https://whattime.city/france/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in France Now — CET/CEST',
    description: 'Live France time. CET (UTC+1) in winter, CEST (UTC+2) in summer. Paris, Lyon, Marseille all on the same zone.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in France right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'France uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) from late March to late October. The live clock at the top of this page shows the current time in France. All cities — Paris, Lyon, Marseille, Bordeaux, Toulouse, Nantes — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is France in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'France uses CET (Central European Time, UTC+1) in winter and CEST (Central European Summer Time, UTC+2) in summer. The IANA identifier is Europe/Paris. France shares this time zone with Germany, Italy, Spain, Belgium, the Netherlands, and most of continental Europe. Note: geographically, France spans UTC+0 (and even UTC−10 including overseas territories), but metropolitan France uses CET/CEST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between France and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'France (CET, UTC+1) is 6 hours ahead of New York (EST, UTC−5) and 9 hours ahead of Los Angeles (PST, UTC−8) in winter. During US Daylight Saving Time, the gap narrows to 5 hours vs New York (EDT) and 8 hours vs Los Angeles (PDT). When France is on CEST (UTC+2), add 1 more hour to each difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between France and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'France is always 1 hour ahead of the UK. In winter, France uses CET (UTC+1) and the UK uses GMT (UTC+0). In summer, France uses CEST (UTC+2) and the UK uses BST (UTC+1). Both switch clocks on the same schedule, so the 1-hour gap is constant year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does France observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. France switches to CEST (UTC+2) on the last Sunday in March and returns to CET (UTC+1) on the last Sunday in October, following the EU\'s harmonized DST schedule. The EU voted in 2019 to abolish mandatory DST, but the measure has been delayed indefinitely in the European Parliament.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone are France\'s overseas territories in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'France has overseas territories across multiple time zones. French Guiana (UTC−3), Martinique and Guadeloupe (UTC−4), Réunion (UTC+4), New Caledonia (UTC+11), French Polynesia/Tahiti (UTC−10), and Saint Pierre & Miquelon (UTC−3:30). Metropolitan France (the European part) uses CET/CEST.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in France', item: 'https://whattime.city/france/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function FranceTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in France
      </h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Central European Time (CET) · UTC+1 in winter · CEST (UTC+2) during Central European Summer Time
      </p>

      <FranceClockClient />
      <CountryFactsSection hubSlug="france" />

      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">France Time Zone — CET & CEST Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              Metropolitan France uses <strong>Central European Time (CET, UTC+1)</strong> in winter
              and <strong>Central European Summer Time (CEST, UTC+2)</strong> from late March to late October.
              This is the same schedule as Germany, Italy, Spain, and most continental European nations.
            </p>
            <p>
              Geographically, Paris sits at roughly 2°E longitude, which corresponds to UTC+0:08 in mean
              solar time. France's use of CET (UTC+1) rather than GMT is a historical legacy — France
              aligned itself with German Central European Time in 1940 and has maintained it since, even
              after liberation. This means French sunrises are somewhat later than geography would suggest.
            </p>
            <p>
              France also has <strong>12 overseas territories</strong> spanning time zones from UTC−10
              (French Polynesia) to UTC+12 (Wallis and Futuna). When people ask "what time is it in France,"
              they typically mean metropolitan France (Europe/Paris).
            </p>
          </div>
        </div>
      </section>

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

      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">France City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Paris time', href: '/paris/' },
              { label: 'Lyon time', href: '/lyon/' },
              { label: 'Marseille time', href: '/marseille/' },
              { label: 'Paris → New York', href: '/time/paris/new-york/' },
              { label: 'Paris → London', href: '/time/paris/london/' },
              { label: 'Paris → Dubai', href: '/time/paris/dubai/' },
              { label: 'Paris → Mumbai', href: '/time/paris/mumbai/' },
              { label: 'France country info', href: '/country/france/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database.
        France: Europe/Paris (CET UTC+1 / CEST UTC+2). DST observed.
      </footer>
    </ContentPageWrapper>
  )
}
