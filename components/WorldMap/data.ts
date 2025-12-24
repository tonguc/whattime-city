// GeoJSON URL for world map
export const WORLD_MAP_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// Zoom seviyesine göre hangi tier'ların gösterileceği
// ÇOK TEMİZ görünüm için yüksek eşikler
export const getVisibleTiers = (zoom: number): number[] => {
  if (zoom >= 6) return [1, 2, 3]  // Çok yakın: tümü
  if (zoom >= 4) return [1, 2]     // Yakın: tier 1+2
  return [1]                        // Normal: sadece tier 1 (~15 şehir)
}

// Şehir görünürlüğünü kontrol et
export const isCityVisible = (tier: number, zoom: number): boolean => {
  const visibleTiers = getVisibleTiers(zoom)
  return visibleTiers.includes(tier)
}
