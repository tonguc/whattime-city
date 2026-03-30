import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'GMT to PST Converter — Greenwich to Pacific',
  description: 'Convert GMT to PST instantly. GMT is 8 hours ahead of Pacific Standard Time (PST, UTC-8). Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/gmt-to-pst/' },
  openGraph: {
    title: 'GMT to PST — Greenwich to Pacific Time',
    description: 'GMT is 8 hours ahead of PST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/gmt-to-pst/',
    siteName: 'whattime.city',
  },
  twitter: { card: 'summary_large_image', title: 'GMT to PST — Greenwich to Pacific Time', description: 'GMT is 8 hours ahead of PST. Live converter and full table.' },
}

const config: TZPairConfig = {
  fromAbbr: 'GMT',
  toAbbr: 'PST',
  fromTimezone: 'Europe/London',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'Greenwich Mean Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['London', 'Dublin', 'Lisbon', 'Reykjavik', 'Accra', 'Dakar'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is GMT ahead of PST?', acceptedAnswer: { '@type': 'Answer', text: 'GMT is 8 hours ahead of PST (Pacific Standard Time, UTC-8) during winter. During US Pacific Daylight Time (PDT, UTC-7), GMT is 7 hours ahead. During UK summer (BST, UTC+1), the gap changes further — BST is 8 hours ahead of PST and 9 hours ahead during PDT.' } },
    { '@type': 'Question', name: 'What is 9 AM GMT in PST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM GMT is 1:00 AM PST (UTC-8) in winter. During PDT (US summer), 9:00 AM GMT is 2:00 AM PDT. This large gap makes London–West Coast scheduling challenging — the best overlap window is 4:00–6:00 PM GMT / 8:00–10:00 AM PST.' } },
    { '@type': 'Question', name: 'What is the time difference between London and Los Angeles?', acceptedAnswer: { '@type': 'Answer', text: 'In winter (GMT vs PST), London is 8 hours ahead of Los Angeles. In summer, when the US uses PDT (UTC-7) and the UK uses BST (UTC+1), the gap narrows to 8 hours. During the brief DST transition windows (when one country has changed clocks but not the other), the difference can be 7 or 9 hours.' } },
    { '@type': 'Question', name: 'What is the best time to call Los Angeles from London?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Los Angeles from London is between 4:00 PM and 7:00 PM GMT/BST, which is 8:00 AM–11:00 AM PST/PDT in LA. This gives you a morning window on the West Coast while still being business hours in London.' } },
  ],
}

export default function GMTtoPST() {
  return (
    <ConverterPageShell
      title="GMT to PST Converter"
      subtitle={<>Greenwich Mean Time → Pacific Standard Time · GMT is <strong>8 hours ahead</strong> of PST</>}
      config={config}
      infoTitle="GMT vs PST — What You Need to Know"
      infoBody={<>
        <p><strong>GMT (Greenwich Mean Time)</strong> is UTC+0, the baseline world time. London uses GMT in winter and BST (UTC+1) in summer from late March to late October.</p>
            <p><strong>PST (Pacific Standard Time)</strong> is UTC-8, used by the US West Coast in winter. From March to November, it shifts to <strong>PDT (UTC-7)</strong>.</p>
            <p>The London–Los Angeles corridor is one of the most important in global tech and finance. The <strong>optimal meeting window</strong> is 4:00–6:00 PM London time / 8:00–10:00 AM Los Angeles time.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
