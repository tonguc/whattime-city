// Basitleştirilmiş güneş hesaplayıcı
export function getSunTimes(date: Date, lat: number, lng: number) {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
  )
  
  // Güneş deklinasyonu (basitleştirilmiş)
  const declination = -23.45 * Math.cos((360 / 365) * (dayOfYear + 10) * (Math.PI / 180))
  
  // Gün uzunluğu hesabı
  const latRad = lat * (Math.PI / 180)
  const decRad = declination * (Math.PI / 180)
  
  let cosHourAngle = -Math.tan(latRad) * Math.tan(decRad)
  cosHourAngle = Math.max(-1, Math.min(1, cosHourAngle))
  
  const hourAngle = Math.acos(cosHourAngle) * (180 / Math.PI)
  const daylightHours = (2 * hourAngle) / 15
  
  // Solar noon is around 12:00 solar time, but actual local noon differs by longitude
  // Each 15° of longitude = 1 hour difference from standard time
  // We calculate the offset from the timezone's central meridian
  const solarNoon = 12
  const sunrise = solarNoon - daylightHours / 2
  const sunset = solarNoon + daylightHours / 2
  
  return { sunrise, sunset, daylightHours }
}

export type TimeOfDay = 'night' | 'dawn' | 'day' | 'dusk'

export function getTimeOfDay(utcTime: Date, lat: number, lng: number, timezone?: string): TimeOfDay {
  // Get local hour using timezone if provided, otherwise estimate from longitude
  let localHour: number
  
  if (timezone) {
    try {
      // Get actual local time in the timezone
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
  
  const { sunrise, sunset } = getSunTimes(utcTime, lat, lng)
  
  // Sabah geçişi: sunrise-0.5 ile sunrise+0.5 arası (30 dakika)
  const dawnStart = sunrise - 0.5
  const dawnEnd = sunrise + 0.5
  
  // Akşam geçişi: sunset-0.5 ile sunset+0.5 arası (30 dakika)
  const duskStart = sunset - 0.5
  const duskEnd = sunset + 0.5
  
  if (localHour >= dawnStart && localHour < dawnEnd) {
    return 'dawn'
  } else if (localHour >= dawnEnd && localHour < duskStart) {
    return 'day'
  } else if (localHour >= duskStart && localHour < duskEnd) {
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
