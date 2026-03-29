/**
 * Update all ClockClient.tsx files to use timezone-based colors
 *
 * Color scheme (6 groups by UTC offset):
 * UTC -12 → -5  : bg-blue-700    (Americas)
 * UTC -4  → -1  : bg-cyan-600    (Caribbean, Atlantic)
 * UTC  0  → +2  : bg-emerald-600 (Europe, Africa)
 * UTC +3  → +5:30: bg-amber-600  (Middle East, South Asia)
 * UTC +6  → +9  : bg-red-700     (East Asia)
 * UTC +10 → +14 : bg-purple-700  (Oceania, Pacific)
 */

const fs = require('fs')
const path = require('path')

// Timezone to UTC offset mapping (standard time)
const TZ_OFFSETS = {
  // UTC -12 to -5 → bg-blue-700
  'Pacific/Honolulu': -10, 'America/Adak': -10, 'America/Anchorage': -9,
  'America/Los_Angeles': -8, 'America/Phoenix': -7, 'America/Denver': -7,
  'America/Chicago': -6, 'America/Mexico_City': -6, 'America/Costa_Rica': -6,
  'America/Guatemala': -6, 'America/El_Salvador': -6, 'America/Tegucigalpa': -6,
  'America/Managua': -6, 'America/New_York': -5, 'America/Toronto': -5,
  'America/Detroit': -5, 'America/Indiana/Indianapolis': -5,
  'America/Havana': -5, 'America/Bogota': -5, 'America/Lima': -5,
  'America/Panama': -5, 'America/Jamaica': -5, 'America/Port-au-Prince': -5,
  'America/Guayaquil': -5, 'America/Nassau': -5, 'America/Belize': -6,

  // UTC -4 to -1 → bg-cyan-600
  'America/Caracas': -4, 'America/La_Paz': -4, 'America/Santo_Domingo': -4,
  'America/Puerto_Rico': -4, 'America/Port_of_Spain': -4, 'America/Barbados': -4,
  'America/Guyana': -4, 'America/Santiago': -4, 'America/Asuncion': -4,
  'America/Sao_Paulo': -3, 'America/Argentina/Buenos_Aires': -3,
  'America/Montevideo': -3, 'America/Paramaribo': -3, 'America/Cayenne': -3,
  'Atlantic/Cape_Verde': -1,

  // UTC 0 to +2 → bg-emerald-600
  'Europe/London': 0, 'Europe/Dublin': 0, 'Atlantic/Reykjavik': 0,
  'Africa/Accra': 0, 'Africa/Abidjan': 0, 'Africa/Monrovia': 0,
  'Africa/Freetown': 0, 'Africa/Dakar': 0, 'Africa/Bamako': 0,
  'Africa/Conakry': 0, 'Africa/Bissau': 0, 'Africa/Nouakchott': 0,
  'Africa/Ouagadougou': 0, 'Africa/Lome': 0, 'Africa/Sao_Tome': 0,
  'Europe/Lisbon': 0, 'Africa/Casablanca': 0,
  'Europe/Paris': 1, 'Europe/Berlin': 1, 'Europe/Rome': 1,
  'Europe/Madrid': 1, 'Europe/Brussels': 1, 'Europe/Amsterdam': 1,
  'Europe/Vienna': 1, 'Europe/Zurich': 1, 'Europe/Stockholm': 1,
  'Europe/Oslo': 1, 'Europe/Copenhagen': 1, 'Europe/Warsaw': 1,
  'Europe/Prague': 1, 'Europe/Budapest': 1, 'Europe/Belgrade': 1,
  'Europe/Zagreb': 1, 'Europe/Bratislava': 1, 'Europe/Ljubljana': 1,
  'Europe/Sarajevo': 1, 'Europe/Skopje': 1, 'Europe/Podgorica': 1,
  'Europe/Tirane': 1, 'Europe/Luxembourg': 1, 'Europe/Malta': 1,
  'Europe/Monaco': 1, 'Europe/Andorra': 1, 'Europe/San_Marino': 1,
  'Europe/Vatican': 1, 'Europe/Vaduz': 1,
  'Africa/Lagos': 1, 'Africa/Douala': 1, 'Africa/Libreville': 1,
  'Africa/Brazzaville': 1, 'Africa/Kinshasa': 1, 'Africa/Bangui': 1,
  'Africa/Ndjamena': 1, 'Africa/Niamey': 1, 'Africa/Porto-Novo': 1,
  'Africa/Malabo': 1, 'Africa/Luanda': 1, 'Africa/Algiers': 1,
  'Africa/Tunis': 1,
  'Europe/Athens': 2, 'Europe/Bucharest': 2, 'Europe/Sofia': 2,
  'Europe/Helsinki': 2, 'Europe/Tallinn': 2, 'Europe/Riga': 2,
  'Europe/Vilnius': 2, 'Europe/Kyiv': 2, 'Europe/Chisinau': 2,
  'Europe/Istanbul': 2, // Turkey is actually +3 but uses Europe/Istanbul
  'Asia/Nicosia': 2,
  'Africa/Cairo': 2, 'Africa/Tripoli': 2, 'Africa/Johannesburg': 2,
  'Africa/Harare': 2, 'Africa/Lusaka': 2, 'Africa/Maputo': 2,
  'Africa/Blantyre': 2, 'Africa/Kigali': 2, 'Africa/Bujumbura': 2,
  'Africa/Lubumbashi': 2, 'Africa/Windhoek': 2, 'Africa/Mbabane': 2,
  'Africa/Maseru': 2, 'Africa/Gaborone': 2, 'Africa/Khartoum': 2,
  'Africa/Juba': 2,

  // UTC +3 to +5:30 → bg-amber-600
  'Europe/Moscow': 3, 'Europe/Minsk': 3, 'Asia/Baghdad': 3,
  'Asia/Riyadh': 3, 'Asia/Kuwait': 3, 'Asia/Qatar': 3,
  'Asia/Bahrain': 3, 'Asia/Aden': 3, 'Asia/Amman': 3,
  'Asia/Beirut': 3, 'Asia/Damascus': 3, 'Asia/Jerusalem': 3,
  'Asia/Gaza': 3, 'Africa/Nairobi': 3, 'Africa/Dar_es_Salaam': 3,
  'Africa/Addis_Ababa': 3, 'Africa/Kampala': 3, 'Africa/Mogadishu': 3,
  'Africa/Asmara': 3, 'Africa/Djibouti': 3, 'Indian/Comoro': 3,
  'Indian/Antananarivo': 3, 'Asia/Tbilisi': 4, 'Asia/Dubai': 4,
  'Asia/Muscat': 4, 'Indian/Mauritius': 4, 'Indian/Mahe': 4,
  'Asia/Baku': 4, 'Asia/Yerevan': 4,
  'Asia/Tehran': 3.5,
  'Asia/Kabul': 4.5,
  'Asia/Karachi': 5, 'Asia/Tashkent': 5, 'Asia/Dushanbe': 5,
  'Asia/Ashgabat': 5, 'Indian/Maldives': 5,
  'Asia/Kolkata': 5.5, 'Asia/Colombo': 5.5,
  'Asia/Kathmandu': 5.75,

  // UTC +6 to +9 → bg-red-700
  'Asia/Dhaka': 6, 'Asia/Almaty': 6, 'Asia/Bishkek': 6,
  'Asia/Thimphu': 6, 'Asia/Yangon': 6.5,
  'Asia/Bangkok': 7, 'Asia/Jakarta': 7, 'Asia/Ho_Chi_Minh': 7,
  'Asia/Phnom_Penh': 7, 'Asia/Vientiane': 7,
  'Asia/Shanghai': 8, 'Asia/Hong_Kong': 8, 'Asia/Singapore': 8,
  'Asia/Kuala_Lumpur': 8, 'Asia/Taipei': 8, 'Asia/Manila': 8,
  'Asia/Brunei': 8, 'Asia/Makassar': 8, 'Asia/Ulaanbaatar': 8,
  'Asia/Tokyo': 9, 'Asia/Seoul': 9, 'Asia/Dili': 9,
  'Pacific/Palau': 9, 'Asia/Jayapura': 9,

  // UTC +10 to +14 → bg-purple-700
  'Australia/Sydney': 10, 'Australia/Melbourne': 10, 'Australia/Brisbane': 10,
  'Australia/Hobart': 10, 'Australia/Perth': 8, // Perth is +8, so red-700
  'Australia/Adelaide': 9.5, // +9.5, borderline - use purple
  'Australia/Darwin': 9.5,
  'Pacific/Port_Moresby': 10, 'Pacific/Chuuk': 10, 'Pacific/Guam': 10,
  'Pacific/Guadalcanal': 11, 'Pacific/Noumea': 11, 'Pacific/Efate': 11,
  'Pacific/Fiji': 12, 'Pacific/Auckland': 12, 'Pacific/Funafuti': 12,
  'Pacific/Majuro': 12, 'Pacific/Nauru': 12, 'Pacific/Tarawa': 12,
  'Pacific/Tongatapu': 13, 'Pacific/Apia': 13, 'Pacific/Kiritimati': 14,

  // Special
  'Etc/GMT': 0, 'UTC': 0,
}

