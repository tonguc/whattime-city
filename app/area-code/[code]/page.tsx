import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import Link from 'next/link'

interface AreaCodeData {
  code: string
  city: string
  state: string
  stateCode: string
  timezone: string
  tzAbbr: string
  utcOffset: string
  utcOffsetDST: string
  observesDST: boolean
  coverageArea: string
  majorCities: string[]
  introduced: string
  notes?: string
  citySlug: string
}

const areaCodes: Record<string, AreaCodeData> = {
  '929': {
    code: '929',
    city: 'New York City',
    state: 'New York',
    stateCode: 'NY',
    timezone: 'America/New_York',
    tzAbbr: 'EST/EDT',
    utcOffset: 'UTC-5',
    utcOffsetDST: 'UTC-4',
    observesDST: true,
    coverageArea: 'Bronx, Brooklyn, Queens, Staten Island (NYC outer boroughs)',
    majorCities: ['Brooklyn', 'Bronx', 'Queens', 'Staten Island'],
    introduced: '2011',
    notes: 'Overlay for 718/347. Added to serve growing demand in NYC outer boroughs.',
    citySlug: 'new-york',
  },
  '404': {
    code: '404',
    city: 'Atlanta',
    state: 'Georgia',
    stateCode: 'GA',
    timezone: 'America/New_York',
    tzAbbr: 'EST/EDT',
    utcOffset: 'UTC-5',
    utcOffsetDST: 'UTC-4',
    observesDST: true,
    coverageArea: 'Atlanta city proper (Fulton, DeKalb counties core)',
    majorCities: ['Atlanta', 'Decatur', 'East Atlanta'],
    introduced: '1947',
    notes: 'One of the original area codes. Atlanta city proper; suburbs use 678, 470, 770.',
    citySlug: 'atlanta',
  },
  '437': {
    code: '437',
    city: 'Toronto',
    state: 'Ontario',
    stateCode: 'ON',
    timezone: 'America/Toronto',
    tzAbbr: 'EST/EDT',
    utcOffset: 'UTC-5',
    utcOffsetDST: 'UTC-4',
    observesDST: true,
    coverageArea: 'Toronto and surrounding Greater Toronto Area (overlay with 416/647)',
    majorCities: ['Toronto', 'Etobicoke', 'North York', 'Scarborough'],
    introduced: '2013',
    notes: 'Third overlay for Toronto. Canada uses the same NANP numbering plan as the US.',
    citySlug: 'toronto',
  },
  '206': {
    code: '206',
    city: 'Seattle',
    state: 'Washington',
    stateCode: 'WA',
    timezone: 'America/Los_Angeles',
    tzAbbr: 'PST/PDT',
    utcOffset: 'UTC-8',
    utcOffsetDST: 'UTC-7',
    observesDST: true,
    coverageArea: 'Seattle city proper and immediate surrounding area',
    majorCities: ['Seattle', 'Mercer Island', 'Bainbridge Island'],
    introduced: '1947',
    notes: 'Original 1947 area code. Seattle suburbs use 425 and 253.',
    citySlug: 'seattle',
  },
  '408': {
    code: '408',
    city: 'San Jose',
    state: 'California',
    stateCode: 'CA',
    timezone: 'America/Los_Angeles',
    tzAbbr: 'PST/PDT',
    utcOffset: 'UTC-8',
    utcOffsetDST: 'UTC-7',
    observesDST: true,
    coverageArea: 'San Jose, Santa Clara, Sunnyvale, Cupertino, Campbell',
    majorCities: ['San Jose', 'Santa Clara', 'Sunnyvale', 'Cupertino', 'Campbell'],
    introduced: '1959',
    notes: 'Heart of Silicon Valley. Most tech headquarters in this area code.',
    citySlug: 'san-jose',
  },
  '212': {
    code: '212',
    city: 'New York City',
    state: 'New York',
    stateCode: 'NY',
    timezone: 'America/New_York',
    tzAbbr: 'EST/EDT',
    utcOffset: 'UTC-5',
    utcOffsetDST: 'UTC-4',
    observesDST: true,
    coverageArea: 'Manhattan (New York County)',
    majorCities: ['Manhattan'],
    introduced: '1947',
    notes: 'The original Manhattan area code. One of the most recognizable codes in the world.',
    citySlug: 'new-york',
  },
  '310': {
    code: '310',
    city: 'Los Angeles',
    state: 'California',
    stateCode: 'CA',
    timezone: 'America/Los_Angeles',
    tzAbbr: 'PST/PDT',
    utcOffset: 'UTC-8',
    utcOffsetDST: 'UTC-7',
    observesDST: true,
    coverageArea: 'West LA, Santa Monica, Beverly Hills, Malibu, LAX area',
    majorCities: ['Santa Monica', 'Beverly Hills', 'Malibu', 'Culver City', 'El Segundo'],
    introduced: '1984',
    notes: 'West side of Los Angeles. Overlay with 424.',
    citySlug: 'los-angeles',
  },
  '312': {
    code: '312',
    city: 'Chicago',
    state: 'Illinois',
    stateCode: 'IL',
    timezone: 'America/Chicago',
    tzAbbr: 'CST/CDT',
    utcOffset: 'UTC-6',
    utcOffsetDST: 'UTC-5',
    observesDST: true,
    coverageArea: 'Chicago downtown core (Loop, Near North, Near South Side)',
    majorCities: ['Chicago Loop', 'River North', 'Lincoln Park'],
    introduced: '1947',
    notes: 'Downtown Chicago. Suburbs use 773, 630, 847, 224, 872.',
    citySlug: 'chicago',
  },
  '305': {
    code: '305',
    city: 'Miami',
    state: 'Florida',
    stateCode: 'FL',
    timezone: 'America/New_York',
    tzAbbr: 'EST/EDT',
    utcOffset: 'UTC-5',
    utcOffsetDST: 'UTC-4',
    observesDST: true,
    coverageArea: 'Miami-Dade County and Monroe County (Florida Keys)',
    majorCities: ['Miami', 'Miami Beach', 'Hialeah', 'Coral Gables', 'Key West'],
    introduced: '1947',
    notes: 'South Florida gateway. Overlay with 786.',
    citySlug: 'miami',
  },
  '415': {
    code: '415',
    city: 'San Francisco',
    state: 'California',
    stateCode: 'CA',
    timezone: 'America/Los_Angeles',
    tzAbbr: 'PST/PDT',
    utcOffset: 'UTC-8',
    utcOffsetDST: 'UTC-7',
    observesDST: true,
    coverageArea: 'San Francisco city and Marin County',
    majorCities: ['San Francisco', 'Sausalito', 'Mill Valley'],
    introduced: '1947',
    notes: 'Original San Francisco area code. East Bay uses 510; Peninsula uses 650.',
    citySlug: 'san-francisco',
  },
}

