export interface City {
  slug: string
  city: string
  timezone: string
  country: string
  countryCode: string
  lat: number
  lng: number
  tier?: number // 1 = Global hub, 2 = Major city, 3 = Notable city
  continent?: 'americas' | 'europe' | 'asia' | 'africa' | 'oceania'
}

export type Continent = 'all' | 'americas' | 'europe' | 'asia' | 'africa' | 'oceania'

export const continentLabels: Record<Continent, string> = {
  all: 'Top Cities',
  americas: 'Americas',
  europe: 'Europe',
  asia: 'Asia',
  africa: 'Africa',
  oceania: 'Oceania'
}

// Countries that use 12-hour (AM/PM) format
export const amPmCountries = ['US', 'CA', 'AU', 'PH', 'MY', 'IN', 'PK', 'BD', 'EG', 'SA', 'CO', 'MX']

export function uses12HourFormat(countryCode: string): boolean {
  return amPmCountries.includes(countryCode)
}

// Get cities by continent
export function getCitiesByContinent(continent: Continent): City[] {
  if (continent === 'all') {
    // Return Tier 1 cities (global hubs)
    return cities.filter(c => c.tier === 1)
  }
  // Return all cities for the selected continent
  return cities.filter(c => c.continent === continent)
}

// Tier 1: Global financial/cultural hubs - shown on homepage
export const tier1Slugs = [
  'new-york', 'london', 'tokyo', 'paris', 'dubai', 'singapore', 
  'hong-kong', 'shanghai', 'sydney', 'los-angeles', 'toronto', 'berlin'
]

