'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import { areaCodes, type AreaCodeData } from '@/data/area-codes'

interface Props {
  data: AreaCodeData
  sameState: AreaCodeData[]
  sameTz: AreaCodeData[]
}

export default function AreaCodeDetailClient({ data, sameState, sameTz }: Props) {
  const { isLight } = useCityContext()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const countryLabel = data.country === 'CA' ? 'Canada' : 'United States'

  /* ───── styles ───── */
  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white' : 'rounded-2xl border border-slate-700/50 bg-slate-800/60'
  const nestedCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50' : 'rounded-xl border border-slate-700/50 bg-slate-800/50'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-500' : 'text-slate-400'
  const codeLinkAccent = isLight ? 'text-sky-600' : 'text-sky-400'
  const codeLink = isLight
    ? 'border border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50'
    : 'border border-slate-600 bg-slate-800 hover:border-sky-500 hover:bg-slate-700'
  const factCard = isLight ? 'rounded-xl border border-slate-200 bg-white p-3' : 'rounded-xl border border-slate-700/50 bg-slate-800 p-3'
  const labelClass = isLight ? 'text-xs text-slate-400 uppercase tracking-wide mb-1' : 'text-xs text-slate-500 uppercase tracking-wide mb-1'

  const faqItems = [
    { q: `Where is area code ${data.code}?`, a: `Area code ${data.code} is located in ${data.city}, ${data.state} (${countryLabel}). It covers ${data.coverageArea}.` },
    { q: `What time zone is area code ${data.code} in?`, a: `Area code ${data.code} (${data.city}, ${data.state}) is in the ${data.tzAbbr} time zone. Standard time is ${data.utcOffset}${data.observesDST ? ` and ${data.utcOffsetDST} during Daylight Saving Time` : '. This area does not observe DST'}.` },
    { q: `What time is it in area code ${data.code} right now?`, a: `Area code ${data.code} follows ${data.tzAbbr} (${data.utcOffset}). Visit our ${data.city} time page for a live clock with the exact current time.` },
    { q: `Is area code ${data.code} a scam?`, a: `Area code ${data.code} is a legitimate NANPA-assigned code serving ${data.city}, ${data.state}. However, scammers can spoof any area code using VoIP technology. If you receive an unexpected call from (${data.code}), verify the caller before sharing personal information. Check if the caller ID matches a known business, and be wary of calls asking for immediate payment or personal data.` },
    { q: `When was area code ${data.code} introduced?`, a: `Area code ${data.code} was introduced in ${data.introduced}. ${data.notes || `It serves ${data.city}, ${data.state}.`}` },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className={`flex items-center gap-1.5 text-sm ${mutedText}`}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/area-code" className="hover:underline">Area Codes</Link>
        <span>/</span>
        <span className={heading}>{data.code}</span>
      </nav>

      {/* Hero */}
      <header className="space-y-2">
        <h1 className={`text-3xl sm:text-4xl font-bold ${heading}`}>
          Area Code {data.code}
        </h1>
        <p className={`text-lg ${subText}`}>
          {data.city}, {data.state} · {data.tzAbbr} ({data.utcOffset}) · {countryLabel}
        </p>
      </header>

      {/* ───── Quick Facts Grid ───── */}
      <section className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: 'Area Code', value: data.code },
          { label: 'City', value: `${data.city}, ${data.stateCode}` },
          { label: 'Time Zone', value: data.tzAbbr },
          { label: 'UTC Offset', value: data.observesDST ? `${data.utcOffset} / ${data.utcOffsetDST} DST` : data.utcOffset },
          { label: 'DST', value: data.observesDST ? 'Observed' : 'Not observed' },
          { label: 'Introduced', value: data.introduced },
        ].map(({ label, value }) => (
          <div key={label} className={factCard}>
            <div className={labelClass}>{label}</div>
            <div className={`font-semibold text-sm ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{value}</div>
          </div>
        ))}
      </section>

      {/* ───── Where Is This Area Code? ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Where Is Area Code {data.code}?</h2>
        <p className={`text-sm ${subText}`}>{data.coverageArea}</p>
        {data.notes && (
          <p className={`text-sm ${mutedText} border-t pt-3 ${isLight ? 'border-slate-100' : 'border-slate-700/50'}`}>{data.notes}</p>
        )}
        <div>
          <div className={labelClass}>Major Cities &amp; Neighborhoods</div>
          <div className="flex flex-wrap gap-2 mt-1">
            {data.majorCities.map(c => (
              <span key={c} className={`px-2.5 py-1 rounded-md text-xs font-medium ${isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'}`}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Time Zone Details ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Time Zone for Area Code {data.code}</h2>
        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className={labelClass}>Standard Time</dt>
            <dd className={`font-medium mt-0.5 ${heading}`}>{data.tzAbbr.split('/')[0]} ({data.utcOffset})</dd>
          </div>
          <div>
            <dt className={labelClass}>Daylight Time</dt>
            <dd className={`font-medium mt-0.5 ${heading}`}>
              {data.observesDST ? `${data.tzAbbr.split('/')[1] || 'DST'} (${data.utcOffsetDST})` : 'Not observed'}
            </dd>
          </div>
          {data.observesDST && (
            <>
              <div>
                <dt className={labelClass}>DST 2026 Start</dt>
                <dd className={`font-medium mt-0.5 ${heading}`}>{data.country === 'CA' ? 'March 8, 2026' : 'March 8, 2026'}</dd>
              </div>
              <div>
                <dt className={labelClass}>DST 2026 End</dt>
                <dd className={`font-medium mt-0.5 ${heading}`}>{data.country === 'CA' ? 'November 1, 2026' : 'November 1, 2026'}</dd>
              </div>
            </>
          )}
          <div>
            <dt className={labelClass}>Country</dt>
            <dd className={`font-medium mt-0.5 ${heading}`}>{countryLabel}</dd>
          </div>
          <div>
            <dt className={labelClass}>IANA Zone</dt>
            <dd className={`font-medium mt-0.5 ${heading}`}>{data.timezone}</dd>
          </div>
        </dl>
        <div className={`pt-4 border-t ${isLight ? 'border-slate-100' : 'border-slate-700/50'}`}>
          <Link href={`/${data.citySlug}`} className={`text-sm font-medium ${codeLinkAccent} hover:underline`}>
            See current time in {data.city} →
          </Link>
        </div>
      </section>

      {/* ───── Calling Tips ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Calling Area Code {data.code}</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className={`${nestedCard} p-4`}>
            <h3 className={`font-semibold ${heading} mb-1`}>Domestic Calls</h3>
            <p className={`text-sm ${subText}`}>
              Dial <strong>1 + {data.code} + 7-digit number</strong> for calls from outside the area.
              {data.notes?.toLowerCase().includes('overlay') ? ' 10-digit dialing is mandatory in this area due to overlay codes.' : ' Local calls within the same area code may use 7-digit dialing where available.'}
            </p>
          </div>
          <div className={`${nestedCard} p-4`}>
            <h3 className={`font-semibold ${heading} mb-1`}>International Calls</h3>
            <p className={`text-sm ${subText}`}>
              From outside {countryLabel}: dial your country&apos;s exit code + <strong>1 + {data.code} + number</strong>.
              From most countries, the format is <strong>+1-{data.code}-XXX-XXXX</strong>.
            </p>
          </div>
          <div className={`${nestedCard} p-4`}>
            <h3 className={`font-semibold ${heading} mb-1`}>Best Time to Call</h3>
            <p className={`text-sm ${subText}`}>
              Area code {data.code} is in {data.tzAbbr} ({data.utcOffset}).
              Business hours are typically 9:00 AM – 5:00 PM local time.
              {data.observesDST ? ' Remember that clocks shift during DST (March–November).' : ''}
            </p>
          </div>
          <div className={`${nestedCard} p-4`}>
            <h3 className={`font-semibold ${heading} mb-1`}>Scam Awareness</h3>
            <p className={`text-sm ${subText}`}>
              While ({data.code}) is a legitimate area code, scammers can spoof any number.
              Never share personal info with unknown callers. Verify by calling the organization directly.
            </p>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqItems.map((item, i) => (
            <div key={i} className={`${nestedCard} overflow-hidden`}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className={`w-full flex items-center justify-between p-4 text-left font-medium ${heading}`}
              >
                <span className="text-sm">{item.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''} ${mutedText}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className={`px-4 pb-4 text-sm ${subText}`}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ───── Same State Area Codes ───── */}
      {sameState.length > 0 && (
        <section className={`${card} p-6 space-y-4`}>
          <h2 className={`text-xl font-bold ${heading}`}>Other {data.state} Area Codes</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {sameState.map(d => (
              <Link
                key={d.code}
                href={`/area-code/${d.code}`}
                className={`p-3 rounded-xl text-center transition-colors ${codeLink}`}
              >
                <div className={`font-bold ${codeLinkAccent}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{d.code}</div>
                <div className={`text-xs ${mutedText} mt-0.5`}>{d.city}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ───── Same Timezone Area Codes ───── */}
      {sameTz.length > 0 && (
        <section className={`${card} p-6 space-y-4`}>
          <h2 className={`text-xl font-bold ${heading}`}>More {data.tzAbbr} Area Codes</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {sameTz.map(d => (
              <Link
                key={d.code}
                href={`/area-code/${d.code}`}
                className={`p-3 rounded-xl text-center transition-colors ${codeLink}`}
              >
                <div className={`font-bold ${codeLinkAccent}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{d.code}</div>
                <div className={`text-xs ${mutedText} mt-0.5`}>{d.city}, {d.stateCode}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ───── All Codes Link ───── */}
      <div className="text-center">
        <Link href="/area-code" className={`text-sm font-medium ${codeLinkAccent} hover:underline`}>
          Browse all {Object.keys(areaCodes).length} area codes →
        </Link>
      </div>

      <p className={`text-center text-xs ${mutedText}`}>
        Area code data sourced from{' '}
        <a href="https://www.nanpa.com" target="_blank" rel="noopener noreferrer" className="underline">NANPA</a>.
        Timezone data from{' '}
        <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">IANA Time Zone Database</a>.
        Last updated March 2026.
      </p>
    </div>
  )
}
