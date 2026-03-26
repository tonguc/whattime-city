import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'IST to PST — India to Pacific Time Converter',
  description: 'Convert IST to PST instantly. India Standard Time is 13.5 hours ahead of PST (12.5 during PDT). Live clocks, conversion table, India–West Coast call scheduling.',
  alternates: { canonical: 'https://whattime.city/ist-to-pst' },
  openGraph: {
    title: 'IST to PST — India to Pacific Time Converter',
    description: 'Convert IST to PST instantly. India Standard Time is 13.5 hours ahead of PST (12.5 during PDT). Live clocks, conversion table, India–West Coast call scheduling.',
    type: 'website',
    url: 'https://whattime.city/ist-to-pst',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IST to PST Converter',
    description: 'Convert IST to PST instantly. India Standard Time is 13.5 hours ahead of PST (12.5 during PDT). Live clocks, conversion table, India–West Coast call scheduling.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'IST',
  toAbbr: 'PST',
  fromTimezone: 'Asia/Kolkata',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'India Standard Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'San Diego, CA', 'Portland, OR', 'Las Vegas, NV'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
  {
    "@type": "Question",
    "name": "How many hours ahead is IST compared to PST?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "IST (UTC+5:30) is 13 hours 30 minutes ahead of PST (UTC-8) during US standard time, and 12 hours 30 minutes ahead during PDT (UTC-7). India does not observe DST."
    }
  },
  {
    "@type": "Question",
    "name": "When it is 9:00 AM IST, what time is it in Los Angeles?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When it is 9:00 AM IST, it is 7:30 PM PST the previous day (standard time) or 8:30 PM PDT. Los Angeles business hours barely overlap with India morning hours."
    }
  },
  {
    "@type": "Question",
    "name": "What is the best time for a call between India and Los Angeles?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The best window is 8:00\u201310:30 PM IST, which corresponds to 6:30\u20139:00 AM PST. During PDT, 8 PM IST = 7:30 AM PDT. This requires Indian participants to stay into the evening."
    }
  },
  {
    "@type": "Question",
    "name": "Is IST 13 or 14 hours ahead of PST?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "IST is 13 hours and 30 minutes (13.5h) ahead of PST (UTC-8), and 12 hours and 30 minutes (12.5h) ahead of PDT (UTC-7) during US daylight saving time."
    }
  }
],
}

export default function IstToPstPage() {
  return (
    <ConverterPageShell
      title="IST to PST Converter"
      subtitle={<>India Standard Time → Pacific Standard Time · IST is <strong>13.5 hours ahead</strong> of PST</>}
      config={config}
      infoTitle="IST vs PST — What You Need to Know"
      infoBody={<>
        <p dangerouslySetInnerHTML={{ __html: '<strong>India Standard Time (IST)</strong> is UTC+5:30. India does not observe DST, so IST is fixed year-round.' }} />
            <p dangerouslySetInnerHTML={{ __html: '<strong>Pacific Standard Time (PST)</strong> is UTC-8. California, Oregon, Washington, and Nevada observe PDT (UTC-7) from March to November.' }} />
            <p dangerouslySetInnerHTML={{ __html: 'The 13.5-hour gap makes India–West Coast scheduling especially challenging. The best window is the <strong>end of India day / early West Coast morning</strong>: 8:00–10:30 PM IST = 6:30–9:00 AM PST. During US Daylight Time (PDT), the window shifts: 8 PM IST = 7:30 AM PDT.' }} />
            <p dangerouslySetInnerHTML={{ __html: "India's IT industry (Bangalore, Hyderabad, Pune) commonly serves US West Coast clients, making this time conversion one of the most important for the global tech industry." }} />
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
              <strong className="text-amber-700">Note on DST shift:</strong>
              <p className="text-amber-700 mt-1">The gap changes when the US observes PDT (March–November): 13.5h → 12.5h. India stays at UTC+5:30 year-round.</p>
            </div>
      </>}
      faqSchema={faqSchema}
    />
  )
}
