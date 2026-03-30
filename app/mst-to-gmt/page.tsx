import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'MST to GMT Converter — Mountain to Greenwich',
  description: 'Convert MST to GMT instantly. Mountain Standard Time (UTC-7) is 7 hours behind GMT (UTC+0). Live clocks, Denver–London scheduling guide and conversion table.',
  alternates: { canonical: 'https://whattime.city/mst-to-gmt/' },
  openGraph: { title: 'MST to GMT Converter — Mountain Time to London', description: 'MST is 7 hours behind GMT. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/mst-to-gmt/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'MST to GMT — Mountain Time to Greenwich Mean Time', description: 'MST is 7 hours behind GMT. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'MST',
  toAbbr: 'GMT',
  fromTimezone: 'America/Denver',
  toTimezone: 'Europe/London',
  fromFullName: 'Mountain Standard Time',
  toFullName: 'Greenwich Mean Time',
  fromCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
  toCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Dublin', 'Cardiff'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is MST behind GMT?', acceptedAnswer: { '@type': 'Answer', text: 'MST (Mountain Standard Time, UTC-7) is 7 hours behind GMT (UTC+0). During US Mountain Daylight Time (MDT, UTC-6), the gap shrinks to 6 hours behind GMT. During UK summer (BST, UTC+1), MST is 8 hours behind. The difference ranges from 6 to 8 hours depending on which region observes DST.' } },
    { '@type': 'Question', name: 'What is 9 AM MST in GMT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM MST (Denver) is 4:00 PM GMT (London). For Denver morning meetings, London is already in late afternoon. The best overlap window is 7:00–10:00 AM MST = 2:00–5:00 PM GMT — Denver mornings align with London mid-to-late afternoon.' } },
    { '@type': 'Question', name: 'What is the best time to schedule a Denver–London call?', acceptedAnswer: { '@type': 'Answer', text: 'The best window for Denver (MST) to London (GMT) calls is 7:00–10:00 AM MST = 2:00–5:00 PM GMT. In summer (MDT/BST): 8:00–11:00 AM MDT = 2:00–5:00 PM BST. Denver mornings catch London before the close of business.' } },
    { '@type': 'Question', name: 'What US states are in the MST time zone?', acceptedAnswer: { '@type': 'Answer', text: 'MST covers Colorado, Utah, Wyoming, Montana, most of Idaho, most of New Mexico, and the panhandle of Nebraska and Kansas. Arizona (except the Navajo Nation) uses MST year-round without DST. Nevada\'s Elko County is geographically in MST but officially observes PST.' } },
  ],
}

export default function MSTtoGMT() {
  return (
    <ConverterPageShell
      title="MST to GMT Converter"
      subtitle={<>Mountain Standard Time → Greenwich Mean Time · MST is <strong>7 hours behind</strong> GMT</>}
      config={config}
      infoTitle="MST vs GMT — Denver to London"
      infoBody={<>
        <p><strong>MST (UTC-7)</strong> — Mountain Standard Time, covering Colorado, Utah, Montana, and surrounding states. Shifts to MDT (UTC-6) in summer. Arizona stays on MST year-round.</p>
            <p><strong>GMT (UTC+0)</strong> — UK winter time. London uses BST (UTC+1) from late March to late October.</p>
            <p>Best overlap: <strong>7:00–10:00 AM MST = 2:00–5:00 PM GMT</strong>. Denver mornings are the prime window for UK–Mountain US collaboration. Companies with Denver and London offices often schedule standing calls at 8:00 AM MST / 3:00 PM GMT.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
