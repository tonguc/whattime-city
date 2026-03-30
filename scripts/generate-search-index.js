/**
 * Search Index Generator
 *
 * Build öncesinde çalışarak hafif bir search-index.json oluşturur.
 * Full cities data (~387KB) yerine sadece arama için gerekli alanları içerir (~15KB).
 *
 * Kullanım: npm run prebuild
 * Çıktı: public/search-index.json
 *
 * NOT: Bu script cities.ts dosyasını regex ile parse eder.
 * Regex tabanlı parse, format değişikliklerinde kırılabilir.
 * Sanity check (minimum şehir sayısı) bu riski azaltır.
 * Gerçek TypeScript import için: npm install --save-dev tsx
 * ve scripti generate-search-index.ts'e dönüştür.
 */

const fs = require('fs')
const path = require('path')

const MINIMUM_EXPECTED_CITIES = 1800 // cities.ts'te bu sayıdan az şehir bulunursa build fail eder

const citiesFilePath = path.join(__dirname, '../data/cities.ts')
const citiesContent = fs.readFileSync(citiesFilePath, 'utf-8')

// Regex ile şehir verilerini çıkar
// Daha geniş whitespace toleransı ile yazılmış — format değişikliklerine karşı daha sağlam
const cityRegex = /slug:\s*['"]([^'"]+)['"]\s*,\s*city:\s*['"]([^'"]+)['"]\s*,\s*timezone:\s*['"]([^'"]+)['"]\s*,\s*country:\s*['"]([^'"]+)['"]\s*,\s*countryCode:\s*['"]([^'"]+)['"]\s*,(?:\s*state:\s*['"]([^'"]+)['"]\s*,\s*stateCode:\s*['"][^'"]+['"]\s*,)?\s*lat:\s*([\d.-]+)\s*,\s*lng:\s*([\d.-]+)\s*,\s*tier:\s*(\d)/g

const searchIndex = []
let match

while ((match = cityRegex.exec(citiesContent)) !== null) {
  const entry = {
    s: match[1],              // slug
    c: match[2],              // city
    z: match[3],              // timezone
    n: match[4],              // country
    cc: match[5],             // countryCode
    lt: parseFloat(match[7]), // lat
    ln: parseFloat(match[8]), // lng
    t: parseInt(match[9])     // tier
  }
  if (match[6]) entry.st = match[6] // state (varsa)
  searchIndex.push(entry)
}

// Sanity check — regex bozulursa build fail eder, sessiz hata olmaz
if (searchIndex.length < MINIMUM_EXPECTED_CITIES) {
  console.error(`\n❌ Search index generation FAILED`)
  console.error(`   Beklenen minimum: ${MINIMUM_EXPECTED_CITIES} şehir`)
  console.error(`   Bulunan: ${searchIndex.length} şehir`)
  console.error(`   cities.ts format değişmiş olabilir — regex'i kontrol et`)
  console.error(`   Dosya: ${citiesFilePath}\n`)
  process.exit(1)
}

console.log(`✅ ${searchIndex.length} şehir indexlendi`)

const fullSize = fs.statSync(citiesFilePath).size
const indexJson = JSON.stringify(searchIndex)
const indexSize = Buffer.byteLength(indexJson, 'utf-8')

console.log(`📊 Orijinal cities.ts: ${(fullSize / 1024).toFixed(1)} KB`)
console.log(`📊 search-index.json: ${(indexSize / 1024).toFixed(1)} KB`)
console.log(`📊 Boyut azalma: ${((1 - indexSize / fullSize) * 100).toFixed(1)}%`)

const outputPath = path.join(__dirname, '../public/search-index.json')
fs.writeFileSync(outputPath, indexJson, 'utf-8')

console.log(`✅ Dosya oluşturuldu: public/search-index.json`)
