// Basitleştirilmiş güneş hesaplayıcı
export function getSunTimes(date: Date, lat: number) {
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
  
  // Güneş doğuşu ve batışı (saat olarak)
  const solarNoon = 12
  const sunrise = solarNoon - daylightHours / 2
  const sunset = solarNoon + daylightHours / 2
  
  return { sunrise, sunset, daylightHours }
}

export type TimeOfDay = 'night' | 'dawn' | 'day' | 'dusk'

export function getTimeOfDay(localTime: Date, lat: number, lng: number): TimeOfDay {
  const hour = localTime.getHours() + localTime.getMinutes() / 60
  const { sunrise, sunset } = getSunTimes(localTime, lat)
  
  // Sabah geçişi: sunrise-1 ile sunrise+1 arası
  const dawnStart = sunrise - 1
  const dawnEnd = sunrise + 1
  
  // Akşam geçişi: sunset-1 ile sunset+1 arası
  const duskStart = sunset - 1
  const duskEnd = sunset + 1
  
  if (hour >= dawnStart && hour < dawnEnd) {
    return 'dawn'
  } else if (hour >= dawnEnd && hour < duskStart) {
    return 'day'
  } else if (hour >= duskStart && hour < duskEnd) {
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
