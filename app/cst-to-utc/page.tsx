import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CST to UTC — Central Time to UTC Converter',
  description: 'Convert CST to UTC instantly. Central Standard Time (UTC-6) is 6 hours behind UTC. Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/cst-to-utc/' },
  openGraph: {
    title: 'CST to UTC Converter — Central Time to Universal Time',
    description: 'CST is 6 hours behind UTC. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/cst-to-utc/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CST to UTC — Central Time to Universal Time',
    description: 'CST is 6 hours behind UTC. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'CST',
  toAbbr: 'UTC',
  fromTimezone: 'America/Chicago',
  toTimezone: 'UTC',
  fromFullName: 'Central Standard Time',
  toFullName: 'Coordinated Universal Time',
  fromCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
  toCities: ['London (winter)', 'Reykjavik', 'Dakar', 'Accra', 'Dublin (winter)', 'Lisbon (winter)'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I convert CST to UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To convert CST to UTC: add 6 hours. Example: 9:00 AM CST = 15:00 UTC (3:00 PM UTC). During Daylight Saving Time (CDT, UTC-5), add only 5 hours: 9:00 AM CDT = 14:00 UTC (2:00 PM UTC).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 9 AM CST in UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '9:00 AM CST is 15:00 UTC (3:00 PM UTC). During US Central Daylight Time (CDT, summer), 9:00 AM CDT is 14:00 UTC (2:00 PM UTC).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the CST UTC offset?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CST (Central Standard Time) has a UTC offset of UTC-6, meaning it is 6 hours behind Coordinated Universal Time. During US Daylight Saving Time (spring through fall), the Central zone uses CDT (UTC-5).',
      },
    },
    {
      '@type': 'Question',
      name: 'What time is noon CST in UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '12:00 PM (noon) CST is 18:00 UTC (6:00 PM UTC). In CDT (summer), noon CDT is 17:00 UTC (5:00 PM UTC).',
      },
    },
    {
      '@type': 'Question',
      name: 'What major cities use CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major cities in Central Time (CST/CDT) include Chicago, Houston, Dallas, San Antonio, Austin, Minneapolis, Kansas City, St. Louis, New Orleans, Nashville, Memphis, and Milwaukee.',
      },
    },
  ],
}

export default function CSTtoUTC() {
  return (
    <ConverterPageShell
      title="CST to UTC Converter"
      subtitle={<>Central Standard Time → Coordinated Universal Time · CST is <strong>6 hours behind</strong> UTC</>}
      config={config}
      infoTitle="CST vs UTC — What You Need to Know"
      infoBody={<>
        <p>
              <strong>CST (Central Standard Time)</strong> is UTC-6, covering the central
              United States including Illinois, Texas, and Minnesota. From March to November, Central Time uses
              <strong> CDT (UTC-5)</strong> during Daylight Saving Time.
            </p>
            <p>
              <strong>UTC (Coordinated Universal Time)</strong> is the global time standard,
              used in servers, APIs, aviation, and international scheduling. UTC never changes for DST.
            </p>
            <p>
              Chicago&apos;s 9 AM stand-up is 15:00 UTC in winter — useful for server logs and cross-timezone scheduling.
              In summer (CDT), that same 9 AM meeting is 14:00 UTC.
            </p>
      </>}
      extraSections={[{
        title: "Quick CST to UTC Reference",
        content: <><div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-6 font-semibold text-slate-700">CST (UTC-6)</th>
                  <th className="text-left py-2 pr-6 font-semibold text-slate-700">UTC</th>
                  <th className="text-left py-2 font-semibold text-slate-700">CDT (UTC-5, summer)</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ['12:00 AM', '06:00', '05:00'],
                  ['6:00 AM', '12:00', '11:00'],
                  ['9:00 AM', '15:00', '14:00'],
                  ['12:00 PM', '18:00', '17:00'],
                  ['3:00 PM', '21:00', '20:00'],
                  ['5:00 PM', '23:00', '22:00'],
                  ['6:00 PM', '00:00 (+1)', '23:00'],
                ].map(([cst, utc, cdt]) => (
                  <tr key={cst} className="border-b border-slate-100 last:border-b-0">
                    <td className="py-2 pr-6">{cst}</td>
                    <td className="py-2 pr-6 tabular-nums">{utc}</td>
                    <td className="py-2 tabular-nums">{cdt}</td>
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
