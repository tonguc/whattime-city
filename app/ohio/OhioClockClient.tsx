'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const OHIO_TZ = 'America/New_York'
export default function OhioClockClient() {
  return <HeroClockDisplay tz={OHIO_TZ} countryCode="US" countryName="Ohio" tzLabel="New York" />
}
