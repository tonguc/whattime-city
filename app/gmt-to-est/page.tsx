import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'GMT to EST — Greenwich to Eastern Time Converter',
  description: 'Convert GMT to EST instantly. GMT is 5 hours ahead of EST (4 hours during EDT). Live clocks, conversion table, and best times to schedule US–UK calls.',
  alternates: {
    canonical: 'https://whattime.city/gmt-to-est',
  },
  openGraph: {
    title: 'GMT to EST Time Converter — Greenwich to Eastern',
    description: 'GMT is 5 hours ahead of EST (4 hours during BST/EDT). Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/gmt-to-est',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GMT to EST — Greenwich to Eastern Time',
    description: 'GMT is 5 hours ahead of EST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'GMT',
  toAbbr: 'EST',
  fromTimezone: 'Europe/London',
  toTimezone: 'America/New_York',
  fromFullName: 'Greenwich Mean Time',
  toFullName: 'Eastern Standard Time',
  fromCities: ['London', 'Dublin', 'Lisbon', 'Reykjavik', 'Accra', 'Abidjan'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Toronto, Canada'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours ahead is GMT compared to EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GMT (UTC+0) is 5 hours ahead of EST (UTC-5) during standard time. However, during Daylight Saving Time, the US switches to EDT (UTC-4) and the UK switches to BST (UTC+1), so the difference changes. When both observe summer time simultaneously, the difference is still 5 hours. But there is a 3-week window in March (US switches first) and a 1-week window in October/November (UK switches first) where the difference is only 4 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM GMT, what time is it EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM GMT, it is 4:00 AM EST (during standard time) or 5:00 AM EDT (during US daylight saving time). For a call at 9 AM London time, New York would typically be waking up.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call between UK (GMT) and New York (EST)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best overlap for UK-to-New York calls is 2:00 PM to 5:00 PM GMT (9:00 AM to 12:00 PM EST during standard time). London business hours end at 6 PM GMT, which is only 1 PM EST — giving a limited 4-hour overlap window.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GMT the same as UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GMT and UTC are effectively the same for everyday timekeeping purposes, both at UTC+0. The difference is technical: UTC is an atomic time standard while GMT is a timezone. In common usage, GMT and UTC are interchangeable. London is in GMT during winter and BST (UTC+1) during summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the GMT to EST difference change during Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, unlike US timezone pairs, the GMT-to-EST gap can change. In March, the US switches to EDT 3 weeks before the UK switches to BST, creating a temporary 4-hour difference. In October/November, the UK switches back to GMT 1 week before the US switches back to EST, again creating a 4-hour window.',
      },
    },
  ],
}

export default function GMTtoESTPage() {
  return (
    <ConverterPageShell
      title="GMT to EST Converter"
      subtitle={<>Greenwich Mean Time → Eastern Standard Time · GMT is <strong>5 hours ahead</strong> of EST</>}
      config={config}
      infoTitle="GMT vs EST — What You Need to Know"
      infoBody={<>
        <p>
              <strong>Greenwich Mean Time (GMT)</strong> is UTC+0.
              It is the standard time used in the UK during winter, as well as in Ireland, Portugal, and parts of West Africa.
              The UK switches to <strong>BST (British Summer Time, UTC+1)</strong> during summer.
            </p>
            <p>
              <strong>Eastern Standard Time (EST)</strong> is UTC-5.
              It covers the US East Coast including New York, Boston, Miami, and Washington D.C.
              During summer, it shifts to <strong>EDT (UTC-4)</strong>.
            </p>
            <p>
              The standard difference is <strong>5 hours</strong>. However, a unique complication arises around DST:
              the US and UK switch clocks on different dates in March and October/November, creating short windows
              where the difference is only 4 hours.
            </p>
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
              <strong className="text-amber-700">Watch out in 2026:</strong>
              <ul className="mt-2 space-y-1 list-disc list-inside text-amber-700">
                <li>March 8–29, 2026: US switches to EDT before UK switches to BST → <strong>4-hour gap</strong></li>
                <li>March 29 – November 1, 2026: Both on summer time → <strong>5-hour gap</strong></li>
                <li>October 25 – November 1, 2026: UK switches back before US → <strong>4-hour gap</strong></li>
                <li>After November 1, 2026: Both on standard time → <strong>5-hour gap</strong></li>
              </ul>
            </div>
      </>}
      faqSchema={faqSchema}
    />
  )
}
