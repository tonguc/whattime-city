/**
 * Hub page'lerdeki hardcoded light-mode class'larına dark: varyantları ekler.
 * app/[slug]/page.tsx dosyalarını günceller — US state'ler dahil tüm hub'lar.
 */
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { readdirSync, statSync } from 'fs'

const APP_DIR = join(process.cwd(), 'app')

// Güncellenecek string eşlemeleri
const REPLACEMENTS = [
  // const card tanımı
  [
    `const card = 'rounded-2xl border border-slate-200 bg-white p-6'`,
    `const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'`
  ],
  // FAQ bölümü — section wrapper
  [
    `<section className="mt-4 mb-4"><div className={card}>`,
    `<section className="mt-4 mb-4"><div className={card}>`  // card zaten güncellendi
  ],
  // FAQ iç kartlar
  [
    `className="rounded-xl border border-slate-100 bg-slate-50 p-4"`,
    `className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"`
  ],
  // FAQ soru metni
  [
    `className="font-medium text-slate-800 text-sm mb-1"`,
    `className="font-medium text-slate-800 dark:text-white text-sm mb-1"`
  ],
  // FAQ cevap metni
  [
    `className="text-slate-600 text-sm leading-relaxed"`,
    `className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed"`
  ],
  // Bölüm başlıkları (FAQ + links)
  [
    `className="text-xl font-semibold text-slate-800 mb-4"`,
    `className="text-xl font-semibold text-slate-800 dark:text-white mb-4"`
  ],
  // Related links
  [
    `className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center"`,
    `className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center"`
  ],
  // Footer
  [
    `className="text-xs text-slate-400 text-center mt-2 mb-4"`,
    `className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4"`
  ],
  // subtitle (timezone subtitle)
  [
    `className="text-sm text-slate-500 mb-6"`,
    `className="text-sm text-slate-500 dark:text-slate-400 mb-6"`
  ],
]

// Tüm hub page'leri bul
const hubDirs = readdirSync(APP_DIR).filter(name => {
  const full = join(APP_DIR, name)
  return statSync(full).isDirectory() &&
    !name.startsWith('[') &&
    !name.startsWith('(') &&
    !['country', 'api', 'city', 'guides', 'tools', 'blog', 'map', 'alarm',
      'about', 'contact', 'privacy', 'iletisim', 'widget', 'embed', 'time',
      'meeting', 'meet', 'converter', 'cities', 'event-time', 'area-code',
      'flight-time', 'flight-times', 'military-time', 'jet-lag', 'jet-lag-advisor',
      'world-alarm', 'daylight-saving-time', 'time-converter', 'meeting-planner',
    ].includes(name)
})

let updated = 0
let unchanged = 0

for (const dir of hubDirs) {
  const filePath = join(APP_DIR, dir, 'page.tsx')
  let src
  try { src = readFileSync(filePath, 'utf8') } catch { continue }

  let newSrc = src
  for (const [from, to] of REPLACEMENTS) {
    if (from !== to) newSrc = newSrc.replaceAll(from, to)
  }

  if (newSrc !== src) {
    writeFileSync(filePath, newSrc, 'utf8')
    console.log(`  UPDATED: ${dir}/page.tsx`)
    updated++
  } else {
    unchanged++
  }
}

console.log(`\nDone. Updated: ${updated}, Unchanged: ${unchanged}`)
