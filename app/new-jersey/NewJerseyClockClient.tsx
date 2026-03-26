'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NEW_JERSEY_TZ = 'America/New_York'
export default function NewJerseyClockClient() {
  return <HeroClockDisplay tz={NEW_JERSEY_TZ} countryCode="US" countryName="New Jersey" tzLabel="New York" />
}
