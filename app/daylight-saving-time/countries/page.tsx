import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'

export const metadata: Metadata = {
  title: 'Daylight Saving Time by Country 2026 — Complete List',
  description:
    'Does your country observe daylight saving time? Complete country-by-country DST list for 2026 — which countries change clocks, which abolished DST, and which never observed it.',
  alternates: {
    canonical: 'https://whattime.city/daylight-saving-time/countries/',
  },
  openGraph: {
    title: 'Daylight Saving Time by Country 2026 — Complete List',
    description:
      'Full list of countries that observe, abolished, or never had daylight saving time in 2026.',
    type: 'website',
    url: 'https://whattime.city/daylight-saving-time/countries/',
    siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many countries observe daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Approximately 70 countries observe daylight saving time as of 2026. About 140 countries — the majority of the world — do not change their clocks. Most of Asia, Africa, and equatorial regions have never observed or have abolished DST.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries abolished daylight saving time recently?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recent abolitions include: Mexico (most states, 2022), Russia (2014), Brazil (2019), Turkey (2016), Argentina (2009), Kazakhstan (2005). The EU voted to abolish DST in 2019 but has not yet implemented the change.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does China observe daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. China abolished daylight saving time in 1991 and now uses a single time zone (CST, UTC+8) year-round across the entire country.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Japan observe daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Japan does not observe daylight saving time and has not done so since 1952. Japan stays on JST (UTC+9) year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does India observe daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. India does not observe DST and uses a single time zone — IST (UTC+5:30) — year-round across the entire country.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries in South America observe DST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of 2026, Chile and Paraguay are the main South American countries that observe DST. Brazil abolished DST in 2019. Argentina, Colombia, Peru, Venezuela, and most others do not change clocks.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Daylight Saving Time', item: 'https://whattime.city/daylight-saving-time/' },
    { '@type': 'ListItem', position: 3, name: 'Countries', item: 'https://whattime.city/daylight-saving-time/countries/' },
  ],
}

