/**
 * Remove ClockComparisonSection import + JSX from all *ClockClient.tsx files.
 * CountryFactsSection now owns this section.
 * Run: node scripts/strip-clock-comparison.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const appDir = path.join(ROOT, 'app')

let updated = 0, skipped = 0

for (const dir of fs.readdirSync(appDir)) {
  const dirPath = path.join(appDir, dir)
  if (!fs.statSync(dirPath).isDirectory()) continue
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('ClockClient.tsx'))
  for (const file of files) {
    const filePath = path.join(appDir, dir, file)
    let src = fs.readFileSync(filePath, 'utf8')

    if (!src.includes('ClockComparisonSection')) { skipped++; continue }

    // Remove import line
    src = src.replace(/^import ClockComparisonSection from '@\/components\/ClockComparisonSection'\n?/m, '')

    // Remove <ClockComparisonSection ... /> — both self-closing and with newlines
    // Handles:  <ClockComparisonSection primaryTz={...} countryName="..." />
    src = src.replace(/\s*<ClockComparisonSection[^/]*(\/\s*>|\/>\s*)/g, '')

    fs.writeFileSync(filePath, src)
    console.log(`  ✓ stripped: app/${dir}/${file}`)
    updated++
  }
}

console.log(`\nDone! Stripped ${updated} files, skipped ${skipped} (no ClockComparisonSection).`)
