'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { countries } from '@/data'
import { COUNTRY_HUB_SLUGS } from '@/data'
import { getCitiesByCountryCode } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import { getFlagUrl } from '@/shared/utils'

const HUB_TO_COUNTRY: Record<string, string> = Object.fromEntries(
  Object.entries(COUNTRY_HUB_SLUGS).map(([countrySlug, hubSlug]) => [hubSlug, countrySlug])
)

// ── SEO content generators ─────────────────────────────────────────────────

function genBestTimeToCall(country: { name: string; continent: string }): string {
  if (country.continent === 'europe')
    return `To call ${country.name} from the US East Coast, the best window is 8–10 AM EST (2–4 PM local). UK callers share similar hours. European business culture values punctuality — avoid calling outside 9 AM–6 PM local time.`
  if (country.continent === 'asia')
    return `Calling ${country.name} from the US requires planning. East Coast (EST): try 7–10 PM for a morning call. West Coast (PST): 4–7 PM. From the UK, early morning calls (7–9 AM GMT) reach ${country.name} during business hours.`
  if (country.continent === 'americas')
    return `${country.name} shares time zones with much of the Americas, making scheduling straightforward. European callers should target their early afternoon (1–4 PM local) to reach ${country.name} during morning business hours.`
  if (country.continent === 'africa')
    return `From the US East Coast, 3–8 AM EST reaches ${country.name} during business hours (8 AM–1 PM local). UK callers are well-placed — morning calls from 8 AM GMT align with ${country.name}'s working day.`
  if (country.continent === 'oceania')
    return `US East Coast callers should try 5–8 PM EST to reach ${country.name} the next morning. European callers can try 8–11 PM local to catch ${country.name} at the start of their business day.`
  return `Check current ${country.name} time above and target the 9 AM–5 PM window in ${country.name} for business calls.`
}

function genBusinessHours(country: { name: string; continent: string }): string {
  if (country.continent === 'europe')
    return `Standard business hours in ${country.name} are Monday–Friday, 9 AM–6 PM local time. Banks typically close earlier (4–5 PM). Southern European countries may observe a midday break (1–3 PM).`
  if (country.continent === 'asia')
    return `Business hours in ${country.name} are typically Monday–Friday (some countries include Saturday), 9 AM–6 PM local time. Government offices may close earlier. Lunch breaks (12–2 PM) are common.`
  if (country.continent === 'africa')
    return `${country.name} business hours are generally Monday–Friday, 8 AM–5 PM. Government offices often open at 8 AM. Some businesses observe a Friday afternoon closure for prayers in predominantly Muslim regions.`
  if (country.continent === 'americas')
    return `Business hours in ${country.name} are typically Monday–Friday, 9 AM–6 PM. Latin American countries often have a longer lunch break (1–3 PM). Banking hours are usually 9 AM–4 PM.`
  if (country.continent === 'oceania')
    return `Business hours in ${country.name} follow Monday–Friday, 9 AM–5 PM. Most businesses and government offices are closed on weekends. Public holidays vary by state or territory.`
  return `Standard office hours in ${country.name} are Monday–Friday, 9 AM–5 PM local time.`
}

function genDstInfo(country: { name: string; continent: string; timezones: string[] }, slug: string): string {
  const noDst = ['japan', 'china', 'india', 'singapore', 'thailand', 'vietnam',
    'indonesia', 'malaysia', 'philippines', 'south-korea', 'qatar', 'saudi-arabia',
    'united-arab-emirates', 'russia', 'turkey', 'uzbekistan', 'bangladesh', 'myanmar',
    'nepal', 'pakistan', 'iran', 'senegal', 'ghana', 'nigeria', 'kenya', 'ethiopia',
    'tanzania', 'cameroon', 'angola', 'ivory-coast', 'venezuela', 'colombia', 'peru',
    'argentina', 'brazil', 'egypt']
  if (noDst.includes(slug))
    return `${country.name} does not observe Daylight Saving Time. The UTC offset stays fixed year-round — only countries that do observe DST (US, EU, UK) will shift relative to ${country.name} twice a year.`
  if (country.continent === 'europe')
    return `${country.name} observes Daylight Saving Time (Summer Time). Clocks spring forward on the last Sunday in March (to ${country.timezones[1] ?? 'summer time'}) and fall back on the last Sunday in October.`
  if (country.continent === 'oceania')
    return `${country.name} observes DST during the Southern Hemisphere summer (October–April) — opposite to the Northern Hemisphere schedule. Clocks move forward one hour during this period.`
  return `${country.name} observes Daylight Saving Time in most regions. Clocks spring forward in spring and fall back in autumn — verify the exact dates for the current year.`
}

