import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CST to MST — Central to Mountain Time Converter',
  description: 'Convert CST to MST instantly. Central Standard Time is 1 hour ahead of Mountain Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/cst-to-mst/' },
  openGraph: { title: 'CST to MST Time Converter — Central to Mountain', description: 'CST is 1 hour ahead of MST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/cst-to-mst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'CST to MST — Central to Mountain Time', description: 'CST is 1 hour ahead of MST. Live converter and full table.' },
}

const config: TZPairConfig = {
  fromAbbr: 'CST',
  toAbbr: 'MST',
  fromTimezone: 'America/Chicago',
  toTimezone: 'America/Denver',
  fromFullName: 'Central Standard Time',
  toFullName: 'Mountain Standard Time',
  fromCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
  toCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is CST ahead of MST?', acceptedAnswer: { '@type': 'Answer', text: 'CST (Central Standard Time, UTC-6) is 1 hour ahead of MST (Mountain Standard Time, UTC-7). Both zones observe DST on the same dates, keeping the 1-hour gap constant year-round.' } },
    { '@type': 'Question', name: 'When it is 9 AM CST, what time is it MST?', acceptedAnswer: { '@type': 'Answer', text: 'When it is 9:00 AM CST, it is 8:00 AM MST. CST is always 1 hour ahead of MST.' } },
    { '@type': 'Question', name: 'What is the time difference between Chicago and Denver?', acceptedAnswer: { '@type': 'Answer', text: 'Chicago (Central Time) is 1 hour ahead of Denver (Mountain Time) year-round. Both cities observe Daylight Saving Time simultaneously, maintaining the constant 1-hour difference.' } },
  ],
}

export default function CSTtoMST() {
  return (
    <ConverterPageShell
      title="CST to MST Converter"
      subtitle={<>Central Standard Time → Mountain Standard Time · CST is <strong>1 hour ahead</strong> of MST</>}
      config={config}
      infoTitle="CST vs MST — What You Need to Know"
      infoBody={<>
        <p><strong>CST (Central Standard Time)</strong> is UTC-6, covering Illinois, Texas, Minnesota and Louisiana. In summer it becomes <strong>CDT (UTC-5)</strong>.</p>
            <p><strong>MST (Mountain Standard Time)</strong> is UTC-7, covering Colorado, Utah, Montana and New Mexico. In summer it becomes <strong>MDT (UTC-6)</strong>.</p>
            <p>The 1-hour gap is constant. A 9 AM Denver meeting is 10 AM in Chicago — easy cross-timezone coordination.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