interface Props {
  params: Promise<{ code: string }>
}

export async function generateStaticParams() {
  return Object.keys(areaCodes).map(code => ({ code }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params
  const data = areaCodes[code]
  if (!data) return { title: 'Area Code Not Found' }

  return {
    title: `Area Code ${data.code} — ${data.city}, ${data.stateCode} Time Zone`,
    description: `Area code ${data.code} is in ${data.city}, ${data.state}. Time zone: ${data.tzAbbr} (${data.utcOffset}). Coverage: ${data.coverageArea}. Current local time and call scheduling guide.`,
    alternates: { canonical: `https://whattime.city/area-code/${data.code}` },
    openGraph: {
      title: `Area Code ${data.code} — ${data.city} Time Zone`,
      description: `${data.code} covers ${data.coverageArea}. Time zone: ${data.tzAbbr}.`,
      type: 'website',
      url: `https://whattime.city/area-code/${data.code}`,
      siteName: 'whattime.city',
    },
  }
}

export default async function AreaCodePage({ params }: Props) {
  const { code } = await params
  const data = areaCodes[code]
  if (!data) notFound()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Where is area code ${data.code}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} is in ${data.city}, ${data.state}. It covers ${data.coverageArea}.`,
        },
      },
      {
        '@type': 'Question',
        name: `What time zone is area code ${data.code}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} (${data.city}, ${data.state}) is in the ${data.tzAbbr} time zone (${data.utcOffset} standard time${data.observesDST ? `, ${data.utcOffsetDST} during Daylight Saving Time` : ', no DST observed'}).`,
        },
      },
      {
        '@type': 'Question',
        name: `Is area code ${data.code} a scam?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} itself is legitimate — it serves ${data.city}, ${data.state}. However, scammers can spoof any area code. If you receive an unexpected call from ${data.code}, verify the caller's identity before sharing personal information. Legitimate businesses in ${data.city} will use this code.`,
        },
      },
      {
        '@type': 'Question',
        name: `What time is it in area code ${data.code} right now?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} (${data.city}) is in the ${data.tzAbbr} zone. Check the live clock at whattime.city/${data.citySlug}/ for the current time.`,
        },
      },
    ],
  }

  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
          Area Code {data.code}
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          {data.city}, {data.state} · {data.tzAbbr} ({data.utcOffset})
        </p>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {[
            { label: 'Area Code', value: data.code },
            { label: 'City', value: `${data.city}, ${data.stateCode}` },
            { label: 'Time Zone', value: data.tzAbbr },
            { label: 'UTC Offset', value: `${data.utcOffset} (${data.utcOffsetDST} DST)` },
            { label: 'DST', value: data.observesDST ? 'Observed' : 'Not observed' },
            { label: 'Introduced', value: data.introduced },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-slate-200 p-3 bg-white">
              <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">{label}</div>
              <div className="font-semibold text-slate-800 text-sm">{value}</div>
            </div>
          ))}
        </div>

        {/* Coverage */}
        <section className="rounded-xl border border-slate-200 p-5 bg-white mb-6">
          <h2 className="font-semibold text-slate-800 mb-2">Coverage Area</h2>
          <p className="text-sm text-slate-600 mb-3">{data.coverageArea}</p>
          {data.notes && (
            <p className="text-sm text-slate-500 border-t border-slate-100 pt-3">{data.notes}</p>
          )}
          <div className="mt-3">
            <div className="text-xs text-slate-400 uppercase tracking-wide mb-2">Major Cities</div>
            <div className="flex flex-wrap gap-2">
              {data.majorCities.map(c => (
                <span key={c} className="px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Time Zone Info */}
        <section className="rounded-xl border border-slate-200 p-5 bg-white mb-6">
          <h2 className="font-semibold text-slate-800 mb-3">Time Zone Details</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-slate-400 text-xs uppercase">Standard Time</dt>
              <dd className="text-slate-700 font-medium mt-0.5">{data.tzAbbr.split('/')[0]} ({data.utcOffset})</dd>
            </div>
            <div>
              <dt className="text-slate-400 text-xs uppercase">Daylight Time</dt>
              <dd className="text-slate-700 font-medium mt-0.5">
                {data.observesDST ? `${data.tzAbbr.split('/')[1] || 'DST'} (${data.utcOffsetDST})` : 'Not observed'}
              </dd>
            </div>
            <div>
              <dt className="text-slate-400 text-xs uppercase">DST 2026 Start</dt>
              <dd className="text-slate-700 font-medium mt-0.5">{data.observesDST ? 'March 8, 2026' : '—'}</dd>
            </div>
            <div>
              <dt className="text-slate-400 text-xs uppercase">DST 2026 End</dt>
              <dd className="text-slate-700 font-medium mt-0.5">{data.observesDST ? 'November 1, 2026' : '—'}</dd>
            </div>
          </dl>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <Link
              href={`/${data.citySlug}`}
              className="text-sm text-sky-600 hover:underline"
            >
              → See current time in {data.city}
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 p-4 bg-slate-50">
                <h3 className="font-semibold text-slate-800 mb-2">{item.name}</h3>
                <p className="text-sm text-slate-600">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other area codes */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Other Area Codes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {Object.values(areaCodes)
              .filter(d => d.code !== data.code)
              .map(d => (
                <Link
                  key={d.code}
                  href={`/area-code/${d.code}`}
                  className="p-3 rounded-xl border border-slate-200 bg-white hover:border-sky-300 transition-colors text-center"
                >
                  <div className="font-bold text-sky-600">{d.code}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{d.city}, {d.stateCode}</div>
                </Link>
              ))}
          </div>
        </section>

        <footer className="rounded-xl border border-slate-200 p-4 bg-slate-50 text-xs text-slate-500">
          Area code data sourced from the{' '}
          <a href="https://www.nanpa.com" target="_blank" rel="noopener noreferrer" className="underline">
            North American Numbering Plan Administration (NANPA)
          </a>
          . Timezone data from{' '}
          <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">
            IANA Time Zone Database
          </a>
          . Last updated March 2026.
        </footer>
      </div>
    </ContentPageWrapper>
  )
}
