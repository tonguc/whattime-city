'use client'

import { useArticleTheme } from '@/lib/useArticleTheme'

const MONTHS = [
  { name: 'January',   num: 1,  days: 31, quarter: 'Q1', origin: 'Janus — Roman god of beginnings' },
  { name: 'February',  num: 2,  days: 28, quarter: 'Q1', origin: 'Februa — Roman purification festival' },
  { name: 'March',     num: 3,  days: 31, quarter: 'Q1', origin: 'Mars — Roman god of war' },
  { name: 'April',     num: 4,  days: 30, quarter: 'Q2', origin: 'Aperire (Latin) — "to open"' },
  { name: 'May',       num: 5,  days: 31, quarter: 'Q2', origin: 'Maia — Roman goddess of growth' },
  { name: 'June',      num: 6,  days: 30, quarter: 'Q2', origin: 'Juno — Roman goddess' },
  { name: 'July',      num: 7,  days: 31, quarter: 'Q3', origin: 'Julius Caesar — renamed in his honor' },
  { name: 'August',    num: 8,  days: 31, quarter: 'Q3', origin: 'Augustus Caesar — renamed in his honor' },
  { name: 'September', num: 9,  days: 30, quarter: 'Q3', origin: 'Septem (Latin) — "seven" (9th month, originally 7th)' },
  { name: 'October',   num: 10, days: 31, quarter: 'Q4', origin: 'Octo (Latin) — "eight" (originally 8th)' },
  { name: 'November',  num: 11, days: 30, quarter: 'Q4', origin: 'Novem (Latin) — "nine" (originally 9th)' },
  { name: 'December',  num: 12, days: 31, quarter: 'Q4', origin: 'Decem (Latin) — "ten" (originally 10th)' },
]

const faqItems = [
  {
    name: 'How many months are in a year?',
    answer: 'There are 12 months in a year in the Gregorian calendar: January, February, March, April, May, June, July, August, September, October, November, and December.',
  },
  {
    name: 'How many days are in each month?',
    answer: '7 months have 31 days (January, March, May, July, August, October, December), 4 months have 30 days (April, June, September, November), and February has 28 days in a common year or 29 days in a leap year.',
  },
  {
    name: 'Which month has the fewest days?',
    answer: 'February has the fewest days — 28 in a common year and 29 in a leap year. All other months have 30 or 31 days.',
  },
  {
    name: 'How many months are in a quarter?',
    answer: 'A year is divided into 4 quarters, each containing 3 months. Q1: January–March, Q2: April–June, Q3: July–September, Q4: October–December.',
  },
  {
    name: 'How many months is 6 months?',
    answer: '6 months is exactly half a year. Depending on which half, it spans either 181 days (January–June in a common year) or 184 days (July–December). On average, 6 months is approximately 182.5 days.',
  },
]

