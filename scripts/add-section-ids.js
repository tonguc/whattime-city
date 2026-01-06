#!/usr/bin/env node
/**
 * add-section-ids.js
 * 
 * Utility script to automatically add IDs to h2 headings in guide content files.
 * This enables ScrollFAB section detection.
 * 
 * Usage:
 *   node scripts/add-section-ids.js
 *   node scripts/add-section-ids.js --dry-run
 *   node scripts/add-section-ids.js --file=app/[city]/guide/business-hours/BusinessHoursContent.tsx
 */

const fs = require('fs')
const path = require('path')

// Configuration
const GUIDE_DIR = path.join(__dirname, '..', 'app', '[city]', 'guide')
const DRY_RUN = process.argv.includes('--dry-run')
const SPECIFIC_FILE = process.argv.find(arg => arg.startsWith('--file='))?.split('=')[1]

// Emoji to slug mapping for common emojis
const EMOJI_SLUGS = {
  '🏦': 'bank',
  '🛍️': 'retail',
  '🍽️': 'restaurants',
  '📅': 'holidays',
  '🌍': 'international',
  '❓': 'faq',
  '⚡': 'quick-answer',
  '🏛️': 'government',
  '🎨': 'museum',
  '📞': 'support',
  '💼': 'business',
  '🌅': 'morning',
  '🌙': 'night',
  '✈️': 'travel',
  '🏨': 'hotels',
  '📍': 'location',
  '💡': 'tips',
  '📊': 'data',
  '🔑': 'key-points'
}

/**
 * Convert heading text to a URL-friendly slug
 */
function textToSlug(text) {
  // Remove emojis and get the text
  const cleanText = text
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '')
    .trim()
  
  return cleanText
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 40)
}

/**
 * Extract emoji from text if present
 */
function extractEmoji(text) {
  const match = text.match(/^([\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}])/u)
  return match ? match[1] : null
}

/**
 * Process a single file and add IDs to h2 headings
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  let modified = content
  let changes = []
  
  // Regex to match h2 elements without id
  // Matches: <h2 className={...}> or <h2 className="...">
  const h2Regex = /<h2\s+className=\{[^}]+\}>\s*\n?\s*([^<]+)/g
  const h2RegexSimple = /<h2\s+className="[^"]+">\s*\n?\s*([^<]+)/g
  
  // Find all h2s without id
  const h2Matches = []
  let match
  
  // Check complex className pattern
  while ((match = h2Regex.exec(content)) !== null) {
    if (!content.slice(match.index - 50, match.index).includes(' id=')) {
      h2Matches.push({
        fullMatch: match[0],
        text: match[1].trim(),
        index: match.index
      })
    }
  }
  
  // Check simple className pattern
  while ((match = h2RegexSimple.exec(content)) !== null) {
    if (!content.slice(match.index - 50, match.index).includes(' id=')) {
      h2Matches.push({
        fullMatch: match[0],
        text: match[1].trim(),
        index: match.index
      })
    }
  }
  
  // Process each h2 and add id
  const usedIds = new Set()
  
  for (const h2 of h2Matches.reverse()) { // Reverse to process from end (preserve indices)
    const slug = textToSlug(h2.text)
    
    // Ensure unique ID
    let finalSlug = slug
    let counter = 1
    while (usedIds.has(finalSlug)) {
      finalSlug = `${slug}-${counter}`
      counter++
    }
    usedIds.add(finalSlug)
    
    // Create new h2 with id
    const newH2 = h2.fullMatch.replace('<h2 ', `<h2 id="${finalSlug}" `)
    modified = modified.slice(0, h2.index) + newH2 + modified.slice(h2.index + h2.fullMatch.length)
    
    changes.push({
      text: h2.text.slice(0, 50),
      id: finalSlug
    })
  }
  
  return { modified, changes, original: content }
}

/**
 * Find all content files in guide directories
 */
function findContentFiles(dir) {
  const files = []
  
  function walk(currentDir) {
    const items = fs.readdirSync(currentDir)
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        walk(fullPath)
      } else if (item.endsWith('Content.tsx') && !item.includes('.test.')) {
        files.push(fullPath)
      }
    }
  }
  
  walk(dir)
  return files
}

// Main execution
console.log('🔍 ScrollFAB Section ID Adder\n')
console.log(DRY_RUN ? '📋 DRY RUN MODE - No files will be modified\n' : '')

let filesToProcess = []

if (SPECIFIC_FILE) {
  const fullPath = path.resolve(SPECIFIC_FILE)
  if (fs.existsSync(fullPath)) {
    filesToProcess = [fullPath]
  } else {
    console.error(`❌ File not found: ${SPECIFIC_FILE}`)
    process.exit(1)
  }
} else {
  filesToProcess = findContentFiles(GUIDE_DIR)
}

console.log(`Found ${filesToProcess.length} content file(s)\n`)

let totalChanges = 0

for (const file of filesToProcess) {
  const relativePath = path.relative(process.cwd(), file)
  const { modified, changes, original } = processFile(file)
  
  if (changes.length === 0) {
    console.log(`✅ ${relativePath} - No changes needed`)
    continue
  }
  
  console.log(`📝 ${relativePath}`)
  for (const change of changes) {
    console.log(`   + id="${change.id}" → "${change.text}..."`)
  }
  
  if (!DRY_RUN) {
    fs.writeFileSync(file, modified, 'utf8')
    console.log(`   ✓ File updated`)
  }
  
  totalChanges += changes.length
  console.log('')
}

console.log('─'.repeat(50))
console.log(`\n📊 Summary: ${totalChanges} ID(s) ${DRY_RUN ? 'would be' : ''} added`)

if (DRY_RUN && totalChanges > 0) {
  console.log('\n💡 Run without --dry-run to apply changes')
}
