import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import SenegalClockClient from './SenegalClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Senegal Now — GMT · Dakar · UTC+0',
  description: 'What time is it in Senegal right now? Senegal uses GMT (UTC+0) year-round with no Daylight Saving Time. Dakar live clock, time zone info, and best time to call.',
  keywords: ['time in senegal', 'senegal time now', 'what time is it in senegal', 'dakar time', 'senegal time zone', 'GMT senegal', 'senegal utc+0', 'dakar current time', 'senegal no dst', 'time difference senegal'],
  alternates: { canonical: 'https://whattime.city/senegal/' },
  openGraph: { title: 'Current Time in Senegal — GMT · Dakar', description: 'Live Senegal time. Dakar and all of Senegal use GMT (UTC+0) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/senegal/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Senegal right now?', acceptedAnswer: { '@type': 'Answer', text: 'Senegal uses Greenwich Mean Time (GMT, UTC+0) year-round. Dakar, Thiès, Kaolack, and all Senegalese cities share the same time. The live clock above shows the current time in Senegal.' } },
    { '@type': 'Question', name: 'What time zone is Dakar, Senegal in?', acceptedAnswer: { '@type': 'Answer', text: 'Dakar, Senegal is in the GMT time zone (Africa/Dakar, UTC+0). Dakar does not observe Daylight Saving Time and its clocks never change. It shares the same time as London in winter (but not in summer, when London moves to BST UTC+1).' } },
    { '@type': 'Question', name: 'Does Senegal observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Senegal does not observe Daylight Saving Time. The clocks in Dakar and across Senegal remain at GMT (UTC+0) throughout the entire year.' } },
    { '@type': 'Question', name: 'What is the time difference between Senegal and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'In winter, Senegal (GMT, UTC+0) and the UK (GMT, UTC+0) are on the same time. In summer (late March to late October), the UK moves to BST (UTC+1), making the UK 1 hour ahead of Senegal.' } },
    { '@type': 'Question', name: 'What is the time difference between Senegal and the US East Coast?', acceptedAnswer: { '@type': 'Answer', text: 'Senegal (GMT, UTC+0) is 5 hours ahead of New York during US Standard Time (EST, UTC−5) and 4 hours ahead during US Daylight Saving Time (EDT, UTC−4).' } },
    { '@type': 'Question', name: 'Is Senegal on the same time as Ghana and Ivory Coast?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Senegal, Ghana, and Ivory Coast all use GMT (UTC+0) year-round with no Daylight Saving Time. There is no time difference between Dakar, Accra, and Abidjan.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Senegal', item: 'https://whattime.city/senegal/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function SenegalTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Senegal</h1>
      <p className="text-sm text-slate-500 mb-6">GMT (UTC+0) · Dakar · No Daylight Saving Time</p>
      <SenegalClockClient />
      <CountryFactsSection hubSlug="senegal" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">West Africa & Related Time Pages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Ghana time', href: '/ghana/' }, { label: 'Ivory Coast time', href: '/ivory-coast/' }, { label: 'Nigeria time', href: '/nigeria/' }, { label: 'Morocco time', href: '/morocco/' }, { label: 'London time', href: '/london/' }, { label: 'Paris time', href: '/paris/' }, { label: 'New York time', href: '/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Senegal: Africa/Dakar (GMT, UTC+0, no DST).</footer>
    </ContentPageWrapper>
  )
}
