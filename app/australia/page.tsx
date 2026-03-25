import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import AustraliaClockClient from './AustraliaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Australia Now — AEST/AEDT · Sydney, Melbourne, Brisbane, Perth',
  description:
    'What time is it in Australia right now? Australia has 5 time zones — AEST (UTC+10), ACST (UTC+9:30), AWST (UTC+8), and more. Live Sydney clock, all Australian time zones, and best time to call.',
  keywords: [
    'time in australia',
    'australia time now',
    'what time is it in australia',
    'australia time',
    'current time in australia',
    'australia time zone',
    'AEST time zone',
    'AEDT time zone',
    'sydney time now',
    'melbourne time now',
    'brisbane time now',
    'perth time now',
    'australia time vs est',
    'australia time vs uk',
    'time difference australia usa',
    'australia utc offset',
    'australian eastern standard time',
    'australian time zones',
  ],
  alternates: {
    canonical: 'https://whattime.city/australia/',
  },
  openGraph: {
    title: 'Current Time in Australia — AEST/AEDT & All Time Zones',
    description:
      'Live Australia time. Sydney uses AEST (UTC+10) or AEDT (UTC+11). Australia spans 5 time zones from Perth (UTC+8) to Sydney (UTC+10/+11). Check all Australian city times.',
    type: 'website',
    url: 'https://whattime.city/australia/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Australia Now — AEST/AEDT',
    description:
      'Live Australia time across all time zones. Sydney AEST/AEDT, Brisbane AEST (no DST), Perth AWST, Adelaide ACST/ACDT, Darwin ACST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Australia right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australia has multiple time zones. Sydney and Melbourne use AEST (UTC+10) in winter and AEDT (UTC+11) during Daylight Saving Time. Brisbane is always AEST (UTC+10) with no DST. Perth uses AWST (UTC+8). Adelaide uses ACST (UTC+9:30) or ACDT (UTC+10:30). The live clock at the top shows the current Sydney time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many time zones does Australia have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australia has five main time zones: AWST (UTC+8) used by Western Australia (Perth); ACWST (UTC+8:45) used by a small region in WA; ACST (UTC+9:30) used by South Australia (Adelaide) and Northern Territory (Darwin); AEST (UTC+10) used by Queensland (Brisbane), NSW (Sydney), Victoria (Melbourne), and Tasmania; and Lord Howe Island at UTC+10:30/+11. Not all of these observe Daylight Saving Time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Australia observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only some Australian states observe Daylight Saving Time. NSW, Victoria, South Australia, Tasmania, and the ACT switch to DST during the Southern Hemisphere summer (roughly October through April). Queensland, Western Australia, and the Northern Territory do NOT observe DST and remain on their standard time year-round. This creates varying time gaps between Australian cities in summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Sydney and Perth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perth (AWST, UTC+8) is 2 hours behind Sydney during Australian Eastern Standard Time (AEST, UTC+10). During Sydney\'s Daylight Saving Time (AEDT, UTC+11), Perth is 3 hours behind Sydney. Perth does not observe DST, so the gap changes seasonally: 2 hours in winter, 3 hours in summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Sydney and Brisbane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brisbane (AEST, UTC+10) and Sydney (AEST, UTC+10) are on the same time in winter. However, Sydney observes Daylight Saving Time (AEDT, UTC+11) while Brisbane does not. During DST (October–April), Sydney is 1 hour ahead of Brisbane. This is why Sydney–Brisbane time comparisons confuse many Australians.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Australia and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sydney (AEST, UTC+10) is 15 hours ahead of New York (EST, UTC−5) and 18 hours ahead of Los Angeles (PST, UTC−8). During US daylight saving time, these gaps shrink by 1 hour. During Sydney\'s own DST (AEDT, UTC+11), the gap increases by another hour. The exact offset changes four times per year as each region switches DST independently.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Australia and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sydney (AEST, UTC+10) is 10 hours ahead of London (GMT, UTC+0) in UK winter. During British Summer Time (BST, UTC+1), the gap narrows to 9 hours. When Sydney is also on AEDT (UTC+11), the gap is 11 hours vs GMT and 10 hours vs BST. The UK and Australia observe DST in opposite seasons (Northern vs Southern Hemisphere), which means the gap shifts frequently.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Brisbane have a different time than Sydney?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brisbane (Queensland) does not observe Daylight Saving Time, while Sydney (NSW) does. In winter, both are on AEST (UTC+10) and show the same time. From October to April, Sydney advances its clocks to AEDT (UTC+11), making Sydney 1 hour ahead of Brisbane. Queensland last trialled DST in 1992 and voted against it in a 1992 referendum, partly due to objections from farming communities in rural Queensland.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Australia', item: 'https://whattime.city/australia/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function AustraliaTimePage() {
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
        Current Time in Australia
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Australian Eastern Standard Time (AEST) · UTC+10 · Multiple time zones across the country
      </p>

      <AustraliaClockClient />
      <CountryFactsSection hubSlug="australia" />

      {/* Australia Time Zones Explained */}
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Australia Time Zones Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              Australia spans a vast east-west distance — about as wide as the continental United States —
              so it uses <strong>five main time zones</strong>. Uniquely, two of these use
              30-minute offsets (UTC+9:30 and UTC+10:30) rather than the standard whole-hour increments
              used by most countries.
            </p>
            <p>
              <strong>Not all states observe Daylight Saving Time.</strong> NSW, Victoria, South Australia,
              Tasmania, and the ACT switch clocks during the Southern Hemisphere summer (October–April).
              Queensland, Western Australia, and the Northern Territory do not observe DST. This creates
              a dynamic where Sydney and Brisbane can be 0 or 1 hour apart depending on the time of year.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">Zone</th>
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">Standard</th>
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">DST</th>
                    <th className="text-left py-2 font-medium text-slate-600">States / Territories</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { zone: 'AWST', std: 'UTC+8', dst: 'No DST', states: 'Western Australia (Perth)' },
                    { zone: 'ACWST', std: 'UTC+8:45', dst: 'No DST', states: 'Eucla, WA (small region)' },
                    { zone: 'ACST', std: 'UTC+9:30', dst: 'ACDT UTC+10:30', states: 'SA (Adelaide), NT (Darwin, no DST)' },
                    { zone: 'AEST', std: 'UTC+10', dst: 'AEDT UTC+11', states: 'QLD (Brisbane, no DST), NSW, VIC, TAS, ACT' },
                    { zone: 'LHST', std: 'UTC+10:30', dst: 'LHDT UTC+11', states: 'Lord Howe Island' },
                  ].map((row) => (
                    <tr key={row.zone}>
                      <td className="py-2 pr-4 font-bold text-slate-700">{row.zone}</td>
                      <td className="py-2 pr-4 text-slate-500">{row.std}</td>
                      <td className="py-2 pr-4 text-slate-500">{row.dst}</td>
                      <td className="py-2 text-slate-600">{row.states}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">AEST Quick Reference — When it is noon in Sydney</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when AEST = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'Melbourne', tz: 'AEST (UTC+10)', local: '12:00 PM (same)', dst: 'Both switch together' },
                  { city: 'Brisbane', tz: 'AEST (UTC+10)', local: '12:00 PM (same)', dst: 'Brisbane has no DST — differs Oct–Apr' },
                  { city: 'Adelaide', tz: 'ACST (UTC+9:30)', local: '11:30 AM', dst: '12:30 PM ACDT Oct–Apr' },
                  { city: 'Darwin', tz: 'ACST (UTC+9:30)', local: '11:30 AM', dst: 'No DST (always 30min behind)' },
                  { city: 'Perth', tz: 'AWST (UTC+8)', local: '10:00 AM', dst: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '11:00 AM', dst: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '10:00 AM', dst: 'No DST' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '2:00 AM', dst: '3:00 AM BST in summer' },
                  { city: 'New York', tz: 'EST (UTC−5)', local: '9:00 PM (prev)', dst: '10:00 PM EDT' },
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '6:00 PM (prev)', dst: '7:00 PM PDT' },
                ].map((row) => (
                  <tr key={row.city}>
                    <td className="py-2 pr-4 font-medium text-slate-700">{row.city}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.tz}</td>
                    <td className="py-2 text-slate-700">
                      {row.local}
                      {row.dst !== 'No DST' && row.dst !== 'Both switch together' && (
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Australian City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Sydney time', href: '/sydney/' },
              { label: 'Melbourne time', href: '/melbourne/' },
              { label: 'Brisbane time', href: '/brisbane/' },
              { label: 'Perth time', href: '/perth/' },
              { label: 'Adelaide time', href: '/adelaide/' },
              { label: 'Darwin time', href: '/darwin/' },
              { label: 'Sydney → New York', href: '/time/sydney/new-york/' },
              { label: 'Sydney → London', href: '/time/sydney/london/' },
              { label: 'Australia country info', href: '/country/australia/' },
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
        Australia main zone: Australia/Sydney (AEST UTC+10 / AEDT UTC+11). DST in NSW, VIC, SA, TAS, ACT.
      </footer>
    </ContentPageWrapper>
  )
}
