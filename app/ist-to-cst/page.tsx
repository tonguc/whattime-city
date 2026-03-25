import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'IST to CST — India to Central Time Converter',
  description: 'Convert IST to CST instantly. India Standard Time is 11.5 hours ahead of CST (10.5 during CDT). Live clocks, conversion table, India–Central US call scheduling.',
  alternates: { canonical: 'https://whattime.city/ist-to-cst' },
  openGraph: {
    title: 'IST to CST — India to Central Time Converter',
    description: 'Convert IST to CST instantly. India Standard Time is 11.5 hours ahead of CST (10.5 during CDT). Live clocks, conversion table, India–Central US call scheduling.',
    type: 'website',
    url: 'https://whattime.city/ist-to-cst',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IST to CST Converter',
    description: 'Convert IST to CST instantly. India Standard Time is 11.5 hours ahead of CST (10.5 during CDT). Live clocks, conversion table, India–Central US call scheduling.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'IST',
  toAbbr: 'CST',
  fromTimezone: 'Asia/Kolkata',
  toTimezone: 'America/Chicago',
  fromFullName: 'India Standard Time',
  toFullName: 'Central Standard Time',
  fromCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'],
  toCities: ['Chicago, IL', 'Dallas, TX', 'Houston, TX', 'Minneapolis, MN', 'Kansas City, MO', 'Mexico City'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
  {
    "@type": "Question",
    "name": "How many hours ahead is IST compared to CST?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "IST (UTC+5:30) is 11 hours 30 minutes (11.5h) ahead of CST (UTC-6), and 10 hours 30 minutes (10.5h) ahead of CDT (UTC-5) during US daylight saving time."
    }
  },
  {
    "@type": "Question",
    "name": "When it is 9:00 AM IST, what time is it in Chicago?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When it is 9:00 AM IST, it is 9:30 PM CST the previous evening (standard time) or 10:30 PM CDT. Chicago morning starts at roughly 7:30 PM IST."
    }
  },
  {
    "@type": "Question",
    "name": "What is the best time for a call between India and Chicago?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The recommended window is 7:00\u20139:30 PM IST, corresponding to 7:30\u201310:00 AM CST. During CDT (US summer), 7 PM IST = 8:30 AM CDT."
    }
  }
],
}

export default function IstToCstPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
        IST to CST Converter
      </h1>
      <p className="text-lg text-slate-600 mb-6" dangerouslySetInnerHTML={{ __html: 'India Standard Time → Central Standard Time · IST is <strong>11.5 hours ahead</strong> of CST' }} />
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">IST vs CST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: '<strong>India Standard Time (IST)</strong> is UTC+5:30. India does not observe DST.' }} />
            <p dangerouslySetInnerHTML={{ __html: '<strong>Central Standard Time (CST)</strong> is UTC-6. CDT (UTC-5) is observed from March to November in states including Illinois, Texas, and Minnesota.' }} />
            <p dangerouslySetInnerHTML={{ __html: 'With an 11.5-hour gap, the best overlap window between India and the US Central time zone is <strong>7:00–9:00 PM IST = 7:30–9:30 AM CST</strong> during standard time. During CDT this shifts to 7 PM IST = 8:30 AM CDT.' }} />
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
              <strong className="text-amber-700">Note on DST shift:</strong>
              <p className="text-amber-700 mt-1">The gap changes when the US observes CDT (March–November): 11.5h → 10.5h. India stays at UTC+5:30 year-round.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4">
                <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.name}</h3>
                <p className="text-sm text-slate-600">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="rounded-xl border border-slate-200 p-4 bg-slate-50 text-xs text-slate-500">
        Timezone data sourced from <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">IANA Time Zone Database</a>. Last updated March 2026.
      </footer>
    </ContentPageWrapper>
  )
}
