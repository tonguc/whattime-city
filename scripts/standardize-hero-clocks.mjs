/**
 * Rewrite all *ClockClient.tsx files to use the shared HeroClockDisplay component.
 * Extracts TZ constant from existing file, looks up country data, generates clean wrapper.
 * Run: node scripts/standardize-hero-clocks.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const ROOT  = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const appDir = path.join(ROOT, 'app')

// ── Parse countries.ts for code/name/timezones ────────────────────────────
const countriesSrc = fs.readFileSync(path.join(ROOT, 'data/countries.ts'), 'utf8')
const countriesMap = {} // slug → { code, name, timezones }
for (const m of countriesSrc.matchAll(
  /\{\s*code:\s*'([^']+)',\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)'[^}]+timezones:\s*\[([^\]]+)\]/gs
)) {
  const [, code, name, slug, tzsRaw] = m
  const tzs = [...tzsRaw.matchAll(/'([^']+)'/g)].map(t => t[1])
  countriesMap[slug] = { code, name, timezones: tzs }
}

// ── Parse hubPages.ts: hubSlug → countrySlug ─────────────────────────────
const hubPagesSrc = fs.readFileSync(path.join(ROOT, 'data/hubPages.ts'), 'utf8')
const hubToCountry = {}
for (const m of hubPagesSrc.matchAll(/'([^']+)':\s*'([^']+)'/g)) {
  hubToCountry[m[2]] = m[1] // hubSlug → countrySlug
}

// ── Cities: countryCode → primary IANA timezone ───────────────────────────
const citiesSrc = fs.readFileSync(path.join(ROOT, 'data/cities.ts'), 'utf8')
const codeToIanaTz = {}
for (const m of citiesSrc.matchAll(/countryCode:\s*'([A-Z]+)'[^}]*timezone:\s*'([^']+)'/g)) {
  if (!codeToIanaTz[m[1]]) codeToIanaTz[m[1]] = m[2]
}
for (const m of citiesSrc.matchAll(/timezone:\s*'([^']+)'[^}]*countryCode:\s*'([A-Z]+)'/g)) {
  if (!codeToIanaTz[m[2]]) codeToIanaTz[m[2]] = m[1]
}

// ── US State TZ fallback (extract from existing ClockClient TZ constants) ─
const STATE_TZ_FALLBACK = {
  'alabama': 'America/Chicago',
  'arizona': 'America/Phoenix',
  'arkansas': 'America/Chicago',
  'california': 'America/Los_Angeles',
  'colorado': 'America/Denver',
  'connecticut': 'America/New_York',
  'florida': 'America/New_York',
  'georgia-state': 'America/New_York',
  'illinois': 'America/Chicago',
  'indiana': 'America/Indiana/Indianapolis',
  'iowa': 'America/Chicago',
  'kansas': 'America/Chicago',
  'kentucky': 'America/New_York',
  'louisiana': 'America/Chicago',
  'maryland': 'America/New_York',
  'massachusetts': 'America/New_York',
  'michigan': 'America/Detroit',
  'minnesota': 'America/Chicago',
  'mississippi': 'America/Chicago',
  'missouri': 'America/Chicago',
  'nebraska': 'America/Chicago',
  'nevada': 'America/Los_Angeles',
  'new-jersey': 'America/New_York',
  'new-mexico': 'America/Denver',
  'new-york-state': 'America/New_York',
  'north-carolina': 'America/New_York',
  'north-dakota': 'America/Chicago',
  'ohio': 'America/New_York',
  'oklahoma': 'America/Chicago',
  'oregon': 'America/Los_Angeles',
  'pennsylvania': 'America/New_York',
  'south-carolina': 'America/New_York',
  'tennessee': 'America/Chicago',
  'texas': 'America/Chicago',
  'utah': 'America/Denver',
  'virginia': 'America/New_York',
  'washington-state': 'America/Los_Angeles',
  'west-virginia': 'America/New_York',
  'wisconsin': 'America/Chicago',
  'dubai': 'Asia/Dubai',
}

// US state display names
const STATE_NAMES = {
  'alabama': 'Alabama', 'arizona': 'Arizona', 'arkansas': 'Arkansas',
  'california': 'California', 'colorado': 'Colorado', 'connecticut': 'Connecticut',
  'florida': 'Florida', 'georgia-state': 'Georgia', 'illinois': 'Illinois',
  'indiana': 'Indiana', 'iowa': 'Iowa', 'kansas': 'Kansas',
  'kentucky': 'Kentucky', 'louisiana': 'Louisiana', 'maryland': 'Maryland',
  'massachusetts': 'Massachusetts', 'michigan': 'Michigan', 'minnesota': 'Minnesota',
  'mississippi': 'Mississippi', 'missouri': 'Missouri', 'nebraska': 'Nebraska',
  'nevada': 'Nevada', 'new-jersey': 'New Jersey', 'new-mexico': 'New Mexico',
  'new-york-state': 'New York', 'north-carolina': 'North Carolina',
  'north-dakota': 'North Dakota', 'ohio': 'Ohio', 'oklahoma': 'Oklahoma',
  'oregon': 'Oregon', 'pennsylvania': 'Pennsylvania', 'south-carolina': 'South Carolina',
  'tennessee': 'Tennessee', 'texas': 'Texas', 'utah': 'Utah',
  'virginia': 'Virginia', 'washington-state': 'Washington', 'west-virginia': 'West Virginia',
  'wisconsin': 'Wisconsin',
  'dubai': 'Dubai',
}

function toPascal(slug) {
  return slug.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('')
}

function getTzLabel(tzs) {
  // e.g. "TRT (UTC+3)" → "TRT · UTC+3"
  const m = tzs[0]?.match(/^([A-Z]{2,6})\s*\(?(UTC[^)]*)\)?/)
  if (m) return `${m[1]} · ${m[2]}`
  const m2 = tzs[0]?.match(/UTC[−-]?\+?[\d:]+/)
  return m2 ? tzs[0] : 'UTC'
}

function genClockClient(hubSlug, countryCode, countryName, ianaTimezone, tzLabel) {
  const componentName = toPascal(hubSlug) + 'ClockClient'
  const constName = hubSlug.toUpperCase().replace(/-/g, '_') + '_TZ'
  return `'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ${constName} = '${ianaTimezone}'
export default function ${componentName}() {
  return <HeroClockDisplay tz={${constName}} countryCode="${countryCode}" countryName="${countryName}" tzLabel="${tzLabel}" />
}
`
}

let updated = 0, skipped = 0

for (const dir of fs.readdirSync(appDir)) {
  const dirPath = path.join(appDir, dir)
  if (!fs.statSync(dirPath).isDirectory()) continue

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('ClockClient.tsx'))
  if (!files.length) continue

  const hubSlug = dir

  // Resolve country data
  const countrySlug = hubToCountry[hubSlug]
  let countryCode, countryName, ianaTimezone, tzLabel

  if (countrySlug && countriesMap[countrySlug]) {
    const c = countriesMap[countrySlug]
    countryCode  = c.code
    countryName  = c.name
    ianaTimezone = codeToIanaTz[c.code] ?? STATE_TZ_FALLBACK[hubSlug] ?? 'UTC'
    tzLabel      = getTzLabel(c.timezones)
  } else if (STATE_NAMES[hubSlug]) {
    // US state or special hub (Dubai)
    countryCode  = hubSlug === 'dubai' ? 'AE' : 'US'
    countryName  = STATE_NAMES[hubSlug]
    ianaTimezone = STATE_TZ_FALLBACK[hubSlug] ?? 'America/New_York'
    // Derive tzLabel from IANA tz abbreviation
    tzLabel      = ianaTimezone.split('/').pop()?.replace(/_/g, ' ') ?? 'Local Time'
  } else {
    console.warn(`  ⚠ No data for hub: ${hubSlug}`)
    skipped++
    continue
  }

  const file = files[0]
  const filePath = path.join(dirPath, file)
  const newContent = genClockClient(hubSlug, countryCode, countryName, ianaTimezone, tzLabel)
  fs.writeFileSync(filePath, newContent)
  console.log(`  ✓ ${hubSlug}`)
  updated++
}

console.log(`\nDone! Rewritten: ${updated}, Skipped: ${skipped}`)
