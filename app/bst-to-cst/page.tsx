import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'BST to CST — British Summer Time to Central Time Converter',
  description: 'Convert BST to CST instantly. British Summer Time (UTC+1) is 6 hours ahead of Central Standard Time (UTC-6). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/bst-to-cst/' },
  openGraph: { title: 'BST to CST Converter — British Summer Time to Central', description: 'BST is 6 hours ahead of CST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/bst-to-cst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'BST to CST — British Summer Time to Central Time', description: 'BST is 6 hours ahead of CST. Live converter and overlap guide.' },
}

const config: TZPairConfig = {
  fromAbbr: 'BST',
  toAbbr: 'CST',
  fromTimezone: 'Europe/London',
  toTimezone: 'America/Chicago',
  fromFullName: 'British Summer Time',
  toFullName: 'Central Standard Time',
  fromCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Dublin', 'Cardiff'],
  toCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is BST ahead of CST?', acceptedAnswer: { '@type': 'Answer', text: 'BST (British Summer Time, UTC+1) is 6 hours ahead of CST (Central Standard Time, UTC-6). During US Central Daylight Time (CDT, UTC-5), BST is 6 hours ahead. The gap stays at 6 hours throughout summer when both zones observe daylight saving simultaneously.' } },
    { '@type': 'Question', name: 'What is 9 AM BST in CST/CDT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM BST is 3:00 AM CST or 3:00 AM CDT. The best overlap is 3:00–5:00 PM BST = 9:00–11:00 AM CDT in summer.' } },
    { '@type': 'Question', name: 'What is the best overlap for London (BST) and Chicago (CDT)?', acceptedAnswer: { '@type': 'Answer', text: 'In summer, the best BST–CDT overlap is 3:00–6:00 PM BST = 9:00 AM–12:00 PM CDT. This gives Chicago a morning window while London is in mid-to-late afternoon.' } },
  ],
}

export default function BSTtoCST() {
  return (
    <ConverterPageShell
      title="BST to CST Converter"
      subtitle={<>British Summer Time → Central Standard Time · BST is <strong>6 hours ahead</strong> of CDT in summer</>}
      config={config}
      infoTitle="BST vs CST — London to Chicago"
      infoBody={<>
        <p><strong>BST</strong> is UTC+1 (UK summer). <strong>CST</strong> is UTC-6 (US Central winter). In summer when both use daylight saving: BST (UTC+1) vs CDT (UTC-5) = 6 hours.</p>
            <p>Best overlap window: <strong>3:00–6:00 PM BST = 9:00 AM–12:00 PM CDT</strong>.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
