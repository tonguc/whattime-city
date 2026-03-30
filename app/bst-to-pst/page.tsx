import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'BST to PST — British to Pacific Time',
  description: 'Convert BST to PST instantly. British Summer Time (UTC+1) is 8 hours ahead of Pacific Standard Time (UTC-8). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/bst-to-pst/' },
  openGraph: { title: 'BST to PST Converter — British Summer Time to Pacific', description: 'BST is 8 hours ahead of PST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/bst-to-pst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'BST to PST — British Summer Time to Pacific Time', description: 'BST is 8 hours ahead of PST. Live converter and overlap guide.' },
}

const config: TZPairConfig = {
  fromAbbr: 'BST',
  toAbbr: 'PST',
  fromTimezone: 'Europe/London',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'British Summer Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Dublin', 'Cardiff'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is BST ahead of PST/PDT?', acceptedAnswer: { '@type': 'Answer', text: 'BST (British Summer Time, UTC+1) is 8 hours ahead of PST (UTC-8) in US winter. During US Daylight Saving Time (PDT, UTC-7), BST is 8 hours ahead. Both the UK (BST) and US West Coast (PDT) observe summer time simultaneously from mid-March to late October, making the gap consistently 8 hours during that period.' } },
    { '@type': 'Question', name: 'What is 9 AM BST in PST/PDT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM BST (London summer) is 1:00 AM PST the same day, or 2:00 AM PDT. A 9 AM London morning call is the middle of the night in Los Angeles. The practical overlap window is 5:00–7:00 PM BST = 9:00–11:00 AM PDT.' } },
    { '@type': 'Question', name: 'What is the best time to schedule a London–Los Angeles meeting in summer?', acceptedAnswer: { '@type': 'Answer', text: 'In summer when London uses BST (UTC+1) and LA uses PDT (UTC-7), the best overlap is 5:00–7:00 PM BST = 9:00–11:00 AM PDT. This is late afternoon for London and morning for Los Angeles.' } },
  ],
}

export default function BSTtoPST() {
  return (
    <ConverterPageShell
      title="BST to PST Converter"
      subtitle={<>British Summer Time → Pacific Standard Time · BST is <strong>8 hours ahead</strong> of PDT in summer</>}
      config={config}
      infoTitle="BST vs PST — London to West Coast"
      infoBody={<>
        <p><strong>BST</strong> is UTC+1, the UK&apos;s summer time (late March–late October). <strong>PST</strong> is UTC-8, US West Coast winter time. In summer both shift: BST (UTC+1) vs PDT (UTC-7) = 8 hours apart.</p>
            <p>The London–Silicon Valley gap is 8 hours in summer. The standard overlap: <strong>5:00–7:00 PM BST = 9:00–11:00 AM PDT</strong>.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
