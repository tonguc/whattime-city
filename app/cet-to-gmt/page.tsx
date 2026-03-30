import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CET to GMT Converter — Europe to Greenwich',
  description: 'Convert CET to GMT instantly. Central European Time (UTC+1) is 1 hour ahead of GMT (UTC+0). Live clocks, Europe–UK scheduling guide and conversion table.',
  alternates: { canonical: 'https://whattime.city/cet-to-gmt/' },
  openGraph: { title: 'CET to GMT Converter — Central Europe to UK', description: 'CET is 1 hour ahead of GMT. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/cet-to-gmt/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'CET to GMT — Central European Time to GMT', description: 'CET is 1 hour ahead of GMT. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'CET',
  toAbbr: 'GMT',
  fromTimezone: 'Europe/Berlin',
  toTimezone: 'Europe/London',
  fromFullName: 'Central European Time',
  toFullName: 'Greenwich Mean Time',
  fromCities: ['Frankfurt', 'Berlin', 'Paris', 'Amsterdam', 'Madrid', 'Rome', 'Vienna', 'Zurich'],
  toCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Dublin', 'Cardiff'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is CET ahead of GMT?', acceptedAnswer: { '@type': 'Answer', text: 'CET (Central European Time, UTC+1) is 1 hour ahead of GMT (UTC+0). This 1-hour gap is consistent in winter. In summer, both regions observe daylight saving: CEST (UTC+2) is 1 hour ahead of BST (UTC+1), keeping the same 1-hour difference. The gap stays at 1 hour throughout the year.' } },
    { '@type': 'Question', name: 'What is 9 AM CET in GMT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM CET is 8:00 AM GMT. Since the gap is only 1 hour, business hours overlap almost completely. A 9:00 AM Frankfurt meeting equals 8:00 AM London, and a 5:00 PM Berlin end of day equals 4:00 PM London.' } },
    { '@type': 'Question', name: 'Does the CET to GMT gap change in summer?', acceptedAnswer: { '@type': 'Answer', text: 'No. The 1-hour gap stays constant throughout the year. In winter, CET (UTC+1) is 1 hour ahead of GMT (UTC+0). In summer, CEST (UTC+2) is 1 hour ahead of BST (UTC+1). Both regions observe DST simultaneously, so the offset between them never changes.' } },
    { '@type': 'Question', name: 'What is the difference between CET and GMT for business?', acceptedAnswer: { '@type': 'Answer', text: 'The 1-hour difference means European CET cities (Frankfurt, Berlin, Paris, Amsterdam) are always just 1 hour ahead of London. This makes scheduling easy — any working hour in London is a working hour in Frankfurt. The London Stock Exchange and Frankfurt/Euronext exchanges have significant daily overlap.' } },
  ],
}

export default function CETtoGMT() {
  return (
    <ConverterPageShell
      title="CET to GMT Converter"
      subtitle={<>Central European Time → Greenwich Mean Time · CET is <strong>1 hour ahead</strong> of GMT</>}
      config={config}
      infoTitle="CET vs GMT — Frankfurt to London"
      infoBody={<>
        <p><strong>CET (UTC+1)</strong> — Central European Time, covering Germany, France, Italy, Spain, Netherlands, and ~20 more countries. Shifts to CEST (UTC+2) in summer.</p>
            <p><strong>GMT (UTC+0)</strong> — UK winter time. London uses BST (UTC+1) from late March to late October.</p>
            <p>With only 1 hour between them, CET and GMT cities share nearly identical working hours. The gap stays at 1 hour year-round, making Europe–UK scheduling the simplest of all cross-timezone combinations.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
