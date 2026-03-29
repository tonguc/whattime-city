/**
 * Fix non-standard clock banner patterns in ClockClient files.
 * Replaces the clock section (first card/div after return) with the standard colored banner.
 * Preserves everything else (Quick Facts, content sections, cities).
 */

const fs = require('fs')
const path = require('path')

const TZ_OFFSETS = {
  'Africa/Luanda': 1, 'Europe/Tirane': 1, 'Europe/Andorra': 1,
  'America/Barbados': -4, 'America/Belize': -6, 'Africa/Porto-Novo': 1,
  'Asia/Thimphu': 6, 'Africa/Gaborone': 2, 'Asia/Brunei': 8,
  'Africa/Ouagadougou': 0, 'Africa/Bujumbura': 2, 'Africa/Douala': 1,
  'Atlantic/Cape_Verde': -1, 'Africa/Bangui': 1, 'Africa/Ndjamena': 1,
  'Indian/Comoro': 3, 'Africa/Brazzaville': 1, 'Africa/Kinshasa': 1,
  'Africa/Djibouti': 3, 'America/El_Salvador': -6, 'Africa/Malabo': 1,
  'Africa/Asmara': 3, 'Africa/Mbabane': 2, 'Africa/Libreville': 1,
  'Africa/Banjul': 0, 'America/Guatemala': -6, 'Africa/Bissau': 0,
  'Africa/Conakry': 0, 'America/Guyana': -4, 'America/Tegucigalpa': -6,
  'Africa/Abidjan': 0, 'Pacific/Tarawa': 12, 'Asia/Bishkek': 6,
  'Africa/Maseru': 2, 'Africa/Monrovia': 0, 'Europe/Vaduz': 1,
  'Indian/Antananarivo': 3, 'Africa/Blantyre': 2, 'Africa/Bamako': 0,
  'Pacific/Majuro': 12, 'Africa/Nouakchott': 0, 'Indian/Mauritius': 4,
  'Africa/Maputo': 2, 'Africa/Windhoek': 2, 'Pacific/Nauru': 12,
  'America/Managua': -6, 'Africa/Niamey': 1, 'Pacific/Palau': 9,
  'Africa/Kigali': 2, 'Pacific/Apia': 13, 'Europe/San_Marino': 1,
  'Africa/Sao_Tome': 0, 'Africa/Dakar': 0, 'Indian/Mahe': 4,
  'Africa/Freetown': 0, 'Pacific/Guadalcanal': 11, 'Africa/Mogadishu': 3,
  'Africa/Juba': 2, 'Africa/Khartoum': 2, 'America/Paramaribo': -3,
  'Asia/Dushanbe': 5, 'Asia/Dili': 9, 'Africa/Lome': 0,
  'Pacific/Tongatapu': 13, 'America/Port_of_Spain': -4,
  'Asia/Ashgabat': 5, 'Pacific/Funafuti': 12, 'Africa/Kampala': 3,
  'Pacific/Efate': 11, 'Europe/Vatican': 1, 'Asia/Aden': 3,
  'Africa/Lusaka': 2, 'Africa/Harare': 2, 'Africa/Lubumbashi': 2,
}

function getColorForOffset(offset) {
  if (offset >= -12 && offset <= -5) return 'bg-blue-700'
  if (offset >= -4 && offset <= -1) return 'bg-cyan-600'
  if (offset >= 0 && offset <= 2) return 'bg-emerald-600'
  if (offset >= 2.5 && offset <= 5.75) return 'bg-amber-600'
  if (offset >= 6 && offset <= 9.5) return 'bg-red-700'
  if (offset >= 10 && offset <= 14) return 'bg-purple-700'
  return 'bg-slate-700'
}

