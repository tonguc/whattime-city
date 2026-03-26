import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'IST to GMT — India to UK Time Converter',
  description: 'Convert IST to GMT instantly. India Standard Time is 5.5 hours ahead of GMT (4.5 during BST). Live clocks, conversion table, India–UK call scheduling.',
  alternates: { canonical: 'https://whattime.city/ist-to-gmt' },
  openGraph: {
    title: 'IST to GMT — India to UK Time Converter',
    description: 'Convert IST to GMT instantly. India Standard Time is 5.5 hours ahead of GMT (4.5 during BST). Live clocks, conversion table, India–UK call scheduling.',
    type: 'website',
    url: 'https://whattime.city/ist-to-gmt',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IST to GMT Converter',
    description: 'Convert IST to GMT instantly. India Standard Time is 5.5 hours ahead of GMT (4.5 during BST). Live clocks, conversion table, India–UK call scheduling.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'IST',
  toAbbr: 'GMT',
  fromTimezone: 'Asia/Kolkata',
  toTimezone: 'Europe/London',
  fromFullName: 'India Standard Time',
  toFullName: 'Greenwich Mean Time',
  fromCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'],
  toCities: ['London, UK', 'Birmingham, UK', 'Manchester, UK', 'Edinburgh, UK', 'Dublin, Ireland', 'Cardiff, UK'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
  {
    "@type": "Question",
    "name": "How many hours ahead is IST compared to GMT?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "IST (UTC+5:30) is 5 hours 30 minutes (5.5h) ahead of GMT (UTC+0), and 4 hours 30 minutes (4.5h) ahead of BST (UTC+1) during UK summer time."
    }
  },
  {
    "@type": "Question",
    "name": "When it is 9:00 AM GMT, what time is it in India?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When it is 9:00 AM GMT, it is 2:30 PM IST. During BST (UK summer), 9:00 AM BST = 1:30 PM IST."
    }
  },
  {
    "@type": "Question",
    "name": "What is the best time for a call between India and the UK?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The best overlap is 1:30\u20135:30 PM IST = 8:00 AM\u201312:00 PM GMT. During BST, the window is 12:30\u20134:30 PM IST = 8:00 AM\u201312:00 PM BST. Both parties are in standard business hours during this window."
    }
  },
  {
    "@type": "Question",
    "name": "Why does India have a 30-minute offset from whole UTC hours?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "India uses UTC+5:30 to reflect the geographic midpoint of the country. This is a compromise between UTC+5 (western India) and UTC+6 (eastern India), established at independence in 1947."
    }
  }
],
}

export default function IstToGmtPage() {
  return (
    <ConverterPageShell
      title="IST to GMT Converter"
      subtitle={<>India Standard Time → Greenwich Mean Time · IST is <strong>5.5 hours ahead</strong> of GMT</>}
      config={config}
      infoTitle="IST vs GMT — What You Need to Know"
      infoBody={<>
        <p dangerouslySetInnerHTML={{ __html: "<strong>India Standard Time (IST)</strong> is UTC+5:30. India does not observe DST, making IST one of the world's most consistent time zones." }} />
            <p dangerouslySetInnerHTML={{ __html: '<strong>Greenwich Mean Time (GMT)</strong> is UTC+0. The UK observes British Summer Time (BST, UTC+1) from late March to late October.' }} />
            <p dangerouslySetInnerHTML={{ __html: 'With only a 5.5-hour gap, India and the UK have reasonable scheduling options. The <strong>business hours overlap window</strong> is approximately <strong>1:30–5:30 PM IST = 8:00 AM–12:00 PM GMT</strong>. This window shifts to 12:30–4:30 PM IST during BST (since BST is UTC+1).' }} />
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
              <strong className="text-amber-700">Note on DST shift:</strong>
              <p className="text-amber-700 mt-1">During UK BST (late March to late October), the gap narrows: 5.5h → 4.5h. India stays at UTC+5:30 year-round, but the UK moves to UTC+1.</p>
            </div>
      </>}
      faqSchema={faqSchema}
    />
  )
}
