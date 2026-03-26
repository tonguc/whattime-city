import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'JST to PST — Japan Standard Time to Pacific Time Converter',
  description: 'Convert JST to PST instantly. Japan Standard Time (UTC+9) is 17 hours ahead of Pacific Standard Time (UTC-8). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/jst-to-pst/' },
  openGraph: { title: 'JST to PST Converter — Japan to Pacific Time', description: 'JST is 17 hours ahead of PST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/jst-to-pst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'JST to PST — Japan Standard Time to Pacific Time', description: 'JST is 17 hours ahead of PST. Live converter and overlap guide.' },
}

const config: TZPairConfig = {
  fromAbbr: 'JST',
  toAbbr: 'PST',
  fromTimezone: 'Asia/Tokyo',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'Japan Standard Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours ahead is JST compared to PST?', acceptedAnswer: { '@type': 'Answer', text: 'JST (Japan Standard Time, UTC+9) is 17 hours ahead of PST (Pacific Standard Time, UTC-8) in winter. During US Daylight Saving Time (PDT, UTC-7), the difference narrows to 16 hours. Japan does not observe DST, so the gap changes only when the US shifts clocks.' } },
    { '@type': 'Question', name: 'What is 9 AM JST in PST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM JST (Tokyo) is 4:00 PM PST the previous day in winter. In other words, Tuesday 9:00 AM Tokyo = Monday 4:00 PM Los Angeles. During PDT (US summer), 9:00 AM JST = 5:00 PM PDT the previous day.' } },
    { '@type': 'Question', name: 'What is the best time to schedule a meeting between Tokyo and Los Angeles?', acceptedAnswer: { '@type': 'Answer', text: 'The best overlap window between Tokyo (JST) and Los Angeles (PST/PDT) is difficult due to the 16–17 hour gap. Options: 8:00–9:00 AM PST = 1:00–2:00 AM JST next day (early for Tokyo), or 5:00–6:00 PM PST = 10:00–11:00 AM JST next day (end of day for LA). Many Japan–West Coast tech teams use asynchronous communication or schedule calls at 7:00–8:00 AM PST / 12:00–1:00 AM JST.' } },
    { '@type': 'Question', name: 'Does Japan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Japan does not observe Daylight Saving Time. JST is always UTC+9 year-round. This means the gap between Tokyo and Los Angeles changes only when the US changes its clocks — 17 hours in US winter (PST) and 16 hours in US summer (PDT).' } },
    { '@type': 'Question', name: 'What day is it in Tokyo when it is Monday in Los Angeles?', acceptedAnswer: { '@type': 'Answer', text: 'When it is Monday morning in Los Angeles, it is typically Tuesday in Tokyo due to the 16–17 hour difference. For example, Monday 8:00 AM PST = Tuesday 1:00 AM JST. This date line crossing is a common source of confusion for Japan–US scheduling.' } },
  ],
}

export default function JSTtoPST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">JST to PST Converter</h1>
      <p className="text-lg text-slate-600 mb-6">Japan Standard Time → Pacific Standard Time · JST is <strong>17 hours ahead</strong> of PST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">JST vs PST — Tokyo to Los Angeles</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p><strong className="text-slate-700">JST (Japan Standard Time)</strong> is UTC+9. Japan has no Daylight Saving Time — clocks never change, making JST one of the world&apos;s most stable time zones.</p>
            <p><strong className="text-slate-700">PST (Pacific Standard Time)</strong> is UTC-8. The US West Coast uses PDT (UTC-7) from March to November. This shift moves the Tokyo–LA gap from 17 hours (winter) to 16 hours (summer).</p>
            <p>The Japan–West Coast corridor is critical for tech industry (Sony, Toyota, Nintendo coordinate with Silicon Valley), gaming, and automotive supply chains. The 16–17 hour gap means most collaboration happens asynchronously.</p>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
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
