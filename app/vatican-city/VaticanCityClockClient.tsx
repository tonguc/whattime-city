'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const VATICAN_CITY_TZ = 'Europe/Vatican'
export default function VaticanCityClockClient() {
  return <HeroClockDisplay tz={VATICAN_CITY_TZ} countryCode="VA" countryName="Vatican City" tzLabel="CET · UTC+1" />
}