export default function HowManyMonthsInAYearClient() {
  const t = useArticleTheme()

  return (
    <article>
      {/* Breadcrumb */}
      <nav className={`mb-4 text-sm ${t.breadcrumb}`} aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1">
          <li><a href="/" className={t.breadcrumbLink}>Home</a></li>
          <li className={t.breadcrumbSep}>/</li>
          <li><a href="/articles/" className={t.breadcrumbLink}>Articles</a></li>
          <li className={t.breadcrumbSep}>/</li>
          <li className={t.breadcrumbCurrent}>How Many Months in a Year?</li>
        </ol>
      </nav>

      <h1 className={`mb-4 text-3xl font-bold sm:text-4xl ${t.heading}`}>
        How Many Months in a Year?
      </h1>

      <p className={`mb-8 text-lg leading-relaxed ${t.body}`}>
        There are <strong className={t.heading}>12 months</strong> in a year in the
        Gregorian calendar. Seven months have 31 days, four have 30 days, and February has
        28 days (or 29 in a leap year). Together they add up to 365 days — or 366 in a leap year.
      </p>

      {/* Quick answer */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Quick Answer</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className={`${t.card} p-5 text-center`}>
            <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${t.muted}`}>Months in a year</p>
            <p className={`text-5xl font-bold tabular-nums ${t.heading}`}>12</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1">31-day months</p>
            <p className="text-5xl font-bold text-blue-700 tabular-nums">7</p>
            <p className="mt-1 text-xs text-blue-600">Jan Mar May Jul Aug Oct Dec</p>
          </div>
          <div className={`${t.cardAlt} p-5 text-center`}>
            <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${t.muted}`}>30-day months</p>
            <p className={`text-5xl font-bold tabular-nums ${t.subheading}`}>4</p>
            <p className={`mt-1 text-xs ${t.muted}`}>Apr Jun Sep Nov</p>
          </div>
        </div>
        <div className={`mt-4 ${t.highlight} text-sm ${t.highlightBody}`}>
          <strong>February</strong> is the only month with 28 days in a common year and
          29 days in a leap year. Every other month has 30 or 31 days.
        </div>
      </section>

      {/* All 12 months table */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>All 12 Months — Days &amp; Quarters</h2>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>#</th>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Month</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Days</th>
                <th className={`px-4 py-3 text-center ${t.tableHeadCell}`}>Quarter</th>
              </tr>
            </thead>
            <tbody>
              {MONTHS.map((m, idx) => (
                <tr
                  key={m.name}
                  className={`${t.tableRowBorder} last:border-0 ${idx % 2 === 0 ? t.tableRowEven : t.tableRowOdd}`}
                >
                  <td className={`px-4 py-3 tabular-nums ${t.muted}`}>{m.num}</td>
                  <td className={`px-4 py-3 font-medium ${t.heading}`}>{m.name}</td>
                  <td className={`px-4 py-3 text-right tabular-nums font-semibold ${t.heading}`}>
                    {m.name === 'February' ? (
                      <span>28 <span className={`text-xs font-normal ${t.muted}`}>(29 leap)</span></span>
                    ) : m.days}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      m.quarter === 'Q1' ? 'bg-blue-100 text-blue-700' :
                      m.quarter === 'Q2' ? 'bg-green-100 text-green-700' :
                      m.quarter === 'Q3' ? 'bg-amber-100 text-amber-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>{m.quarter}</span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className={`border-t-2 ${t.divider} ${t.tableRowOdd}`}>
                <td colSpan={2} className={`px-4 py-3 font-semibold ${t.subheading}`}>Total (common year)</td>
                <td className={`px-4 py-3 text-right font-bold tabular-nums ${t.heading}`}>365</td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Quarters */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Months by Quarter</h2>
        <p className={`mb-4 leading-relaxed ${t.body}`}>
          A year divides evenly into <strong>4 quarters</strong> of 3 months each. Quarters
          are widely used in business reporting, fiscal planning, and school calendars.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { q: 'Q1', months: 'Jan · Feb · Mar', days: '90', label: '(91 leap)', color: 'border-blue-200 bg-blue-50', badge: 'bg-blue-100 text-blue-700' },
            { q: 'Q2', months: 'Apr · May · Jun', days: '91', label: '', color: 'border-green-200 bg-green-50', badge: 'bg-green-100 text-green-700' },
            { q: 'Q3', months: 'Jul · Aug · Sep', days: '92', label: '', color: 'border-amber-200 bg-amber-50', badge: 'bg-amber-100 text-amber-700' },
            { q: 'Q4', months: 'Oct · Nov · Dec', days: '92', label: '', color: 'border-purple-200 bg-purple-50', badge: 'bg-purple-100 text-purple-700' },
          ].map(item => (
            <div key={item.q} className={`rounded-xl border p-4 ${item.color}`}>
              <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${item.badge}`}>{item.q}</span>
              <p className={`mt-2 text-sm font-medium ${t.subheading}`}>{item.months}</p>
              <p className={`mt-1 text-2xl font-bold tabular-nums ${t.heading}`}>
                {item.days} <span className={`text-sm font-normal ${t.muted}`}>days{item.label}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Days per month memory trick */}
      <section className="mb-10">
        <h2 className={`mb-3 text-2xl font-bold ${t.heading}`}>How to Remember Days Per Month</h2>
        <p className={`mb-4 leading-relaxed ${t.body}`}>
          The classic trick is the <strong>knuckle method</strong>: make a fist and count
          across your knuckles and valleys starting from the index finger knuckle.
          Knuckle = 31 days; valley = 30 days (or 28/29 for February).
        </p>
        <div className={`${t.cardAlt} p-5 mb-4`}>
          <h3 className={`font-semibold mb-2 ${t.heading}`}>The Rhyme</h3>
          <p className={`italic leading-relaxed ${t.body}`}>
            &ldquo;Thirty days hath September, April, June, and November.
            All the rest have thirty-one, save February alone,
            which has twenty-eight days clear and twenty-nine in each leap year.&rdquo;
          </p>
        </div>
        <div className={`${t.card} p-5`}>
          <h3 className={`font-semibold mb-3 ${t.heading}`}>Quick Reference</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className={`font-medium mb-1 ${t.subheading}`}>31 days (7 months):</p>
              <p className={t.body}>Jan, Mar, May, Jul, Aug, Oct, Dec</p>
            </div>
            <div>
              <p className={`font-medium mb-1 ${t.subheading}`}>30 days (4 months):</p>
              <p className={t.body}>Apr, Jun, Sep, Nov</p>
            </div>
            <div className="col-span-2">
              <p className={`font-medium mb-1 ${t.subheading}`}>28/29 days (1 month):</p>
              <p className={t.body}>Feb — 28 common year, 29 leap year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Month name origins */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Month Name Origins</h2>
        <p className={`mb-4 leading-relaxed ${t.body}`}>
          Most month names come from Latin — either Roman gods, emperors, or number words.
          Notably, September through December are named after Latin numbers 7–10,
          a relic from when the Roman calendar only had 10 months (March was month 1).
        </p>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Month</th>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Named After</th>
              </tr>
            </thead>
            <tbody>
              {MONTHS.map((m, idx) => (
                <tr
                  key={m.name}
                  className={`${t.tableRowBorder} last:border-0 ${idx % 2 === 0 ? t.tableRowEven : t.tableRowOdd}`}
                >
                  <td className={`px-4 py-3 font-medium ${t.heading}`}>{m.name}</td>
                  <td className={`px-4 py-3 ${t.body}`}>{m.origin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Time unit comparisons */}
      <section className="mb-10">
        <h2 className={`mb-3 text-2xl font-bold ${t.heading}`}>Months in Other Time Units</h2>
        <div className={t.tableWrapper}>
          <table className="w-full text-sm">
            <thead>
              <tr className={t.tableHead}>
                <th className={`px-4 py-3 text-left ${t.tableHeadCell}`}>Period</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Months</th>
                <th className={`px-4 py-3 text-right ${t.tableHeadCell}`}>Approx. Days</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1 week', '~0.23', '7'],
                ['1 month', '1', '28–31'],
                ['1 quarter', '3', '90–92'],
                ['Half a year', '6', '181–184'],
                ['1 year', '12', '365 or 366'],
                ['2 years', '24', '730 or 731'],
                ['5 years', '60', '1,826 or 1,827'],
                ['10 years (decade)', '120', '~3,652'],
              ].map(([period, months, days], idx) => (
                <tr
                  key={period as string}
                  className={`${t.tableRowBorder} last:border-0 ${idx % 2 === 0 ? t.tableRowEven : t.tableRowOdd}`}
                >
                  <td className={`px-4 py-3 ${t.heading}`}>{period}</td>
                  <td className={`px-4 py-3 text-right font-semibold tabular-nums ${t.heading}`}>{months}</td>
                  <td className={`px-4 py-3 text-right tabular-nums ${t.body}`}>{days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className={`mb-4 text-2xl font-bold ${t.heading}`}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.name} className={`${t.card} p-5`}>
              <h3 className={`mb-2 font-semibold ${t.heading}`}>{item.name}</h3>
              <p className={`text-sm leading-relaxed ${t.body}`}>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="mb-10">
        <h2 className={`mb-3 text-lg font-semibold ${t.heading}`}>İlgili Makaleler &amp; Araçlar</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="/articles/how-many-days-in-a-year/" className={t.link}>How Many Days in a Year? — 365 or 366</a></li>
          <li><a href="/articles/how-many-weeks-in-a-year/" className={t.link}>How Many Weeks in a Year? — 52 Weeks Explained</a></li>
          <li><a href="/articles/how-many-hours-in-a-year/" className={t.link}>How Many Hours in a Year? — 8,760 Hours</a></li>
          <li><a href="/articles/how-many-minutes-in-a-year/" className={t.link}>How Many Minutes in a Year? — 525,600 Minutes</a></li>
          <li><a href="/calendar/" className={t.link}>2026 Calendar — Full Year View</a></li>
          <li><a href="/articles/" className={t.link}>Tüm Makaleler</a></li>
        </ul>
      </section>

      <footer className={t.footer}>
        Son güncelleme: Mart 2026. Gregoryen takvimine göre hesaplanmıştır.
      </footer>
    </article>
  )
}