function genTravelTips(country: { name: string; continent: string; languages: string[] }): string {
  if (country.continent === 'asia')
    return `When traveling to ${country.name}, expect significant jet lag if coming from Europe or the Americas. Allow 1–2 days to adjust. Set your phone to local time immediately upon arrival. ${country.languages.length > 1 ? `Multiple languages are spoken including ${country.languages.slice(0, 2).join(' and ')}.` : `The primary language is ${country.languages[0]}.`} Business meetings often start punctually.`
  if (country.continent === 'europe')
    return `Traveling to ${country.name} from North America typically involves a 5–9 hour time difference. Jet lag is usually manageable within 1–2 days. European business culture values punctuality, so arrive on time for meetings. ${country.name} uses 24-hour format in official contexts.`
  if (country.continent === 'americas')
    return `${country.name} is well-connected with flights from major global hubs. Time zone differences within the Americas are generally manageable. Remember that ${country.languages.join(' and ')} ${country.languages.length > 1 ? 'are' : 'is'} the primary language${country.languages.length > 1 ? 's' : ''}. Business culture may include longer lunch breaks.`
  return `When planning your trip to ${country.name}, factor in the time zone change and allow time to adjust. Download offline maps and translation apps before traveling. Local business hours and cultural customs around punctuality may differ from your home country.`
}

function genFunFacts(country: { name: string; timezones: string[]; capital: string; population: string; continent: string }): string[] {
  const facts: string[] = []
  if (country.timezones.length > 3)
    facts.push(`${country.name} spans ${country.timezones.length} time zones, making it one of the widest countries in terms of time coverage.`)
  else if (country.timezones.length === 1)
    facts.push(`The capital ${country.capital} is the political center of ${country.name} with a total national population of ${country.population}.`)
  facts.push(`Time zone boundaries don't always follow geographical lines — they're often adjusted for political, economic, or practical reasons.`)
  facts.push(`The concept of standardized time zones was developed in the 19th century with the expansion of railways, replacing local solar time.`)
  return facts
}

// ── Component ──────────────────────────────────────────────────────────────

interface Props {
  hubSlug: string
}

