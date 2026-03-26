'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NORTH_CAROLINA_TZ = 'America/New_York'
export default function NorthCarolinaClockClient() {
  return <HeroClockDisplay tz={NORTH_CAROLINA_TZ} countryCode="US" countryName="North Carolina" tzLabel="New York" />
}
