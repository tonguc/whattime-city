import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CST to GMT — Central Time to Greenwich Time Converter',
  description: 'Convert CST to GMT instantly. Central Standard Time (UTC-6) is 6 hours behind GMT. Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/cst-to-gmt/' },
  openGraph: { title: 'CST to GMT Converter — Central to Greenwich Time', description: 'CST is 6 hours behind GMT. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/cst-to-gmt/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'CST to GMT — Central to Greenwich Time', description: 'CST is 6 hours behind GMT. Live converter and full table.' },
}

const config: TZPairConfig = {
  fromAbbr: 'CST',
  toAbbr: 'GMT',
  fromTimezone: 'America/Chicago',
  toTimezone: 'Europe/London',
  fromFullName: 'Central Standard Time',
  toFullName: 'Greenwich Mean Time',
  fromCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
  toCities: ['London', 'Dublin', 'Lisbon', 'Reykjavik', 'Accra', 'Dakar'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I convert CST to GMT?', acceptedAnswer: { '@type': 'Answer', text: 'To convert CST to GMT: add 6 hours. Example: 9:00 AM CST = 15:00 GMT. During CDT (US summer, UTC-5), add 5 hours: 9:00 AM CDT = 14:00 GMT. During UK summer (BST, UTC+1), add 7 hours from CST to get BST.' } },
    { '@type': 'Question', name: 'What is 9 AM CST in GMT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM CST is 15:00 GMT (3:00 PM). During CDT (US summer), 9:00 AM CDT is 14:00 GMT (2:00 PM).' } },
    { '@type': 'Question', name: 'What is the CST offset from GMT?', acceptedAnswer: { '@type': 'Answer', text: 'CST (Central Standard Time) is GMT-6, meaning it is 6 hours behind Greenwich Mean Time. During US Daylight Saving Time, Central Time uses CDT (GMT-5).' } },
  ],
}

export default function CSTtoGMT() {
  return (
    <ConverterPageShell
      title="CST to GMT Converter"
      subtitle={<>Central Standard Time → Greenwich Mean Time · CST is <strong>6 hours behind</strong> GMT</>}
      config={config}
      infoTitle="CST vs GMT — What You Need to Know"
      infoBody={<>
        <p><strong>CST (Central Standard Time)</strong> is UTC-6 / GMT-6, covering Chicago, Houston, and Dallas. In summer it becomes <strong>CDT (UTC-5)</strong>.</p>
            <p><strong>GMT (Greenwich Mean Time)</strong> is UTC+0. London uses GMT in winter and <strong>BST (UTC+1)</strong> from late March to late October.</p>
            <p>9:00 AM in Chicago is 3:00 PM GMT in London — good afternoon overlap for transatlantic business.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
