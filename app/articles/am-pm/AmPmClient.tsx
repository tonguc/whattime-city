'use client'

import { useArticleTheme } from '@/lib/useArticleTheme'

const conversionRows: [string, string, string][] = [
  ['12:00 AM (midnight)', '00:00', 'AM'],
  ['1:00 AM', '01:00', 'AM'],
  ['2:00 AM', '02:00', 'AM'],
  ['3:00 AM', '03:00', 'AM'],
  ['4:00 AM', '04:00', 'AM'],
  ['5:00 AM', '05:00', 'AM'],
  ['6:00 AM', '06:00', 'AM'],
  ['7:00 AM', '07:00', 'AM'],
  ['8:00 AM', '08:00', 'AM'],
  ['9:00 AM', '09:00', 'AM'],
  ['10:00 AM', '10:00', 'AM'],
  ['11:00 AM', '11:00', 'AM'],
  ['12:00 PM (noon)', '12:00', 'PM'],
  ['1:00 PM', '13:00', 'PM'],
  ['2:00 PM', '14:00', 'PM'],
  ['3:00 PM', '15:00', 'PM'],
  ['4:00 PM', '16:00', 'PM'],
  ['5:00 PM', '17:00', 'PM'],
  ['6:00 PM', '18:00', 'PM'],
  ['7:00 PM', '19:00', 'PM'],
  ['8:00 PM', '20:00', 'PM'],
  ['9:00 PM', '21:00', 'PM'],
  ['10:00 PM', '22:00', 'PM'],
  ['11:00 PM', '23:00', 'PM'],
]

