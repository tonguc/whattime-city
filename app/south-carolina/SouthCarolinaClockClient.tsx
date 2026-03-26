'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SOUTH_CAROLINA_TZ = 'America/New_York'
export default function SouthCarolinaClockClient() {
  return <HeroClockDisplay tz={SOUTH_CAROLINA_TZ} countryCode="US" countryName="South Carolina" tzLabel="New York" />
}
