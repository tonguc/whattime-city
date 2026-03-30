/**
 * Site-wide constants
 * SITE_URL kullanımı: hardcoded URL'leri ortadan kaldırır.
 * Tüm canonical, OG, schema URL'leri bu sabitten türetilmeli.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://whattime.city'
