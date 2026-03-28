/**
 * Islamic Prayer Times Calculator
 * Uses suncalc library for sun position calculations
 */

import SunCalc from 'suncalc'

export interface PrayerTimes {
  fajr: string
  sunrise: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
}

export interface CalculationMethod {
  name: string
  label: string
  fajrAngle: number
  ishaAngle: number
  ishaMinutes?: number // If set, use minutes after maghrib instead of angle
}

export const CALCULATION_METHODS: CalculationMethod[] = [
  { name: 'isna', label: 'ISNA (North America)', fajrAngle: 15, ishaAngle: 15 },
  { name: 'mwl', label: 'Muslim World League', fajrAngle: 18, ishaAngle: 17 },
  { name: 'egyptian', label: 'Egyptian General Authority', fajrAngle: 19.5, ishaAngle: 17.5 },
  { name: 'umm-al-qura', label: 'Umm Al-Qura (Makkah)', fajrAngle: 18.5, ishaAngle: 0, ishaMinutes: 90 },
  { name: 'karachi', label: 'University of Karachi', fajrAngle: 18, ishaAngle: 18 },
  { name: 'tehran', label: 'Institute of Geophysics, Tehran', fajrAngle: 17.7, ishaAngle: 14 },
  { name: 'diyanet', label: 'Diyanet (Turkey)', fajrAngle: 18, ishaAngle: 17 },
]

type AsrMadhab = 'shafi' | 'hanafi'

function decimalToTime(decimal: number): string {
  if (isNaN(decimal) || decimal < 0 || decimal >= 24) return '--:--'
  const h = Math.floor(decimal)
  const m = Math.round((decimal - h) * 60)
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
}

function dateToDecimalHours(date: Date, timezone: string): number {
  try {
    const str = date.toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    })
    const [hours, minutes] = str.split(':').map(Number)
    return hours + minutes / 60
  } catch {
    return date.getUTCHours() + date.getUTCMinutes() / 60
  }
}

function getAsrTime(
  date: Date,
  lat: number,
  lng: number,
  timezone: string,
  madhab: AsrMadhab,
): number {
  // Get sun altitude at solar noon
  const times = SunCalc.getTimes(date, lat, lng)
  const noonPos = SunCalc.getPosition(times.solarNoon, lat, lng)
  const noonAlt = noonPos.altitude // radians

  // Shadow ratio: Shafi = 1, Hanafi = 2
  const shadowRatio = madhab === 'hanafi' ? 2 : 1

  // Shadow length at noon (in terms of object height)
  const noonShadow = Math.tan(Math.PI / 2 - noonAlt)

  // Asr angle: when shadow = shadowRatio + noonShadow
  const asrAlt = Math.atan(1 / (shadowRatio + noonShadow))

  // Find the time when sun reaches this altitude in the afternoon
  // We need to search from solar noon forward
  const solarNoonDecimal = dateToDecimalHours(times.solarNoon, timezone)

  // Binary search for the time
  let low = solarNoonDecimal
  let high = dateToDecimalHours(times.sunset, timezone)
  if (high < low) high += 24

  for (let i = 0; i < 20; i++) {
    const mid = (low + high) / 2
    const testDate = new Date(date)
    const h = Math.floor(mid)
    const m = Math.round((mid - h) * 60)
    testDate.setHours(h, m, 0, 0)

    // Convert back to UTC for SunCalc
    const utcStr = testDate.toLocaleString('en-US', { timeZone: timezone })
    const utcDate = new Date(utcStr)

    const pos = SunCalc.getPosition(utcDate, lat, lng)
    if (pos.altitude > asrAlt) {
      low = mid
    } else {
      high = mid
    }
  }

  return (low + high) / 2
}

export function calculatePrayerTimes(
  date: Date,
  lat: number,
  lng: number,
  timezone: string,
  method: CalculationMethod = CALCULATION_METHODS[0],
  madhab: AsrMadhab = 'shafi',
): PrayerTimes {
  // Register custom angles for Fajr
  SunCalc.addTime(-method.fajrAngle, 'fajr', 'fajrSet')

  // Register custom angles for Isha (if angle-based)
  if (!method.ishaMinutes) {
    SunCalc.addTime(-method.ishaAngle, 'ishaRise', 'isha')
  }

  const times = SunCalc.getTimes(date, lat, lng) as unknown as Record<string, Date>

  const fajr = dateToDecimalHours(times.fajr, timezone)
  const sunrise = dateToDecimalHours(times.sunrise, timezone)
  const solarNoon = dateToDecimalHours(times.solarNoon, timezone)
  // Dhuhr is a few minutes after solar noon
  const dhuhr = solarNoon + 2 / 60 // +2 minutes as safety margin

  const asr = getAsrTime(date, lat, lng, timezone, madhab)
  const maghrib = dateToDecimalHours(times.sunset, timezone)

  let isha: number
  if (method.ishaMinutes) {
    isha = maghrib + method.ishaMinutes / 60
  } else {
    isha = dateToDecimalHours(times.isha, timezone)
  }

  return {
    fajr: decimalToTime(fajr),
    sunrise: decimalToTime(sunrise),
    dhuhr: decimalToTime(dhuhr),
    asr: decimalToTime(asr),
    maghrib: decimalToTime(maghrib),
    isha: decimalToTime(isha),
  }
}
