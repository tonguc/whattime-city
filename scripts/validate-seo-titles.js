/**
 * validate-seo-titles.js
 * Prebuild validator — data/seo/*.json dosyalarında seo_title ≤44 char kuralını enforce eder.
 * Template suffix " | whattime.city" = 16 char → toplam ≤60 char hedef.
 * 44 char limit = toplam 60 char içinde güvenli alan.
 */

const fs = require('fs')
const path = require('path')

const SEO_DIR = path.join(__dirname, '..', 'data', 'seo')
const MAX_TITLE_LENGTH = 44

const files = fs.readdirSync(SEO_DIR).filter(f => f.endsWith('.json'))

let errorCount = 0
const errors = []

for (const file of files) {
  const filePath = path.join(SEO_DIR, file)
  let data

  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch (e) {
    errors.push(`  ✗ ${file}: JSON parse hatası — ${e.message}`)
    errorCount++
    continue
  }

  if (!data.seo_title) continue

  const titleLength = data.seo_title.length
  if (titleLength > MAX_TITLE_LENGTH) {
    errors.push(`  ✗ ${file}: seo_title ${titleLength} char (max ${MAX_TITLE_LENGTH}) — "${data.seo_title}"`)
    errorCount++
  }
}

if (errorCount > 0) {
  console.error(`\n❌ SEO Title Validation FAILED — ${errorCount} dosyada sorun:\n`)
  errors.forEach(e => console.error(e))
  console.error(`\nKural: seo_title ≤${MAX_TITLE_LENGTH} char (template " | whattime.city" 16 char ekler → toplam ≤60)\n`)
  process.exit(1)
} else {
  console.log(`✅ SEO title validation passed — ${files.length} dosya kontrol edildi, tüm başlıklar ≤${MAX_TITLE_LENGTH} char`)
}
