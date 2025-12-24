/**
 * useWeather Hook
 * Hava durumu verisi fetch ve state yönetimi
 * 
 * @example
 * const { weather, weatherAnimation, isLoading } = useWeather(city.city)
 */

import { useState, useEffect, useCallback, useRef } from 'react'
import type { WeatherData, WeatherAnimation } from '@/core/types'
import { getWeather, getWeatherAnimation } from '@/lib/weather'

interface UseWeatherReturn {
  /** Hava durumu verisi */
  weather: WeatherData | null
  /** Animasyon tipi (clear, rain, snow, etc.) */
  weatherAnimation: WeatherAnimation
  /** Yükleniyor durumu */
  isLoading: boolean
  /** Manuel yenileme fonksiyonu */
  refetch: () => void
}

/**
 * Şehir için hava durumu verisi fetch eder
 * @param cityName - Şehir adı (örn: 'Istanbul', 'New York')
 */
export function useWeather(cityName: string): UseWeatherReturn {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [weatherAnimation, setWeatherAnimation] = useState<WeatherAnimation>('clear')
  const [isLoading, setIsLoading] = useState(false)
  
  // Track current request to prevent race conditions
  const requestIdRef = useRef(0)

  const fetchWeather = useCallback(async (city: string, requestId: number) => {
    setIsLoading(true)
    
    try {
      const data = await getWeather(city)
      
      // Only update if this is still the current request (prevent race conditions)
      if (requestId === requestIdRef.current && data) {
        setWeather(data.current)
        setWeatherAnimation(getWeatherAnimation(data.current.condition.code, data.current.is_day))
      }
    } catch (error) {
      // Only clear on error if this is still the current request
      if (requestId === requestIdRef.current) {
        console.error('Weather fetch error:', error)
      }
    } finally {
      // Only update loading state if this is still the current request
      if (requestId === requestIdRef.current) {
        setIsLoading(false)
      }
    }
  }, [])

  // Fetch weather when city changes
  useEffect(() => {
    if (!cityName) return
    
    // Increment request ID to invalidate any pending requests
    requestIdRef.current += 1
    const currentRequestId = requestIdRef.current
    
    fetchWeather(cityName, currentRequestId)
    
    // Cleanup: mark this request as stale
    return () => {
      // Next request will have a different ID, so this one won't update state
    }
  }, [cityName, fetchWeather])

  // Manual refetch function
  const refetch = useCallback(() => {
    if (!cityName) return
    
    requestIdRef.current += 1
    const currentRequestId = requestIdRef.current
    
    fetchWeather(cityName, currentRequestId)
  }, [cityName, fetchWeather])

  return {
    weather,
    weatherAnimation,
    isLoading,
    refetch
  }
}
