'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NEVADA_TZ = 'America/Los_Angeles'
export default function NevadaClockClient() {
  return <HeroClockDisplay tz={NEVADA_TZ} countryCode="US" countryName="Nevada" tzLabel="Los Angeles" />
}
