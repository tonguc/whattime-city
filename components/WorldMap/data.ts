// GeoJSON URL for world map
export const WORLD_MAP_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// Zoom seviyesine göre hangi tier'ların gösterileceği
// Tier 1: Major global cities (always visible)
// Tier 2: Important regional cities (zoom >= 1.5)
// Tier 3: Smaller cities (zoom >= 2.5)
export const getVisibleTiers = (zoom: number): number[] => {
  if (zoom >= 2.5) return [1, 2, 3]
  if (zoom >= 1.5) return [1, 2]
  return [1]
}

// Şehir görünürlüğünü kontrol et
export const isCityVisible = (tier: number, zoom: number): boolean => {
  const visibleTiers = getVisibleTiers(zoom)
  return visibleTiers.includes(tier)
}
