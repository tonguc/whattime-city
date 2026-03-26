import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'BST to EST — British Summer Time to Eastern Time Converter',
  description: 'Convert BST to EST instantly. British Summer Time (UTC+1) is 5 hours ahead of Eastern Standard Time (UTC-5). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/bst-to-est/' },
  openGraph: { title: 'BST to EST Converter — British Summer Time to Eastern', description: 'BST is 5 hours ahead of EST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/bst-to-est/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'BST to EST — British Summer Time to Eastern Time', description: 'BST is 5 hours ahead of EST. Live converter and overlap guide.' },
}

const config: TZPairConfig = {
  fromAbbr: 'BST',
  toAbbr: 'EST',
  fromTimezone: 'Europe/London',
  toTimezone: 'America/New_York',
  fromFullName: 'British Summer Time',
  toFullName: 'Eastern Standard Time',
  fromCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Dublin', 'Cardiff'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Philadelphia, PA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is BST ahead of EST?', acceptedAnswer: { '@type': 'Answer', text: 'BST (British Summer Time, UTC+1) is 5 hours ahead of EST (Eastern Standard Time, UTC-5). However, this comparison is slightly unusual: BST is the UK\'s summer time (active March–October), while EST is the US East Coast\'s winter time (active November–March). In summer when the US uses EDT (UTC-4), BST is only 5 hours ahead. When both zones are on summer time simultaneously (briefly in spring/autumn), the gap can be 5 or 4 hours.' } },
    { '@type': 'Question', name: 'What is 9 AM BST in EST/EDT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM BST (London summer) is 4:00 AM EST or 4:00 AM EDT (New York). The UK and US typically observe summer time simultaneously from mid-March to late October, during which BST (UTC+1) is 5 hours ahead of EDT (UTC-4). Outside US DST, BST is 6 hours ahead of EST (UTC-5).' } },
    { '@type': 'Question', name: 'What is the best time to call New York from London in summer?', acceptedAnswer: { '@type': 'Answer', text: 'The best overlap window between London (BST) and New York (EDT) in summer is 2:00–6:00 PM BST, which equals 9:00 AM–1:00 PM EDT. This gives New York a solid morning window while London is in mid-to-late afternoon.' } },
    { '@type': 'Question', name: 'What is the difference between GMT and BST?', acceptedAnswer: { '@type': 'Answer', text: 'GMT (Greenwich Mean Time) is UTC+0 and is used in the UK from late October to late March. BST (British Summer Time) is UTC+1 and is used from the last Sunday of March to the last Sunday of October. BST is the UK\'s Daylight Saving Time.' } },
  ],
}

export default function BSTtoEST() {
  return (
    <ConverterPageShell
      title="BST to EST Converter"
      subtitle={<>British Summer Time → Eastern Time · BST is <strong>5 hours ahead</strong> of EDT in summer</>}
      config={config}
      infoTitle="BST vs EST — London to New York in Summer"
      infoBody={<>
        <p><strong>BST (British Summer Time)</strong> is UTC+1, active from the last Sunday of March to the last Sunday of October. Outside this window, the UK uses GMT (UTC+0).</p>
            <p><strong>EST (Eastern Standard Time)</strong> is UTC-5, used by New York in winter. In summer the US East Coast uses <strong>EDT (UTC-4)</strong>.</p>
            <p>The London–New York corridor is the world&apos;s most traded financial route. In summer, when both cities are on BST and EDT, the gap is 5 hours. The <strong>best overlap window</strong> is 2:00–6:00 PM BST / 9:00 AM–1:00 PM EDT.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
