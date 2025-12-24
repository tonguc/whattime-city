/**
 * Weather Types
 * Hava durumu verisi için type tanımları
 */

export interface WeatherCondition {
  text: string
  code: number
  icon: string
}

export interface WeatherData {
  temp_c: number
  temp_f: number
  condition: WeatherCondition
  humidity: number
  wind_kph: number
  feelslike_c: number
  is_day: number
}

export interface WeatherLocation {
  name: string
  country: string
  localtime: string
}

export interface WeatherResponse {
  current: WeatherData
  location: WeatherLocation
}

export type WeatherAnimation = 
  | 'clear' 
  | 'clouds' 
  | 'rain' 
  | 'snow' 
  | 'thunder' 
  | 'fog' 
  | 'drizzle'
