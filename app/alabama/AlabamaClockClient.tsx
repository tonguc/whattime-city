'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ALABAMA_TZ = 'America/Chicago'
export default function AlabamaClockClient() {
  return <HeroClockDisplay tz={ALABAMA_TZ} countryCode="US" countryName="Alabama" tzLabel="Chicago" />
}
