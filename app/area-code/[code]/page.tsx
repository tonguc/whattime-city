import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import Link from 'next/link'
import { areaCodes, areaCodeList } from '@/data/area-codes'

interface Props {
  params: Promise<{ code: string }>
}

export async function generateStaticParams() {
  return areaCodeList.map(code => ({ code }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params
  const data = areaCodes[code]
  if (!data) return { title: 'Area Code Not Found' }

  const countryLabel = data.country === 'CA' ? 'Canada' : 'USA'

  return {
    title: `(${data.code}) Area Code — ${data.city}, ${data.stateCode} | Time Zone & Location`,
    description: `Area code ${data.code} serves ${data.city}, ${data.state} (${countryLabel}). Time zone: ${data.tzAbbr} (${data.utcOffset}). Coverage: ${data.coverageArea}. Find current local time, DST status, and calling tips.`,
    alternates: { canonical: `https://whattime.city/area-code/${data.code}` },
    openGraph: {
      title: `(${data.code}) Area Code — ${data.city}, ${data.stateCode} Time Zone`,
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

  const countryLabel = data.country === 'CA' ? 'Canada' : 'United States'

  // Related area codes: same state first, then same timezone
  const sameState = Object.values(areaCodes)
    .filter(d => d.state === data.state && d.code !== data.code)
    .sort((a, b) => a.code.localeCompare(b.code))

  const sameTz = Object.values(areaCodes)
    .filter(d => d.tzAbbr === data.tzAbbr && d.state !== data.state && d.code !== data.code)
    .sort(() => 0.5 - Math.random())
    .slice(0, 12)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Where is area code ${data.code}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} is located in ${data.city}, ${data.state} (${countryLabel}). It covers ${data.coverageArea}.`,
        },
      },
      {
        '@type': 'Question',
        name: `What time zone is area code ${data.code} in?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} (${data.city}, ${data.state}) is in the ${data.tzAbbr} time zone. Standard time is ${data.utcOffset}${data.observesDST ? ` and ${data.utcOffsetDST} during Daylight Saving Time` : '. This area does not observe DST'}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is area code ${data.code} a scam?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} is a legitimate NANPA-assigned code serving ${data.city}, ${data.state}. However, scammers can spoof any area code. If you receive an unexpected call from (${data.code}), verify the caller before sharing personal information.`,
        },
      },
      {
        '@type': 'Question',
        name: `What time is it in area code ${data.code} right now?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} follows ${data.tzAbbr} (${data.utcOffset}). See the live clock at whattime.city/${data.citySlug}/ for the exact current time in ${data.city}.`,
        },
      },
      {
        '@type': 'Question',
        name: `When was area code ${data.code} introduced?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} was introduced in ${data.introduced}. ${data.notes || `It serves ${data.city}, ${data.state}.`}`,
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
      { '@type': 'ListItem', position: 2, name: 'Area Codes', item: 'https://whattime.city/area-code/' },
      { '@type': 'ListItem', position: 3, name: `(${data.code}) ${data.city}`, item: `https://whattime.city/area-code/${data.code}` },
    ],
  }

  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-4">
          <Link href="/" className="hover:text-sky-500">Home</Link>
          {' / '}
          <Link href="/area-code" className="hover:text-sky-500">Area Codes</Link>
          {' / '}
          <span className="text-slate-600">{data.code}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
          Area Code {data.code}
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          {data.city}, {data.state} · {data.tzAbbr} ({data.utcOffset}) · {countryLabel}
        </p>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {[
            { label: 'Area Code', value: data.code },
            { label: 'City', value: `${data.city}, ${data.stateCode}` },
            { label: 'Time Zone', value: data.tzAbbr },
            { label: 'UTC Offset', value: data.observesDST ? `${data.utcOffset} / ${data.utcOffsetDST} DST` : data.utcOffset },
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
          <h2 className="font-semibold text-slate-800 mb-2">Where Is Area Code {data.code}?</h2>
          <p className="text-sm text-slate-600 mb-3">{data.coverageArea}</p>
          {data.notes && (
            <p className="text-sm text-slate-500 border-t border-slate-100 pt-3">{data.notes}</p>
          )}
          <div className="mt-3">
            <div className="text-xs text-slate-400 uppercase tracking-wide mb-2">Major Cities & Neighborhoods</div>
            <div className="flex flex-wrap gap-2">
              {data.majorCities.map(c => (
                <span key={c} className="px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Time Zone Details */}
        <section className="rounded-xl border border-slate-200 p-5 bg-white mb-6">
          <h2 className="font-semibold text-slate-800 mb-3">Time Zone for Area Code {data.code}</h2>
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
            {data.observesDST && (
              <>
                <div>
                  <dt className="text-slate-400 text-xs uppercase">DST 2026 Start</dt>
                  <dd className="text-slate-700 font-medium mt-0.5">{data.country === 'US' ? 'March 8, 2026' : 'March 8, 2026'}</dd>
                </div>
                <div>
                  <dt className="text-slate-400 text-xs uppercase">DST 2026 End</dt>
                  <dd className="text-slate-700 font-medium mt-0.5">{data.country === 'US' ? 'November 1, 2026' : 'November 1, 2026'}</dd>
                </div>
              </>
            )}
            <div>
              <dt className="text-slate-400 text-xs uppercase">Country</dt>
              <dd className="text-slate-700 font-medium mt-0.5">{countryLabel}</dd>
            </div>
            <div>
              <dt className="text-slate-400 text-xs uppercase">IANA Zone</dt>
              <dd className="text-slate-700 font-medium mt-0.5">{data.timezone}</dd>
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

        {/* Same-state area codes */}
        {sameState.length > 0 && (
          <section className="mb-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Other {data.state} Area Codes</h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {sameState.map(d => (
                  <Link
                    key={d.code}
                    href={`/area-code/${d.code}`}
                    className="p-3 rounded-xl border border-slate-200 bg-white hover:border-sky-300 transition-colors text-center"
                  >
                    <div className="font-bold text-sky-600">{d.code}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{d.city}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Same timezone area codes */}
        {sameTz.length > 0 && (
          <section className="mb-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">More {data.tzAbbr} Area Codes</h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {sameTz.map(d => (
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
            </div>
          </section>
        )}

        {/* All area codes link */}
        <div className="text-center mb-6">
          <Link href="/area-code" className="text-sm text-sky-600 hover:underline">
            → Browse all {areaCodeList.length} area codes
          </Link>
        </div>

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
