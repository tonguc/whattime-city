/**
 * Sun Calculator - Astronomical calculations using suncalc library
 * 
 * This module provides accurate sunrise/sunset times and time-of-day
 * calculations based on actual sun position for any location on Earth.
 */

import SunCalc from 'suncalc'

export interface SunTimes {
  sunrise: number      // Decimal hours (e.g., 6.5 = 06:30)
  sunset: number       // Decimal hours (e.g., 18.75 = 18:45)
  daylightHours: number
  dawn: number         // Civil twilight start
  dusk: number         // Civil twilight end
  solarNoon: number
}

/**
 * Get precise sun times for a location using suncalc
 * Returns times in decimal hours (local time)
 */
export function getSunTimes(date: Date, lat: number, lng: number, timezone?: string): SunTimes {
  // Get sun times from suncalc (returns Date objects in UTC)
  const times = SunCalc.getTimes(date, lat, lng)
  
  // Convert UTC Date to local decimal hours
  const toLocalDecimalHours = (utcDate: Date): number => {
    if (!utcDate || isNaN(utcDate.getTime())) {
      // Fallback for polar regions where sun doesn't set/rise
      return 12 // Return noon as fallback
    }
    
    if (timezone) {
      try {
        const localTimeStr = utcDate.toLocaleTimeString('en-US', {
          timeZone: timezone,
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        })
        const [hours, minutes] = localTimeStr.split(':').map(Number)
        return hours + minutes / 60
      } catch {
        // Fallback to UTC-based calculation
        return utcDate.getUTCHours() + utcDate.getUTCMinutes() / 60 + lng / 15
      }
    }
    
    // Estimate local time from longitude
    const utcHours = utcDate.getUTCHours() + utcDate.getUTCMinutes() / 60
    let localHours = utcHours + lng / 15
    while (localHours < 0) localHours += 24
    while (localHours >= 24) localHours -= 24
    return localHours
  }
  
  const sunrise = toLocalDecimalHours(times.sunrise)
  const sunset = toLocalDecimalHours(times.sunset)
  const dawn = toLocalDecimalHours(times.dawn)        // Civil twilight start
  const dusk = toLocalDecimalHours(times.dusk)        // Civil twilight end
  const solarNoon = toLocalDecimalHours(times.solarNoon)
  
  // Handle edge cases (polar regions)
  const daylightHours = sunset > sunrise ? sunset - sunrise : 24 - sunrise + sunset
  
  return { sunrise, sunset, daylightHours, dawn, dusk, solarNoon }
}

export type TimeOfDay = 'night' | 'dawn' | 'day' | 'dusk'

/**
 * Determine time of day based on sun position
 * Uses civil twilight definitions from suncalc:
 * - Dawn: Civil twilight start (sun 6° below horizon) to sunrise
 * - Day: Sunrise to sunset
 * - Dusk: Sunset to civil twilight end (sun 6° below horizon)
 * - Night: Civil twilight end to civil twilight start
 */
export function getTimeOfDay(utcTime: Date, lat: number, lng: number, timezone?: string): TimeOfDay {
  // Get local hour using timezone if provided
  let localHour: number
  
  if (timezone) {
    try {
      const localTimeStr = utcTime.toLocaleTimeString('en-US', { 
        timeZone: timezone, 
        hour: 'numeric', 
        minute: 'numeric',
        hour12: false 
      })
      const [hours, minutes] = localTimeStr.split(':').map(Number)
      localHour = hours + minutes / 60
    } catch {
      // Fallback to longitude-based calculation
      const utcHour = utcTime.getUTCHours() + utcTime.getUTCMinutes() / 60
      localHour = utcHour + lng / 15
      while (localHour < 0) localHour += 24
      while (localHour >= 24) localHour -= 24
    }
  } else {
    // Estimate from longitude (solar time)
    const utcHour = utcTime.getUTCHours() + utcTime.getUTCMinutes() / 60
    localHour = utcHour + lng / 15
    while (localHour < 0) localHour += 24
    while (localHour >= 24) localHour -= 24
  }
  
  // Get precise sun times using suncalc
  const sunTimes = getSunTimes(utcTime, lat, lng, timezone)
  
  // Use civil twilight for dawn/dusk (more visually accurate than exact sunrise/sunset)
  // suncalc's dawn = civil twilight start (sun 6° below horizon)
  // suncalc's dusk = civil twilight end (sun 6° below horizon)
  
  const { dawn, sunrise, sunset, dusk } = sunTimes
  
  // Handle polar regions where sun doesn't set/rise
  if (isNaN(sunrise) || isNaN(sunset)) {
    // Check sun altitude to determine if it's polar day or night
    const sunPos = SunCalc.getPosition(utcTime, lat, lng)
    return sunPos.altitude > 0 ? 'day' : 'night'
  }
  
  // Determine time of day based on sun position
  // Dawn: from civil twilight start to sunrise
  // Day: from sunrise to sunset  
  // Dusk: from sunset to civil twilight end
  // Night: rest of the time
  
  if (localHour >= dawn && localHour < sunrise) {
    return 'dawn'
  } else if (localHour >= sunrise && localHour < sunset) {
    return 'day'
  } else if (localHour >= sunset && localHour < dusk) {
    return 'dusk'
  } else {
    return 'night'
  }
}

export function formatSunTime(decimalHour: number): string {
  const hours = Math.floor(decimalHour)
  const minutes = Math.round((decimalHour - hours) * 60)
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}
