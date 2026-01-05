'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface TimeZoneFactsProps {
  city: City
}

// DST info by timezone
const dstInfo: Record<string, { hasDST: boolean; period?: string; note?: string }> = {
  'America/New_York': { hasDST: true, period: 'March – November' },
  'America/Los_Angeles': { hasDST: true, period: 'March – November' },
  'America/Chicago': { hasDST: true, period: 'March – November' },
  'America/Denver': { hasDST: true, period: 'March – November' },
  'America/Toronto': { hasDST: true, period: 'March – November' },
  'Europe/London': { hasDST: true, period: 'March – October' },
  'Europe/Paris': { hasDST: true, period: 'March – October' },
  'Europe/Berlin': { hasDST: true, period: 'March – October' },
  'Europe/Amsterdam': { hasDST: true, period: 'March – October' },
  'Australia/Sydney': { hasDST: true, period: 'October – April' },
  'Pacific/Auckland': { hasDST: true, period: 'September – April' },
  // No DST
  'Asia/Tokyo': { hasDST: false },
  'Asia/Shanghai': { hasDST: false },
  'Asia/Singapore': { hasDST: false },
  'Asia/Dubai': { hasDST: false },
  'Asia/Kolkata': { hasDST: false },
  'Asia/Bangkok': { hasDST: false },
  'Asia/Hong_Kong': { hasDST: false },
  'Asia/Seoul': { hasDST: false },
  'Europe/Istanbul': { hasDST: false, note: 'Permanent +3 since 2016' },
  'America/Sao_Paulo': { hasDST: false, note: 'Abolished in 2019' },
}

// Timezone abbreviations
const tzAbbreviations: Record<string, { standard: string; dst?: string; offset: string; dstOffset?: string }> = {
  'America/New_York': { standard: 'EST', dst: 'EDT', offset: 'UTC-5', dstOffset: 'UTC-4' },
  'America/Los_Angeles': { standard: 'PST', dst: 'PDT', offset: 'UTC-8', dstOffset: 'UTC-7' },
  'America/Chicago': { standard: 'CST', dst: 'CDT', offset: 'UTC-6', dstOffset: 'UTC-5' },
  'America/Denver': { standard: 'MST', dst: 'MDT', offset: 'UTC-7', dstOffset: 'UTC-6' },
  'America/Toronto': { standard: 'EST', dst: 'EDT', offset: 'UTC-5', dstOffset: 'UTC-4' },
  'Europe/London': { standard: 'GMT', dst: 'BST', offset: 'UTC+0', dstOffset: 'UTC+1' },
  'Europe/Paris': { standard: 'CET', dst: 'CEST', offset: 'UTC+1', dstOffset: 'UTC+2' },
  'Europe/Berlin': { standard: 'CET', dst: 'CEST', offset: 'UTC+1', dstOffset: 'UTC+2' },
  'Europe/Amsterdam': { standard: 'CET', dst: 'CEST', offset: 'UTC+1', dstOffset: 'UTC+2' },
  'Europe/Istanbul': { standard: 'TRT', offset: 'UTC+3' },
  'Asia/Tokyo': { standard: 'JST', offset: 'UTC+9' },
  'Asia/Shanghai': { standard: 'CST', offset: 'UTC+8' },
  'Asia/Singapore': { standard: 'SGT', offset: 'UTC+8' },
  'Asia/Dubai': { standard: 'GST', offset: 'UTC+4' },
  'Asia/Kolkata': { standard: 'IST', offset: 'UTC+5:30' },
  'Asia/Bangkok': { standard: 'ICT', offset: 'UTC+7' },
  'Asia/Hong_Kong': { standard: 'HKT', offset: 'UTC+8' },
  'Asia/Seoul': { standard: 'KST', offset: 'UTC+9' },
  'Australia/Sydney': { standard: 'AEST', dst: 'AEDT', offset: 'UTC+10', dstOffset: 'UTC+11' },
  'Pacific/Auckland': { standard: 'NZST', dst: 'NZDT', offset: 'UTC+12', dstOffset: 'UTC+13' },
  'America/Sao_Paulo': { standard: 'BRT', offset: 'UTC-3' },
}

export default function TimeZoneFacts({ city }: TimeZoneFactsProps) {
  const { card, text, textMuted, isLight } = useThemeClasses()
  
  const tzInfo = tzAbbreviations[city.timezone]
  const dst = dstInfo[city.timezone]
  
  // Fallback for unknown timezones
  const tzName = tzInfo?.standard || city.timezone.split('/').pop()?.replace('_', ' ')
  const offset = tzInfo?.offset || 'UTC'
  
  return (
    <section className={`rounded-2xl p-5 border ${card}`}>
      <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${text}`}>
        🕐 Time Zone Facts
      </h2>
      
      <ul className={`space-y-3 ${textMuted}`}>
        {/* Timezone Name */}
        <li className="flex items-start gap-3">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
            isLight ? 'bg-blue-100 text-blue-600' : 'bg-blue-900/50 text-blue-400'
          }`}>1</span>
          <div>
            <span className={`font-medium ${text}`}>Time Zone:</span>{' '}
            {tzInfo?.dst ? (
              <span>{tzInfo.standard} / {tzInfo.dst}</span>
            ) : (
              <span>{tzName}</span>
            )}
          </div>
        </li>
        
        {/* UTC Offset */}
        <li className="flex items-start gap-3">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
            isLight ? 'bg-green-100 text-green-600' : 'bg-green-900/50 text-green-400'
          }`}>2</span>
          <div>
            <span className={`font-medium ${text}`}>UTC Offset:</span>{' '}
            {tzInfo?.dstOffset ? (
              <span>{offset} (standard) / {tzInfo.dstOffset} (daylight)</span>
            ) : (
              <span>{offset}</span>
            )}
          </div>
        </li>
        
        {/* DST Info */}
        <li className="flex items-start gap-3">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
            isLight ? 'bg-amber-100 text-amber-600' : 'bg-amber-900/50 text-amber-400'
          }`}>3</span>
          <div>
            <span className={`font-medium ${text}`}>Daylight Saving:</span>{' '}
            {dst?.hasDST ? (
              <span className="text-green-600 dark:text-green-400">
                Yes ({dst.period})
              </span>
            ) : (
              <span className="text-slate-500">
                No {dst?.note ? `– ${dst.note}` : ''}
              </span>
            )}
          </div>
        </li>
        
        {/* IANA Timezone */}
        <li className="flex items-start gap-3">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
            isLight ? 'bg-purple-100 text-purple-600' : 'bg-purple-900/50 text-purple-400'
          }`}>4</span>
          <div>
            <span className={`font-medium ${text}`}>IANA Zone:</span>{' '}
            <code className={`text-sm px-1.5 py-0.5 rounded ${
              isLight ? 'bg-slate-100' : 'bg-slate-800'
            }`}>{city.timezone}</code>
          </div>
        </li>
      </ul>
    </section>
  )
}