// Countries that observe DST in 2026
const observeDST = [
  { country: 'United States', region: 'North America', start: 'Mar 8', end: 'Nov 1', note: 'AZ, HI exempt', page: '/daylight-saving-time/usa/' },
  { country: 'Canada', region: 'North America', start: 'Mar 8', end: 'Nov 1', note: 'Saskatchewan exempt', page: '/daylight-saving-time/canada/' },
  { country: 'Mexico (Baja California)', region: 'North America', start: 'Mar 8', end: 'Nov 1', note: 'Border zone only', page: '/daylight-saving-time/mexico/' },
  { country: 'Cuba', region: 'Caribbean', start: 'Mar 8', end: 'Oct 25', note: '' },
  { country: 'Haiti', region: 'Caribbean', start: 'Mar 8', end: 'Nov 1', note: '' },
  { country: 'Bermuda', region: 'Atlantic', start: 'Mar 8', end: 'Nov 1', note: '' },
  { country: 'United Kingdom', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'BST (UTC+1)', page: '/daylight-saving-time/uk/' },
  { country: 'Germany', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'France', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Italy', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Spain', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Netherlands', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Belgium', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Poland', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Sweden', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Norway', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Denmark', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Switzerland', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Austria', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Portugal', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'WEST (UTC+1)', page: '/daylight-saving-time/europe/' },
  { country: 'Greece', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'EEST (UTC+3)', page: '/daylight-saving-time/europe/' },
  { country: 'Romania', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'EEST (UTC+3)', page: '/daylight-saving-time/europe/' },
  { country: 'Czech Republic', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Hungary', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'CEST (UTC+2)', page: '/daylight-saving-time/europe/' },
  { country: 'Finland', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'EEST (UTC+3)', page: '/daylight-saving-time/europe/' },
  { country: 'Ireland', region: 'Europe', start: 'Mar 29', end: 'Oct 25', note: 'IST (UTC+1)', page: '/daylight-saving-time/europe/' },
  { country: 'Israel', region: 'Middle East', start: 'Mar 27', end: 'Oct 25', note: 'Variable (religious calendar)' },
  { country: 'Jordan', region: 'Middle East', start: 'Mar 27', end: 'Oct 29', note: '' },
  { country: 'Lebanon', region: 'Middle East', start: 'Mar 29', end: 'Oct 25', note: '' },
  { country: 'Syria', region: 'Middle East', start: 'Mar 27', end: 'Oct 25', note: '' },
  { country: 'Iran', region: 'Middle East', start: 'Mar 22', end: 'Sep 22', note: 'UTC+3:30 / UTC+4:30' },
  { country: 'Australia (5 states)', region: 'Oceania', start: 'Oct 4', end: 'Apr 5', note: 'QLD, WA, NT exempt', page: '/daylight-saving-time/australia/' },
  { country: 'New Zealand', region: 'Oceania', start: 'Sep 27', end: 'Apr 5', note: 'UTC+13 during DST', page: '/daylight-saving-time/new-zealand/' },
  { country: 'Chile', region: 'South America', start: 'Sep 6', end: 'Apr 5', note: 'Southern Hemisphere' },
  { country: 'Paraguay', region: 'South America', start: 'Sep 27', end: 'Mar 22', note: 'Southern Hemisphere' },
]

// Countries that abolished DST
const abolishedDST = [
  { country: 'Russia', year: '2014', note: 'Permanent standard time (MSK UTC+3)' },
  { country: 'Turkey', year: '2016', note: 'Permanent summer time (TRT UTC+3)' },
  { country: 'Brazil', year: '2019', note: 'All states — BRT UTC-3 year-round' },
  { country: 'Mexico (most states)', year: '2022', note: 'Border zone still observes DST' },
  { country: 'Argentina', year: '2009', note: 'ART UTC-3 year-round' },
  { country: 'Kazakhstan', year: '2005', note: 'ALMT UTC+5 year-round' },
  { country: 'China', year: '1991', note: 'CST UTC+8 year-round — single time zone' },
  { country: 'Iceland', year: 'Never adopted', note: 'GMT UTC+0 year-round' },
  { country: 'Kyrgyzstan', year: '2005', note: 'KGT UTC+6 year-round' },
  { country: 'Uzbekistan', year: '1992', note: 'UZT UTC+5 year-round' },
  { country: 'Turkmenistan', year: '1992', note: 'TMT UTC+5 year-round' },
  { country: 'Azerbaijan', year: '2016', note: 'AZT UTC+4 year-round' },
  { country: 'Armenia', year: '2012', note: 'AMT UTC+4 year-round' },
  { country: 'Georgia', year: '2006', note: 'GET UTC+4 year-round' },
]

// Countries that never observed DST (major ones)
const noDST = [
  { country: 'Japan', timezone: 'JST (UTC+9)', note: 'Abolished 1952' },
  { country: 'China', timezone: 'CST (UTC+8)', note: 'Abolished 1991' },
  { country: 'India', timezone: 'IST (UTC+5:30)', note: 'Never observed' },
  { country: 'Singapore', timezone: 'SGT (UTC+8)', note: 'Never observed' },
  { country: 'United Arab Emirates', timezone: 'GST (UTC+4)', note: 'Never observed' },
  { country: 'Saudi Arabia', timezone: 'AST (UTC+3)', note: 'Never observed' },
  { country: 'Qatar', timezone: 'AST (UTC+3)', note: 'Never observed' },
  { country: 'Kuwait', timezone: 'AST (UTC+3)', note: 'Never observed' },
  { country: 'Pakistan', timezone: 'PKT (UTC+5)', note: 'Abolished 2009' },
  { country: 'Bangladesh', timezone: 'BST (UTC+6)', note: 'Never observed' },
  { country: 'Thailand', timezone: 'ICT (UTC+7)', note: 'Never observed' },
  { country: 'Vietnam', timezone: 'ICT (UTC+7)', note: 'Never observed' },
  { country: 'Philippines', timezone: 'PST (UTC+8)', note: 'Never observed' },
  { country: 'Indonesia', timezone: 'WIB/WITA/WIT', note: 'Never observed' },
  { country: 'Malaysia', timezone: 'MYT (UTC+8)', note: 'Never observed' },
  { country: 'South Korea', timezone: 'KST (UTC+9)', note: 'Abolished 1988' },
  { country: 'Nigeria', timezone: 'WAT (UTC+1)', note: 'Never observed' },
  { country: 'Kenya', timezone: 'EAT (UTC+3)', note: 'Never observed' },
  { country: 'South Africa', timezone: 'SAST (UTC+2)', note: 'Never observed' },
  { country: 'Egypt', timezone: 'EET (UTC+2)', note: 'Abolished 2011' },
  { country: 'Ethiopia', timezone: 'EAT (UTC+3)', note: 'Never observed' },
  { country: 'Ghana', timezone: 'GMT (UTC+0)', note: 'Never observed' },
  { country: 'Colombia', timezone: 'COT (UTC-5)', note: 'Never observed' },
  { country: 'Peru', timezone: 'PET (UTC-5)', note: 'Never observed' },
  { country: 'Venezuela', timezone: 'VET (UTC-4)', note: 'Never observed' },
  { country: 'Bolivia', timezone: 'BOT (UTC-4)', note: 'Never observed' },
  { country: 'Ecuador', timezone: 'ECT (UTC-5)', note: 'Never observed' },
]

const card = 'rounded-2xl border border-slate-200 bg-white'

export default function DSTCountriesPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="text-xs text-slate-400 mb-4">
        <Link href="/" className="hover:text-slate-600">Home</Link>
        {' / '}
        <Link href="/daylight-saving-time/" className="hover:text-slate-600">Daylight Saving Time</Link>
        {' / '}
        <span className="text-slate-600">Countries</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
        Daylight Saving Time by Country 2026
      </h1>
      <p className="text-lg text-slate-500 mb-6">
        Complete list of which countries observe, abolished, or never had DST — with 2026 clock change dates.
      </p>

      {/* Summary stats */}
      <section className="mb-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
            <div className="text-2xl font-bold text-emerald-700">~70</div>
            <div className="text-xs text-emerald-600 mt-1">Countries observing DST</div>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center">
            <div className="text-2xl font-bold text-amber-700">~140</div>
            <div className="text-xs text-amber-600 mt-1">Countries without DST</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
            <div className="text-2xl font-bold text-slate-700">70%</div>
            <div className="text-xs text-slate-500 mt-1">World population with no DST</div>
          </div>
        </div>
      </section>

      {/* Region pages */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">DST Guides by Region</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'United States', href: '/daylight-saving-time/usa/', date: 'Mar 8 – Nov 1' },
              { label: 'Canada', href: '/daylight-saving-time/canada/', date: 'Mar 8 – Nov 1' },
              { label: 'United Kingdom', href: '/daylight-saving-time/uk/', date: 'Mar 29 – Oct 25' },
              { label: 'Europe', href: '/daylight-saving-time/europe/', date: 'Mar 29 – Oct 25' },
              { label: 'Australia', href: '/daylight-saving-time/australia/', date: 'Oct 4 – Apr 5' },
              { label: 'New Zealand', href: '/daylight-saving-time/new-zealand/', date: 'Sep 27 – Apr 5' },
              { label: 'Mexico', href: '/daylight-saving-time/mexico/', date: 'Mostly abolished' },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="p-3 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-colors"
              >
                <div className="text-sm font-medium text-slate-700">{r.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{r.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Countries observing DST */}
      <section className="mb-4">
        <div className={`${card} overflow-hidden`}>
          <div className="px-6 pt-6 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800">Countries That Observe DST in 2026</h2>
            <p className="text-sm text-slate-500 mt-1">Clock change dates for the current year</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-6 py-3 text-slate-700 font-semibold">Country</th>
                  <th className="text-left px-6 py-3 text-slate-700 font-semibold">Region</th>
                  <th className="text-left px-6 py-3 text-emerald-700 font-semibold">Forward</th>
                  <th className="text-left px-6 py-3 text-amber-700 font-semibold">Back</th>
                  <th className="text-left px-6 py-3 text-slate-700 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {observeDST.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-slate-50/50' : ''}>
                    <td className="px-6 py-3 font-medium text-slate-700">
                      {row.page ? (
                        <Link href={row.page} className="text-sky-600 hover:underline">{row.country}</Link>
                      ) : row.country}
                    </td>
                    <td className="px-6 py-3 text-slate-500">{row.region}</td>
                    <td className="px-6 py-3 text-emerald-600 font-medium">{row.start}</td>
                    <td className="px-6 py-3 text-amber-600 font-medium">{row.end}</td>
                    <td className="px-6 py-3 text-slate-400 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Countries that abolished DST */}
      <section className="mb-4">
        <div className={`${card} overflow-hidden`}>
          <div className="px-6 pt-6 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800">Countries That Abolished DST</h2>
            <p className="text-sm text-slate-500 mt-1">Previously observed DST but stopped</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-6 py-3 text-slate-700 font-semibold">Country</th>
                  <th className="text-left px-6 py-3 text-slate-700 font-semibold">Year Abolished</th>
                  <th className="text-left px-6 py-3 text-slate-700 font-semibold">Current Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {abolishedDST.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-slate-50/50' : ''}>
                    <td className="px-6 py-3 font-medium text-slate-700">{row.country}</td>
                    <td className="px-6 py-3 text-slate-500">{row.year}</td>
                    <td className="px-6 py-3 text-slate-400 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Countries that never observed DST */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Countries That Never Observed DST</h2>
          <p className="text-sm text-slate-500 mb-4">
            Most of Asia, Africa, and equatorial regions have never adopted clock changes. These countries maintain a fixed UTC offset year-round.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {noDST.map((row) => (
              <div key={row.country} className="px-3 py-2 rounded-lg border border-slate-200 bg-slate-50">
                <div className="text-sm font-medium text-slate-700">{row.country}</div>
                <div className="text-xs text-slate-400">{row.timezone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
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

      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">
        DST data sourced from{' '}
        <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">
          IANA Time Zone Database
        </a>
        {' '}and official government sources. Last updated March 2026.
      </footer>
    </ContentPageWrapper>
  )
}
