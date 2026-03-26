'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MARYLAND_TZ = 'America/New_York'
export default function MarylandClockClient() {
  return <HeroClockDisplay tz={MARYLAND_TZ} countryCode="US" countryName="Maryland" tzLabel="New York" />
}
