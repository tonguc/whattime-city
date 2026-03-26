import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'IST to MST — India Standard Time to Mountain Time Converter',
  description: 'Convert IST to MST instantly. India Standard Time (UTC+5:30) is 12 hours 30 minutes ahead of Mountain Standard Time (UTC-7). Live clocks and conversion table.',
  alternates: { canonical: 'https://whattime.city/ist-to-mst/' },
  openGraph: { title: 'IST to MST Converter — India to Mountain Time', description: 'IST is 12.5 hours ahead of MST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/ist-to-mst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'IST to MST — India Standard Time to Mountain Time', description: 'IST is 12.5 hours ahead of MST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'IST',
  toAbbr: 'MST',
  fromTimezone: 'Asia/Kolkata',
  toTimezone: 'America/Denver',
  fromFullName: 'India Standard Time',
  toFullName: 'Mountain Standard Time',
  fromCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
  toCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is IST ahead of MST?', acceptedAnswer: { '@type': 'Answer', text: 'IST (India Standard Time, UTC+5:30) is 12 hours 30 minutes ahead of MST (Mountain Standard Time, UTC-7). During US Mountain Daylight Time (MDT, UTC-6), the difference is 11 hours 30 minutes. India does not observe DST, so the gap only changes when the US shifts clocks.' } },
    { '@type': 'Question', name: 'What is 9 AM IST in MST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM IST is 8:30 PM MST the previous evening in winter (12.5 hours behind). During MDT (US summer), 9:00 AM IST = 9:30 PM MDT the previous evening.' } },
    { '@type': 'Question', name: 'What is the best time to call Denver from India?', acceptedAnswer: { '@type': 'Answer', text: 'The best window to call Denver (MST) from India (IST) is 8:30 PM–11:30 PM IST, which reaches Denver at 8:00 AM–11:00 AM MST. In summer (MDT), call 7:30 PM–10:30 PM IST to reach Denver 8:00 AM–11:00 AM MDT.' } },
    { '@type': 'Question', name: 'Why does India have a 30-minute offset?', acceptedAnswer: { '@type': 'Answer', text: 'India uses UTC+5:30, a half-hour offset, because when India standardised its time zone in 1906 it chose a meridian at 82°30\'E that falls halfway between UTC+5 and UTC+6. This single national time zone was a political decision to unify the vast country under one time, despite spanning over 30 degrees of longitude.' } },
  ],
}

export default function ISTtoMST() {
  return (
    <ConverterPageShell
      title="IST to MST Converter"
      subtitle={<>India Standard Time → Mountain Standard Time · IST is <strong>12 hours 30 minutes ahead</strong> of MST</>}
      config={config}
      infoTitle="IST vs MST — India to Rocky Mountains"
      infoBody={<>
        <p><strong>IST (India Standard Time)</strong> is UTC+5:30, with no DST. India&apos;s half-hour offset makes it unique — conversions always involve :30 minutes.</p>
            <p><strong>MST (Mountain Standard Time)</strong> is UTC-7, covering Colorado, Utah, and Montana. It shifts to <strong>MDT (UTC-6)</strong> in summer.</p>
            <p>The 12.5-hour gap is most common in IT outsourcing (Bangalore or Hyderabad teams coordinating with Denver or Salt Lake City clients).</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
