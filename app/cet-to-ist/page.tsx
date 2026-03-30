import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CET to IST Converter — CET to India',
  description: 'Convert CET to IST instantly. Central European Time (UTC+1) is 4 hours 30 minutes behind India Standard Time (UTC+5:30). Live clocks and conversion table.',
  alternates: { canonical: 'https://whattime.city/cet-to-ist/' },
  openGraph: { title: 'CET to IST Converter — Europe to India', description: 'CET is 4:30 behind IST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/cet-to-ist/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'CET to IST — Central European Time to India', description: 'CET is 4:30 behind IST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'CET',
  toAbbr: 'IST',
  fromTimezone: 'Europe/Berlin',
  toTimezone: 'Asia/Kolkata',
  fromFullName: 'Central European Time',
  toFullName: 'India Standard Time',
  fromCities: ['Frankfurt', 'Berlin', 'Paris', 'Amsterdam', 'Madrid', 'Rome', 'Vienna', 'Zurich'],
  toCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is CET behind IST?', acceptedAnswer: { '@type': 'Answer', text: 'CET (UTC+1) is 4 hours 30 minutes behind IST (UTC+5:30). During European summer (CEST, UTC+2), the gap narrows to 3 hours 30 minutes. India does not observe DST, so the offset only changes when Europe shifts clocks in late March and late October.' } },
    { '@type': 'Question', name: 'What is 9 AM CET in IST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM CET (Frankfurt/Berlin) is 1:30 PM IST. During CEST (European summer), 9:00 AM CEST = 12:30 PM IST. The best CET–IST overlap for business is 10:00 AM–1:00 PM CET = 2:30–5:30 PM IST (winter) or 10:00 AM–1:00 PM CEST = 1:30–4:30 PM IST (summer).' } },
    { '@type': 'Question', name: 'What is the best time to call India from Germany or France?', acceptedAnswer: { '@type': 'Answer', text: 'In winter (CET): 10:00 AM–2:00 PM CET = 2:30–6:30 PM IST. In summer (CEST): 10:00 AM–2:00 PM CEST = 1:30–5:30 PM IST. European mornings and early afternoons comfortably reach Indian afternoons within business hours on both sides.' } },
    { '@type': 'Question', name: 'Does the CET to IST gap change in summer?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, partially. India has no DST, so the change comes only from the European side. In winter (CET, UTC+1): 4.5 hours behind IST. In summer (CEST, UTC+2): 3.5 hours behind IST. The gap shifts once in late March (clocks go forward in Europe) and once in late October (clocks go back).' } },
  ],
}

export default function CETtoIST() {
  return (
    <ConverterPageShell
      title="CET to IST Converter"
      subtitle={<>Central European Time → India Standard Time · CET is <strong>4 hours 30 minutes behind</strong> IST</>}
      config={config}
      infoTitle="CET vs IST — Europe to India"
      infoBody={<>
        <p><strong>CET (UTC+1)</strong> — Central European Time, covering Germany, France, Italy, Spain, Netherlands, and ~20 more countries. Shifts to CEST (UTC+2) in summer.</p>
            <p><strong>IST (UTC+5:30)</strong> — India Standard Time, fixed year-round with no DST. The half-hour offset produces :00 or :30 minute results in all conversions.</p>
            <p>The Europe–India IT corridor is one of the busiest in the world. Best overlap: <strong>10 AM–2 PM CET = 2:30–6:30 PM IST</strong>. Frankfurt and Bangalore engineering teams typically use 11:00 AM–1:00 PM CET for standups.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