// Turkey is actually +3 permanently
TZ_OFFSETS['Europe/Istanbul'] = 3

function getColorForOffset(offset) {
  if (offset >= -12 && offset <= -5) return 'bg-blue-700'
  if (offset >= -4 && offset <= -1) return 'bg-cyan-600'
  if (offset >= 0 && offset <= 2) return 'bg-emerald-600'
  if (offset >= 2.5 && offset <= 5.75) return 'bg-amber-600'
  if (offset >= 6 && offset <= 9.5) return 'bg-red-700'
  if (offset >= 10 && offset <= 14) return 'bg-purple-700'
  return 'bg-slate-700' // fallback
}

// Find all ClockClient files
const appDir = path.join(__dirname, '../app')
let updated = 0
let skipped = 0
let errors = []

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      processDir(fullPath)
    } else if (entry.name.endsWith('ClockClient.tsx')) {
      processFile(fullPath)
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')

  // Extract timezone from the file
  const tzMatch = content.match(/timeZone:\s*['"]([^'"]+)['"]/)
  if (!tzMatch) {
    skipped++
    return
  }

  const tz = tzMatch[1]
  const offset = TZ_OFFSETS[tz]

  if (offset === undefined) {
    errors.push(`Unknown TZ: ${tz} in ${path.relative(appDir, filePath)}`)
    return
  }

  const newColor = getColorForOffset(offset)

  // Pattern 1: Standard banner - "rounded-2xl text-white p-6 text-center bg-XXXX"
  const pattern1 = /rounded-2xl text-white p-6 text-center bg-\w+-\d+/g
  // Pattern 2: Some files use just the bg class on the banner div

  let changed = false

  if (pattern1.test(content)) {
    content = content.replace(pattern1, `rounded-2xl text-white p-6 text-center ${newColor}`)
    changed = true
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8')
    updated++
  } else {
    // Check if it's a non-standard pattern - these files use card class for the clock section
    // We need to check if it has a bg-slate-800 or similar in a different pattern
    skipped++
  }
}

processDir(appDir)

console.log(`✅ Updated: ${updated} files`)
console.log(`⏭️  Skipped: ${skipped} files (no standard banner pattern)`)
if (errors.length > 0) {
  console.log(`\n❌ Errors:`)
  errors.forEach(e => console.log(`  ${e}`))
}
