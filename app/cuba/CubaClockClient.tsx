'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CUBA_TZ = 'America/Havana'
export default function CubaClockClient() {
  return <HeroClockDisplay tz={CUBA_TZ} countryCode="CU" countryName="Cuba" tzLabel="CST · UTC-5" />
}
