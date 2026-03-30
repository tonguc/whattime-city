import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'MST to EST — 2 Hours Behind Eastern',
  description: 'MST is 2 hours behind EST. Convert Mountain Standard Time to Eastern — live clocks, full table, and answers to "Is Mountain Time 2 hours behind EST?", "What is 10am MST in EST?" and "What is 4pm EST in Mountain Time?"',
  alternates: { canonical: 'https://whattime.city/mst-to-est/' },
  openGraph: {
    title: 'MST to EST Converter — 2 Hours Behind Eastern',
    description: 'Convert MST to EST. Mountain Time is always 2 hours behind Eastern Time. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/mst-to-est/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MST to EST — Mountain is 2 Hours Behind Eastern',
    description: 'MST is 2 hours behind EST. Live converter, full table, and common time conversions.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'MST',
  toAbbr: 'EST',
  fromTimezone: 'America/Denver',
  toTimezone: 'America/New_York',
  fromFullName: 'Mountain Standard Time',
  toFullName: 'Eastern Standard Time',
  fromCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Philadelphia, PA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is MST behind EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MST (Mountain Standard Time, UTC-7) is 2 hours behind EST (Eastern Standard Time, UTC-5). This difference stays at exactly 2 hours year-round because both zones observe Daylight Saving Time on the same dates, shifting to MDT (UTC-6) and EDT (UTC-4) simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM MST, what time is it EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM MST, it is 11:00 AM EST. MST is always 2 hours behind EST.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Arizona use MST or EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arizona uses MST (UTC-7) year-round and does NOT observe Daylight Saving Time (except the Navajo Nation). This means in summer, when neighboring states switch to MDT (UTC-6), Arizona stays at UTC-7 — making it effectively on Pacific Daylight Time (PDT) during summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What states are in Mountain Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mountain Time covers: Colorado, Montana, Wyoming, New Mexico, most of Idaho, Utah, Arizona (except Navajo Nation), and parts of the Dakotas, Kansas, and Nebraska.',
      },
    },
  ],
}

export default function MSTtoEST() {
  return (
    <ConverterPageShell
      title="MST to EST Converter"
      subtitle={<>Mountain Standard Time → Eastern Standard Time · MST is <strong>2 hours behind</strong> EST</>}
      config={config}
      infoTitle="MST vs EST — What You Need to Know"
      infoBody={<>
        <p>
              <strong>Mountain Standard Time (MST)</strong> is UTC-7.
              It covers the Rocky Mountain states: Colorado, Utah, Montana, Wyoming, New Mexico, and Idaho.
              During Daylight Saving Time, MST becomes <strong>MDT (UTC-6)</strong>.
            </p>
            <p>
              <strong>Eastern Standard Time (EST)</strong> is UTC-5.
              It covers the US East Coast: New York, Florida, Georgia, and the Atlantic seaboard.
              During summer it becomes <strong>EDT (UTC-4)</strong>.
            </p>
            <p>
              The difference is always <strong>2 hours</strong>. A 9 AM ET meeting is 7 AM MT — an early but manageable start for Mountain Time attendees.
            </p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
