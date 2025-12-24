// GeoJSON URL for world map
export const WORLD_MAP_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// Zoom seviyesine göre hangi tier'ların gösterileceği
// İlk yüklemede yeterli şehir, yakınlaştıkça daha fazla
export const getVisibleTiers = (zoom: number): number[] => {
  if (zoom >= 3) return [1, 2, 3]  // Yakın: tümü (397)
  return [1, 2]                     // Normal: Tier 1+2 (~96 şehir)
}

// Şehir görünürlüğünü kontrol et
export const isCityVisible = (tier: number, zoom: number): boolean => {
  const visibleTiers = getVisibleTiers(zoom)
  return visibleTiers.includes(tier)
}
