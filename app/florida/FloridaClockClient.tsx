'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const FLORIDA_TZ = 'America/New_York'
export default function FloridaClockClient() {
  return <HeroClockDisplay tz={FLORIDA_TZ} countryCode="US" countryName="Florida" tzLabel="New York" />
}
