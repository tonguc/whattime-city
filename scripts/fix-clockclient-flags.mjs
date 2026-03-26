/**
 * ClockClient dosyalarındaki emoji bayrakları <img> tag'ine dönüştürür.
 */
import { readFileSync, writeFileSync } from 'fs'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const APP_DIR = new URL('../app', import.meta.url).pathname

function emojiToCode(emoji) {
  const codePoints = [...emoji].map(c => c.codePointAt(0))
  if (codePoints.length === 2 && codePoints[0] >= 0x1F1E6 && codePoints[0] <= 0x1F1FF) {
    const a = String.fromCharCode(codePoints[0] - 0x1F1E6 + 65)
    const b = String.fromCharCode(codePoints[1] - 0x1F1E6 + 65)
    return a + b
  }
  return null
}

function extractFlags(text) {
  const flags = []
  const chars = [...text]
  for (let i = 0; i < chars.length - 1; i++) {
    const cp1 = chars[i].codePointAt(0)
    const cp2 = chars[i + 1].codePointAt(0)
    if (cp1 >= 0x1F1E6 && cp1 <= 0x1F1FF && cp2 >= 0x1F1E6 && cp2 <= 0x1F1FF) {
      const emoji = chars[i] + chars[i + 1]
      const code = emojiToCode(emoji)
      if (code) flags.push({ emoji, code })
      i++
    }
  }
  return flags
}

let fixed = 0

function processDir(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      processDir(full)
    } else if (entry.endsWith('ClockClient.tsx')) {
      let content = readFileSync(full, 'utf8')

      // Fix bad import position: move getFlagUrl import to AFTER 'use client'
      if (content.startsWith("import { getFlagUrl }")) {
        // Remove it from top, then re-insert after 'use client'
        content = content.replace(/^import \{ getFlagUrl \} from '@\/shared\/utils'\n/, '')
        content = content.replace(
          "'use client'\n",
          "'use client'\nimport { getFlagUrl } from '@/shared/utils'\n"
        )
        writeFileSync(full, content, 'utf8')
        fixed++
        console.log(`Fixed import order: ${full}`)
      }
    }
  }
}

processDir(APP_DIR)
console.log(`\nFixed import order in ${fixed} files`)
