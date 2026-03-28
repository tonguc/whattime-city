import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'

export const metadata: Metadata = {
  title: 'AM and PM — What Do They Mean? 12-Hour Clock Explained',
  description:
    'AM (Ante Meridiem) means before midday. PM (Post Meridiem) means after midday. Learn how the 12-hour clock works, when to use AM vs PM, and common mistakes like 12 AM vs 12 PM.',
  alternates: {
    canonical: 'https://whattime.city/articles/am-pm/',
  },
  openGraph: {
    title: 'AM and PM — What Do They Mean? 12-Hour Clock Explained',
    description:
      'AM (Ante Meridiem) means before midday. PM (Post Meridiem) means after midday. Learn how the 12-hour clock works, when to use AM vs PM, and common mistakes like 12 AM vs 12 PM.',
    type: 'article',
    url: 'https://whattime.city/articles/am-pm/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AM and PM — What Do They Mean? 12-Hour Clock Explained',
    description:
      'AM = Ante Meridiem (before midday). PM = Post Meridiem (after midday). Full 12-hour to 24-hour conversion chart, 12 AM vs 12 PM explained.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does AM stand for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AM stands for Ante Meridiem, a Latin phrase meaning "before midday." AM covers the period from 12:00 midnight (00:00) to 11:59 in the morning.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does PM stand for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PM stands for Post Meridiem, a Latin phrase meaning "after midday." PM covers the period from 12:00 noon (12:00) to 11:59 at night.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is 12 PM noon or midnight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '12 PM is noon (midday). 12 AM is midnight. A helpful way to remember: 12:01 PM is just after noon, so 12:00 PM must be noon. 12:01 AM is just after midnight, so 12:00 AM must be midnight.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is midnight AM or PM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Midnight is 12:00 AM. In 24-hour (military) time, midnight is 00:00. The new day begins at 12:00 AM, and the first minute after midnight is 12:01 AM.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 12:00 AM in 24-hour time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '12:00 AM is 00:00 in 24-hour time. Midnight marks the start of a new calendar day. For example, 12:30 AM = 00:30, and 1:00 AM = 01:00.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it AM or PM right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check the current time for any city at whattime.city. If the time shown is between midnight and 11:59 in the morning, it is AM. If it is between noon and 11:59 at night, it is PM.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://whattime.city/articles/' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'AM and PM — What Do They Mean?',
      item: 'https://whattime.city/articles/am-pm/',
    },
  ],
}

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

