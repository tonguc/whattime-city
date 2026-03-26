'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NORTH_MACEDONIA_TZ = 'Europe/Skopje'
export default function NorthMacedoniaClockClient() {
  return <HeroClockDisplay tz={NORTH_MACEDONIA_TZ} countryCode="MK" countryName="North Macedonia" tzLabel="CET · UTC+1" />
}
