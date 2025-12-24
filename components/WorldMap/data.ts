// Haritada gösterilecek şehir slug'ları
// Gerçek lat/lng koordinatları cities.ts'den alınır
export const mapCitySlugs: string[] = [
  // North America
  'new-york', 'los-angeles', 'chicago', 'miami', 'toronto', 
  'vancouver', 'mexico-city', 'houston', 'san-francisco', 'seattle',
  
  // South America
  'sao-paulo', 'buenos-aires', 'rio-de-janeiro', 'bogota', 'lima', 'santiago',
  
  // Europe
  'london', 'paris', 'berlin', 'madrid', 'rome', 'amsterdam', 'vienna',
  'stockholm', 'warsaw', 'athens', 'lisbon', 'zurich', 'prague', 'dublin',
  'brussels', 'copenhagen', 'oslo', 'helsinki', 'budapest', 'barcelona',
  
  // Russia & Eastern Europe
  'moscow', 'istanbul', 'kyiv', 'bucharest',
  
  // Middle East
  'dubai', 'tel-aviv', 'riyadh', 'doha', 'abu-dhabi', 'kuwait-city',
  
  // Africa
  'cairo', 'johannesburg', 'lagos', 'nairobi', 'casablanca', 'cape-town',
  'addis-ababa', 'accra',
  
  // South Asia
  'mumbai', 'delhi', 'bangalore', 'kolkata', 'chennai', 'karachi',
  
  // Southeast Asia
  'singapore', 'bangkok', 'kuala-lumpur', 'jakarta', 'manila', 'ho-chi-minh-city',
  
  // East Asia
  'tokyo', 'hong-kong', 'shanghai', 'beijing', 'seoul', 'taipei', 'osaka',
  
  // Oceania
  'sydney', 'melbourne', 'auckland', 'perth', 'brisbane',
]

// GeoJSON URL for world map
export const WORLD_MAP_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
