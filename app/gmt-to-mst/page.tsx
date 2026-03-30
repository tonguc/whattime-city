import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'GMT to MST Converter — Greenwich to Mountain',
  description: 'Convert GMT to MST instantly. GMT (UTC+0) is 7 hours ahead of Mountain Standard Time (UTC-7). Live clocks, London–Denver scheduling guide and conversion table.',
  alternates: { canonical: 'https://whattime.city/gmt-to-mst/' },
  openGraph: { title: 'GMT to MST — Greenwich to Mountain Time', description: 'GMT is 7 hours ahead of MST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/gmt-to-mst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'GMT to MST — Greenwich to Mountain Time', description: 'GMT is 7 hours ahead of MST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'GMT',
  toAbbr: 'MST',
  fromTimezone: 'Europe/London',
  toTimezone: 'America/Denver',
  fromFullName: 'Greenwich Mean Time',
  toFullName: 'Mountain Standard Time',
  fromCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Dublin', 'Cardiff'],
  toCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is GMT ahead of MST?', acceptedAnswer: { '@type': 'Answer', text: 'GMT (UTC+0) is 7 hours ahead of MST (Mountain Standard Time, UTC-7). During US Mountain Daylight Time (MDT, UTC-6), GMT is 6 hours ahead. During UK summer (BST, UTC+1), BST is 8 hours ahead of MST. The gap ranges from 6 to 8 hours depending on DST.' } },
    { '@type': 'Question', name: 'What is 9 AM GMT in MST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM GMT (London winter) is 2:00 AM MST (Denver). A 9:00 AM Denver start equals 4:00 PM GMT in London. The best London–Denver overlap is 2:00–5:00 PM GMT = 7:00–10:00 AM MST, catching Denver\'s morning while London is in mid-afternoon.' } },
    { '@type': 'Question', name: 'What is the best time to call Denver from London?', acceptedAnswer: { '@type': 'Answer', text: 'The best window for London (GMT) to Denver (MST) calls is 2:00–5:00 PM GMT = 7:00–10:00 AM MST. In UK summer (BST) or US summer (MDT), the window shifts slightly — typically 3:00–6:00 PM BST = 8:00–11:00 AM MDT.' } },
    { '@type': 'Question', name: 'Does Arizona follow MST year-round?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Arizona (except the Navajo Nation) does not observe Daylight Saving Time and stays on MST (UTC-7) year-round. This means Arizona is always 7 hours behind GMT, while Denver and Salt Lake City shift to MDT (UTC-6) in summer, temporarily becoming only 6 hours behind GMT.' } },
  ],
}

export default function GMTtoMST() {
  return (
    <ConverterPageShell
      title="GMT to MST Converter"
      subtitle={<>Greenwich Mean Time → Mountain Standard Time · GMT is <strong>7 hours ahead</strong> of MST</>}
      config={config}
      infoTitle="GMT vs MST — London to Rocky Mountains"
      infoBody={<>
        <p><strong>GMT (UTC+0)</strong> — UK winter time. London uses BST (UTC+1) from late March to late October.</p>
            <p><strong>MST (UTC-7)</strong> — Mountain Standard Time, covering Colorado, Utah, Montana, and parts of Idaho and Wyoming. Shifts to MDT (UTC-6) in summer. Arizona stays on MST year-round.</p>
            <p>Best overlap: <strong>2:00–5:00 PM GMT = 7:00–10:00 AM MST</strong>. London afternoons align well with Denver mornings, making this a workable corridor for UK–US Mountain Zone business.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
