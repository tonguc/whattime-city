/**
 * Migrates hub page h1/p headers to use HubPageHeader client component.
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
      try { statSync(pageFile); results.push(pageFile) } catch {}
    }
  }
  return results
}

let updated = 0, skipped = 0

for (const filePath of getAllPageFiles(APP_DIR)) {
  let content = readFileSync(filePath, 'utf8')

  if (!content.includes('HubPageLayout')) { skipped++; continue }
  if (content.includes('HubPageHeader')) { skipped++; continue }

  // Extract h1 text
  const h1Match = content.match(/<h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">([^<]+)<\/h1>/)
  if (!h1Match) { console.log(`SKIP (no h1): ${filePath}`); skipped++; continue }
  const title = h1Match[1]

  // Extract p subtitle
  const pMatch = content.match(/<p className="text-sm text-slate-500 dark:text-slate-400 mb-6">([^<]+)<\/p>/)
  if (!pMatch) { console.log(`SKIP (no p): ${filePath}`); skipped++; continue }
  const subtitle = pMatch[1]

  // Add HubPageHeader import
  content = content.replace(
    "import HubPageLayout from '@/components/HubPageLayout'",
    "import HubPageLayout from '@/components/HubPageLayout'\nimport HubPageHeader from '@/components/HubPageHeader'"
  )

  // Replace h1 + p with HubPageHeader
  const h1Pattern = new RegExp(
    `<h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<\\/h1>\\s*<p className="text-sm text-slate-500 dark:text-slate-400 mb-6">${subtitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<\\/p>`
  )
  const titleEscaped = title.replace(/"/g, '&quot;')
  const subtitleEscaped = subtitle.replace(/"/g, '&quot;')
  const replacement = `<HubPageHeader title="${titleEscaped}" subtitle="${subtitleEscaped}" />`

  if (!h1Pattern.test(content)) {
    console.log(`SKIP (pattern mismatch): ${filePath}`)
    skipped++
    continue
  }

  content = content.replace(h1Pattern, replacement)

  writeFileSync(filePath, content, 'utf8')
  updated++
  console.log(`Updated: ${filePath}`)
}

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`)
