/**
 * Migrates hub pages to use HubPageLayout client component.
 * Replaces server-rendered FAQ/links sections (which can't properly respond to
 * dark mode via CSS class ancestors) with a client component using useCityContext().
 */
import { readFileSync, writeFileSync } from 'fs'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const APP_DIR = new URL('../app', import.meta.url).pathname

function getAllPageFiles(dir) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      const pageFile = join(full, 'page.tsx')
      try {
        statSync(pageFile)
        results.push(pageFile)
      } catch {}
    }
  }
  return results
}

let updated = 0
let skipped = 0

for (const filePath of getAllPageFiles(APP_DIR)) {
  let content = readFileSync(filePath, 'utf8')

  // Only process pages that use ContentPageWrapper and have the old pattern
  if (!content.includes('ContentPageWrapper')) { skipped++; continue }
  if (!content.includes("const card = 'rounded-2xl")) { skipped++; continue }
  if (content.includes('HubPageLayout')) { skipped++; continue }

  // 1. Add HubPageLayout import after ContentPageWrapper import
  content = content.replace(
    "import ContentPageWrapper from '@/components/ContentPageWrapper'",
    "import ContentPageWrapper from '@/components/ContentPageWrapper'\nimport HubPageLayout from '@/components/HubPageLayout'"
  )

  // 2. Remove the `const card = ...` line
  content = content.replace(/^const card = '.*'\n/m, '')

  // 3. Extract linksTitle from second h2 (links section heading)
  // Pattern: <h2 ...>TITLE</h2> inside the second section
  const linksTitleMatch = content.match(
    /<section className="mb-4"><div className=\{card\}>\s*<h2[^>]*>([^<]+)<\/h2>/
  )
  const linksTitle = linksTitleMatch ? linksTitleMatch[1] : 'Related Time Pages'

  // 4. Extract links array from the JSX
  // Pattern: {[{ label: '...', href: '...' }, ...].map(lnk =>
  const linksArrayMatch = content.match(/\{\[(\{[^}]+\}(?:,\s*\{[^}]+\})*)\]\.map\(lnk =>/)
  let linksArray = '[]'
  if (linksArrayMatch) {
    linksArray = '[' + linksArrayMatch[1] + ']'
  }

  // 5. Extract footer text
  const footerMatch = content.match(/<footer[^>]*>([^<]+)<\/footer>/)
  const footerText = footerMatch ? footerMatch[1] : ''

  // 6. Build the FAQ items mapping
  const faqItemsJsx = 'faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))'

  // 7. Build the replacement JSX
  const replacement = `      <HubPageLayout
        faqItems={${faqItemsJsx}}
        links={${linksArray}}
        linksTitle="${linksTitle}"
        footerText="${footerText}"
      />`

  // 8. Replace the two sections + footer with HubPageLayout
  // Match from <section className="mt-4 mb-4"> to </footer>
  const sectionPattern = /<section className="mt-4 mb-4">[\s\S]*?<\/footer>/
  if (!sectionPattern.test(content)) {
    console.log(`SKIP (no match): ${filePath}`)
    skipped++
    continue
  }

  content = content.replace(sectionPattern, replacement)

  writeFileSync(filePath, content, 'utf8')
  updated++
  console.log(`Updated: ${filePath}`)
}

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`)
