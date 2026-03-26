'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NORTH_DAKOTA_TZ = 'America/Chicago'
export default function NorthDakotaClockClient() {
  return <HeroClockDisplay tz={NORTH_DAKOTA_TZ} countryCode="US" countryName="North Dakota" tzLabel="Chicago" />
}
