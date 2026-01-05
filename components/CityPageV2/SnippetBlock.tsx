'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface SnippetBlockProps {
  city: City
}

// DST info
const dstData: Record<string, { hasDST: boolean; standard: string; daylight?: string; stdOffset: string; dstOffset?: string }> = {
  'America/New_York': { hasDST: true, standard: 'EST', daylight: 'EDT', stdOffset: 'UTC−5', dstOffset: 'UTC−4' },
  'America/Los_Angeles': { hasDST: true, standard: 'PST', daylight: 'PDT', stdOffset: 'UTC−8', dstOffset: 'UTC−7' },
  'America/Chicago': { hasDST: true, standard: 'CST', daylight: 'CDT', stdOffset: 'UTC−6', dstOffset: 'UTC−5' },
  'America/Denver': { hasDST: true, standard: 'MST', daylight: 'MDT', stdOffset: 'UTC−7', dstOffset: 'UTC−6' },
  'America/Toronto': { hasDST: true, standard: 'EST', daylight: 'EDT', stdOffset: 'UTC−5', dstOffset: 'UTC−4' },
  'Europe/London': { hasDST: true, standard: 'GMT', daylight: 'BST', stdOffset: 'UTC+0', dstOffset: 'UTC+1' },
  'Europe/Paris': { hasDST: true, standard: 'CET', daylight: 'CEST', stdOffset: 'UTC+1', dstOffset: 'UTC+2' },
  'Europe/Berlin': { hasDST: true, standard: 'CET', daylight: 'CEST', stdOffset: 'UTC+1', dstOffset: 'UTC+2' },
  'Europe/Amsterdam': { hasDST: true, standard: 'CET', daylight: 'CEST', stdOffset: 'UTC+1', dstOffset: 'UTC+2' },
  'Australia/Sydney': { hasDST: true, standard: 'AEST', daylight: 'AEDT', stdOffset: 'UTC+10', dstOffset: 'UTC+11' },
  'Pacific/Auckland': { hasDST: true, standard: 'NZST', daylight: 'NZDT', stdOffset: 'UTC+12', dstOffset: 'UTC+13' },
  // No DST
  'Asia/Tokyo': { hasDST: false, standard: 'JST', stdOffset: 'UTC+9' },
  'Asia/Shanghai': { hasDST: false, standard: 'CST', stdOffset: 'UTC+8' },
  'Asia/Singapore': { hasDST: false, standard: 'SGT', stdOffset: 'UTC+8' },
  'Asia/Dubai': { hasDST: false, standard: 'GST', stdOffset: 'UTC+4' },
  'Asia/Kolkata': { hasDST: false, standard: 'IST', stdOffset: 'UTC+5:30' },
  'Asia/Bangkok': { hasDST: false, standard: 'ICT', stdOffset: 'UTC+7' },
  'Asia/Hong_Kong': { hasDST: false, standard: 'HKT', stdOffset: 'UTC+8' },
  'Asia/Seoul': { hasDST: false, standard: 'KST', stdOffset: 'UTC+9' },
  'Europe/Istanbul': { hasDST: false, standard: 'TRT', stdOffset: 'UTC+3' },
  'America/Sao_Paulo': { hasDST: false, standard: 'BRT', stdOffset: 'UTC−3' },
}

// Timezone full names
const tzNames: Record<string, string> = {
  'America/New_York': 'Eastern Time (ET)',
  'America/Los_Angeles': 'Pacific Time (PT)',
  'America/Chicago': 'Central Time (CT)',
  'America/Denver': 'Mountain Time (MT)',
  'America/Toronto': 'Eastern Time (ET)',
  'Europe/London': 'Greenwich Mean Time (GMT)',
  'Europe/Paris': 'Central European Time (CET)',
  'Europe/Berlin': 'Central European Time (CET)',
  'Europe/Amsterdam': 'Central European Time (CET)',
  'Europe/Istanbul': 'Turkey Time (TRT)',
  'Asia/Tokyo': 'Japan Standard Time (JST)',
  'Asia/Shanghai': 'China Standard Time (CST)',
  'Asia/Singapore': 'Singapore Time (SGT)',
  'Asia/Dubai': 'Gulf Standard Time (GST)',
  'Asia/Kolkata': 'India Standard Time (IST)',
  'Asia/Bangkok': 'Indochina Time (ICT)',
  'Asia/Hong_Kong': 'Hong Kong Time (HKT)',
  'Asia/Seoul': 'Korea Standard Time (KST)',
  'Australia/Sydney': 'Australian Eastern Time (AET)',
  'Pacific/Auckland': 'New Zealand Time (NZT)',
  'America/Sao_Paulo': 'Brasília Time (BRT)',
}

export default function SnippetBlock({ city }: SnippetBlockProps) {
  const { textMuted, isLight } = useThemeClasses()
  
  const dst = dstData[city.timezone]
  const tzName = tzNames[city.timezone] || city.timezone.split('/').pop()?.replace('_', ' ')
  
  // Generate snippet text
  let snippetText: string
  
  if (dst?.hasDST) {
    snippetText = `${city.city} follows ${tzName}. The city observes Daylight Saving Time, switching between ${dst.standard} (${dst.stdOffset}) and ${dst.daylight} (${dst.dstOffset}).`
  } else if (dst) {
    snippetText = `${city.city} follows ${tzName}, which is ${dst.stdOffset}. The city does not observe Daylight Saving Time, so the offset remains constant year-round.`
  } else {
    // Fallback for unknown timezones
    snippetText = `${city.city} is located in the ${city.timezone.replace('_', ' ')} timezone in ${city.country}.`
  }

  return (
    <p className={`text-sm leading-relaxed mt-3 px-1 ${textMuted}`}>
      {snippetText}
    </p>
  )
}
