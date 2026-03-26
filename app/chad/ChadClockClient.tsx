'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CHAD_TZ = 'Africa/Ndjamena'
export default function ChadClockClient() {
  return <HeroClockDisplay tz={CHAD_TZ} countryCode="TD" countryName="Chad" tzLabel="WAT · UTC+1" />
}
