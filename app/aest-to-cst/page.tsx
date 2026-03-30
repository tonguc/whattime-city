import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'AEST to CST Converter — Australia to Central',
  description: 'Convert AEST to CST instantly. Australian Eastern Standard Time (UTC+10) is 16 hours ahead of Central Standard Time (UTC-6). Live clocks, Sydney–Chicago scheduling guide.',
  alternates: { canonical: 'https://whattime.city/aest-to-cst/' },
  openGraph: { title: 'AEST to CST — Australian Eastern to Central', description: 'AEST is 16 hours ahead of CST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/aest-to-cst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'AEST to CST — Australian Eastern to Central', description: 'AEST is 16 hours ahead of CST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'AEST',
  toAbbr: 'CST',
  fromTimezone: 'Australia/Sydney',
  toTimezone: 'America/Chicago',
  fromFullName: 'Australian Eastern Standard Time',
  toFullName: 'Central Standard Time',
  fromCities: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra', 'Newcastle', 'Wollongong'],
  toCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is AEST ahead of CST?', acceptedAnswer: { '@type': 'Answer', text: 'AEST (Australian Eastern Standard Time, UTC+10) is 16 hours ahead of CST (Central Standard Time, UTC-6). During Australian DST, AEDT (UTC+11) is 17 hours ahead of CST. During US CDT (UTC-5), AEST is 15 hours ahead. The gap ranges between 15–17 hours depending on which regions observe daylight saving.' } },
    { '@type': 'Question', name: 'What is 9 AM AEST in CST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM AEST (Sydney) is 5:00 PM CST the previous day. For example, Tuesday 9:00 AM Sydney = Monday 5:00 PM Chicago (in winter). Australia and the US observe DST in opposite hemispheres (Australia: October–April, US: March–November), so the gap shifts throughout the year.' } },
    { '@type': 'Question', name: 'What is the best time to call Chicago from Sydney?', acceptedAnswer: { '@type': 'Answer', text: 'The best overlap window is 7:00–9:00 AM CST (Chicago), which equals 11:00 PM–1:00 AM AEST (Sydney, next day). Alternatively, early Chicago morning (6:00–8:00 AM CST) = 10:00 PM–midnight Sydney. Both options require Sydney participants to work late evenings.' } },
    { '@type': 'Question', name: 'Does Brisbane differ from Sydney for AEST to CST?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Queensland (Brisbane) does not observe DST and stays on AEST (UTC+10) year-round. During Australian DST (October–April), Sydney and Melbourne shift to AEDT (UTC+11), making Brisbane 1 hour behind Sydney. For AEST-to-CST conversions, Brisbane is always 16 hours ahead of CST.' } },
  ],
}

export default function AESTtoCST() {
  return (
    <ConverterPageShell
      title="AEST to CST Converter"
      subtitle={<>Australian Eastern Standard Time → Central Standard Time · AEST is <strong>16 hours ahead</strong> of CST</>}
      config={config}
      infoTitle="AEST vs CST — Sydney to Chicago"
      infoBody={<>
        <p><strong>AEST (UTC+10)</strong> — Australian Eastern Standard Time. NSW, VIC, ACT, and TAS shift to AEDT (UTC+11) in summer (October–April). Queensland stays on AEST year-round.</p>
            <p><strong>CST (UTC-6)</strong> — US Central Standard Time. Chicago, Houston, and Dallas shift to CDT (UTC-5) in summer (March–November).</p>
            <p>With a 16-hour gap, Australia is effectively a full day ahead. The only practical overlap is Sydney late evening meeting Chicago morning. Async workflows are the norm for Australia–Central US teams.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
