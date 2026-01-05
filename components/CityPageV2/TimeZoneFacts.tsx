'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface TimeZoneFactsProps {
  city: City
}

// DST info by timezone
const dstInfo: Record<string, { hasDST: boolean; period?: string; note?: string }> = {
  'America/New_York': { hasDST: true, period: 'Mar–Nov' },
  'America/Los_Angeles': { hasDST: true, period: 'Mar–Nov' },
  'America/Chicago': { hasDST: true, period: 'Mar–Nov' },
  'America/Denver': { hasDST: true, period: 'Mar–Nov' },
  'America/Toronto': { hasDST: true, period: 'Mar–Nov' },
  'Europe/London': { hasDST: true, period: 'Mar–Oct' },
  'Europe/Paris': { hasDST: true, period: 'Mar–Oct' },
  'Europe/Berlin': { hasDST: true, period: 'Mar–Oct' },
  'Europe/Amsterdam': { hasDST: true, period: 'Mar–Oct' },
  'Australia/Sydney': { hasDST: true, period: 'Oct–Apr' },
  'Pacific/Auckland': { hasDST: true, period: 'Sep–Apr' },
  'Asia/Tokyo': { hasDST: false },
  'Asia/Shanghai': { hasDST: false },
  'Asia/Singapore': { hasDST: false },
  'Asia/Dubai': { hasDST: false },
  'Asia/Kolkata': { hasDST: false },
  'Asia/Bangkok': { hasDST: false },
  'Asia/Hong_Kong': { hasDST: false },
  'Asia/Seoul': { hasDST: false },
  'Europe/Istanbul': { hasDST: false, note: 'UTC+3 permanent' },
  'America/Sao_Paulo': { hasDST: false, note: 'No DST since 2019' },
}

// Timezone abbreviations
const tzInfo: Record<string, { abbr: string; offset: string }> = {
  'America/New_York': { abbr: 'EST/EDT', offset: 'UTC-5/-4' },
  'America/Los_Angeles': { abbr: 'PST/PDT', offset: 'UTC-8/-7' },
  'America/Chicago': { abbr: 'CST/CDT', offset: 'UTC-6/-5' },
  'America/Denver': { abbr: 'MST/MDT', offset: 'UTC-7/-6' },
  'America/Toronto': { abbr: 'EST/EDT', offset: 'UTC-5/-4' },
  'Europe/London': { abbr: 'GMT/BST', offset: 'UTC+0/+1' },
  'Europe/Paris': { abbr: 'CET/CEST', offset: 'UTC+1/+2' },
  'Europe/Berlin': { abbr: 'CET/CEST', offset: 'UTC+1/+2' },
  'Europe/Amsterdam': { abbr: 'CET/CEST', offset: 'UTC+1/+2' },
  'Europe/Istanbul': { abbr: 'TRT', offset: 'UTC+3' },
  'Asia/Tokyo': { abbr: 'JST', offset: 'UTC+9' },
  'Asia/Shanghai': { abbr: 'CST', offset: 'UTC+8' },
  'Asia/Singapore': { abbr: 'SGT', offset: 'UTC+8' },
  'Asia/Dubai': { abbr: 'GST', offset: 'UTC+4' },
  'Asia/Kolkata': { abbr: 'IST', offset: 'UTC+5:30' },
  'Asia/Bangkok': { abbr: 'ICT', offset: 'UTC+7' },
  'Asia/Hong_Kong': { abbr: 'HKT', offset: 'UTC+8' },
  'Asia/Seoul': { abbr: 'KST', offset: 'UTC+9' },
  'Australia/Sydney': { abbr: 'AEST/AEDT', offset: 'UTC+10/+11' },
  'Pacific/Auckland': { abbr: 'NZST/NZDT', offset: 'UTC+12/+13' },
  'America/Sao_Paulo': { abbr: 'BRT', offset: 'UTC-3' },
}

export default function TimeZoneFacts({ city }: TimeZoneFactsProps) {
  const { card, text, textMuted, isLight } = useThemeClasses()
  
  const tz = tzInfo[city.timezone] || { abbr: city.timezone.split('/').pop(), offset: 'UTC' }
  const dst = dstInfo[city.timezone] || { hasDST: false }
  
  const facts = [
    { icon: '🕐', label: 'Zone', value: tz.abbr },
    { icon: '🌐', label: 'Offset', value: tz.offset },
    { 
      icon: '🔄', 
      label: 'DST', 
      value: dst.hasDST ? `Yes (${dst.period})` : (dst.note || 'No'),
      highlight: dst.hasDST
    },
  ]

  return (
    <section className={`rounded-2xl p-4 border ${card}`}>
      <h2 className={`text-base font-semibold mb-3 flex items-center gap-2 ${text}`}>
        ⏰ Time Zone Facts
      </h2>
      
      {/* Compact fact rows */}
      <div className="space-y-2">
        {facts.map((fact, i) => (
          <div key={i} className={`flex items-center gap-3 text-sm ${textMuted}`}>
            <span className="w-5 text-center">{fact.icon}</span>
            <span className={`w-12 ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>{fact.label}</span>
            <span className={`font-medium ${fact.highlight ? 'text-green-600' : text}`}>
              {fact.value}
            </span>
          </div>
        ))}
        
        {/* IANA Zone - with tooltip hint */}
        <div className={`flex items-center gap-3 text-sm ${textMuted}`}>
          <span className="w-5 text-center">📋</span>
          <span className={`w-12 ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>IANA</span>
          <code className={`text-xs px-1.5 py-0.5 rounded font-mono ${
            isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
          }`} title="IANA Time Zone Database identifier">
            {city.timezone}
          </code>
        </div>
      </div>
      
      {/* EEAT - Data Source (moved here from footer) */}
      <p className={`mt-3 pt-3 border-t text-xs flex items-center gap-1.5 ${
        isLight ? 'border-slate-200 text-slate-400' : 'border-slate-700 text-slate-500'
      }`}>
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <span>Data: <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener" className="underline hover:no-underline">IANA Time Zone Database</a></span>
      </p>
    </section>
  )
}
