/**
 * City Display Configuration
 * Merkezi şehir görüntüleme ayarları
 * 
 * Bu dosya UI'da gösterilen şehir bilgilerini tutar:
 * - İkonlar (bayraklar, semboller)
 * - UTC offset değerleri
 * - Ziyaret ikonları (Best Time to Visit için)
 * - Tema renkleri
 */

export interface CityDisplayConfig {
  icon: string          // Ana ikon (bayrak veya sembol)
  utcOffset: number     // UTC'den saat farkı
  visitIcon: string     // "Best Time to Visit" için ikon
  themeColor: string    // Tema rengi (tailwind renk adı)
  displayName: string   // Görüntüleme adı
}

/**
 * Tüm şehirlerin display konfigürasyonları
 * Yeni şehir eklemek için sadece bu listeye ekle!
 */
const CITY_DISPLAY_CONFIG: Record<string, CityDisplayConfig> = {
  'new-york': {
    icon: '🗽',
    utcOffset: -5,
    visitIcon: '🗽',
    themeColor: 'amber',
    displayName: 'NYC'
  },
  'london': {
    icon: '🎡',
    utcOffset: 0,
    visitIcon: '🇬🇧',
    themeColor: 'blue',
    displayName: 'London'
  },
  'tokyo': {
    icon: '🍣',
    utcOffset: 9,
    visitIcon: '🌸',
    themeColor: 'rose',
    displayName: 'Tokyo'
  },
  'dubai': {
    icon: '🏙️',
    utcOffset: 4,
    visitIcon: '☀️',
    themeColor: 'emerald',
    displayName: 'Dubai'
  },
  'singapore': {
    icon: '🦁',
    utcOffset: 8,
    visitIcon: '🇸🇬',
    themeColor: 'red',
    displayName: 'Singapore'
  },
  'paris': {
    icon: '🗼',
    utcOffset: 1,
    visitIcon: '🇫🇷',
    themeColor: 'indigo',
    displayName: 'Paris'
  },
  'sydney': {
    icon: '🦘',
    utcOffset: 10,
    visitIcon: '🏖️',
    themeColor: 'sky',
    displayName: 'Sydney'
  },
}

/**
 * Varsayılan config (listede olmayan şehirler için)
 */
const DEFAULT_CONFIG: CityDisplayConfig = {
  icon: '🌍',
  utcOffset: 0,
  visitIcon: '📍',
  themeColor: 'slate',
  displayName: 'City'
}

/**
 * Şehir slug'ına göre display config döndürür
 * @param citySlug - Şehir slug (örn: 'sydney', 'new-york')
 * @returns CityDisplayConfig
 */
export function getCityDisplayConfig(citySlug: string | undefined | null): CityDisplayConfig {
  if (!citySlug) return DEFAULT_CONFIG
  
  const cleanSlug = citySlug.toLowerCase().trim()
  return CITY_DISPLAY_CONFIG[cleanSlug] || DEFAULT_CONFIG
}

/**
 * Şehrin guide sayfası var mı kontrol eder
 * @param citySlug - Şehir slug
 * @returns boolean
 */
export function hasGuide(citySlug: string): boolean {
  const guideCities = ['new-york', 'london', 'tokyo', 'dubai', 'singapore', 'paris', 'sydney']
  return guideCities.includes(citySlug.toLowerCase())
}

/**
 * Tüm guide şehirlerinin slug'larını döndürür
 * @returns string[]
 */
export function getGuideCities(): string[] {
  return ['new-york', 'london', 'tokyo', 'dubai', 'singapore', 'paris', 'sydney']
}

/**
 * Şehir slug'ına göre görüntüleme adını döndürür (kısa format)
 * @param citySlug - Şehir slug
 * @returns string - Örn: "NYC", "London", "Sydney"
 */
export function getCityDisplayName(citySlug: string): string {
  const config = getCityDisplayConfig(citySlug)
  return config.displayName
}

/**
 * Şehir slug'ına göre ana ikonu döndürür
 * @param citySlug - Şehir slug
 * @returns string - Emoji ikon
 */
export function getCityIcon(citySlug: string): string {
  const config = getCityDisplayConfig(citySlug)
  return config.icon
}

/**
 * Şehir slug'ına göre UTC offset döndürür
 * @param citySlug - Şehir slug
 * @returns number - UTC offset (saat)
 */
export function getCityUtcOffset(citySlug: string): number {
  const config = getCityDisplayConfig(citySlug)
  return config.utcOffset
}