export default function AmPmPage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-slate-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><a href="/" className="hover:text-slate-700 underline">Home</a></li>
            <li className="text-slate-400">/</li>
            <li><a href="/articles/" className="hover:text-slate-700 underline">Articles</a></li>
            <li className="text-slate-400">/</li>
            <li className="text-slate-700">AM and PM</li>
          </ol>
        </nav>

        {/* H1 */}
        <h1 className="mb-4 text-3xl font-bold text-slate-800 sm:text-4xl">
          AM and PM — What Do They Stand For?
        </h1>

        {/* Featured snippet paragraph */}
        <p className="mb-8 text-lg text-slate-700 leading-relaxed">
          <strong className="text-slate-800">AM</strong> stands for{' '}
          <strong className="text-slate-800">Ante Meridiem</strong> (Latin for &lsquo;before midday&rsquo;)
          and covers <strong className="text-slate-800">12:00 midnight to 11:59 in the morning</strong>.{' '}
          <strong className="text-slate-800">PM</strong> stands for{' '}
          <strong className="text-slate-800">Post Meridiem</strong> (&lsquo;after midday&rsquo;) and covers{' '}
          <strong className="text-slate-800">12:00 noon to 11:59 at night</strong>. Together they
          divide the 24-hour day into two 12-hour halves.
        </p>

        {/* Section 1: Quick Answer */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Quick Answer</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                AM — Ante Meridiem
              </p>
              <p className="text-3xl font-bold text-slate-800 tabular-nums">12:00 AM – 11:59 AM</p>
              <p className="mt-2 text-sm text-slate-600">
                Midnight through late morning. Starts at 00:00 in 24-hour time.
              </p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1">
                PM — Post Meridiem
              </p>
              <p className="text-3xl font-bold text-blue-700 tabular-nums">12:00 PM – 11:59 PM</p>
              <p className="mt-2 text-sm text-blue-600">
                Noon through late night. Starts at 12:00 in 24-hour time.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: AM vs PM Full Comparison */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">AM vs PM — Full Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700"></th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">AM</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">PM</th>
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
                  <tr
                    key={label}
                    className={`border-b border-slate-100 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className="px-4 py-3 font-medium text-slate-700">{label}</td>
                    <td className="px-4 py-3 tabular-nums text-slate-800">{am}</td>
                    <td className="px-4 py-3 tabular-nums text-slate-800">{pm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: 12-Hour to 24-Hour Conversion Chart */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">
            12-Hour to 24-Hour Conversion Chart
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The table below shows every hour of the day in both 12-hour AM/PM format and 24-hour
            (military) format.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">12-Hour</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">24-Hour</th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-700">Period</th>
                </tr>
              </thead>
              <tbody>
                {conversionRows.map(([twelveHour, twentyFourHour, period], idx) => (
                  <tr
                    key={twelveHour}
                    className={`border-b border-slate-100 last:border-0 ${
                      twelveHour.includes('midnight') || twelveHour.includes('noon')
                        ? 'bg-amber-50'
                        : idx % 2 === 0
                        ? 'bg-white'
                        : 'bg-slate-50/50'
                    }`}
                  >
                    <td className="px-4 py-2 tabular-nums text-slate-800">{twelveHour}</td>
                    <td className="px-4 py-2 tabular-nums text-slate-700">{twentyFourHour}</td>
                    <td className="px-4 py-2 text-center">
                      {period === 'AM' ? (
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                          AM
                        </span>
                      ) : (
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                          PM
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Rows highlighted in amber mark the two special cases: 12:00 AM (midnight) and 12:00 PM
            (noon).
          </p>
        </section>

        {/* Section 4: Is 12 AM Midnight or Noon? */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">
            The Confusing Part: Is 12 AM Midnight or Noon?
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            <strong className="text-slate-800">12:00 AM is midnight. 12:00 PM is noon.</strong>{' '}
            This is the most confusing part of the 12-hour system. Think of it this way: 12:01 AM
            is just after midnight (early morning), so 12:00 AM must be midnight. 12:01 PM is just
            after noon, so 12:00 PM must be noon.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                12 AM
              </p>
              <p className="text-2xl font-bold text-slate-800 tabular-nums">Midnight</p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-slate-600">= 00:00</p>
              <p className="mt-2 text-sm text-slate-600">
                Start of the new calendar day. The darkest part of the night.
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-2">
                12 PM
              </p>
              <p className="text-2xl font-bold text-amber-800 tabular-nums">Noon</p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-amber-700">= 12:00</p>
              <p className="mt-2 text-sm text-amber-700">
                The middle of the day. The Sun is at its highest point.
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <strong>Tip:</strong> To avoid confusion in formal writing, use{' '}
            <strong>12 midnight</strong> or <strong>12 noon</strong> instead of 12 AM or 12 PM.
          </div>
        </section>

        {/* Section 5: Which Countries Use AM/PM? */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Which Countries Use AM/PM?</h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The 12-hour AM/PM system is primarily used in:
          </p>
          <div className="mb-4 rounded-xl border border-slate-200 bg-white p-5">
            <ul className="grid gap-1 sm:grid-cols-2 text-sm text-slate-700 list-disc list-inside">
              <li>United States</li>
              <li>Canada</li>
              <li>Australia</li>
              <li>Philippines</li>
              <li>Malaysia</li>
              <li>India</li>
              <li>Pakistan</li>
              <li>Bangladesh</li>
              <li>Egypt</li>
              <li>Saudi Arabia</li>
              <li>Colombia</li>
              <li>Mexico</li>
            </ul>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Most of <strong className="text-slate-800">Europe</strong>,{' '}
            <strong className="text-slate-800">East Asia</strong>, and{' '}
            <strong className="text-slate-800">Latin America</strong> use the 24-hour clock (also
            called &ldquo;military time&rdquo; in the US). For example, 3 PM in Germany is written
            as <strong className="text-slate-800">15:00</strong>, not 3 PM.
          </p>
        </section>

        {/* Section 6: How to Remember AM vs PM */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">How to Remember AM vs PM</h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The Latin origins are the most reliable guide, but two simple mnemonics also work well:
          </p>
          <div className="space-y-3">
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-green-800 mb-1">AM = &ldquo;After Midnight&rdquo;</p>
              <p className="text-sm text-green-700">
                Not technically correct (AM means &lsquo;before midday&rsquo;), but it works as a
                memory hook. AM hours run from midnight through the morning.
              </p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
              <p className="font-semibold text-blue-800 mb-1">PM = &ldquo;Past Midday&rdquo;</p>
              <p className="text-sm text-blue-700">
                PM hours begin at noon and run through the rest of the day until just before
                midnight.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-800 mb-1">The Latin shortcut</p>
              <p className="text-sm text-slate-700">
                <strong>Ante</strong> (before) + <strong>Meridiem</strong> (midday) = AM = morning.{' '}
                <strong>Post</strong> (after) + <strong>Meridiem</strong> = PM = afternoon/evening.
                The word &ldquo;meridian&rdquo; in English also refers to the highest point of the
                Sun, reinforcing midday as the dividing line.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: AM/PM in Digital Devices */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">AM/PM in Digital Devices</h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Most smartphones, computers, and operating systems internally store time using the{' '}
            <strong className="text-slate-800">24-hour clock</strong> or a Unix timestamp (seconds
            since January 1, 1970 00:00:00 UTC). The AM/PM display is a formatting choice applied
            on top of that underlying value.
          </p>
          <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
            <li>
              <strong>iPhone/iPad (iOS):</strong> Settings → General → Date &amp; Time → toggle
              24-Hour Time to switch between 12-hour and 24-hour display.
            </li>
            <li>
              <strong>Android:</strong> Settings → System → Date &amp; Time → Use 24-hour format.
            </li>
            <li>
              <strong>Windows:</strong> Settings → Time &amp; Language → Region → Change date
              formats.
            </li>
            <li>
              <strong>macOS:</strong> System Settings → General → Language &amp; Region → Time
              format.
            </li>
          </ul>
          <p className="mt-4 text-sm text-slate-600">
            Switching your device to 24-hour format eliminates AM/PM ambiguity entirely — there is
            no &ldquo;12 AM vs 12 PM&rdquo; confusion when every hour has a unique number from 0 to
            23.
          </p>
        </section>

        {/* Section 8: FAQ */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h3 className="mb-2 font-semibold text-slate-800">{item.name}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-10">
          <h2 className="mb-3 text-lg font-semibold text-slate-800">Related Tools &amp; Articles</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/military-time/"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Military Time Converter — 24-Hour Clock Reference
              </a>
            </li>
            <li>
              <a
                href="/time-converter/"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Time Converter Tool
              </a>
            </li>
            <li>
              <a
                href="/articles/how-many-weeks-in-a-year/"
                className="text-blue-600 underline hover:text-blue-800"
              >
                How Many Weeks in a Year?
              </a>
            </li>
            <li>
              <a
                href="/articles/how-many-days-in-a-year/"
                className="text-blue-600 underline hover:text-blue-800"
              >
                How Many Days in a Year?
              </a>
            </li>
            <li>
              <a
                href="/articles/"
                className="text-blue-600 underline hover:text-blue-800"
              >
                All Articles
              </a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
          Last updated March 2026. AM/PM definitions based on the standard 12-hour clock convention.
          Latin etymology from Ante Meridiem and Post Meridiem as used in Gregorian timekeeping.
        </footer>
      </article>
    </ContentPageWrapper>
  )
}
