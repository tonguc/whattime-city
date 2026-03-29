'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import { areaCodes, areaCodeList, getAreaCodesByTimezone, getAreaCodesByState, type AreaCodeData } from '@/data/area-codes'

/* ───── Popular area codes (highest search volume) ───── */
const POPULAR_CODES = ['212', '213', '312', '347', '404', '415', '617', '713', '818', '917', '929', '202', '310', '646', '718', '678']

/* ───── Timezone display order (west→east) ───── */
const TZ_ORDER = ['HST', 'AKST/AKDT', 'PST/PDT', 'MST/MDT', 'MST', 'CST/CDT', 'CST', 'EST/EDT', 'AST/ADT', 'NST/NDT']
const TZ_LABELS: Record<string, string> = {
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

const faqItems = [
  { q: 'How do I find the time zone for an area code?', a: `Search for any US or Canadian area code on this page to find its time zone, UTC offset, and DST status. We cover ${areaCodeList.length} area codes across North America.` },
  { q: 'Do all area codes in the same state share a time zone?', a: 'Not always. Some states span multiple time zones. For example, Indiana has area codes in both Eastern and Central time. Texas has area codes in both Central and Mountain time (El Paso uses MST). Oregon spans Pacific and Mountain time.' },
  { q: 'What is an area code?', a: 'An area code is a 3-digit prefix assigned by the North American Numbering Plan Administration (NANPA) to geographic regions in the US, Canada, and Caribbean territories. Area codes identify where a phone number was originally assigned.' },
  { q: 'What is an overlay area code?', a: 'An overlay is a second (or third) area code assigned to the same geographic region when the original code runs out of numbers. For example, Manhattan has both 212 and 332. Overlay codes require 10-digit dialing.' },
  { q: 'How many area codes are there in North America?', a: `The North American Numbering Plan (NANP) currently assigns over 400 area codes across the US, Canada, and Caribbean. This page covers ${areaCodeList.length} of the most-searched codes with time zone, city, and DST data.` },
  { q: 'Does an area code tell you what time zone someone is in?', a: 'Usually yes. Each area code is assigned to a specific geographic region with a known time zone. However, with number portability, people can keep their area code after moving — so the caller may not physically be in that time zone.' },
]

export default function AreaCodeHubClient() {
  const { isLight } = useCityContext()
  const [search, setSearch] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'timezone' | 'state'>('timezone')

  const byTimezone = useMemo(() => getAreaCodesByTimezone(), [])
  const byState = useMemo(() => getAreaCodesByState(), [])

  // Filter area codes by search
  const filtered = useMemo(() => {
    if (!search.trim()) return null
    const q = search.toLowerCase().trim()
    return areaCodeList.filter(code => {
      const d = areaCodes[code]
      return code.includes(q) || d.city.toLowerCase().includes(q) || d.state.toLowerCase().includes(q) || d.stateCode.toLowerCase() === q
    })
  }, [search])

  /* ───── styles ───── */
  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white' : 'rounded-2xl border border-slate-700/50 bg-slate-800/60'
  const nestedCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50' : 'rounded-xl border border-slate-700/50 bg-slate-800/50'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-500' : 'text-slate-400'
  const inputClass = isLight
    ? 'bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500'
    : 'bg-slate-700 border border-slate-600 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-sky-400'
  const codeLink = isLight
    ? 'border border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50'
    : 'border border-slate-600 bg-slate-800 hover:border-sky-500 hover:bg-slate-700'
  const codeLinkAccent = isLight ? 'text-sky-600' : 'text-sky-400'
  const btnActive = isLight ? 'bg-sky-600 text-white' : 'bg-sky-500 text-white'
  const btnInactive = isLight ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'

  const renderCodeChip = (d: AreaCodeData, showCity = true) => (
    <Link
      key={d.code}
      href={`/area-code/${d.code}`}
      className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${codeLink}`}
    >
      <span className={`font-bold text-sm w-10 ${codeLinkAccent}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{d.code}</span>
      {showCity && <span className={`text-xs truncate ${mutedText}`}>{d.city}, {d.stateCode}</span>}
    </Link>
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className={`flex items-center gap-1.5 text-sm ${mutedText}`}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className={heading}>Area Codes</span>
      </nav>

      {/* Hero */}
      <header className="text-center space-y-3">
        <h1 className={`text-3xl sm:text-4xl font-bold ${heading}`}>
          Area Code Time Zone Lookup
        </h1>
        <p className={`text-lg ${subText}`}>
          Find the <strong>time zone</strong>, city, state, and DST status for {areaCodeList.length} US &amp; Canadian area codes.
        </p>
      </header>

      {/* ───── Search ───── */}
      <section className={`${card} p-6`}>
        <label className={`block text-sm font-medium mb-2 ${heading}`}>Search by area code, city, or state</label>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="e.g. 212, New York, California"
          className={`w-full px-4 py-3 rounded-xl outline-none text-base ${inputClass}`}
        />
        {filtered && (
          <div className="mt-4">
            {filtered.length === 0 ? (
              <p className={`text-sm ${mutedText}`}>No area codes found for &ldquo;{search}&rdquo;</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
                {filtered.slice(0, 30).map(code => renderCodeChip(areaCodes[code]))}
              </div>
            )}
            {filtered.length > 30 && (
              <p className={`text-xs ${mutedText} mt-2`}>{filtered.length - 30} more results — refine your search</p>
            )}
          </div>
        )}
      </section>

      {/* ───── Most Searched Area Codes ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Most Searched Area Codes</h2>
        <p className={`text-sm ${subText}`}>These area codes have the highest search volume in North America.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {POPULAR_CODES.map(code => {
            const d = areaCodes[code]
            if (!d) return null
            return (
              <Link
                key={code}
                href={`/area-code/${code}`}
                className={`${nestedCard} p-3 text-center hover:scale-[1.02] transition-transform`}
              >
                <div className={`text-xl font-bold ${codeLinkAccent}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{code}</div>
                <div className={`text-xs ${mutedText} mt-1`}>{d.city}, {d.stateCode}</div>
                <div className={`text-[10px] ${mutedText}`}>{d.tzAbbr}</div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ───── Browse Toggle ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className={`text-xl font-bold ${heading}`}>Browse All {areaCodeList.length} Area Codes</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('timezone')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${viewMode === 'timezone' ? btnActive : btnInactive}`}
            >
              By Time Zone
            </button>
            <button
              onClick={() => setViewMode('state')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${viewMode === 'state' ? btnActive : btnInactive}`}
            >
              By State
            </button>
          </div>
        </div>

        {viewMode === 'timezone' ? (
          <div className="space-y-4">
            {TZ_ORDER.filter(tz => byTimezone[tz]).map(tz => (
              <div key={tz}>
                <h3 className={`text-sm font-semibold mb-2 ${heading}`}>{TZ_LABELS[tz] || tz}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
                  {byTimezone[tz].sort((a, b) => a.code.localeCompare(b.code)).map(d => renderCodeChip(d))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {Object.entries(byState)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([state, codes]) => (
                <div key={state}>
                  <h3 className={`text-sm font-semibold mb-2 ${heading}`}>{state} ({codes.length})</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
                    {codes.sort((a, b) => a.code.localeCompare(b.code)).map(d => renderCodeChip(d))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </section>

      {/* ───── About Area Codes ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Understanding North American Area Codes</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className={`${nestedCard} p-4`}>
            <h3 className={`font-semibold ${heading} mb-1`}>What is NANPA?</h3>
            <p className={`text-sm ${subText}`}>
              The North American Numbering Plan Administration (NANPA) assigns area codes to geographic regions across the US, Canada, and Caribbean territories. The system started in 1947 with 86 original area codes.
            </p>
          </div>
          <div className={`${nestedCard} p-4`}>
            <h3 className={`font-semibold ${heading} mb-1`}>Area Codes &amp; Time Zones</h3>
            <p className={`text-sm ${subText}`}>
              Each area code maps to a specific geographic region with a known time zone. North America spans 8 time zones from Newfoundland (UTC-3:30) to Hawaii (UTC-10), plus areas that don&apos;t observe DST.
            </p>
          </div>
          <div className={`${nestedCard} p-4`}>
            <h3 className={`font-semibold ${heading} mb-1`}>Overlay vs. Split</h3>
            <p className={`text-sm ${subText}`}>
              When a region runs out of phone numbers, NANPA either <strong>overlays</strong> a new code on the same area (e.g., 332 over 212 in Manhattan) or <strong>splits</strong> the region into two codes. Overlays require 10-digit dialing.
            </p>
          </div>
          <div className={`${nestedCard} p-4`}>
            <h3 className={`font-semibold ${heading} mb-1`}>Number Portability</h3>
            <p className={`text-sm ${subText}`}>
              Since 2003, you can keep your phone number when moving. This means a 212 (Manhattan) number might belong to someone in California. Area codes indicate where a number was <em>issued</em>, not necessarily where the owner lives.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Time Zone Quick Reference ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>US &amp; Canada Time Zones</h2>
        <p className={`text-sm ${subText}`}>Quick reference for all North American time zones and their area codes.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                <th className={`text-left py-2 pr-4 font-semibold ${heading}`}>Time Zone</th>
                <th className={`text-left py-2 pr-4 font-semibold ${heading}`}>UTC Offset</th>
                <th className={`text-left py-2 pr-4 font-semibold ${heading}`}>DST</th>
                <th className={`text-left py-2 font-semibold ${heading}`}>Area Codes</th>
              </tr>
            </thead>
            <tbody>
              {TZ_ORDER.filter(tz => byTimezone[tz]).map(tz => {
                const codes = byTimezone[tz]
                return (
                  <tr key={tz} className={`border-b ${isLight ? 'border-slate-100' : 'border-slate-700/50'}`}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{tz}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {codes[0]?.utcOffset}
                    </td>
                    <td className={`py-2 pr-4 ${subText}`}>
                      {codes[0]?.observesDST ? `Yes (${codes[0]?.utcOffsetDST})` : 'No'}
                    </td>
                    <td className={`py-2 ${mutedText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {codes.length} codes
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
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
                <span>{item.q}</span>
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

      {/* ───── Related Tools ───── */}
      <section className="space-y-3">
        <h2 className={`text-lg font-bold ${heading}`}>Related Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/us-time-zones', label: 'US Time Zones' },
            { href: '/time-converter/', label: 'Time Converter' },
            { href: '/eastern-time-zone/', label: 'Eastern Time' },
            { href: '/pacific-time-zone/', label: 'Pacific Time' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${nestedCard} p-3 text-center text-sm font-medium ${heading} hover:scale-[1.02] transition-transform`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

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