export default function AmPmClient() {
  const t = useArticleTheme()

  return (
    <article>
      <nav className={`mb-4 text-sm ${t.breadcrumb}`} aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1">
          <li><a href="/" className={t.breadcrumbLink}>Home</a></li>
          <li className={t.breadcrumbSep}>/</li>
          <li><a href="/articles/" className={t.breadcrumbLink}>Articles</a></li>
          <li className={t.breadcrumbSep}>/</li>
          <li className={t.breadcrumbCurrent}>AM and PM</li>
        </ol>
      </nav>

      <h1 className={`mb-4 text-3xl font-bold sm:text-4xl ${t.heading}`}>
        AM and PM — What Do They Stand For?
      </h1>

      <p className={`mb-8 text-lg leading-relaxed ${t.body}`}>
        <strong className={t.heading}>AM</strong> stands for{' '}
        <strong className={t.heading}>Ante Meridiem</strong> (Latin for &lsquo;before midday&rsquo;)
        and covers <strong className={t.heading}>12:00 midnight to 11:59 in the morning</strong>.{' '}
        <strong className={t.heading}>PM</strong> stands for{' '}
        <strong className={t.heading}>Post Meridiem</strong> (&lsquo;after midday&rsquo;) and covers{' '}
        <strong className={t.heading}>12:00 noon to 11:59 at night</strong>. Together they
        divide the 24-hour day into two 12-hour halves.
      </p>

      {/* Quick Answer */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Quick Answer</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className={`${t.card} p-5`}>
            <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${t.muted}`}>AM — Ante Meridiem</p>
            <p className={`text-3xl font-bold tabular-nums ${t.heading}`}>12:00 AM – 11:59 AM</p>
            <p className={`mt-2 text-sm ${t.body}`}>Midnight through late morning. Starts at 00:00 in 24-hour time.</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1">PM — Post Meridiem</p>
            <p className="text-3xl font-bold text-blue-700 tabular-nums">12:00 PM – 11:59 PM</p>
            <p className="mt-2 text-sm text-blue-600">Noon through late night. Starts at 12:00 in 24-hour time.</p>
          </div>
        </div>
      </section>

      {/* AM vs PM Comparison */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>AM vs PM — Full Comparison</h2>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}></th>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>AM</th>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>PM</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Full name', 'Ante Meridiem', 'Post Meridiem'],
                ['Meaning', 'Before midday', 'After midday'],
                ['Time range', '12:00 AM – 11:59 AM', '12:00 PM – 11:59 PM'],
                ['24-hour equivalent', '00:00 – 11:59', '12:00 – 23:59'],
                ['Example', '9:00 AM = morning', '9:00 PM = evening'],
              ].map(([label, am, pm], idx) => (
                <tr key={label} className={`${t.tableRowBorder} last:border-0 ${idx % 2 === 0 ? t.tableRowEven : t.tableRowOdd}`}>
                  <td className={`px-4 py-3 font-medium ${t.subheading}`}>{label}</td>
                  <td className={`px-4 py-3 tabular-nums ${t.heading}`}>{am}</td>
                  <td className={`px-4 py-3 tabular-nums ${t.heading}`}>{pm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Conversion Chart */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>12-Hour to 24-Hour Conversion Chart</h2>
        <p className={`mb-4 leading-relaxed ${t.body}`}>
          The table below shows every hour of the day in both 12-hour AM/PM format and 24-hour (military) format.
        </p>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>12-Hour</th>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>24-Hour</th>
                <th className={`px-4 py-3 text-center ${t.tableHeadCell}`}>Period</th>
              </tr>
            </thead>
            <tbody>
              {conversionRows.map(([twelveHour, twentyFourHour, period], idx) => (
                <tr
                  key={twelveHour}
                  className={`${t.tableRowBorder} last:border-0 ${
                    twelveHour.includes('midnight') || twelveHour.includes('noon')
                      ? t.tableRowCurrent
                      : idx % 2 === 0 ? t.tableRowEven : t.tableRowOdd
                  }`}
                >
                  <td className={`px-4 py-2 tabular-nums ${t.heading}`}>{twelveHour}</td>
                  <td className={`px-4 py-2 tabular-nums ${t.tableCell}`}>{twentyFourHour}</td>
                  <td className="px-4 py-2 text-center">
                    {period === 'AM' ? (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">AM</span>
                    ) : (
                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">PM</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`mt-2 text-xs ${t.muted}`}>
          Rows highlighted in amber mark the two special cases: 12:00 AM (midnight) and 12:00 PM (noon).
        </p>
      </section>

      {/* 12 AM vs 12 PM */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>The Confusing Part: Is 12 AM Midnight or Noon?</h2>
        <p className={`mb-4 leading-relaxed ${t.body}`}>
          <strong className={t.heading}>12:00 AM is midnight. 12:00 PM is noon.</strong>{' '}
          This is the most confusing part of the 12-hour system. Think of it this way: 12:01 AM
          is just after midnight (early morning), so 12:00 AM must be midnight. 12:01 PM is just
          after noon, so 12:00 PM must be noon.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className={`${t.cardAlt} p-5`}>
            <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${t.muted}`}>12 AM</p>
            <p className={`text-2xl font-bold tabular-nums ${t.heading}`}>Midnight</p>
            <p className={`mt-1 text-lg font-semibold tabular-nums ${t.body}`}>= 00:00</p>
            <p className={`mt-2 text-sm ${t.body}`}>Start of the new calendar day. The darkest part of the night.</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-2">12 PM</p>
            <p className="text-2xl font-bold text-amber-800 tabular-nums">Noon</p>
            <p className="mt-1 text-lg font-semibold tabular-nums text-amber-700">= 12:00</p>
            <p className="mt-2 text-sm text-amber-700">The middle of the day. The Sun is at its highest point.</p>
          </div>
        </div>
        <div className={`mt-4 ${t.infoBox}`}>
          <strong>Tip:</strong> To avoid confusion in formal writing, use{' '}
          <strong>12 midnight</strong> or <strong>12 noon</strong> instead of 12 AM or 12 PM.
        </div>
      </section>

      {/* Which Countries */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Which Countries Use AM/PM?</h2>
        <p className={`mb-4 leading-relaxed ${t.body}`}>The 12-hour AM/PM system is primarily used in:</p>
        <div className={`${t.card} p-5 mb-4`}>
          <ul className={`grid gap-1 sm:grid-cols-2 text-sm list-disc list-inside ${t.body}`}>
            {['United States','Canada','Australia','Philippines','Malaysia','India','Pakistan','Bangladesh','Egypt','Saudi Arabia','Colombia','Mexico'].map(c => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <p className={`leading-relaxed ${t.body}`}>
          Most of <strong className={t.heading}>Europe</strong>,{' '}
          <strong className={t.heading}>East Asia</strong>, and{' '}
          <strong className={t.heading}>Latin America</strong> use the 24-hour clock. For example,
          3 PM in Germany is written as <strong className={t.heading}>15:00</strong>, not 3 PM.
        </p>
      </section>

      {/* Memory tricks */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>How to Remember AM vs PM</h2>
        <p className={`mb-4 leading-relaxed ${t.body}`}>
          The Latin origins are the most reliable guide, but two simple mnemonics also work well:
        </p>
        <div className="space-y-3">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="font-semibold text-green-800 mb-1">AM = &ldquo;After Midnight&rdquo;</p>
            <p className="text-sm text-green-700">
              Not technically correct, but it works as a memory hook. AM hours run from midnight through the morning.
            </p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="font-semibold text-blue-800 mb-1">PM = &ldquo;Past Midday&rdquo;</p>
            <p className="text-sm text-blue-700">
              PM hours begin at noon and run through the rest of the day until just before midnight.
            </p>
          </div>
          <div className={`${t.cardAlt} p-4`}>
            <p className={`font-semibold mb-1 ${t.heading}`}>The Latin shortcut</p>
            <p className={`text-sm ${t.body}`}>
              <strong>Ante</strong> (before) + <strong>Meridiem</strong> (midday) = AM = morning.{' '}
              <strong>Post</strong> (after) + <strong>Meridiem</strong> = PM = afternoon/evening.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Devices */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>AM/PM in Digital Devices</h2>
        <p className={`mb-4 leading-relaxed ${t.body}`}>
          Most smartphones and operating systems store time using the{' '}
          <strong className={t.heading}>24-hour clock</strong> internally. The AM/PM display is a formatting choice.
        </p>
        <ul className={`space-y-2 text-sm list-disc list-inside ${t.body}`}>
          <li><strong>iPhone/iPad (iOS):</strong> Settings → General → Date &amp; Time → toggle 24-Hour Time.</li>
          <li><strong>Android:</strong> Settings → System → Date &amp; Time → Use 24-hour format.</li>
          <li><strong>Windows:</strong> Settings → Time &amp; Language → Region → Change date formats.</li>
          <li><strong>macOS:</strong> System Settings → General → Language &amp; Region → Time format.</li>
        </ul>
        <p className={`mt-4 text-sm ${t.muted}`}>
          Switching to 24-hour format eliminates AM/PM ambiguity entirely — every hour has a unique number from 0 to 23.
        </p>
      </section>

      {/* Related */}
      <section className="mb-10">
        <h2 className={`mb-3 text-lg font-semibold ${t.heading}`}>Related Tools &amp; Articles</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="/military-time/" className={t.link}>Military Time Converter — 24-Hour Clock Reference</a></li>
          <li><a href="/time-converter/" className={t.link}>Time Converter Tool</a></li>
          <li><a href="/articles/how-many-weeks-in-a-year/" className={t.link}>How Many Weeks in a Year?</a></li>
          <li><a href="/articles/how-many-days-in-a-year/" className={t.link}>How Many Days in a Year?</a></li>
          <li><a href="/articles/" className={t.link}>All Articles</a></li>
        </ul>
      </section>

      <footer className={t.footer}>
        Last updated March 2026. AM/PM definitions based on the standard 12-hour clock convention.
      </footer>
    </article>
  )
}
