// Map city coordinates (x: 0-100, y: 0-60)
export type MapCity = {
  slug: string
  x: number
  y: number
}

export const mapCities: MapCity[] = [
  // North America
  { slug: 'new-york', x: 24, y: 36 },
  { slug: 'los-angeles', x: 10, y: 39 },
  { slug: 'chicago', x: 20, y: 35 },
  { slug: 'miami', x: 22, y: 44 },
  { slug: 'toronto', x: 22, y: 33 },
  { slug: 'vancouver', x: 9, y: 30 },
  { slug: 'mexico-city', x: 16, y: 48 },
  { slug: 'houston', x: 17, y: 42 },
  
  // South America
  { slug: 'sao-paulo', x: 31, y: 64 },
  { slug: 'buenos-aires', x: 28, y: 72 },
  { slug: 'rio-de-janeiro', x: 33, y: 62 },
  { slug: 'bogota', x: 21, y: 53 },
  { slug: 'lima', x: 20, y: 60 },
  { slug: 'santiago', x: 24, y: 70 },
  
  // Europe
  { slug: 'london', x: 47, y: 30 },
  { slug: 'paris', x: 49, y: 32 },
  { slug: 'berlin', x: 52, y: 29 },
  { slug: 'madrid', x: 46, y: 36 },
  { slug: 'rome', x: 52, y: 35 },
  { slug: 'amsterdam', x: 49, y: 29 },
  { slug: 'vienna', x: 53, y: 32 },
  { slug: 'stockholm', x: 54, y: 24 },
  { slug: 'warsaw', x: 55, y: 29 },
  { slug: 'athens', x: 56, y: 38 },
  { slug: 'lisbon', x: 44, y: 37 },
  { slug: 'zurich', x: 50, y: 32 },
  
  // Russia & Eastern Europe
  { slug: 'moscow', x: 58, y: 26 },
  { slug: 'istanbul', x: 55, y: 36 },
  
  // Middle East
  { slug: 'dubai', x: 63, y: 44 },
  { slug: 'tel-aviv', x: 57, y: 40 },
  { slug: 'riyadh', x: 61, y: 44 },
  { slug: 'doha', x: 62, y: 44 },
  
  // Africa
  { slug: 'cairo', x: 56, y: 42 },
  { slug: 'johannesburg', x: 55, y: 68 },
  { slug: 'lagos', x: 48, y: 52 },
  { slug: 'nairobi', x: 58, y: 56 },
  { slug: 'casablanca', x: 45, y: 40 },
  { slug: 'cape-town', x: 53, y: 72 },
  
  // South Asia
  { slug: 'mumbai', x: 68, y: 48 },
  { slug: 'delhi', x: 69, y: 42 },
  { slug: 'bangalore', x: 69, y: 52 },
  { slug: 'kolkata', x: 72, y: 46 },
  
  // Southeast Asia
  { slug: 'singapore', x: 76, y: 56 },
  { slug: 'bangkok', x: 74, y: 50 },
  { slug: 'kuala-lumpur', x: 75, y: 54 },
  { slug: 'jakarta', x: 77, y: 58 },
  { slug: 'manila', x: 80, y: 50 },
  { slug: 'ho-chi-minh-city', x: 76, y: 52 },
  
  // East Asia
  { slug: 'tokyo', x: 86, y: 38 },
  { slug: 'hong-kong', x: 79, y: 46 },
  { slug: 'shanghai', x: 81, y: 40 },
  { slug: 'beijing', x: 80, y: 36 },
  { slug: 'seoul', x: 83, y: 38 },
  { slug: 'taipei', x: 81, y: 44 },
  
  // Oceania
  { slug: 'sydney', x: 89, y: 70 },
  { slug: 'melbourne', x: 88, y: 74 },
  { slug: 'auckland', x: 96, y: 74 },
  { slug: 'perth', x: 80, y: 70 },
  { slug: 'brisbane', x: 90, y: 66 },
]