export default function CountryFactsSection({ hubSlug }: Props) {
  const { isLight } = useCityContext()
  const [now, setNow] = useState<Date | null>(null)
  const [citiesOpen, setCitiesOpen] = useState(false)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const countrySlug = HUB_TO_COUNTRY[hubSlug]
  const country = countries.find(c => c.slug === countrySlug)
  if (!country) return null

  const cities = getCitiesByCountryCode(country.code)
  const relatedCountries = countries
    .filter(c => c.continent === country.continent && c.slug !== countrySlug)
    .sort((a, b) => a.name.localeCompare(b.name))

  const bestTimeToCall = genBestTimeToCall(country)
  const businessHours = genBusinessHours(country)
  const dstInfo = genDstInfo(country, countrySlug)
  const travelTips = genTravelTips(country)
  const funFacts = genFunFacts(country)

  // UTC offset extracted from timezones string e.g. "CST (UTC−5)" → "UTC−5"
  const utcOffset = country.timezones[0]?.match(/UTC[−-]?\+?\d+(?::\d+)?/)?.[0] ?? country.timezones[0]

  // DST: yes if NOT in no-dst list
  const noDstSlugs = ['japan','china','india','singapore','thailand','vietnam','indonesia','malaysia',
    'philippines','south-korea','qatar','saudi-arabia','united-arab-emirates','russia','turkey',
    'uzbekistan','bangladesh','myanmar','nepal','pakistan','iran','senegal','ghana','nigeria','kenya',
    'ethiopia','tanzania','cameroon','angola','ivory-coast','venezuela','colombia','peru','argentina',
    'brazil','egypt']
  const hasDst = !noDstSlugs.includes(countrySlug)

  // Primary IANA timezone (from first city, or fallback)
  const primaryTz = cities[0]?.timezone ?? 'UTC'

  // Specific call windows: compute windows for the table
  const REF_ZONES = [
    { tz: 'America/New_York',    from: 'EST / EDT (New York)',    abbr: 'EST' },
    { tz: 'America/Los_Angeles', from: 'PST / PDT (Los Angeles)', abbr: 'PST' },
    { tz: 'Europe/London',       from: 'GMT / BST (London)',      abbr: 'GMT' },
    { tz: 'Europe/Paris',        from: 'CET / CEST (Paris)',      abbr: 'CET' },
    { tz: 'Asia/Dubai',          from: 'GST (Dubai)',             abbr: 'GST' },
  ]
  const getCallRow = (refTz: string) => {
    if (!now) return null
    const hubLocal = new Date(now.toLocaleString('en-US', { timeZone: primaryTz }))
    const refLocal  = new Date(now.toLocaleString('en-US', { timeZone: refTz }))
    const diffH = Math.round((refLocal.getTime() - hubLocal.getTime()) / 3600000)
    const fmt = (h: number, suffix: string) => {
      const hr = ((h % 24) + 24) % 24
      return `${hr % 12 === 0 ? 12 : hr % 12}:00 ${hr >= 12 ? 'PM' : 'AM'} ${suffix}`
    }
    // ref city window that corresponds to hub 9 AM – 5 PM
    const refStart = Math.max(9 + diffH, 7)
    const refEnd   = Math.min(17 + diffH, 21)
    if (refStart >= refEnd) return null
    const refAbbr = now.toLocaleTimeString('en-US', { timeZone: refTz, timeZoneName: 'short' }).split(' ').pop() ?? ''
    const hubAbbr = now.toLocaleTimeString('en-US', { timeZone: primaryTz, timeZoneName: 'short' }).split(' ').pop() ?? ''
    const hubStart = Math.max(9, 9 - diffH + refStart - (9 + diffH - refStart))
    // Simpler: hub window = [9, 17]; ref window = hub ± diff
    const h9ref  = 9 + diffH
    const h17ref = 17 + diffH
    const winRefStart = Math.max(h9ref, 7)
    const winRefEnd   = Math.min(h17ref, 21)
    const winHubStart = winRefStart - diffH
    const winHubEnd   = winRefEnd   - diffH
    return {
      refTime: `${fmt(winRefStart, refAbbr)} – ${fmt(winRefEnd, refAbbr)}`,
      hubTime: `${fmt(winHubStart, hubAbbr)} – ${fmt(winHubEnd, hubAbbr)}`,
    }
  }

  // ── Theme classes ──────────────────────────────────────────────────────
  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-5 mt-4 mb-4'
    : 'rounded-2xl border border-slate-700 bg-slate-800 p-5 mt-4 mb-4'
  const innerCard = isLight
    ? 'rounded-xl bg-slate-100 p-4'
    : 'bg-slate-900/60 p-4 rounded-xl'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const muted = isLight ? 'text-slate-500' : 'text-slate-400'
  const chipLang = isLight ? 'bg-slate-200 text-slate-700' : 'bg-slate-700 text-slate-200'
  const chipTz = isLight ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/50 text-blue-300'
  const cityLink = isLight
    ? 'flex items-center justify-between p-4 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all'
    : 'flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all'
  const tagLink = isLight
    ? 'px-4 py-2 rounded-xl text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all'
    : 'px-4 py-2 rounded-xl text-sm bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 transition-all'
  const countryPill = isLight
    ? 'px-3 py-2 rounded-full text-sm flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all'
    : 'px-3 py-2 rounded-full text-sm flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 transition-all'

  const flagImg = (code: string, cls = 'w-5 h-3.5 object-cover rounded-sm') => (
    <img src={getFlagUrl(code, 'sm')} alt="" className={cls} />
  )

  const getTime = (tz: string) =>
    now
      ? now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
      : '--:--'

  const continentLabel = country.continent.charAt(0).toUpperCase() + country.continent.slice(1)

  return (
    <>
      {/* ── Quick Facts ─────────────────────────────────────────────── */}
      <section className={card}>
        <h2 className={`text-lg font-semibold mb-4 ${heading}`}>{country.name} Quick Facts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: '🏛️', label: 'Capital City',  value: country.capital },
            { icon: '👥', label: 'Population',    value: country.population },
            { icon: '💰', label: 'Currency',      value: `${country.currencySymbol} ${country.currency}` },
            { icon: '📞', label: 'Phone Code',    value: country.phoneCode },
          ].map(f => (
            <div key={f.label} className={innerCard}>
              <div className={`text-xs mb-1 ${muted}`}>{f.icon} {f.label}</div>
              <div className={`text-base font-semibold ${heading}`}>{f.value}</div>
            </div>
          ))}
        </div>
        {/* UTC offset + DST row */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className={innerCard}>
            <div className={`text-xs mb-1 ${muted}`}>🕐 UTC Offset</div>
            <div className={`text-base font-semibold ${heading}`}>{utcOffset}</div>
          </div>
          <div className={innerCard}>
            <div className={`text-xs mb-1 ${muted}`}>🔄 Daylight Saving Time</div>
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-sm font-semibold ${
              hasDst
                ? (isLight ? 'bg-green-100 text-green-700' : 'bg-green-900/50 text-green-300')
                : (isLight ? 'bg-slate-200 text-slate-600' : 'bg-slate-700 text-slate-400')
            }`}>{hasDst ? 'Yes — observed' : 'No — fixed offset'}</span>
          </div>
        </div>
        <div className={`mt-3 ${innerCard}`}>
          <div className={`text-xs mb-2 ${muted}`}>🗣️ Official Languages</div>
          <div className="flex flex-wrap gap-2">
            {country.languages.map((lang, i) => (
              <span key={i} className={`px-3 py-1 rounded-full text-sm ${chipLang}`}>{lang}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Time Zones ──────────────────────────────────────────────── */}
      <section className={card}>
        <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${heading}`}>
          <span>🕐</span> Time Zones in {country.name}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {country.timezones.map((tz, i) => (
            <span key={i} className={`px-4 py-2 rounded-xl text-sm font-medium ${chipTz}`}>{tz}</span>
          ))}
        </div>
        <div className={`space-y-2 text-sm ${muted}`}>
          <p>{country.name} uses {country.timezones[0]} year-round. {country.capital} is the capital and largest city.</p>
          <p>{dstInfo}</p>
        </div>
      </section>

      {/* ── All Cities Accordion ────────────────────────────────────── */}
      {cities.length > 0 && (
        <section className={card}>
          <button
            onClick={() => setCitiesOpen(o => !o)}
            className={`w-full flex items-center justify-between gap-3 ${heading}`}
            aria-expanded={citiesOpen}
          >
            <h2 className={`text-lg font-semibold flex items-center gap-2 ${heading}`}>
              {flagImg(country.code)}
              Cities in {country.name} ({cities.length} {cities.length === 1 ? 'city' : 'cities'})
            </h2>
            <svg className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${citiesOpen ? 'rotate-180' : ''} ${muted}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {!citiesOpen && (
            <p className={`text-sm mt-2 ${muted}`}>View all {cities.length} cities with live local times →</p>
          )}
          {citiesOpen && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {cities.map(city => (
                <Link key={city.slug} href={`/${city.slug}`} className={cityLink}>
                  <div>
                    <div className={`font-medium ${heading}`}>{city.city}</div>
                    <div className={`text-xs ${muted}`}>{city.timezone.split('/').pop()?.replace('_', ' ')}</div>
                  </div>
                  <div className={`text-lg font-bold tabular-nums ${heading}`}>{getTime(city.timezone)}</div>
                </Link>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ── Best Time to Call ────────────────────────────────────────── */}
      <section className={card}>
        <h2 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${heading}`}>
          <span>📞</span> Best Time to Call {country.name}
        </h2>
          <p className={`text-sm mb-4 ${muted}`}>
          Target 9 AM – 5 PM {country.name} local time for business calls. {bestTimeToCall}
        </p>
        {now && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${isLight ? 'border-slate-100' : 'border-slate-700'} ${muted}`}>
                  <th className="text-left py-2 pr-4 font-medium">Calling From</th>
                  <th className="text-left py-2 pr-4 font-medium">Your Time</th>
                  <th className="text-left py-2 font-medium">{country.name} Time</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-50' : 'divide-slate-700/50'}`}>
                {REF_ZONES.map(ref => {
                  const row = getCallRow(ref.tz)
                  if (!row) return null
                  return (
                    <tr key={ref.tz}>
                      <td className={`py-2 pr-4 font-medium ${heading}`}>{ref.from}</td>
                      <td className={`py-2 pr-4 ${muted}`}>{row.refTime}</td>
                      <td className={`py-2 ${muted}`}>{row.hubTime}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ── Travel Tips ─────────────────────────────────────────────── */}
      <section className={card}>
        <h2 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${heading}`}>
          <span>✈️</span> Time-Related Travel Tips for {country.name}
        </h2>
        <p className={`text-sm ${muted}`}>{travelTips}</p>
      </section>

      {/* ── Fun Facts ───────────────────────────────────────────────── */}
      <section className={card}>
        <h2 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${heading}`}>
          <span>💡</span> Interesting Facts About Time in {country.name}
        </h2>
        <ul className={`space-y-2 text-sm ${muted}`}>
          {funFacts.map((fact, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isLight ? 'bg-slate-400' : 'bg-slate-500'}`} />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── About Time ──────────────────────────────────────────────── */}
      <section className={card}>
        <h2 className={`text-lg font-semibold mb-3 ${heading}`}>About Time in {country.name}</h2>
        <div className={`space-y-3 text-sm ${muted}`}>
          <p>{country.name} uses {country.timezones.length === 1 ? `a single time zone (${country.timezones[0]})` : `${country.timezones.length} time zones`}. This makes it {country.timezones.length === 1 ? 'relatively straightforward' : 'important to confirm the specific zone'} to coordinate times across the country.</p>
          <p>The capital city {country.capital} serves as the political and often economic center of {country.name}. Major business activities are spread across cities including {cities.slice(0, 3).map(c => c.city).join(', ') || country.capital}.</p>
          <p>When planning international calls, video conferences, or business meetings with contacts in {country.name}, it's important to consider the time difference. {country.timezones[0]} is the most commonly referenced time zone for {country.name}.</p>
          <p>{country.name} uses the {country.currency} ({country.currencySymbol}) as its official currency. The international dialing code is {country.phoneCode}. Official languages include {country.languages.join(', ')}.</p>
        </div>
      </section>


      {/* ── Other Countries ─────────────────────────────────────────── */}
      {relatedCountries.length > 0 && (
        <section className={card}>
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>🌍 Other Countries in {continentLabel}</h2>
          <div className="flex flex-wrap gap-2">
            {relatedCountries.map(c => {
              const relatedHub = COUNTRY_HUB_SLUGS[c.slug]
              const href = relatedHub ? `/${relatedHub}/` : `/country/${c.slug}`
              return (
                <Link key={c.slug} href={href} className={countryPill}>
                  {flagImg(c.code)}
                  <span>{c.name}</span>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}
