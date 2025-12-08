export interface City {
  slug: string
  city: string
  timezone: string
  country: string
  countryCode: string
  lat: number
  lng: number
}

export const cities: City[] = [
  // Türkiye
  { slug: 'istanbul', city: 'İstanbul', timezone: 'Europe/Istanbul', country: 'Türkiye', countryCode: 'TR', lat: 41.01, lng: 28.97 },
  { slug: 'ankara', city: 'Ankara', timezone: 'Europe/Istanbul', country: 'Türkiye', countryCode: 'TR', lat: 39.93, lng: 32.86 },
  { slug: 'izmir', city: 'İzmir', timezone: 'Europe/Istanbul', country: 'Türkiye', countryCode: 'TR', lat: 38.42, lng: 27.13 },
  { slug: 'antalya', city: 'Antalya', timezone: 'Europe/Istanbul', country: 'Türkiye', countryCode: 'TR', lat: 36.90, lng: 30.70 },
  { slug: 'bursa', city: 'Bursa', timezone: 'Europe/Istanbul', country: 'Türkiye', countryCode: 'TR', lat: 40.19, lng: 29.06 },
  
  // Avrupa
  { slug: 'london', city: 'London', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 51.51, lng: -0.13 },
  { slug: 'paris', city: 'Paris', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 48.86, lng: 2.35 },
  { slug: 'berlin', city: 'Berlin', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 52.52, lng: 13.41 },
  { slug: 'madrid', city: 'Madrid', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 40.42, lng: -3.70 },
  { slug: 'rome', city: 'Rome', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 41.90, lng: 12.50 },
  { slug: 'amsterdam', city: 'Amsterdam', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 52.37, lng: 4.90 },
  { slug: 'brussels', city: 'Brussels', timezone: 'Europe/Brussels', country: 'Belgium', countryCode: 'BE', lat: 50.85, lng: 4.35 },
  { slug: 'vienna', city: 'Vienna', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT', lat: 48.21, lng: 16.37 },
  { slug: 'zurich', city: 'Zurich', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH', lat: 47.37, lng: 8.54 },
  { slug: 'stockholm', city: 'Stockholm', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE', lat: 59.33, lng: 18.07 },
  { slug: 'oslo', city: 'Oslo', timezone: 'Europe/Oslo', country: 'Norway', countryCode: 'NO', lat: 59.91, lng: 10.75 },
  { slug: 'copenhagen', city: 'Copenhagen', timezone: 'Europe/Copenhagen', country: 'Denmark', countryCode: 'DK', lat: 55.68, lng: 12.57 },
  { slug: 'helsinki', city: 'Helsinki', timezone: 'Europe/Helsinki', country: 'Finland', countryCode: 'FI', lat: 60.17, lng: 24.94 },
  { slug: 'warsaw', city: 'Warsaw', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 52.23, lng: 21.01 },
  { slug: 'prague', city: 'Prague', timezone: 'Europe/Prague', country: 'Czech Republic', countryCode: 'CZ', lat: 50.08, lng: 14.44 },
  { slug: 'budapest', city: 'Budapest', timezone: 'Europe/Budapest', country: 'Hungary', countryCode: 'HU', lat: 47.50, lng: 19.04 },
  { slug: 'athens', city: 'Athens', timezone: 'Europe/Athens', country: 'Greece', countryCode: 'GR', lat: 37.98, lng: 23.73 },
  { slug: 'lisbon', city: 'Lisbon', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT', lat: 38.72, lng: -9.14 },
  { slug: 'dublin', city: 'Dublin', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE', lat: 53.35, lng: -6.26 },
  { slug: 'moscow', city: 'Moscow', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 55.76, lng: 37.62 },
  
  // Kuzey Amerika
  { slug: 'new-york', city: 'New York', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 40.71, lng: -74.01 },
  { slug: 'los-angeles', city: 'Los Angeles', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 34.05, lng: -118.24 },
  { slug: 'chicago', city: 'Chicago', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 41.88, lng: -87.63 },
  { slug: 'miami', city: 'Miami', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 25.76, lng: -80.19 },
  { slug: 'san-francisco', city: 'San Francisco', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 37.77, lng: -122.42 },
  { slug: 'seattle', city: 'Seattle', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 47.61, lng: -122.33 },
  { slug: 'toronto', city: 'Toronto', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA', lat: 43.65, lng: -79.38 },
  { slug: 'vancouver', city: 'Vancouver', timezone: 'America/Vancouver', country: 'Canada', countryCode: 'CA', lat: 49.28, lng: -123.12 },
  { slug: 'mexico-city', city: 'Mexico City', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 19.43, lng: -99.13 },
  
  // Güney Amerika
  { slug: 'sao-paulo', city: 'São Paulo', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -23.55, lng: -46.63 },
  { slug: 'rio-de-janeiro', city: 'Rio de Janeiro', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -22.91, lng: -43.17 },
  { slug: 'buenos-aires', city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina', countryCode: 'AR', lat: -34.60, lng: -58.38 },
  { slug: 'santiago', city: 'Santiago', timezone: 'America/Santiago', country: 'Chile', countryCode: 'CL', lat: -33.45, lng: -70.67 },
  { slug: 'bogota', city: 'Bogotá', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO', lat: 4.71, lng: -74.07 },
  { slug: 'lima', city: 'Lima', timezone: 'America/Lima', country: 'Peru', countryCode: 'PE', lat: -12.05, lng: -77.04 },
  
  // Asya
  { slug: 'tokyo', city: 'Tokyo', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.68, lng: 139.69 },
  { slug: 'seoul', city: 'Seoul', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 37.57, lng: 126.98 },
  { slug: 'beijing', city: 'Beijing', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 39.90, lng: 116.41 },
  { slug: 'shanghai', city: 'Shanghai', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 31.23, lng: 121.47 },
  { slug: 'hong-kong', city: 'Hong Kong', timezone: 'Asia/Hong_Kong', country: 'Hong Kong', countryCode: 'HK', lat: 22.32, lng: 114.17 },
  { slug: 'singapore', city: 'Singapore', timezone: 'Asia/Singapore', country: 'Singapore', countryCode: 'SG', lat: 1.35, lng: 103.82 },
  { slug: 'bangkok', city: 'Bangkok', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH', lat: 13.76, lng: 100.50 },
  { slug: 'mumbai', city: 'Mumbai', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 19.08, lng: 72.88 },
  { slug: 'delhi', city: 'New Delhi', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 28.61, lng: 77.21 },
  { slug: 'dubai', city: 'Dubai', timezone: 'Asia/Dubai', country: 'United Arab Emirates', countryCode: 'AE', lat: 25.20, lng: 55.27 },
  { slug: 'tel-aviv', city: 'Tel Aviv', timezone: 'Asia/Jerusalem', country: 'Israel', countryCode: 'IL', lat: 32.09, lng: 34.78 },
  { slug: 'jakarta', city: 'Jakarta', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -6.21, lng: 106.85 },
  { slug: 'kuala-lumpur', city: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', country: 'Malaysia', countryCode: 'MY', lat: 3.14, lng: 101.69 },
  { slug: 'manila', city: 'Manila', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH', lat: 14.60, lng: 120.98 },
  { slug: 'taipei', city: 'Taipei', timezone: 'Asia/Taipei', country: 'Taiwan', countryCode: 'TW', lat: 25.03, lng: 121.57 },
  { slug: 'hanoi', city: 'Hanoi', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 21.03, lng: 105.85 },
  
  // Okyanusya
  { slug: 'sydney', city: 'Sydney', timezone: 'Australia/Sydney', country: 'Australia', countryCode: 'AU', lat: -33.87, lng: 151.21 },
  { slug: 'melbourne', city: 'Melbourne', timezone: 'Australia/Melbourne', country: 'Australia', countryCode: 'AU', lat: -37.81, lng: 144.96 },
  { slug: 'auckland', city: 'Auckland', timezone: 'Pacific/Auckland', country: 'New Zealand', countryCode: 'NZ', lat: -36.85, lng: 174.76 },
  
  // Afrika
  { slug: 'cairo', city: 'Cairo', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG', lat: 30.04, lng: 31.24 },
  { slug: 'johannesburg', city: 'Johannesburg', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA', lat: -26.20, lng: 28.05 },
  { slug: 'lagos', city: 'Lagos', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 6.52, lng: 3.38 },
  { slug: 'nairobi', city: 'Nairobi', timezone: 'Africa/Nairobi', country: 'Kenya', countryCode: 'KE', lat: -1.29, lng: 36.82 },
  { slug: 'casablanca', city: 'Casablanca', timezone: 'Africa/Casablanca', country: 'Morocco', countryCode: 'MA', lat: 33.57, lng: -7.59 },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

export function getAllSlugs(): string[] {
  return cities.map(c => c.slug)
}
