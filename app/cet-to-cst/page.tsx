import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CET to CST Converter — Europe to CST',
  description: 'Convert CET to CST instantly. Central European Time (UTC+1) is 7 hours ahead of Central Standard Time (UTC-6). Live clocks, Europe–US Central scheduling guide.',
  alternates: { canonical: 'https://whattime.city/cet-to-cst/' },
  openGraph: { title: 'CET to CST Converter — Central Europe to Central US', description: 'CET is 7 hours ahead of CST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/cet-to-cst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'CET to CST — Central European to Central Time', description: 'CET is 7 hours ahead of CST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'CET',
  toAbbr: 'CST',
  fromTimezone: 'Europe/Berlin',
  toTimezone: 'America/Chicago',
  fromFullName: 'Central European Time',
  toFullName: 'Central Standard Time',
  fromCities: ['Frankfurt', 'Berlin', 'Paris', 'Amsterdam', 'Madrid', 'Rome', 'Vienna', 'Zurich'],
  toCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is CET ahead of CST?', acceptedAnswer: { '@type': 'Answer', text: 'CET (Central European Time, UTC+1) is 7 hours ahead of CST (Central Standard Time, UTC-6). During summer, both Europe (CEST, UTC+2) and the US (CDT, UTC-5) observe daylight saving time, keeping the gap at 7 hours. Brief 6-hour or 8-hour gaps occur during transition weeks in March and October.' } },
    { '@type': 'Question', name: 'What is 9 AM CET in CST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM CET (Frankfurt/Berlin) is 2:00 AM CST (Chicago). For a 9:00 AM Chicago start, it is already 4:00 PM CET in Europe. The best overlap window is 9:00 AM–12:00 PM CST = 4:00–7:00 PM CET — catching US morning while Europe wraps up the workday.' } },
    { '@type': 'Question', name: 'What is the best time to call Chicago from Frankfurt?', acceptedAnswer: { '@type': 'Answer', text: 'The best overlap for Frankfurt (CET) and Chicago (CST) is 4:00–6:00 PM CET = 9:00–11:00 AM CST. This gives Frankfurt a late-afternoon slot while Chicago has a productive morning window. In summer (CEST/CDT), the same hours apply: 4:00–6:00 PM CEST = 9:00–11:00 AM CDT.' } },
    { '@type': 'Question', name: 'Which countries use CET?', acceptedAnswer: { '@type': 'Answer', text: 'CET covers most of continental Europe: Germany, France, Italy, Spain, Netherlands, Belgium, Austria, Switzerland, Poland, Czech Republic, Hungary, Slovakia, Slovenia, Croatia, Serbia, Bosnia, North Macedonia, Albania, Kosovo, Monaco, Luxembourg, Andorra, San Marino, and Vatican City. In summer all shift to CEST (UTC+2).' } },
  ],
}

export default function CETtoCST() {
  return (
    <ConverterPageShell
      title="CET to CST Converter"
      subtitle={<>Central European Time → Central Standard Time · CET is <strong>7 hours ahead</strong> of CST</>}
      config={config}
      infoTitle="CET vs CST — Europe to Central US"
      infoBody={<>
        <p><strong>CET (UTC+1)</strong> — Central European Time, used by Germany, France, Italy, Spain, and ~20 more countries. Shifts to CEST (UTC+2) in summer (last Sunday in March → last Sunday in October).</p>
            <p><strong>CST (UTC-6)</strong> — US Central Standard Time. Chicago, Houston, Dallas shift to CDT (UTC-5) in summer (second Sunday in March → first Sunday in November).</p>
            <p>Best overlap: <strong>4:00–6:00 PM CET = 9:00–11:00 AM CST</strong>. DST transitions in March and October can temporarily shift the gap to 6 or 8 hours for 1–2 weeks.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
