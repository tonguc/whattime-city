/**
 * String Utilities
 * String manipülasyonu için yardımcı fonksiyonlar
 * 
 * @example
 * import { slugify, capitalize } from '@/shared/utils/string'
 */

/**
 * String'i URL-safe slug'a çevirir
 * @param text - Dönüştürülecek text
 * @returns URL-safe slug (örn: 'New York' -> 'new-york')
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')     // Özel karakterleri kaldır
    .replace(/[\s_-]+/g, '-')     // Boşluk ve alt çizgileri tire yap
    .replace(/^-+|-+$/g, '')      // Baş ve sondaki tireleri kaldır
}

/**
 * String'in ilk harfini büyük yapar
 * @param text - Dönüştürülecek text
 * @returns İlk harfi büyük string
 */
export function capitalize(text: string): string {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/**
 * Her kelimenin ilk harfini büyük yapar (Title Case)
 * @param text - Dönüştürülecek text
 * @returns Title case string (örn: 'hello world' -> 'Hello World')
 */
export function titleCase(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => capitalize(word))
    .join(' ')
}

/**
 * String'i belirli uzunlukta keser ve ellipsis ekler
 * @param text - Kesilecek text
 * @param maxLength - Maximum uzunluk
 * @returns Kesilmiş string
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 3) + '...'
}

/**
 * Sayıyı formatlar (1000 -> '1K', 1000000 -> '1M')
 * @param num - Formatlanacak sayı
 * @returns Formatlanmış string
 */
export function formatNumber(num: number): string {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B'
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return num.toString()
}
