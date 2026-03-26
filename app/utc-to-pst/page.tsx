import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'UTC to PST — Universal Time to Pacific Time Converter',
  description: 'Convert UTC to PST instantly. UTC is 8 hours ahead of Pacific Standard Time (PST, UTC-8). Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/utc-to-pst/' },
  openGraph: {
    title: 'UTC to PST Converter — Universal to Pacific Time',
    description: 'UTC is 8 hours ahead of PST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/utc-to-pst/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UTC to PST — Universal to Pacific Time',
    description: 'UTC is 8 hours ahead of PST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'UTC',
  toAbbr: 'PST',
  fromTimezone: 'UTC',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'Coordinated Universal Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['London (winter)', 'Reykjavik', 'Dakar', 'Accra', 'Dublin (winter)', 'Lisbon (winter)'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is UTC ahead of PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UTC is 8 hours ahead of PST (Pacific Standard Time, UTC-8) during winter. During US Daylight Saving Time (summer), the West Coast uses PDT (UTC-7), making UTC only 7 hours ahead.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 12:00 UTC in PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '12:00 UTC is 4:00 AM PST (UTC-8) during winter, or 5:00 AM PDT (UTC-7) during summer Daylight Saving Time. Subtract 8 hours from UTC for PST, or subtract 7 hours for PDT.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time is 9 AM PST in UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '9:00 AM PST is 17:00 UTC (5:00 PM UTC). During PDT (summer), 9:00 AM PDT is 16:00 UTC (4:00 PM UTC).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert UTC to Pacific Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To convert UTC to Pacific Standard Time (PST, winter): subtract 8 hours. To convert to Pacific Daylight Time (PDT, summer March–November): subtract 7 hours. Example: 18:00 UTC = 10:00 AM PST = 11:00 AM PDT.',
      },
    },
  ],
}

export default function UTCtoPST() {
  return (
    <ConverterPageShell
      title="UTC to PST Converter"
      subtitle={<>Coordinated Universal Time → Pacific Standard Time · UTC is <strong>8 hours ahead</strong> of PST</>}
      config={config}
      infoTitle="UTC vs PST — What You Need to Know"
      infoBody={<>
        <p>
              <strong>UTC (Coordinated Universal Time)</strong> is the global time standard
              used in aviation, internet protocols, and international business. It has no Daylight Saving Time.
            </p>
            <p>
              <strong>Pacific Standard Time (PST)</strong> is UTC-8, covering California,
              Washington, Oregon, and Nevada. From March to November, the West Coast uses <strong>PDT (UTC-7)</strong>.
            </p>
            <p>
              Tech companies in Silicon Valley and Seattle often schedule meetings in PT, while global teams work in UTC.
              Knowing this 7–8 hour gap is essential for international scheduling.
            </p>
      </>}
      extraSections={[{
        title: "Quick UTC to PST Reference",
        content: <><div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-6 font-semibold text-slate-700">UTC</th>
                  <th className="text-left py-2 pr-6 font-semibold text-slate-700">PST (UTC-8)</th>
                  <th className="text-left py-2 font-semibold text-slate-700">PDT (UTC-7, summer)</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ['00:00', '4:00 PM (prev day)', '5:00 PM (prev day)'],
                  ['08:00', '12:00 AM midnight', '1:00 AM'],
                  ['12:00', '4:00 AM', '5:00 AM'],
                  ['15:00', '7:00 AM', '8:00 AM'],
                  ['17:00', '9:00 AM', '10:00 AM'],
                  ['20:00', '12:00 PM noon', '1:00 PM'],
                  ['23:00', '3:00 PM', '4:00 PM'],
                ].map(([utc, pst, pdt]) => (
                  <tr key={utc} className="border-b border-slate-100 last:border-b-0">
                    <td className="py-2 pr-6 font-mono">{utc}</td>
                    <td className="py-2 pr-6">{pst}</td>
                    <td className="py-2">{pdt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div></>,
      }]}
      faqSchema={faqSchema}
    />
  )
}
