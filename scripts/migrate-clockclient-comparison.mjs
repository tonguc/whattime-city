/**
 * Replaces the old comparison table in ClockClient files with ClockComparisonSection.
 */
import { readFileSync, writeFileSync } from 'fs'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const APP_DIR = new URL('../app', import.meta.url).pathname

/**
 * Find the closing </div> for the div that opens at `openPos` in `content`.
 * `openPos` should be the position of the '<' of the opening <div...>.
 */
function findClosingDiv(content, openPos) {
  let depth = 0
  let i = openPos
  while (i < content.length) {
    if (content.startsWith('<div', i) && (content[i + 4] === ' ' || content[i + 4] === '>')) {
      depth++
      i += 4
    } else if (content.startsWith('</div>', i)) {
      depth--
      if (depth === 0) {
        return i + 6 // position after </div>
      }
      i += 6
    } else {
      i++
    }
  }
  return -1
}

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

      // Find h2 containing "vs" and "Cities"
      const h2Match = content.match(/<h2[^>]*>([^<]+?) (?:vs|Time vs) (?:Other Cities|World Cities)<\/h2>/)
      if (!h2Match) { console.log(`SKIP (no h2): ${full}`); skipped++; continue }
      const countryName = h2Match[1]

      // Find the position of the h2 in content
      const h2Pos = content.indexOf(h2Match[0])
      if (h2Pos === -1) { console.log(`SKIP (h2 pos not found): ${full}`); skipped++; continue }

      // Walk backwards from h2Pos to find the opening <div that contains it
      // We need to find the nearest <div that starts before h2Pos
      // Strategy: find the last <div ...> before h2Pos at the same nesting level (the card div)
      // We look for patterns like: <div className={card}> or <div className={cardBase}> or
      // <div className={`rounded-2xl p-5 ${card}`}> etc.
      // Simple approach: find the last occurrence of a <div opening tag before h2Pos
      let cardDivStart = -1
      let searchFrom = 0
      while (true) {
        const nextDiv = content.indexOf('<div', searchFrom)
        if (nextDiv === -1 || nextDiv >= h2Pos) break
        // Check this is a direct-child div at the right level (contains the h2)
        // We'll just track the last <div before h2Pos that, when we find its closing tag,
        // encompasses the h2
        const closingPos = findClosingDiv(content, nextDiv)
        if (closingPos > h2Pos) {
          // This div encompasses the h2 - it's a candidate for the card div
          // Keep searching for a closer (later) one
          cardDivStart = nextDiv
        }
        searchFrom = nextDiv + 1
      }

      if (cardDivStart === -1) { console.log(`SKIP (no enclosing div): ${full}`); skipped++; continue }

      // Find the closing </div> for this card div
      const cardDivEnd = findClosingDiv(content, cardDivStart)
      if (cardDivEnd === -1) { console.log(`SKIP (no closing div): ${full}`); skipped++; continue }

      // Determine the indentation of the card div opening
      const beforeDiv = content.lastIndexOf('\n', cardDivStart)
      const indent = content.slice(beforeDiv + 1, cardDivStart)

      // Build the replacement
      const replacement = `${indent}<ClockComparisonSection primaryTz={${tzVarName}} countryName="${countryName}" />`

      // Replace the card div with the component
      content = content.slice(0, cardDivStart) + replacement + content.slice(cardDivEnd)

      // Add import after 'use client' line
      if (!content.includes("import ClockComparisonSection")) {
        content = content.replace(
          /^'use client'\n/m,
          `'use client'\nimport ClockComparisonSection from '@/components/ClockComparisonSection'\n`
        )
      }

      writeFileSync(full, content, 'utf8')
      updated++
      console.log(`Updated: ${full} [${tzVarName} / ${countryName}]`)
    }
  }
  return { updated, skipped }
}

const result = processDir(APP_DIR)
console.log(`\nDone. Updated: ${result.updated}, Skipped: ${result.skipped}`)
