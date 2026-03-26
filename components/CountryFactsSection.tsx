'use client'

import { countries } from '@/data'
import { COUNTRY_HUB_SLUGS } from '@/data'
import { useCityContext } from '@/lib/CityContext'

const HUB_TO_COUNTRY: Record<string, string> = Object.fromEntries(
  Object.entries(COUNTRY_HUB_SLUGS).map(([countrySlug, hubSlug]) => [hubSlug, countrySlug])
)

function bestTimeToCall(continent: string, name: string): string {
  if (continent === 'europe')
    return `To call ${name} from the US East Coast, the best window is 8–11 AM EST (2–5 PM local). UK callers share similar hours. European business culture values punctuality — avoid calling outside 9 AM–6 PM local time.`
  if (continent === 'asia')
    return `Calling ${name} from the US requires planning. East Coast (EST): try 7–10 PM for a morning call. West Coast (PST): 4–7 PM. From the UK, early morning calls (7–9 AM GMT) reach ${name} during business hours.`
  if (continent === 'americas')
    return `${name} shares time zones with much of the Americas, making scheduling straightforward. European callers should target their early afternoon (1–4 PM local) to reach ${name} during morning business hours.`
  if (continent === 'africa')
    return `From the US East Coast, 3–8 AM EST reaches ${name} during business hours (8 AM–1 PM local). UK callers are well-placed — morning calls from 8 AM GMT align with ${name}'s working day.`
  if (continent === 'oceania')
    return `US East Coast callers should try 5–8 PM EST to reach ${name} the next morning. European callers can try 8–11 PM local to catch ${name} at the start of their business day.`
  return `Check current ${name} time above and target the 9 AM–5 PM window in ${name} for business calls.`
}

function dstInfo(continent: string, name: string, timezones: string[]): string {
  const noDst = ['japan', 'china', 'india', 'singapore', 'thailand', 'vietnam',
    'indonesia', 'malaysia', 'philippines', 'south-korea', 'qatar', 'saudi-arabia',
    'united-arab-emirates', 'russia', 'turkey', 'uzbekistan', 'bangladesh', 'myanmar',
    'nepal', 'pakistan', 'iran', 'senegal', 'ghana', 'nigeria', 'kenya', 'ethiopia',
    'tanzania', 'cameroon', 'angola', 'ivory-coast', 'venezuela', 'colombia', 'peru',
    'argentina', 'brazil', 'egypt']
  const slug = name.toLowerCase().replace(/\s+/g, '-')
  if (noDst.includes(slug))
    return `${name} does not observe Daylight Saving Time. The UTC offset stays fixed year-round — only countries that do observe DST (US, EU, UK) will shift relative to ${name} twice a year.`
  if (continent === 'europe')
    return `${name} observes Daylight Saving Time (Summer Time). Clocks spring forward on the last Sunday in March (to ${timezones[1] ?? 'summer time'}) and fall back on the last Sunday in October.`
  if (continent === 'oceania')
    return `${name} observes DST during the Southern Hemisphere summer (October–April) — opposite to the Northern Hemisphere schedule. Clocks move forward one hour during this period.`
  return `${name} observes Daylight Saving Time in most regions. Clocks spring forward in spring and fall back in autumn — verify the exact dates for the current year.`
}

function businessHours(continent: string, name: string): string {
  if (continent === 'europe')
    return `Standard business hours in ${name} are Monday–Friday, 9 AM–6 PM local time. Banks typically close earlier (4–5 PM). Southern European countries may observe a midday break (1–3 PM).`
  if (continent === 'asia')
    return `Business hours in ${name} are typically Monday–Friday (some countries include Saturday), 9 AM–6 PM local time. Government offices may close earlier. Lunch breaks (12–2 PM) are common.`
  if (continent === 'africa')
    return `${name} business hours are generally Monday–Friday, 8 AM–5 PM. Government offices often open at 8 AM. Some businesses observe a Friday afternoon closure for prayers in predominantly Muslim regions.`
  if (continent === 'americas')
    return `Business hours in ${name} are typically Monday–Friday, 9 AM–6 PM. Latin American countries often have a longer lunch break (1–3 PM). Banking hours are usually 9 AM–4 PM.`
  if (continent === 'oceania')
    return `Business hours in ${name} follow Monday–Friday, 9 AM–5 PM. Most businesses and government offices are closed on weekends. Public holidays vary by state or territory.`
  return `Standard office hours in ${name} are Monday–Friday, 9 AM–5 PM local time. Verify specific hours for banking, government, and retail sectors.`
}

interface Props {
  hubSlug: string
}

export default function CountryFactsSection({ hubSlug }: Props) {
  const { isLight } = useCityContext()
  const countrySlug = HUB_TO_COUNTRY[hubSlug]
  const country = countries.find(c => c.slug === countrySlug)
  if (!country) return null

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6 mb-4'
    : 'rounded-2xl border border-slate-700 bg-slate-800 p-6 mb-4'
  const innerCard = isLight
    ? 'rounded-xl bg-slate-50 border border-slate-100 px-4 py-3'
    : 'rounded-xl bg-slate-700 border border-slate-600 px-4 py-3'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const body = isLight ? 'text-slate-600' : 'text-slate-300'
  const label = isLight ? 'text-slate-400' : 'text-slate-400'
  const value = isLight ? 'text-slate-800' : 'text-white'

  const facts = [
    { label: 'Capital',    value: country.capital },
    { label: 'Population', value: country.population },
    { label: 'Currency',   value: `${country.currency} (${country.currencySymbol})` },
    { label: 'Phone code', value: country.phoneCode },
    { label: 'Languages',  value: country.languages.join(', ') },
    { label: 'Time zones', value: country.timezones.join(' · ') },
  ]

  return (
    <>
      {/* Key Facts */}
      <section className={card}>
        <h2 className={`text-xl font-semibold mb-4 ${heading}`}>{country.name} — Key Facts</h2>
        <p className={`text-sm leading-relaxed mb-4 ${body}`}>{country.description}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {facts.map(f => (
            <div key={f.label} className={innerCard}>
              <div className={`text-xs font-medium uppercase tracking-wide mb-0.5 ${label}`}>{f.label}</div>
              <div className={`text-sm font-semibold ${value}`}>{f.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Hours + Best Time to Call */}
      <section className={card}>
        <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Business Hours &amp; Best Time to Call</h2>
        <div className="space-y-3">
          <div className={innerCard + ' p-4'}>
            <div className={`text-xs font-medium uppercase tracking-wide mb-1 ${label}`}>Business Hours</div>
            <p className={`text-sm leading-relaxed ${body}`}>{businessHours(country.continent, country.name)}</p>
          </div>
          <div className={innerCard + ' p-4'}>
            <div className={`text-xs font-medium uppercase tracking-wide mb-1 ${label}`}>Best Time to Call</div>
            <p className={`text-sm leading-relaxed ${body}`}>{bestTimeToCall(country.continent, country.name)}</p>
          </div>
          <div className={innerCard + ' p-4'}>
            <div className={`text-xs font-medium uppercase tracking-wide mb-1 ${label}`}>Daylight Saving Time</div>
            <p className={`text-sm leading-relaxed ${body}`}>{dstInfo(country.continent, country.name, country.timezones)}</p>
          </div>
        </div>
      </section>
    </>
  )
}
