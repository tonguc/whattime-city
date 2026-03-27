'use client'

import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const dstData = {
  northAmerica: {
    rule: 'Second Sunday in March → First Sunday in November',
    exceptions: 'Arizona (except Navajo Nation), Hawaii, Puerto Rico, US territories do not observe DST.',
  },
  europe: {
    rule: 'Last Sunday in March → Last Sunday in October',
    notes: 'UK follows the same dates as EU post-Brexit. EU has been considering abolishing DST since 2019 but no final decision has been made.',
  },
}

const noObserveDST = [
  { name: 'Japan', timezone: 'JST (UTC+9)' },
  { name: 'China', timezone: 'CST (UTC+8)' },
  { name: 'India', timezone: 'IST (UTC+5:30)' },
  { name: 'Singapore', timezone: 'SGT (UTC+8)' },
  { name: 'United Arab Emirates', timezone: 'GST (UTC+4)' },
  { name: 'Saudi Arabia', timezone: 'AST (UTC+3)' },
  { name: 'Russia', timezone: 'MSK (UTC+3) and others' },
  { name: 'Brazil', timezone: 'BRT (UTC-3)' },
  { name: 'South Africa', timezone: 'SAST (UTC+2)' },
  { name: 'Egypt', timezone: 'EET (UTC+2)' },
  { name: 'Nigeria', timezone: 'WAT (UTC+1)' },
  { name: 'Thailand', timezone: 'ICT (UTC+7)' },
  { name: 'Indonesia', timezone: 'WIB/WITA/WIT' },
  { name: 'Philippines', timezone: 'PST (UTC+8)' },
  { name: 'Pakistan', timezone: 'PKT (UTC+5)' },
]

