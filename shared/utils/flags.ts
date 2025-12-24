/**
 * Flag Utilities
 * Bayrak görselleri için yardımcı fonksiyonlar
 * 
 * @example
 * import { getFlagUrl } from '@/shared/utils/flags'
 * const url = getFlagUrl('TR', 'md')
 */

export type FlagSize = 'sm' | 'md' | 'lg'

const FLAG_SIZE_MAP: Record<FlagSize, number> = {
  sm: 20,
  md: 40,
  lg: 80
}

/**
 * CDN'den bayrak URL'i oluşturur
 * @param countryCode - ISO 3166-1 alpha-2 ülke kodu (örn: 'TR', 'US')
 * @param size - Bayrak boyutu: 'sm' (20px), 'md' (40px), 'lg' (80px)
 * @returns Bayrak görseli URL'i
 */
export function getFlagUrl(countryCode: string, size: FlagSize = 'md'): string {
  const width = FLAG_SIZE_MAP[size]
  return `https://flagcdn.com/w${width}/${countryCode.toLowerCase()}.png`
}

/**
 * Bayrak görseli için alt text oluşturur
 * @param countryName - Ülke adı
 * @returns Alt text
 */
export function getFlagAlt(countryName: string): string {
  return `${countryName} flag`
}
