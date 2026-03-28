import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import Link from 'next/link'
import { areaCodes, areaCodeList, getAreaCodesByTimezone } from '@/data/area-codes'

export const metadata: Metadata = {
  title: 'US & Canada Area Codes — Time Zone Lookup by Area Code',
  description: `Find time zones for ${areaCodeList.length}+ North American area codes. Look up any US or Canadian area code to see its city, state, time zone, UTC offset, and DST status.`,
  alternates: { canonical: 'https://whattime.city/area-code/' },
  openGraph: {
    title: 'Area Code Time Zone Lookup — US & Canada',
    description: `${areaCodeList.length}+ area codes with time zones, cities, and DST info.`,
    type: 'website',
    url: 'https://whattime.city/area-code/',
    siteName: 'whattime.city',
  },
}

export default function AreaCodeHubPage() {
  const byTimezone = getAreaCodesByTimezone()

  // Sort timezones by UTC offset (west to east)
  const tzOrder = ['HST', 'AKST/AKDT', 'PST/PDT', 'MST/MDT', 'MST', 'CST/CDT', 'CST', 'EST/EDT', 'AST/ADT', 'NST/NDT']
  const tzLabels: Record<string, string> = {
    'HST': 'Hawaii (HST) · UTC-10',
    'AKST/AKDT': 'Alaska (AKST/AKDT) · UTC-9',
    'PST/PDT': 'Pacific (PST/PDT) · UTC-8',
    'MST/MDT': 'Mountain (MST/MDT) · UTC-7',
    'MST': 'Mountain — No DST (MST) · UTC-7',
    'CST/CDT': 'Central (CST/CDT) · UTC-6',
    'CST': 'Central — No DST (CST) · UTC-6',
    'EST/EDT': 'Eastern (EST/EDT) · UTC-5',
    'AST/ADT': 'Atlantic (AST/ADT) · UTC-4',
    'NST/NDT': 'Newfoundland (NST/NDT) · UTC-3:30',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I find the time zone for an area code?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Search for any US or Canadian area code on this page to find its time zone, UTC offset, and DST status. We cover ${areaCodeList.length} area codes across North America.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Do all area codes in the same state share a time zone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not always. Some states span multiple time zones. For example, Indiana has area codes in both Eastern and Central time. Texas has area codes in both Central and Mountain time (El Paso uses MST).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is an area code?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An area code is a 3-digit prefix assigned by the North American Numbering Plan Administration (NANPA) to geographic regions in the US, Canada, and Caribbean territories. Area codes identify where a phone number was originally assigned.',
        },
      },
    ],
  }

  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div>
        <nav className="text-xs text-slate-400 mb-4">
          <Link href="/" className="hover:text-sky-500">Home</Link>
          {' / '}
          <span className="text-slate-600">Area Codes</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
          Area Code Time Zone Lookup
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          {areaCodeList.length} US & Canadian area codes — find time zone, location, and DST status
        </p>

        {/* Quick search grid - all codes sorted numerically */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">All Area Codes</h2>
          <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-10 gap-1.5">
            {areaCodeList.map(code => {
              const d = areaCodes[code]
              return (
                <Link
                  key={code}
                  href={`/area-code/${code}`}
                  className="p-2 rounded-lg border border-slate-100 hover:border-sky-300 hover:bg-sky-50 transition-colors text-center"
                  title={`${d.city}, ${d.stateCode} — ${d.tzAbbr}`}
                >
                  <div className="font-bold text-sky-600 text-sm">{code}</div>
                  <div className="text-[10px] text-slate-400 truncate">{d.stateCode}</div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* By timezone */}
        {tzOrder
          .filter(tz => byTimezone[tz])
          .map(tz => (
            <section key={tz} className="rounded-2xl border border-slate-200 bg-white p-6 mb-4">
              <h2 className="text-lg font-semibold text-slate-800 mb-3">{tzLabels[tz] || tz}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
                {byTimezone[tz]
                  .sort((a, b) => a.code.localeCompare(b.code))
                  .map(d => (
                    <Link
                      key={d.code}
                      href={`/area-code/${d.code}`}
                      className="flex items-center gap-2 p-2 rounded-lg border border-slate-100 hover:border-sky-300 hover:bg-sky-50 transition-colors"
                    >
                      <span className="font-bold text-sky-600 text-sm w-10">{d.code}</span>
                      <span className="text-xs text-slate-500 truncate">{d.city}, {d.stateCode}</span>
                    </Link>
                  ))}
              </div>
            </section>
          ))}

        {/* FAQ */}
        <section className="mb-6">
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
          Area code data sourced from the{' '}
          <a href="https://www.nanpa.com" target="_blank" rel="noopener noreferrer" className="underline">
            NANPA
          </a>
          . Timezone data from the{' '}
          <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">
            IANA Time Zone Database
          </a>
          . Last updated March 2026.
        </footer>
      </div>
    </ContentPageWrapper>
  )
}
