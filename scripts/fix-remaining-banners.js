/**
 * Fix remaining 13 non-standard clock files
 * Two patterns:
 * 1. inline-block pattern: <div className={`${card} text-center`}> with inner bg-* pill
 * 2. No comment pattern: directly starts with <section> after <div className="space-y-4">
 */
const fs = require('fs')
const path = require('path')

const FILES = {
  'andorra': { name: 'Andorra', tz: 'Europe/Andorra', tzLabel: 'CET', utc: 'UTC+1 / UTC+2', dst: 'Observes DST', pop: '~80K', color: 'bg-emerald-600' },
  'el-salvador': { name: 'El Salvador', tz: 'America/El_Salvador', tzLabel: 'CST', utc: 'UTC-6', dst: 'No DST', pop: '~6.3M', color: 'bg-blue-700' },
  'equatorial-guinea': { name: 'Equatorial Guinea', tz: 'Africa/Malabo', tzLabel: 'WAT', utc: 'UTC+1', dst: 'No DST', pop: '~1.7M', color: 'bg-emerald-600' },
  'guatemala': { name: 'Guatemala', tz: 'America/Guatemala', tzLabel: 'CST', utc: 'UTC-6', dst: 'No DST', pop: '~18M', color: 'bg-blue-700' },
  'guyana': { name: 'Guyana', tz: 'America/Guyana', tzLabel: 'GYT', utc: 'UTC-4', dst: 'No DST', pop: '~800K', color: 'bg-cyan-600' },
  'honduras': { name: 'Honduras', tz: 'America/Tegucigalpa', tzLabel: 'CST', utc: 'UTC-6', dst: 'No DST', pop: '~10.4M', color: 'bg-blue-700' },
  'turkmenistan': { name: 'Turkmenistan', tz: 'Asia/Ashgabat', tzLabel: 'TMT', utc: 'UTC+5', dst: 'No DST', pop: '~6.5M', color: 'bg-amber-600' },
  'tuvalu': { name: 'Tuvalu', tz: 'Pacific/Funafuti', tzLabel: 'TVT', utc: 'UTC+12', dst: 'No DST', pop: '~11K', color: 'bg-purple-700' },
  'uganda': { name: 'Uganda', tz: 'Africa/Kampala', tzLabel: 'EAT', utc: 'UTC+3', dst: 'No DST', pop: '~47M', color: 'bg-amber-600' },
  'yemen': { name: 'Yemen', tz: 'Asia/Aden', tzLabel: 'AST', utc: 'UTC+3', dst: 'No DST', pop: '~34M', color: 'bg-amber-600' },
  'zambia': { name: 'Zambia', tz: 'Africa/Lusaka', tzLabel: 'CAT', utc: 'UTC+2', dst: 'No DST', pop: '~20M', color: 'bg-emerald-600' },
  'zimbabwe': { name: 'Zimbabwe', tz: 'Africa/Harare', tzLabel: 'CAT', utc: 'UTC+2', dst: 'No DST', pop: '~16.3M', color: 'bg-emerald-600' },
  'dr-congo': { name: 'DR Congo', tz: 'Africa/Kinshasa', tzLabel: 'WAT/CAT', utc: 'UTC+1 / UTC+2', dst: 'No DST', pop: '~102M', color: 'bg-emerald-600' },
}

const appDir = path.join(__dirname, '../app')

for (const [slug, info] of Object.entries(FILES)) {
  const dir = path.join(appDir, slug)
  const files = fs.readdirSync(dir).filter(f => f.endsWith('ClockClient.tsx'))
  if (!files.length) continue
  const filePath = path.join(dir, files[0])
  let content = fs.readFileSync(filePath, 'utf-8')

  if (content.includes('rounded-2xl text-white p-6 text-center')) {
    console.log(`SKIP: ${slug} (already done)`)
    continue
  }

  const banner = `      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center ${info.color}">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in ${info.name}</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">${info.tzLabel} &middot; ${info.utc}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">${info.dst}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ${info.pop}</span>
          </div>
        </div>
      </section>`

  // Pattern 1: inline-block pattern
  // From: <div className={`${card} text-center`}> ... </div>\n\n
  // To the next section (Quick Facts or similar)
  const inlineMatch = content.match(/<div className=\{`\$\{card\} text-center`\}>[\s\S]*?<\/div>\s*<\/div>/)
  if (inlineMatch) {
    content = content.replace(inlineMatch[0], banner.trim())
    fs.writeFileSync(filePath, content, 'utf-8')
    console.log(`✅ ${slug} (inline-block pattern) → ${info.color}`)
    continue
  }

  // Pattern 2: First <section> after <div className="space-y-4">
  // or first div with clock content
  const spaceY4Idx = content.indexOf('<div className="space-y-4">')
  if (spaceY4Idx !== -1) {
    const afterSpaceY4 = content.indexOf('\n', spaceY4Idx) + 1
    // Find the next section/div that contains Quick Facts or similar
    const nextSectionMatch = content.substring(afterSpaceY4).match(/(\s*(?:<\/section>|<\/div>)\s*\n)\s*(?:<section>|<div className=\{card)/m)
    if (nextSectionMatch) {
      const endOfFirstSection = afterSpaceY4 + nextSectionMatch.index + nextSectionMatch[1].length
      content = content.substring(0, afterSpaceY4) + banner + '\n\n' + content.substring(endOfFirstSection)
      fs.writeFileSync(filePath, content, 'utf-8')
      console.log(`✅ ${slug} (section pattern) → ${info.color}`)
      continue
    }
  }

  console.log(`⚠️  Could not fix: ${slug}`)
}