export const cities: City[] = [
  // ============ TIER 1: Global Hubs ============
  { slug: 'new-york', city: 'New York', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 40.71, lng: -74.01, tier: 1, continent: 'americas' },
  { slug: 'london', city: 'London', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 51.51, lng: -0.13, tier: 1, continent: 'europe' },
  { slug: 'tokyo', city: 'Tokyo', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.68, lng: 139.69, tier: 1, continent: 'asia' },
  { slug: 'paris', city: 'Paris', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 48.86, lng: 2.35, tier: 1, continent: 'europe' },
  { slug: 'dubai', city: 'Dubai', timezone: 'Asia/Dubai', country: 'United Arab Emirates', countryCode: 'AE', lat: 25.20, lng: 55.27, tier: 1, continent: 'asia' },
  { slug: 'singapore', city: 'Singapore', timezone: 'Asia/Singapore', country: 'Singapore', countryCode: 'SG', lat: 1.35, lng: 103.82, tier: 1, continent: 'asia' },
  { slug: 'hong-kong', city: 'Hong Kong', timezone: 'Asia/Hong_Kong', country: 'Hong Kong', countryCode: 'HK', lat: 22.32, lng: 114.17, tier: 1, continent: 'asia' },
  { slug: 'shanghai', city: 'Shanghai', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 31.23, lng: 121.47, tier: 1, continent: 'asia' },
  { slug: 'sydney', city: 'Sydney', timezone: 'Australia/Sydney', country: 'Australia', countryCode: 'AU', lat: -33.87, lng: 151.21, tier: 1, continent: 'oceania' },
  { slug: 'los-angeles', city: 'Los Angeles', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 34.05, lng: -118.24, tier: 1, continent: 'americas' },
  { slug: 'toronto', city: 'Toronto', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA', lat: 43.65, lng: -79.38, tier: 1, continent: 'americas' },
  { slug: 'berlin', city: 'Berlin', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 52.52, lng: 13.41, tier: 1, continent: 'europe' },

  // ============ TIER 2: Major Cities ============
  // Americas
  { slug: 'chicago', city: 'Chicago', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 41.88, lng: -87.63, tier: 2, continent: 'americas' },
  { slug: 'miami', city: 'Miami', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 25.76, lng: -80.19, tier: 2, continent: 'americas' },
  { slug: 'san-francisco', city: 'San Francisco', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 37.77, lng: -122.42, tier: 2, continent: 'americas' },
  { slug: 'seattle', city: 'Seattle', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 47.61, lng: -122.33, tier: 2, continent: 'americas' },
  { slug: 'boston', city: 'Boston', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 42.36, lng: -71.06, tier: 2, continent: 'americas' },
  { slug: 'washington-dc', city: 'Washington D.C.', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 38.91, lng: -77.04, tier: 2, continent: 'americas' },
  { slug: 'atlanta', city: 'Atlanta', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 33.75, lng: -84.39, tier: 2, continent: 'americas' },
  { slug: 'houston', city: 'Houston', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 29.76, lng: -95.37, tier: 2, continent: 'americas' },
  { slug: 'dallas', city: 'Dallas', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 32.78, lng: -96.80, tier: 2, continent: 'americas' },
  { slug: 'denver', city: 'Denver', timezone: 'America/Denver', country: 'United States', countryCode: 'US', lat: 39.74, lng: -104.99, tier: 2, continent: 'americas' },
  { slug: 'phoenix', city: 'Phoenix', timezone: 'America/Phoenix', country: 'United States', countryCode: 'US', lat: 33.45, lng: -112.07, tier: 2, continent: 'americas' },
  { slug: 'las-vegas', city: 'Las Vegas', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 36.17, lng: -115.14, tier: 2, continent: 'americas' },
  { slug: 'vancouver', city: 'Vancouver', timezone: 'America/Vancouver', country: 'Canada', countryCode: 'CA', lat: 49.28, lng: -123.12, tier: 2, continent: 'americas' },
  { slug: 'montreal', city: 'Montreal', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA', lat: 45.50, lng: -73.57, tier: 2, continent: 'americas' },
  { slug: 'mexico-city', city: 'Mexico City', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 19.43, lng: -99.13, tier: 2, continent: 'americas' },
  { slug: 'sao-paulo', city: 'São Paulo', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -23.55, lng: -46.63, tier: 2, continent: 'americas' },
  { slug: 'rio-de-janeiro', city: 'Rio de Janeiro', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -22.91, lng: -43.17, tier: 2, continent: 'americas' },
  { slug: 'buenos-aires', city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina', countryCode: 'AR', lat: -34.60, lng: -58.38, tier: 2, continent: 'americas' },

  // Europe
  { slug: 'madrid', city: 'Madrid', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 40.42, lng: -3.70, tier: 2, continent: 'europe' },
  { slug: 'barcelona', city: 'Barcelona', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 41.39, lng: 2.17, tier: 2, continent: 'europe' },
  { slug: 'rome', city: 'Rome', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 41.90, lng: 12.50, tier: 2, continent: 'europe' },
  { slug: 'milan', city: 'Milan', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 45.46, lng: 9.19, tier: 2, continent: 'europe' },
  { slug: 'amsterdam', city: 'Amsterdam', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 52.37, lng: 4.90, tier: 2, continent: 'europe' },
  { slug: 'brussels', city: 'Brussels', timezone: 'Europe/Brussels', country: 'Belgium', countryCode: 'BE', lat: 50.85, lng: 4.35, tier: 2, continent: 'europe' },
  { slug: 'vienna', city: 'Vienna', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT', lat: 48.21, lng: 16.37, tier: 2, continent: 'europe' },
  { slug: 'zurich', city: 'Zurich', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH', lat: 47.37, lng: 8.54, tier: 2, continent: 'europe' },
  { slug: 'geneva', city: 'Geneva', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH', lat: 46.20, lng: 6.14, tier: 2, continent: 'europe' },
  { slug: 'munich', city: 'Munich', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 48.14, lng: 11.58, tier: 2, continent: 'europe' },
  { slug: 'frankfurt', city: 'Frankfurt', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 50.11, lng: 8.68, tier: 2, continent: 'europe' },
  { slug: 'stockholm', city: 'Stockholm', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE', lat: 59.33, lng: 18.07, tier: 2, continent: 'europe' },
  { slug: 'oslo', city: 'Oslo', timezone: 'Europe/Oslo', country: 'Norway', countryCode: 'NO', lat: 59.91, lng: 10.75, tier: 2, continent: 'europe' },
  { slug: 'copenhagen', city: 'Copenhagen', timezone: 'Europe/Copenhagen', country: 'Denmark', countryCode: 'DK', lat: 55.68, lng: 12.57, tier: 2, continent: 'europe' },
  { slug: 'helsinki', city: 'Helsinki', timezone: 'Europe/Helsinki', country: 'Finland', countryCode: 'FI', lat: 60.17, lng: 24.94, tier: 2, continent: 'europe' },
  { slug: 'moscow', city: 'Moscow', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 55.76, lng: 37.62, tier: 2, continent: 'europe' },
  { slug: 'istanbul', city: 'Istanbul', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 41.01, lng: 28.97, tier: 2, continent: 'europe' },
  { slug: 'athens', city: 'Athens', timezone: 'Europe/Athens', country: 'Greece', countryCode: 'GR', lat: 37.98, lng: 23.73, tier: 2, continent: 'europe' },
  { slug: 'lisbon', city: 'Lisbon', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT', lat: 38.72, lng: -9.14, tier: 2, continent: 'europe' },
  { slug: 'dublin', city: 'Dublin', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE', lat: 53.35, lng: -6.26, tier: 2, continent: 'europe' },
  { slug: 'warsaw', city: 'Warsaw', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 52.23, lng: 21.01, tier: 2, continent: 'europe' },
  { slug: 'prague', city: 'Prague', timezone: 'Europe/Prague', country: 'Czech Republic', countryCode: 'CZ', lat: 50.08, lng: 14.44, tier: 2, continent: 'europe' },
  { slug: 'budapest', city: 'Budapest', timezone: 'Europe/Budapest', country: 'Hungary', countryCode: 'HU', lat: 47.50, lng: 19.04, tier: 2, continent: 'europe' },

  // Asia
  { slug: 'beijing', city: 'Beijing', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 39.90, lng: 116.41, tier: 2, continent: 'asia' },
  { slug: 'seoul', city: 'Seoul', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 37.57, lng: 126.98, tier: 2, continent: 'asia' },
  { slug: 'mumbai', city: 'Mumbai', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 19.08, lng: 72.88, tier: 2, continent: 'asia' },
  { slug: 'delhi', city: 'New Delhi', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 28.61, lng: 77.21, tier: 2, continent: 'asia' },
  { slug: 'bangalore', city: 'Bangalore', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 12.97, lng: 77.59, tier: 2, continent: 'asia' },
  { slug: 'bangkok', city: 'Bangkok', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH', lat: 13.76, lng: 100.50, tier: 2, continent: 'asia' },
  { slug: 'jakarta', city: 'Jakarta', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -6.21, lng: 106.85, tier: 2, continent: 'asia' },
  { slug: 'kuala-lumpur', city: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', country: 'Malaysia', countryCode: 'MY', lat: 3.14, lng: 101.69, tier: 2, continent: 'asia' },
  { slug: 'manila', city: 'Manila', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH', lat: 14.60, lng: 120.98, tier: 2, continent: 'asia' },
  { slug: 'taipei', city: 'Taipei', timezone: 'Asia/Taipei', country: 'Taiwan', countryCode: 'TW', lat: 25.03, lng: 121.57, tier: 2, continent: 'asia' },
  { slug: 'tel-aviv', city: 'Tel Aviv', timezone: 'Asia/Jerusalem', country: 'Israel', countryCode: 'IL', lat: 32.09, lng: 34.78, tier: 2, continent: 'asia' },

  // Oceania
  { slug: 'melbourne', city: 'Melbourne', timezone: 'Australia/Melbourne', country: 'Australia', countryCode: 'AU', lat: -37.81, lng: 144.96, tier: 2, continent: 'oceania' },
  { slug: 'auckland', city: 'Auckland', timezone: 'Pacific/Auckland', country: 'New Zealand', countryCode: 'NZ', lat: -36.85, lng: 174.76, tier: 2, continent: 'oceania' },

  // Africa & Middle East
  { slug: 'cairo', city: 'Cairo', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG', lat: 30.04, lng: 31.24, tier: 2, continent: 'africa' },
  { slug: 'johannesburg', city: 'Johannesburg', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA', lat: -26.20, lng: 28.05, tier: 2, continent: 'africa' },
  { slug: 'lagos', city: 'Lagos', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 6.52, lng: 3.38, tier: 2, continent: 'africa' },
  { slug: 'nairobi', city: 'Nairobi', timezone: 'Africa/Nairobi', country: 'Kenya', countryCode: 'KE', lat: -1.29, lng: 36.82, tier: 2, continent: 'africa' },
  { slug: 'cape-town', city: 'Cape Town', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA', lat: -33.93, lng: 18.42, tier: 2, continent: 'africa' },
  { slug: 'casablanca', city: 'Casablanca', timezone: 'Africa/Casablanca', country: 'Morocco', countryCode: 'MA', lat: 33.57, lng: -7.59, tier: 2, continent: 'africa' },

  // ============ TIER 3: Notable Cities ============
  // United States
  { slug: 'san-diego', city: 'San Diego', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 32.72, lng: -117.16, tier: 3, continent: 'americas' },
  { slug: 'austin', city: 'Austin', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 30.27, lng: -97.74, tier: 3, continent: 'americas' },
  { slug: 'philadelphia', city: 'Philadelphia', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 39.95, lng: -75.17, tier: 3, continent: 'americas' },
  { slug: 'detroit', city: 'Detroit', timezone: 'America/Detroit', country: 'United States', countryCode: 'US', lat: 42.33, lng: -83.05, tier: 3, continent: 'americas' },
  { slug: 'minneapolis', city: 'Minneapolis', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 44.98, lng: -93.27, tier: 3, continent: 'americas' },
  { slug: 'portland', city: 'Portland', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 45.52, lng: -122.68, tier: 3, continent: 'americas' },
  { slug: 'nashville', city: 'Nashville', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 36.16, lng: -86.78, tier: 3, continent: 'americas' },
  { slug: 'new-orleans', city: 'New Orleans', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 29.95, lng: -90.07, tier: 3, continent: 'americas' },
  { slug: 'orlando', city: 'Orlando', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 28.54, lng: -81.38, tier: 3, continent: 'americas' },
  { slug: 'honolulu', city: 'Honolulu', timezone: 'Pacific/Honolulu', country: 'United States', countryCode: 'US', lat: 21.31, lng: -157.86, tier: 3, continent: 'oceania' },
  { slug: 'anchorage', city: 'Anchorage', timezone: 'America/Anchorage', country: 'United States', countryCode: 'US', lat: 61.22, lng: -149.90, tier: 3, continent: 'americas' },

  // Canada
  { slug: 'calgary', city: 'Calgary', timezone: 'America/Edmonton', country: 'Canada', countryCode: 'CA', lat: 51.05, lng: -114.07, tier: 3, continent: 'americas' },
  { slug: 'ottawa', city: 'Ottawa', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA', lat: 45.42, lng: -75.70, tier: 3, continent: 'americas' },
  { slug: 'edmonton', city: 'Edmonton', timezone: 'America/Edmonton', country: 'Canada', countryCode: 'CA', lat: 53.55, lng: -113.49, tier: 3, continent: 'americas' },

  // Latin America
  { slug: 'santiago', city: 'Santiago', timezone: 'America/Santiago', country: 'Chile', countryCode: 'CL', lat: -33.45, lng: -70.67, tier: 3, continent: 'americas' },
  { slug: 'bogota', city: 'Bogotá', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO', lat: 4.71, lng: -74.07, tier: 3, continent: 'americas' },
  { slug: 'lima', city: 'Lima', timezone: 'America/Lima', country: 'Peru', countryCode: 'PE', lat: -12.05, lng: -77.04, tier: 3, continent: 'americas' },
  { slug: 'caracas', city: 'Caracas', timezone: 'America/Caracas', country: 'Venezuela', countryCode: 'VE', lat: 10.48, lng: -66.90, tier: 3, continent: 'americas' },
  { slug: 'medellin', city: 'Medellín', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO', lat: 6.25, lng: -75.56, tier: 3, continent: 'americas' },
  { slug: 'montevideo', city: 'Montevideo', timezone: 'America/Montevideo', country: 'Uruguay', countryCode: 'UY', lat: -34.90, lng: -56.19, tier: 3, continent: 'americas' },
  { slug: 'havana', city: 'Havana', timezone: 'America/Havana', country: 'Cuba', countryCode: 'CU', lat: 23.11, lng: -82.37, tier: 3, continent: 'americas' },
  { slug: 'panama-city', city: 'Panama City', timezone: 'America/Panama', country: 'Panama', countryCode: 'PA', lat: 8.98, lng: -79.52, tier: 3, continent: 'americas' },
  { slug: 'san-jose-cr', city: 'San José', timezone: 'America/Costa_Rica', country: 'Costa Rica', countryCode: 'CR', lat: 9.93, lng: -84.09, tier: 3, continent: 'americas' },
  { slug: 'guadalajara', city: 'Guadalajara', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 20.67, lng: -103.35, tier: 3, continent: 'americas' },
  { slug: 'monterrey', city: 'Monterrey', timezone: 'America/Monterrey', country: 'Mexico', countryCode: 'MX', lat: 25.69, lng: -100.32, tier: 3, continent: 'americas' },
  { slug: 'cancun', city: 'Cancún', timezone: 'America/Cancun', country: 'Mexico', countryCode: 'MX', lat: 21.16, lng: -86.85, tier: 3, continent: 'americas' },

  // Europe
  { slug: 'manchester', city: 'Manchester', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 53.48, lng: -2.24, tier: 3, continent: 'europe' },
  { slug: 'birmingham', city: 'Birmingham', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 52.49, lng: -1.90, tier: 3, continent: 'europe' },
  { slug: 'edinburgh', city: 'Edinburgh', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 55.95, lng: -3.19, tier: 3, continent: 'europe' },
  { slug: 'glasgow', city: 'Glasgow', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 55.86, lng: -4.25, tier: 3, continent: 'europe' },
  { slug: 'lyon', city: 'Lyon', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 45.76, lng: 4.84, tier: 3, continent: 'europe' },
  { slug: 'marseille', city: 'Marseille', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 43.30, lng: 5.37, tier: 3, continent: 'europe' },
  { slug: 'nice', city: 'Nice', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 43.71, lng: 7.26, tier: 3, continent: 'europe' },
  { slug: 'hamburg', city: 'Hamburg', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 53.55, lng: 9.99, tier: 3, continent: 'europe' },
  { slug: 'cologne', city: 'Cologne', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 50.94, lng: 6.96, tier: 3, continent: 'europe' },
  { slug: 'dusseldorf', city: 'Düsseldorf', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 51.23, lng: 6.78, tier: 3, continent: 'europe' },
  { slug: 'florence', city: 'Florence', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 43.77, lng: 11.25, tier: 3, continent: 'europe' },
  { slug: 'venice', city: 'Venice', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 45.44, lng: 12.32, tier: 3, continent: 'europe' },
  { slug: 'naples', city: 'Naples', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 40.85, lng: 14.27, tier: 3, continent: 'europe' },
  { slug: 'valencia', city: 'Valencia', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 39.47, lng: -0.38, tier: 3, continent: 'europe' },
  { slug: 'seville', city: 'Seville', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 37.39, lng: -5.99, tier: 3, continent: 'europe' },
  { slug: 'porto', city: 'Porto', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT', lat: 41.15, lng: -8.61, tier: 3, continent: 'europe' },
  { slug: 'rotterdam', city: 'Rotterdam', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 51.92, lng: 4.48, tier: 3, continent: 'europe' },
  { slug: 'antwerp', city: 'Antwerp', timezone: 'Europe/Brussels', country: 'Belgium', countryCode: 'BE', lat: 51.22, lng: 4.40, tier: 3, continent: 'europe' },
  { slug: 'krakow', city: 'Krakow', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 50.06, lng: 19.94, tier: 3, continent: 'europe' },
  { slug: 'bucharest', city: 'Bucharest', timezone: 'Europe/Bucharest', country: 'Romania', countryCode: 'RO', lat: 44.43, lng: 26.10, tier: 3, continent: 'europe' },
  { slug: 'sofia', city: 'Sofia', timezone: 'Europe/Sofia', country: 'Bulgaria', countryCode: 'BG', lat: 42.70, lng: 23.32, tier: 3, continent: 'europe' },
  { slug: 'belgrade', city: 'Belgrade', timezone: 'Europe/Belgrade', country: 'Serbia', countryCode: 'RS', lat: 44.82, lng: 20.46, tier: 3, continent: 'europe' },
  { slug: 'zagreb', city: 'Zagreb', timezone: 'Europe/Zagreb', country: 'Croatia', countryCode: 'HR', lat: 45.81, lng: 15.98, tier: 3, continent: 'europe' },
  { slug: 'bratislava', city: 'Bratislava', timezone: 'Europe/Bratislava', country: 'Slovakia', countryCode: 'SK', lat: 48.15, lng: 17.11, tier: 3, continent: 'europe' },
  { slug: 'ljubljana', city: 'Ljubljana', timezone: 'Europe/Ljubljana', country: 'Slovenia', countryCode: 'SI', lat: 46.06, lng: 14.51, tier: 3, continent: 'europe' },
  { slug: 'tallinn', city: 'Tallinn', timezone: 'Europe/Tallinn', country: 'Estonia', countryCode: 'EE', lat: 59.44, lng: 24.75, tier: 3, continent: 'europe' },
  { slug: 'riga', city: 'Riga', timezone: 'Europe/Riga', country: 'Latvia', countryCode: 'LV', lat: 56.95, lng: 24.11, tier: 3, continent: 'europe' },
  { slug: 'vilnius', city: 'Vilnius', timezone: 'Europe/Vilnius', country: 'Lithuania', countryCode: 'LT', lat: 54.69, lng: 25.28, tier: 3, continent: 'europe' },
  { slug: 'reykjavik', city: 'Reykjavik', timezone: 'Atlantic/Reykjavik', country: 'Iceland', countryCode: 'IS', lat: 64.15, lng: -21.94, tier: 3, continent: 'europe' },
  { slug: 'kyiv', city: 'Kyiv', timezone: 'Europe/Kiev', country: 'Ukraine', countryCode: 'UA', lat: 50.45, lng: 30.52, tier: 3, continent: 'europe' },
  { slug: 'saint-petersburg', city: 'Saint Petersburg', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 59.93, lng: 30.34, tier: 3, continent: 'europe' },

  // Turkey
  { slug: 'ankara', city: 'Ankara', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 39.93, lng: 32.86, tier: 3, continent: 'europe' },
  { slug: 'izmir', city: 'İzmir', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 38.42, lng: 27.13, tier: 3, continent: 'europe' },
  { slug: 'antalya', city: 'Antalya', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 36.90, lng: 30.70, tier: 3, continent: 'europe' },
  { slug: 'bursa', city: 'Bursa', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 40.19, lng: 29.06, tier: 3, continent: 'europe' },

  // Asia
  { slug: 'osaka', city: 'Osaka', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 34.69, lng: 135.50, tier: 3, continent: 'asia' },
  { slug: 'kyoto', city: 'Kyoto', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.01, lng: 135.77, tier: 3, continent: 'asia' },
  { slug: 'shenzhen', city: 'Shenzhen', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 22.54, lng: 114.06, tier: 3, continent: 'asia' },
  { slug: 'guangzhou', city: 'Guangzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 23.13, lng: 113.26, tier: 3, continent: 'asia' },
  { slug: 'chengdu', city: 'Chengdu', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 30.57, lng: 104.07, tier: 3, continent: 'asia' },
  { slug: 'hangzhou', city: 'Hangzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 30.27, lng: 120.15, tier: 3, continent: 'asia' },
  { slug: 'busan', city: 'Busan', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 35.18, lng: 129.08, tier: 3, continent: 'asia' },
  { slug: 'hanoi', city: 'Hanoi', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 21.03, lng: 105.85, tier: 3, continent: 'asia' },
  { slug: 'ho-chi-minh', city: 'Ho Chi Minh City', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 10.82, lng: 106.63, tier: 3, continent: 'asia' },
  { slug: 'chennai', city: 'Chennai', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 13.08, lng: 80.27, tier: 3, continent: 'asia' },
  { slug: 'kolkata', city: 'Kolkata', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 22.57, lng: 88.36, tier: 3, continent: 'asia' },
  { slug: 'hyderabad', city: 'Hyderabad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 17.39, lng: 78.49, tier: 3, continent: 'asia' },
  { slug: 'phuket', city: 'Phuket', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH', lat: 7.88, lng: 98.40, tier: 3, continent: 'asia' },
  { slug: 'bali', city: 'Bali', timezone: 'Asia/Makassar', country: 'Indonesia', countryCode: 'ID', lat: -8.41, lng: 115.19, tier: 3, continent: 'asia' },
  { slug: 'jerusalem', city: 'Jerusalem', timezone: 'Asia/Jerusalem', country: 'Israel', countryCode: 'IL', lat: 31.77, lng: 35.23, tier: 3, continent: 'asia' },
  { slug: 'abu-dhabi', city: 'Abu Dhabi', timezone: 'Asia/Dubai', country: 'United Arab Emirates', countryCode: 'AE', lat: 24.45, lng: 54.37, tier: 3, continent: 'asia' },
  { slug: 'doha', city: 'Doha', timezone: 'Asia/Qatar', country: 'Qatar', countryCode: 'QA', lat: 25.29, lng: 51.53, tier: 3, continent: 'asia' },
  { slug: 'riyadh', city: 'Riyadh', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA', lat: 24.77, lng: 46.74, tier: 3, continent: 'asia' },
  { slug: 'jeddah', city: 'Jeddah', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA', lat: 21.49, lng: 39.19, tier: 3, continent: 'asia' },
  { slug: 'karachi', city: 'Karachi', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 24.86, lng: 67.01, tier: 3, continent: 'asia' },
  { slug: 'dhaka', city: 'Dhaka', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD', lat: 23.81, lng: 90.41, tier: 3, continent: 'asia' },
  { slug: 'kathmandu', city: 'Kathmandu', timezone: 'Asia/Kathmandu', country: 'Nepal', countryCode: 'NP', lat: 27.72, lng: 85.32, tier: 3, continent: 'asia' },
  { slug: 'colombo', city: 'Colombo', timezone: 'Asia/Colombo', country: 'Sri Lanka', countryCode: 'LK', lat: 6.93, lng: 79.85, tier: 3, continent: 'asia' },
  { slug: 'yangon', city: 'Yangon', timezone: 'Asia/Yangon', country: 'Myanmar', countryCode: 'MM', lat: 16.87, lng: 96.20, tier: 3, continent: 'asia' },
  { slug: 'phnom-penh', city: 'Phnom Penh', timezone: 'Asia/Phnom_Penh', country: 'Cambodia', countryCode: 'KH', lat: 11.56, lng: 104.92, tier: 3, continent: 'asia' },

  // Oceania
  { slug: 'brisbane', city: 'Brisbane', timezone: 'Australia/Brisbane', country: 'Australia', countryCode: 'AU', lat: -27.47, lng: 153.03, tier: 3, continent: 'oceania' },
  { slug: 'perth', city: 'Perth', timezone: 'Australia/Perth', country: 'Australia', countryCode: 'AU', lat: -31.95, lng: 115.86, tier: 3, continent: 'oceania' },
  { slug: 'wellington', city: 'Wellington', timezone: 'Pacific/Auckland', country: 'New Zealand', countryCode: 'NZ', lat: -41.29, lng: 174.78, tier: 3, continent: 'oceania' },
  { slug: 'fiji', city: 'Suva', timezone: 'Pacific/Fiji', country: 'Fiji', countryCode: 'FJ', lat: -18.14, lng: 178.44, tier: 3, continent: 'oceania' },

  // Africa
  { slug: 'marrakech', city: 'Marrakech', timezone: 'Africa/Casablanca', country: 'Morocco', countryCode: 'MA', lat: 31.63, lng: -8.01, tier: 3, continent: 'africa' },
  { slug: 'tunis', city: 'Tunis', timezone: 'Africa/Tunis', country: 'Tunisia', countryCode: 'TN', lat: 36.81, lng: 10.17, tier: 3, continent: 'africa' },
  { slug: 'algiers', city: 'Algiers', timezone: 'Africa/Algiers', country: 'Algeria', countryCode: 'DZ', lat: 36.74, lng: 3.09, tier: 3, continent: 'africa' },
  { slug: 'addis-ababa', city: 'Addis Ababa', timezone: 'Africa/Addis_Ababa', country: 'Ethiopia', countryCode: 'ET', lat: 9.02, lng: 38.75, tier: 3, continent: 'africa' },
  { slug: 'accra', city: 'Accra', timezone: 'Africa/Accra', country: 'Ghana', countryCode: 'GH', lat: 5.56, lng: -0.19, tier: 3, continent: 'africa' },
  { slug: 'dar-es-salaam', city: 'Dar es Salaam', timezone: 'Africa/Dar_es_Salaam', country: 'Tanzania', countryCode: 'TZ', lat: -6.79, lng: 39.21, tier: 3, continent: 'africa' },
]

// Get cities by tier
export function getTier1Cities(): City[] {
  return cities.filter(c => c.tier === 1)
}

export function getTier2Cities(): City[] {
  return cities.filter(c => c.tier === 2)
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

export function getAllSlugs(): string[] {
  return cities.map(c => c.slug)
}

export function getCitiesByCountry(countryCode: string): City[] {
  return cities.filter(c => c.countryCode === countryCode)
}

export function searchCities(query: string): City[] {
  const q = query.toLowerCase()
  return cities.filter(c => 
    c.city.toLowerCase().includes(q) || 
    c.country.toLowerCase().includes(q) ||
    c.slug.includes(q)
  )
}
