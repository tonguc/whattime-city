/**
 * Application Constants
 * Uygulama genelinde kullanılan sabit değerler
 */

// API Endpoints
export const API_ENDPOINTS = {
  WEATHER: 'https://api.weatherapi.com/v1/current.json',
  FLAGS: 'https://flagcdn.com',
} as const

// Cache durations (ms)
export const CACHE_DURATION = {
  WEATHER: 10 * 60 * 1000,      // 10 dakika
  SEARCH: 5 * 60 * 1000,        // 5 dakika
} as const

// UI Constants
export const UI = {
  MAX_SEARCH_RESULTS: 6,
  MAX_FAVORITES: 10,
  DEBOUNCE_MS: 300,
} as const

// Routes
export const ROUTES = {
  HOME: '/',
  CITIES: '/cities',
  COUNTRIES: '/country',
  MAP: '/map',
  TOOLS: '/tools',
  WIDGET: '/widget',
} as const
