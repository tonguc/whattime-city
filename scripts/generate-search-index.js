/**
 * 🔍 Search Index Generator
 * 
 * Bu script, build öncesinde çalışarak hafif bir search-index.json oluşturur.
 * Full cities data (~387KB) yerine sadece arama için gerekli alanları içerir (~15KB).
 * 
 * Kullanım: npm run prebuild
 * 
 * Çıktı: public/search-index.json
 */

const fs = require('fs')
const path = require('path')

// Cities verisini doğrudan oku (TypeScript dosyasını parse et)
const citiesFilePath = path.join(__dirname, '../data/cities.ts')
const citiesContent = fs.readFileSync(citiesFilePath, 'utf-8')

// Regex ile şehir verilerini çıkar
const cityRegex = /slug:\s*['"]([^'"]+)['"]\s*,\s*city:\s*['"]([^'"]+)['"]\s*,\s*timezone:\s*['"]([^'"]+)['"]\s*,\s*country:\s*['"]([^'"]+)['"]\s*,\s*countryCode:\s*['"]([^'"]+)['"]\s*,(?:\s*state:\s*['"]([^'"]+)['"]\s*,\s*stateCode:\s*['"][^'"]+['"]\s*,)?\s*lat:\s*([\d.-]+)\s*,\s*lng:\s*([\d.-]+)\s*,\s*tier:\s*(\d)/g

const searchIndex = []
let match

while ((match = cityRegex.exec(citiesContent)) !== null) {
  const entry = {
    s: match[1],     // slug (kısa key)
    c: match[2],     // city
    z: match[3],     // timezone
    n: match[4],     // country (nation)
    cc: match[5],    // countryCode
    lt: parseFloat(match[7]),  // lat
    ln: parseFloat(match[8]),  // lng
    t: parseInt(match[9])      // tier
  }
  if (match[6]) entry.st = match[6]  // state (varsa)
  searchIndex.push(entry)
}

console.log(`✅ ${searchIndex.length} şehir bulundu`)

// Boyut karşılaştırması
const fullSize = fs.statSync(citiesFilePath).size
const indexJson = JSON.stringify(searchIndex)
const indexSize = Buffer.byteLength(indexJson, 'utf-8')

console.log(`📊 Orijinal cities.ts: ${(fullSize / 1024).toFixed(1)} KB`)
console.log(`📊 search-index.json: ${(indexSize / 1024).toFixed(1)} KB`)
console.log(`📊 Boyut azalma: ${((1 - indexSize / fullSize) * 100).toFixed(1)}%`)

// public klasörüne yaz
const outputPath = path.join(__dirname, '../public/search-index.json')
fs.writeFileSync(outputPath, indexJson, 'utf-8')

console.log(`\n✅ Dosya oluşturuldu: public/search-index.json`)
