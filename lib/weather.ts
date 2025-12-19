// Weather API service with caching

const API_KEY = '6fc475e8ec2b4c50a0c135542250812'
const BASE_URL = 'https://api.weatherapi.com/v1'

export interface WeatherData {
  temp_c: number
  temp_f: number
  condition: {
    text: string
    code: number
    icon: string
  }
  humidity: number
  wind_kph: number
  feelslike_c: number
  is_day: number
}

export interface WeatherResponse {
  current: WeatherData
  location: {
    name: string
    country: string
    localtime: string
  }
}

// Simple in-memory cache
const cache: Map<string, { data: WeatherResponse; timestamp: number }> = new Map()
const CACHE_DURATION = 10 * 60 * 1000 // 10 minutes

export async function getWeather(city: string): Promise<WeatherResponse | null> {
  const cacheKey = city.toLowerCase()
  const cached = cache.get(cacheKey)
  
  // Return cached data if valid
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }
  
  try {
    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`
    )
    
    if (!response.ok) {
      throw new Error('Weather fetch failed')
    }
    
    const data: WeatherResponse = await response.json()
    
    // Cache the result
    cache.set(cacheKey, { data, timestamp: Date.now() })
    
    return data
  } catch (error) {
    console.error('Weather API error:', error)
    return null
  }
}

// Map weather codes to animation types
export type WeatherAnimation = 'clear' | 'clouds' | 'rain' | 'snow' | 'thunder' | 'fog' | 'drizzle'

export function getWeatherAnimation(code: number, isDay: number): WeatherAnimation {
  // WeatherAPI condition codes: https://www.weatherapi.com/docs/weather_conditions.json
  
  // Thunder
  if ([1087, 1273, 1276, 1279, 1282].includes(code)) return 'thunder'
  
  // Snow
  if ([1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1255, 1258, 1261, 1264].includes(code)) return 'snow'
  
  // Rain (heavy)
  if ([1186, 1189, 1192, 1195, 1243, 1246].includes(code)) return 'rain'
  
  // Drizzle / Light rain
  if ([1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240].includes(code)) return 'drizzle'
  
  // Fog / Mist
  if ([1030, 1135, 1147].includes(code)) return 'fog'
  
  // Cloudy
  if ([1006, 1009].includes(code)) return 'clouds'
  
  // Partly cloudy
  if ([1003].includes(code)) return 'clouds'
  
  // Clear
  return 'clear'
}

// Get weather emoji for display
export function getWeatherEmoji(code: number): string {
  const animation = getWeatherAnimation(code, 1)
  
  switch (animation) {
    case 'thunder': return '⛈️'
    case 'snow': return '🌨️'
    case 'rain': return '🌧️'
    case 'drizzle': return '🌦️'
    case 'fog': return '🌫️'
    case 'clouds': return '☁️'
    case 'clear': return '☀️'
    default: return '🌤️'
  }
}