// Country display names and timezone info
const COUNTRY_INFO = {
  'albania': { name: 'Albania', tz: 'Europe/Tirane', tzLabel: 'CET', utc: 'UTC+1 / UTC+2', dst: 'Observes DST', pop: '~2.8M' },
  'andorra': { name: 'Andorra', tz: 'Europe/Andorra', tzLabel: 'CET', utc: 'UTC+1 / UTC+2', dst: 'Observes DST', pop: '~80K' },
  'angola': { name: 'Angola', tz: 'Africa/Luanda', tzLabel: 'WAT', utc: 'UTC+1', dst: 'No DST', pop: '~36M' },
  'barbados': { name: 'Barbados', tz: 'America/Barbados', tzLabel: 'AST', utc: 'UTC-4', dst: 'No DST', pop: '~288K' },
  'belize': { name: 'Belize', tz: 'America/Belize', tzLabel: 'CST', utc: 'UTC-6', dst: 'No DST', pop: '~410K' },
  'benin': { name: 'Benin', tz: 'Africa/Porto-Novo', tzLabel: 'WAT', utc: 'UTC+1', dst: 'No DST', pop: '~13M' },
  'bhutan': { name: 'Bhutan', tz: 'Asia/Thimphu', tzLabel: 'BTT', utc: 'UTC+6', dst: 'No DST', pop: '~780K' },
  'botswana': { name: 'Botswana', tz: 'Africa/Gaborone', tzLabel: 'CAT', utc: 'UTC+2', dst: 'No DST', pop: '~2.6M' },
  'brunei': { name: 'Brunei', tz: 'Asia/Brunei', tzLabel: 'BNT', utc: 'UTC+8', dst: 'No DST', pop: '~450K' },
  'burkina-faso': { name: 'Burkina Faso', tz: 'Africa/Ouagadougou', tzLabel: 'GMT', utc: 'UTC+0', dst: 'No DST', pop: '~22M' },
  'burundi': { name: 'Burundi', tz: 'Africa/Bujumbura', tzLabel: 'CAT', utc: 'UTC+2', dst: 'No DST', pop: '~13M' },
  'cameroon': { name: 'Cameroon', tz: 'Africa/Douala', tzLabel: 'WAT', utc: 'UTC+1', dst: 'No DST', pop: '~28M' },
  'cape-verde': { name: 'Cape Verde', tz: 'Atlantic/Cape_Verde', tzLabel: 'CVT', utc: 'UTC-1', dst: 'No DST', pop: '~590K' },
  'central-african-republic': { name: 'Central African Republic', tz: 'Africa/Bangui', tzLabel: 'WAT', utc: 'UTC+1', dst: 'No DST', pop: '~5.5M' },
  'chad': { name: 'Chad', tz: 'Africa/Ndjamena', tzLabel: 'WAT', utc: 'UTC+1', dst: 'No DST', pop: '~18M' },
  'comoros': { name: 'Comoros', tz: 'Indian/Comoro', tzLabel: 'EAT', utc: 'UTC+3', dst: 'No DST', pop: '~900K' },
  'congo': { name: 'Republic of the Congo', tz: 'Africa/Brazzaville', tzLabel: 'WAT', utc: 'UTC+1', dst: 'No DST', pop: '~6M' },
  'djibouti': { name: 'Djibouti', tz: 'Africa/Djibouti', tzLabel: 'EAT', utc: 'UTC+3', dst: 'No DST', pop: '~1.1M' },
  'dr-congo': { name: 'DR Congo', tz: 'Africa/Kinshasa', tzLabel: 'WAT/CAT', utc: 'UTC+1 / UTC+2', dst: 'No DST', pop: '~102M' },
  'el-salvador': { name: 'El Salvador', tz: 'America/El_Salvador', tzLabel: 'CST', utc: 'UTC-6', dst: 'No DST', pop: '~6.3M' },
  'equatorial-guinea': { name: 'Equatorial Guinea', tz: 'Africa/Malabo', tzLabel: 'WAT', utc: 'UTC+1', dst: 'No DST', pop: '~1.7M' },
  'eritrea': { name: 'Eritrea', tz: 'Africa/Asmara', tzLabel: 'EAT', utc: 'UTC+3', dst: 'No DST', pop: '~3.6M' },
  'eswatini': { name: 'Eswatini', tz: 'Africa/Mbabane', tzLabel: 'SAST', utc: 'UTC+2', dst: 'No DST', pop: '~1.2M' },
  'gabon': { name: 'Gabon', tz: 'Africa/Libreville', tzLabel: 'WAT', utc: 'UTC+1', dst: 'No DST', pop: '~2.4M' },
  'gambia': { name: 'The Gambia', tz: 'Africa/Banjul', tzLabel: 'GMT', utc: 'UTC+0', dst: 'No DST', pop: '~2.7M' },
  'guatemala': { name: 'Guatemala', tz: 'America/Guatemala', tzLabel: 'CST', utc: 'UTC-6', dst: 'No DST', pop: '~18M' },
  'guinea-bissau': { name: 'Guinea-Bissau', tz: 'Africa/Bissau', tzLabel: 'GMT', utc: 'UTC+0', dst: 'No DST', pop: '~2.1M' },
  'guinea': { name: 'Guinea', tz: 'Africa/Conakry', tzLabel: 'GMT', utc: 'UTC+0', dst: 'No DST', pop: '~14M' },
  'guyana': { name: 'Guyana', tz: 'America/Guyana', tzLabel: 'GYT', utc: 'UTC-4', dst: 'No DST', pop: '~800K' },
  'honduras': { name: 'Honduras', tz: 'America/Tegucigalpa', tzLabel: 'CST', utc: 'UTC-6', dst: 'No DST', pop: '~10.4M' },
  'ivory-coast': { name: 'Ivory Coast', tz: 'Africa/Abidjan', tzLabel: 'GMT', utc: 'UTC+0', dst: 'No DST', pop: '~28M' },
  'kiribati': { name: 'Kiribati', tz: 'Pacific/Tarawa', tzLabel: 'GILT', utc: 'UTC+12', dst: 'No DST', pop: '~120K' },
  'kyrgyzstan': { name: 'Kyrgyzstan', tz: 'Asia/Bishkek', tzLabel: 'KGT', utc: 'UTC+6', dst: 'No DST', pop: '~7M' },
  'lesotho': { name: 'Lesotho', tz: 'Africa/Maseru', tzLabel: 'SAST', utc: 'UTC+2', dst: 'No DST', pop: '~2.3M' },
  'liberia': { name: 'Liberia', tz: 'Africa/Monrovia', tzLabel: 'GMT', utc: 'UTC+0', dst: 'No DST', pop: '~5.3M' },
  'liechtenstein': { name: 'Liechtenstein', tz: 'Europe/Vaduz', tzLabel: 'CET', utc: 'UTC+1 / UTC+2', dst: 'Observes DST', pop: '~39K' },
  'madagascar': { name: 'Madagascar', tz: 'Indian/Antananarivo', tzLabel: 'EAT', utc: 'UTC+3', dst: 'No DST', pop: '~30M' },
  'malawi': { name: 'Malawi', tz: 'Africa/Blantyre', tzLabel: 'CAT', utc: 'UTC+2', dst: 'No DST', pop: '~20M' },
  'mali': { name: 'Mali', tz: 'Africa/Bamako', tzLabel: 'GMT', utc: 'UTC+0', dst: 'No DST', pop: '~22M' },
  'marshall-islands': { name: 'Marshall Islands', tz: 'Pacific/Majuro', tzLabel: 'MHT', utc: 'UTC+12', dst: 'No DST', pop: '~42K' },
  'mauritania': { name: 'Mauritania', tz: 'Africa/Nouakchott', tzLabel: 'GMT', utc: 'UTC+0', dst: 'No DST', pop: '~4.8M' },
  'mauritius': { name: 'Mauritius', tz: 'Indian/Mauritius', tzLabel: 'MUT', utc: 'UTC+4', dst: 'No DST', pop: '~1.3M' },
  'mozambique': { name: 'Mozambique', tz: 'Africa/Maputo', tzLabel: 'CAT', utc: 'UTC+2', dst: 'No DST', pop: '~33M' },
  'namibia': { name: 'Namibia', tz: 'Africa/Windhoek', tzLabel: 'CAT', utc: 'UTC+2', dst: 'No DST', pop: '~2.6M' },
  'nauru': { name: 'Nauru', tz: 'Pacific/Nauru', tzLabel: 'NRT', utc: 'UTC+12', dst: 'No DST', pop: '~12.5K' },
  'nicaragua': { name: 'Nicaragua', tz: 'America/Managua', tzLabel: 'CST', utc: 'UTC-6', dst: 'No DST', pop: '~7M' },
  'niger': { name: 'Niger', tz: 'Africa/Niamey', tzLabel: 'WAT', utc: 'UTC+1', dst: 'No DST', pop: '~27M' },
  'palau': { name: 'Palau', tz: 'Pacific/Palau', tzLabel: 'PWT', utc: 'UTC+9', dst: 'No DST', pop: '~18K' },
  'rwanda': { name: 'Rwanda', tz: 'Africa/Kigali', tzLabel: 'CAT', utc: 'UTC+2', dst: 'No DST', pop: '~14M' },
  'samoa': { name: 'Samoa', tz: 'Pacific/Apia', tzLabel: 'WST', utc: 'UTC+13', dst: 'No DST', pop: '~220K' },
  'san-marino': { name: 'San Marino', tz: 'Europe/San_Marino', tzLabel: 'CET', utc: 'UTC+1 / UTC+2', dst: 'Observes DST', pop: '~34K' },
  'sao-tome-and-principe': { name: 'São Tomé and Príncipe', tz: 'Africa/Sao_Tome', tzLabel: 'GMT', utc: 'UTC+0', dst: 'No DST', pop: '~225K' },
  'senegal': { name: 'Senegal', tz: 'Africa/Dakar', tzLabel: 'GMT', utc: 'UTC+0', dst: 'No DST', pop: '~18M' },
  'seychelles': { name: 'Seychelles', tz: 'Indian/Mahe', tzLabel: 'SCT', utc: 'UTC+4', dst: 'No DST', pop: '~100K' },
  'sierra-leone': { name: 'Sierra Leone', tz: 'Africa/Freetown', tzLabel: 'GMT', utc: 'UTC+0', dst: 'No DST', pop: '~8.6M' },
  'solomon-islands': { name: 'Solomon Islands', tz: 'Pacific/Guadalcanal', tzLabel: 'SBT', utc: 'UTC+11', dst: 'No DST', pop: '~720K' },
  'somalia': { name: 'Somalia', tz: 'Africa/Mogadishu', tzLabel: 'EAT', utc: 'UTC+3', dst: 'No DST', pop: '~18M' },
  'south-sudan': { name: 'South Sudan', tz: 'Africa/Juba', tzLabel: 'CAT', utc: 'UTC+2', dst: 'No DST', pop: '~11.4M' },
  'sudan': { name: 'Sudan', tz: 'Africa/Khartoum', tzLabel: 'CAT', utc: 'UTC+2', dst: 'No DST', pop: '~48M' },
  'suriname': { name: 'Suriname', tz: 'America/Paramaribo', tzLabel: 'SRT', utc: 'UTC-3', dst: 'No DST', pop: '~620K' },
  'tajikistan': { name: 'Tajikistan', tz: 'Asia/Dushanbe', tzLabel: 'TJT', utc: 'UTC+5', dst: 'No DST', pop: '~10M' },
  'timor-leste': { name: 'Timor-Leste', tz: 'Asia/Dili', tzLabel: 'TLT', utc: 'UTC+9', dst: 'No DST', pop: '~1.3M' },
  'togo': { name: 'Togo', tz: 'Africa/Lome', tzLabel: 'GMT', utc: 'UTC+0', dst: 'No DST', pop: '~9M' },
  'tonga': { name: 'Tonga', tz: 'Pacific/Tongatapu', tzLabel: 'TOT', utc: 'UTC+13', dst: 'No DST', pop: '~107K' },
  'trinidad-and-tobago': { name: 'Trinidad and Tobago', tz: 'America/Port_of_Spain', tzLabel: 'AST', utc: 'UTC-4', dst: 'No DST', pop: '~1.4M' },
  'turkmenistan': { name: 'Turkmenistan', tz: 'Asia/Ashgabat', tzLabel: 'TMT', utc: 'UTC+5', dst: 'No DST', pop: '~6.5M' },
  'tuvalu': { name: 'Tuvalu', tz: 'Pacific/Funafuti', tzLabel: 'TVT', utc: 'UTC+12', dst: 'No DST', pop: '~11K' },
  'uganda': { name: 'Uganda', tz: 'Africa/Kampala', tzLabel: 'EAT', utc: 'UTC+3', dst: 'No DST', pop: '~47M' },
  'vanuatu': { name: 'Vanuatu', tz: 'Pacific/Efate', tzLabel: 'VUT', utc: 'UTC+11', dst: 'No DST', pop: '~320K' },
  'vatican-city': { name: 'Vatican City', tz: 'Europe/Vatican', tzLabel: 'CET', utc: 'UTC+1 / UTC+2', dst: 'Observes DST', pop: '~800' },
  'yemen': { name: 'Yemen', tz: 'Asia/Aden', tzLabel: 'AST', utc: 'UTC+3', dst: 'No DST', pop: '~34M' },
  'zambia': { name: 'Zambia', tz: 'Africa/Lusaka', tzLabel: 'CAT', utc: 'UTC+2', dst: 'No DST', pop: '~20M' },
  'zimbabwe': { name: 'Zimbabwe', tz: 'Africa/Harare', tzLabel: 'CAT', utc: 'UTC+2', dst: 'No DST', pop: '~16.3M' },
}

