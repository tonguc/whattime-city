/**
 * Time Utilities
 * Zaman formatlama için yardımcı fonksiyonlar
 * 
 * @example
 * import { formatTime, formatDate } from '@/shared/utils/time'
 */

export interface FormatTimeOptions {
  use12Hour?: boolean
  showSeconds?: boolean
  locale?: string
}

export interface FormatDateOptions {
  weekday?: 'long' | 'short' | 'narrow'
  month?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit'
  day?: 'numeric' | '2-digit'
  year?: 'numeric' | '2-digit'
  locale?: string
}

/**
 * Belirli bir timezone için zamanı formatlar
 * @param date - Date objesi
 * @param timezone - IANA timezone (örn: 'Europe/Istanbul')
 * @param options - Formatlama seçenekleri
 * @returns Formatlanmış zaman string'i (örn: '14:30' veya '2:30 PM')
 */
export function formatTime(
  date: Date, 
  timezone: string, 
  options: FormatTimeOptions = {}
): string {
  const { use12Hour = false, showSeconds = false, locale = 'en-US' } = options
  
  return date.toLocaleTimeString(locale, {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: showSeconds ? '2-digit' : undefined,
    hour12: use12Hour
  })
}

/**
 * Belirli bir timezone için tarihi formatlar
 * @param date - Date objesi
 * @param timezone - IANA timezone (örn: 'Europe/Istanbul')
 * @param options - Formatlama seçenekleri
 * @returns Formatlanmış tarih string'i
 */
export function formatDate(
  date: Date, 
  timezone: string, 
  options: FormatDateOptions = {}
): string {
  const { 
    weekday = 'long', 
    month = 'short', 
    day = 'numeric',
    year,
    locale = 'en-US' 
  } = options
  
  return date.toLocaleDateString(locale, {
    timeZone: timezone,
    weekday,
    month,
    day,
    year
  })
}

/**
 * Timezone kısaltmasını alır (örn: 'EST', 'PST')
 * @param date - Date objesi
 * @param timezone - IANA timezone
 * @returns Timezone kısaltması
 */
export function getTimezoneAbbr(date: Date, timezone: string): string {
  const parts = date.toLocaleTimeString('en-US', {
    timeZone: timezone,
    timeZoneName: 'short'
  }).split(' ')
  
  return parts[parts.length - 1] || ''
}

/**
 * İki timezone arasındaki saat farkını hesaplar
 * @param timezone1 - İlk timezone
 * @param timezone2 - İkinci timezone
 * @returns Saat farkı (örn: '+3', '-5.5')
 */
export function getTimeDifference(timezone1: string, timezone2: string): string {
  const now = new Date()
  
  const time1 = new Date(now.toLocaleString('en-US', { timeZone: timezone1 }))
  const time2 = new Date(now.toLocaleString('en-US', { timeZone: timezone2 }))
  
  const diffMs = time2.getTime() - time1.getTime()
  const diffHours = diffMs / (1000 * 60 * 60)
  
  const sign = diffHours >= 0 ? '+' : ''
  
  // Handle half-hour offsets
  if (diffHours % 1 !== 0) {
    return `${sign}${diffHours.toFixed(1)}`
  }
  
  return `${sign}${diffHours}`
}

/**
 * Verilen timezone için şu anki local time'ı Date objesi olarak döner
 * @param timezone - IANA timezone
 * @returns Timezone'a göre ayarlanmış Date objesi
 */
export function getLocalDate(timezone: string): Date {
  const now = new Date()
  return new Date(now.toLocaleString('en-US', { timeZone: timezone }))
}
