import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import IvoryCoastClockClient from './IvoryCoastClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Ivory Coast Now — GMT · Abidjan · UTC+0',
  description: 'What time is it in Ivory Coast (Côte d\'Ivoire) right now? Ivory Coast uses GMT (UTC+0) year-round with no Daylight Saving Time. Abidjan live clock and time zone info.',
  keywords: ['time in ivory coast', 'ivory coast time now', 'what time is it in ivory coast', 'abidjan time', 'cote divoire time', 'ivory coast time zone', 'GMT ivory coast', 'abidjan current time', 'ivory coast no dst', 'time difference ivory coast'],
  alternates: { canonical: 'https://whattime.city/ivory-coast/' },
  openGraph: { title: 'Current Time in Ivory Coast — GMT · Abidjan', description: 'Live Ivory Coast time. Abidjan and all of Ivory Coast (Côte d\'Ivoire) use GMT (UTC+0) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/ivory-coast/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Ivory Coast right now?', acceptedAnswer: { '@type': 'Answer', text: 'Ivory Coast (Côte d\'Ivoire) uses Greenwich Mean Time (GMT, UTC+0) year-round. Abidjan, Bouaké, Yamoussoukro, and all Ivorian cities share the same time. The live clock above shows the current time in Ivory Coast.' } },
    { '@type': 'Question', name: 'What time zone is Abidjan in?', acceptedAnswer: { '@type': 'Answer', text: 'Abidjan, the economic capital of Ivory Coast, uses the GMT time zone (Africa/Abidjan, UTC+0). Abidjan does not observe Daylight Saving Time. It shares the same time as Accra (Ghana), Dakar (Senegal), and London in winter.' } },
    { '@type': 'Question', name: 'Does Ivory Coast observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Ivory Coast does not observe Daylight Saving Time. Clocks across Ivory Coast remain at GMT (UTC+0) throughout the entire year.' } },
    { '@type': 'Question', name: 'What is the time difference between Ivory Coast and France?', acceptedAnswer: { '@type': 'Answer', text: 'Ivory Coast (GMT, UTC+0) is 1 hour behind France (CET, UTC+1) in winter. During French summer time (CEST, UTC+2), Ivory Coast is 2 hours behind France. French businesses in the morning start their workday 1–2 hours ahead of Abidjan.' } },
    { '@type': 'Question', name: 'What is the time difference between Ivory Coast and Nigeria?', acceptedAnswer: { '@type': 'Answer', text: 'Ivory Coast (GMT, UTC+0) is always 1 hour behind Nigeria (WAT, UTC+1). When it is noon in Abidjan, it is 1:00 PM in Lagos. Neither country observes Daylight Saving Time.' } },
    { '@type': 'Question', name: 'Is Abidjan on the same time as Accra and Dakar?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Abidjan (Ivory Coast), Accra (Ghana), and Dakar (Senegal) all use GMT (UTC+0) year-round with no Daylight Saving Time. There is no time difference between these West African capitals.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Ivory Coast', item: 'https://whattime.city/ivory-coast/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function IvoryCoastTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Ivory Coast</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">GMT (UTC+0) · Abidjan · No Daylight Saving Time</p>
      <IvoryCoastClockClient />
      <CountryFactsSection hubSlug="ivory-coast" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">West Africa & Related Time Pages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Ghana time', href: '/ghana/' }, { label: 'Senegal time', href: '/senegal/' }, { label: 'Nigeria time', href: '/nigeria/' }, { label: 'Angola time', href: '/angola/' }, { label: 'London time', href: '/london/' }, { label: 'Paris time', href: '/paris/' }, { label: 'New York time', href: '/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Ivory Coast: Africa/Abidjan (GMT, UTC+0, no DST).</footer>
    </ContentPageWrapper>
  )
}
