/**
 * inject-country-facts.mjs
 * CountryFactsSection component'ini tüm country hub page'lerine ekler.
 * US state page'lerine dokunmaz.
 */
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const COUNTRY_HUB_SLUGS = {
  'argentina':'argentina','brazil':'brazil','canada':'canada','chile':'chile',
  'colombia':'colombia','cuba':'cuba','mexico':'mexico','peru':'peru','venezuela':'venezuela',
  'france':'france','germany':'germany','greece':'greece','italy':'italy',
  'netherlands':'netherlands','poland':'poland','portugal':'portugal','russia':'russia',
  'spain':'spain','sweden':'sweden','turkey':'turkey','ukraine':'ukraine',
  'united-kingdom':'uk',
  'bangladesh':'bangladesh','china':'china','india':'india','indonesia':'indonesia',
  'iran':'iran','japan':'japan','malaysia':'malaysia','myanmar':'myanmar',
  'nepal':'nepal','pakistan':'pakistan','philippines':'philippines',
  'saudi-arabia':'saudi-arabia','singapore':'singapore','south-korea':'south-korea',
  'thailand':'thailand','uzbekistan':'uzbekistan','vietnam':'vietnam',
  'angola':'angola','cameroon':'cameroon','egypt':'egypt','ethiopia':'ethiopia',
  'ghana':'ghana','ivory-coast':'ivory-coast','kenya':'kenya','morocco':'morocco',
  'nigeria':'nigeria','senegal':'senegal','south-africa':'south-africa','tanzania':'tanzania',
  'australia':'australia','new-zealand':'new-zealand',
}

const hubSlugs = Object.values(COUNTRY_HUB_SLUGS)
const APP_DIR = join(process.cwd(), 'app')

const IMPORT_LINE = `import CountryFactsSection from '@/components/CountryFactsSection'`

let updated = 0
let skipped = 0

for (const slug of hubSlugs) {
  const filePath = join(APP_DIR, slug, 'page.tsx')
  let src
  try {
    src = readFileSync(filePath, 'utf8')
  } catch {
    console.warn(`  SKIP (not found): ${slug}/page.tsx`)
    skipped++
    continue
  }

  // Zaten eklenmiş mi?
  if (src.includes('CountryFactsSection')) {
    console.log(`  ALREADY DONE: ${slug}`)
    skipped++
    continue
  }

  // 1. Import ekle — mevcut son import satırından sonra
  const importInsert = src.replace(
    /(import [^\n]+\n)(?!import)/,
    (match) => match // last import bulunana kadar devam et
  )

  // Son import satırını bul ve arkasına ekle
  const lastImportMatch = [...src.matchAll(/^import .+$/gm)].at(-1)
  if (!lastImportMatch) {
    console.warn(`  SKIP (no imports): ${slug}`)
    skipped++
    continue
  }
  const afterLastImport = lastImportMatch.index + lastImportMatch[0].length
  src = src.slice(0, afterLastImport) + '\n' + IMPORT_LINE + src.slice(afterLastImport)

  // 2. <XxxClockClient /> satırından sonra component'i inject et
  // Pattern: <SomethingClockClient /> veya <SomethingClockClient/>
  const clockClientPattern = /(<[A-Z]\w*ClockClient\s*\/>)/
  if (!clockClientPattern.test(src)) {
    console.warn(`  SKIP (no ClockClient tag): ${slug}`)
    skipped++
    continue
  }

  src = src.replace(
    clockClientPattern,
    `$1\n      <CountryFactsSection hubSlug="${slug}" />`
  )

  writeFileSync(filePath, src, 'utf8')
  console.log(`  UPDATED: ${slug}/page.tsx`)
  updated++
}

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`)
