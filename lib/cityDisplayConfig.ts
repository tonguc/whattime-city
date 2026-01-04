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
  // Americas
  'new-york': { icon: '🗽', utcOffset: -5, visitIcon: '🗽', themeColor: 'amber', displayName: 'NYC' },
  'los-angeles': { icon: '🌴', utcOffset: -8, visitIcon: '🎬', themeColor: 'purple', displayName: 'LA' },
  'chicago': { icon: '🌬️', utcOffset: -6, visitIcon: '🏙️', themeColor: 'blue', displayName: 'Chicago' },
  'miami': { icon: '🏖️', utcOffset: -5, visitIcon: '🌴', themeColor: 'cyan', displayName: 'Miami' },
  'san-francisco': { icon: '🌉', utcOffset: -8, visitIcon: '🌁', themeColor: 'orange', displayName: 'SF' },
  'toronto': { icon: '🍁', utcOffset: -5, visitIcon: '🇨🇦', themeColor: 'red', displayName: 'Toronto' },
  'vancouver': { icon: '🏔️', utcOffset: -8, visitIcon: '🇨🇦', themeColor: 'emerald', displayName: 'Vancouver' },
  'mexico-city': { icon: '🇲🇽', utcOffset: -6, visitIcon: '🌮', themeColor: 'green', displayName: 'CDMX' },
  'sao-paulo': { icon: '🇧🇷', utcOffset: -3, visitIcon: '🏙️', themeColor: 'yellow', displayName: 'São Paulo' },
  'buenos-aires': { icon: '🇦🇷', utcOffset: -3, visitIcon: '💃', themeColor: 'sky', displayName: 'Buenos Aires' },
  'rio-de-janeiro': { icon: '🇧🇷', utcOffset: -3, visitIcon: '🏖️', themeColor: 'green', displayName: 'Rio' },
  
  // Europe
  'london': { icon: '🎡', utcOffset: 0, visitIcon: '🇬🇧', themeColor: 'blue', displayName: 'London' },
  'paris': { icon: '🗼', utcOffset: 1, visitIcon: '🇫🇷', themeColor: 'indigo', displayName: 'Paris' },
  'berlin': { icon: '🇩🇪', utcOffset: 1, visitIcon: '🐻', themeColor: 'slate', displayName: 'Berlin' },
  'madrid': { icon: '🇪🇸', utcOffset: 1, visitIcon: '☀️', themeColor: 'orange', displayName: 'Madrid' },
  'barcelona': { icon: '🇪🇸', utcOffset: 1, visitIcon: '⚽', themeColor: 'rose', displayName: 'Barcelona' },
  'amsterdam': { icon: '🇳🇱', utcOffset: 1, visitIcon: '🌷', themeColor: 'orange', displayName: 'Amsterdam' },
  'rome': { icon: '🇮🇹', utcOffset: 1, visitIcon: '🏛️', themeColor: 'amber', displayName: 'Rome' },
  'vienna': { icon: '🇦🇹', utcOffset: 1, visitIcon: '🎵', themeColor: 'red', displayName: 'Vienna' },
  'zurich': { icon: '🇨🇭', utcOffset: 1, visitIcon: '⛰️', themeColor: 'slate', displayName: 'Zurich' },
  'frankfurt': { icon: '🇩🇪', utcOffset: 1, visitIcon: '🏦', themeColor: 'blue', displayName: 'Frankfurt' },
  'lisbon': { icon: '🇵🇹', utcOffset: 0, visitIcon: '🚃', themeColor: 'yellow', displayName: 'Lisbon' },
  'dublin': { icon: '🇮🇪', utcOffset: 0, visitIcon: '☘️', themeColor: 'green', displayName: 'Dublin' },
  'moscow': { icon: '🇷🇺', utcOffset: 3, visitIcon: '🏰', themeColor: 'red', displayName: 'Moscow' },
  'saint-petersburg': { icon: '🇷🇺', utcOffset: 3, visitIcon: '🏛️', themeColor: 'blue', displayName: 'St. Petersburg' },
  'istanbul': { icon: '🇹🇷', utcOffset: 3, visitIcon: '🕌', themeColor: 'red', displayName: 'Istanbul' },
  
  // Asia
  'tokyo': { icon: '🍣', utcOffset: 9, visitIcon: '🌸', themeColor: 'rose', displayName: 'Tokyo' },
  'dubai': { icon: '🏙️', utcOffset: 4, visitIcon: '☀️', themeColor: 'emerald', displayName: 'Dubai' },
  'singapore': { icon: '🦁', utcOffset: 8, visitIcon: '🇸🇬', themeColor: 'red', displayName: 'Singapore' },
  'hong-kong': { icon: '🇭🇰', utcOffset: 8, visitIcon: '🌃', themeColor: 'rose', displayName: 'Hong Kong' },
  'shanghai': { icon: '🇨🇳', utcOffset: 8, visitIcon: '🏙️', themeColor: 'red', displayName: 'Shanghai' },
  'beijing': { icon: '🇨🇳', utcOffset: 8, visitIcon: '🏯', themeColor: 'red', displayName: 'Beijing' },
  'shenzhen': { icon: '🇨🇳', utcOffset: 8, visitIcon: '💻', themeColor: 'blue', displayName: 'Shenzhen' },
  'guangzhou': { icon: '🇨🇳', utcOffset: 8, visitIcon: '🏢', themeColor: 'emerald', displayName: 'Guangzhou' },
  'seoul': { icon: '🇰🇷', utcOffset: 9, visitIcon: '🎎', themeColor: 'blue', displayName: 'Seoul' },
  'mumbai': { icon: '🇮🇳', utcOffset: 5.5, visitIcon: '🎬', themeColor: 'orange', displayName: 'Mumbai' },
  'delhi': { icon: '🇮🇳', utcOffset: 5.5, visitIcon: '🕌', themeColor: 'orange', displayName: 'Delhi' },
  'bangkok': { icon: '🇹🇭', utcOffset: 7, visitIcon: '🛕', themeColor: 'yellow', displayName: 'Bangkok' },
  'jakarta': { icon: '🇮🇩', utcOffset: 7, visitIcon: '🏝️', themeColor: 'red', displayName: 'Jakarta' },
  'kuala-lumpur': { icon: '🇲🇾', utcOffset: 8, visitIcon: '🏙️', themeColor: 'blue', displayName: 'KL' },
  
  // Oceania
  'sydney': { icon: '🦘', utcOffset: 10, visitIcon: '🏖️', themeColor: 'sky', displayName: 'Sydney' },
  'melbourne': { icon: '🇦🇺', utcOffset: 10, visitIcon: '☕', themeColor: 'blue', displayName: 'Melbourne' },
  
  // Africa
  'cairo': { icon: '🇪🇬', utcOffset: 2, visitIcon: '🏛️', themeColor: 'amber', displayName: 'Cairo' },
  'johannesburg': { icon: '🇿🇦', utcOffset: 2, visitIcon: '🦁', themeColor: 'green', displayName: 'Johannesburg' },
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
 * Tüm Tier 1 şehirler (Guide sayfaları olan)
 * cities.ts'den tier: 1 olanlar
 */
const TIER1_CITIES = [
  'new-york', 'london', 'tokyo', 'paris', 'dubai', 'singapore', 'hong-kong', 'shanghai',
  'sydney', 'los-angeles', 'toronto', 'berlin', 'chicago', 'miami', 'san-francisco',
  'vancouver', 'mexico-city', 'sao-paulo', 'buenos-aires', 'madrid', 'barcelona',
  'amsterdam', 'rome', 'vienna', 'zurich', 'frankfurt', 'lisbon', 'dublin', 'moscow',
  'saint-petersburg', 'istanbul', 'mumbai', 'delhi', 'bangkok', 'seoul', 'beijing',
  'shenzhen', 'guangzhou', 'jakarta', 'kuala-lumpur', 'melbourne', 'rio-de-janeiro',
  'cairo', 'johannesburg'
]

/**
 * Şehrin guide sayfası var mı kontrol eder
 * @param citySlug - Şehir slug
 * @returns boolean
 */
export function hasGuide(citySlug: string): boolean {
  return TIER1_CITIES.includes(citySlug.toLowerCase())
}

/**
 * Tüm guide şehirlerinin slug'larını döndürür
 * @returns string[]
 */
export function getGuideCities(): string[] {
  return TIER1_CITIES
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
