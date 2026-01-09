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

// Calculate next DST change
function getNextDSTChange(timezone: string): { days: number; action: 'starts' | 'ends'; date: string } | null {
  const now = new Date()
  const year = now.getFullYear()
  
  // US DST rules (2nd Sunday March, 1st Sunday November)
  if (timezone.startsWith('America/') && timezone !== 'America/Sao_Paulo') {
    const marchSecondSunday = getNthSunday(year, 2, 2) // March, 2nd Sunday
    const novFirstSunday = getNthSunday(year, 10, 1) // November, 1st Sunday
    
    if (now < marchSecondSunday) {
      const days = Math.ceil((marchSecondSunday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      return { days, action: 'starts', date: formatDate(marchSecondSunday) }
    } else if (now < novFirstSunday) {
      const days = Math.ceil((novFirstSunday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      return { days, action: 'ends', date: formatDate(novFirstSunday) }
    } else {
      const nextMarch = getNthSunday(year + 1, 2, 2)
      const days = Math.ceil((nextMarch.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      return { days, action: 'starts', date: formatDate(nextMarch) }
    }
  }
  
  // EU DST rules (last Sunday March, last Sunday October)
  if (timezone.startsWith('Europe/') && timezone !== 'Europe/Istanbul') {
    const marchLastSunday = getLastSunday(year, 2) // March
    const octLastSunday = getLastSunday(year, 9) // October
    
    if (now < marchLastSunday) {
      const days = Math.ceil((marchLastSunday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      return { days, action: 'starts', date: formatDate(marchLastSunday) }
    } else if (now < octLastSunday) {
      const days = Math.ceil((octLastSunday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      return { days, action: 'ends', date: formatDate(octLastSunday) }
    } else {
      const nextMarch = getLastSunday(year + 1, 2)
      const days = Math.ceil((nextMarch.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      return { days, action: 'starts', date: formatDate(nextMarch) }
    }
  }
  
  return null
}

function getNthSunday(year: number, month: number, n: number): Date {
  const date = new Date(year, month, 1)
  const dayOfWeek = date.getDay()
  const firstSunday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek
  return new Date(year, month, firstSunday + (n - 1) * 7)
}

function getLastSunday(year: number, month: number): Date {
  const date = new Date(year, month + 1, 0) // Last day of month
  const dayOfWeek = date.getDay()
  return new Date(year, month, date.getDate() - dayOfWeek)
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function TimeZoneFacts({ city }: TimeZoneFactsProps) {
  const { card, textSection, textBody, textMeta, textNumber, isLight } = useThemeClasses()
  
  const tz = tzInfo[city.timezone] || { abbr: city.timezone.split('/').pop(), offset: 'UTC' }
  const dst = dstInfo[city.timezone] || { hasDST: false }
  const nextDST = dst.hasDST ? getNextDSTChange(city.timezone) : null
  
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
      <h2 className={`mb-4 flex items-center gap-2 ${textSection}`}>
        <span>⏰</span>
        <span>Time Zone Facts</span>
      </h2>
      
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        {/* Left: Fact rows */}
        <div className="space-y-2.5 flex-1">
          {facts.map((fact, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-5 text-center text-base">{fact.icon}</span>
              <span className={`w-14 text-meta ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>{fact.label}</span>
              <span className={`font-semibold ${fact.highlight ? 'text-green-600' : (isLight ? 'text-slate-800' : 'text-white')}`}>
                {fact.value}
              </span>
            </div>
          ))}
          
          {/* IANA Zone */}
          <div className="flex items-center gap-3">
            <span className="w-5 text-center text-base">📋</span>
            <span className={`w-14 text-meta ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>IANA</span>
            <code className={`text-xs px-2 py-1 rounded font-mono ${
              isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
            }`} title="IANA Time Zone Database identifier">
              {city.timezone}
            </code>
          </div>
        </div>
        
        {/* Right: DST Countdown (if applicable) */}
        {nextDST && (
          <div className={`p-3 rounded-xl text-center min-w-[140px] ${
            isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700/50'
          }`}>
            <div className={`text-3xl font-bold tabular-nums ${isLight ? 'text-amber-600' : 'text-amber-400'}`}>
              {nextDST.days}
            </div>
            <div className={`text-meta font-medium ${isLight ? 'text-amber-700' : 'text-amber-300'}`}>
              days until DST {nextDST.action}
            </div>
            <div className={`text-meta mt-1 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
              {nextDST.date}
            </div>
          </div>
        )}
        
        {/* Alternative for no DST: Visual indicator */}
        {!nextDST && !dst.hasDST && (
          <div className={`p-3 rounded-xl text-center min-w-[140px] ${
            isLight ? 'bg-slate-50 border border-slate-200' : 'bg-slate-800/50 border border-slate-700'
          }`}>
            <div className="text-2xl">🌍</div>
            <div className={`text-meta font-medium mt-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              No DST changes
            </div>
            <div className={`text-meta ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
              Time stays constant
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom: EEAT + Summary */}
      <div className={`mt-4 pt-3 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
        <p className={`text-meta ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          {city.city} follows {tz.abbr.split('/')[0]} and {dst.hasDST ? 'observes' : 'does not observe'} Daylight Saving Time.
        </p>
        <p className={`text-micro mt-1.5 flex items-center gap-1.5 ${
          isLight ? 'text-slate-400' : 'text-slate-500'
        }`}>
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span>Data: <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener" className="underline hover:no-underline">IANA Time Zone Database</a></span>
        </p>
      </div>
    </section>
  )
}
