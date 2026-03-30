import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'AEST to GMT Converter — Australia to Greenwich',
  description: 'Convert AEST to GMT instantly. Australian Eastern Standard Time (UTC+10) is 10 hours ahead of GMT (UTC+0). Live clocks, Sydney–London scheduling guide.',
  alternates: { canonical: 'https://whattime.city/aest-to-gmt/' },
  openGraph: { title: 'AEST to GMT Converter — Australia to London', description: 'AEST is 10 hours ahead of GMT. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/aest-to-gmt/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'AEST to GMT — Australian Eastern to GMT', description: 'AEST is 10 hours ahead of GMT. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'AEST',
  toAbbr: 'GMT',
  fromTimezone: 'Australia/Sydney',
  toTimezone: 'Europe/London',
  fromFullName: 'Australian Eastern Standard Time',
  toFullName: 'Greenwich Mean Time',
  fromCities: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra', 'Newcastle', 'Wollongong'],
  toCities: ['London', 'Dublin', 'Lisbon', 'Reykjavik', 'Accra', 'Abuja'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is AEST ahead of GMT?', acceptedAnswer: { '@type': 'Answer', text: 'AEST (Australian Eastern Standard Time, UTC+10) is 10 hours ahead of GMT (UTC+0). During Australian DST (AEDT, UTC+11), the gap increases to 11 hours. During UK BST (UTC+1), AEST is only 9 hours ahead. The gap fluctuates between 9 and 11 hours across the year as both regions shift clocks in opposite seasons.' } },
    { '@type': 'Question', name: 'What is 9 AM AEST in GMT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM AEST (Sydney) is 11:00 PM GMT the previous night. This means Sydney mornings overlap only with London late evenings. The best practical window is 7:00–9:00 PM AEST = 9:00–11:00 AM GMT, catching London\'s morning while Sydney wraps up its business day.' } },
    { '@type': 'Question', name: 'What is the best time to schedule a Sydney–London call?', acceptedAnswer: { '@type': 'Answer', text: 'In winter (GMT/AEST): 7:00–9:00 PM AEST = 9:00–11:00 AM GMT. In summer (BST/AEDT): 8:00–10:00 PM AEDT = 9:00–11:00 AM BST. Sydney late afternoon to evening is the prime window for catching London\'s morning business hours.' } },
    { '@type': 'Question', name: 'Does the AEST to GMT gap change throughout the year?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The gap changes when either region shifts clocks. Australia (AEST → AEDT) shifts in October and back in April. The UK (GMT → BST) shifts in late March and back in late October. The standard 10-hour gap (AEST/GMT) can shrink to 9 hours (AEST/BST in UK summer) or grow to 11 hours (AEDT/GMT in Australian summer).' } },
  ],
}

export default function AESTtoGMT() {
  return (
    <ConverterPageShell
      title="AEST to GMT Converter"
      subtitle={<>Australian Eastern Standard Time → Greenwich Mean Time · AEST is <strong>10 hours ahead</strong> of GMT</>}
      config={config}
      infoTitle="AEST vs GMT — Sydney to London"
      infoBody={<>
        <p><strong>AEST (UTC+10)</strong> — Australian Eastern Standard Time. NSW, VIC, ACT, and TAS observe AEDT (UTC+11) in Southern Hemisphere summer (October–April). Queensland remains on AEST year-round.</p>
            <p><strong>GMT (UTC+0)</strong> — UK winter time. London uses BST (UTC+1) from late March to late October.</p>
            <p>The Sydney–London corridor spans roughly half the globe. The overlap window is narrow: <strong>7:00–9:00 PM AEST = 9:00–11:00 AM GMT</strong> in winter. This is the most common window for Australia–UK business calls and financial trading desk handoffs.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
