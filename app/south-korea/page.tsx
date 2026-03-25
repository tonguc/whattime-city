import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import SouthKoreaClockClient from './SouthKoreaClockClient'

export const metadata: Metadata = {
  title: 'Time in South Korea Now — KST (UTC+9) · Seoul, Busan · No DST',
  description:
    'What time is it in South Korea right now? Korea uses KST (Korea Standard Time, UTC+9) year-round — no Daylight Saving Time. Same offset as Japan (JST). Live Seoul clock and best time to call.',
  keywords: [
    'time in south korea', 'korea time now', 'south korea time',
    'what time is it in south korea', 'KST time zone', 'korea standard time',
    'seoul time now', 'korea time vs uk', 'korea time vs est',
    'time difference korea usa', 'korea utc+9', 'korea time right now',
    'south korea time zone', 'is korea time same as japan',
  ],
  alternates: { canonical: 'https://whattime.city/south-korea/' },
  openGraph: {
    title: 'Current Time in South Korea — KST (UTC+9)',
    description: 'Live South Korea / Seoul time. KST is UTC+9, same as Japan (JST). No DST. Check Korea vs US, UK, Europe, and Asia.',
    type: 'website', url: 'https://whattime.city/south-korea/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in South Korea right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'South Korea uses Korea Standard Time (KST), which is UTC+9. There is no Daylight Saving Time. All cities — Seoul, Busan, Incheon, Daegu — are on the same time zone. The live clock at the top shows the current time in South Korea.' },
    },
    {
      '@type': 'Question',
      name: 'Is South Korea time the same as Japan time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Korea Standard Time (KST, UTC+9) and Japan Standard Time (JST, UTC+9) are the same UTC offset. There is no time difference between Seoul and Tokyo. Both countries use UTC+9 year-round with no DST.' },
    },
    {
      '@type': 'Question',
      name: 'Does South Korea observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. South Korea abolished Daylight Saving Time in 1988. Korea used DST from 1987 to 1988 in preparation for the Seoul Olympics, but abandoned it after the Games. KST has been fixed at UTC+9 since then.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between South Korea and the US?',
      acceptedAnswer: { '@type': 'Answer', text: 'South Korea (KST, UTC+9) is 14 hours ahead of New York (EST, UTC−5) and 17 hours ahead of Los Angeles (PST, UTC−8). During US Daylight Saving Time, the gaps narrow by 1 hour. Korea is effectively "the next day" compared to US Eastern time.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between South Korea and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'South Korea (KST, UTC+9) is 9 hours ahead of London (GMT, UTC+0) in UK winter. During British Summer Time (BST, UTC+1), Korea is 8 hours ahead. When it is 9:00 AM in London (GMT), it is 6:00 PM in Seoul.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between South Korea and China?',
      acceptedAnswer: { '@type': 'Answer', text: 'South Korea (KST, UTC+9) is 1 hour ahead of China (CST, UTC+8). When it is 10:00 AM in Beijing or Shanghai, it is 11:00 AM in Seoul. This gap is constant year-round as neither country observes DST.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Seoul in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Seoul uses Korea Standard Time (KST, UTC+9). The IANA time zone identifier is Asia/Seoul. South Korea uses a single nationwide time zone — there are no internal time zone boundaries.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in South Korea', item: 'https://whattime.city/south-korea/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function SouthKoreaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in South Korea
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Korea Standard Time (KST) · UTC+9 · No Daylight Saving Time · Same as Japan (JST)
      </p>

      <SouthKoreaClockClient />

      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">South Korea Time Zone — KST Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              South Korea uses <strong>Korea Standard Time (KST, UTC+9)</strong>, fixed year-round.
              KST is numerically identical to Japan Standard Time (JST) — there is no time difference
              between Seoul and Tokyo. South Korea abolished DST in 1988 following a brief two-year
              experiment (1987–1988) for the Seoul Summer Olympics.
            </p>
            <p>
              South Korea uses a single time zone nationwide. The peninsula is narrow enough (roughly
              300 km wide) that a single offset works well geographically. The IANA identifier is
              Asia/Seoul.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { label: 'Time Zone', value: 'KST' },
                { label: 'UTC Offset', value: 'UTC+9' },
                { label: 'Daylight Saving', value: 'No DST (since 1988)' },
                { label: 'Same as', value: 'Japan (JST)' },
              ].map(item => (
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">South Korea City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Seoul time', href: '/seoul/' },
              { label: 'Busan time', href: '/busan/' },
              { label: 'Seoul → New York', href: '/time/seoul/new-york/' },
              { label: 'Seoul → London', href: '/time/seoul/london/' },
              { label: 'Seoul → Tokyo', href: '/time/seoul/tokyo/' },
              { label: 'Seoul → Singapore', href: '/time/seoul/singapore/' },
              { label: 'Seoul → Los Angeles', href: '/time/seoul/los-angeles/' },
              { label: 'South Korea country info', href: '/country/south-korea/' },
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
        Time zone data powered by the IANA Time Zone Database. South Korea: Asia/Seoul (KST, UTC+9). No DST.
      </footer>
    </ContentPageWrapper>
  )
}
