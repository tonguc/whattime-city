'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CALIFORNIA_TZ = 'America/Los_Angeles'
export default function CaliforniaClockClient() {
  return <HeroClockDisplay tz={CALIFORNIA_TZ} countryCode="US" countryName="California" tzLabel="Los Angeles" />
}
