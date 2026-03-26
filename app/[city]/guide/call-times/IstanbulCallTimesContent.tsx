'use client'

import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

interface City {
  slug: string
  city: string
  timezone: string
}

interface Props {
  city: City
}

export default function IstanbulCallTimesContent({ city }: Props) {
  const { isLight } = useCityContext()

  const textColor    = isLight ? 'text-slate-700'   : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-900'   : 'text-white'
  const mutedColor   = isLight ? 'text-slate-500'   : 'text-slate-400'
  const cardBg       = isLight ? 'bg-slate-50'      : 'bg-slate-800/50'
  const cardBorder   = isLight ? 'border-slate-200' : 'border-slate-700'
  const linkColor    = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBg      = isLight ? 'bg-white'         : 'bg-slate-800'
  const tableHeaderBg = isLight ? 'bg-slate-100'    : 'bg-slate-700'
  const tableBorder  = isLight ? 'border-slate-200' : 'border-slate-600'
  const hoverBg      = isLight ? 'hover:bg-slate-50': 'hover:bg-slate-700/30'
  const warningBg    = isLight ? 'bg-blue-50'       : 'bg-blue-900/20'
  const warningBorder = isLight ? 'border-blue-100' : 'border-blue-800'
  const greenBg      = isLight ? 'bg-green-50'      : 'bg-green-900/20'
  const greenBorder  = isLight ? 'border-green-100' : 'border-green-800'
  const greenText    = isLight ? 'text-green-700'   : 'text-green-400'

  // Calling TO Istanbul (TRT = UTC+3, no DST)
  const callTimes = [
    { from: 'New York',   flag: '🇺🇸', diff: '-8h (EST) / -7h (EDT)', bestBusiness: '1 AM – 9 AM EST', bestPersonal: '7 PM – 10 PM EST' },
    { from: 'Los Angeles',flag: '🇺🇸', diff: '-11h (PST) / -10h (PDT)', bestBusiness: '10 PM – 6 AM PST', bestPersonal: '4 PM – 7 PM PST' },
    { from: 'London',     flag: '🇬🇧', diff: '-3h (GMT) / -2h (BST)', bestBusiness: '9 AM – 3 PM GMT', bestPersonal: '6 PM – 9 PM GMT' },
    { from: 'Paris/Berlin',flag: '🇪🇺', diff: '-2h (CET) / -1h (CEST)', bestBusiness: '9 AM – 4 PM CET', bestPersonal: '7 PM – 10 PM CET' },
    { from: 'Dubai',      flag: '🇦🇪', diff: '+1h (GST)', bestBusiness: '10 AM – 7 PM GST', bestPersonal: '8 AM – 10 PM GST' },
    { from: 'Mumbai',     flag: '🇮🇳', diff: '+2.5h (IST)', bestBusiness: '11:30 AM – 8:30 PM IST', bestPersonal: '9 AM – 11 PM IST' },
    { from: 'Singapore',  flag: '🇸🇬', diff: '+5h (SGT)', bestBusiness: '2 PM – 11 PM SGT', bestPersonal: 'Limited overlap' },
    { from: 'Tokyo',      flag: '🇯🇵', diff: '+6h (JST)', bestBusiness: '3 PM – 11 PM JST', bestPersonal: 'Limited overlap' },
  ]

  // NYC overlap table rows
  const nycOverlap = [
    { nyc: '1:00 AM', istanbul: '9:00 AM', status: '🟢 Istanbul: Start of day' },
    { nyc: '6:00 AM', istanbul: '2:00 PM', status: '🟢 Both business hours' },
    { nyc: '9:00 AM', istanbul: '5:00 PM', status: '🟡 Istanbul: End of day' },
    { nyc: '10:00 AM', istanbul: '6:00 PM', status: '🔴 Istanbul: After hours' },
    { nyc: '5:00 PM', istanbul: '1:00 AM', status: '🔴 Istanbul: Late night' },
  ]

  return (
    <div className={`max-w-4xl mx-auto px-4 py-6 ${textColor}`}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>
            ← Back to Istanbul Guide
          </Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call Istanbul
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Optimal calling times from major cities worldwide — Istanbul is TRT (UTC+3), no daylight saving time
        </p>
      </header>

      {/* Featured Snippet Section */}
      <section id="snippet-target" className={`mb-10 p-6 rounded-xl border ${cardBg} ${cardBorder}`}>
        <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call Istanbul from New York
        </h2>

        <p className="mb-4 leading-relaxed text-base">
          The best time to call Istanbul from New York for business is between{' '}
          <strong>6:00 AM and 9:00 AM EST</strong>. This window aligns with{' '}
          <strong>2:00 PM to 5:00 PM in Istanbul</strong>, covering the final hours of the Turkish
          business day. For urgent morning calls, 1:00–2:00 AM EST reaches Istanbul at 9:00–10:00 AM.
        </p>

        {/* DST Note */}
        <div className={`mb-6 p-4 rounded-lg border text-sm ${warningBg} ${warningBorder}`}>
          <p>
            <strong>⚠️ No DST in Turkey:</strong> Istanbul observes TRT (UTC+3) year-round. Turkey
            abolished daylight saving time in 2016. However, the offset to New York changes slightly
            when the US switches between EST and EDT — varying between <strong>7 and 8 hours</strong>.
          </p>
        </div>

        {/* NYC Overlap Table */}
        <div className={`overflow-x-auto rounded-lg border ${cardBorder}`}>
          <table className={`w-full text-left border-collapse ${tableBg}`}>
            <thead className={tableHeaderBg}>
              <tr>
                <th className={`p-4 border-b font-semibold text-sm ${headingColor} ${tableBorder}`}>
                  New York (EST)
                </th>
                <th className={`p-4 border-b font-semibold text-sm ${headingColor} ${tableBorder}`}>
                  Istanbul (TRT)
                </th>
                <th className={`p-4 border-b font-semibold text-sm ${headingColor} ${tableBorder}`}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {nycOverlap.map(row => (
                <tr key={row.nyc} className={`border-b ${tableBorder} ${hoverBg}`}>
                  <td className="p-4 font-medium">{row.nyc}</td>
                  <td className="p-4">{row.istanbul}</td>
                  <td className="p-4 text-sm">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Istanbul Business Hours */}
      <section className={`mb-10 p-6 rounded-xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-xl font-bold mb-3 ${headingColor}`}>🕘 Istanbul Business Hours</h2>
        <ul className={`space-y-1 text-sm ${textColor}`}>
          <li>• <strong>Weekdays:</strong> Monday – Friday, 9:00 AM – 6:00 PM TRT</li>
          <li>• <strong>Weekend:</strong> Saturday & Sunday off for most offices</li>
          <li>• <strong>Banks:</strong> 9:00 AM – 5:00 PM weekdays</li>
          <li>• <strong>Grand Bazaar:</strong> Monday – Saturday, 8:30 AM – 7:00 PM (closed Sundays)</li>
          <li>• <strong>Ramadan:</strong> Reduced productivity, shorter effective hours in some offices</li>
        </ul>
      </section>

      {/* All Cities Table */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📞 Best Time to Call Istanbul — All Cities
        </h2>

        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className={`w-full text-sm ${tableBg}`}>
            <thead className={tableHeaderBg}>
              <tr>
                <th className={`px-4 py-3 text-left font-semibold ${headingColor}`}>Calling From</th>
                <th className={`px-4 py-3 text-left font-semibold ${headingColor}`}>Time Diff</th>
                <th className={`px-4 py-3 text-left font-semibold ${headingColor}`}>Best for Business</th>
                <th className={`px-4 py-3 text-left font-semibold ${headingColor}`}>Best for Personal</th>
              </tr>
            </thead>
            <tbody>
              {callTimes.map(ct => (
                <tr key={ct.from} className={`border-t ${tableBorder} ${hoverBg}`}>
                  <td className="px-4 py-3 font-medium">
                    {ct.flag} {ct.from}
                  </td>
                  <td className={`px-4 py-3 ${mutedColor}`}>{ct.diff}</td>
                  <td className="px-4 py-3">{ct.bestBusiness}</td>
                  <td className="px-4 py-3">{ct.bestPersonal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`text-xs mt-2 ${mutedColor}`}>
          All Istanbul times based on TRT (UTC+3). Istanbul does not observe DST.
        </p>
      </section>

      {/* Tips */}
      <section className={`mb-10 p-6 rounded-xl border ${greenBg} ${greenBorder}`}>
        <h2 className={`text-xl font-bold mb-4 ${greenText}`}>💡 Istanbul Calling Tips</h2>
        <ul className={`space-y-3 text-sm ${textColor}`}>
          <li>
            <strong>Ramadan:</strong> Business pace slows significantly. Avoid calling during Iftar
            (sunset meal). Morning calls before noon TRT are more effective.
          </li>
          <li>
            <strong>Eid holidays:</strong> Turkey observes Eid al-Fitr (Ramazan Bayramı) and Eid
            al-Adha (Kurban Bayramı) as multi-day public holidays. Offices close for 3–4 days.
          </li>
          <li>
            <strong>Cultural tip:</strong> Turkish business culture values relationship-building.
            Starting a call with small talk is expected — don&apos;t jump straight to business.
          </li>
          <li>
            <strong>Phone country code:</strong> Turkey is +90. Istanbul area codes: European side
            (0212), Asian side (0216).
          </li>
        </ul>
      </section>

      {/* Related Links */}
      <nav className={`text-sm ${mutedColor}`}>
        <p className="mb-2 font-medium">Explore more Istanbul guides:</p>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={linkColor}>Business Hours</Link>
          <Link href={`/${city.slug}/guide/holidays/`} className={linkColor}>Public Holidays</Link>
          <Link href={`/${city.slug}/guide/time-difference/`} className={linkColor}>Time Difference</Link>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>Full Guide</Link>
        </div>
      </nav>
    </div>
  )
}
