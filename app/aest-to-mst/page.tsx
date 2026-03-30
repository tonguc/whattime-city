import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'AEST to MST Converter — Australia to MST',
  description: 'Convert AEST to MST instantly. Australian Eastern Standard Time (UTC+10) is 17 hours ahead of Mountain Standard Time (UTC-7). Live clocks, Sydney–Denver scheduling guide.',
  alternates: { canonical: 'https://whattime.city/aest-to-mst/' },
  openGraph: { title: 'AEST to MST Converter — Australia to Mountain Time', description: 'AEST is 17 hours ahead of MST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/aest-to-mst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'AEST to MST — Australian Eastern to Mountain Time', description: 'AEST is 17 hours ahead of MST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'AEST',
  toAbbr: 'MST',
  fromTimezone: 'Australia/Sydney',
  toTimezone: 'America/Denver',
  fromFullName: 'Australian Eastern Standard Time',
  toFullName: 'Mountain Standard Time',
  fromCities: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra', 'Newcastle', 'Wollongong'],
  toCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is AEST ahead of MST?', acceptedAnswer: { '@type': 'Answer', text: 'AEST (Australian Eastern Standard Time, UTC+10) is 17 hours ahead of MST (Mountain Standard Time, UTC-7). During Australian DST (AEDT, UTC+11), the gap grows to 18 hours. During US MDT (UTC-6), AEST is 16 hours ahead. The gap ranges 16–18 hours depending on which DST periods are active.' } },
    { '@type': 'Question', name: 'What is 9 AM AEST in MST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM AEST (Sydney) is 4:00 PM MST the previous day. For example, Wednesday 9:00 AM Sydney = Tuesday 4:00 PM Denver (in winter). The extreme gap means Sydney is always more than a full day ahead of Denver on the calendar.' } },
    { '@type': 'Question', name: 'Is there any workable overlap between Sydney and Denver?', acceptedAnswer: { '@type': 'Answer', text: 'Practical overlap is extremely limited. Sydney late evening (9:00–11:00 PM AEST) = Denver early morning (4:00–6:00 AM MST). Most Australia–Mountain US teams rely on async workflows: handoff documents, recorded meetings, and overlapping shift arrangements.' } },
  ],
}

export default function AESTtoMST() {
  return (
    <ConverterPageShell
      title="AEST to MST Converter"
      subtitle={<>Australian Eastern Standard Time → Mountain Standard Time · AEST is <strong>17 hours ahead</strong> of MST</>}
      config={config}
      infoTitle="AEST vs MST — Sydney to Denver"
      infoBody={<>
        <p><strong>AEST (UTC+10)</strong> — Australian Eastern Standard Time. NSW, VIC, ACT, and TAS shift to AEDT (UTC+11) in summer (October–April). Queensland stays on AEST year-round.</p>
            <p><strong>MST (UTC-7)</strong> — Mountain Standard Time. Colorado, Utah, and surrounding states shift to MDT (UTC-6) in summer. Arizona stays on MST year-round.</p>
            <p>At 17 hours ahead, Sydney is always on the next calendar day compared to Denver. This is one of the widest regular business timezone gaps in the world. Full async workflows are standard.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
