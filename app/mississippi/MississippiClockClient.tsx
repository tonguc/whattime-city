'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MISSISSIPPI_TZ = 'America/Chicago'
export default function MississippiClockClient() {
  return <HeroClockDisplay tz={MISSISSIPPI_TZ} countryCode="US" countryName="Mississippi" tzLabel="Chicago" />
}