export default function DSTPageClient() {
  const { isLight } = useCityContext()

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white'
    : 'rounded-2xl border border-slate-700 bg-slate-800'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-500' : 'text-slate-400'
  const tableHead = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const tableHeadText = isLight ? 'text-slate-700' : 'text-slate-300'
  const tableRow = isLight ? 'bg-slate-50/50' : 'bg-slate-700/30'
  const divider = isLight ? 'divide-slate-100' : 'divide-slate-700'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700 bg-slate-700/50 p-4'
  const footerCard = isLight
    ? 'rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500'
    : 'rounded-xl border border-slate-700 bg-slate-800/50 p-4 text-xs text-slate-400'
  const noObserveCard = isLight
    ? 'px-3 py-2 rounded-lg bg-slate-50 border border-slate-200'
    : 'px-3 py-2 rounded-lg bg-slate-700/50 border border-slate-600'
  const regionLink = isLight
    ? 'p-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-sky-300 hover:bg-sky-50 transition-colors'
    : 'p-3 rounded-xl border border-slate-600 bg-slate-700/50 hover:border-sky-500 transition-colors'
  const toolLink = isLight
    ? 'p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-sky-300 transition-colors'
    : 'p-4 rounded-xl border border-slate-600 bg-slate-700/50 hover:border-sky-500 transition-colors'

  return (
    <div>
      {/* Page Hero */}
      <div className="mb-6">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${heading}`}>
          Daylight Saving Time 2026
        </h1>
        <p className={`text-lg ${subText}`}>
          Exact dates for when clocks change in 2026 — United States, UK, Europe, Australia, and every other region.
        </p>
      </div>

      {/* Quick Reference Table */}
      <section className="mb-4">
        <div className={`${card} overflow-hidden`}>
          <div className={`px-6 pt-6 pb-4 border-b ${isLight ? 'border-slate-100' : 'border-slate-700'}`}>
            <h2 className={`text-xl font-semibold ${heading}`}>2026 DST Dates at a Glance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className={tableHead}>
                <tr>
                  <th className={`text-left px-6 py-3 font-semibold ${tableHeadText}`}>Region</th>
                  <th className={`text-left px-6 py-3 font-semibold ${tableHeadText}`}>Clocks Forward</th>
                  <th className={`text-left px-6 py-3 font-semibold ${tableHeadText}`}>Clocks Back</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${divider}`}>
                {[
                  { region: 'United States & Canada', forward: 'March 8, 2026', back: 'November 1, 2026' },
                  { region: 'European Union & UK', forward: 'March 29, 2026', back: 'October 25, 2026', alt: true },
                  { region: 'Australia (DST states)', forward: 'October 4, 2026', back: 'April 5, 2026' },
                  { region: 'New Zealand', forward: 'September 27, 2026', back: 'April 5, 2026', alt: true },
                  { region: 'Mexico', forward: 'April 5, 2026', back: 'October 25, 2026' },
                  { region: 'Chile', forward: 'September 6, 2026', back: 'April 5, 2026', alt: true },
                ].map(({ region, forward, back, alt }) => (
                  <tr key={region} className={alt ? tableRow : ''}>
                    <td className={`px-6 py-3 font-medium ${heading}`}>{region}</td>
                    <td className="px-6 py-3 text-emerald-500 font-medium">{forward}</td>
                    <td className="px-6 py-3 text-amber-500 font-medium">{back}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* US & Canada */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>United States & Canada — DST 2026</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-xs font-medium text-emerald-500 uppercase tracking-wide mb-1">Spring Forward</div>
              <div className={`text-xl font-bold ${heading}`}>March 8, 2026</div>
              <div className={`text-sm mt-1 ${subText}`}>2:00 AM → 3:00 AM</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="text-xs font-medium text-amber-500 uppercase tracking-wide mb-1">Fall Back</div>
              <div className={`text-xl font-bold ${heading}`}>November 1, 2026</div>
              <div className={`text-sm mt-1 ${subText}`}>2:00 AM → 1:00 AM</div>
            </div>
          </div>
          <p className={`text-sm ${subText}`}>
            <strong className={heading}>Rule:</strong> {dstData.northAmerica.rule}
          </p>
          <p className={`text-sm mt-2 ${subText}`}>
            <strong className={heading}>Exceptions:</strong> {dstData.northAmerica.exceptions}
          </p>
        </div>
      </section>

      {/* UK & Europe */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>United Kingdom & Europe — DST 2026</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-xs font-medium text-emerald-500 uppercase tracking-wide mb-1">Spring Forward (BST / CEST begins)</div>
              <div className={`text-xl font-bold ${heading}`}>March 29, 2026</div>
              <div className={`text-sm mt-1 ${subText}`}>1:00 AM UTC → 2:00 AM UTC</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="text-xs font-medium text-amber-500 uppercase tracking-wide mb-1">Fall Back (GMT / CET resumes)</div>
              <div className={`text-xl font-bold ${heading}`}>October 25, 2026</div>
              <div className={`text-sm mt-1 ${subText}`}>2:00 AM UTC → 1:00 AM UTC</div>
            </div>
          </div>
          <p className={`text-sm ${subText}`}>
            <strong className={heading}>Rule:</strong> {dstData.europe.rule}
          </p>
          <p className={`text-sm mt-2 ${subText}`}>
            <strong className={heading}>Note:</strong> {dstData.europe.notes}
          </p>
        </div>
      </section>

      {/* Australia & NZ */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Australia & New Zealand — DST 2026</h2>
          <div className={`mb-4 pb-4 border-b ${isLight ? 'border-slate-100' : 'border-slate-700'}`}>
            <h3 className={`font-semibold mb-3 ${heading}`}>Australia (NSW, Victoria, Tasmania, South Australia, ACT)</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-3">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <div className="text-xs font-medium text-emerald-500 uppercase tracking-wide mb-1">Spring Forward</div>
                <div className={`text-xl font-bold ${heading}`}>October 4, 2026</div>
                <div className={`text-sm mt-1 ${subText}`}>2:00 AM → 3:00 AM</div>
              </div>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <div className="text-xs font-medium text-amber-500 uppercase tracking-wide mb-1">Fall Back</div>
                <div className={`text-xl font-bold ${heading}`}>April 5, 2026</div>
                <div className={`text-sm mt-1 ${subText}`}>3:00 AM → 2:00 AM</div>
              </div>
            </div>
            <p className={`text-sm ${subText}`}>
              <strong className={heading}>Exceptions:</strong> Queensland, Western Australia, and Northern Territory do not observe DST.
            </p>
          </div>
          <div>
            <h3 className={`font-semibold mb-3 ${heading}`}>New Zealand</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <div className="text-xs font-medium text-emerald-500 uppercase tracking-wide mb-1">Spring Forward</div>
                <div className={`text-xl font-bold ${heading}`}>September 27, 2026</div>
                <div className={`text-sm mt-1 ${subText}`}>2:00 AM → 3:00 AM NZST</div>
              </div>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <div className="text-xs font-medium text-amber-500 uppercase tracking-wide mb-1">Fall Back</div>
                <div className={`text-xl font-bold ${heading}`}>April 5, 2026</div>
                <div className={`text-sm mt-1 ${subText}`}>3:00 AM → 2:00 AM NZST</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Does the Clock Change */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>When Does the Time Change? 2026 Clock Change Dates</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            The exact moment clocks change depends on your region. Here are the 2026 clock change dates — when to spring forward and when to fall back:
          </p>
          <div className="space-y-3">
            {[
              { region: 'United States & Canada', forward: 'March 8, 2026 at 2:00 AM', back: 'November 1, 2026 at 2:00 AM' },
              { region: 'United Kingdom', forward: 'March 29, 2026 at 1:00 AM', back: 'October 25, 2026 at 1:00 AM' },
              { region: 'European Union', forward: 'March 29, 2026 at 1:00 AM UTC', back: 'October 25, 2026 at 1:00 AM UTC' },
              { region: 'Australia (DST states)', forward: 'October 4, 2026 at 2:00 AM', back: 'April 5, 2026 at 3:00 AM' },
              { region: 'New Zealand', forward: 'September 27, 2026 at 2:00 AM', back: 'April 5, 2026 at 3:00 AM' },
            ].map(({ region, forward, back }) => (
              <div key={region} className={innerCard}>
                <div className={`font-semibold text-sm mb-2 ${heading}`}>{region}</div>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                  <div><span className="text-emerald-500 font-medium">Spring forward:</span> <span className={subText}>{forward}</span></div>
                  <div><span className="text-amber-500 font-medium">Fall back:</span> <span className={subText}>{back}</span></div>
                </div>
              </div>
            ))}
          </div>
          <p className={`text-xs mt-3 ${mutedText}`}>
            Tip: US clock changes always happen on Sundays at 2:00 AM local time to minimize disruption. EU changes happen on the last Sunday of March/October.
          </p>
        </div>
      </section>

      {/* Countries without DST */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-2 ${heading}`}>Countries That Do Not Observe DST</h2>
          <p className={`mb-4 text-sm ${subText}`}>
            About 70% of the world does not observe Daylight Saving Time. Most of Asia, Africa, and equatorial regions keep a fixed UTC offset year-round.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {noObserveDST.map((country) => (
              <div key={country.name} className={noObserveCard}>
                <div className={`text-sm font-medium ${heading}`}>{country.name}</div>
                <div className={`text-xs ${mutedText}`}>{country.timezone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DST */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Why Does Daylight Saving Time Exist?</h2>
          <div className={`space-y-3 text-sm leading-relaxed ${subText}`}>
            <p>
              DST was first introduced widely during World War I to conserve coal by reducing the need for artificial lighting in the evening. Germany adopted it first in April 1916, and most of Europe and North America followed within months.
            </p>
            <p>
              The modern US DST schedule — second Sunday in March to first Sunday in November — was established by the Energy Policy Act of 2005. The EU uses the last Sunday in March and last Sunday in October.
            </p>
            <p>
              The claimed energy savings are contested by modern research. However, DST persists because changing it requires international coordination and political consensus. The EU voted to end DST in 2019 but implementation has been delayed indefinitely.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: 'When do clocks spring forward in the US in 2026?', a: 'Clocks spring forward on Sunday, March 8, 2026 at 2:00 AM local time. You lose 1 hour of sleep but gain an hour of evening daylight.' },
              { q: 'When do clocks fall back in the US in 2026?', a: 'Clocks fall back on Sunday, November 1, 2026 at 2:00 AM local time. You gain 1 hour of sleep as standard time resumes.' },
              { q: 'Is daylight saving time still happening in 2026?', a: 'Yes. Despite ongoing debate, the US, EU, UK, Australia, and other regions continue to observe DST in 2026. No legislation to permanently end it has been enacted.' },
              { q: 'Why are US and EU DST dates different?', a: 'The US and EU use different rules. The US switches on the second Sunday in March and first Sunday in November. The EU uses the last Sunday in March and October. This creates a 3-week window (March 8–29) and a 4-week window (October 25 – November 1) where the US–Europe time difference shifts by 1 hour.' },
              { q: "What states don't observe daylight saving time?", a: 'Arizona (except the Navajo Nation), Hawaii, and all US territories (Puerto Rico, US Virgin Islands, Guam, American Samoa, Northern Mariana Islands) do not observe DST.' },
              { q: 'Is daylight saving time going to continue in 2026?', a: 'Yes. The US, UK, EU, and most countries that observe DST continue to do so in 2026. The US Sunshine Protection Act (permanent DST) was not enacted. No abolishment legislation is in effect.' },
              { q: 'What states are considering getting rid of DST?', a: 'Over 30 states have introduced bills to end clock changes. However, under federal law states can only opt out of DST by staying on permanent standard time (as Arizona does). Switching to permanent daylight time requires an act of Congress — which has not passed.' },
              { q: 'Will clocks still change in 2027?', a: 'Yes, unless new legislation passes. The EU postponed its planned abolishment indefinitely. The US Sunshine Protection Act failed. Clock changes in 2027 are expected in all regions that observe DST in 2026.' },
            ].map((item, i) => (
              <div key={i} className={innerCard}>
                <h3 className={`font-semibold mb-1 text-sm ${heading}`}>{item.q}</h3>
                <p className={`text-sm ${subText}`}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region sub-pages */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>DST Guides by Region</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'United States', href: '/daylight-saving-time/usa/', sub: 'Mar 8 – Nov 1' },
              { label: 'Canada', href: '/daylight-saving-time/canada/', sub: 'Mar 8 – Nov 1' },
              { label: 'United Kingdom', href: '/daylight-saving-time/uk/', sub: 'Mar 29 – Oct 25' },
              { label: 'Europe', href: '/daylight-saving-time/europe/', sub: 'Mar 29 – Oct 25' },
              { label: 'Australia', href: '/daylight-saving-time/australia/', sub: 'Oct 4 – Apr 5' },
              { label: 'New Zealand', href: '/daylight-saving-time/new-zealand/', sub: 'Sep 27 – Apr 5' },
              { label: 'Mexico', href: '/daylight-saving-time/mexico/', sub: 'Mostly abolished 2022' },
              { label: 'All Countries', href: '/daylight-saving-time/countries/', sub: 'Full country list' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className={regionLink}>
                <div className={`font-medium text-sm ${heading}`}>{r.label}</div>
                <div className={`text-xs mt-0.5 ${mutedText}`}>{r.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/time-converter/" className={toolLink}>
              <div className={`font-medium text-sm ${heading}`}>Time Converter</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Convert between any two cities</div>
            </Link>
            <Link href="/meeting/" className={toolLink}>
              <div className={`font-medium text-sm ${heading}`}>Meeting Planner</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Find overlapping business hours</div>
            </Link>
            <Link href="/" className={toolLink}>
              <div className={`font-medium text-sm ${heading}`}>World Clock</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Current time in 400+ cities</div>
            </Link>
          </div>
        </div>
      </section>

      {/* E-E-A-T Footer */}
      <div className={footerCard}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            DST rules sourced from{' '}
            <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
              IANA Time Zone Database
            </a>
          </span>
          <span>Last updated: March 2026 · Verified by WhatTime.city Editorial Team</span>
        </div>
      </div>
    </div>
  )
}
