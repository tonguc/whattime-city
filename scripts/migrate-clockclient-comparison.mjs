/**
 * Replaces the old comparison table in ClockClient files with ClockComparisonSection.
 */
import { readFileSync, writeFileSync } from 'fs'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const APP_DIR = new URL('../app', import.meta.url).pathname

function processDir(dir) {
  let updated = 0, skipped = 0
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      const r = processDir(full)
      updated += r.updated
      skipped += r.skipped
    } else if (entry.endsWith('ClockClient.tsx')) {
      let content = readFileSync(full, 'utf8')

      // Skip if already migrated
      if (content.includes('ClockComparisonSection')) { skipped++; continue }

      // Extract TZ constant name (e.g., CU_TZ = 'America/Havana')
      const tzVarMatch = content.match(/^const ([A-Z_]+_TZ) = '([^']+)'/m)
      if (!tzVarMatch) { console.log(`SKIP (no TZ): ${full}`); skipped++; continue }
      const tzVarName = tzVarMatch[1]

      // Extract country name from h2 "X vs Other Cities"
      const h2Match = content.match(/<h2[^>]*>([^<]+) vs Other Cities<\/h2>/)
      if (!h2Match) { console.log(`SKIP (no h2): ${full}`); skipped++; continue }
      const countryName = h2Match[1]

      // Add import after 'use client' + existing imports block
      if (!content.includes("import ClockComparisonSection")) {
        content = content.replace(
          /('use client'\n)/,
          `'use client'\nimport ClockComparisonSection from '@/components/ClockComparisonSection'\n`
        )
      }

      // Replace the comparison table div with ClockComparisonSection
      // Match: <div className={card}> containing "vs Other Cities" h2
      // The structure is: <div className={card}>\n        <h2 ...>X vs Other Cities</h2>\n        <table>...</table>\n      </div>
      // We need to match from the opening div to its closing </div>

      // Strategy: find "X vs Other Cities", then find the enclosing <div className={card}>
      // and replace it with the component

      // Pattern: matches the second card div (comparison table) through end of return
      // The return wrapper is: <div className="space-y-4">...</div>
      // After replacement: <div className="space-y-4">...<ClockComparisonSection ... /></div>

      const compTablePattern = /\n      <div className=\{card\}>\n        <h2[^>]*>[^<]+ vs Other Cities<\/h2>[\s\S]*?<\/table>\n      <\/div>\n    <\/div>\n  \)/
      const replacement = `\n      <ClockComparisonSection primaryTz={${tzVarName}} countryName="${countryName}" />\n    </div>\n  )`

      if (!compTablePattern.test(content)) {
        console.log(`SKIP (pattern no match): ${full}`)
        skipped++
        continue
      }

      content = content.replace(compTablePattern, replacement)

      writeFileSync(full, content, 'utf8')
      updated++
      console.log(`Updated: ${full} [${tzVarName} / ${countryName}]`)
    }
  }
  return { updated, skipped }
}

const result = processDir(APP_DIR)
console.log(`\nDone. Updated: ${result.updated}, Skipped: ${result.skipped}`)
