import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'EST to GMT Converter — Eastern to Greenwich',
  description: 'Convert EST to GMT instantly. Eastern Standard Time is 5 hours behind GMT. Live clocks, full conversion table, and US–UK business hours overlap guide.',
  alternates: { canonical: 'https://whattime.city/est-to-gmt' },
  openGraph: {
    title: 'EST to GMT — Eastern to Greenwich Time',
    description: 'EST is 5 hours behind GMT. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/est-to-gmt',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EST to GMT — Eastern to Greenwich Time',
    description: 'EST is 5 hours behind GMT. Live converter.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'EST',
  toAbbr: 'GMT',
  fromTimezone: 'America/New_York',
  toTimezone: 'Europe/London',
  fromFullName: 'Eastern Standard Time',
  toFullName: 'Greenwich Mean Time',
  fromCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Toronto, Canada'],
  toCities: ['London', 'Dublin', 'Lisbon', 'Reykjavik', 'Accra', 'Abidjan'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours behind is EST compared to GMT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (UTC-5) is 5 hours behind GMT (UTC+0) during standard time. During US Daylight Saving Time, EDT (UTC-4) is 4 hours behind GMT. When the UK is on BST (UTC+1), EST is 6 hours behind. The actual difference depends on which DST periods are active.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM EST, what time is it in London (GMT)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM EST, it is 2:00 PM GMT (during UK standard time). During British Summer Time (BST), London is at UTC+1, so 9:00 AM EST = 3:00 PM BST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time for a New York to London call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best window is 9:00 AM to 12:00 PM EST (2:00–5:00 PM GMT). London business hours end around 6 PM GMT (1 PM EST), giving only a 4-hour daily overlap. Schedule calls for morning New York time to catch London before close of business.',
      },
    },
  ],
}

export default function ESTtoGMTPage() {
  return (
    <ConverterPageShell
      title="EST to GMT Converter"
      subtitle={<>Eastern Standard Time → Greenwich Mean Time · EST is <strong>5 hours behind</strong> GMT</>}
      config={config}
      infoTitle="EST vs GMT — What You Need to Know"
      infoBody={<>
        <p>
              <strong>EST (UTC-5)</strong> is the US East Coast in winter.
              Summer: <strong>EDT (UTC-4)</strong>.
            </p>
            <p>
              <strong>GMT (UTC+0)</strong> is London in winter.
              Summer: <strong>BST (UTC+1)</strong>.
            </p>
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
              <strong className="text-amber-700">2026 shifting gap:</strong>
              <ul className="mt-1 list-disc list-inside text-amber-700 space-y-1">
                <li>Before March 8: EST vs GMT → <strong>5h</strong></li>
                <li>March 8–29 (US on EDT, UK still GMT): <strong>4h</strong></li>
                <li>March 29 – Oct 25 (both on summer time): <strong>5h</strong></li>
                <li>Oct 25 – Nov 1 (UK on GMT, US still EDT): <strong>4h</strong></li>
                <li>After Nov 1: EST vs GMT → <strong>5h</strong></li>
              </ul>
            </div>
      </>}
      faqSchema={faqSchema}
    />
  )
}
