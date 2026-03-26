'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const WEST_VIRGINIA_TZ = 'America/New_York'
export default function WestVirginiaClockClient() {
  return <HeroClockDisplay tz={WEST_VIRGINIA_TZ} countryCode="US" countryName="West Virginia" tzLabel="New York" />
}
