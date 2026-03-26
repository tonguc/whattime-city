'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const GUYANA_TZ = 'America/Guyana'
export default function GuyanaClockClient() {
  return <HeroClockDisplay tz={GUYANA_TZ} countryCode="GY" countryName="Guyana" tzLabel="GYT · UTC-4" />
}
