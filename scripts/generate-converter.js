#!/usr/bin/env node

/**
 * Converter Page Generator
 *
 * Generates a new timezone converter page.
 *
 * Usage:
 *   node scripts/generate-converter.js PST IST
 *
 * This will create: app/pst-to-ist/page.tsx
 *
 * The generated file includes:
 *   - Next.js metadata (title, description, canonical, OpenGraph, Twitter)
 *   - TZPairConfig with IANA timezone, full name, and major cities
 *   - FAQ schema with 4 starter questions
 *   - ConverterPageShell component usage
 *
 * After generation, manually review and customize:
 *   - FAQ answers (make them specific to the pair)
 *   - infoBody paragraphs (add DST details, business overlap windows)
 *   - City lists (verify accuracy)
 */

const fs = require('fs')
const path = require('path')

// Timezone abbreviation → config mapping
const TZ_DATA = {
  EST:  { iana: 'America/New_York',     full: 'Eastern Standard Time',              cities: ["New York, NY", "Miami, FL", "Boston, MA", "Atlanta, GA", "Washington D.C.", "Philadelphia, PA"] },
  CST:  { iana: 'America/Chicago',      full: 'Central Standard Time',              cities: ["Chicago, IL", "Houston, TX", "Dallas, TX", "Minneapolis, MN", "Kansas City, MO", "New Orleans, LA"] },
  MST:  { iana: 'America/Denver',       full: 'Mountain Standard Time',             cities: ["Denver, CO", "Phoenix, AZ", "Salt Lake City, UT", "Albuquerque, NM", "Boise, ID", "El Paso, TX"] },
  PST:  { iana: 'America/Los_Angeles',  full: 'Pacific Standard Time',              cities: ["Los Angeles, CA", "San Francisco, CA", "Seattle, WA", "Portland, OR", "Las Vegas, NV", "San Diego, CA"] },
  GMT:  { iana: 'Europe/London',        full: 'Greenwich Mean Time',                cities: ["London", "Dublin", "Edinburgh", "Lisbon", "Reykjavik", "Accra"] },
  BST:  { iana: 'Europe/London',        full: 'British Summer Time',                cities: ["London", "Manchester", "Edinburgh", "Birmingham", "Dublin", "Cardiff"] },
  CET:  { iana: 'Europe/Berlin',        full: 'Central European Time',              cities: ["Frankfurt", "Berlin", "Paris", "Amsterdam", "Madrid", "Rome"] },
  IST:  { iana: 'Asia/Kolkata',         full: 'India Standard Time',                cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune"] },
  JST:  { iana: 'Asia/Tokyo',           full: 'Japan Standard Time',                cities: ["Tokyo", "Osaka", "Yokohama", "Nagoya", "Kyoto", "Fukuoka"] },
  AEST: { iana: 'Australia/Sydney',     full: 'Australian Eastern Standard Time',   cities: ["Sydney", "Melbourne", "Brisbane", "Canberra", "Hobart", "Gold Coast"] },
  UTC:  { iana: 'Etc/UTC',             full: 'Coordinated Universal Time',          cities: ["UTC+0 Reference", "GPS Time", "Aviation (Zulu)", "International Space Station", "Internet Standards", "Scientific Research"] },
  SGT:  { iana: 'Asia/Singapore',       full: 'Singapore Standard Time',            cities: ["Singapore", "Kuala Lumpur", "Perth", "Hong Kong", "Taipei", "Manila"] },
  KST:  { iana: 'Asia/Seoul',           full: 'Korea Standard Time',                cities: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju"] },
  HKT:  { iana: 'Asia/Hong_Kong',       full: 'Hong Kong Time',                     cities: ["Hong Kong", "Shenzhen", "Macau", "Guangzhou", "Taipei", "Manila"] },
  GST:  { iana: 'Asia/Dubai',           full: 'Gulf Standard Time',                 cities: ["Dubai", "Abu Dhabi", "Muscat", "Baku", "Tbilisi", "Yerevan"] },
  EET:  { iana: 'Europe/Athens',        full: 'Eastern European Time',              cities: ["Athens", "Helsinki", "Bucharest", "Sofia", "Tallinn", "Vilnius"] },
  WAT:  { iana: 'Africa/Lagos',         full: 'West Africa Time',                   cities: ["Lagos", "Kinshasa", "Luanda", "Abuja", "Douala", "Libreville"] },
  EAT:  { iana: 'Africa/Nairobi',       full: 'East Africa Time',                   cities: ["Nairobi", "Addis Ababa", "Dar es Salaam", "Kampala", "Mogadishu", "Kigali"] },
  CST8: { iana: 'Asia/Shanghai',        full: 'China Standard Time',                cities: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Hangzhou"] },
  NZST: { iana: 'Pacific/Auckland',     full: 'New Zealand Standard Time',          cities: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga", "Dunedin"] },
}

function generatePage(fromAbbr, toAbbr) {
  const from = TZ_DATA[fromAbbr]
  const to = TZ_DATA[toAbbr]

  if (!from) { console.error(`Unknown timezone abbreviation: ${fromAbbr}`); process.exit(1) }
  if (!to)   { console.error(`Unknown timezone abbreviation: ${toAbbr}`); process.exit(1) }

  const slug = `${fromAbbr.toLowerCase()}-to-${toAbbr.toLowerCase()}`
  const componentName = `${fromAbbr}to${toAbbr}`

  // Generate page content
  const content = `import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: '${fromAbbr} to ${toAbbr} Converter',
  description: 'Convert ${from.full} (${fromAbbr}) to ${to.full} (${toAbbr}) instantly. Live clocks, full conversion table, and scheduling overlap guide.',
  alternates: { canonical: 'https://whattime.city/${slug}/' },
  openGraph: {
    title: '${fromAbbr} to ${toAbbr} Converter',
    description: 'Convert ${fromAbbr} to ${toAbbr}. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/${slug}/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${fromAbbr} to ${toAbbr} Converter',
    description: 'Convert ${fromAbbr} to ${toAbbr}. Live converter and overlap guide.',
  },
}

const config: TZPairConfig = {
  fromAbbr: '${fromAbbr}',
  toAbbr: '${toAbbr}',
  fromTimezone: '${from.iana}',
  toTimezone: '${to.iana}',
  fromFullName: '${from.full}',
  toFullName: '${to.full}',
  fromCities: ${JSON.stringify(from.cities)},
  toCities: ${JSON.stringify(to.cities)},
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I convert ${fromAbbr} to ${toAbbr}?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TODO: Add specific conversion details with UTC offsets and hour difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 9 AM ${fromAbbr} in ${toAbbr}?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TODO: Calculate and add the specific converted time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the ${fromAbbr} to ${toAbbr} difference change during Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TODO: Add DST-specific details for both timezones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best overlap window for ${fromAbbr} and ${toAbbr}?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TODO: Calculate and add the best business hours overlap.',
      },
    },
  ],
}

export default function ${componentName}() {
  return (
    <ConverterPageShell
      title="${fromAbbr} to ${toAbbr} Converter"
      subtitle={<>${from.full} \\u2192 ${to.full} \\u00B7 TODO: add time difference</>}
      config={config}
      infoTitle="${fromAbbr} vs ${toAbbr}"
      infoBody={<>
        <p><strong>${fromAbbr}</strong> \\u2014 ${from.full}. TODO: Add UTC offset and DST details.</p>
        <p><strong>${toAbbr}</strong> \\u2014 ${to.full}. TODO: Add UTC offset and DST details.</p>
        <p>TODO: Add business overlap window and practical scheduling tips.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
`

  // Write file
  const dir = path.join(process.cwd(), 'app', slug)
  if (fs.existsSync(dir)) {
    console.error(`Directory already exists: app/${slug}/`)
    console.error('Remove it first or edit the existing file.')
    process.exit(1)
  }

  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf-8')
  console.log(`Created: app/${slug}/page.tsx`)
  console.log('')
  console.log('Next steps:')
  console.log('  1. Fill in TODO placeholders with accurate conversion data')
  console.log('  2. Customize FAQ answers with specific times and DST notes')
  console.log('  3. Verify city lists are accurate')
  console.log('  4. Check title length <= 44 chars (template adds 16)')
  console.log(`  5. Add to sitemap.ts if not auto-discovered`)
}

// CLI
const args = process.argv.slice(2)
if (args.length !== 2) {
  console.log('Usage: node scripts/generate-converter.js <FROM_ABBR> <TO_ABBR>')
  console.log('')
  console.log('Example: node scripts/generate-converter.js PST IST')
  console.log('')
  console.log('Available abbreviations:')
  console.log('  ' + Object.keys(TZ_DATA).join(', '))
  process.exit(0)
}

generatePage(args[0].toUpperCase(), args[1].toUpperCase())
