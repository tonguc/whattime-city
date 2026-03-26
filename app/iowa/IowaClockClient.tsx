'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const IOWA_TZ = 'America/Chicago'
export default function IowaClockClient() {
  return <HeroClockDisplay tz={IOWA_TZ} countryCode="US" countryName="Iowa" tzLabel="Chicago" />
}