const appDir = path.join(__dirname, '../app')
let updated = 0

for (const [slug, info] of Object.entries(COUNTRY_INFO)) {
  const dir = path.join(appDir, slug)
  if (!fs.existsSync(dir)) continue

  const files = fs.readdirSync(dir).filter(f => f.endsWith('ClockClient.tsx'))
  if (files.length === 0) continue

  const filePath = path.join(dir, files[0])
  let content = fs.readFileSync(filePath, 'utf-8')

  // Skip if already has standard banner
  if (content.includes('rounded-2xl text-white p-6 text-center')) continue

  const offset = TZ_OFFSETS[info.tz]
  if (offset === undefined) {
    console.log(`⚠️  No offset for ${info.tz} (${slug})`)
    continue
  }
  const color = getColorForOffset(offset)

  // Build the new banner section
  const banner = `      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center ${color}">
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

  // Find and replace the clock section
  // Pattern: from "{/* Live Clock */}" to the next "{/*" or end of first section
  const clockStart = content.indexOf('{/* Live Clock')
  if (clockStart === -1) {
    console.log(`⚠️  No clock comment in ${slug}`)
    continue
  }

  // Find the next section comment or Quick Facts
  const afterClock = content.indexOf('{/*', clockStart + 15)
  if (afterClock === -1) {
    console.log(`⚠️  No section after clock in ${slug}`)
    continue
  }

  // Find the line start of the clock section and the next section
  const beforeClock = content.lastIndexOf('\n', clockStart) + 1
  const beforeNext = content.lastIndexOf('\n', afterClock) + 1

  const newContent = content.substring(0, beforeClock) + banner + '\n\n' + content.substring(beforeNext)
  fs.writeFileSync(filePath, newContent, 'utf-8')
  updated++
  console.log(`✅ ${slug} → ${color}`)
}

console.log(`\n✅ Updated: ${updated} files`)
