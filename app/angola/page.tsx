import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import AngolaClockClient from './AngolaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Angola Now — WAT · Luanda · UTC+1',
  description: 'What time is it in Angola right now? Angola uses West Africa Time (WAT, UTC+1) year-round with no Daylight Saving Time. Luanda live clock and time zone comparison.',
  keywords: ['time in angola', 'angola time now', 'what time is it in angola', 'luanda time', 'angola time zone', 'WAT angola', 'angola utc+1', 'luanda current time', 'angola no dst', 'west africa time angola'],
  alternates: { canonical: 'https://whattime.city/angola/' },
  openGraph: { title: 'Current Time in Angola — WAT · Luanda', description: 'Live Angola time. Luanda and all of Angola use West Africa Time (WAT, UTC+1) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/angola/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Angola right now?', acceptedAnswer: { '@type': 'Answer', text: 'Angola uses West Africa Time (WAT, UTC+1) year-round. Luanda, Huambo, Lobito, and all Angolan cities share the same time. The live clock above shows the current time in Angola.' } },
    { '@type': 'Question', name: 'What time zone is Luanda, Angola in?', acceptedAnswer: { '@type': 'Answer', text: 'Luanda, the capital of Angola, uses the West Africa Time zone (Africa/Luanda, WAT, UTC+1). Angola does not observe Daylight Saving Time. It shares the same time as Lagos (Nigeria), Kinshasa (DRC), Brazzaville (Republic of Congo), and Cameroon.' } },
    { '@type': 'Question', name: 'Does Angola observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Angola does not observe Daylight Saving Time. Clocks across Angola remain at WAT (UTC+1) throughout the entire year.' } },
    { '@type': 'Question', name: 'What is the time difference between Angola and Portugal?', acceptedAnswer: { '@type': 'Answer', text: 'Angola (WAT, UTC+1) and Portugal (WET, UTC+0) differ by 1 hour in winter — Angola is 1 hour ahead. In summer, Portugal moves to WEST (UTC+1), making Angola and Portugal temporarily on the same time. Angola\'s former colonial ties with Portugal make this a common comparison.' } },
    { '@type': 'Question', name: 'What is the time difference between Angola and South Africa?', acceptedAnswer: { '@type': 'Answer', text: 'Angola (WAT, UTC+1) and South Africa (SAST, UTC+2) differ by 1 hour — Luanda is always 1 hour behind Johannesburg and Cape Town. Neither country observes Daylight Saving Time.' } },
    { '@type': 'Question', name: 'Is Angola on the same time as Nigeria and DRC?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Angola, Nigeria, and the Democratic Republic of the Congo (DRC/Kinshasa) all use WAT (UTC+1) year-round with no Daylight Saving Time. There is no time difference between Luanda, Lagos, and Kinshasa.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Angola', item: 'https://whattime.city/angola/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function AngolaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Angola</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">WAT (UTC+1) · Luanda · No Daylight Saving Time</p>
      <AngolaClockClient />
      <CountryFactsSection hubSlug="angola" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Africa & Related Time Pages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Nigeria time', href: '/nigeria/' }, { label: 'South Africa time', href: '/south-africa/' }, { label: 'Kenya time', href: '/kenya/' }, { label: 'Ghana time', href: '/ghana/' }, { label: 'Cameroon time', href: '/cameroon/' }, { label: 'Lisbon time', href: '/lisbon/' }, { label: 'London time', href: '/london/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Angola: Africa/Luanda (WAT, UTC+1, no DST).</footer>
    </ContentPageWrapper>
  )
}
