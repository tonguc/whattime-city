'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const VIRGINIA_TZ = 'America/New_York'
export default function VirginiaClockClient() {
  return <HeroClockDisplay tz={VIRGINIA_TZ} countryCode="US" countryName="Virginia" tzLabel="New York" />
}
