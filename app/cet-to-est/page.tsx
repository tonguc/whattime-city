import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CET to EST — Central European to Eastern',
  description: 'Convert CET to EST instantly. Central European Time is 6 hours ahead of Eastern Standard Time. Live clocks, full conversion table, and Europe–US East Coast scheduling guide.',
  alternates: { canonical: 'https://whattime.city/cet-to-est' },
  openGraph: {
    title: 'CET to EST Converter — Europe to Eastern',
    description: 'CET is 6 hours ahead of EST. Live clocks, conversion table, and best overlap hours for Europe–US East Coast calls.',
    type: 'website',
    url: 'https://whattime.city/cet-to-est',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CET to EST Converter',
    description: 'CET is 6 hours ahead of EST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'CET',
  toAbbr: 'EST',
  fromTimezone: 'Europe/Berlin',
  toTimezone: 'America/New_York',
  fromFullName: 'Central European Time',
  toFullName: 'Eastern Standard Time',
  fromCities: ['Frankfurt', 'Berlin', 'Paris', 'Amsterdam', 'Madrid', 'Rome', 'Vienna', 'Zurich'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Toronto, Canada'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours ahead is CET compared to EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CET (UTC+1) is 6 hours ahead of EST (UTC-5). During summer, both Europe (CEST, UTC+2) and the US (EDT, UTC-4) observe daylight saving time, keeping the gap at 6 hours. However, brief 5-hour or 7-hour gaps occur during transition weeks in March and October when the two regions switch clocks on different dates.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM in Frankfurt (CET), what time is it in New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM CET in Frankfurt, it is 3:00 AM EST in New York. For a 9:00 AM New York start time, it is already 3:00 PM CET in Frankfurt — well into the European afternoon.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Europe from New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best window for business calls between New York and CET cities (Frankfurt, Berlin, Paris) is 9:00 AM to 12:00 PM EST, which corresponds to 3:00 PM to 6:00 PM CET. This gives a 3-hour overlap during standard working hours on both sides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the CET to EST time difference ever change?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard difference is 6 hours. It briefly changes to 5 hours in mid-March when the US switches to EDT before Europe switches to CEST, and to 7 hours in late October when Europe switches back to CET before the US switches back to EST. These transitional gaps last about 1–2 weeks each.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries are in the CET time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CET covers most of continental Europe: Germany, France, Italy, Spain, Netherlands, Belgium, Austria, Switzerland, Poland, Czech Republic, Hungary, Slovakia, Slovenia, Croatia, Serbia, Bosnia, North Macedonia, Albania, Kosovo, Monaco, Luxembourg, Andorra, San Marino, and Vatican City.',
      },
    },
  ],
}

export default function CetToEstPage() {
  return (
    <ConverterPageShell
      title="CET to EST Converter"
      subtitle={<>Central European Time → Eastern Standard Time · CET is <strong>6 hours ahead</strong> of EST</>}
      config={config}
      infoTitle="CET vs EST — What You Need to Know"
      infoBody={<>
        <p dangerouslySetInnerHTML={{ __html: '<strong>Central European Time (CET)</strong> is UTC+1. During summer, it becomes <strong>CEST (UTC+2)</strong> when most of Europe observes Daylight Saving Time (last Sunday in March → last Sunday in October).' }} />
            <p dangerouslySetInnerHTML={{ __html: '<strong>Eastern Standard Time (EST)</strong> is UTC-5. During summer, it becomes <strong>EDT (UTC-4)</strong> from the second Sunday in March to the first Sunday in November.' }} />
            <p dangerouslySetInnerHTML={{ __html: 'The standard gap is <strong>6 hours</strong>. The best overlap for business calls is <strong>9 AM – 12 PM EST = 3 PM – 6 PM CET</strong> — a practical 3-hour window where both sides are comfortably within working hours.' }} />
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
              <strong className="text-amber-700">DST transition gap:</strong>
              <p className="text-amber-700 mt-1">In mid-March, the US switches to EDT about 2 weeks before Europe switches to CEST — briefly creating a 5-hour gap. In late October, Europe switches back to CET 1 week before the US switches back to EST — briefly creating a 7-hour gap.</p>
            </div>
      </>}
      faqSchema={faqSchema}
    />
  )
}
