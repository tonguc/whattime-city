/**
 * Generate hub pages for all countries not yet in COUNTRY_HUB_SLUGS
 * Run: node scripts/generate-all-hub-pages.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

// ── Parse countries.ts ────────────────────────────────────────────────────────
const countriesRaw = fs.readFileSync(path.join(ROOT, 'data/countries.ts'), 'utf8')
const citiesRaw    = fs.readFileSync(path.join(ROOT, 'data/cities.ts'), 'utf8')
const hubPagesRaw  = fs.readFileSync(path.join(ROOT, 'data/hubPages.ts'), 'utf8')

// Extract existing hub slugs from hubPages.ts
const existingMatch = hubPagesRaw.match(/COUNTRY_HUB_SLUGS[^=]+=\s*\{([^}]+)\}/s)
const existingHubs = new Set()
if (existingMatch) {
  for (const m of existingMatch[1].matchAll(/'([^']+)'\s*:\s*'[^']+'/g)) {
    existingHubs.add(m[1])
  }
}

// Parse countries from TypeScript source
function parseCountries(src) {
  const countries = []
  // Match each country object block
  const blocks = src.matchAll(/\{\s*code:\s*'([^']+)',\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*capital:\s*'([^']+)'[^}]+timezones:\s*\[([^\]]+)\][^}]*\}/gs)
  for (const m of blocks) {
    const [, code, name, slug, capital, tzsRaw] = m
    const block = m[0]

    const tzs = [...tzsRaw.matchAll(/'([^']+)'/g)].map(t => t[1])

    const popM = block.match(/population:\s*'([^']+)'/)
    const curM = block.match(/currency:\s*'([^']+)'/)
    const symM = block.match(/currencySymbol:\s*'([^']+)'/)
    const phM  = block.match(/phoneCode:\s*'\+([^']+)'/)
    const conM = block.match(/continent:\s*'([^']+)'/)
    const langM = block.match(/languages:\s*\[([^\]]+)\]/)
    const langs = langM ? [...langM[1].matchAll(/'([^']+)'/g)].map(l => l[1]) : ['English']

    countries.push({
      code,
      name,
      slug,
      capital,
      population: popM?.[1] ?? 'N/A',
      currency: curM?.[1] ?? '',
      currencySymbol: symM?.[1] ?? '',
      phoneCode: phM ? `+${phM[1]}` : '',
      continent: conM?.[1] ?? 'other',
      timezones: tzs,
      languages: langs,
    })
  }
  return countries
}

// Build countryCode → first IANA timezone from cities data
function buildTzMap(src) {
  const map = {}
  for (const m of src.matchAll(/countryCode:\s*'([A-Z]+)'[^}]*timezone:\s*'([^']+)'/g)) {
    if (!map[m[1]]) map[m[1]] = m[2]
  }
  // Also try the other order
  for (const m of src.matchAll(/timezone:\s*'([^']+)'[^}]*countryCode:\s*'([A-Z]+)'/g)) {
    if (!map[m[2]]) map[m[2]] = m[1]
  }
  return map
}

const countries = parseCountries(countriesRaw)
const tzMap = buildTzMap(citiesRaw)

// Fallback IANA timezone map for countries without cities data
const FALLBACK_TZ = {
  'AF': 'Asia/Kabul',
  'AL': 'Europe/Tirane',
  'DZ': 'Africa/Algiers',
  'AD': 'Europe/Andorra',
  'AM': 'Asia/Yerevan',
  'AZ': 'Asia/Baku',
  'BS': 'America/Nassau',
  'BH': 'Asia/Bahrain',
  'BB': 'America/Barbados',
  'BY': 'Europe/Minsk',
  'BZ': 'America/Belize',
  'BJ': 'Africa/Porto-Novo',
  'BT': 'Asia/Thimphu',
  'BO': 'America/La_Paz',
  'BA': 'Europe/Sarajevo',
  'BW': 'Africa/Gaborone',
  'BN': 'Asia/Brunei',
  'BG': 'Europe/Sofia',
  'BF': 'Africa/Ouagadougou',
  'BI': 'Africa/Bujumbura',
  'KH': 'Asia/Phnom_Penh',
  'CV': 'Atlantic/Cape_Verde',
  'CF': 'Africa/Bangui',
  'TD': 'Africa/Ndjamena',
  'KM': 'Indian/Comoro',
  'CG': 'Africa/Brazzaville',
  'CR': 'America/Costa_Rica',
  'HR': 'Europe/Zagreb',
  'CY': 'Asia/Nicosia',
  'CZ': 'Europe/Prague',
  'DK': 'Europe/Copenhagen',
  'DJ': 'Africa/Djibouti',
  'DO': 'America/Santo_Domingo',
  'CD': 'Africa/Kinshasa',
  'EC': 'America/Guayaquil',
  'SV': 'America/El_Salvador',
  'GQ': 'Africa/Malabo',
  'ER': 'Africa/Asmara',
  'EE': 'Europe/Tallinn',
  'SZ': 'Africa/Mbabane',
  'FJ': 'Pacific/Fiji',
  'FI': 'Europe/Helsinki',
  'GA': 'Africa/Libreville',
  'GM': 'Africa/Banjul',
  'GE': 'Asia/Tbilisi',
  'GT': 'America/Guatemala',
  'GN': 'Africa/Conakry',
  'GW': 'Africa/Bissau',
  'GY': 'America/Guyana',
  'HT': 'America/Port-au-Prince',
  'HN': 'America/Tegucigalpa',
  'HU': 'Europe/Budapest',
  'IS': 'Atlantic/Reykjavik',
  'IQ': 'Asia/Baghdad',
  'IE': 'Europe/Dublin',
  'JM': 'America/Jamaica',
  'JO': 'Asia/Amman',
  'KZ': 'Asia/Almaty',
  'KI': 'Pacific/Tarawa',
  'XK': 'Europe/Belgrade',
  'KW': 'Asia/Kuwait',
  'KG': 'Asia/Bishkek',
  'LA': 'Asia/Vientiane',
  'LV': 'Europe/Riga',
  'LB': 'Asia/Beirut',
  'LS': 'Africa/Maseru',
  'LR': 'Africa/Monrovia',
  'LY': 'Africa/Tripoli',
  'LI': 'Europe/Vaduz',
  'LT': 'Europe/Vilnius',
  'LU': 'Europe/Luxembourg',
  'MG': 'Indian/Antananarivo',
  'MW': 'Africa/Blantyre',
  'MV': 'Indian/Maldives',
  'ML': 'Africa/Bamako',
  'MT': 'Europe/Malta',
  'MH': 'Pacific/Majuro',
  'MR': 'Africa/Nouakchott',
  'MU': 'Indian/Mauritius',
  'FM': 'Pacific/Pohnpei',
  'MD': 'Europe/Chisinau',
  'MC': 'Europe/Monaco',
  'MN': 'Asia/Ulaanbaatar',
  'ME': 'Europe/Podgorica',
  'MZ': 'Africa/Maputo',
  'NA': 'Africa/Windhoek',
  'NR': 'Pacific/Nauru',
  'NI': 'America/Managua',
  'NE': 'Africa/Niamey',
  'MK': 'Europe/Skopje',
  'NO': 'Europe/Oslo',
  'OM': 'Asia/Muscat',
  'PW': 'Pacific/Palau',
  'PS': 'Asia/Gaza',
  'PA': 'America/Panama',
  'PG': 'Pacific/Port_Moresby',
  'PY': 'America/Asuncion',
  'PR': 'America/Puerto_Rico',
  'RO': 'Europe/Bucharest',
  'RW': 'Africa/Kigali',
  'WS': 'Pacific/Apia',
  'SM': 'Europe/San_Marino',
  'ST': 'Africa/Sao_Tome',
  'RS': 'Europe/Belgrade',
  'SC': 'Indian/Mahe',
  'SL': 'Africa/Freetown',
  'SK': 'Europe/Bratislava',
  'SI': 'Europe/Ljubljana',
  'SB': 'Pacific/Guadalcanal',
  'SO': 'Africa/Mogadishu',
  'SS': 'Africa/Juba',
  'LK': 'Asia/Colombo',
  'SD': 'Africa/Khartoum',
  'SR': 'America/Paramaribo',
  'SY': 'Asia/Damascus',
  'TW': 'Asia/Taipei',
  'TJ': 'Asia/Dushanbe',
  'TL': 'Asia/Dili',
  'TG': 'Africa/Lome',
  'TO': 'Pacific/Tongatapu',
  'TT': 'America/Port_of_Spain',
  'TN': 'Africa/Tunis',
  'TM': 'Asia/Ashgabat',
  'TV': 'Pacific/Funafuti',
  'UG': 'Africa/Kampala',
  'UY': 'America/Montevideo',
  'VU': 'Pacific/Efate',
  'VA': 'Europe/Vatican',
  'YE': 'Asia/Aden',
  'ZM': 'Africa/Lusaka',
  'ZW': 'Africa/Harare',
  'US': 'America/New_York',
  'CH': 'Europe/Zurich',
  'AT': 'Europe/Vienna',
  'BE': 'Europe/Brussels',
  'IL': 'Asia/Jerusalem',
  'QA': 'Asia/Qatar',
  'HK': 'Asia/Hong_Kong',
}

// Build a slug → name function (PascalCase for component name)
function toPascal(slug) {
  return slug.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('')
}

// Extract UTC offset string for metadata
function getUtcLabel(timezones) {
  if (!timezones.length) return 'UTC'
  // e.g. "CET (UTC+1)" → "UTC+1"
  const m = timezones[0].match(/UTC[−-]?\+?[\d:]+/)
  return m ? m[0] : timezones[0]
}

// Extract TZ abbreviation
function getTzAbbr(timezones) {
  const m = timezones[0].match(/^([A-Z]{2,6})/)
  return m ? m[1] : 'UTC'
}

// Generate related link suggestions based on continent
function getLinks(country) {
  const { name, continent, slug } = country
  const links = []

  if (continent === 'americas') {
    links.push({ label: 'New York time', href: '/new-york/' })
    links.push({ label: 'Miami time', href: '/miami/' })
    links.push({ label: 'Los Angeles time', href: '/los-angeles/' })
    links.push({ label: 'Time in Brazil', href: '/brazil/' })
    links.push({ label: 'Time in Mexico', href: '/mexico/' })
    links.push({ label: 'Time in Argentina', href: '/argentina/' })
  } else if (continent === 'europe') {
    links.push({ label: 'London time', href: '/london/' })
    links.push({ label: 'Paris time', href: '/paris/' })
    links.push({ label: 'Berlin time', href: '/berlin/' })
    links.push({ label: 'Time in UK', href: '/uk/' })
    links.push({ label: 'Time in France', href: '/france/' })
    links.push({ label: 'Time in Germany', href: '/germany/' })
  } else if (continent === 'asia') {
    links.push({ label: 'Dubai time', href: '/dubai/' })
    links.push({ label: 'Tokyo time', href: '/tokyo/' })
    links.push({ label: 'Singapore time', href: '/singapore/' })
    links.push({ label: 'Time in Japan', href: '/japan/' })
    links.push({ label: 'Time in China', href: '/china/' })
    links.push({ label: 'Time in India', href: '/india/' })
  } else if (continent === 'africa') {
    links.push({ label: 'Cairo time', href: '/cairo/' })
    links.push({ label: 'Time in Nigeria', href: '/nigeria/' })
    links.push({ label: 'Time in Kenya', href: '/kenya/' })
    links.push({ label: 'Time in Egypt', href: '/egypt/' })
    links.push({ label: 'Time in South Africa', href: '/south-africa/' })
    links.push({ label: 'London time', href: '/london/' })
  } else if (continent === 'oceania') {
    links.push({ label: 'Sydney time', href: '/sydney/' })
    links.push({ label: 'Time in Australia', href: '/australia/' })
    links.push({ label: 'Time in New Zealand', href: '/new-zealand/' })
    links.push({ label: 'Tokyo time', href: '/tokyo/' })
    links.push({ label: 'Singapore time', href: '/singapore/' })
    links.push({ label: 'London time', href: '/london/' })
  } else {
    links.push({ label: 'New York time', href: '/new-york/' })
    links.push({ label: 'London time', href: '/london/' })
    links.push({ label: 'Dubai time', href: '/dubai/' })
    links.push({ label: 'Tokyo time', href: '/tokyo/' })
  }

  links.push({ label: 'Time converter tool', href: '/time-converter/' })
  return links
}

// Generate page.tsx content
function genPageTsx(country, hubSlug, ianaTimezone) {
  const { name, code, capital, timezones, continent, languages, slug } = country
  const utcLabel = getUtcLabel(timezones)
  const tzAbbr   = getTzAbbr(timezones)
  const componentName = toPascal(slug) + 'ClockClient'
  const links = getLinks(country)
  const linksStr = JSON.stringify(links)

  const faqItems = [
    {
      name: `What time is it in ${name} right now?`,
      text: `${name} uses ${timezones[0]}. ${capital} is the capital. The live clock above shows the current local time in ${name}.`
    },
    {
      name: `What time zone is ${capital} in?`,
      text: `${capital} uses ${timezones[0]}. The IANA time zone identifier is ${ianaTimezone}. ${timezones.length > 1 ? `${name} spans multiple time zones: ${timezones.join(', ')}.` : ''}`
    },
    {
      name: `Does ${name} observe Daylight Saving Time?`,
      text: `Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current ${name} offset in the time difference table.`
    },
    {
      name: `What is the best time to call ${name}?`,
      text: `The best time to call ${name} is during local business hours: Monday–Friday, 9 AM–5 PM ${tzAbbr}. Check the Best Time to Call table on this page for your time zone.`
    },
  ]

  const faqSchemaItems = faqItems.map(f =>
    `    { '@type': 'Question', name: '${f.name.replace(/'/g, "\\'")}', acceptedAnswer: { '@type': 'Answer', text: '${f.text.replace(/'/g, "\\'")}' } }`
  ).join(',\n')

  const linksTitle = `${name} & Related Times`

  return `import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ${componentName} from './${componentName}'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in ${name} Now — ${tzAbbr} (${utcLabel}) · ${capital}',
  description: 'What time is it in ${name} right now? Live ${capital} clock, time zone info (${timezones[0]}), best time to call, and time difference with major cities.',
  keywords: ['time in ${name.toLowerCase()}', '${name.toLowerCase()} time now', 'what time is it in ${name.toLowerCase()}', '${capital.toLowerCase()} time', '${name.toLowerCase()} time zone'],
  alternates: { canonical: 'https://whattime.city/${hubSlug}/' },
  openGraph: { title: 'Current Time in ${name} — ${tzAbbr} · ${capital}', description: 'Live ${name} time. ${capital} on ${timezones[0]}.', type: 'website', url: 'https://whattime.city/${hubSlug}/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
${faqSchemaItems},
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in ${name}', item: 'https://whattime.city/${hubSlug}/' }] }

export default function ${toPascal(slug)}TimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in ${name}" subtitle="${timezones[0]} · ${capital} · ${utcLabel}" />
      <${componentName} />
      <CountryFactsSection hubSlug="${hubSlug}" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={${linksStr}}
        linksTitle="${linksTitle}"
        footerText="Time zone data powered by the IANA Time Zone Database. ${name}: ${ianaTimezone} (${timezones[0]})."
      />
    </ContentPageWrapper>
  )
}
`
}

// Generate *ClockClient.tsx content
function genClockClientTsx(country, hubSlug, ianaTimezone) {
  const { name, code, timezones, capital, slug } = country
  const componentName = toPascal(slug) + 'ClockClient'
  const constName     = code.replace(/-/g, '_') + '_TZ'
  const tzAbbr        = getTzAbbr(timezones)
  const utcLabel      = getUtcLabel(timezones)

  return `'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'
import { getFlagUrl } from '@/shared/utils'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const ${constName} = '${ianaTimezone}'
function getLocalTime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: ${constName}, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: ${constName}, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: ${constName}, timeZoneName: 'short' }).split(' ').pop() ?? '${tzAbbr}',
  }
}
export default function ${componentName}() {
  const [local, setLocal] = useState({ time: '--:--:--', date: '', tzAbbr: '${tzAbbr}' })
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => setLocal(getLocalTime())
    update(); const id = setInterval(update, 1000); return () => clearInterval(id)
  }, [])
  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white p-6' : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const tp = isLight ? 'text-slate-800' : 'text-white'
  const ts = isLight ? 'text-slate-500' : 'text-slate-400'
  return (
    <div className="space-y-4">
      <div className={card}>
        <div className="flex items-center gap-3 mb-1">
          <img src={getFlagUrl('${code}', 'sm')} alt="${code} flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={\`text-xs font-medium uppercase tracking-wider \${ts}\`}>${name} · {mounted ? local.tzAbbr : '${tzAbbr}'}</div>
            <div className={\`text-xs \${ts}\`}>${timezones[0]} · ${utcLabel}</div>
          </div>
        </div>
        <div className={\`tabular-nums text-5xl sm:text-6xl font-bold tracking-tight mt-3 \${tp}\`}>{mounted ? local.time : '--:--:--'}</div>
        <div className={\`text-sm mt-1 \${ts}\`}>{mounted ? local.date : ''}</div>
      </div>
      <ClockComparisonSection primaryTz={${constName}} countryName="${name}" />
    </div>
  )
}
`
}

// ── Main migration ─────────────────────────────────────────────────────────────

const missing = countries.filter(c => !existingHubs.has(c.slug))
console.log(`Found ${countries.length} total countries, ${existingHubs.size} already have hubs`)
console.log(`Generating hub pages for ${missing.length} countries...\n`)

const newHubEntries = []
let created = 0, skipped = 0

for (const country of missing) {
  const hubSlug = country.slug  // use same as country slug
  const ianaTimezone = tzMap[country.code] ?? FALLBACK_TZ[country.code] ?? 'UTC'

  if (ianaTimezone === 'UTC' && !FALLBACK_TZ[country.code]) {
    console.warn(`  ⚠ No IANA timezone for ${country.name} (${country.code}) — using UTC`)
  }

  const appDir = path.join(ROOT, 'app', hubSlug)

  // Create directory
  if (!fs.existsSync(appDir)) {
    fs.mkdirSync(appDir, { recursive: true })
  }

  const componentName = toPascal(country.slug) + 'ClockClient'
  const pagePath   = path.join(appDir, 'page.tsx')
  const clientPath = path.join(appDir, `${componentName}.tsx`)

  // Skip if files already exist
  if (fs.existsSync(pagePath) && fs.existsSync(clientPath)) {
    skipped++
    continue
  }

  fs.writeFileSync(pagePath,   genPageTsx(country, hubSlug, ianaTimezone))
  fs.writeFileSync(clientPath, genClockClientTsx(country, hubSlug, ianaTimezone))

  newHubEntries.push(`  '${country.slug}':${' '.repeat(Math.max(1, 24 - country.slug.length))}'${hubSlug}',`)
  created++
  console.log(`  ✓ ${country.name} → /app/${hubSlug}/`)
}

// ── Update hubPages.ts ─────────────────────────────────────────────────────────
if (newHubEntries.length > 0) {
  // Group entries by continent for insertion
  const americasNew = [], europeNew = [], asiaNew = [], africaNew = [], oceaniaNew = [], otherNew = []
  for (const country of missing.filter(c => newHubEntries.some(e => e.includes(`'${c.slug}'`)))) {
    const entry = `  '${country.slug}':${' '.repeat(Math.max(1, 24 - country.slug.length))}'${country.slug}',`
    if (country.continent === 'americas') americasNew.push(entry)
    else if (country.continent === 'europe') europeNew.push(entry)
    else if (country.continent === 'asia') asiaNew.push(entry)
    else if (country.continent === 'africa') africaNew.push(entry)
    else if (country.continent === 'oceania') oceaniaNew.push(entry)
    else otherNew.push(entry)
  }

  let updated = hubPagesRaw

  // Insert after each continent's existing entries
  if (americasNew.length) {
    updated = updated.replace(
      "  'venezuela':         'venezuela',\n  // Europe",
      `  'venezuela':         'venezuela',\n${americasNew.join('\n')}\n  // Europe`
    )
  }
  if (europeNew.length) {
    updated = updated.replace(
      "  'ukraine':           'ukraine',\n  'united-kingdom':    'uk',\n  // Asia",
      `  'ukraine':           'ukraine',\n  'united-kingdom':    'uk',\n${europeNew.join('\n')}\n  // Asia`
    )
  }
  if (asiaNew.length) {
    updated = updated.replace(
      "  'vietnam':           'vietnam',\n  // Africa",
      `  'vietnam':           'vietnam',\n${asiaNew.join('\n')}\n  // Africa`
    )
  }
  if (africaNew.length) {
    updated = updated.replace(
      "  'tanzania':          'tanzania',\n  // Oceania",
      `  'tanzania':          'tanzania',\n${africaNew.join('\n')}\n  // Oceania`
    )
  }
  if (oceaniaNew.length) {
    updated = updated.replace(
      "  'new-zealand':       'new-zealand',\n}",
      `  'new-zealand':       'new-zealand',\n${oceaniaNew.join('\n')}\n  // Other\n${otherNew.join('\n')}\n}`
    )
  } else if (otherNew.length) {
    updated = updated.replace(
      "  'new-zealand':       'new-zealand',\n}",
      `  'new-zealand':       'new-zealand',\n  // Other\n${otherNew.join('\n')}\n}`
    )
  }

  fs.writeFileSync(path.join(ROOT, 'data/hubPages.ts'), updated)
  console.log(`\n✅ Updated data/hubPages.ts with ${newHubEntries.length} new entries`)
}

console.log(`\nDone! Created: ${created}, Skipped (already existed): ${skipped}`)
